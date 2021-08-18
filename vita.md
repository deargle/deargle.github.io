---
title: Vita
permalink: /vita/
layout: cv
google_scholar: https://scholar.google.com/citations?user=Nw7ibigAAAAJ&hl=en
github: https://github.com/deargle
orcid: https://orcid.org/0000-0002-4056-8114
email: dave@daveeargle.com
stackoverflow: https://stackoverflow.com/users/1396649/deargle
---

{% capture github_profile_url %}https://github.com/{{ site.github_username }}{% endcapture %}

# David Eargle

Information Systems Management Researcher

<div id="webaddress">
<a href="mailto:{{ site.email }}">{{ site.email }}</a>
|
<i class="fa fa-github"></i> <a href="{{ github_profile_url }}">{{ site.github_username }}</a>
|
<i class="fa fa-globe"></i> <a href='{{ site.url }}'>{{ site.url }}</a>
</div>

Updated 2021/07/22

## Currently
`2017-`
I'm an Assistant Professor in the Organizational Leadership and Information Analytics group
at the
Leeds School of Business, University of Colorado Boulder

`2017-`
I also have a courtesy appointment as Assistant Professor in the
Department of Information Science\
at the University of Colorado Boulder

## Research Interests

- Human side of Information Systems Security (Behavioral InfoSec)
- Dark Side of Information Technology, including online group polarization
- Design science -- tools for research and for mitigating information security risks
- Neuroscience applications to Human-Computer Interaction and Information Security

## Teaching Interests

- Information security management
- Descriptive, Predictive, and Prescriptive Business Analytics
- Programming for business majors (Python, R); Databases; Cloud Computing, Web and app development

## Education
`2017`
__Ph.D., Information Systems and Technology Management__\
*Katz Graduate School of Business, University of Pittsburgh, Pittsburgh, Pennsylvania, USA.*\
Dissertation: "Security Messages: Or, How I Learned to Stop Disregarding and Heed the Warning"


`2013`
__Master of Information Systems Management__\
__Bachelor of Science, Information Systems__\
*Marriott School of Management, Brigham Young University, Provo, Utah, USA.*\
Magna Cum Laude with University Honors

## Other Work Experience
`2011–13`
__Academic Research Assistant__\
*Department of Information Systems at Brigham Young University*
- Duties included literature reviews, online lab experiment app development and server administration

`2012`
__Digital Forensics Analyst Intern__\
*Paraben Corporation, Ashburn, VA*
- Consulted with police chiefs to create tools to log officer access to mobile forensic terminals
- Created a powershell tool to improve quality control for production of Paraben Data Recovery USB sticks
- Completed level 2 mobile forensics training

`2011-12`
__Network and Systems Administrator__\
*Better Logic LLC, Orem, UT*
- Set up a a VMware vSphere ESXi server and migrated several bare-metal systems to be virtualized on it.
- Configured Bacula on the hypervisor

`2010-12`
__Web Developer__\
*Center for Teaching and Learning, BYU*
- Core developer for syllabus section of _Learning Suite_, BYU's Learning Management System

## Scholarship metrics
* <i class="ai ai-google-scholar"></i> <a href="{{ site.google_scholar }}">My Google scholar profile</a>
* <i class="ai ai-orcid"></i> <a href="{{ site.orcid }}">ORCiD</a>
* 728 citations per Google Scholar (641 citations since 2016)
* 10 H-index per Google Scholar


## Works in progress

{% assign projects = site.projects | where: "include_in_vita", true | where: "tags", "work-in-progress" | sort: order %}

{% for project in projects %}
### {{ forloop.index }}.

__{{ project.title }}__\
*With: {{ project.with }}*
{{ project.content | markdownify }}
{% endfor %}


## Journal Publications
{: .reference }
`Forthcoming`
Vance, A., __Eargle, D.__, Eggett, D., Straub, D., Ouimet, K. “Do Security Fear Appeals
Work When They Interrupt Tasks? A Multi-Method Examination of Password Strength,”
*MIS Quarterly*, forthcoming.

{: .reference }
`2020`
Kirwan, C., Bjornn, D., Anderson, B., Vance, A., __Eargle, D.__, Jenkins, J.2020. “Repetition
of Computer Security Warnings Results in Differential Repetition Suppression Effects as
Revealed With Functional MRI,” *Frontiers in Psychology*, 11, pp. 1–10.

{: .reference }
`2019`
Veen, Hendrik van, Nathaniel Saul, __David Eargle__, and Sam Mangham. “Kepler Mapper:
A Flexible Python Implementation of the Mapper Algorithm.”
*Journal of Open Source Software* 4, no. 42 (2019): 1315.

{: .reference }
`2016`
Anderson, B.B., Vance, A., Kirwan, C.B., Jenkins, J. and __Eargle, D.__ "From warnings to
wallpaper: Why the brain habituates to security warnings and what can be done about
it." *Journal of Management Information Systems*, 33, 3 (2016), 713-743.
doi: 10.1080/07421222.2016.1243947

{: .reference }
`2016`
Anderson, B.B., Jenkins, J., Vance, A., Kirwan, C.B. and __Eargle, D.__ "Your memory is
working against you: How eye tracking and memory explain habituation to security
warnings." *Decision Support Systems*, 92 (2016), 3-13. doi: 10.1016/j.dss.2016.09.010

{: .reference }
`2016`
Jenkins, J., Anderson, B., Vance, A., Kirwan, B. and __Eargle, D.__ "More harm than good?
How security messages that interupt make us vulnerable."
*Information Systems Research*, 27, 4 (2016), 880-896. __Awarded ISR’s “Best Published Paper” for 2016__.
doi: 10.1287/isre.2016.0644

{: .reference }
`2016`
Anderson, B., Vance, A., Kirwan, B., __Eargle, D.__ and Jenkins, J. "How users perceive and
respond to security messages: A NeuroIS research agenda and empirical study."
*European Journal of Information Systems*, 25, 4 (2016), 364-390.
doi: 10.1057/ejis.2015.21

{: .reference }
`2015`
Anderson, B., Kirwan, B., __Eargle, D.__, Jensen, S. and Vance, A. "Neural correlates of
gender differences and color in distinguishing security warnings and legitimate websites:
A neurosecurity study." *Journal of Cybersecurity*, 1, 1 (2015), 109-120.
doi: 10.1093/cybsec/tyv005

{: .reference }
`2014`
Vance, A., Anderson, B.B., Kirwan, C.B. and __Eargle, D__. "Using measures of risk
perception to predict information security behavior: Insights from
electroencephalography (EEG)." *Journal of the Association for Information Systems*,
15, 10 (2014), 679-722.

## Conference Publications

{: .reference }
`2020`
Larsen KR, Gefen D, Petter S, __Eargle D.__ (2020) “Creating Construct Distance Maps
with Machine Learning: Stargazing Trust.” In
*Conference of the Association for Information Systems (AMCIS 2020)*. Online.
Awarded AMCIS’ __“Best Completed Paper” for 2020.__ 60% acceptance rate.

{: .reference }
`2019`
A Vance, __D Eargle__, JL Jenkins, CB Kirwan, BB Anderson. (2019) “The Fog of
Warnings: How Non-Essential Notifications Blur with Security Warnings.”
In *Fifteenth Symposium on Usable Privacy and Security (SOUPS 2019)*. Santa Clara, CA: USENIX
Association, 2019. https://www.usenix.org/conference/soups2019/presentation/vance

{: .reference }
`2019`
Kirwan, C.B., Anderson, B., __Eargle, D.__, Jenkins, J., and Vance, A. (2019, October).
Attentional habituation to non-essential computer notifications generalizes to security
warnings: an fMRI study. *Program No. 665.##. Neuroscience 2019 Abstracts.*
Washington, DC: Society for Neuroscience, 2019. Online.

{: .reference }
`2019`
Anderson, B., Kirwan, B., __Eargle, D.__, Jenkins, J., Vance, A., “Neural Evidence of
Generalization of Software Notifications to Security Warnings,”
*Security and Human Behavior Workshop*, Harvard University, June 2019

{: .reference }
`2019`
Kirwan, C.B., Anderson, B., __Eargle, D.__, Jenkins, J., and Vance, A. (2019, June). Using
fMRI to Measure Stimulus Generalization of Software Notification to Security Warnings.
Retreat on NeuroIS, Vienna, Austria. *Information Systems and Neuroscience*, 93-99.

{: .reference }
`2017`
__Eargle, D.__, Galletta, D., Shadi, J., Dimitar, K., and Shivendu, S. "The Chaos of Order:
Sequence and Mindlessness Effects in Obtaining Successive App Permissions." In
*Workshop on Information Security & Privacy*. Seoul, South Korea: AIS SIGSEC and IFIP
TC11.1. (2017).

{: .reference }
`2016`
__Eargle, D.__, Galletta, D. and Jenkins, J. "How much is your security worth? Applying a
risk tradeoff paradigm to explain the bimodal nature of user elaboration over interruptive
security messages." In *Workshop on Information Security & Privacy*, Dublin, Ireland: AIS
SIGSEC and IFIP TC11.1 (2016).

{: .reference }
`2016`
__Eargle, D.__, Galletta, D. and Cranor, L. "On the use of motivational components as
attention hooks in security message interface design: Avoiding "tl;dr"." In
*Dewald Roode Workshop on Information Systems Security Research*, Albuquerque, New Mexico: IFIP
WG8.11/WG11.13 (2016).

{: .reference }
`2016`
__Eargle, D.__, Galletta, D., Kirwan, C. B., Vance, A., and Jenkins, J. 2016. "Integrating
Facial Cues of Threat into Security Warnings – an fMRI and Field Study." Paper
presented at the *Americas Conference on Information Systems (AMCIS)*, San Diego,
California.

{: .reference }
`2015`
Galletta, D., __Eargle, D.__, Shadi, J., Kunev, D. and Singh, S. "Integrating social and
economic models of responding to privacy messages in mobile computing: A research
agenda." In *Workshop on Information Security & Privacy*, Fort Worth, Texas: AIS
SIGSEC and IFIP TC11.1 (2015).

{: .reference }
`2015`
__Eargle, D.__, Godfrey, J., Miao, H., Stevenson, S., Shay, R., Ur, B. and Cranor, L. "Poster:
You can do better – motivational statements in password-meter feedback." In
*Symposium on Usable Privacy and Security (SOUPS '15)*, Ottawa, CA: (2015).

{: .reference }
`2015`
__Eargle, D.__, Galletta, D., Kirwan, C.B. and Vance, A. "Integrating facial threat signals into
security messages: An extension of media naturalness theory to an information security
context." In *Dewald Roode Workshop on Information Systems Security Research*,
Newark, Delaware: IFIP WG8.11/WG11.13 (2015).

{: .reference }
`2015`
Anderson, B., Kirwan, B., Jenkins, J., __Eargle, D.__, Howard, S. and Vance, A. "How
polymorphic warnings reduce habituation in the brain: Insights from an fMRI study." In
*Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI)*,
Seoul, South Korea: ACM (2015).

{: .reference }
`2014`
__Eargle, D.__, Taylor, R., Sawyer, L. and Gaskin, J. "Acquiring IS skill through habitual
use." In *2014 47th Hawaii International Conference on System Sciences (HICSS)*:
(2014), pp. 3-12.

{: .reference }
`2014`
__Eargle, D.__, Galletta, D. and Siegle, G. "Using fearful facial facial expressions to increase
the effectiveness of protective security messages: Proposing an fMRI and field study." In
*The Dewald Roode Workshop on Information Systems Security Research, IFIP WG8.11/WG11.13*, Newcastle, UK: (2014).

{: .reference }
`2014`
Anderson, B., Vance, A., Kirwan, B., __Eargle, D.__ and Howard, S. "Why users habituate to
security warnings: Insights from fMRI." In
*The Dewald Roode Workshop on Information Systems Security Research, IFIP WG8.11/WG11.13*, Newcastle, UK: (2014).

{: .reference }
`2014`
Anderson, B., Vance, A., Kirwan, B., __Eargle, D.__ and Howard, S. "Users aren’t
(necessarily) lazy: Using NeuroIS to explain habituation to security warnings." In
*International Conference on Information Systems*, Auckland, New Zealand: AIS (2014).

{: .reference }
`2013`
Vance, A., __Eargle, D.__, Ouimet, K. and Straub, D. "Enhancing password security through
interactive fear appeals: A web-based field experiment." In
*2013 46th Hawaii International Conference on System Sciences (HICSS)*: (2013), pp. 2988-2997.

{: .reference }
`2013`
Vance, A., Anderson, B., Brock, K. and __Eargle, D.__ "Using measures of risk perception to
predict information security behavior: Insights from electroencephalography (EEG)." In
*JAIS workshop, Gmunden Retreat on NeuroIS*, Gmunden, Austria: (2013).

{: .reference }
`2013`
__Eargle, D.__, Vance, A.O. and Lowry, P.B. "How moral intensity and impulsivity moderate
the influence of accountability on access policy violations in information systems." In
*Proceedings of the Eighth Pre-ICIS Workshop on Information Security and Privacy*:
(2013).

{: .reference }
`2013`
Anderson, B., Vance, A., __Eargle, D.__ and Kirwan, C.B. "Your memory is working against
you: How eye tracking and memory explain susceptibility to phishing." In
*The Dewald Roode Workshop on Information Systems Security Research, IFIP WG8.11/WG11.13*:
(2013).

{: .reference }
`2013`
Anderson, B., Vance, A. and __Eargle, D.__ "Is your susceptibility to phishing dependent on
your memory?" In *Proceedings of the Eighth Pre-ICIS Workshop on Information Security and Privacy*, Milan, Italy: (2013).

{: .reference }
`2012`
Vance, A., __Eargle, D.__, Ouimet, K. and Straub, D. "How interactivity can enhance the
effectiveness of fear appeals: A web-based field experiment of password security." In
*The Dewald Roode Workshop on Information Systems Security Research, IFIP WG8.11/WG11.13*, Provo, UT: (2012).

{: .reference }
`2012`
__Eargle, D.__, Vance, A., Allen, G., Barrick, D., Bearnson, T. and Tialin, T. "Justifying
breaking the glass: How accountability can deter unauthorized access." In *WISP 2012
Proceedings*, Orlando, Florida: AIS SIGSEC and IFIP TC11.1 (2012).

{: .reference }
`2012`
Anderson, B., Vance, A., Hansen, J., Kirwan, B., __Eargle, D.__, Hinkle, L. and Weagel, A.
"Neural correlates of gender differences in distinguishing malware warnings and
legitimate websites: A NeuroIS study." In *IFIP WG8.11/WG11.13*, Provo, UT: (2012).

## Teaching Experience


### Leeds School of Business, University of Colorado
`2017-Present`
In four years:
- Taught 4 unique courses
- Taught at 3000, 4000 (including honors students), and 5000 (graduate, including MBAs) levels

__Courses:__

*Information Security Management (undergraduate)*
- Exploration of human, organizational, and technical domains of information security management.
- self-created hands-on Google Cloud virtual machine labs to teach students to "think like attackers"

*Information Security Management (graduate)*
- Taught within the Masters of Business Analytics - Security track.
- Compared to the ugrad offering, has a stronger focus on specific security behaviors that
  generate data amenable to machine learning -- e.g., post mortem reports from Mandiant and
  the House Oversight Committee (equifax, OPM)

*Business Analytics*
- descriptive: querying, and ETL/wrangling data with Alteryx
- predictive: supervised vs unsupervised machine learning algorithms
- used Alteryx and DataRobot AutoML
- covering topics such as association rules, k-means clusters,
  regressions, correlations, and text mining

*Security Analytics with Python*
- a projects-based class focused on applying machine learning to security-related data.
  Topics include malware classification (binomial and multinomial), modeling using mobile sensor
  data, network traffic parsing (pcaps => netflows) and malicious IP, domain classification
- a focus on using python-sklearn -- on reading documentation and source code
- also a focus on "open data science" -- on hosted jupyter notebooks, on using git and github to store
  and share code projects. Also on sharing and programmatically consuming shared data.
- labs have students host models behind API endpoints (Flask app). Models are also deployed to AWS and GCP's
  machine learning platforms.

{: .table .table-sm }
<table id='table-courses' class='table'>
  <thead>
    <tr>
      <th class='text-left'  scope="col">AY Year</th>
      <th class='text-left'  scope="col">Term</th>
      <th class='text-left'  scope="col">Course</th>
      <th class='text-left'  scope="col">Course Code</th>
      <th class='text-left'  scope="col">Level</th>
      <th class='text-right' scope="col">Enrolled</th>
      <th class='text-right' scope="col">Course Overall</th>
      <th class='text-right' scope="col">Instructor Overall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class='text-left' scope="row" rowspan="2">2017&#8209;18</th>
      <td class='text-left'>Fall</td>
      <td class='text-left'>Infosec Management</td>
      <td class='text-left'>BAIM-4250</td>
      <td class='text-left'>ugrad</td>
      <td class='text-right'>19</td>
      <td class='text-right'>5.5/6.0</td>
      <td class='text-right'>5.8/6.0</td>
    </tr>
    <tr>
      <!-- <th scope="row">2017&#8209;18</th> -->
      <td class='text-left'>Spring</td>
      <td class='text-left'>Business Analytics</td>
      <td class='text-left'>MGMT-3200</td>
      <td class='text-left'>ugrad</td>
      <td class='text-right'>41</td>
      <td class='text-right'>3.8/6.0</td>
      <td class='text-right'>4.2/6.0</td>
    </tr>
    <tr>
      <th class='text-left' scope="row" rowspan="2">2018&#8209;19</th>
      <td class='text-left' rowspan="2">Fall</td>
      <td class='text-left'>Infosec Management</td>
      <td class='text-left'>BAIM-4250, MSBX 4580 (cross-listed)</td>
      <td class='text-left'>ugrad & grad (incl. MBAs)</td>
      <td class='text-right'>45</td>
      <td class='text-right'>4.6/6.0</td>
      <td class='text-right'>4.6/6.0</td>
    </tr>
    <tr>
      <!-- <th class='text-left' scope="row">2018&#8209;19</th> -->
      <!-- <td class='text-left'>Fall</td> -->
      <td class='text-left'>Business Analytics</td>
      <td class='text-left'>BAIM-3200, MKTG 3201 (cross-listed)</td>
      <td class='text-left'>ugrad</td>
      <td class='text-right'>45</td>
      <td class='text-right'>3.6/6.0</td>
      <td class='text-right'>4.0/6.0</td>
    </tr>
    <tr>
      <th class='text-left' scope="row" rowspan="3">2019&#8209;20</th>
      <td class='text-left' rowspan="2">Fall</td>
      <td class='text-left'>Infosec Management</td>
      <td class='text-left'>BAIM-4250</td>
      <td class='text-left'>ugrad</td>
      <td class='text-right'>39</td>
      <td class='text-right'>5.2/6.0</td>
      <td class='text-right'>5.4/6.0</td>
    </tr>
    <tr>
      <!-- <th class='text-left' scope="row">2019&#8209;20</th> -->
      <!-- <td class='text-left'>Fall</td> -->
      <td class='text-left'>Infosec Management</td>
      <td class='text-left'>MSBX-5480</td>
      <td class='text-left'>grad (incl. MBAs)</td>
      <td class='text-right'>10</td>
      <td class='text-right'>5.8/6.0</td>
      <td class='text-right'>5.7/6.0</td>
    </tr>
    <tr>
      <!-- <th class='text-left' scope="row">2019&#8209;20</th> -->
      <td class='text-left'>Spring</td>
      <td class='text-left'>Security Analytics with Python</td>
      <td class='text-left'>MSBX-5500</td>
      <td class='text-left'>grad (incl. MBAs)</td>
      <td class='text-right'>6</td>
      <td class='text-right'>4.9/5.0*</td>
      <td class='text-right'>4.9/5.0*</td>

    </tr>
    <tr>
      <th class='text-left' scope="row" rowspan="3">2020&#8209;21</th>
      <td class='text-left' rowspan="2">Fall</td>
      <td class='text-left'>Infosec Management</td>
      <td class='text-left'>BAIM-4250</td>
      <td class='text-left'>ugrad (honors)</td>
      <td class='text-right'>33</td>
      <td class='text-right'>4.24/5.0*</td>
      <td class='text-right'>4.46/5.0*</td>
    </tr>
    <tr>
      <!-- <th class='text-left' scope="row">2020&#8209;21</th> -->
      <!-- <td class='text-left'>Fall</td> -->
      <td class='text-left'>Infosec Management</td>
      <td class='text-left'>MSBX-5480</td>
      <td class='text-left'>grad (incl. MBAs)</td>
      <td class='text-right'>13</td>
      <td class='text-right'>4.8/5.0*</td>
      <td class='text-right'>4.7/5.0*</td>
    </tr>
    <tr>
      <!-- <th class='text-left' scope="row">2020&#8209;21</th> -->
      <td class='text-left'>Spring</td>
      <td class='text-left'>Security Analytics with Python</td>
      <td class='text-left'>MSBA-5500</td>
      <td class='text-left'>grad</td>
      <td class='text-right'>14</td>
      <td class='text-right'>4.7/5.0*</td>
      <td class='text-right'>4.7/5.0*</td>
    </tr>
  </tbody>
</table>

_* Average of all available metrics. Typical course and instructor evaluation metrics not collected by CU because of Covid._



### College of Business Administration at the University of Pittsburgh
`2017`
__Database Management__
- Taught relational database structures and data querying in MySQL and R to
Juniors and Seniors from various departments

`2015`
__Introduction to Information Systems Management__
* Full responsibility for a class of 60 undergraduate students from various
departments of the University of Pittsburgh’s College of Business Administration.
* Complete direction over course curriculum, policies, and syllabus.

`2013-2015`
__Microsoft Excel workshops for Katz Graduate students__

Taught four beginner-to-advanced-level Microsoft Excel workshops to part-time Katz
MBA students

### Department of Information Systems, Marriott School of Management, Brigham Young University
`2013`
__Spreadsheets for Business Majors__

Full responsibility for four college-level class sections on computer spreadsheet skills,
with total enrollment of over 270 across four sections. Mix of online plus in-class
teaching. Oversight of three teaching assistants.


## External Service
`2014 to Present`
__JMIS Website Editor__\
Web administrator for the Journal of Management Information
Systems' web presence (<https://jmis-web.org>), working directly with Editor in Chief
Vladimir Zwass.

`Fall 2011 to Present`
__AIS IS Theory Wiki Editor__\
Systems administrator and managing editor for the Information Systems Theory Community Wiki,
<https://is.theorizeit.org>, affiliated with the Association for Information Systems.

`June 2016 to present`
__psiTurk Project Leader__\
Lead developer for an open platform for science on Amazon Mechanical Turk, hosted on github.
Used by researchers around the world.

__Ad Hoc Reviewer__\
ISR, MISQ, EJIS, ECIS, ICIS, HICSS, CAIS, WISP, and The Dewald Roode Workshop
on Information Systems Security Research, IFIP WG8.11/WG11.13.

## University Service
`Fall 2017 to Present`
__Director of Security Analytics track within the Masters of Business Analytics degree at Leeds – University of Colorado Boulder__

- Developed a proposal for a track with a pioneering collaboration between the school of
business and school of engineering at CU Boulder
- Supervise graduate students who enrolled in the track across their three semesters in the program.
- Point-person from Leeds meeting with directors of the interdisciplinary telecom program
from the school of engineering.
- Ambassador for the track; In charge of reach-out to and bond-forming with industry
partners, including Webroot, IBM, and Crowdstrike.


## Honors and Awards

### Fellowships
- NSF Graduate Research Fellow (DGE-1247842) - $132,000
- GAR Foundation Fellow - $24,000

### Grants
- David Berg Center for Ethics and Leadership at the University of Pittsburgh -$8,420
- Brigham Young University Marriott School of Business - $1,000
- Rollins Center for Entrepreneurship & Technology (2013) - $4,000

### Scholarships
- Brigham Young University Undergraduate Scholarship - $8,278
- BYU Masters of Information Systems Management Scholarship - $4,380
- Robert K. Thomas BYU Honors Department Scholarship - $1,488
- Khona Family BYU Honors Department Scholarship - $1,488
- Ella M. Herman Scholarship - $1,054

### Competitions
- AIS Global Competition 2012, Windows Phone Development Track, 2nd Place Worldwide



## Areas of Expertise

* Statistics
* Machine learning
* Predictive Analytics, Business Intelligence
* Data visualization
* Databases
* Cloud Computing
* DevOps
* Server Administration
* Web development


## Technical Skills

* R (tidyverse, dplyr, ggplot2), SAS, SPSS, python (pandas)
* MySQL / postregsql, MS Access, S3/Glue/Athena, MongoDB
* Python (scikit-learn, scipy, numpy), Tensorflow (a little), R (keras), RapidMiner, Alteryx
* vagrant, packer, terraform, git, chef, ansible, pytest
* AWS (EC2, Glue, Athena, S3, IAM, SageMaker)
* GCP (Compute, Cloud Storage, and whatever they call their AutoML offering now)
* html/css/less/sass/scss, bootstrap (tbs), bower, npm & grunt, pip, Jekyll,
* javascript/jquery
* Bash
* Vim
* Python
* Docker
* Powershell
* Java
* php (slim, CakePHP, propel)
* markdown, twig/Jinja2
* Nginx, apache, gunicorn
* Linux (Debian preferred), Windows server (active directory and group policies)
* VBA for Excel

## Area-of-expertise Narratives

The below narratives illustrate how I have used the above technologies within
the stated areas of expertise.

### Habituation and Generalization Studies

Describes full "academic stack" development for web-based field experiments,
including data collection, analysis, and hypothesis testing.

* I used npm and yarn for javascript package management, and git / github for source code control.
* Each "modal" (popup) in this study shares common code, so I used webpack to let me write javascript
  classes with inheritance. Webpack and grunt scripts also build and bundle the source javascript and scss files, bootstrap for css and modals.
* The front-end uses jquery / d3 / underscore for interactivity.
* The web task dynamically loads page elements, in order to keep responsivity high.
  I used python Flask app for serving the task, and for running a json api that the client-side
  javascript talks to.
* User data is stored in a mysql/postgres db (depending on the server host). The database is
  built automatically and interfaced with by python code using sqlalchemy.
* The task integrates a Qualtrics survey. Data is passed to the survey via web url parameters, so each participant's
  identifier gets recorded into the qualtrics data for matching later.
* The task is deployed to Heroku, Salesforce's platform-as-a-service solution, which runs containerized applications
  on AWS hardware.
* I wrote "campaign" functionality to automate staggered posting of tasks to AWS mechanical turk. using python boto3 via
  the psiturk library.
* At analysis time, I query data using sqlalchemy. After parsing json datastrings, I join multiple tables --
  task behavior, mouse-tracking data, and survey data -- using pandas dataframes. I save these to csv files.
* I did statistical analysis primarily in R, using the tidyverse collection of packages (dplyr, ggplot2). I created
  models using `glm` and `lm`, and I specified followup contrasts using `emmeans`. I rendered a report
  using r-markdown, via `knitr`.

### Studies on confirmation bias for readers of online news

* I manually downloaded snapshots of dozens of news articles from various online publication sources. Then I wrote python classes
  for each publication source to scrape the articles' content, headlines, and header image. This data was stored in a mongodb.
* I created an api that could display article content as if from any source, using Flask templates.
* I collected mouse-tracking data while participants read news articles, and posted it to AWS firehose via an AWS api gateway. The firehose stored data in s3. This was crawled with AWS glue, to create query-able AWS Athena tables.
* I used Python scripts to query the Athena tables, and to group the mouse-tracking data by article-interaction, based on timestamps
  recorded in task-tracking data. I used R scripts to automate statistical analysis, using `lme4` for linear mixed models,
  since the data was of repeated-measures nature.

### Topological Data Analysis for a Nomological Network of IS Survey Items

* I computed semantic space embeddings for IS survey items, using embedding libraries such as word2vec and GloVe.
* I used sklearn to feed the data through various modeling algorithms, including neural nets (Tensorflow). I also fit models using DataRobot's AutoML platform.
* I wrote a script to use python to interact with a Java trained ML model downloaded from DataRobot
* Then, I used numpy and scipy to pull together model predictions from DataRobot
* I applied various dimensionality reduction techniques (projections) to get from 11k to 3- or 2-dimensions, using sklearn IsolationForest, T-SNE, PCA, L2norm, etc.
* I calculated shortest walking distances between all item-pairs from the graph. scipy to do distance calculations (such as pdist, and csgraph shortest_path)
* I used the  _Mapper_ algorithm (via python KeplerMapper library) to divide the projection into a grid of hyperspheres --
  Agglomerative clustering performed on each cluster to obtain nodes. Overlapping nodes are linked, creating a graph.
* I (inadvertently) became a core developer of the python KeplerMapper library.
* I used KeplerMapper to visualize the graph using javascript d3-force graph.

### InfoSec DevOps

I moved everything from usb-based "golden image" virtualbox ISOs, to full code-as-infrastructure DevOps.

* I used Packer to automate the preparation of a raw image of Debian-based Kali OS to be able
  to run on Google Cloud (cheaper for students than AWS).
* I used virt-manager on a gcp-launched kali image (that's nested virtualization!) so students
  can launch several "penetration testing lab" virtual machines for class assignments.
* I used vagrant and chef to provision the virtual machine images. Vagrant means that I can update the vagrant build script, and have
  students download and rerun the script to get fixed VM images, if needed. I used chef because that's what metasploitable3 uses, and I wanted to be able to contribute back to metasploitable3.
* I used terraform to launch a vpn server and a vulnerable midterm assessment server for _each student team_.
  The vulnerable servers are only accessible via a connection to the given vpn server, _except_ that ssh is open to the world so that I can ssh in and fix images if needed, via ansible.

Check out my [github activity]({{ github_profile_url }}) for more! Not all of my activity is "open," though --
current research projects are typically marked as "private"


## Professional Affiliations

- IFIP Working Group 8.11/11.13, “Information Systems Security Research” Active
Member
- Association for Information Systems Member

## Foreign Language

- Spanish

## Links

<!-- fa are fontawesome, ai are academicons -->
<ul class='no-list-style'>
<li> <i class="fa fa-globe"></i> <a href='{{ site.url }}'>{{ site.url }}</a></li>
<li> <i class="fa fa-envelope"></i> <a href="mailto:{{ site.email }}">{{ site.email }}</a> </li>
<li> <i class="fa fa-github"></i> <a href="{{ github_profile_url }}">{{ site.github_username }}</a> </li>
<li> <i class="fa fa-stack-overflow"></i> <a href="{{ site.stackoverflow }}">StackOverflow</a> </li>
<li> <i class="ai ai-google-scholar"></i> <a href="{{ site.google_scholar }}">Google scholar</a> </li>
<li> <i class="ai ai-orcid"></i> <a href="{{ site.orcid }}}}">ORCiD</a> </li>
</ul>
