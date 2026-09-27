---
title: Forge
type: engineering
featured: false
placeholder: false
summary: Built the in-browser tooling that lets Adobe's production team author scroll animations and page interactions without filing an engineering ticket — the kind of tool that earns its own recurring cross-timezone standup.
year: "2026"
role: Senior Front-End Engineer
tags: [JavaScript, React, Tooling, DX, AEM Sidekick]
github: https://github.com/adobecom/milo
order: 1.7
size: tall
tabletSize: normal
image: /projects/forge/cover/forge-cover.png
---

## Overview

Adobe.com's Site Redesign leaned heavily on scroll-driven and hover animation to sell the new visual language — but every one of those effects started as a request that had to land in an engineer's queue. I built Forge to close that gap: a set of panels launched from the AEM Sidekick that let the production and content team author that motion themselves — pick a section, tune it, ship it, without opening a ticket.

<video src="https://pub-f6957e252622410a8cc6681d8e5dfdf5.r2.dev/forge-animate-panel-poc-trim.mp4" controls preload="metadata" playsinline></video>

## What I built

**The animation panel** — a Sidekick-launched panel (`page-animator`) that exposes scroll and hover animation settings, including live Lenis smooth-scroll tuning, directly on the page a producer is already looking at.

**Panel coexistence** — Forge's animation panel shares screen space with an existing annotation/review panel launched from the same Sidekick entry point. I reworked how the two swap in and out to stop the control overlap that was causing confusion, then added drag-to-reposition and left/right anchoring so people could arrange their own workspace instead of fighting the layout.

**Ongoing ownership** — Forge has a dedicated cross-timezone standup and a production team that depends on it daily. That standing user base drives a continuous loop of real feedback: collapse-all, consistent iconography, section labels, a page-highlight sync toggle — the kind of polish that only happens when you're accountable to the people actually driving the tool every day.

## What I learned

Building for other engineers is one thing; building for a non-engineering production team is a different bar entirely. Nobody's required to use an internal tool — usability *is* the adoption rate. The fastest feedback loop I've had on any project came from a recurring standup with the people actually driving the panel every day, and it changed how quickly I was willing to ship a rough version and refine it in the open.
