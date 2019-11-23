---
layout: assignment
title: Final Exam Review
---

These are examples of quesitons and topics that may appear on the final exam, in one form or another. Plesae note that questions not explicitly on this review document may appear on the final exam.


## Threat modeling

* Create a threat model for cheating on an exam (i.e., obtaining an undeserved grade). Which attack is the easiest for the attacker? Which attack poses the least amount of risk for the attacker? You should have metrics representing ‘ease’ and ‘risk’ so that you can answer the question.


## Symmetric encryption and hashing

* Name each of the four properties that cryptography provides for secure communications, and define each one. Give an example of what cryptographic primitive you could use to achieve each property. (See [here](https://en.wikipedia.org/wiki/Cryptographic_primitive#Commonly_used_primitives).)

* What is the difference between symmetric and asymmetric cryptography? Give at least two examples of each.

* When you exchanged a symmetric message with another class member, was it important that the other parameters of the block cipher besides the key (i.e., algorithm name, mode of operation, IV (if any), key length, etc.) were kept secret? If so, why, or if not, why not? Name the principle.

    * What is Shannon's Maxim, also known as Kerckhoff's principle? Give an example of the maxim/principle in practice. 

* Fundamentally, how do secure block ciphers such as AES work? "Claude Shannon, pioneer of digital computing and modern cryptography, demonstrated that \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, sufficiently combined, yield encrypted data that is \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_."

* Imagine 200 people wish to communicate securely using symmetric keys, one symmetric key for each pair of people. How many symmetric keys would this system use in total?

* Does a 256-bit RSA key (a key with a 256-bit modulus) provide strength similar to that of a 256-bit AES key? Explain.

* What is the difference between hashing and encrypting?

* If you change only a single bit in a file of billions of bits, you might reason that the hashes would be nearly the same. Are they? Explain why or why not, and name the effect at play.

* Be able to perform simple substitution and transposition encryption, like you did in the lab.


## Digital Certificates

* How is trust handled differently by X.509 and PGP public key systems?


## Vulnerability Scanning

* Describe the steps an attacker performs in attacking a system. Relate the steps to the risk calculation formula (risk = asset x vulnerability x threat). 

* Define "attack surface." How can an organization decrease their attack surface?


## Exploitation

* Be familiar with business models of finding and selling vulnerabilities, grey markets, buyers and sellers of exploits, NSA NOBUS policy
* Be familiar with what Metasploit modules are and where they can be found (github, for sale, etc), 



## Hardening

* What is a "zero day"?

* Discuss how patching is one of the best security practices that individuals and organizations can do to harden themselves against weaponized exploits of known vulnerabilities. Name at least one reason why organizations may find it difficult to patch.


## Authentication and Passwords

* Gaining access involves what three things? Define each. Use an example to illustrate each of the three things.

* Name three primary means of authentication, and give at least two examples of each.

* Why do passwords persist as such a common means of authenitcation if they are often the weakest link in the security chain?

* Discss the merits and shortfalls of 2FA.




## Password Cracking

* How much entropy does a nine-sided die have? Express your answer in bits. Also, be able to calculate entropy of a passphrase.

* What is the maximum entropy that a 128-bit key can have? Express your answer in bits. What if you use a random-number generator that only ever produces one of two 128-bit keys. How much entropy exists in this this system?

* Understand the importance of hashing and salting passwords.

* What software tools can be used to crack password hashes? Name at least two used in class. What hardware is often used for the fastest cracking speeds (hint: think of the Brutalis)?

* Password cracking as a function of entropy and guessing speed.


## Physical Security

* Be familiar with the concept and practice of penetration testing, and its use in the world of business, a la the ongoing Iowa + Coalfire story
* Understand basic principles of lock picking, including how it's possible (manufacturing intolerance), tension wrenchs and lifting, bumping.



## Network Security Monitoring

* What are two key performance metrics that you could use measure the performance and effectiveness of your organization's network security monitoring efforts. Discuss the shortfalls of other metrics of organizational security performance, such as of comparing total security expenditures betweeen organizations.

* Discss the kill-chain concept and its importance, in the context of breaches and compromises, as defined in class.


## Privacy

* How does web privacy relate to information security management?

* How do advertisers track users across websites?

* The most common retort to privacy advocates is "I've got nothing to hide." How might a privacy advocate respond?


## Social Engineering

* What are the common goals of a social engineer? What principles does a social engineer use to obtain these goals? Give at least three examples of a tactic a social engineer might try


## Information Security in Organizations

* List the responsibilities of a CISO

* What aspects of information security management relate to the organization? Be able to identify key organizational information security concepts (as opposed to technical or human ones).


## Malware

* Be conversant with major malware incidents and actors discussed ad nauseam in class, including WannaCry, NotPetya, EternalBlue, Mimikatz, Shamoon, the Zeus Trojan, botnets.
* Be familiar with malware business models, including DDoS for hire and targeted ransomware.



## Miscellane and Memes

* You can still see the penguin
* Don't roll your own crypto
* Snakeoil
* You should be conversant with key networking principles, such as IP addresses and DNS, packets, ports.


## SQLi and XSS

* What is the number one best-practice defense against web-based attacks such as SQLi and XSS? 

* What is the difference between SQLi and XSS?vv


## Security and Terrorism

* Use the five steps for rationally considering a threat to analyze [a security countermeasure of my choosing].


## Overall

Some of the most important things to remember from this class:
	
* don't roll your own crypto
* first things to do in an organization:
    * implement backup policy
    * implement network monitoring
    * implement and monitor patch management
