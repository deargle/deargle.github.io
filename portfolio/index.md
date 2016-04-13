---
title: Portfolio
layout: page
permalink: /portfolio
---
{% if site.github.url %}
    {% assign url_base = site.github.url %}
{% else %}
    {% assign url_base = site.url %}
{% endif %}

### Course assignments

This is a sampling of assignments I have created for use in introductory Management Information Systems courses at the University of Pittsburgh.

#### Data mining

While I am comfortable with R and Python, I wrote these data mining assignments to be used with [RapidMiner](https://rapidminer.com/) in mind. RapidMiner has a nice graphical interface that I think introductory business students can pick up without having to learn to code. It's also open-source as well.

1.  ##### [Twitter Airline Sentiment]({{url_base}}/assignments/data-mining/twitter-airline-sentiment.docx)
    
    _Last Updated: 4/5/2016_
    {: .date}
    
    ###### Context
    
    What are the most common themes among tweets at airlines, for both the positive and negative tweets?
    
    ###### Learning Objectives
    
    * Text mining
    * Association rules
    * Working with Loops


2.  ##### [Clinton redacted emails]({{url_base}}/assignments/data-mining/clinton-redacted-emails.docx)
    
    _Last Updated: 4/5/2016_
    {: .date}
    
    ###### Context
    
    Who are the most controversial people in this corpus, based on how often they sent or received redacted emails?
    
    ###### Learning Objectives
    
    * Generate attributes
    * Create scatterplots
    * Create and interpret K-means clusters

3.  ##### [Restaurant tip ratios]({{url_base}}/assignments/data-mining/restaurant-tip-ratios.docx)

    _Last Updated: 4/5/2016_
    {: .date}

    ###### Context

    How well are restaurant customers tipping, and what influences their tip percentage?

    ###### Learning Objectives

    * Correlation
    * Create scatterplots
    * Attribute generation
    * Linear regression
        * Model performance, including squared correlation

#### Information security and privacy

1.  ##### [Encryption assignment]({{url_base}}/assignments/privacy-security/encryption)

    {% assign encryption_assignment = site.pages | where: "title","Encryption assignment" %}
    {% assign encryption_assignment = encryption_assignment[0] %}

    _Last Updated: 4/13/2016_
    {: .date}
    
    ###### Context

    {{ encryption_assignment.excerpt }}



