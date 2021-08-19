---
title: Classes
description: Various classes I've taught at different universities.
layout: page
permalink: /classes/
include_toc: true
---

{: .lead}
This page lists some classes that I've taught at different universities.

See [/vita/]({{ site.baseurl }}/vita/) for student course- and instructor-evaluation metrics for classes
I've taught at CU Boulder.

{% assign schools_ordered = 'cu, pitt, byu' | split: ', ' %}
{% for school_short in schools_ordered %}
<div>
  {% assign school = site.schools | where: "name_short", school_short | first %}
    <h2>{{ school.uni }}</h2>
    {{ school }}
    <p class=''>
      <em>{{ school.department }}, {{ school.college }}</em>
    </p>

    {% assign class_summaries = site.class_summaries | where: "school_short", school_short | sort: 'priority' %}
    {% for class_summary in class_summaries %}
      <div>
        <h3>{{ class_summary.title }}</h3>
        {{ class_summary.content | markdownify }}
      </div>
      {% if class_summary.course_materials %}
      <div>
        <a
          class='btn {{ class_summary.course_materials_class}}'
          href='{{ class_summary.course_materials }}'>
          {{class_summary.title}} Course Materials
        </a>
      </div>
      {% endif %}
    {% endfor %}
</div>
{% endfor %}

---

## Syllabi

<div>
{% assign schools = site.classes | group_by: "school" %}
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
