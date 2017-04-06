---

title: Lab &ndash; Asymmetric Encryption
number: 3
---

<div class='alert alert-danger'><strong>Important:</strong> To receive full credit, you must complete Part 1 of the lab by end of day Friday (marked in the calendar) which entails setting up GPG on your computer and sending Dr. Eargle your PGP public (not private) key. This is required for the PGP key signing class activity on Monday (marked in the calendar). Instructions for creating your PGP public key is described in the “Install PGP and Create a Public-Private Key Pair” section in this document.</div>

# Part 1. Install PGP and Create a Public-Private Key Pair

In this section of the lab, you will generate a PGP public-private key pair. You can do this using a variety of software, including the free implementation of PGP, GPG. For Mac users, I recommend using Apple Mail and GPG Tools (https://gpgtools.org). For Windows users, I recommend Gpg4Win (not the Lite version; http://www.gpg4win.org) in conjunction with Outlook, Thunderbird, or Claw Mail. 
A setup guide for GPG Tools (for Mac users) is available at: 

[http://support.gpgtools.org/kb/how-to/first-steps-where-do-i-start-where-do-i-begin](http://support.gpgtools.org/kb/how-to/first-steps-where-do-i-start-where-do-i-begin)

A setup guide for Gpg4Win (Windows users) is available at: 

[http://www.gpg4win.org/doc/en/gpg4win-compendium_11.html](http://www.gpg4win.org/doc/en/gpg4win-compendium_11.html)

Save this key in a text file with the extension “.asc” and email this file to Dr. Eargle.  With gpg4win, do this by clicking “Create a backup of your key pair,” and make sure to select the ASCII armor option.

Note: Your PGP public key should be 4096-bits in length. Also, make sure that your public key includes all of the email address you want to send and receive encrypted messages with. Finally, make sure that you include your first and last name so that people can look up your public key on a key server like pgp.mit.edu.

Important: You should end up with a .asc file that contains the following string at the top of the file: 

`-----BEGIN PGP PUBLIC KEY BLOCK-----`

If instead your .ASC file contains the string:

`-----BEGIN PGP PRIVATE KEY BLOCK-----`

Then is the wrong key. Do NOT send this private key to Dr. Eargle.

Finally, record your PGP fingerprint below. For example, Dr. Eargle’s PGP fingerprint is [on his homepage](https://daveeargle.com).

**Your PGP fingerprint:**



## Part 2. Understanding Asymmetric Cryptography

Note: To help you answer the questions in this section, view this “RSA Algorithm” video:

[https://youtu.be/Z8M2BTscoD4.](https://youtu.be/Z8M2BTscoD4.)

### Key Exchange Problem

1. Imagine 200 people wish to communicate securely using symmetric keys, one symmetric key for each pair of people. How many symmetric keys would this system use in total? (See [http://en.wikipedia.org/wiki/Metcalf%27s_law](http://en.wikipedia.org/wiki/Metcalf%27s_law)). 

    **Answer:**

2. Does a 256-bit RSA key (a key with a 256-bit modulus) provide strength similar to that of a 256-bit AES key? Explain. Note: This site gives estimates for good key lengths: 

    [http://www.keylength.com](http://www.keylength.com)

	**Answer:** 

3. Complete encryption and decryption using the RSA algorithm, for the following data (show all work): `p = 5, q = 11, e = 3, M = 9`. See the “RSA Algorithm” video link above. Also:

    [http://en.wikipedia.org/wiki/RSA_(cryptosystem)](http://en.wikipedia.org/wiki/RSA_(cryptosystem))

	**Answer:**

4. In a public-key system using RSA, you intercept the ciphertext, `C=10`, sent to a user whose public key is `e=5, n=35`.  What is the plaintext `M`?

	**Answer:**

