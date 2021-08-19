---
layout: assignment
title: Topics from the semester, Fall 2020
---

I will populate this closer to the end of the semester. Meanwhile, feel
free to review [the topics guide from Fall 2019]({{ '/classes/cu/2019/fall/info_sec_mgmnt/final-exam-review/' | relative_url}})

---

This is a list of topics discussed in class to help guide you in your study -- it is not an all-inclusive guide.


# Threat Modeling and Cybersecurity Risk Management

* Kinds of Attackers
   * Rogue hackers
   * Organized Crime
   * Insider threat
   * Nation states
* Eliminating versus mitigating risk. Security is managing _acceptable level_ of risk. Not a binary property
* Definitions:
   * Risk = impact x probability
   * Risk = asset x vulnerability x threat
* Asset modeling
   * human impact
   * Security categorization of information systems
     (see [this activity](https://daveeargle.com/security-assignments/activities/assets-objectives-business-impact.html)):
        * impact of loss of confidentiality, integrity, availability
* Attacker modeling (security cards):
   * Adversary motivations
   * Adversary resources
   * Adversary methods
* Security as a mindset
* NIST Cybersecurity Framework
   * Five functions
   * Mapping CSF Core categories and outcomes to 800-53 controls
     [see this online tool](https://daveeargle.com/nist_csf_800_53_mapping/)
* Objectives of confidentiality, integrity, and availability




# Cryptography -- Symmetric Encryption and Hashing

* Cryptography provides these fundamental security needs:
   * Confidentiality
   * Integrity
   * Authenticity
   * Non-repudiation
* Cryptographic primitives for each of the above provisions: (See [here](https://en.wikipedia.org/wiki/Cryptographic_primitive#Commonly_used_primitives))
* History of crypto
   * Domain of spies and military
   * Clinton crypto wars, 1990s, clipper-chip, encryption declassified
   * Apple vs fbi
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
   * DVD encryption
   * Never roll your own crypto
      * AES
      * RSA
      * Diffie-Hellman
* Keyspace
   * Number of bits
   * Guess how many on average in order to crack?
   * Cloud crackers
* One-time pad
* Snake-oil
   * Modern history: Crown Sterling and their Time AI
* Pseudo-random number generators
* Stream cipher
* Block cipher
    * Meme: “You can still see the penguin” without Initialization Vector
* Hashing
   * Use in password storage
   * Avalanche effect
   * Collision-resistance -- birthday effect


# Cryptography -- Supplemental

* Understand binary, hex, extreme basics of computer IP addresses (private vs public, recognizing an IP address, etc.)


# Cryptography -- Asymmetric

* Key-sharing problem for symmetric encryption
   * Metcalf’s law
* Diffie-Hellman and the Discrete Logarithm problem
   * Used to exchange a key, which is then used for symmetric
   * no authentication
* RSA
   * Trapdoor one-way function -- extremely difficult to reverse, unless you have the key
   * Uses:
      * Encryption
      * Digital Signing
         * Authentication + non-repudiation
         * Hash a message, sign hash with private key, can be verified by applying public key to hash and them hashing
   * Problems:
      * Dang slow (x1000)
      * Key sizes must be much larger because attack is different compared to symmetric
* Solution: combine asymmetric with symmetric
   * Perfect forward secrecy -- must not use asymmetric to encrypt the key... only for authentication. Use ephemeral DH for key
     exchange


# Cryptography -- Digital Certificates

* Things like X.509 (e.g., SSL) certs, PGP certs, and comparison against the Signal protocol


# Authentication and Passwords

* Control access using the following
   * Identification
   * Authentication
   * Authorization
* Authentication
   * Something you know
   * Something you have
   * Something you are
* Passwords
   * Why they continue to exist despite being weakest link
   * Tips
      * Password manager
      * Passphrases
   * Problem of password reuse
* Multi-factor authentication (2FA)


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
   * Changes in password best practices from 2017 (seriously, know these, and make the companies you work at start employing
     them, for crying out loud)
* Speed
   * Online vs offline attack
* Salting
   * Why? (mitigate rainbow table attack)
* Peppering
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
* What is a port
* Management goal: minimize attack surface


# Exploitation

* Vocab: bugs, vulnerabilities, exploits, zero days
* Bug bounty programs (e.g., hackerone)
* Shady vuln market -- e.g., zerodium, exploithub
* What is metasploit, what does it contain generally, etc, github modules, hacker culture surrounding it and other hacker
  outlets (defcon)



# Physical Security

* There can be no information security without physical security [Law #3](https://www.marshall.edu/it/departments/information-security/10-immutable-laws-of-security/)
* Defense in depth
* Various mitigations -- full-disk encryption, shredding, remote erase, cameras, door locks, man trap
* Practice of penetration testing
* Lock picking
   * Understand basic principles of lock picking, including how it's possible (manufacturing intolerance), tension wrenches and
     lifting (SLP), bumping.
   * Code of conduct
      * Don’t pick a lock you don’t own
      * Don’t pick a lock you rely on


# Human Element

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


# Network Security Monitoring and Incident Response

* Incident response | Intersection of security and forensics
* Dwell time and discovery
* Schneier says: Monitor first
* Prevent, but assume prevention failure
* Kill-chain concept -- stop attacker before they accomplish their goal, and defenders win
* Incident response as hand-to-hand crime-scene combat
* Practice of NSM -- collect everything, full visibility
   * Network taps
   * Mapping a network
   * General concept of the need to be mindful about placement of taps so that true host IPs can be identified (because
     otherwise, problem of NAT translation)
* Principle of a defensible network
* How to justify getting a CIRT
   * Why is it hard
   * Key metrics
       * Count incidents (by category)
       * Measure dwell time to mitigate breach
* Discovery internal vs external





# Malware Analysis

* Know Notpetya, Wannacry, Stuxnet because they are modern history
    * NotPetya as a supply chain attack, see [CrowdStrike report](https://www.crowdstrike.com/blog/should-you-worry-about-software-supply-chain-attacks/)
    * [Wired article on NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)
* Functionalities of malware: Worm, virus, trojan
* Common types: Wiper, Ransomware, Keylogger, Banking trojan, etc
* James bond villains
    * Evgeniy Bogachev, FBI wanted list, purported author and manager of infamous Zeus trojan
    * [Maksim V. Yakubets, Kingpin of cybercrime game Evil Corp, distributor of Dridex banking trojan](https://arstechnica.com/information-technology/2019/12/members-of-evil-corp-the-cybercrime-group-that-lived-in-luxury-are-indicted/)
* Ransomware and how to protect against it
   * Maybe pay ransom so keep cryptocurrency on hand?
   * Backups?
      * Hot site
      * Cold site
      * Tapes
   * Business model, differential payments, targeting of deep-pocket vulnerable
     groups like city govts and schools and managed service providers
* Malware analysis
   * Goals
      * Understand scope
      * Understand behavior
      * Understand how to detect
   * Analysis methods
      * Static
      * Dynamic
      * Memory
   * Remediation
      * Wipe and re-image / re-store
   * Protect against
      * Antivirus (except useless against zero-days)
      * Intrusion detection

# Online Security

* XSS
  * Run arbitrary web scripts in victims’ browsers
  * Reflected vs stored
  * Common uses:
     * Steal login session cookies
     * Skim credit card data
     * Website defacement
     * Malicious redirects
  * How companies can mitigate
     * Various ways, including sanitize inputs
* SQLi
  * Understand on a basic conceptual level that it allows databases to be pilfered by letting attackers run arbitrary database
    commands through unsanitized user input fields or urls
  * Understand <https://xkcd.com/327/>
  * How companies can mitigate
     * Various ways, including sanitize inputs
* Leaky cloud buckets


---

We haven't explicitly covered these yet in class! I'll move them up if we do get to them.

# Hardening

* Software updating (patching)
* Some patches bring new features, some fix bugs
* Why is patching hard? -- [Wendy Nather](https://duo.com/decipher/opinion-4-reasons-why-organizations-cant-just-patch) (It’s
 not just laziness, but it’s not _not_ laziness either)



# Information Privacy

* Reasons how information security relates to information privacy
   * Same tools used for both
   * Assets that companies are trying to protect have privacy implications
   * Specious argument that security and privacy are a tradeoff
      * Btw the following is a very good book. Law-professor-level stuff, but compact and excellent: <https://www.danielsolove.com/nothing-to-hide/>
* Vocab: PII and PHI
* Behavioral tracking business model
   * How do advertisers track customers across websites -- e.g., Third-party cookies
* Three key events:
    1. Cambridge Analytica
    2. GDPR
    3. California Consumer Privacy Act


# Information Security in Organizations

* Technology vs organization vs people domains
   * Subtopics within each domain
* Organization
   * CEO
      * Responsible to set tone at top
   * CIO
      * Prime directives, and how they clash with security needs
   * CISO
      * Major responsibilities:
         * Incident response
         * Digital forensics
         * Red teaming
         * SETA
         * Secure software development
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


# Security and Terrorism

* The five steps from "Beyond Fear" for threat modeling
   * Asset identification
   * Identify risk to assets
   * Evaluate security solution -- Effectiveness for mitigating identified risks
   * Evaluate security solution -- caused risks
   * Evaluate security solution -- tradeoffs
* Human biases (from Bruce Schneier's _Beyond Fear_, quoted in
  [this article](https://www.schneier.com/essays/archives/2008/01/the_psychology_of_se.html), in "Conventional Wisdom About Risk" section)
* Specious security-liberty tradeoff
