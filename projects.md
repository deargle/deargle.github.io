---
title: Projects
description: Some things I'm working on; some things I've made.
layout: page
permalink: /projects/
include_toc: true
regenerate: true
---

<h1 class='display-3'>Tools</h1>

Some things I've made. Links are scattered throughout blog posts, so I'm gathering them here.


{% assign tools = site.projects | where: 'type', 'tool' %}
{% for tool in tools %}
<h2 class='' {% if tool.title_short %}data-toc-text="{{ tool.title_short }}"{% endif %}>{{ tool.title }}</h2>

{% if tool.link %}
<{{tool.link}}>
{% endif %}

{{tool.content | markdownify }}

{% endfor %}


<h1 class='display-3'>Academic Research</h1>

{% assign research_stream_names = site.data.research_streams | map: "name"  %}

I do academic research on things like the following:
<ul>
{% for stream_name in research_stream_names %}
<li>{{ stream_name }}</li>
{% endfor %}
</ul>

Learn more on my <a href="{% link research.md %}">research page</a>.


<h1 class='display-3'>Github Projects</h1>

Check out my github activity! <a href="{{ site.github_username }}"><i class="fab fa-github"></i> deargle</a>

I publish some of my class content in the
[<i class="fab fa-github"></i> deargle-classes](https://github.com/deargle-classes)
github organization.

I am involved more heavily with development of a few open-source repositories, such as the ones below.

<ul>
{% for project in site.opensource_projects %}
<li> <strong><a href="{{ project.repo_link }}">{{ project.title }}</a></strong>. {{ project.my_involvement }}  </li>
{% endfor %}
</ul>



<h1 class='display-3'>Extras</h1>

<div class="mb-2">
  <ul>
    <li><a href="{% link woodworking.md %}">Woodworking projects</a></li>
  </ul>
</div>
