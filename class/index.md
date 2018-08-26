---
layout: default
permalink: /class/
published: true
regenerate: true

---
<div>
{% assign schools = site.class | group_by: "school" %}
{% for school in schools %} 
<h1>{{ school.name }}</h1>
    {% assign years = school.items | group_by: "year" %}
    {% for year in years %}
    
        {% assign semesters = year.items | group_by: "semester" %}
        {% for semester in semesters %}
            
            {% for class in semester.items %}
                {{ year.name }} | {{ semester.name | capitalize }} | <a href='{{ site.baseurl }}{{ class.url }}'>{% include smartify text=class.title %}</a>
            {% endfor %} 
        {% endfor %}
    {% endfor %}
{% endfor %}
</div>