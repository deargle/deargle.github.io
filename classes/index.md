---
title: Classes
description: Various classes I've taught at different universities.
layout: page
permalink: /classes/
include_toc: true
---

{: .lead}
This page lists some classes that I've taught at different universities.

See [/vita/#teaching-experience]({{ site.baseurl }}/vita/#teaching-experience) for student course- and instructor-evaluation metrics for classes
I've taught at CU Boulder.

See the [bottom of this page](#syllabi) for links to some syllabi.

{% assign class_summaries = site.class_summaries | sort: 'priority' %}
<div>
  {% for class_summary in class_summaries %}
    <div class='mb-4'>
        <h1>{{ class_summary.title }}</h1>
        {{ class_summary.content | markdownify }}
      {% if class_summary.course_materials %}
      <div>
        <a class='btn {{ class_summary.course_materials_class}}'
           href='{{ class_summary.course_materials }}'>
           {{class_summary.title}} Course Materials
        </a>
      </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

---

# Syllabi

Not all syllabi are shown below -- some syllabi have been lost to the sands of time.

<div>
{% assign schools = site.classes | group_by: "school" %}
{% for school in schools %}
    {% assign school_class_groups = school.items | group_by: "title" | sort:"name" | reverse %}
    {% for class_group in school_class_groups %}
        {% assign sections = class_group.items | sort: "year" | reverse %}
        {% for section in sections %}
        <div>
          {% if section.external_url %}
              {% assign url = section.external_url %}
          {% else %}
            {% assign url = section.url | relative_url %}
          {% endif %}
          <a href='{{ url }}'>{{ class_group.name }} | {{ school.name }} | {{ section.year }} | {{ section.semester | capitalize }}</a>
        </div>
        {% endfor %}
    {% endfor %}
{% endfor %}
</div>
