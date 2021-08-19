---
title: Information Security Management
school: CU
year: "2019"
semester: fall
coursenum:
 - BAIM-4250-001
 - MSBX-5480-002
slack: https://infosecmanagementf19.slack.com
---

_{{ page.semester | capitalize }} {{ page.year }}_ 

{% for item in page.coursenum %}- {{ item }}
{% endfor %}

<div id='nav-bar'></div>

Instructor
: Dave Eargle  ([contact](<mailto:David.Eargle@colorado.edu>)) 

Class
: See [my.cu.edu](https://my.cu.edu)

Office Hours
: Location: S450J 	
: Hours: MW 2-3pm
: Or, by appointment 

Slack
: [{{page.slack}}]({{page.slack}})


# Course Information


## Course Description

This course is a broad introduction to the managerial issues of information security. Because security is multifaceted, the topics of the class range widely, including technical (e.g., cryptography), managerial (e.g., policy compliance), physical (e.g., door locks), and psychological (e.g., social engineering) issues. A key objective of the class is to develop a security mindset, in which one learns to think like an attacker for ways to exploit a system.

Class topics include the following: 

* Threat modeling
* Cryptography – The Foundation of Information Security
    * Hashes & Symmetric
    * Asymmetric
    * Digital Certificates and PKI
* Physical Security
* Introduction to Computer Networking
* Introduction to Using Linux Terminal
* Attack methods against organizations
    * Vulnerability Discovery
    * Vulnerability Exploitation
    * Password Cracking
* Defense methods for organizations
    * Authentication and Passwords
    * System Hardening and Patch Management
    * Network Security Monitoring
    * Incident Response
* Web Application Security
* Human Element
* Information Privacy
* Information Security in Different Levels of the Organization
* Security and Society

[Final Exam Topics Review](final-exam-review)


## Learning Outcomes

Develop working knowledge of methods of protecting data
: To gain a working knowledge of modern methods of protecting data: encryption, hashing, confidentiality, authentication, integrity, non-repudiation, certificates, and IP security.

Gain familiarity with attack vectors
: To become familiar with attack vectors that are commonly executed in attempting to access and compromise or steal data

Learn methods of attack prevention and detection
: To learn modern methods of attack prevention and detection: antivirus, firewalls, intrusion detection, and system hardening

Learn methods of threat modeling
: To learn state-of-the-art methods of threat modeling.

Develop a security mindset
: This goal will help you think like a security professional — how to identify threats like an attacker, and how to mitigate those threats.

Appreciate the broad disciplines required for IS security
: This class will help you appreciate the broad disciplines required for information security to work. We'll cover subjects as diverse as cryptology, physical security, psychology, and management.


## Content note

Information security has heavy implications for and overlap with politics and regulations. In this class, we will at times examine the tension between security and surveillance. Know that statements from 
the community of information security professionals and experts are often at odds with, and directly
rebut, statements from government or law enforcement representatives. I sincerely appreciate the essential function that law enforcement serves, and I am grateful for good 
work done by law enforcement officers at any levels of government. That said, I believe that the freedom to critique a public policy, public servant, government agent, or government agency is healthy in a 
democracy to the end that it helps us as citizens think critically. We can then in turn impact public policy for the better through participation in local and national politics.

During the class, we will critically analyze things that politicians and other public servants say and do that impact information security or that illustrate class topics, and I will share 
my own views on topics, while I will do my best to make our discussions a place where we can engage bravely, empathetically and thoughtfully with potentially-difficult content every week.



## Communication

<div class='alert alert-info'><strong>Heads up!</strong> I rely <b>heavily</b> on slack to be able to assist you all, and to communicate important information.</div>

For communication, we will use Slack. Add an account at [{{page.slack}}]({{page.slack}}). Consider installing laptop and phone apps so that you get notifications. There is also a desktop client. Use your @colorado.edu email address for instant verification.

My intention is to put class announcements in a dedicated channel on slack, and to have other channels for homework help, current events, discussions, etc. I will try to go through and answer questions posted to slack at least once a day. You can use slack to help one another, to coordinate with your teams, etc.



## Technology Requirements

* This year, I am trying new technology that will allow students to use the weakest and most podunk of laptops in existence to still participate in this class on equal footing with all other students.
  We'll try using **Google Cloud Platform (GCP)**. New accounts on GCP get a $300 credit -- I think you will be able to complete my class without going over that cost. I will have you launch a virtual machine instance on GCP from which you can complete class assignments. You will be able to remotely connect to your instance using Chrome Remote Desktop -- it works just like a browser tab.
  
* This class will require that you learn a bit of Linux and cloud computing. While the class may _feel_ like computer science at times, computer science students would scoff to hear you say this. 
  Oversimplification warning: A computer scientist _creates_ programs, whereas you are merely _running_ programs. You may run programs from a command-line terminal with a black background and white text, 
  which may intimidate you, but if you ever are in a position of management of information technology, I believe that you will be more respected by your team and a more effective manager if you can at least 
  perform, or at least grasp, rudimentary shell tasks. Consider the Linux and computing skills to be [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills).



## Text Materials

I try to only assign readings that are available for free -- for example, blog posts or news articles. I might have you buy one harvard business case at less than $10. I'll let you know later in the semester.

* "Security Engineering 2e" by Ross Anderson (available online [here](http://www.cl.cam.ac.uk/~rja14/book.html))
* "Secrets & Lies" by Bruce Schneier (available online [through CU](http://ucblibraries.summon.serialssolutions.com/#!/search?bookMark=ePnHCXMw42JgAfZbU5lBl_IAKxtg8x50_hgXsJ4xBTUVDI05oLFtZGwCOg_NgpNBIBjUQiopVgD2nRWALa9ibgYNN9cQZw_d0mR4pzHe2MwAdLpDPHT4BHSsiDnouluilQIAZj8pTQ))



## Certification Option

As an option, students seeking certification may replace the final exam by passing the Security+ certification or another certification approved by the instructor. You can substitute your score on the certification (plus an adjustment — 5% for the Security+) for the final. For example, if you received an 85% on the Security+ exam you would receive a 90% for your final exam score.
 
To receive credit for the certification, a student must show evidence of having taken the certification exam by the last day of class. If a student doesn't show the instructor evidence of passing the certification by this date, then he/she will be required to take the final exam.



## Grading

<div markdown='1' style='width:40%' class='small'>

|                Item                | Percent |
|------------------------------------|--------|
| Labs | 20 |
| Midterm project |  15 |
| Current event threat assessment | 15 |
| Reading quizzes  | 4 |
| Participation | 5 |
| Security Films | 1 | 
| Final Exam | 40 | 


| Extra Credit | Value |
|-|-|
| Third security movie | Replace 1 quiz |
| Security book -- book report | Replace 1 lab | 
|=|=|

</div>


# Assignments


## Labs

Labs are hands-on learning activities that will be begun in class and completed outside of class. Labs are typically due one week after they are introduced in class.

The labs can be found [here](https://daveeargle.com/security-assignments), but content is subject to change before a lab is officially assigned on the semester's Canvas page.

<a class='btn btn-success' href='https://daveeargle.com/security-assignments'>Go to the Labs</a>


## Midterm vulnerability assessment project

This is a group project. The midterm will be a vulnerability and penetration assessment report of a server. The report will be written for an upper management audience. Teams of students will be given an IP address of a server to assess for security weaknesses. The midterm report will be due two weeks later.


## Current event threat assessment

This is a group project. Teams will choose a recent security breach incident and report on it as if it just occurred. The report will summarize the incident and give recommendations for how to manage the threat. The report will also include a risk assessment of other potential threats the chosen organization faces, along with recommendations for mitigating each identified threat. Deliverables include a written report and a presentation.


## Readings Quizzes

Most readings and videos on the schedule have associated quizzes. Quizzes are open book, open Internet and must be completed within 20 minutes. Quizzes are administered on the course LMS (Canvas).

Quizzes are typically due 30 minutes before class on the date due.



## Security Films

Two films are required viewing for this course: "Zeros Days" and "Citizenfour." You must watch these films on your own. 
To receive credit, complete one security films report quiz for each film. Simply indicate that you watched the whole film and give your brief reaction to the film.


## Extra Credit

You can **replace your lowest quiz score** by watching a third _security film_ from the [Security Readings and Films list](/security-assignments/security-reading-and-film-list/) submitting a few sentences about what you thought about it.

Similarly, you can **replace your lowest lab score** by reading a _security book_ from the [Security Readings and Films list](/security-assignments/security-reading-and-film-list/) and submitting a few sentences about what you thought about it.

 
 
# Classroom Policies

## Participation Policy

The following list is not comprehensive, but rather an example of items considered for the class participation score:

* Treating others with respect
* Showing courtesy for presenters (guest speakers, instructor, students)
* Participating in class discussions
* Arriving on time and not leaving early
* Not using technology inappropriately (distracting yourself or others)
* Asking _good_ questions and helping others on the class slack workspace.
* Self-reports and justification about degree of helping others.


## Teamwork

In this class, you will work in teams. As a result, consider reviewing a short report on [team effectiveness]({{site.baseurl}}/classes/general/team_effectiveness.pdf) and establishing a team agreement [(sample agreement)]({{ site.baseurl }}/classes/general/sample_team_agreement.docx).


## Freeloader policy

It occasionally happens in class and enterprise settings that someone in a group is not prepared to do his/her share. In the case of my classes, I recommend that the team give the freeloader one warning and then fire that person from the team. That person will then do group assignments individually or find another team to join. The team should notify me of the change in team composition immediately. I distribute a form to assess team participation at the end of the semester. If a major disparity in team contribution is reported, I will adjust team project grades.


## Classroom Procedures

Students are welcome to use laptops in class for note taking and completing class exercises, exclusively.


## Late Work 

All assignments and projects are to be submitted on time or early, so plan accordingly. If you must miss class, please submit your assignment early. On VERY rare occasions, an exception may be granted, allowing the student to submit the work late with a 20% penalty. Under no circumstances will anything be accepted more than a week late.



# Relevant University Offices, Policies, and Procedures

## Accommodation for Disabilities

If you qualify for accommodations because of a disability, please submit your accommodation letter from Disability Services to your faculty member in a timely manner so that your needs can be addressed. Disability Services determines accommodations based on documented disabilities in the academic environment. Information on requesting accommodations is located on the Disability Services website. Contact Disability Services at 303-492-8671 or dsinfo@colorado.edu for further assistance. If you have a temporary medical condition or injury, see Temporary Medical Conditions under the Students tab on the Disability Services website.


## Classroom Behavior

Students and faculty each have responsibility for maintaining an appropriate learning environment. Those who fail to adhere to such behavioral standards may be subject to discipline. Professional courtesy and sensitivity are especially important with respect to individuals and topics dealing with race, color, national origin, sex, pregnancy, age, disability, creed, religion, sexual orientation, gender identity, gender expression, veteran status, political affiliation or political philosophy. Class rosters are provided to the instructor with the student's legal name. I will gladly honor your request to address you by an alternate name or gender pronoun. Please advise me of this preference early in the semester so that I may make appropriate changes to my records. For more information, see the policies on classroom behavior and the Student Code of Conduct.


## Honor Code

All students enrolled in a University of Colorado Boulder course are responsible for knowing and adhering to the Honor Code. Violations of the policy may include: plagiarism, cheating, fabrication, lying, bribery, threat, unauthorized access to academic materials, clicker fraud, submitting the same or similar work in more than one course without permission from all course instructors involved, and aiding academic dishonesty. All incidents of academic misconduct will be reported to the Honor Code (honor@colorado.edu); 303-492-5550). Students who are found responsible for violating the academic integrity policy will be subject to nonacademic sanctions from the Honor Code as well as academic sanctions from the faculty member. Additional information regarding the Honor Code academic integrity policy can be found at the Honor Code Office website.


## Sexual Misconduct, Discrimination, Harassment and/or Related Retaliation

The University of Colorado Boulder (CU Boulder) is committed to fostering a positive and welcoming learning, working, and living environment. CU Boulder will not tolerate acts of sexual misconduct intimate partner abuse (including dating or domestic violence), stalking, protected-class discrimination or harassment by members of our community. Individuals who believe they have been subject to misconduct or retaliatory actions for reporting a concern should contact the Office of Institutional Equity and Compliance (OIEC) at 303-492-2127 or cureport@colorado.edu. Information about the OIEC, university policies, anonymous reporting, and the campus resources can be found on the OIEC website. 
Please know that faculty and instructors have a responsibility to inform OIEC when made aware of incidents of sexual misconduct, discrimination, harassment and/or related retaliation, to ensure that individuals impacted receive information about options for reporting and support resources.


## Religious Holidays

Campus policy regarding religious observances requires that faculty make every effort to deal reasonably and fairly with all students who, because of religious obligations, have conflicts with scheduled exams, assignments or required attendance. In this class, {Faculty: insert your procedures here}.
See the campus policy regarding religious observances for full details.
