---
permalink: /security-assignments/
layout: assignment
---
 
{% assign assignments = site.security_assignments | sort: 'number' %}
{% for assignment in assignments %} 
 
[{{ assignment.title }}]( {{ assignment.url }} )

{% endfor %}