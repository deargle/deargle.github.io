---
title: Information Security Management
school: CU
year: "2018"
semester: fall
coursenum:
 - BAIM-4250-001
 - MSBX-5480-002
slack: https://infosecmanagement-f18.slack.com
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
: Hours: MW 3:30-4:30pm
: Or, by appointment 


# Course Information


## Course Description

This course is a broad introduction to the managerial issues of information security. Because security is multifaceted, the topics of the class range widely, including technical (e.g., cryptography), managerial (e.g., policy compliance), physical (e.g., door locks), and psychological (e.g., social engineering) issues. A key objective of the class is to develop a security mindset, in which one learns to think like an attacker for ways to exploit a system.


## Communication

<div class='alert alert-info'><strong>Heads up!</strong> I rely <b>heavily</b> on slack to able to assist you all, and to communicate important information. Ignore slack at your peril!</div>

For communication, we will use Slack. Add an account at [{{page.slack}}]({{page.slack}}) (install laptop and phone apps so that you get notifications. There is also a desktop client. Use your @colorado.edu email address for instant verification.



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
: This goal will help you think like a security professional—how to identify threats like an attacker, and how to mitigate those threats.

Appreciate the broad disiciplines required for IS security
: This class will help you appreciate the broad disiciplines required for information security to work. We'll cover subjects as diverse as cryptology, physical security, psychology, and management.


## Technology Requirements

* You will need access to a computer with at least 8GB of RAM and 50GB free storage.

## Materials

* Security Engineering 2e by Ross Anderson (available online [here](http://www.cl.cam.ac.uk/~rja14/book.html))
* "Secrets & Lies" by Bruce Schneier (available online [through CU](http://ucblibraries.summon.serialssolutions.com/#!/search?bookMark=ePnHCXMw42JgAfZbU5lBl_IAKxtg8x50_hgXsJ4xBTUVDI05oLFtZGwCOg_NgpNBIBjUQiopVgD2nRWALa9ibgYNN9cQZw_d0mR4pzHe2MwAdLpDPHT4BHSsiDnouluilQIAZj8pTQ))



## Certification Option

As an option, students seeking certification may replace the final exam by passing the Security+ certification or another certification approved by the instructor. You can substitute your score on the certification (plus an adjustment—5% for the Security+) for the final. For example, if you received an 85% on the Security+ exam you would receive a 90% for your final exam score.
 
To receive credit for the certification, a student must show evidence of having taken the certification exam by the last day of class. If a student doesn't show the instructor evidence of passing the certification by this date, then he/she will be required to take the final exam.



## Grading

<div markdown='1' style='width:40%' class='small'>

|                Item                | Points |
|------------------------------------|--------|
| Quizzes  | 75 |
| Labs | 400 |
| Midterm project |  150 |
| Threat assessment project | 75 |
| Participation | 50 |
| Security Films | 50 | 
| Final Exam | 200 | 
|=|=|
| **Total** |    **1000** |

| Extra Credit | Value |
|-|-|
| Security Movie for Extra Credit | Replace 1 quiz |
| Security Book for Extra Credit | Replace 1 lab | 
|=|=|

</div>



## Classroom Policies

### Participation Policy

Contribution will account for 5% of your final grade.  Most students will earn 80% of these points.  Students who are exceptional and go above and beyond in enhancing the classroom experience may receive a higher score.

The following list is not comprehensive, but rather an example of items weighted in the contribution category:

* Providing feedback on the class via the course evaluation
* Treating others with respect
* Showing courtesy for presenters (guest speakers, instructor, students)
* Participating in class discussions
* Arriving on time and not leaving early
* Not using technology inappropriately (distracting yourself or others)


### Team work

In this class, you will work in teams. As a result, consider reviewing a short report on [team effectiveness]({{site.baseurl}}/class/general/team_effectiveness.pdf) and establishing a team agreement [(sample agreement)]({{ site.baseurl }}/class/general/sample_team_agreement.docx).


### Freeloader policy

It occasionally happens in class and enterprise settings that someone in a group is not prepared to do his/her share. In the case of my classes, I recommend that the team give the freeloader one warning and then fire that person from the team. That person will then do group assignments individually or find another team to join. The team should notify me of the change in team composition immediately. I distribute a form to assess team participation at the end of the semester. If a major disparity in team contribution is reported, I will adjust team project grades.


### Classroom Procedures

Students are welcome to use laptops in class for note taking and completing class exercises, exclusively.


### Late Work 

All assignments and projects are to be submitted on time or early, so plan accordingly. If you have to miss class please submit your assignment early. On VERY rare occasions, an exception may be granted, allowing the student to submit the work late with a 20% penalty. Under no circumstances will anything be accepted more than a week late.




# Assignments


## Labs

Labs are hands-on learning activities that will be begun in class and completed outside of class. Labs are typically due one week after they are introduced in class.


## Midterm vulnerability assessment project

This is a group project. The midterm will be a vulnerability and penetration assessment report of a server. The report will be written for an upper management audience. Teams of students will be given an IP address of a server to assess for security weaknesses. The midterm report will be due two weeks later.


## Current event threat assessment

This is a group project. Teams will choose a recent security breach incident and report on it as if it just occurred. The report will summarize the incident and give recommendations for how to manage the threat. The report will also include a risk assessment of other potential threats the chosen organization faces, along with recommendations for mitigating each identified threat. Deliverables include a written report and a presentation.

Assignment description [here](current_event_threat_assessment/).


## Readings Quizzes

Most readings and videos on the schedule have associated quizzes. Quizzes are open book, open Internet and must be completed within 20 minutes. Quizzes are administered on the course LMS (Canvas).

Quizzes are due typicall 30 minutes before class on the date due.



## Security Films

Two films are required viewing for this course: "Zeros Days" and "Citizenfour." You can watch these films with the class on the announced screening days, or on your own. To receive credit, complete one security films report quiz for each film. Simply indicate that you watched the whole film and give your brief reaction to the film.


## Extra Credit

You can **replace your lowest quiz score** by watching a third _security film_ from the [Security Readings and Films list]({% link security-assignments/security-reading-and-film-list/index.md %}) submitting a few sentences about what you thought about it.

Similarly, you can **replace your lowest lab score** by reading a _security book_ from the [Security Readings and Films list]({% link security-assignments/security-reading-and-film-list/index.md %}) and submitting a few sentences about what you thought about it.

 
* Threat modeling
* Cryptography – The Foundation of Information Security
    * Hashes & Symmetric
    * Asymmetric
    * Digital Certificates and PKI
* Physical Security
* Introduction to Computer Networking
* Introduction to Using Linux Terminal
* Attack methods against organizations
    * Vulnerability Scanning
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

 
# Relevant University Offices, Policies, and Procedures

[Student Classroom and Course-Related Behavior](http://www.colorado.edu/policies/student-classroom-and-course-related-behavior)

[Disability Services](http://www.colorado.edu/disabilityservices/). Please note that English as a second language is not a recognized disability and no extra exam time, nor any special conditions (e.g., use of a dictionary) can be provided to any student. This is a School policy, not left to the discretion of the professor.

[Honor Code](http://www.colorado.edu/policies/academic-integrity-policy)

[Religious Holidays](http://www.colorado.edu/policies/observance-religious-holidays-and-absences-classes-andor-exams)

[Discrimination and Harassment](http://www.colorado.edu/policies/discrimination-and-harassment-policy-and-procedures)

[Final Examination Policy](http://www.colorado.edu/policies/final-examination-policy) (should you have 3 exams on the date of our final exam)