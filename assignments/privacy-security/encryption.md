---
layout: page
title: Encryption assignment
last_updated: 2016-04-13
excerpt: 'Students take on the role of a journalist as they watch and follow instructions in the [voice-obfuscated video tutorial](https://vimeo.com/56881481) that Edward Snowden prepared for Glen Greenwald in an attempt to train him in how to encrypt email communications so that the NSA papers could be leaked. Students create their own key pair and then exchange encrypted and signed messages with the instructor.'
---

This assignment is a hands-on dive into encrypted communications. Students take on the role of a journalist as they watch and follow instructions in the [voice-obfuscated video tutorial](https://vimeo.com/56881481) that Edward Snowden prepared for Glen Greenwald in an attempt to train him in how to encrypt email communications so that the NSA papers could be leaked. Students create their own key pair and then exchange encrypted and signed messages with the instructor. The assignment is complete once students demonstrate that they can encrypt and decrypt messages, and sign and verify signatures.  

When I did the assignment, I used class time to go through the video, pausing it so that I could give additional insights and to allow students to execute the steps. After class, I sent the below reminder message with assignment instructions.

At the bottom of the page is the secret message that I encrypted with their key after I retrieved it from a keyserver.

### Student instructions

<div class='well' markdown="1">

Basic steps by way of reminder:

1. Install GPG (Mac users, see the note below. You'll want to install GPGTools).
2. Create a key for yourself
3. Publish your public key. Verify that it published.
4. Import my public key from a key server (dave@daveeargle.com)
5. Send me your public key via email, or send me the name / email address you used to when you created your key pair. I will send you back a secure message with a secret code in it.
6. Follow the directions in my secret message and you will win a prize!


#### Note for Mac users

Hi yinz, I found out that if you installed GPGTools you got some neat tools you can use for encrypting text or files using your certificates / keys. You can encrypt any text you type if you highlight it then right-click it and select "Services > OpenGPG: Encrypt." That should give you encrypted text that I will be abe to decrypt if you select my key. Note: if you want to be able to decrypt your own message later, you should also select your key when you are encrypting.

Note: when you type the secret message, use something simple like TextEdit or Notes as opposed to Word. With a simple application you'll get the right-click services menu, whereas you might not get that within Word.

See [this link](https://gpgtools.tenderapp.com/kb/gpgservices-faq/how-to-encrypt-and-sign-text-or-files-with-gpgservices).

</div>

### The secret message I used, in plaintext

<div class='well' markdown="1">

I found your public key, and I am using it to send you this very important encrypted instruction. Ciphertext below:

I found the following coordinates for the rebel base. The coordinates of the rebel base are:
Latitude: 40.4424925
Longitude: -79.94255279999999

Plug the coordinates into http://www.gps-coordinates.net/ and tell me, where is the rebel base?

Reply to me with an encrypted message. Use my public key to encrypt it. You can find me on the key servers under email address dave@daveeargle.com if you don't already have my key.

_Be sure to sign the message so I know you sent it._ If you're using a Mac, there's a "sign" checkbox to the left of the "encrypt" button. There's a similar checkbox for Windows users.

If you reply to me with an encrypted message, I'll deliver the goods to you. (The goods are a pass on one quiz.)

Yours,
-- Margaret Thatcher

</div>

