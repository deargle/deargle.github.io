---
layout: assignment
title: Final Exam Review
---

These are questions that may appear on the final exam, in one form or another. This is a living document. You can view diffs between the most up-to-date version and older versions on github -- I'll show you how later.

[Diff between the original version and one posted 12/5/2017](https://github.com/deargle/deargle.github.io/commit/43f3bca749a5843ea22ba612f5eab6d3ecf97a8a#diff-a8b3162e09b806d64c21f18902057e39)

P.S. -- all slides are available [here](https://www.dropbox.com/sh/yoq1cqn1tbupgwz/AAC4I9X-I79kAYtzv8ZemwQ0a?dl=0)


## Threat modeling

* Create a threat model for cheating on an exam (i.e., obtaining an undeserved grade). Which attack is the easiest for the attacker? Which attack poses the least amount of risk for the attacker? You should have metrics representing ‘ease’ and ‘risk’ so that you can answer the question.


## Symmetric encryption and hashing

* Name each of the four properties that cryptography provides for secure communications, and define each one. Give an example of what cryptographic primitive you could use to achieve each property. (See [here](https://en.wikipedia.org/wiki/Cryptographic_primitive#Commonly_used_primitives))

* What is the difference between symmetric and asymmetric cryptography? Give at least two examples of each.

* When you exchanged a symmetric message with another class member, was it important that the other parameters of the block cipher besides the key (i.e., algorithm name, mode of operation, IV (if any), key length, etc.) were kept secret? If so, why, or if not, why not? Name the principle.

    * What is Shannon's Maxim, also known as Kerckhoff's principle? Give an example of the maxim/principle in practice. 

* Fundamentally, how do secure block ciphers such as AES work? "Claude Shannon, pioneer of digital computing and modern cryptography, demonstrated that \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, sufficiently combined, yield encrypted data that is indistinguishable from random data."

* Imagine 200 people wish to communicate securely using symmetric keys, one symmetric key for each pair of people. How many symmetric keys would this system use in total?

* Does a 256-bit RSA key (a key with a 256-bit modulus) provide strength similar to that of a 256-bit AES key? Explain.

* What is the difference between hashing and encrypting?

* If you change only a single bit in a file of billions of bits, you might reason that the hashes would be nearly the same. Are they? Explain why or why not, and name the effect at play.

* Be able to perform simple substitution and transposition encryption, like you did in the lab.


## Digital Certificates

* How is trust handled differently by S/MIME and PGP public key?

* How does an app like Signal compare to PGP or S/MIME? Discuss usability and underlying cryptography (symmetric? asymmetric?)


## Vulnerability Scanning

* Describe the first steps an attacker performs in attacking a system. Relate the steps to the risk calculation formula (risk = asset x vulnerability x threat). 

* Define "attack surface." How can an organization decrease their attack surface?


## Hardening

* What is a "zero day"?

* What is the best security practices discussed in class that individuals and organizations can do to harden themselves against weaponized exploits of known vulnerabilities? Name at least one reason why organizations may find it difficult to perform this best practice.


## Authentication and Passwords

* Gaining access involves what three things? Define each. Use an example to illustrate each of the three things.

* Name three primary means of authentication, and give at least two examples of each.

* Why do passwords persist as such a common means of authenitcation if they are often the weakest link in the security chain?

* Your organization only uses passwords for authentication, and there is a concern that the passwords might be cracked by an attacker. What could you recommend to bolster the overall security of the system?


## Password Cracking

* How much entropy does a nine-sided die have? Express your answer in bits. (Also be able to calculate entropy of a passphrase, as we did in class.)

* What is the maximum entropy that a 128-bit key can have? Express your answer in bits. What if you use a random-number generator that only ever produces one of two 128-bit keys. How much entropy exists in this this system?

* Discuss the importance of salting passwords.

* What software tools can be used to crack password hashes? Name at least two used in class. What hardware is often used for the fastest cracking speeds (hint: think of the Brutalis)?

* Password cracking is a function of what two input discussed in class? Explain the two factors.

* What password tips might you share to improve password security? (We discussed two in class, be familiar with those.)




## SQLi and XSS

* What is the number one best-practice defense against web-based attacks such as SQLi and XSS? 

* What is the difference between SQLi and XSS?


## Network Security Monitoring

* What are two key performance metrics that you could use measure the performance and effectiveness of your organization's network security monitoring efforts. Why is a comparison of total security expenditures betweeen organizations not great benchmark for measuring security performance?

* List each of the steps an attacker performs when attempting to achieve a goal. How do these steps relate to the kill-chain concept? Why is the kill-chain concept important?


## Privacy

* How does web privacy relate to information security management (why are we studying it in this class)? Name at least two ways.

* How do advertisers track users across websites?

* The most common retort to privacy advocates is "I've got nothing to hide." How might you respond?


## Social Engineering

* What are the common goals of a social engineer? What principles does a social engineer use to obtain these goals? Give at least three examples of a tactic a social engineer might try. 


## Information Security in Organizations

* List the responsibilities of a CISO

* What are the three primary areas of security management? Describe the four subtopics relating to the 'organization' area.


## Security and Terrorism

* Use the five steps for rationally considering a threat to analyze [a security countermeasure of my choosing]. 


## Overall

Some of the most important things to remember from this class:
	
* don't roll your own crypto
* first things to do in an organization:
    * implement backup policy
    * implement network monitoring
    * implement and monitor patch management
