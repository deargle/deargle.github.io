---
title: Woodworking projects
description: A collection of my woodworking projects
tags: woodworking
category: unprofessional
layout: page
regenerate: true
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
{# test one just to make sure we still have the general thumbnail filepath correct #}
{% link assets/img/woodworking/2018-06-27-climbing-wall.jpg %}
{% endcomment %}


{% assign projects = site.woodworking | sort: "date" | reverse %}





<div class="row row-cols-auto g-4 mb-2">
  {% for project in projects %}

    {% if project.thumbnail %}
      {% assign project_thumbnail = project.thumbnail %}
    {% else %}
      {% assign project_thumbnail = project.photos.first.filename %}
    {% endif %}

    <div class="col">
      <div class="card" style="width: 18rem;" >
          <img src="/assets/img/woodworking/{{ project_thumbnail }}" class="card-img-top thumbnail-img" alt="{{ project_thumbnail }}">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text mb-0"><small class="text-muted">{{ project.date | date: "%Y-%m-%d" }}</small></p>
            <a class='stretched-link' href="{{ project.url }}"></a>
          </div>
      </div>
    </div>
  {% endfor %}
</div>

<hr>

<p class='lead'>Other collections</p>

<!-- Manually list links to other woodworking-related collections -->

<div class="row row-cols-auto g-4 mb-2">
  <div class="col">
    <div class="card" style="width: 18rem;" >
      <img src="/assets/img/woodworking/workshop/2021-12-15-094119_009-shop-photo-against-wall.jpeg" class="card-img-top thumbnail-img" alt="workshop-thumbnail">
      <div class="card-body">
        <h5 class="card-title">My Workshop</h5>
        <a class='stretched-link' href="{% link woodworking/workshop.md %}"></a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card" style="width: 18rem;" >
      <img src="/assets/img/woodworking/kitchen/2021-04-08-kitchen-cabinets.jpg" class="card-img-top thumbnail-img" alt="workshop-thumbnail">
      <div class="card-body">
        <h5 class="card-title">Kitchen Cabinet Remodel</h5>
        <a class='stretched-link' href="{% link woodworking/kitchen-cabinets.md %}"></a>
      </div>
    </div>
  </div>
</div>
