---
title: Securing paypal "smart button" client via shared-secret hash signatures
description: >
  The paypal javascript client by default is totally open to integrity attacks.
  That's a problem if paypal orders trigger webhooks that do business logic.
  This post describes an approach that doesn't require a database.
tags: tools
category: professional
---

Paypal promotes its ["smart buttons"](https://paypal.com/buttons/smart) as a way to integrate purchasing on websites.[^1]
However, by default, all of their purchasing logic, including purchase amounts for
specific items, happens in the browser via javascript. This means that an attacker could edit
javascript and modify payment amounts. That's a problem if the vendor sets
up webhook automation for paypal purchases to trigger business logic.

For example, the suggested code looks like this. Note that the amount is set on-page:

```javascript
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        "amount": {
          "currency_code": "USD",
          "value": 40
        }}]
    });
  },
  // ... snipped ...
})
```



To secure smart button transaction business logic, [most](https://stackoverflow.com/questions/57878836/how-can-i-secure-transactions-made-with-client-side-paypal-smart-checkout-button) [posts](https://stackoverflow.com/questions/65361628/paypal-javascript-sdk-understand-security-problems-on-the-client-side?noredirect=1&lq=1) on the internet that I saw suggest
that the only way to secure this is to have the paypal javascript
call server routes which do the actual order creation and validation. The server
saves validated order ids to a database, and any webhooks check that database
before performing business logic.[^2]

That approach works. However, it requires a
database. But [the security-assignments.com storefront](https://security-assignments.com/store)
is database-free, although it does use
some "serverless" cloud functions. My business logic adds email addresses to a restricted-access google group.
Customers pay (`amount`) to have their email addresses (`gcp_email`) added to that google group.

I am using two Google Cloud Functions: one for paypal order creation, and another for paypal
webhook processing.

I thought of a way using symmetric-encryption digital
signatures to authenticate paypal orders. It uses a shared secret (`shared_secret`) that both
google cloud functions have access to. The cloud function that creates the paypal order
saves the signature to the order metadata. The cloud function that handles the paypal webhook
checks that signature against its own calculation of the same.

My signature algorithm hashes three fields: (1) `gcp_email`, (2) `amount`, and (3) `shared_secret`.
Like this in python ([approximate code location](https://github.com/security-assignments/paypal-create-order/blob/18f8a550ed621a9ac33427a08c2720ea61804ade/paypal_order.py#L35-L57)):

```python
import hashlib
import os

m = hashlib.sha256()
SHARED_SECRET = os.environ['SHARED_SECRET']
hash_me = f'{gcp_email}|{amount}|{SHARED_SECRET}'
m.update(hash_me.encode())
signature = m.hexdigest()

# add the signature to the paypal json
order_json = {
  "purchase_units": [{        
      "custom_id": signature,
      "invoice_id": gcp_email,
      "amount": {
        "value": amount,
        "currency_code": "USD"
      },
      # ... snipped ...
  }]
  # ... snipped ...
}
```

Then later, the paypal webhook checks the signature, before adding `gcp_email` to the google group ([approximate code location](https://github.com/security-assignments/paypal-webhook/blob/409ab9b2320b5349122cd1433b4684052dbc3a82/main.py#L125-L134)):


```python
webhook_event_json = request.get_json()
custom_sig = webhook_event_json['resource']['custom_id']

def custom_sig_verify(gcp_email, amount, custom_sig):

    SHARED_SECRET = os.environ['PAYPAL_SHARED_SECRET']

    hash_me = f'{gcp_email}|{amount}|{SHARED_SECRET}'
    m = hashlib.sha256()
    m.update(hash_me.encode())
    sig = m.hexdigest()

    return sig == custom_sig
```

The paypal javascript on <https://security-assignments.com/store> calls the
first webhook to create the order, and doesn't do any server-side processing for
the approval step. Similar to this:

```javascript
paypal.Buttons({
    createOrder: function(data, actions) {
      return fetch(gcp_cloud_function_paypal_order_create_endpoint, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({'gcp_email': gcp_email, 'paypal_mode': PAYPAL_MODE})
      }).then(function(res){
        return res.json()
      }).then(function(data){
        return data.id
      })
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        // ...snipped...
      });
    },
  })
```

Tada! No database!

Since my paypal client-id is still in the sourcecode, an attacker could still
craft api calls and be annoying and pay me whatever they wanted, and I would
have the inconvenience of having to refund their order. But the business logic
would never trigger.

Go on and [F12](https://twitter.com/racheltobac/status/1448732967967223816?lang=en) <https://security-assignments.com/store>!

---

Links to the source code repos below. If you see a problem or an improvement, please open an issue on the repos!

<a class='btn btn-success' href='https://github.com/security-assignments/paypal-create-order'>Go to paypal order creation repo</a>

<a class='btn btn-success' href='https://github.com/security-assignments/paypal-webhook'>Go to the paypal webhook repo</a>

---

[^1]: If you don't need any fancy modification, I suggest using their "buy now"
    [hosted buttons](https://www.paypal.com/buttons/). Since the button logic is
    hosted on paypal.com servers, the buttons are secure against client-side
    modification. You won't find that page linked from hardly anywhere on
    paypal.com, though!

[^2]: The other button security solution I saw on paypal requires Java and is
    [legacy](https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/integration-guide/encryptedwebpayments/).
