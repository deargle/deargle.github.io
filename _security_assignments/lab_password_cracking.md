---

title: Lab &ndash; Password Cracking
number: 9
---

# Part 1: Testing Passwords

1.	Visit the following URL:

    https://dl.dropboxusercontent.com/u/209/zxcvbn/test/index.html 

2.	Try out different passwords to see how strong they are.

    **Optional:** If you want to learn more about password strength estimation, see this video and paper:

    https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler

# Part 2: Online Password Attack

1.	Open a terminal window in your Kali VM, and type `cd /usr/share/wordlists`.
2.	Unzip the `rockyou.txt.gz` archive as follows:

        gunzip rockyou.txt.gz 

3.	`ls` command grants a view to see which files are in this folder. Type `wc -l rockyou.txt` to see how many entries are in this password dictionary file (‘-l’ is a capital ‘L’). 

    This file comprises all unique passwords from the 32 million RockYou password breach you read about in your reading.

4.	Launch an online password attack using THC-Hydra. Type the following (all on one line):

        hydra ifip.byu.edu -V -l ifip -P rockyou.txt http-get http://ifip.byu.edu/2016/

    **Note:** The trailing slash (‘/’) is needed.

    Where:
    
    * `hydra` is the password cracking tool to execute
    * `ifip.byu.edu` is the server to attack
    * `-V` means verbose, and will show you the username and password combination being attempted
    * `-l ifip` sets “ifip” as the login name. Note: that’s a lowercase ‘L.’
    * `-P rockyou.txt` is the password dictionary file to use. 
    * `http-get` is the protocol. Note that Hydra supports many protocols (e.g., ftp, ssh).
    * `http://ifip.byu.edu/2016/` is the password-protected URL to be accessed.

    **Note:** you can also use THC-Hydra with web forms: http://insidetrust.blogspot.com/2011/08/using-hydra-to-dictionary-attack-web.html 
    
    **Question:** What was the password (Scan the results to find the line beginning with `[80][http-get]`)?
    
    **Question:** Approximately how many passwords a second were you able to try? **Hint:** You'll need to calculate this from the start and end time along with number of guesses made.
    
# Part 3: Offline Attack Using Hashcat

    Todo: Move this to John the Ripper on Kali instead.
    
# Part 4. Cracking Linkedin Hashes Using Hashcat
    
# Part 5. Secure Password Hashing
