---

title: Lab &ndash; Network Security Monitoring / Security Onion
number: 12
---


# Setup

<div class='alert alert-info'>As usual, I have a ready-to-go VM that I can share with you. Or you can follow the instructions below and set up your own. The `username:password` for the image I provide is `securityonion:Password1`.</div>

Download and install Security Onion following [these instructions](https://github.com/Security-Onion-Solutions/security-onion/wiki/QuickISOImage) and [these instructions](https://askubuntu.com/questions/64915/how-do-i-install-ubuntu-on-a-virtualbox-client-from-an-iso-image). [Make note](https://github.com/Security-Onion-Solutions/security-onion/wiki/Hardware): 

{: style='font-size:16px;'}
> If you just want to quickly evaluate Security Onion in a VM, the bare minimum amount of RAM needed is 3GB. More is obviously better!
	
* I gave mine a 15 GB hard disk.
* Give it two network cards. 
	* **Important:** Set Adapter 1 to "Host-only" or to "Internal Network", click the "Advanced" triangle, and (this is the important part) change "Promiscuous Mode" to "Allow All".
	* On the Adapter 2 tab, select "Enable Network Adapter," and select "NAT."
* I installed with username:password `securityonion:Password1`
* If you value your eyesight, [install VBox Guest Additions](http://www.binarytides.com/vbox-guest-additions-ubuntu-14-04/) to get fullscreen resolution (I had to run it twice).
* Once you have updated everything (`soup up`), double-click "Setup" on the desktop.
	* Choose "eth1" as the Management interface, and use DHCP addressing.
	* Choose "YES, configure sniffing interfaces," and use your promiscuous eth0.
	* Reboot, and double-click "Setup" again, this time skipping network configuration.
	* Choose "Evaluation" mode.
	* Accept the default monitoring interface (eth0).
	* For Squil, here's an easy-to-remember username:password -- analyst:analyst
* Obtain the files necessary for this lab:
	* `sudo mkdir /data && sudo chown -R securityonion /data && cd /data`
	* `wget https://tools.netsa.cert.org/silk/refdata/SiLK-LBNL-05-nonscan.tar.gz`
	* `wget https://tools.netsa.cert.org/silk/refdata/SiLK-LBNL-05-scanners.tar.gz`
	* `gzip -d -c SiLK-LBNL-05-nonscan.tar.gz | tar xf -`
    * `gzip -d -c SiLK-LBNL-05-scanners.tar.gz | tar xf -`
* Install SiLK on Security Onion, [following this guide](http://www.appliednsm.com/silk-on-security-onion/), stopping before the "Configuring SiLK" section.
	
	
# Part 1: Analyzing NetFlow information

Although full-content data are powerful, they are less useful for fast querying and timely incident response. This is where NetFlow records, some of the most powerful information sources available to incident responders, become very useful. These records are brief summaries of network traffic which can be maintained indefinitely due to their small file size. They provide a running history of network connections at the time of an incident.
Read the below article and use Google to answer the following questions:

[https://en.wikipedia.org/wiki/NetFlow](https://en.wikipedia.org/wiki/NetFlow)

1.	**Question:** What types of information do NetFlow records contain? 

2.	**Question:** What are at least three benefits of NetFlow over full PCAP files?

Now that you have basic understandings of NetFlow, we will use YAF and SiLK (open-source incident response tools for Linux) to analyze NetFlow data. Further documentation can be found at http://www.appliednsm.com/silk-on-security-onion/.

We will analyze sample data hosted [here](https://tools.netsa.cert.org/silk/referencedata.html#), which says the following about the data source:

{: style="font-size:16px"}
> This sample data is derived from anonymized enterprise packet header traces obtained from Lawrence Berkeley National Laboratory and ICSI, and is used here with their permission. This data covers selected hours on selected dates in late 2004 and early 2005.

3.	First, you need to run the following commands for the start and end dates to filter on:

		export sd="--start-date=2004/10/04:20"
		export sd="$sd --end-date=2005/01/08:05"

4.	We can now start querying the sample data to find some interesting and important information about the sample network. Query the top “talkers” (those hosts that send and receive the most traffic) by bytes. Enter the following on one line, or use the backslash “\” to let you press enter to continue the command on a new line.

		sudo rwfilter --data-rootdir=/data/SiLK-LBNL-05 \
		--proto=0- --type=all $sd \
		--pass=stdout | rwstats \
		--percentage=1 \
		--fields=sip,dip --bytes

	**Important:** Note that the “-” at the end of “--proto=0-” is important. It indicates that all protocols from “0” and above will be included. If you don’t include the hyphen, no results will be returned.

	**Note:** The code following the “\|” (pipe) symbol passes the output of rwfilter to rwstats, which provides fast and powerful statistics. The “sip” and “dip” fields stand for source and destination IP respectively.


	**Question:** Looking at the output, report the top 5 talkers source IP, destinationIP and the % of bytes they generated.

	**Question:** Conceptually, why do you think it’s important information to know the top talkers on the network?

8.	Query top talkers by the number of records they generated: 

		sudo rwfilter --data-rootdir=/data/SiLK-LBNL-05 \
		--proto=0- --type=all $sd \ 
		--pass=stdout | rwstats --count=25 \
		--fields=sip,dip

	**Question:** What are the source IPs (sIP) of the top three talkers?
	
9.	Query top SSH flows. This is typically done using a destination port (“dport”) filter for port 22, as follows:

		sudo rwfilter --data-rootdir=/data/SiLK-LBNL-05 \
		--proto=0- --type=all $sd \ 
		--dport=22 --pass=stdout | rwstats --count=10 \
		--fields=sip,dip

	**Question:** What is the IP address of the top SSH-communicating host (hint: source IP)? 

	**Question:** What are the top SSH source and destination IPs for the top SSH-communicating host? Hint: you will have to write your query for this one using “\-\-any-address = [the IP address from the previous question]” option with the rwfilter command, and the “\-\-percentage=1” option with the rwstats command.

11.	Query for long standing SSH traffic:

		sudo rwfilter --data-rootdir=/data/SiLK-LBNL-05 \
		--proto=0- --type=all \ 
		--dport=22 --dur=1700- \ 
		$sd --pass=stdout | rwcut

	**Question:** Why should we look for long standing SSH connections?

There are many other filters that we can use to analyze the network traffic in many situations, especially under incident response circumstance. To learn more about YAF and SILK, you can find additional material on [https://tools.netsa.cert.org/](https://tools.netsa.cert.org/)




# Part 2: Examining PCAP Files

In this section, you’ll examine the network traffic for a Windows VM that browsed to a compromised website that in turn referred the Windows VM to a server that delivered malware to the Windows VM. You’ll use Squert and Wireshark to investigate these events.

1.	Navigate to the `/data/cases/` directory, where `case.pcap` is found (available [here](https://daveeargle.com/class/cu/mgmt4250/case.pcap) if you don't already have it). Run the following command.

        sudo tcpreplay -i eth0 -M 10.0 case.pcap

    Note the lowercase “i" in “-i" and uppercase “M” in “-M”.

    This command replays network traffic stored in the `case.pcap` file onto security onion's network card, as if the network activity were happening again, live.
    
    You should see the following result (never mind the error messages for the 20 failed packets):

        Statistics for network device: 	eth0
        Attempted packets:         	4682
        Successful packets:        	4662
        Failed packets:        		20
        Retried packets (ENOBUFS): 	0
        Retried packets (EAGAIN):  	0

2.	Log in to Squert using the icon on the Security Onion desktop using `analyst:analyst` for the username:password. (Bypass the SSL warning by clicking "Advanced" then "Proceed to site." From SquertProject.org: 

    {: style='font-size:16px' }
	>“Squert is a web application that is used to query and view event data stored in a Sguil database (typically IDS alert data). Squert is a visual tool that attempts to provide additional context to events through the use of metadata, time series representations and weighted and logically grouped result sets. The hope is that these views will prompt questions that otherwise may not have been asked.”
	
	(Reminder: IDS stands for Intrusion Detection System.)

3.	Each row in Squert lists an IDS event. Click on the `QUEUE “2”` button on the row with `ET POLICY PE EXE or DLL Windows file download` to see the detail of this alert.

    ![](../images/lab_12_1.png){: .img-responsive width='70%'}

    **Question:** What is the destination IP address of the IP (the Windows VM that downloads the malware)?
    
	**Question:** What is the source IP address of this download? 
    
	**Question:** What country does this download comes from? 
	
    You can also click on the Summary tab to see a map and summary of traffic by countries.
    
    ![](../images/lab_12_2.png){: .img-responsive width='30%'}
	
	
	<div class='alert alert-info' markdown='1'>If you don't have any country information showing, first make sure that you have an internet connection (try `ping google.com`), 
    
    If you can't ping google.com, run this:
        
        sudo ifdown eth1 && sudo ifup eth1
    
    Once you can ping google.com, run this:
			
		
		cd /var/www/so/squert/.scripts
		sudo ./ip2c.tcl
		
	
	Then press Squert's "Refresh" button (not the browser refresh button):
	
	![](../images/lab_so_1.png){: .img-responsive width='600px'}
	</div>
	
	
    
4.	Now open Wireshark in Security Onion (Click the Applications Menu in the top left corner and search for “wireshark”).
5.	In Wireshark’s File menu, choose “Open,” navigate to /data/cases/case.pcap file, click “Open.”

    Note the source IP address for packet number 1. This is the Windows VM that gets infected. 

    **Question:** What is the MAC address of this VM? (Hint: MAC addresses are 6 octets long, separated by ':' in Wireshark, and are reported in the "Ethernet II" frame.)

6.	Enter the source IP address you identified in Step 3 into the filter bar, as follows:
        
        ip.src == [IP address identified]

    Then click “apply.”

    ![](../images/lab_12_3.png){: .img-responsive width='70%'}
    
    Find the first instance of the malware download (i.e., the first row with Destination IP address that matches the malware download). Right click on the row and select “Follow TCP Stream.”

    What was the domain name of the “referer” website that referred the Windows VM to the IP that delivered the malware?

    **Question:** What is the IP address of the referer website? Hint: examine network packet immediately before the first instance of the malware download. You can right click this row and select “Follow TCP Stream.” 

    
# Part 3: Operation Aurora Case

You will use all the skills you’ve learned in this lab so far to solve the following case. First, watch this video or read the Wikipedia article about Operation Aurora, which was an attack on Google and other companies:

[https://en.wikipedia.org/wiki/Operation_Aurora](https://en.wikipedia.org/wiki/Operation_Aurora)

[https://www.youtube.com/watch?v=T2DqLj1nQkc](https://www.youtube.com/watch?v=T2DqLj1nQkc)

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

1.	**Question:** What was the full URL of the victim’s original web request? (Please include the port in your URL.) 
2.	In response, the malicious web server sent back obfuscated JavaScript, which contained a zero-day exploit.

    **Question:** What was the string value of javascript variable “UWnHADOfYHiHDDXj”?

3.	The victim’s computer made a second HTTP GET request for an object.

    **Question:** What was the filename of the second object that was requested? 

    **Question:** What is the MD5 hash of this object? Hint: You can export objects in Wireshark by going to the File menu, and selecting “Export Objects” > HTTP. Then you can use the `md5sum [FILE]` command from the terminal.

4.	The malicious object opened a TCP session on port 4444 between the victim and the attacker’s machine. 

    **Question:** How long was this port open? This is significant because it tells us how long the attackers had to perform their attack.

    Hint: Use the Wireshark filter “tcp.port == 4444”. For the time, see the value in Wireshark’s “Time” column for the first row in the filtered results. Then note the time value for the last row in the filtered results. Then calculate the difference of the two times, rounded to one tenth of a second.
    
5.	In packet 17, the malicious server sent a file to the client.
    
    **Question:** What type of file was it? 

    Hint: right-click packet 17 and select “Follow TCP Stream.” Note the “MZ” string at the top of the stream. This string is a magic number that identifies the file type (see [https://asecuritysite.com/forensics/magic](https://asecuritysite.com/forensics/magic)). Note also the “This program…” message. This is another indicator of the file type.

    For further confirmation, click “Save As,” and save the file to the desktop as “network.stream”. 

    Next, use a forensics file carving tool called Foremost:

		foremost -i network.stream -o carved_files

    This will create a directory “carved_files” containing all of the files that Foremost carved out of the network stream.

    Inside the “carved_files” directory you’ll find a subdirectory for each file type recovered. Inside this subdirectory, use the `file` command to identify the file type:

        file [name of the carved file]

	**Question:** What was the MD5sum of the file?

	Search for this hash on Virustotal.com. 

    **Question:** What type of malware is this file, according to Virustotal.com?
    
8.	The victim’s computer repeatedly tried to connect back to the malicious server on port 4445, even after the original connection on port 4444 was closed. Eventually, the malicious server responded and opened a new connection on port 4445. 
	Subsequently, the malicious server sent a second executable file to the client on port 4445. 

    **Question:** What was the MD5 sum of this second executable file?
    
# Sources
    
* [http://malware-traffic-analysis.net](http://malware-traffic-analysis.net)
* [http://forensicscontest.com/2010/05/21/puzzle-6-anns-aurora](http://forensicscontest.com/2010/05/21/puzzle-6-anns-aurora)
* McManus, Joe. Using Net Flow Data for Incident Response. Nov 2014. University of Colorado Boulder






