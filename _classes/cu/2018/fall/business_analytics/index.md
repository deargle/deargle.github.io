---
title: Business Analytics
school: CU
year: "2018"
semester: fall
coursenum:
 - BAIM-3200-002
 - MKTG-3201-002
slack: https://businessanalytics-f18.slack.com/
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

Welcome to what Harvard Business Review termed the “Sexiest Job of the 21st Century” and Glassdoor named the “best job of the year” for 2016. This class teaches cutting-edge tools and approaches to the analysis of data, including “big data” and Internet of Things for effective decision-making. The class creates data connoisseurs through hands-on exposure to exploratory and predictive analytics.



## Communication

<div class='alert alert-info'><strong>Heads up!</strong> I rely <b>heavily</b> on slack to able to assist you all, and to communicate important information. Ignore slack at your peril!</div>

For communication, we will use Slack. Add an account at [{{page.slack}}]({{page.slack}}) (install laptop and phone apps so that you get notifications. There is also a desktop client. Use your @colorado.edu email address for instant verification.



## Technology Requirements

You will use Alteryx and DataRobot.

* Alteryx is installed on all Leeds computers, and on some Engineering school computers. You can optionally also install it on your laptop -- I will provide you with a free license. You can install it into Windows (x64) bit, or you can use a virtual machine that I will provide to run it on Mac without having to do bootcamp. 
    * See [How to Run Alteryx](https://canvas.colorado.edu/courses/21394/pages/how-to-get-alteryx) on Canvas. This link includes a list of campus lab computers that have Alteryx installed.

* DataRobot is browser-based. You get access with a DataRobot Access Card that you purchase.


## Materials

Required:

1. Provost, Foster and Tom Fawcett (2013), Data Science for Business: What You Need to Know About Data Mining and Data-Analytic Thinking. O’Reilly Media. Available on Amazon. (Links to an external site.)Links to an external site. Available as Kindle version—note that you do not require a Kindle to read the book. Kindle is available as software for your computer or iPad. Hardcopy also available on Amazon.

1. DataRobot Access Card. (CU bookstore: $105.95, [Direct from DataRobot](https://www.datarobot.com/datarobot-academic-payment-yp9qzs/): $80). This will give you access to a lot of computing power that would otherwise bog down your machine, sometimes for days at a time. We use this approach partially because students with expensive computers may in the past have had an unfair advantage in this class and because DataRobot is the premier AutoML on the market.


## Grading

<div markdown='1' style='width:40%' class='small'>

|                Item                | Points |
|------------------------------------|--------|
| Labs | 25 |
| Kaggle Project 1 | 10 |
| Kaggle Project 2 | 20 |
| Midterm Exam | 20 |
| Final Exam | 20 | 
| Participation | 5 | 
|=|=|
| **Total** |    **100** |

| Extra Credit | Value |
|-|-|
| Attend Analytics MeetUps | 1% towards final grade for each, max of 3. |
| Propose analytics side-project | Variable | 
|=|=|

</div>

## Learning Outcomes

After taking this class, students will:

* Understand and be able to explain the business analytics CRISP-DM process
* Understand the use of business analytics tools to extract actionable patterns
    * Data Preparation
        * Types of data
        * Data gathering
        * Data cleaning
        * Data sampling
        * Outlier detection
    * Algorithm selection
        * Understand the difference between supervised and unsupervised learning
        * Know at least three algorithms in-depth
        * Know of most of the other algorithm classes
        * Combining algorithms through ensemble learning
* Be able to evaluate the quality of a business analytics solution
    * General dangers:
        * Overfitting
        * Target leakage
        * Unbalanced classes
        * Unequal cost and profits • Profit curves
        * Baseline performance
    * Measures of quality:
        * Error rate
        * Precision/Recall/F1-scores
        * ROC curves
        * Area Under the Curve (AUC of ROC curves)
        * Root Mean-Squared Error (RMSE)
* Be able to communicate business analytics finding to other organizational members
* Ethics
    * Privacy of data

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

Labs are hands-on learning activities that will be introduced in class and completed outside of class. Labs are typically due one week after they are introduced in class.

## Exams

Exams primarily test conceptual understanding of analytics concepts. The current plan is for you to have two exams: one midterm and one final.


## Kaggle Projects

Kaggle is an online data-analytics competition platform. For these projects, you will go through the data mining process with deliverables comprised of the following:

* Demonstration of understanding of the business problem and of the data ("business understanding" and "data understanding" stages).
* Explanation of data preparation, including feature engineering ("data preparation" stage).
* Development and evaluation of a machine learning model, along with final recommendation to management.

The above three components will be delivered in stages.
    
I plan for us to participate in two Kaggle projects over the course of the class, each with its own report. You will work in teams for these projects.


    
# Relevant University Offices, Policies, and Procedures

[Student Classroom and Course-Related Behavior](http://www.colorado.edu/policies/student-classroom-and-course-related-behavior)

[Disability Services](http://www.colorado.edu/disabilityservices/). Please note that English as a second language is not a recognized disability and no extra exam time, nor any special conditions (e.g., use of a dictionary) can be provided to any student. This is a School policy, not left to the discretion of the professor.

[Honor Code](http://www.colorado.edu/policies/academic-integrity-policy)

[Religious Holidays](http://www.colorado.edu/policies/observance-religious-holidays-and-absences-classes-andor-exams)

[Discrimination and Harassment](http://www.colorado.edu/policies/discrimination-and-harassment-policy-and-procedures)

[Final Examination Policy](http://www.colorado.edu/policies/final-examination-policy) (should you have 3 exams on the date of our final exam)