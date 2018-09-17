---

title: Lab &ndash; Asymmetric Encryption
number: 3
---

<div class='alert alert-danger'><strong>Important:</strong> To receive full credit, you must complete Part 1 of the lab by the day marked in the calendar, which entails generating a PGP keypair, uploading your public key to a keyserver, and submitting your key's fingerprint on Canvas. This is required for the PGP key signing class activity.</div>

<div class='alert alert-info'>I recommend using the tools in the Windows VM for Part 1, although you are free to install GPG on your own machine.</div>

# Part 1. Install PGP and Create a Public-Private Key Pair

On the Windows 10 VM, open the app `Kleopatra`. This is an app that interfaces with gpg, allowing you to create and manage gpg public/private keypairs.

Do the following:

* File > New Certificate
* Create a personal OpenPGP key pair
* Enter your first and last name and your **identikey@colorado.edu** email. Do *not* click "OK" yet.
* Advanced Settings > change the keylength to `4096 bits` for both fields.
* Create the key. If you enter a passphrase (you should, although you don't have to), *do not forget your passphrase*.
* Open your newly-created key. Open the "User-IDs & Certifications" tab. Highlight your key, and click "Add". Add your **first.last@colorado.edu** email variant.
* Take note of your key "Key-ID" displayed in the Kleopatra interface. *This is your short-form key fingerprint.* If you double-click the key, the dialog will display your full-length key fingerprint.
* Right-click your key and "Export Certificates to Server..." By default, this will send your key to `keys.gnupg.net`, from where it will replicate to other keyservers around the world.
    * Alternatively, you can right-click and "export certificate", then save the `.asc` file, open this file in notepad which will begin with a line like `-----BEGIN PGP PUBLIC KEY BLOCK-----`, and copy-paste this key into the big input field on `pgp.mit.edu`. It's the same thing. In fact, if you wanted to send someone your public key without relying on a keyserver, you could sent them the `.asc` file.
* Use a web browser to browse to a keyserver such as `pgp.mit.edu` and verify that when you search by your email address or fingerprint, your key is displayed, with the correct keyID,  that it is 4096 bits, and that both of your `@colorado.edu` email addresses are associated with your key.
    * To search by your key-id or fingerprint, prefix the value with `0x`, which is the prefix for hex values. For example, to search for my key-id, `8DC01F3A`, I would enter the following search query into `pgp.mit.edu`: `0x8DC01F3A`.
* Once you have verified the above, submit your fingerprint on canvas.

<div class='alert alert-info'>It is important that <strong>both</strong> your identikey and first.last email variants are tied to your key, so that you can get credit for this part of the lab. If you forget, you can add and then re-export, and your key will be updated on the keyserver.</div>


## Part 1 deliverable

In summary, using Kleopatra,

* upload your key to a keyserver
* key length is 4096 bits
* both first.last@colorado.edu and identikey@colorado.edu addresses are associated with your key
* submit your key key-id or fingerprint on canvas

**Q:** Why do we need a 4096-bit key? Isn't that overkill?

**A:** [To better future-proof your key](https://www.yubico.com/2015/02/big-debate-2048-4096-yubicos-stand/), Generate a 4096-bit key, not the default 2048-bit one. 


# Part 2. Understanding Asymmetric Cryptography

<div class='alert alert-info'>Note: To help you answer the questions in this section, view <a href='https://youtu.be/Z8M2BTscoD4](https://youtu.be/Z8M2BTscoD4'>this “RSA Algorithm” video</a>.</div>

1. **Key Exchange Problem.** Imagine 200 people wish to communicate securely using symmetric keys, one symmetric key for each pair of people. How many symmetric keys would this system use in total? (See [http://en.wikipedia.org/wiki/Metcalf%27s_law](http://en.wikipedia.org/wiki/Metcalf%27s_law)). 

    **Answer:**

2. Does a 256-bit RSA key (a key with a 256-bit modulus) provide strength similar to that of a 256-bit AES key? Explain. Note: This site gives estimates for good key lengths: 

    [http://www.keylength.com](http://www.keylength.com)
	
	Help interpreting this site: If you were to select "Compare all methods", and then enter the year "2030", the “Method” column means “group that makes recommendations using their method” (recall that NIST held the competition that resulted in the AES winner being selected). “Date” means how long you’ll be secure until. “Symmetric” means the minimum keysize you would need to be secure for that long using a symmetric method such as AES. “Factoring Modulus” means the minimum keysize you would need to be secure for that long using an asymmetric method such as RSA. 

	**Answer:** 

3. Complete encryption and decryption using the RSA algorithm, for the following data (show all work): `p = 5, q = 11, e = 3, M = 9`. See the “RSA Algorithm” video link above. Also:

    [http://en.wikipedia.org/wiki/RSA_(cryptosystem)](http://en.wikipedia.org/wiki/RSA_(cryptosystem))

	**Answer:**

4. In a public-key system using RSA, you intercept the ciphertext, `C=10`, sent to a user whose public key is `e=5, n=35`.  What is the plaintext `M`?

	**Answer:**

