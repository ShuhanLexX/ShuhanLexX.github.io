---
layout: default
permalink: /notes/
title: 研究札记
nav: true
nav_order: 6
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

<div class="post">
  <div class="header-bar"><h1>研究札记</h1><h2>方法、系统与政策问题之间的往返</h2></div>
  <ul class="post-list">
    {% assign postlist = paginator.posts | default: site.posts %}
    {% for post in postlist %}
      <li>
        <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.description }}</p>
        <p class="post-meta">{{ post.date | date: '%Y-%m-%d' }}{% if post.tags %} · {{ post.tags | join: ' · ' }}{% endif %}</p>
      </li>
    {% endfor %}
  </ul>
  {% if page.pagination.enabled %}{% include pagination.liquid %}{% endif %}
</div>
