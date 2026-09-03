---
layout: page
title: 研究平台与案例
permalink: /projects/
description: 将政策问题转换为可配置、可复现与可比较的计算实验。
nav: true
nav_order: 3
horizontal: true
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
</div>
