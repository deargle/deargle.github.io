---

title: Lab &ndash; Security Onion
number: 12
---

# Todo

    * install security onion vm with squert
    * preload it with case files, or give access to case files

# Part 1: Examining PCAP Files

In this section, you’ll examine the network traffic for a Windows VM that browsed to a compromised website that in turn referred the Windows VM to a server that delivered malware to the Windows VM. You’ll use Squert and Wireshark to investigate these events.

1.	Navigate to the /data/cases/case.pcap file and run the following command

        sudo tcpreplay -i eth0 -M 10.0 case.pcap

    Note the lowercase “i" in “-i" and uppercase “M” in “-M”.

    You should see the following result (never mind the error messages for the 20 failed packets):

        Statistics for network device: 	eth0
        Attempted packets:         		4682
        Successful packets:        		4662
        Failed packets:            		20
        Retried packets (ENOBUFS): 	0
        Retried packets (EAGAIN):  	0

2.	Log in to Squert using the icon on the Security Onion desktop using `analyst:analyst` for the username:password. From SquertProject.org: 

    “Squert is a web application that is used to query and view event data stored in a Sguil database (typically IDS alert data). Squert is a visual tool that attempts to provide additional context to events through the use of metadata, time series representations and weighted and logically grouped result sets. The hope is that these views will prompt questions that otherwise may not have been asked.”

3.	Each row in Squert lists an IDS event. Click on the `QUEUE “2”` button on the row with `ET POLICY PE EXE or DLL Windows file download` to see the detail of this alert.

    ![](../images/lab_12_1.png){: .img-responsive width='70%'}

    Question: What is the destination IP address of the IP (the Windows VM that downloads the malware)?
    Question: What is the source IP address of this download? 
    Question: What country does this download comes from? 
    You can also click on the Summary tab to see a map and summary of traffic by countries.
    
    ![](../images/lab_12_2.png){: .img-responsive width='30%'}
    
4.	Now open Wireshark in Security Onion (Click the Applications Menu in the top left corner and search for “wireshark”).
5.	In Wireshark’s File menu, choose “Open,” navigate to /data/cases/case.pcap file, click “Open.”

    Note the source IP address for packet number 1. This is the Windows VM that gets infected. 

    **Question:** What is the MAC address of this VM? 

6.	Enter the source IP address you identified in Step 3 into the filter bar, as follows:
        
        ip.src == [IP address identified]

    Then click “apply.”

    ![](../images/lab_12_3.png){: .img-responsive width='70%'}
    
    Find the first instance of the malware download (i.e., the first row with Destination IP address that matches the malware download). Right click on the row and select “Follow TCP Stream.”

    What was the domain name of the “referer” website that referred the Windows VM to the IP that delivered the malware?

    **Question:** What is the IP address of the referer website? Hint: examine network packet immediately before the first instance of the malware download. You can right click this row and select “Follow TCP Stream.” 
    
# Part 2: Operation Aurora Case

You will use all the skills you’ve learned in this lab so far to solve the following case. First, watch this video or read the Wikipedia article about Operation Aurora, which was an attack on Google and other companies:

https://en.wikipedia.org/wiki/Operation_Aurora

https://www.youtube.com/watch?v=T2DqLj1nQkc

This case is a client-side attack based on Operation Aurora. The packet capture file of this case contains a full recording of a real Windows system getting exploited via the same mechanism that was used to exploit Google.
    
## Preparation: Clear Security Onion History

1.	Double-click the “Setup” icon on the Security Onion desktop, and enter the password “Password1”.
2.	Click “Yes, skip network configuration!”
3.	Click OK with the default setting of “evaluation mode.”
4.	Click OK with the default setting of “eth0” for the monitoring interface.
5.	Enter “analyst” for the Sguil username.
6.	Enter “analyst” for the Sguil password, and confirm.
7.	Click “Yes, proceed with changes!”
8.	Click OK on the remaining dialog messages.
The logs on Security Onion have been reset, giving you a clean slate for the case below.

## Case Scenario

The Operation Aurora attackers launch a spear-phishing attack against one of the company’s executives. The executive (hereafter referred to as “victim”) clicks on a link in the spear-phishing email. The IP address of the victim’s computer is 10.10.10.70. Find out what happened when the link in the spear-phishing email was clicked, and answer the following questions. 

Use the file `/data/cases/evidence.pcap` to answer the following questions.

1.	Question: What was the full URL of the victim’s original web request? (Please include the port in your URL.) 
2.	In response, the malicious web server sent back obfuscated JavaScript, which contained a zero-day exploit.

    **Question:** What was the string value of variable “UWnHADOfYHiHDDXj”?

3.	The victim’s computer made a second HTTP GET request for an object.

    Question: What was the filename of the second object that was requested? 

    Question: What is the MD5 hash of this object? Hint: You can export objects in Wireshark by going to the File menu, and selecting “Export Objects” > HTTP. Then you can use the `md5sum [FILE]` command from the Kali terminal.

4.	The malicious object opened a TCP session on port 4444 between the victim and the attacker’s machine. 

    **Question:** How long was this port open? This is significant because it tells us how long the attackers had to perform their attack.

    Hint: Use the Wireshark filter “tcp.port == 4444”. For the time, see the value in Wireshark’s “Time” column for the first row in the filtered results. Then note the time value for the last row in the filtered results. Then calculate the difference of the two times, rounded to one tenth of a second.
    
5.	In packet 17, the malicious server sent a file to the client.
    
    **Question:** What type of file was it? 

    Hint: right-click packet 17 and select “Follow TCP Stream.” Note the “MZ” string at the top of the stream. This string is a magic number that identifies the file type (see https://asecuritysite.com/forensics/magic). Note also the “This program…” message. This is another indicator of the file type.

    For further confirmation, click “Save As,” and save the file to the desktop as “network.stream”. 

    Next, use a forensics file carving tool called Foremost:

    foremost -i network.stream -o carved_files

    This will create a directory “carved_files” containing all of the files that Foremost carved out of the network stream.

    Inside the “carved_files” directory you’ll find a subdirectory for each file type recovered. Inside this subdirectory, use the `file` command to identify the file type:

        file [name of the carved file]


6.	Question: What was the MD5sum of the file?

7.	Search for this hash on Virustotal.com. 

    **Question:** What type of malware is this file?
    
8.	The victim’s computer repeatedly tried to connect back to the malicious server on port 4445, even after the original connection on port 4444 was closed. Eventually, the malicious server responded and opened a new connection on port 4445. Subsequently, the malicious server sent a second executable file to the client on port 4445. 

    **Question:** What was the MD5 sum of this second executable file?
    
# Sources
    
* http://malware-traffic-analysis.net
* http://forensicscontest.com/2010/05/21/puzzle-6-anns-aurora






