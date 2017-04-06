---
layout: syllabus
published: true
permalink: /class/pitt/busbis1605/
title: BUSBIS 1605 Sec 1210 &ndash; Database Management
---

_Spring 2016_

<div id='nav-bar'></div>

Instructor
: Dave Eargle ([contact]({% link contact.md %})) 

Class
: Tues/Thurs 12:30PM - 1:45PM 
: 209 Mervis Hall 

Office Hours
: By appointment (Skype or Hangouts preferred)

Exam
: TBA

Google Group
: <a href='https://groups.google.com/forum/#!forum/pitt-busbis1605-spring2017/join'>Subscribe</a>
: <a href='https://groups.google.com/forum/#!forum/pitt-busbis1605-spring2017'>Visit the group</a>
: Use the group for asking questions to all class members -- for instance, tech troubleshooting help questions.

# Course Information

## Course Description

This course provides a basic understanding of information management in organizations and specifically the design and use of database systems. Topics include data modeling, relational databases, and structured query language. The course is divided into four sections: (1) information management concepts and procedures for Web-based systems; (2) data modeling and database design; (3) data analytics; (4) data management.

_The course syllabus is a general plan for the course; deviations announced to the class by the instructor may be necessary._

## Objectives

Students completing this course will

1. understand the organizational issues involved in data management
1. be able to develop a valid data model for a business system of medium complexity
1. be able to build and use a relational database
1. be able to formulate complex relational database queries
1. be able to use R for data analytics
1. be aware of the issues related to managing "big data"
1. be familiar with the principles of managing and exploiting organizational data


## Topics

1. The organizational perspective on data management
1. Data modeling and SQL
1. Relational DBMS
1. Organizational intelligence technologies
1. Introduction to R
1. Data visualization
1. HDFS and MapReduce
1. Data structure and storage
1. Data processing architectures
1. Data integrity and data administration

## Text

Watson, R. T. (2013). [Data management: databases and organizations](http://www.amazon.com/dp/B00E8HS8N2) (6th ed.). Athens, GA: eGreen Press. **I recommend the Kindle version.** [Textbook website](http://richardtwatson.com/dm6e/).

## Software

We will use [MySQL Workbench](http://www.mysql.com/products/workbench/) for data modeling and SQL execution (available on Windows, Linux, and Mac OS X). Macintosh owners can also use [Sequel Pro](http://www.sequelpro.com/) for SQL execution.

### MySQL database

1. Laptop for individual assignments and exams: <br>
   Download and install [MySQL Community Server](http://dev.mysql.com/downloads/mysql/) (or, if you're interested in Web Dev, [WAMP](http://www.wampserver.com/en/) or [MAMP](https://www.mamp.info/en/))<br>
1. Server for SQL exercises: <br> 
    Hostname: mysql.daveeargle.com. Username and password on CourseWeb. Default schema: Text.
1. Server for group work <br>
   Hostname: mysql.daveeargle.com. You will get a group id and password.

### R
1. Server connection parameters TBA


## Policies

### Group size
Groups should contain between three and four persons.

### Communication
I will send messages via CourseWeb. Feel free to [contact me]({% link contact.md %}) outside of CourseWeb.

### Academic honesty
Students in this course will be expected to comply with the [University of Pittsburgh's Policy on Academic Integrity](http://www.cfo.pitt.edu/policies/policy/02/02-03-02.html). Any student suspected of violating this obligation for any reason during the semester will be required to participate in the procedural process, initiated at the instructor level, as outlined in the University Guidelines on Academic Integrity. This may include, but is not limited to, the confiscation of the examination of any individual suspected of violating University Policy. Furthermore, no student may bring any unauthorized materials to an exam, including dictionaries and programmable calculators.

### Team work
In this class, you will work in teams. As a result, review a short report on [team effectiveness]({{site.baseurl}}/class/general/team_effectiveness.pdf) and establish a team agreement [(sample agreement)]({{ site.baseurl }}/class/general/sample_team_agreement.docx). Give the instructor a copy of your team agreement by the end of the second week of classes.


### Freeloader policy
It occasionally happens in class and enterprise settings that someone in a group is not prepared to do his/her share. In the case of my classes, I recommend that the team give the freeloader one warning and then fire that person from the team. That person will then do group assignments individually or find another team to join. The team should notify me of the change in team composition immediately. I distribute a [form]({{site.baseurl}}/class/general/Peereval.docx) to assess team participation at the end of the semester. If a major disparity in team contribution is reported, I will adjust team project grades.

### Laptop policy 
Students are welcome to use laptops in class for note taking and completing class exercises, exclusively. If you plan to take notes, please advise and email a copy of the notes at the end of each class.


### Attendance
Attendance and participation are required for this course. Excessive unexcused absences (i.e., greater than 4) will result in a failing grade according to [University of Pittsburgh policies](http://www.bulletins.pitt.edu/archive/education/eh.html)

# Assignments
See the class schedule for the due date. The due time is 11:59pm on the due date.

## Exercises (on your own)

* SQL exercises are based on the [ClassicModels database](http://richardtwatson.com/dm6e/Reader/ClassicModels.html).
* Please use the assignment identifier so I can keep track of your submissions. As I have many assignments to grade, help me to be efficient.
* **Resubmission**: If you receive less than full points for an exercise, you can make one resubmission up to one week after the intital due date for the first three assignments.
* Please submit via CourseWeb and **follow the specificied [assignment guidelines]({{ site.baseurl }}/class/general/assignment_guidelines/)**.

<table class='table table-hover'>
<thead>
<tr>
<th>Identifier</th>
<th>Chapter</th>
<th>Exercise</th>
</tr>
</thead>
<tbody>
<tr>
    <td>A1</td>
    <td>Single Entity</td>
    <td>
        <b>Data Modeling</b>
        <p>A tennis store wants to keep track of its inventory. Each type of racquet has a manufacturer, model name, composition, color, price, quantity on hand, grip type, string tension, and a racquet code (e.g., N123D). Racquets are classified as junior, amateur or professional. Create the data model with MySQL workbench.</p>
        
        <b>SQL</b>
        <ul>
            <li>List each product's name and its MSRP increased by 10%. </li>
            <li>List the product name and code of products with a code starting with S18.</li>
        </ul>
    </td>
</tr>
<tr>
    <td>A2</td>
    <td>One-to-Many relationship</td>
    <td>
        <b>Data modeling</b>
        <p>Create a data model to record details of a firm's managers and the projects they supervise. A typical manager is assigned to supervise several projects. However, a project is assigned to only one manager. For each manager, the firm wants to know the person's name and email address. A project's name, final cost, and expected cost are required. You can assume a unique name for each project but not for each manager. </p>
        
        <b>SQL</b>
        <ul>
            <li>Report the number of employees in each country.</li>
            <li>What is the total payment received from customers in Australia?</li>
        </ul>
    </td>
</tr>
<tr>
    <td>A3</td>
    <td>Many-to-Many relationship</td>
    <td>
        <b>Data modeling</b>
        <p>A football fan has asked you to create a data model to record details of injuries. You need to capture details of teams, players, games, and injuries.</p>

        <b>SQL</b>
        <ul>
            <li>Report the value of each cancelled order for each customer. Sort by customer name and order number.</li>
            <li>Report the total value ordered for each product line in January 2004 sorted by product line. 
            : See <a href='http://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html'>MySQL date functions</a>.</li>
        </ul>
    </td>
</tr>
<tr>
    <td>A4</td>
    <td>One-to-One and Recursive Relationships</td>
    <td>
        <b>Data modeling</b>
        <p>At a local sport facility, a club can have many players, but a player can play only for one club. Each club has, at most, one player known as a "rising-star." For every club, record the name of the club, its address, and phone number. A player can be at one of three levels: beginner (B), intermediate (I), or advanced (A). Furthermore, each player can have, at the most, one other player as a mentor.</p>
    
        <b>SQL</b>
        <ul>
            <li>Which sales reps report to Bow?</li>
            <li>Who is the boss of an employee called Larry or Barry? Report the full name of the boss and the employee and the employee's title.</li>
        </ul>
    </td>
</tr>
<tr>
    <td>A5</td>
    <td>SQL</td>
    <td>Write a procedure to report the total amount paid in a specified month and year. Format with zero decimal places.</td>
</tr>
<tr>
    <td>A6</td>
    <td>Introduction to R</td>
    <td>
        A <a href='/{{site.baseurl}}class/data/co2percapita.csv'>file</a> contains details of CO2 emissions per capita for the four largest economies in North America. Write an R script to read the file, convert it into a format suitable for use with R and report the average CO2 per capita for each country in descending order.
    </td>
</tr>
<tr>
    <td>A7</td>
    <td>Data visualization</td>
    <td>Graph CO2 emissions per capita by year for each of the four countries in the prior exercise. Show separate lines for each country. Hint: For a tidier x-axis, see the "Tick sizes and padding" section of the <a href='http://ggvis.rstudio.com/axes-legends.html'>ggvis axes documentation</a>).</td>
</tr>
<tr>
    <td>A8</td>
    <td>HDFS and MapReduce</td>
    <td>Using Delta’s <a href='/{{ site.baseurl }}class/data/Delta_2013_2.csv'>performance data for February 2013</a> do the following:
        <ol type='a'>
            <li>Using regular R commands, compute the minimum, average, and maximum departure delay in minutes (DepDelayMinutes) for each origin airport. Use head() to show the first six rows.</li>
            <li>Use MapReduce to undertake the same computations. Use head() to show the first six rows.
            </li>
        </ol>
    </td>
</tr>
</tbody>
</table>


## State of the art presentations (group) (there will be two per class).

A presentation is required from each group on a data management technology, with a particular concentration on open source products.

* You will give a 10 minute class presentation directed at your fellow class members.
* Points will be deducted for exceeding 10 minutes.
* The presentation should focus on the applications of the selected technology and the business opportunities it provides.
* Spend no more than 3 minutes, if you judge it necessary, describing or demonstrating how the technology works.
* A video should not be a substitute for your presentation but should augment it to visualize a point you cannot present otherwise.
* No handouts (save the trees), but you can share a link to your presentation with me (the professor), and I'll share it with the  class.

Some suggested topics are listed below (assigned topics have a date of presentation), and you can propose other topics. You should submit your bid for a topic via [e-mail]({% link contact.md %}). When submitting a bid, also specify your team's name. Those who bid early present early.

<div class='small'>
<table class='table table-condensed' style='width:50%'>
<thead>
<tr>
    <th>Topic</th>
    <th>Group</th>
    <th>Date</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Drones</td>
    <td>Fly Boyz</td>
    <td>
        Class 6 <br>
        1/24
    </td>
</tr>
<tr>
    <td>3D printing</td>
    <td>Team Avocado</td>
    <td>
        Class 7 <br>
        1/26
    </td>
</tr>
<tr>
    <td>Bitcoin</td>
    <td>Antoons</td>
    <td>
        Class 8 <br>
        1/31
    </td>
</tr>
<tr>
    <td>Autonomous vehicles</td>
    <td>Über Ëverywhere</td>
    <td>
        Class 9 <br>
        2/2
    </td>
</tr>
<tr>
    <td>Virtual reality</td>
    <td>Nebachenezzer</td>
    <td>
        Class 10 <br>
        2/7
    </td>
</tr>
<tr>
    <td>Internet of things</td>
    <td>Group 1</td>
    <td>
        Class 11 <br>
        2/9
    </td>
</tr>
<tr>
    <td>Augmented reality</td>
    <td>Purple People Eaters</td>
    <td>
        Class 12 <br>
        2/14
    </td>
</tr>
<tr>
    <td>Proximity marketing (iBeacon and Eddystone)</td>
    <td>The Lonely Two</td>
    <td>
      Class 13 <br>
      2/16
    </td>
</tr>
<tr>
    <td>NFC (payments, etc)</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>IBM's Watson</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Computer-brain interfaces</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Smart cities</td>
    <td></td>
    <td></td>
</tr>
</tbody>
</table>
</div> 

## Database design and implementation project #1 (group)

Cell phones have replaced landlines in many situations, except hotels, yet the guests of most hotels have a cell phone. Design the database for an app to replace a room's <a href='https://docs.google.com/document/d/1iKqusrW1mp-yhRWcFXtYy0_5P0UfMBI_2ZoGZH8sAOE/edit?usp=sharing' target='_blank'>landline and the various paper documentation you find in a hotel room</a>. Convert the data model to a relational database and write 10 queries to access the database. The queries should demonstrate your breadth of understanding of SQL (i.e., 10 simple queries will not score as well as say 4 simple queries and 6 nontrivial queries).

Follow the [guidelines for database project submissions]({{ site.baseurl }}/class/general/dbguidelines/).

Data modeling is difficult and to facilitate learning an initial model must be submitted previous to the due date (see the schedule).


## Database design and implementation project #2 (group)

Develop a data model for an application of your choice. The problem must be at least of the same order of magnitude as for project #1. Please discuss your proposed project with the instructor before making substantial progress. You must file a brief written outline of the project's scope. You might find an [examplar project](http://people.terry.uga.edu/rwatson/general/exemplar.pdf) and [associated data](http://people.terry.uga.edu/rwatson/general/exemplar.xlsx) useful for this assignment.

An initial model must be submitted previous to the due date (see the schedule).

Follow the [guidelines for database project submissions]({{ site.baseurl }}/class/general/dbguidelines/) .


## Grading

<div markdown='1' style='width:40%' class='small'>

|                Item                | Points |
|------------------------------------|--------|
| Assignments (A1–A8)                             |     20 |
| State of the art report            |     10   |
| Database design and implementation project #1 | 15 |
| Database design and implementation project #2 | 15 |
| Mid semester exam ([sample from UGA](sample_midterm.pdf))                  |     15 |
| Final exam ([sample from UGA](sample_final.pdf))                                      |     25 |
|=|=|
| **Total**                              |    **100** |

<div class='alert alert-warning'>
    If you are unable to complete an exercise on time or take an exam at the specified time, please advise the instructor as soon as possible so that alternative arrangements can be made.
</div>

</div>


## Team evaluation

[This form](/{{ site.baseurl }}class/general/Peereval.docx) should be submitted **before the final exam.**

# Quick Links
<ul>
   <li>The <a href='https://goo.gl/forms/3FY7iFDAQLdwqITZ2'>I'm Done Quiz</a></li>
   
   <li><a href='http://www.richardtwatson.com/dm6e/index.html'>Textbook homepage</a></li>
   <ul>
      <li><a href='http://www.richardtwatson.com/dm6e/Reader/slides.html'>Textbook slides</a></li>
      <li>Extra practice: Textbook <a href='http://richardtwatson.com/dm6e/Reader/ClassicModels.html'>ClassicModels</a> question set</li>
   </ul>
</ul>

# Schedule

<div class='small'>
<table class='table table-bordered table-condensed table-hover'>
  <thead>
    <tr>
        <th rowspan='2'>Class</th>
        <th rowspan='2'>Day</th>
        <th rowspan='2'>Date</th>
        <th rowspan='2'>Topic (chapter)</th>
        <th colspan='3' class='text-center'>Activities</th>
    </tr>
    <tr>
        <th class='col-md-4'>Before Class</th>
        <th class='col-md-4'>In Class</th>
        <th class='col-md-4'>Due by 11:59pm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Thursday</td>
      <td>1/5</td>
      <td>Syllabus, introduction</td>
      <td>
          <ul>
            <li>Read <a href='https://www.weforum.org/agenda/2015/10/worlds-best-job-the-answer-might-surprise-you/'>World's best job</a>. Compare to Glassdoor's best jobs for 2016.</li>
          </ul> 
      </td>
      <td><a href='https://goo.gl/forms/sOwiofKLeJqYHUGP2'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Tuesday</td>
      <td>1/10</td>
      <td>Data (1)</td>
      <td>Acquire the <a href='#text'>Textbook</a></td>
      <td><a href='https://goo.gl/forms/3uipeb3jKPkVePxD3'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Thursday</td>
      <td>1/12</td>
      <td>Information (2)</td>
      <td>&nbsp;</td>
      <td>
        <ul>
            <li>Subscribe to the Google Group (link at the <a href='#'>top</a>)</li>
            <li><a href='https://www.amazon.com/gp/help/customer/display.html?nodeId=201252670'>Kindle: Turn Automatic Book Updates On</a></li>
            <li><a href='https://github.com/binarycrafts/ACRExtensions'>How to copy text from Kindle Reader</a></li>
            <li><a href='https://goo.gl/forms/j7uy1baWwvcD2WyI3'>In-class survey</a></li>
        </ul>
      </td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Tuesday</td>
      <td>1/17</td>
      <td>Single Entity (3)</td>
      <td>
        <ul>
            <li>Install <a href='http://www.mysql.com/products/workbench/'>MySQL Workbench</a></li>
            <li>Install <a href='http://dev.mysql.com/downloads/mysql/'>MySQL Community Server</a> (or full stack equivalent, see <a href='#software'>sofware section</a>)</li>
            <li>Complete three MySQL Workbench tutorials: 
                <ol>
                    <li><a href='https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html'>Creating A New MySQL Connection</a></li>
                    <li><a href='https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-creating-a-model.html'>Creating a Model</a></li>
                    <li><a href='https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-adding-data.html'>Adding Data</a></li> 
                </ol>
            </li>
        </ul>
        </td>
      <td>
        <ul>
            <li>Load <a href='http://richardtwatson.com/dm6e/Reader/sql/databases.sql'>databases used in textbook plus the ClassicModels database.</a></li>
            <li><a href='https://goo.gl/forms/KFpXdpjLPoESw5dF2'>In-class survey</a></li>
            <li>Extra practice: <a href='http://richardtwatson.com/dm6e/Reader/answers/chapter03.html'>textbook exercises</a> and <a href='http://richardtwatson.com/dm6e/Reader/ClassicModels.html'>ClassicModels</a></li>
        </ul></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Thursday</td>
      <td>1/19</td>
      <td>Single Entity (3)</td>
      <td>&nbsp;</td>
      <td>
         <a href='https://goo.gl/forms/RLnM0amkRHAdMzz93'>In-class survey</a>
      </td>
      <td><a href='#team-work'>Team agreement</a></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Tuesday</td>
      <td>1/24</td>
      <td>One-to-Many relationship (4)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/7Y4JGIYLc6EzArm82' target='_blank'>In-class survey</a></td>
      <td><a href='#exercises-on-your-own'>A1</a></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Thursday</td>
      <td>1/26</td>
      <td>One-to-Many relationship (4)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/E8SSIQxtWcZB1vAv1' target='_blank'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Tuesday</td>
      <td>1/31</td>
      <td>Many-to-Many relationship (5)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/MEeFFnXsfqimj7wQ2' target='_blank'>In-class survey</a></td>
      <td><a href='#exercises-on-your-own'>A2</a></td>
    </tr>
    <tr>
      <td>9</td>
      <td>Thursday</td>
      <td>2/2</td>
      <td>Many-to-Many relationship (5)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/YnqE24L2Ta0t2Ez53' target='_blank'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Tuesday</td>
      <td>2/7</td>
      <td>Recursive Relationships (6)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/6NTTud9scA8VwpRr2' target='_blank'>In-class survey</a></td>
      <td><a href='#exercises-on-your-own'>A3</a></td>
    </tr>
    <tr>
      <td>11</td>
      <td>Thursday</td>
      <td>2/9</td>
      <td>Recursive Relationships (6)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/kDOVTqkFnVQ1qQ1w2' target='_blank'>In-class survey</a></td>
      <td>Initial model of <a href='#database-design-and-implementation-project-1-group'>Project #1</a></td>
    </tr>
    <tr>
      <td>12</td>
      <td>Tuesday</td>
      <td>2/14</td>
      <td>Data modeling (7)</td>
      <td><a href='https://goo.gl/forms/pLUvc6k0JY46N5UY2' target='_blank'>In-class survey</a></td>
      <td>&nbsp;</td>
      <td><a href='#exercises-on-your-own'>A4</a></td>
    </tr>
    <tr>
      <td>13</td>
      <td>Thursday</td>
      <td>2/16</td>
      <td>Data modeling (7)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/BNlrJvaF64AJXH6v1' target='_blank'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Tuesday</td>
      <td>2/21</td>
      <td>SQL (10)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/hxyI9PORQ9ZoJOCG3' target='_blank'>In-class survey</a></td>
      <td><a href='#database-design-and-implementation-project-1-group'>Project #1</a></td>
    </tr>
    <tr>
      <td>15</td>
      <td>Thursday</td>
      <td>2/23</td>
      <td>SQL (10)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/WOeGl0WFipT2AhPC2' target='_blank'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr class='danger'>
      <td>16</td>
      <td>Tuesday</td>
      <td>2/28</td>
      <td>Mid-term exam</td>
      <td>&nbsp;</td>
      <td>
         <ul>
         <li><a href='midterm_spring_2017_answers.pdf'><b>The Midterm -- Answers</b></a></li>
         </ul>
      </td>
      <td><a href='#exercises-on-your-own'>A5</a></td>
    </tr>
    <tr class='danger'>
      <td>17</td>
      <td>Thursday</td>
      <td>3/2</td>
      <td>Mid-term exam</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr class='success'>
      <td>18</td>
      <td>Tuesday</td>
      <td>3/7</td>
      <td>Spring break</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr class='success'>
      <td>19</td>
      <td>Thursday</td>
      <td>3/9</td>
      <td>Spring break</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Tuesday</td>
      <td>3/14</td>
      <td>Spatial &amp; Temporal data (11)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/9AdR2DsxbjoVqVFq2'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Thursday</td>
      <td>3/16</td>
      <td>Organizational Intelligence (13) &amp;&nbsp;Pivot Tables</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/zyeuHUkCnsstEAnk2'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>22</td>
      <td>Tuesday</td>
      <td>3/21</td>
      <td>Introduction to R (14)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/kETe73UFZGeLUekc2'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Thursday</td>
      <td>3/23</td>
      <td>Introduction to R (14)</td>
      <td>&nbsp;</td>
      <td><ul>
      <li><a href='https://goo.gl/forms/ktkolQbkuzcVvRcO2'>In-class survey</a></li>
      <li><a href='http://people.terry.uga.edu/rwatson/data/CO2_yearly_emissions.csv'>co2_yearly_emmissions.csv</a></li>
      </ul></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>24</td>
      <td>Tuesday</td>
      <td>3/28</td>
      <td>Data visualization (15)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/TLxTtU9jOpQNAFww2'>In-class survey</a></td>
      <td><a href='#exercises-on-your-own'>A6</a></td>
    </tr>
    <tr>
      <td>25</td>
      <td>Thursday</td>
      <td>3/30</td>
      <td>Data visualization (15)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/BDazYLcliXYSTR7B2'>In-class survey</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>26</td>
      <td>Tuesday</td>
      <td>4/4</td>
      <td>HDFS and MapReduce (17)</td>
      <td>&nbsp;</td>
      <td>
      <ul>
         <li><a href='{{ site.baseurl }}/class/general/rmr2/'>Install rmr2</a></li>
         <li><a href='https://goo.gl/forms/ijhRWrdwC2NR7wgi1'>In-class survey</a></li>
      </ul>
      </td>
      <td><a href='#exercises-on-your-own'>A7</a></td>
    </tr>
    <tr>
      <td>27</td>
      <td>Thursday</td>
      <td>4/6</td>
      <td>HDFS and MapReduce (17)</td>
      <td>&nbsp;</td>
      <td><a href='https://goo.gl/forms/nMn7TSPr4DmkvdVl1'>In-class survey</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Tuesday</td>
      <td>4/11</td>
      <td>Data structure and storage (19)</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Initial model of <a href='#database-design-and-implementation-project-2-group'>Project #2</a></td>
    </tr>
    <tr>
      <td>29</td>
      <td>Thursday</td>
      <td>4/13</td>
      <td>Data structure and storage (19)</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><a href='#exercises-on-your-own'>A8</a></td>
    </tr>
    <tr>
      <td>30</td>
      <td>Tuesday</td>
      <td>4/18</td>
      <td>Data processing architectures (20)</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><a href='#database-design-and-implementation-project-2-group'>Project #2</a></td>
    </tr>
    <tr>
      <td>31</td>
      <td>Thursday</td>
      <td>4/20</td>
      <td>Data integrity (22)</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr class='danger'>
      <td>32</td>
      <td>-</td>
      <td>TBA</td>
      <td>Final Exam</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Submit <a href='#team-evaluation'>Team Evaluation form</a> before the final.</td>
    </tr>
  </tbody>
</table>
</div>

## Syllabus Versions

<div class='row'>
<div class='small col-md-6' markdown='1'>

| revision date |          notes          |
|---------------|-------------------------|
| 12/24/2016    | Original version posted |

</div>
</div>

<br><br>

_This syllabus is a fork of one created by [Rick Watson](http://people.terry.uga.edu/rwatson/) for his Data Management class at UGA. Many thanks to Rick._


