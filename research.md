---
title: Research
description: Recent research, grouped by stream.
layout: page
include_toc: true
---


See [my vita]({{ '/vita/' | relative_url }}) or [my google scholar profile]({{ site.google_scholar }})
for a full list of my publications.

{% assign research_streams = site.data.research_streams | sort: "order" %}
{% assign research_projects_by_stream = site.projects | where: 'type', 'research' | group_by: "stream" %}

<div class="">
{% for stream_meta in research_streams %}

  {% assign stream = research_projects_by_stream | where: 'name', stream_meta.id | first %}

  {% if stream_meta.name_short %}
    {% assign stream_toc_text = stream_meta.name_short %}
  {% else %}
    {% assign stream_toc_text = stream_meta.name %}
  {% endif %}
  <h2 class='display-5' data-toc-text="{{ stream_toc_text }}">Stream: {{ stream_meta.name }}</h2>

  <p class='lead'>{{ stream_meta.description }}</p>

  {% assign projects = stream.items | sort: "order" %}
  {% for project in projects -%}
    <h3>{{ forloop.index }}. {{ project.title }}</h3>

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
