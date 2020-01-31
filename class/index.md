---
title: Class
layout: default
permalink: /class/
published: true
#regenerate: true

---
<div>
{% assign schools = site.class | group_by: "school" %}
{% for school in schools %} 
<h1>{{ school.name }}</h1>
    {% assign years = school.items | group_by: "year" | sort:"name" | reverse %}
    {% for year in years %}
        <h2>{{year.name}}</h2>
        {% assign semesters = year.items | group_by: "semester" %}
        {% for semester in semesters %}
            <h3>{{semester.name | capitalize }}</h3>
            {% for class in semester.items %}
                <div><a href='{{ site.baseurl }}{{ class.url }}'>{% include smartify text=class.title %}</a></div>
            {% endfor %} 
        {% endfor %}
    {% endfor %}
{% endfor %}
</div>