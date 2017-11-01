---
layout: assignment
title: Midterm instructions
---

## Assignment Description

Your assignment is to write a
security assessment report for the server belonging to the below IP
address. You'll need to submit your report on Learning Suite by the deadline listed in the syllabus.

Your objectives are threefold:

1. Document vulnerabilities that you are able to successfully exploit on
the server. Describe in detail what you did and what level of access you
were able to obtain. If you obtain a user account with limited
privileges, document whether you were able to escalate the privileges to
root. Document each exploit that you are able to successfully launch.

2. Document potentially sensitive information that you are able to
obtain from the server. These could include user files or web, database,
or other server files.

3. For both 1 and 2 above, suggest ways that vulnerabilities exploited
or sensitive information obtained could be protected.

**The scope of your project is restricted to the computer belonging to the
IP address I communicated to you via email.**

The server you are to evaluate is running on a private network that you can only get access to if you connect Kali to a VPN. Download `client.conf` to kali from D2L. Open a separate Terminal session, and run `openvpn client.conf`. 
Leave this terminal running for as long as you need to connect to the midterm vm. Running this will give you an ip address on VPN in the `10.8.` network space. **Use this new ip address as your LHOST whenever needed, not your `192.` one.** As usual, you
can view your ip address by running `ifconfig`. You will be able to connect to the private `172.32.0.0/16` address of your target server even though it is on a different network, because the VPN server passes traffic through for you.

You should write the report for a managerial audience, one that isn't
versed in information security concepts. In other words, you need to
explain the concepts in terms that can be easily understood by managers
without technical experience. If you use technical or unfamiliar terms,
include a glossary of the terms used.

There is no length requirement for the report, but your report must not
exceed 20 pages (not including appendices).

In writing your report, organize for impact. This means you should
discuss the most serious vulnerabilities first. Further, in your
description, start by describing macro-level issues and then discuss
micro-level details. This practice makes it easier for a readers to
quickly process your report.

You can think of this process like a pyramid, where at the top you have the one-page executive summary of your findings, and each successive section provides more granular detail. At the end of the main body of your report, the "supporting details" section should have sufficient details on how to replicate the exploits you found, including step-by-step commands run in Metasploit or other tools. This way, a manager can quickly get a sense of the report by reading the first page and then can choose to continue reading to get lower-level details.

Continuing the pyramid analogy, appendices are at the very base. Appendices are for very technical information that would bog down the report if included in the main body. For example, a Nessus report or detailed output from NMAP do not belong in the report because the information is too technical for a managerial reader to process. Also, they tend to be lengthy and would interrupt the flow of your report. Instead, refer the reader to the appendices for very technical and lengthy information. (PS, I'm not interested in seeing a Nessus report, don't give me one.)

Finally, whenever you show a command or output from a command in the main body of your report, use excerpts or highlighting to point out the most relevant information, and explain what you show with accompanying text. Imagine you are writing to a manager or executive who doesn't understand security and needs you to clearly explain your findings and their implications.

Writing to a managerial audience is crucial skill in IS, especially in information security.

Your report will be graded using the following rubric:

{: .table .table-condensed}
|-|-|
| 5% | One page executive summary that highlights the most important findings of your report. |
| 5% | Description of the scope of the project, objectives, and your authorization to perform the assessment (i.e., my instructions to you in this document and in your email). |
| 5% | Information about the server examined (OS, user accounts, applications installed, databases stored). |
| 25% | High-level description of vulnerabilities successfully exploited and sensitive data obtained. |
| 30% | Supporting details of successful exploits and sensitive data obtained. The detail should be sufficient for another person to replicate the results of your main findings using your report. |
| 25% | Explanation for how to protect against vulnerabilities successfully exploited and sensitive data obtained. Provide concrete steps. |
| 5% | Clarity of writing for a managerial audience. |

Use [this report template](/class/security/Midterm_template.docx) to create your report as a PDF file.
For submission, have one person on your team submit the report on
D2L.

I look forward to reading your report. Let me know if you have any
questions.



## Tips

* Did your scan show that the server is running something on port 80? It's probably a web page! Try browsing to it by using kali's firefox, and put your server's `172.` ip address into the address bar.

You can crack passwords with either John the Ripper (JtR) or with hashcat.

* [how to use John the ripper](http://www.openwall.com/john/doc/EXAMPLES.shtml) (note the `--rules` flag). John the ripper uses its own wordlist, stored in `/usr/share/john/password.lst`
* If you're using hashcat and your password file is formatted like [username]:[password hash], tell hashcat that your file has usernames by passing the `--username` flag.
* If you want to crack `/etc/passwd` and `/etc/shadow`, you need to 'unshadow' the files first. This puts the usernames and passwords into the same file. JtR can unshadow the two files for you using the `unshadow` command.
	Example usage:
		
		unshadow [passwd file] [shadow file] > myunshadowed_file
	
	* If your shell has root access, you can use the metasploitable `post/linux/gather/hashdump` post module to unshadow the files for you. This will copy the unshadowed files to your machine. 
	* JtR can try to crack the unshadowed file as-is. See [here](http://www.openwall.com/john/doc/EXAMPLES.shtml)
	* If you want to crack the unshadowed file using hashcat, you will need to edit the unshadowed file a bit. You have to manually edit the unshadowed file and remove everything except for the username and the hash. See [here](https://samsclass.info/123/proj10/p12-hashcat.htm) (except, you can leave in the usernames, if you pass the `--username` flag)

* You will want to read up on using the following tools (Google is your friend):
	*   `scp` - one way to copy files from one computer to another, including from your server to kali. You could also use a meterpreter shell to download files if you have one.
        
        Example `scp` code (from Kali):
            
            scp midterm-server-username@midterm-server-ip-address:/full/path/to/file/on/midterm/server .
            
        That will open an `ssh` connection to the midterm server as the specified user, and copy a file (that the user must have permission to read!) from the specified path down to the current directory 
        (`.` means 'current directory that I'm in on Kali').
        
        Note that this must be run on Kali. Meaning it cannot be run from within an exploited shell on the midterm server or from within an ssh connection to the midterm server. You cannot scp a file _from_ the midterm server _to_ Kali, because you cannot open an ssh session from the midterm server to kali, because there is no 
        ssh server listening on Kali. (If there were, you all could ssh into each others' Kali VMs while connected to the VPN, and we can't have that!).
        
	*   `ssh` - for logging into remote servers
	*   `sudo` (including `sudo -l`)
	*   `id`
	*   `hydra` to crack ssh logins

* Trying to crack a password? Remember to try dictionary attacks + rule lists (such as hashcat's best64 rulelist, see the password cracking lab). Also remember that some users might use some combination of their username as their password. Read the documentation for hydra's `-e` flag. For example, to try the reverse of a username of a password, you would pass `-e r`. You can pass multiple values for `-e`, like it shows in the documentation.

* You can [upgrade a regular shell to a meterpreter session](https://null-byte.wonderhowto.com/how-to/upgrade-normal-command-shell-metasploit-meterpreter-0166013/) (after you have a shell, see `shell_to_meterpreter`, step 2). 