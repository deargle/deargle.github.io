---
title: Woodworking projects
description: Index of my woodworking projects
tags: woodworking
category: unprofessional
layout: page
---

<style media="screen">
  .thumbnail-img {
    object-fit: cover; /* Do not scale the image */
    object-position: center; /* Center the image within the element */
    /* width: 200px; */
    height: 200px;
  }
</style>

{% comment %}
{# test one just to make sure we still have the filepath correct #}
{% link assets/img/woodworking/2018-06-27-climbing-wall.jpg %}
{% endcomment %}

{% assign projects = site.woodworking %}

<div class="row row-cols-auto g-4">
  {% for project in projects %}

    {% if project.thumbnail %}
      {% assign project_thumbnail = project.thumbnail %}
    {% else %}
      {% assign project_thumbnail = project.photos.first.filename %}
    {% endif %}

    <div class="col">
    <div class="card" style="width: 18rem;" >
      <a href="{{ project.url }}">
        <!-- <div class="thumbnail-container"> -->
          <img src="/assets/img/woodworking/{{ project_thumbnail }}" class="card-img-top thumbnail-img" alt="{{ project_thumbnail }}">
        <!-- </div> -->
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
        </div>
      </a>
    </div>
  </div>
  {% endfor %}
</div>
