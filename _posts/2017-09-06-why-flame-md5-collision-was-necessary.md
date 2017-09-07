---
title: Why Flame md5 collision was necessary
description:
---

I read [Countdown to Zero Day](https://www.amazon.com/Countdown-Zero-Day-Stuxnet-Digital/dp/0770436196) (and really enjoyed it!) but I still didn't have a firm grasp 
on why the NSA needed to forge their own certificate when they already had a valid code-signing certificate from Microsoft. [These](https://crypto.stackexchange.com/questions/44151/how-does-the-flame-malware-take-advantage-of-md5-collision) [two](https://trailofbits.files.wordpress.com/2012/06/flame-md5.pdf) sources were the most
helpful for me to finally understand why.

* 	They got their hands on a signed windows certificate that could sign code. But the problem was that it could only sign code for Window XP -- it had an extension in it that 
	blocked it from signing Vista or Windows 7 code. So _that's_ why they needed to make a forged certificate -- one that had the signature stolen from the legit cert, but the extension disabled, 
	so that it could sign code for Windows 7.
* 	The only code that they straight-up copied from the legit cert was the md5 signature and some bits before it (including the extension they wanted to disable). 
	The rest was their own. They put their own RSA signing key into their certificate. They modified a block after the key which made Windows ignore the 
	extension they needed to disable. The trick was predicting the serial number and the validity period. They had a 1-second window for predicting the validity 
	period, and a 1-ms period for predicting the serial number.

	
	
This slide from the second link, a TrailOfBits slide deck, is what helped me the most:

![](/assets/img/md5-flame-cert-comparison.png)

The whole slide deck is worth a read-over. I admit I'm too novice to understand the importance of near collision blocks and birthday bits.


