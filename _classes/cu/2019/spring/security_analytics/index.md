---
title: Security Analytics
school: CU
year: "2020"
semester: spring
coursenum:
 - BAIM-4250-001
 - MSBX-5480-002
slack: https://securityanalyticss20.slack.com
---

_{{ page.semester | capitalize }} {{ page.year }}_

MSBX 5500

<div id='nav-bar'></div>

Instructor
: Dave Eargle ([contact](<mailto:David.Eargle@colorado.edu>))

Class
: See [my.cu.edu](https://my.cu.edu)

Office Hours
: Location: probably S450J but who knows with the new numbering
: When: tba
: Or, by appointment

Slack
: [{{page.slack}}]({{page.slack}})


# Course Information


## Course Description

This class explores the application of data analytics to the domain of information security. It is a projects-based capstone-ish class within the security analytics track of the business analytics masters at CU Boulder. This class uses python machine learning libraries to both build and deploy models for both supervised and unsupervised modeling algorithms. Business problem contexts include classifying the likelihood that a file or website is malicious based on either extracted static indicators or dynamic behavioral analysis (predictive analytics), as well as network anomaly detection on organizational network traffic data or on user account usage (unsupervised machine learning).

Consider this sage prediction:

<blockquote class='blockquote' markdown='1'>
"The year 2020 expects to see an increase in the preventative approach of deep learning environments, which will become outdated and dangerous. TTPs will continue to evolve cyber threats; we’ll fight AI with AI. Drones hovering outside office windows will discuss ML and AI to combat the threat landscape. These AI will announce a strike over Twitter, the first monumental disruption in 2020.

"Real-time data and analytics and machine learning and AI creates unpreparedness by corporations and Big Tech companies. Managed detection engines are built on human made logic, but keeping this up-to-date against the latest studies costs almost three million cyber security. Perhaps the most attention raised by increasingly employed AI-based solutions is our need to reconsider our notions of what makes a mistake."

_-- Kelly Shortridge, VP of product strategy at Capsule8's, [bot](https://www.cyberscoop.com/2020-cyber-predictions-kelly-shortridge/)._
</blockquote>


## Learning Outcomes

Robustify your Analytics Toolbelt, and learn continuous self-education with the same
: Evaluate currently-asked for skills for data-science-related job postings, and learn how to learn those skills -- because things move fast, and new tools will keep coming.
Lifelong education in tech is a necessity.

Increase your fluency with analytics theory and practice
: The goal is that you know what you're talking about when it comes to basics of business analytics, especially regarding security analytics. I will know and you will know when
you do not know. But you will not not know, upon completion of this outcome.

Apply principles of machine learning to the domain of information security
: This includes supervied machine learning tasks (such as spam/ham classifications, malware classifications), and unsupervied anomaly detection
(e.g., time-series predictions of botnet enslavement, network anomaly detection on flow logs grouping by day, hour, protocol, IP, credit card fraud detection, mobile phone theft detection based on sensor data)

### Update Post-Semester -- What We Actually Learned (a lot!)

**Learning objectives and Topics**
*	Be conversant in and understand the workings of the following:
    * induction of supervised machine learning models for classification tasks
        *	understand over- and under-fitting, and strategies for dealing with overfitting (X-fold cross-validation)
        *	understand how models can actually fit models (information gain, loss-functions minimization, etc), and how certain models (e.g., logistic regressions, decision trees) actually make probability predictions
    *	differences between supervised vs unsupervised machine learning
    *	induction of models versus the use of models
    *	converting model probability predictions to binary predictions; choosing a  decision boundary (cutoff threshold)
    *	model evaluation, including ROC curves and precision-recall curves, confusion   matrices and attendant metrics, F1, PPV, TPR, business-context application of   evaluation metrics
    *	containerized app development (e.g., Docker)
*	Deployment and use of fitted models
    *	considerations for deployment of models (e.g., speed of prediction? Update-ability? data storage size of model?
    *	serializing fit models from e.g. a jupyter notebook flow, and unserializing them for usage in an API to obtain predictions
        *	serializing entire data-preparation workflow objects ('pipelines') for simplification of the "use of model" step
        *	Different modes of using serialized models, including storing python "pickled" models as files, or saving serialized models to a bytes field in a database
    *	environment variables and their use in local development of models, and deployment of the same to cloud platforms such as heroku
    *	containerized app development to simplify and modularize the development of apps which use models (e.g., Docker, with local containers versus deploying docker containers to Heroku)
    *	use of GCP container-ready operating system to run Docker
    *	Integration of models into a web environment, including storing output of model predictions into a SQL database for later retrieval, and also parallel use of key-value datastores (mongo).
*	Sharing of analysis and results
    *	use of jupyter notebooks on various popular jupyterhub providers -- e.g., AWS Sagemaker, GCP colab, Kaggle, local Anaconda installation, mybinder.org
        *	rendering of jupyter notebooks via nbviewer services provided either locally, or on github, github gists, etc
    *	understand conceptually and demonstrate competence with source-code management tools (e.g., Git and GitHub), for personal use and for team work.
    *	markdown text formatting language to simplify the sharing of writeups on the internet
        *	rendering of markdown via GiHub Pages websites (Jekyll)
    *	Understand and practice using the CRISP-DM, both for performing a datamining workflow, as well as for documenting and sharing process and findings
*	Competence with Linux scripting and all attendant things, including SSH and SCP and console text-editing (e.g., Vim).
*	Experience self-solving coding challenges via navigating code library documentation, and via attaching a debugger and stepping through code
*	Apply all of the above to an information security analytics context
    *	Explore information security-related applications of machine learning approaches, such as for malicious network traffic flagging, malware identification, network anomaly detection, atypical user behavior flagging. Projects with several of the aforementioned. Discuss uses of combinations of machine learning with modern tool suites, including Windows Defender, and Hybrid Analysis.
*	Conceptual discussion and demonstration of AWS services for data lakes, including posting JSON data to Gateway API -> AWS Firehose -> S3 buckets, crawl with AWS glue, query with AWS Athena.







## Communication

For communication, I'll use both Canvas ans Slack -- Canvas for things like grades and duedate-management, and Slack for synchronous communication and meme-sharing.

For Slack, add an account at [{{page.slack}}]({{page.slack}}). Consider installing laptop and phone apps so that you get notifications. There is also a desktop client. Use your `@colorado.edu` email address for instant verification.



## Technology Requirements

We'll use cloud-computing resources such as, but not necessarily limited to, the Amazon AWS platform and Google Cloud Computing platform.
But most of the software we use is open-source (e.g., github, Python anaconda, AWS Sagemaker on free-tier), and there are bounteous free
hosted python jupyter notebooks, so eh, you can probably  get by in this class for about the price of a large cup of coffee with extra toppings.



## Text Materials

You must grok this book:

* Provost, Foster and Tom Fawcett (2013), _Data Science for Business: What You Need to Know About Data Mining and Data-Analytic Thinking_. O’Reilly Media. [Available on Amazon](https://www.amazon.com/Data-Science-Business-Data-Analytic-Thinking/dp/1449361323)


## Grading

**tl:dr;** My qualitative assessment, informed by your self-assessment, of how well you meet personal and class-wide learning objective goals.

This is the first time that this class has been taught. It's goals are sweeping and ambitious. I would like to teach you how to learn

In a way, this will be a capstone projects course -- you and I agree on goals that make sense for you, and we meet regularly to assess your progress towards completing those goals, adjusting the goals as necessary. I want you to set goals that make you stretch -- aim high, and we can reevaluate if necessary.

I will also set baseline goal-based expectations common to everyone in the class.

I will probably give you labs each week. The labs will each have learning objectives. I want to try having you submit your work on these labs on github and
github classroom -- using markdown, revisions, etc. If you'd like, you can work on git branches, and submit a PR to your master branch from that
development branch. See the [GitHub Flow](https://guides.github.com/introduction/flow/)

I want you to have portfolio pieces when you leave the class. Things like analytics projects that you can point to when you are interviewing for jobs.
So, I will give you a few analytics projects with infosecurity business questions. I'll have you go through the CRISP-DM process --
documenting your changes as you go, perhaps in a CHANGELOG -- and continually updating your living-document report. The final
(and work-in-progress!) report will be a python jupyter notebook format.

Again, grading will be my qualitative assessment of how well you have demonstrated mastery of goals -- goals that everyone will have, and individual
goals that we agree on for you  -- throughout and at the end of the semester.



# Assignments

## Labs

Labs are hands-on learning activities that will be begun in class and completed outside of class. Labs are typically due one week after they are introduced in class.

The labs can be found here (TBA).


## Projects

You will complete several security-domain-based projects. These projects will be improved through iterative feedback, and will follow the form of CRISP-DM.





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
