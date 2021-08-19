---
title: Projects
description: A collection of links to project pages referenced in blog posts and the like
layout: page
permalink: /projects/
include_toc: true
---

{: .lead }
Some research I'm working on; some things I've made.


## Research | Works in Progress

Some pages and tools related to research I am currently working on.

{% assign research_projects = site.projects | where: 'type', 'research' | where: 'tags', 'work-in-progress' %}
{% for project in research_projects %}

### "{{ project.title }}"
{% if project.with -%}
*With: {{ project.with }}*
{%- endif %}

{{ project.content | markdownify }}
{% endfor %}

## Research | Completed

_This list is not exhaustive._ The projects listed here are just ones that have neat live links to show off.

See [my vita]({{ '/vita/' | relative_url }}) or [my google scholar profile]({{ site.google_scholar }})
for a full list of my publications.

{% assign research_projects = site.projects | where: 'type', 'research' | where: 'tags', 'completed' %}

{% for project in research_projects %}
### "{{ project.title }}"
{% if project.with -%}
*With: {{ project.with }}*
{%- endif %}

{{ project.content | markdownify }}
{% endfor %}


## Github Projects

Check out my github activity! <a href="{{ site.github_username }}"><i class="fab fa-github"></i> deargle</a>

I publish as much of my class content as I can online, via Github Pages rendering.
Much of that content is in the [<i class="fab fa-github"></i> deargle-classes](https://github.com/deargle-classes) github organization.
I encourage my students to contribute to class-related repos. Sometimes they do.

I am involved more heavily with development of a few open-source repositories, such as the ones below.

### Psiturk

_An open platform for science on Amazon Mechanical Turk._

Psiturk is a python Flask app bundled with a javascript library to facilitate interacting with
mturkers through all stages of the AMT process -- posting HITs, serving an experiment
website, approving work, analyzing data.

I have been a core developer for psiTurk since during my phd in ~2016.

Repo
: <https://github.com/NYUCCL/psiturk>

Docs
: <https://psiturk.readthedocs.io/en/latest/>

Paper
: <https://doi.org/10.5281/zenodo.3598651>


### Kepler-mapper

_Kepler-mapper is a library implementing the Mapper algorithm in Python. KeplerMapper can be used for visualization of high-dimensional data and 3D point cloud data. KeplerMapper can make use of Scikit-Learn API compatible cluster and scaling algorithms._

_KeplerMapper employs approaches based on the MAPPER algorithm (Singh et al.) as first described in the paper “Topological Methods for the Analysis of High Dimensional Data Sets and 3D Object Recognition”._

I became a somewhat-major contributor to Kepler-Mapper for a few years now. I do work both on the python side
and also the javascript / html d3 visualization side. I've done work on the psiturk command-line shell,
a web interface, python unit testing, database optimizations, and bug fixes and features-adds throughout
the python code.

Repo
: <https://github.com/scikit-tda/kepler-mapper>

Docs
: <https://kepler-mapper.scikit-tda.org/en/latest/>

Paper
: <https://joss.theoj.org/papers/10.21105/joss.01315>



## Tools

Some things I've made. Links are scattered throughout blog posts, so I'm gathering them here.


{% assign tools = site.projects | where: 'type', 'tool' %}
{% for tool in tools %}
### {{ tool.title }}

{% if tool.link %}
<{{tool.link}}>
{% endif %}

{{tool.content | markdownify }}

{% endfor %}
