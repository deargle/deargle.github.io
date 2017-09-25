---

title: Lab &ndash; Password Cracking
number: 9
---

# Part 1: Testing Passwords

1.	Visit the following URL:

    [https://dl.dropboxusercontent.com/u/209/zxcvbn/test/index.html](https://dl.dropboxusercontent.com/u/209/zxcvbn/test/index.html)

2.	Try out different passwords to see how strong they are.

    **Optional:** If you want to learn more about password strength estimation, see this video and paper:

    [https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler)

# Part 2: Online Password Attack

<div class='alert alert-info' markdown='1'>

There's a bug in Kali + hydra v8.6.1 (the default version that comes with Kali). I downgraded to an earlier version in the Kali image I made available to you, 
but in case you installed your own Kali, you'll need to do this:	

	apt-get install libssl-dev libssh-dev
	git clone https://github.com/vanhauser-thc/thc-hydra
	cd thc-hydra
	git checkout v8.5
	./configure
	make
	make install
			
</div>

1.	Open a terminal window in your Kali VM, and type `cd /usr/share/wordlists`.
2.	Unzip the `rockyou.txt.gz` archive as follows:

        gunzip rockyou.txt.gz 

3.	`ls` command grants a view to see which files are in this folder. Type `wc -l rockyou.txt` to see how many entries are in this password dictionary file (‘-l’ is a lower-case ‘L’). 

    This file comprises all unique passwords from the 32 million RockYou password breach you read about in your reading.

4.	Launch an online password attack using THC-Hydra. Type the following (all on one line):

        hydra -V -l istheory -P rockyou.txt https-get://is.theorizeit.org/auth/

    **Note:** The trailing slash (‘/’) is needed.

    Where:
    
    * `hydra` is the password cracking tool to execute
    * `-V` means verbose, and will show you the username and password combination being attempted
    * `-l istheory` sets “istheory” as the login name. Note: that’s a lowercase ‘L.’
    * `-P rockyou.txt` is the password dictionary file to use. 
    * `https-get` means a GET request over HTTPS. Note that Hydra supports many protocols (e.g., ftp, ssh).
    * `is.theorizeit.org/auth/` is the password-protected URL to be accessed.

    **Note:** you can also use THC-Hydra with web forms: [http://insidetrust.blogspot.com/2011/08/using-hydra-to-dictionary-attack-web.html](http://insidetrust.blogspot.com/2011/08/using-hydra-to-dictionary-attack-web.html)
    
    **Question:** What was the password (Scan the results to find the line beginning with `[443][http-get]`)?
    
    **Question:** Approximately how many passwords a second were you able to try? **Hint:** You may need to calculate this from the start and end time along with number of guesses made.
    
# Part 3: Offline Attack Using Hashcat

Cracking in Hashcat:

<div class='alert alert-info'>If you're feeling adventurous, you can install hashcat on your host computer, where you'll get massive speed improvements. Hashcast needs to be able to directly interface with
the CPU/GPU in order to fly -- it can't so as well in a virtualized environment.</div>

1.	On your Kali machine, open up a terminal and navigate to your home directory (`/root/`).
2.	Hashcat uses a command-line interface. To see available options and syntax, type: 

		hashcat --help
	
4.	First, a dictionary attack will be performed against a password-protected Word document. The following command uses a Python script to obtain the hash of the Word document password:

		python office2john.py hashcat.doc
		
	Note: 
	* office2john.py can be obtained [here](https://raw.githubusercontent.com/magnumripper/JohnTheRipper/unstable-jumbo/run/office2john.py), but I already put it in your home dir.
	* hashcat.doc is available [here](https://github.com/deargle/deargle.github.io/raw/master/class/cu/mgmt4250/hashcat.doc). I already put that in your home dir too, but if you need it, you can run 
		
			wget https://github.com/deargle/deargle.github.io/raw/master/class/cu/mgmt4250/hashcat.doc
	

5.	In the output you’ll see the name of the file followed by the type. The type is shown with a $ at the beginning and end of it. You’ll need to copy the type and everything until “:::”. For example, the hash looks like the following, all on one line:

		$oldoffice$1*04477077758555626246182730342136*b1b72ff351e41a7c68f6b45c4e938bd6*0d95331895e99f73ef8b6fbc4a78ac1a 

	Save the hash into a file in your home dir. 

	Note: make sure the entire hash is on one line within the text file. **Don't add extra spaces at the end.** 
	If you get a "line-length exception" in the next step, make sure there's not a typo in the beginning of the hash.

6.	While still in your home dir, run the following command (all on one line):

		hashcat --force -a 0 -m 9700 --potfile-disable -o <<outputFileName.txt>> <<HashInputFileName.txt>> /usr/share/wordlists/rockyou.txt

	Or alternatively, if you prefer to do it without making an input file:  

		hashcat --force -a 0 -m 9700 --potfile-disable -o <<outputFileName.txt>> [hash string] /usr/share/wordlists/rockyou.txt
	
	Where the switches correspond to:

	{: .table .table-condensed } 
	| \-\-force | This is necssary to get hashcat to run in a VM environment (it doesn't normally like to). | 
	| -a 0 | Straight dictionary attack against the hash |
	| -m <<Office_Flag>> | The corresponding flag for the version of Office in use (see table in `hashcat --help`) |
	| \-\-status | Provides an update of the status of the process without giving a prompt |
	| -o <<Output_File>> | The location where the cracked hashes will be saved. <br>The results will also be saved on the .pot file, unless otherwise specified. In our case, we disabled it. |
	| <<Hash>> | The saved password hash. |
	| <<Dictionary>> | The list of words that will be used to try and crack the password. |

	<br/>

	**Question:** What is the password for “hashcat.doc”?

	**Question:** Roughly how many passwords per second can Hashcat try on a .doc file? See [here](https://hashcat.net/forum/thread-2906.html) for interpreting cracking speeds.
	(Note: this would be orders of magnitude faster if you weren't running hashcat in a VM.)

7. 	Run the following command to see how many hashes a second Hashcat can guess a second for various hashing algorithms:

		hashcat -b

	Note: This command may take 10 minutes or so to run. Keep this window open, continue with the next section of this lab, and come back to this question when the above command finishes.

	Note: Keep this terminal window open so you can reference this output for another question later in this lab.

	**Question:** How much slower is Hashcat in cracking .doc MS Office documents (option 9700, “<= 2003 $0\|$1, MD5 + RC4”) compared to Office 2013 documents (option 9600)?

	**Question:** How does an offline password attack compare with the online hydra attack you attempted earlier? 

    
# Part 4. Cracking Linkedin Hashes Using Hashcat

In this section, you’ll see how many hashes you can recover from the 2016 LinkedIn password breach. This breach of 177,500,189 unsalted SHA1 password hashes represents the data of all 
LinkedIn users as of 2012. Among these passwords, only 61,829,207 are unique.

However, in interest of your time, this section will require you to crack only 500,000 of these passwords. After you complete this lab, you’re welcome to crack all of the LinkedIn 
hashes. Ask me for a copy.

1.	Navigate to your home directory, where you will find a copy of the file `LinkedIn_HalfMillionHashes.txt` (also available [here](https://raw.githubusercontent.com/deargle/deargle.github.io/master/class/cu/mgmt4250/LinkedIn_HalfMillionHashes.txt)).
2.	Open a terminal. To get your feet wet, perform a straight dictionary attack using the rockyou.txt wordlist again, as follows (one line):

		hashcat --force -m 100 --potfile-disable --remove --outfile=LinkedIn_cracked.txt LinkedIn_HalfMillionHashes.txt /usr/share/wordlists/rockyou.txt

	Note: This command may take 5–10 minutes to run. To see the status of a running job in Hashcat, press the “s” key (it might take up to 15 seconds for Hashcat to report its status).

5.	To see hashes cracked in real time, in another terminal shell, type the command: `tail -f LinkedIn_cracked.txt`. Type `control+c` to exit the tail command.

	**Question:** How many passwords were you able to recover using this command?

6.	Run another attack that uses a rules-based method (one line):

		hashcat --force -m 100 --potfile-disable --remove --outfile=LinkedIn_cracked.txt LinkedIn_HalfMillionHashes.txt -r /usr/share/hashcat/rules/best64.rule /usr/share/wordlists/rockyou.txt

	Rules apply common patterns to password dictionaries to crack even more hashes. You can read about rules in Hashcat here: [https://hashcat.net/wiki/doku.php?id=rule_based_attack](https://hashcat.net/wiki/doku.php?id=rule_based_attack). 

	The “best64.rule” is one of the most effective sets of Hashcat rules. It is continually refined using input and testing from the password cracking community. You can view the contents of the best64.rule here:

	[https://github.com/hashcat/hashcat/blob/master/rules/best64.rule](https://hashcat.net/wiki/doku.php?id=rule_based_attack])

	You can read an explanation of these set of rules here:
	
	[http://kaoticcreations.blogspot.com/2011/09/explanation-of-hashcat-rules.html](http://kaoticcreations.blogspot.com/2011/09/explanation-of-hashcat-rules.html)

	**Question:** How many additional passwords were you able to recover using this rules based attack?

	**Optional:** Experiment with other rules found in `/usr/share/hashcast/rules`.

	
7. Run another attack that uses a hybrid method that uses a dictionary attack combined with a “mask,” which is a pattern that is appended to each password in the password dictionary:

		hashcat --force -m 100 --potfile-disable --remove --outfile=LinkedIn_cracked.txt LinkedIn_HalfMillionHashes.txt -i -a 6 /usr/share/wordlists/rockyou.txt ?d?d

	The “?d?d” at the end means to append two digits between 0–9 each at the end of each password in the rockyou.txt password dictionary.

	**Question:** How many passwords were you able to recover using this hybrid attack?

	If you would like to try using a different character set for your mask, you can use the following masks below. Note that each mask below is for one character. If you wanted to test four digits at the end of each password, the mask would be: ?d?d?d?d.

		?l = abcdefghijklmnopqrstuvwxyz
		?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
		?d = 0123456789
		?s =  !"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~
		?a = ?l?u?d?s
		?b = 0x00 - 0xff

	**Optional:** Another common password pattern is to prepend digits at the beginning of passwords. If you would like try this mask, run the following command:

		hashcat --force -m 100 --potfile-disable --remove --outfile=LinkedIn_cracked.txt LinkedIn_HalfMillionHashes.txt -i -a 7 ?d?d /usr/share/wordlists/rockyou.txt
		
<div class='alert alert-info'>Want even more practice? You can download the massive Troy Hunt haveibeenpwned SHA1 password hash list 
on the bottom of <a href='https://haveibeenpwned.com/Passwords'>this page</a>.</div>

<div class='alert alert-info'>See <a href='https://github.com/danielmiessler/SecLists/tree/master/Passwords'>Daniel Miessler's wordlist collection</a> for more wordlists besides rockyou to try.</div>
    
# Part 5. Secure Password Hashing

Refer back to the benchmark command that you ran in a separate window for Part 3 step 7 (`hashcast -b`). 

**Question:** How much slower is Hashcat in cracking bcrypt hashes compared to SHA1 hashes?

**Question:** Would it be feasible to crack the passwords of LinkedIn breach if LinkedIn had used bcrypt instead of SHA1? Why or why not?

# Learn more:

[http://arstechnica.com/security/2013/03/how-i-became-a-password-cracker/](http://arstechnica.com/security/2013/03/how-i-became-a-password-cracker/)

Official Hashcat documentation: [http://hashcat.net/wiki/](http://hashcat.net/wiki/)
