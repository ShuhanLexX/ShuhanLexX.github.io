---
layout: page
title: GPLab · Generative Policy Laboratory
description: A general-purpose framework for policy simulation and evaluation with LLM-driven social agents.
img: assets/img/gplab-framework.svg
importance: 1
related_publications: true
---

<p><strong>GPLab</strong> integrates generative large language models with agent-based modelling to support policy simulation and evaluation. It is designed as a scenario-agnostic research framework: researchers can configure policy content, population profiles, subsystem settings, and evaluation metrics without rebuilding the core architecture for every domain.</p>

<p><a class="btn btn-outline-primary btn-sm" href="https://www.jasss.org/29/1/6.html" target="_blank" rel="noopener">Read the JASSS paper</a> <a class="btn btn-outline-primary btn-sm" href="https://github.com/SmartLegislation/GPLab" target="_blank" rel="noopener">View source code</a></p>

<img src="{{ '/assets/img/gplab-framework.svg' | relative_url }}" class="img-fluid rounded z-depth-1" alt="GPLab framework" />

## Research contribution

- **Heterogeneous social agents:** LLM-driven agents combine static attributes, dynamic cognition, subsystem perception, and decision-making.
- **Modular social systems:** policy scenarios can link opinion, economic, environmental, public-health, or other domain modules through explicit information flows.
- **Simulation–evaluation loop:** configuration, controlled experiments, outcome metrics, and interpretation are organized into a repeatable workflow.

The associated paper, published in _Journal of Artificial Societies and Social Simulation_, is authored by Shuhan Zhang, Zifan Peng, and Yinwang Ren. The framework and its examples are openly available for inspection and reuse.
