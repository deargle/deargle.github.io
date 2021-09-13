---
layout: page
permalink: /tags
title: Posts by Tag
---


{% assign tags = "" | split: "" %}
{% for tag in site.tags %}
  {% assign tags = tags | push: tag[0] %}
{% endfor %}
{% assign tags = tags | sort_natural %}
<div>
  Tags (count):
  <ul>
  {% for tag in tags %}
    <li>
      <a href="#{{ tag | slugify }}">{{ tag }} ({{ site.tags[tag].size }})</a>
    </li>
  {% endfor %}
  </ul>
</div>

<hr/>

{% for tag in tags %}
  <h3 id="{{ tag | slugify }}">{{ tag }}</h3>
  <ul>
    {% for post in site.tags[tag] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> <span class='text-muted'><small>{{ post.date | date: '%B %-d, %Y' }}</small></span></li>
    {% endfor %}
  </ul>
{% endfor %}
