---

title: Lab &ndash; Web Privacy and Anonymity
number: 13
---

# Part 1: Visualize Web Trackers

Install the Firefox Lightbeam browser add-on (if needed, first install Firefox) to visualize how web-tracking companies monitor your browsing behavior.

1.	Install Lightbeam at:

https://addons.mozilla.org/en-US/firefox/addon/lightbeam/

2.	Open the Lightbeam tab by selecting Show Lightbeam from the Tools menu. Browse around the web visiting sites you typically frequent. 

    **Question:** How many connections between sites via third-party trackers do you see after browsing 10 popular sites?
    
# Part 2: Turn on Do Not Track in your Web Browser

Turn on Do Not Track in your web browser.

1.	Turn on Do Not Track (DNT) in your web browser. Search the Web for instructions on how to do so for your browser favorite browser.

2.	Visit http://donottrack.us to see if DNT is enabled in your browser.

    **Question:** Did you turn on Do Not Track in your browser (yes/no)?
    
# Part 3: Blocking Web Trackers

While DNT politely asks web trackers not to track you, you can install software that blocks trackers. 

1.	Visit https://www.ghostery.com/our-solutions/ghostery-add-on/ and install the Ghostery extension in your browser.
2.	Go through the installation wizard to ensure Ghostery is configured to automatically update.
3.	Browse to your favorite sites and click the Ghostery icon after each page load. Which of your favorite sites uses the most web trackers?
4.	Click on the struck-through name of an add tracker and click the “Continue to full tracker profile” link on Chrome or the “Click here for more information about…” link in Safari to learn more about the add tracker (see figure below).

![](../images/lab_13_1.png){: width=40%}

5.	Click the “more info” link next to some of the web trackers. Click on the down arrow next to “Privacy Information” to learn about the tracker’s privacy policy. 

    **Question:** What is the name of the third-party tracker you read about, and what kinds of information is its company collecting about you? 
    
# Part 4: Disable Third-party Cookies in Your Browser

1.	Search the web for instructions for how to disable third-party cookies in your browser of choice.
2.	Disable third-party cookies in your browser.
    
    **Question:** Did you disable-third party cookies in your browser (yes/no)?
    
# Part 5: Browser Fingerprinting

1.	Visit https://panopticlick.eff.org.

    Question: Is your browser blocking tracking ads?
    Question: Is your browser blocking invisible trackers?
    Question: Does your browser unblock 3rd parties that promise to honor Do Not Track?
    Question: Does your browser protect against fingerprinting?

2.	Click on the link, “Show full results for fingerprinting.” Look over the browser characteristics and how bits of identifying information each one provides. 

    Note: The bits of identifying information means that your browser can be uniquely identified out of a set of 2bits of identifying information. A lower score is better, because it means that you can be less precisely identified. For example:

    “We observe that the distribution of our finger- print contains at least 18.1 bits of entropy, meaning that if we pick a browser at random, at best we expect that only one in 286,777 other browsers will share its fingerprint. Among browsers that support Flash or Java, the situation is worse, with the average browser carrying at least 18.8 bits of identifying information. 94.2% of browsers with Flash or Java were unique in our sample.”

    https://panopticlick.eff.org/static/browser-uniqueness.pdf 

    Question: How many bits of information does Panopticlick report for your browser?

# Part 7: Anonymous Web Browsing

1.	Go to http://whatismyip.com/ and note your IP address.
2.	Turn on your browser’s privacy mode (e.g., “Incognito Mode” in Chrome, “Private Browsing” in Firefox and Safari).
3.	Go to http://whatismyip.com/ again and note your IP address.

Note that your IP address didn’t change.

Question: If your true IP address can still be seen by webservers, what does your browser’s privacy mode do?

4.	Run the Tor Browser (install if necessary) available for Linux, Mac, and Windows on Learning Suite under Content > Executables and on D:\Source\IS 560\Information Privacy.

    Note: If you’re using a Mac and MacOS refuses to open the Tor Browser app because it is from an unknown developer, hold the control key and right-click the Tor Browser app and then select “open.” This will create an exception for the Tor Browser app and open it.

5.	Reload http://whatismyip.com inside of the Tor Browser and verify that your IP address has changed. 

6.	Determine your IP address using three different websites (e.g., whatismyip.com, http://www.whatsmyip.org, and whatismyipaddress.com). Note what IP addresses each site reports for your browser.

7.	Look up the location of each IP address you noted in step 6 using a service like wolframalpha.com.

    **Question:** Which parts of the world do the IPs you noted in step 6 belong?

8.	In your Tor Browser (BYU will restrict this page on campus), read the about how to use Tor effectively: https://www.torproject.org/download/download-easy.html#warning

9.	Tor also provides the functionality of a server only being accessible via the Tor network. This is what is known colloquially as “the dark web.” While it’s true that there are many sites providing illegal services on the dark web, there are also legitimate uses for the dark web as well.

10.	 Read this short article about the dark web:

    https://www.wired.com/2014/11/hacker-lexicon-whats-dark-web/ 
    
11.	Access the legitimate TOR services:

    ProPublica (non-profit news site):
    : http://www.propub3r6espa33w.onion

    The Federalist Papers (originally published pseudonymously in 1787–1788):
    : http://duskgytldkxiuqc6.onion/fedpapers/federa00.htm

    The Washington Post’s SecureDrop site for whistleblowers:
    : http://vbmwh445kf3fs2v4.onion

    SecureDrop uses the Tor network to allow whistleblowers to securely share information with the news media:

    ![](../images/lab_13_2.png){: width=60%}
    
    **Note:** If you’re interested in how SecureDrop works, see here: https://securedrop.org/faq.
    
    Visit the Duck Duck Go TOR service search engine, and search for something:
    : http://3g2upl4pq6kufc4m.onion 

    If you have a Facebook account, access Facebook using their TOR service:
    : https://facebookcorewwwi.onion/

    Note: Facebook says that as of April 2016, [more than 1 million people access Facebook via Tor](https://www.facebook.com/notes/facebook-over-tor/1-million-people-use-facebook-over-tor/865624066877648/)
    
12.	Try to load the same URL in a browser other than the Tor Browser. 

    **Question:** What error message do you receive?

**Question:** What do you think about the experience of accessing TOR services? 

