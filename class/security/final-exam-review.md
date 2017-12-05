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

* Name each of the four things that cryptography provides, and define each one.

* What is the difference between symmetric and asymmetric cryptography? Give at least two examples of each.

* When you exchanged a symmetric message with another class member, was it important that the other parameters of the block cipher besides the key (i.e., algorithm name, mode of operation, IV (if any), key length, etc.) were kept secret? If so, why, or if not, why not? Name the principle.

    * What is Shannon's Maxim, also known as Kerckhoff's principle? Give an example of the maxim/principle in practice. 

* Fundamentally, how do secure block ciphers such as AES work? "Claude Shannon, pioneer of digital computing and modern cryptography, demonstrated that \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, sufficiently combined, yield encrypted data that is indistinguishable from random data."

* Imagine 200 people wish to communicate securely using symmetric keys, one symmetric key for each pair of people. How many symmetric keys would this system use in total?

* Does a 256-bit RSA key (a key with a 256-bit modulus) provide strength similar to that of a 256-bit AES key? Explain.

* What is the difference between hashing and encrypting?

* If you change only a single bit in a file of billions of bits, you might reason that the hashes would be nearly the same. Are they? Explain why or why not, and name the effect at play.


## Digital Certificates

* How is trust handled differently by S/MIME and PGP public key?

* How does an app like Signal compare to PGP or S/MIME? Discuss usability and underlying cryptography (symmetric? asymmetric?)


## Vulnerability Scanning

* Describe the first steps an attacker performs in attacking a system. Relate the steps to the risk calculation formula (risk = asset x vulnerability x threat). 

* Define "attack surface." How can an organization decrease their attack surface?


## Hardening

* What is a "zero day"?

* What is the best security practices discussed in class that individuals and organizations can do to harden themselves against weaponized exploits of known vulnerabilities? Name at least one reason why organizations may find it difficult to perform this best practice.


## Password Cracking

* Discuss the importance of salting passwords.

* What software tools can be used to crack password hashes? Name at least two used in class. What hardware is often used for the fastest cracking speeds (hint: think of the Brutalis)?

* Password cracking is a function of what two input discussed in class? Explain the two factors.


## SQLi and XSS

* What is the number one best-practice defense against web-based attacks such as SQLi and XSS? 

* What is the difference between SQLi and XSS?


## Network Security Monitoring

* What are two key performance metrics that you could use measure the performance and effectiveness of your organization's network security monitoring efforts.

* List each of the steps an attacker performs when attempting to achieve a goal. How do these steps relate to the kill-chain concept? Why is the kill-chain concept important?


## Privacy

* How does web privacy relate to information security management (why are we studying it in this class)? Name at least two ways.


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
