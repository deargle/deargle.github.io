---

title: Lab &ndash; Digital Certificates
number: 4
---

There are several different email clients you can use to accomplish this task. If you don’t know which one you want to use, at the end of this document, I listed a few resources and tutorials that may be helpful for you. I am familiar with the process for Microsoft Outlook and Thunderbird/Enigmail. You'll have to scour the internet for help for other clients.

<div class='alert alert-info'>

<p>If you'd like, you can install Microsoft Office / Outlook onto your Windows VM (or onto your Mac), <a href='https://oit.colorado.edu/services/messaging-collaboration/microsoft-office-365/help/proplus'>available for free from CU</a>, so that you can use Outlook for this assignment. I would have installed it for you into the VM, but it's tied to your IdentiKey if you use that link.</p>

<p>But Thunderbird is just as viable as Outlook for this assignment.</p></div>

# Part 1

## Part 1a. Sign the public keys from the key signing party

1.	Go to *location on D2L TBA*. Download the file, “*FILE TBA*.asc” and import the keyring into your PGP client.
2.	For each identity you verified during the keysigning party (i.e., you witnessed the person show his/her government ID and attest that his/her fingerprint was correct), sign that person’s PGP key.
3.	Upload each public key you sign to a public keyserver so that others can see that you trust the key.

## Part 1b. Upload your PGP key to a keyserver

1.	Ensure that your public key is uploaded to a PGP key server like [http://pgp.mit.edu](http://pgp.mit.edu).  (In Kleopatra, you can upload it to OpenPGP by highlighting your key, right-clicking it, and selecting "export certificates to server". Other key-management software should have similar easy-to-use functionality.)
2.	Ensure that your public key available on public key servers has been signed by members of the class. To do this, you can re-download or refresh your public key from the key server, then view your key details.

## Part 1c. Send and receive an encrypted email via PGP
	
For this part, you'll communicate with Adele, the friendly PGP robot. You can use whatever email client you like.
* If you're using Outlook, you should have a GpgOL tab during message composition that lets you encrypt/sign.
* If you're using Thunderbird, the walkthroughs at the bottom teach you how to use the Enigmail addon.

1.  Send a plaintext message to Adele the robot (adele-en@gnupp.de) with your certificate included either via pasting your .asc keyfile contents into the message, or by including your .asc public key as an attachment. [See this link for help.](https://www.gpg4win.org/doc/en/gpg4win-compendium_13.html#sec_publishPerEmail)
	* If you've done it correctly, Adele will reply in a moment acknowledging receipt of your public key. She will now be able to send you encrypted responses. In fact, her response to you should have been encrypted with your public key.
	* 	Adele will also respond with her public key. Import it into your keyring: you could copy its contents into a txt document, 
		give it an .asc extension, and import it that way, or some keyring tools let you import keys from the clipboard. (Remember, keyring managers include Kleopatra and Enigmail. They all pull information from the same place.)

1.	Make up a message to send to Adele. Send it to her, encrypting it using her public key. Adele should respond with a message encrypted with your PGP key. Once you've figured it out, decrypt the message she sends back to you, and paste the plaintext of the message you receive below.
    
	**Plaintext 1:** 
	
	* 	Gotcha -- I don't know why but when I send messages to Adele from my @colorado.edu faculty account, it takes up to a day to get a response. But when I send from a Google account, I get a response within 60 seconds or less. 
		If you're not getting a response form Adele, I'll fill in -- do the steps substituting me instead (but give Adele a shot, she's helpful for testing keys and whatnot.)
	* 	Gotcha #2 -- in Enigmail for Thunderbird, Adele will complain that encrypted messages to her are "truncated" unless you click "Enigmail" and change to "Use Inline PGP." This isn't a problem for normal humans, just for Adele the robot.
	
	
	![](../images/lab_cert_1.png){: width='30%'}	
	
    
# Part 2. Install an S/MIME Certificate

S/MIME, which stands for Secure/Multipurpose Internet Mail Extensions, is a secure email standard invented by RSA Data Security Inc. It is an alternative to the PGP “web of trust” model that uses standard X.509 certificates used for SSL.

1.	Create an S/MIME certificate using one of the following free S/MIME services:
    * 	<del>StartCom</del> [Their certificate was revoked September 2017!](https://arstechnica.com/information-technology/2017/07/google-drops-the-boom-on-wosign-startcom-certs-for-good/)
    * 	Secorio
    * 	InstantSSL / Comodo
    * 	TC TrustCenter
	* 	See [this link](http://kb.mozillazine.org/Getting_an_SMIME_certificate) for links
	
2.	Send an email *signed with your S/MIME certificate* to Dr. Eargle. In order to do this, you’ll need to install the certificate in your browser, then export it from the settings/options tab in your browser. Then you can import it into your email client.
	1. I recommend _not_ using Chrome for this. I have tested Firefox and it works well. It's sort of convoluted, but it's doable.
	2. I recently used InstantSSL / Comodo. Some pointers:
		* The generation request can take a few minutes before instructions are emailed to you.
		* [Here's a link](https://posteo.de/en/help/exporting-an-smime-certificate-firefox) with instructions for exporting your S/MIME certificate from Firefox
		* See the links on the bottom for getting your newly-exported certificate imported into Outlook or Thunderbird for S/MIME. Mac users using Apple Mail for this step, see [here](https://kb.iu.edu/d/bcsn).
		* Mac users, to install your certificate, just click the certificate once it has downloaded. You may get "Error 26276" when importing your certificate. Ignore this message, it imported successfully.

3.	I will respond with a second encrypted message using your S/MIME certificate. Paste the plaintext of the message you receive below.

    **Plaintext 2:**

4.	Examine your S/MIME certificate. What algorithm(s) does your certificate use for encryption/signing? What is the key length? 
	* (Hint: One way to view your certificate is in [Firefox again, if that's where you exported it from](https://posteo.de/en/help/exporting-an-smime-certificate-firefox))
	* (Or, if you're using Thunderbird; Tools > Options > Advanced > Manage Certificates > View)
	* (In Windows...)
		* Another way to view it in Windows is to use Microsoft Management Console, [like this](https://support.microsoft.com/en-us/help/823503/how-to-import-and-export-certificates-so-that-you-can-use-s-mime-in-ou). Try the 'details' tab after double-clicking your certificate (you don't have to export it like in that link). 
		* Or, from within Outlook, File > Options > Trust Center > Trust Center Settings > Email Security > Settings... > Choose > "Click here to view certificate properties"
	* Mac users: To examine your key, open "Keychain Access", sort the keys by date, and look for the one you just imported. Its name should be the email address you used to set this up.

    **Answer:**

5.	Examine your S/MIME certificate. What information does it contain beyond your public key? 

    **Answer:**

# Part 3. Overall Questions

1.	How is trust handled differently by S/MIME and PGP public key?

    **Answer:** 

2.  Which one do you think is more user-friendly?

    **Answer:**  

3.	Which system do you prefer, S/MIME or PGP?

    **Answer:** 

# Part 4. Communicate Securely with Signal or RedPhone

1.	Read about WhisperSystem’s Signal app here:

    [https://theintercept.com/2015/03/02/signal-iphones-encrypted-messaging-app-now-supports-text/](https://theintercept.com/2015/03/02/signal-iphones-encrypted-messaging-app-now-supports-text/)

2.	Install the app “Signal” on an iOS or Android device (if you don’t have an iOS or Android device, borrow one from a friend). Ask a partner (friend or classmate) to do the same.

3.	Using Signal, call or send a text message to your partner.

4.	How does your experience using Signal compare to using encrypted email with PGP and S/MIME?
	
	**Answer:** 


# Resources

Below are some recommendations if you aren’t sure where to start.

*	Using PGP with Windows with Thunderbird and Enigmail: [https://ssd.eff.org/en/module/how-use-pgp-windows](https://ssd.eff.org/en/module/how-use-pgp-windows)
* 	Using PGP with Mac with Thunderbird and Enigmail: [https://ssd.eff.org/en/module/how-use-pgp-mac-os-x](https://ssd.eff.org/en/module/how-use-pgp-mac-os-x)
*	[https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages](https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages)
* 	Configuring Outlook to use your S/MIME certificate: [https://kb.iu.edu/d/bcta](https://kb.iu.edu/d/bcta), Skip step 8, of course. 
* 	Using Thunderbird and S/MIME: [http://kb.mozillazine.org/Installing_an_SMIME_certificate](http://kb.mozillazine.org/Installing_an_SMIME_certificate)
*	For Signal for Android: [https://ssd.eff.org/en/module/how-use-signal-android ](https://ssd.eff.org/en/module/how-use-signal-android)
*	For Signal for iPhone: [https://ssd.eff.org/en/module/how-use-signal-ios](https://ssd.eff.org/en/module/how-use-signal-ios)

