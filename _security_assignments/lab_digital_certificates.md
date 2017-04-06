---

title: Lab &ndash; Digital Certificates
number: 4
---

<div class='alert alert-warning'>
Todos
<ul>
<li>Replace with adele instead of TA</li>
<li>Potentially drop S/MIME</li>
</ul>
</div>

There are several different email clients you can use to accomplish this task. If you don’t know which one you want to use, at the end of this document, I listed a few resources and tutorials that may be helpful for you.

# Part 1

## Part 1a. Sign the public keys from the key signing party

1.	Go to Learning Suite, IS 560, Content, and Files. Download the file, “IS 560 2016.asc” and import the keyring into your PGP client.
2.	For each identity you verified during the keysigning party (i.e., you witnessed the person show his/her government ID and attest that his/her fingerprint was correct), sign that person’s PGP key.
3.	Upload each public key you sign to a public keyserver so that others can see that you trust the key.

## Part 1b. Upload your PGP key to a keyserver

1.	Ensure that your public key is uploaded to a PGP key server like http://pgp.mit.edu.  (In Kleopatra, you can upload it to OpenPGP by highlighting your key, right-clicking it, and selecting export certificates to server.)
2.	Ensure that your public key is available on public key servers has been signed by members of the class. To do this, you can re-download or refresh your public key from the key server.
3.	Send an encrypted message using your PGP key to Josh Haws at joshhaws0@gmail.com. 

## Part 1c. Send and receive an encrypted email via PGP
	
1.	Send an encrypted email to TA Josh Haws at joshhaws0@gmail.com (the TA’s key is contained in the keyring you imported for the keysigning party. The TA will respond with an encrypted message using your PGP key. Paste the plaintext of the message you receive below.

    **Plaintext 1:** 
    
# Part 2. Install an S/MIME Certificate

S/MIME, which stands for Secure/Multipurpose Internet Mail Extensions, is a secure email standard invested by RSA Data Security Inc. It is an alternative to the PGP “web of trust” model that uses standard X.509 certificates used for SSL.

1.	Create an S/MIME certificate using one of the following free S/MIME services:

    * 	StartCom
    * 	Secorio
    * 	InstantSSL / Comodo
    * 	TC TrustCenter

2.	Send an email signed with your S/MIME certificate to joshhaws0@gmail.com. In order to do this, you’ll need to install the certificate in your browser, then export it from the settings/options tab in your browser. Then you can import it into your email client.

3.	The TA will respond with a second encrypted message using your S/MIME certificate. Paste the plaintext of the message you receive below.

    **Plaintext 2:**

4.	What algorithm(s) does your certificate use for encryption/signing? What is the key length?

    **Answer:**

5.	Examine your S/MIME certificate. What information does it contain beyond your public key? 

    **Answer:**

# Part 3. Overall Questions

1.	How is trust handled differently by S/MIME and PGP public key?

    **Answer:** 

    Which one do you think is more user-friendly?

    **Answer:**  

2.	Which system do you prefer, S/MIME or PGP?

    **Answer:** 

# Part 4. Communicate Securely with Signal or RedPhone

1.	Read about WhisperSystem’s Signal app here:

    https://theintercept.com/2015/03/02/signal-iphones-encrypted-messaging-app-now-supports-text/

2.	Install the app “Signal” on an iOS or Android device (if you don’t have an iOS or Android device, borrow one from a friend). Ask a partner (friend or classmate) to do the same.

3.	Using Signal, call or send a text message to your partner.

4.	How does your experience using Signal compare to using encrypted email with PGP and S/MIME?


# Resources

Below are some recommendations if you aren’t sure where to start.

*	Using PGP with Windows with Thunderbird and Enigmail: https://ssd.eff.org/en/module/how-use-pgp-windows 
*	https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages
*	For Signal for Android: https://ssd.eff.org/en/module/how-use-signal-android 
*	For Signal for iPhone: https://ssd.eff.org/en/module/how-use-signal-ios

