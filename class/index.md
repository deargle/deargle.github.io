---
title: Class
layout: default
permalink: /class/
published: true
regenerate: true
---

## Classes I've Taught

### Leeds School of Business, University of Colorado

__Information Security Management (undergraduate)__
- Exploration of human, organizational, and technical domains of information security management.
- self-created hands-on Google Cloud virtual machine labs to teach students to "think like attackers"

__Information Security Management (graduate)__
- Taught within the Masters of Business Analytics - Security track.
- Compared to the ugrad offering, has a stronger focus on specific security behaviors that
  generate data amenable to machine learning -- e.g., post mortem reports from Mandiant and
  the House Oversight Committee (equifax, OPM)

<a class='btn btn-primary' href='https://daveeargle.com/security-assignments'>Information Security Course Material</a>

__Business Analytics__
- descriptive: querying, and ETL/wrangling data with Alteryx
- predictive: supervised vs unsupervised machine learning algorithms
- used Alteryx and DataRobot AutoML
- covering topics such as association rules, k-means clusters,
  regressions, correlations, and text mining

<a class='btn btn-success' href='https://classes.daveeargle.com/business-analytics/'>Business Analytics Course Material</a>

__Security Analytics with Python__
- a projects-based class focused on applying machine learning to security-related data.
  Topics include malware classification (binomial and multinomial), modeling using mobile sensor
  data, network traffic parsing (pcaps => netflows) and malicious IP, domain classification
- a focus on using python-sklearn -- on reading documentation and source code
- also a focus on "open data science" -- on hosted jupyter notebooks, on using git and github to store
  and share code projects. Also on sharing and programmatically consuming shared data.
- labs have students host models behind API endpoints (Flask app). Models are also deployed to AWS and GCP's
  machine learning platforms.

<a class='btn btn-warning' href='https://classes.daveeargle.com/security-analytics-assignments/'>Security Analytics Course Material</a>


See [/vita/]({{ site.baseurl }}/vita/) for student course- and instructor-evaluation metrics for the above courses.



### College of Business Administration at the University of Pittsburgh
__Database Management__
- Taught relational database structures and data querying in MySQL and R to
Juniors and Seniors from various departments

__Introduction to Information Systems Management__
* Full responsibility for a class of 60 undergraduate students from various
departments of the University of Pittsburgh’s College of Business Administration.
* Complete direction over course curriculum, policies, and syllabus.

__Microsoft Excel workshops for Katz Graduate students__

Taught four beginner-to-advanced-level Microsoft Excel workshops to part-time Katz
MBA students

### Department of Information Systems, Marriott School of Management, Brigham Young University
__Spreadsheets for Business Majors__

Full responsibility for four college-level class sections on computer spreadsheet skills,
with total enrollment of over 270 across four sections. Mix of online plus in-class
teaching. Oversight of three teaching assistants.


## Syllabi

<div>
{% assign schools = site.class | group_by: "school" %}
{% for school in schools %}
Syllabi for the CU courses shown below.
<!-- <h3>{{ school.name }}</h3> -->
    {% assign school_class_groups = school.items | group_by: "title" | sort:"name" | reverse %}
    {% for class_group in school_class_groups %}
        <h4>{{class_group.name}}</h4>
        {% assign sections = class_group.items | sort: "year" | reverse %}
        {% for section in sections %}
        <div>
          {% if section.external_url %}
            <a href='{{ section.external_url }}'>{{section.year }} {{ section.semester | capitalize}}</a>
          {% else %}
            <a href='{{ site.baseurl }}{{ section.url }}'>{{section.year }} {{ section.semester | capitalize}}</a>
          {% endif %}
        </div>
        {% endfor %}
    {% endfor %}
{% endfor %}
</div>
