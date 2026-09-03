---
layout: page
permalink: /repositories/
title: 代码与可复现研究
description: 研究代码、仿真实验与方法探索。
nav: true
nav_order: 5
---

<p>代码是研究叙事的一部分。这里展示与生成式社会模拟、舆论—经济系统和自动化 ABM 相关的公开项目。</p>

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_repos %}

<h2>精选仓库</h2>
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
