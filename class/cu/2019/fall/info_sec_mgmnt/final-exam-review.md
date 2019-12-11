---
layout: assignment
title: Topics from the semester, Fall 2019
---

This is a structure to help guide you in your study -- it is not an all-inclusive guide.


# Introduction to the class

* Kinds of Attackers
   * Rogue hackers
   * Organized Crime
      * Credit Card fraud
         * Move to chip
      * Bank theft
         * ATMs
         * Swift network
   * Insider threat
      * Edward snowden
      * Rogue DEA agents, stealing bitcoin from silkroad
   * Nation states
      * China attacking RSA
      * North korea
      * Russia attacking Ukraine, notpetya
      * US and Israel attacking Iran, Stuxnet


# Threat Modeling

* Cheating exercise
* Eliminating versus mitigating risk. Security = managing acceptable level of risk. Not a binary property
* Definitions: 
   * risk = impact x probability
   * Risk = asset x vulnerability x threat
* X-wing death star attack
* Security cards:
   * Human impact
   * Adversary motivations
   * Adversary resources
   * Adversary methods
* Security is a mindset


# Cryptography -- Symmetric Encryption and Hashing

* Cryptography provides these fundamental security needs:
   * Confidentiality
   * Integrity
   * Authenticity
   * Non-repudiation
* Cryptographic primitives for each of the above provisions: (See [here](https://en.wikipedia.org/wiki/Cryptographic_primitive#Commonly_used_primitives))
* History of crypto
   * Domain of spies and military
      * Telegram
      * War radio communications
      * Classified as a munition
   * Clinton crypto wars, 1990s, clipper-chip, encryption declassified
   * Apple vs fbi
      * Which attacker did apple leave out of their phone-encryption threat model
* Definitions
   * taxonomy:
      * Cryptology
         * Cryptanalysis
         * Cryptography
            * Substitution
               * Code
               * cipher
            * transposition
      * Steganography
   * Plaintext vs ciphertext
* Building blocks:
  * Transposition
     * E.g., scytale
  * Substitution
     * ciphers:
        * Caesar cipher
        * Vignere cipher
     * Attacks
        * Brute force
        * Frequency analysis
* Enigma machine
* Claude shannon -- substitution and transposition, sufficiently combined, yield encrypted data that is indistinguishable from random data
* Kerckhoff’s principle: the secret is in the key
   * Vs. security through obscurity
   * Dvd encryption
   * Never roll your own crypto
      * AES
      * RSA
      * Diffie-Hellman
* Keyspace
   * Number of bits
   * Guess how many on average in order to crack?
   * Cloud crackers
   * Tesla key-fob attack
* One-time pad
   * Requirements:
      * Must be perfectly random
      * Pad must be as long as the message
      * Must be used only once
* Snake-oil
   * Modern history: Crown Sterling and their Time AI
* Pseudo-random number generators
   * Lava-lamp
      * Sources of entropy
   * Seed to get same random numbers each time
      * Seed becomes the secret
* Stream cipher
   * XOR with prng-stream
   * How WAP work
* Demo of aes babington plot
* Block cipher
   * Examples
      * Aes
      * Blowfish
      * Des
   * Mode of operation
      * Meme: “You can still see the penguin” without Initialization Vector
* Hashing
   * Provides integrity
   * One-way, therefore no key
      * Happy birthday to the ground
   * Use in password storage
   * Fixed-size output
   * Avalanche effect
   * Collision-resistance -- birthday effect
   * Flame malware, the work of apt Equation Group (the NSA tailored operations unit), used md5 hash collision to hijack microsoft update process
      * Microsoft was still using known-broken md5 for certificate authenticity verification
   * Sha-1 migration to sha-2 migration to sha-3
      * Google threatened that websites that used outdated sha1 would show a security error when users visited those sites in Chrome


# Cryptography -- Supplemental

* Understand binary, hex


# Cryptography -- Asymmetric

* Key-sharing problem for symmetric encryption
   * Number of pairs -- metcalf’s law
   * Difficult to share keys
* Diffie-Hellman and the Discrete Logarithm problem
   * Used to exchange a key, which is then used for symmetric
   * Problem:
      * Still have to negotiate key for each pair
      * no authentication
* RSA
   * Ron rivest, adi shamir, leonard adleman
   * Trapdoor one-way function -- extremely difficult to reverse, unless you have the key
      * Prime number factorization with extremely large numbers
         * E.g., 4096-bit product of two primes
   * Uses:
      * Encryption
      * Digital Signing
         * Authentication + non-repudiation
         * Hash a message, sign hash with private key, can be verified by applying public key to hash and them hashing 
   * Problems:
      * Dang slow (x1000)
      * Key sizes must be much larger because attack is different compared to symmetric
* Solution: combine asymmetric with symmetric
   * Perfect forward secrecy -- must not use asymmetric to encrypt the key... only for authentication. Use ephemeral DH for key exchange
   * Lavabit’s mistake
   * Heartbleed
* Quantum computing vs (asymmetric and symmetric encryption)


# Cryptography -- Digital Certificates

* X.509 
   * Centralized authority with control over root certificates
   * Dadgum symantec being sloppy with their root cert
   * Stuxnet used two stolen root certs
* Pgp certs
   * Phil zimmerman, released PGP, federal scrutiny, MIT published source code as a book, did govt really want to sue MIT? Decided no.
   * Decentralized cert, therefore dadgum key signing parties, oh what fun
   * Failure from social network standards
* Signal
   * Funding from DoD
   * Approved for use by US Senate
   * Protocol built into WhatsApp, Facebook Messenger, and now Skype


# Authentication and Passwords

* Gaining access involves:
   * Identification
   * Authentication
   * Authorization
* Authentication
   * Something you know
      * passwords
   * Something you have
      * Key, debit card, signet ring, rsa keyfob
   * Something you are
      * Biometrics (fingerprint, retina scan), secret answer questions, walking gait, facebook trusted contacts
* Passwords
   * Why they continue to exist despite being weakest link
   * Tips
      * Password manager
      * Passphrases
   * Password reuse is why hacks and leaks of podunk sites is bad
* iPhone, authenticate with either password or fingerprint. Does two authentication attack-vectors make the overall scheme less secure?
* Multi-factor authentication


# Password Cracking

* Function of two input: entropy and speed
* Entropy
   * Measured in bits
   * Measure of uncertainty
   * Keyspace is upper bound
   * Where do encryption keys come from? Do you memorize a 128-bit number to log into facebook etc?
   * General calculation of entropy of a password
   * Password leaks => rules for password cracking programs
   * Know your memes: “correct horse battery staple”
   * Changes in password best practices from 2017 (seriously, know these, and make the companies you work at start employing them, for crying out loud)
* Speed
   * Online vs offline attack
* Salting
   * Why? (mitigate rainbow table attack)
   * Peppering 
      * (seriously who comes up with these names. Who sits around and visualizes shaking spices onto computer things)
* Targeted attack -- dossier



# Vulnerability Scanning

* Know your meme: nmap in the movies
* Steps:
1. Passive Recon
2. Active scanning
* Goal: learn the network. Defender’s advantage is that they know their network and you do not. So learn it.
   * Sweep network to enumerate assets
      * For each asset, enumerate ports
         * For each service listening on a port, learn version of software
            * Look up vulnerabilities
* What is a port and do I own a boat to dock in said port
* Management goal: minimize attack surface


# Exploitation

* Vocab: bugs, vulnerabilities, exploits, zero days
* Bug bounty programs (e.g., hackerone)
* Shady vuln market -- e.g., zerodium, exploithub,
* What is metasploit, what does it contain generally, etc, github modules, hacker culture surrounding it and other hacker outlets (defcon)
Hardening
* Software updating == patching
* Some patches bring new features, some fix bugs
* Some bugs are vulnerabilities
* Some vulnerabilities are exploitable
* That nation states find exploits and weaponize them without alerting vendors (e.g., microsoft), and that nation states get pwned by groups who sell their spoils to other nation states, that the NSA got its pet-tool Eternal Blue stolen and freaked and told Microsoft about it and that they should patch it, and Microsoft freaked and emergency-issued a patch even back for the we-swear-we-will-never-issue-another-patch-for-it Windows XP, yet of course few actually patched, and then North Korea said “hey this exploit looks cool” and made wannacry out of it, and the world got wrecked, and then Russia said “that was a cool thing you did North Korea, we’ll do it too” and months later ran NotPetya and wrecked the world again, and then finally years later anything that can be wrecked by eternal blue has already been wrecked, and you had the honor of running wannacry on your laptops, drawing the attention and panic and probably-ire of CU campus security.
* Why is patching hard? -- [Wendy Nather](https://duo.com/decipher/opinion-4-reasons-why-organizations-cant-just-patch) (It’s not just laziness, but it’s not not laziness either)
* Management: Patch your dadgum systems
   * But assume that you’ll be compromised anyway


# Physical Security

* There can be no information security without physical security
* Principles:
   * Terse
      * Deter
      * Detect
      * respond
   * verbose
      * Deter
      * Detect
      * Alarm
      * delay 
      * Respond
* Defense in depth
* Mitigations -- full-disk encryption, shredding, remote erase, cameras, door locks, man trap
* Be familiar with the concept and practice of penetration testing, and its use in the world of business, a la the ongoing Iowa + Coalfire story
* Lock picking 
   * Understand basic principles of lock picking, including how it's possible (manufacturing intolerance), tension wrenches and lifting (SLP), bumping.
   * Code of conduct
      * Don’t pick a lock you don’t own
      * Don’t pick a lock you rely on



# Human Element

* Wet-ware, 8th layer of OSI model
* Social engineering
   * Phishing
      * Spear phishing
      * Defense: 
         * 2fa, token-based
         * Training
   * Vishing
   * Human brain susceptibility to ignoring security warnings
      * Dual-task interference
      * habituation
   * Mitnick’s methods
      * Phone call
         * Gain trust
         * Offer to give help
         * Ask for help
      * Goal is to obtain information or access
* Security training
   * What does it involve
   * Why is it hard -- Sisyphean task


# Network Security Monitoring

* Incident response | Intersection of security and forensics
* Dwell time and discovery
* Schneier says: Monitor first
* Prevent, but assume prevention failure
* Kill-chain concept -- stop attacker before they accomplish their goal, and defenders win
* Incident response as hand-to-hand crime-scene combat
* Practice of NSM -- collect everything, full visibility
   * Network taps
   * Mapping a network
   * General concept of the need to be mindful about placement of taps so that true host IPs can be identified (because otherwise, problem of NAT translation)
* Principle of a defensible network
   * Can be watched
   * Can be audited
   * Can be inventoried
   * Limit an intruder’s freedom to maneuver
   * Offer a limited number of services
   * Can be kept current
* How to justify getting a CIRT
   * Why is it hard
   * Key metrics, including which ones we identified as being amazing, and which ones we thought wouldn’t work
      * Amazing:
         * Count incidents (by category)
         * Measure dwell time to mitigate breach
* Discovery internal vs external


# Information Security in Organizations

* Technology vs organization vs people domains
   * Subtopics within each domain
* Organization
   * CEO
      * Responsible to tone at top
   * CIO
      * Prime directives, and how they clash with security needs
   * CISO
      * Major responsibilities:
         * Incident response
         * Digital forensics
         * Red teaming
         * SETA
         * Secure software development (bake raisins into the dadgum bread, do not sprinkle on top after baking loaf)
         * Physical security
         * Regulatory compliance
      * Where in hierarchy
         * Under CIO?
         * Straight to CEO?
         * Straight to board or to Chief Risk Officer?
   * Employees
      * Information security policies (ISPs)
      * Insider Threat. Continuum of intent for ISP violation
         * Passive, non-volitional
         * Volitional but not malicious
         * Intentional, malicious
* Screwups (organizational)
   * OPM
   * Target
   * Yahoo
   * Equifax


# Malware Analysis

* Know Notpetya, Wannacry, Stuxnet because they are modern history
    * NotPetya as a supply chain attack, see [CrowdStrike report](https://www.crowdstrike.com/blog/should-you-worry-about-software-supply-chain-attacks/)
    * [Wired article on NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)
* Worm vs virus vs trojan
   * These are functionalities, and a malware can have more than one
* Common types
   * Wiper
   * Ransomware
   * Keylogger
   * Banking trojan
   * etc
* James bond villains 
    * Evgeniy Bogachev, FBI wanted list, purported author and manager of infamous Zeus trojan
    * [Maksim V. Yakubets, Kingpin of cybercrime game Evil Corp, distributor of Dridex banking trojan](https://arstechnica.com/information-technology/2019/12/members-of-evil-corp-the-cybercrime-group-that-lived-in-luxury-are-indicted/)

* Ransomware and how to protect against it
   * Maybe pay ransom so keep cryptocurrency on hand?
   * Backups?
      * Hot site
      * Cold site
      * Tapes
   * Business model, differential payments, targeting of deep-pocket vulnerable groups like city govts and schools and managed service providers
* Analysis
   * Goals
      * Understand scope, 
      * Understand behavior, 
      * Understand how to detect
   * Analysis
      * Static
      * Dynamic
      * Memory
   * Remediation
      * Wipe and re-image / re-store 
   * Protect against
      * Antivirus (yeah right, useless against zero-days)


# XSS

* Run arbitrary web scripts in victims’ browsers
* Reflected vs stored
* Common uses:
   * Steal login session cookies
   * Skim credit card data
   * Website defacement
      * All hail ncage
   * Malicious redirects
* How companies can mitigate
   * Various ways, including sanitize inputs


# SQLi

* Understand on a basic conceptual level that it allows databases to be pilfered by letting attackers run arbitrary database commands through unsanitized user input fields or urls
* If you understand https://xkcd.com/327/ you’ll be fine
* How companies can mitigate
   * Various ways, including sanitize inputs


# Security and Terrorism

* The five steps from Beyond Fear for threat modeling
   * Asset identification
   * Risk to asset identification
   * Security solution -- Effectiveness for mitigating identified risks
   * security solution -- caused risks
   * Security solution -- tradeoffs
* Human biases (from Bruce Schneier's _Beyond Fear_, quoted in [this article](https://www.schneier.com/essays/archives/2008/01/the_psychology_of_se.html), in "Conventional Wisdom About Risk" section)
* Specious security-liberty tradeoff


# Information Privacy

* Reasons how information security relates to information privacy
   * Same tools used for both
   * Assets that companies are trying to protect have privacy implications
   * Specious argument that security and privacy are a tradeoff
      * Btw this is a very good book. Law-professor-level stuffy, but compact and excellent: https://www.danielsolove.com/nothing-to-hide/ 
* Vocab: PII and PHI because you’ll look silly if you don’t know what those stand for
* Behavioral tracking business model
   * How do advertisers track customers across websites -- e.g., Third-party cookies
* Three key events:
    1. Cambridge Analytica
    2. GDPR
    3. California Consumer Privacy Act

# Other

**Number One Priorities** if you are in charge of infosec in an organization
<p>
<div>1. <a href='https://www.schneier.com/crypto-gram/archives/2001/0715.html#5'>Monitor first</a> (NSM) <== most number 1</div>
<div>1. Implement and manage patch management</div>
<div>1. Implement and manage backup solution</div>
<div>1. Remind yourself every day -- no security through obscurity! Do not roll your own crypto (put picture of dvd john on your cubicle and in your wallet)</div>
</p>