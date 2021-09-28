---
title: Dinosuit appearances
description: Log of some of the times I've worn one of those inflatable dinosuits.
tags: dinosuit
category: unprofessional
layout: page
---

I got one of those inflatable dinosaur suits a few years ago. I've
worn it in public a few times. This page links to dinosuit appearance posts.

<ul>
{% for post in site.tags.dinosuit %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <span class='text-muted'><small>{{ post.date | date: '%B %-d, %Y' }}</small></span></li>
{% endfor %}
</ul>
