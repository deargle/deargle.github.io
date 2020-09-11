---
title: Class
layout: default
permalink: /class/
published: true
regenerate: true

---
<div>
{% assign schools = site.class | group_by: "school" %}
{% for school in schools %}
<h1>{{ school.name }}</h1>
    {% assign school_class_groups = school.items | group_by: "title" | sort:"name" | reverse %}
    {% for class_group in school_class_groups %}
        <h2>{{class_group.name}}</h2>
        {% assign sections = class_group.items | sort: "year" | reverse %}
        {% for section in sections %}
        <div>
          <a href='{{ site.baseurl }}{{ section.url }}'>{{section.year }} {{ section.semester | capitalize}}</a>
        </div>
        {% endfor %}
    {% endfor %}
{% endfor %}
</div>
