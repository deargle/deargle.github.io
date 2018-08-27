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
    <ul>
    {% assign years = school.items | group_by: "year" %}
    {% for year in years %}
    
        {% assign semesters = year.items | group_by: "semester" %}
        {% for semester in semesters %}
            
            {% for class in semester.items %}
                <li>{{ year.name }} | {{ semester.name | capitalize }} | <a href='{{ site.baseurl }}{{ class.url }}'>{% include smartify text=class.title %}</a></li>
            {% endfor %} 
        {% endfor %}
    {% endfor %}
    </ul>
{% endfor %}
</div>