---
title: "Publications"
layout: gridlay
sitemap: true
permalink: /publications/
---

## Publications

<p>Selected publications and research outputs. Chinese-language publications retain their original bibliographic titles; links are included only where a public record or official article page has been confirmed.</p>

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">

<div class="section-card" id="pubList">
<h3>Journal articles</h3>

{% bibliography --query @article %}

<h3>Book chapters and collected works</h3>

{% bibliography --query @incollection %}

</div>
