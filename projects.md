---
title: Projects
description: A collection of links to project pages referenced in blog posts and the like
layout: page
permalink: /projects/
include_toc: true
---

{: .lead }
Some research I'm working on; some things I've made.


<h1>Research</h1>

Recent research, grouped by stream.

See [my vita]({{ '/vita/' | relative_url }}) or [my google scholar profile]({{ site.google_scholar }})
for a full list of my publications.

{% assign research_streams = site.data.research_streams | sort: "order" %}
{% assign research_projects_by_stream = site.projects | where: 'type', 'research' | group_by: "stream" %}

<div class="">
{% for stream_meta in research_streams %}

  {% assign stream = research_projects_by_stream | where: 'name', stream_meta.id | first %}

  <h2 data-toc-text="{{ stream_meta.name }}">Stream: {{ stream_meta.name }}</h2>

  {% assign projects = stream.items | sort: "order" %}
  {% for project in projects -%}
    <h3>{{ project.title }}</h3>

    {%- if project.with -%}
      <p><em>With: {{ project.with }}</em></p>
    {%- endif %}

<p>{{ project.description_short }}</p>

{{ project.content | markdownify }}

    {% if project.resources -%}
      {% assign resources = project.resources %}
      {%- if resources.links -%}
      <p>Links to resources:
        <ul>
        {%- for link in resources.links -%}
          <li><a href='{{ link.url }}'>{{ link.text }}</a></li>
        {%- endfor -%}
        </ul>
      </p>
      {% endif %}

      {%- if resources.markdown %}
{{ resources.markdown | markdownify }}
      {% endif -%}
    {%- endif -%}

  {%- endfor %}
{%- endfor %}
</div>


<h1>Github Projects</h1>

Check out my github activity! <a href="{{ site.github_username }}"><i class="fab fa-github"></i> deargle</a>

I publish as much of my class content as I can online, via Github Pages rendering.
Much of that content is in the [<i class="fab fa-github"></i> deargle-classes](https://github.com/deargle-classes) github organization.
I encourage my students to contribute to class-related repos. Sometimes they do.

I am involved more heavily with development of a few open-source repositories, such as the ones below.

{% assign opensource_projects = site.projects | where: 'type', 'opensource' %}

{% for project in opensource_projects -%}

  <h2 {% if project.title_short %}data-toc-text="{{ project.title_short }}"{% endif %}>{{ project.title }}</h2>

  {% if project.with -%}
  <em>With: {{ project.with }}</em>
  {%- endif %}

{{ project.content | markdownify }}

{% endfor %}


<h1>Tools</h1>

Some things I've made. Links are scattered throughout blog posts, so I'm gathering them here.


{% assign tools = site.projects | where: 'type', 'tool' %}
{% for tool in tools %}
<h2 {% if tool.title_short %}data-toc-text="{{ tool.title_short }}"{% endif %}>{{ tool.title }}</h2>

{% if tool.link %}
<{{tool.link}}>
{% endif %}

{{tool.content | markdownify }}

{% endfor %}
