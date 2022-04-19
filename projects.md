---
title: Projects
description: Some things I'm working on; some things I've made.
layout: page
permalink: /projects/
include_toc: true
regenerate: true
---


<h1 class='display-3'>Tools</h1>

Some things I've made. A collection of links scattered throughout blog posts.


{% assign tools = site.projects | where: 'type', 'tool' | sort: 'order' %}
{% for tool in tools %}
<h3 class='' {% if tool.title_short %}data-toc-text="{{ tool.title_short }}"{% endif %}><a href='{{ tool.link }}'>{{ tool.title }}</a></h3>

{{ tool.content | markdownify }}

{% include project-thumbnail-image.html width="600px" src=tool.image dst=tool.link %}

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

<a class='btn btn-primary' href='{% link research.md %}'>Research the research</a>


<h1 class='display-3'>Open-source Contribution Curation</h1>



Check me out on github! <a href="{{ site.github_username }}"><i class="fab fa-github"></i> deargle</a>

I am involved more heavily with development of a few open-source repositories, such as the ones below.


{% assign opensource_projects = site.opensource_projects | sort: 'order' %}

{% for project in opensource_projects %}
<h3 class='' {% if tool.title_short %}data-toc-text="{{ project.title_short }}"{% endif %}><a href='{{ project.repo_link }}'>{{ project.title }}</a></h3>

{% include project-thumbnail-image.html width="600px" src=project.thumbnail dst=project.repo_link %}

{{ project.content | markdownify }}


{% endfor %}


### Random Curated Contributions

Some of my most cherished random contributions:

- `rapid7/metasploitable3`, [doing random stuff on the vagrant/chef side for the ubuntu image](https://github.com/rapid7/metasploitable3/pulls?q=involves%3Adeargle+)
- `thc-hydra/thc-hydra`, [somehow I fixed an ssh bug](https://github.com/vanhauser-thc/thc-hydra/issues/366), despite not knowing any C :man_shrugging:
- `angristan/openvpn-install`, [I fixed an `ip_forward=1` bug](https://github.com/angristan/openvpn-install/pull/750)
- `benbalter/retlab` (a jekyll theme), mild irony when [I open PRs on a Github Exec's Github Repos](https://github.com/benbalter/retlab/pulls?q=involves%3Adeargle+)

Also, I publish a lot of my class content online. For example:
- security-analytics-assignments ([website](https://classes.daveeargle.com/security-analytics-assignments/), [source-code](https://github.com/deargle-classes/security-analytics-assignments))
- business-analytics ([website](https://classes.daveeargle.com/business-analytics/), [source-code](https://github.com/deargle-classes/business-analytics))
- security-assignments ([website](https://security-assignments.com/), [source-code](https://github.com/security-assignments/security-assignments.github.io))


<h1 class='display-3'>Extras</h1>

<div class="mb-2">
  <ul>
    <li><a href="{% link woodworking/index.md %}">Woodworking projects</a></li>
    <li><a href="{% link arts-and-crafts.md %}">Arts and crafts</a></li>
  </ul>
</div>
