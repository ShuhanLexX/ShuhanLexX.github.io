---
layout: page
permalink: /research/
title: 研究方向
description: Legislative studies, generative social simulation, and policy evaluation.
nav: true
nav_order: 1
---

## 问题意识

政策与立法的效果并不只发生在文本发布的瞬间：它会经由不同群体的认知、互动和适应性行为，跨越舆论、经济与制度等多个子系统，形成动态且常常异质的结果。我的研究关心如何将这种复杂性转化为具有理论基础、经验可检验性与工程可复现性的计算实验。

## 三条研究主线

### 立法学与政策机制

从规范目的、行动主体、激励结构与执行情景中提炼可分析的政策机制，为立法与政策设计提供更清晰的因果叙事与比较框架。

### 生成式代理社会模拟

探索以大语言模型驱动的社会代理如何在有限理性、记忆、情绪与情境感知条件下，呈现异质性决策和群体互动；同时关注其可控性、稳定性与研究解释。

### 政策效果评估与优化

将不同政策方案、实施强度和群体分层置于可重复的实验环境中，识别系统传播、行为异质性与潜在权衡，为政策评估和方案迭代提供证据支持。

## GPLab 方法框架

<img src="{{ '/assets/img/gplab-framework.svg' | relative_url }}" class="img-fluid rounded z-depth-1" alt="GPLab framework" />

GPLab 以“社会代理—社会子系统—模拟与评估”三层架构组织政策实验：输入的政策情景和人口数据驱动社会代理的认知与行为，代理与模块化子系统在时间推进中产生跨域反馈，最后通过指标、对照与可信度分析形成评估闭环。该框架对应的 JASSS 论文与代码均可公开访问：<a href="https://www.jasss.org/29/1/6.html" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/SmartLegislation/GPLab" target="_blank" rel="noopener">GitHub</a>。
