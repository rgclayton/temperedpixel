---
title: Forge
type: engineering
featured: false
placeholder: false
summary: In-browser authoring tools for Adobe's Site Redesign — letting production teams build scroll animations and review pages without engineering in the loop.
year: "2026"
role: Senior Front-End Engineer
tags: [JavaScript, Tooling, DX, AEM Sidekick]
github: https://github.com/adobecom/milo
order: 1.5
---

## Overview

Adobe.com's Site Redesign leaned heavily on scroll-driven and hover animation to sell the new visual language — but every one of those effects starts as a request that has to land in an engineer's queue. Forge is a set of panels, launched straight from the AEM Sidekick, that let the production and content team author that motion themselves: pick a section, tune it, ship it, without opening a ticket.

<video src="https://pub-f6957e252622410a8cc6681d8e5dfdf5.r2.dev/forge-animate-panel-poc-trim.mp4" controls preload="metadata" playsinline></video>

## What I built

**The animation panel** — a bookmarklet-based tool (`page-animator`) that exposes scroll and hover animation settings, including live Lenis smooth-scroll tuning (lerp, wheel multiplier), directly on the page a producer is already looking at.

**Panel coexistence** — Forge's animation panel shares screen space with an existing annotation/review panel launched from the same Sidekick entry point. I reworked how the two swap in and out to stop the control overlap that was causing confusion, then added drag-to-reposition and left/right anchoring so people could arrange their own workspace instead of fighting the layout.

**Iterating on a tool people actually use** — collapse-all, consistent iconography, section labels, a page-highlight sync toggle. The kind of polish that only shows up once a tool has a standing user base checking in on it — which Forge did, including a dedicated standup for the Australia-hours production team.

## What I learned

Building for other engineers is one thing; building for a non-engineering production team is a different bar entirely. Nobody's required to use an internal tool — usability *is* the adoption rate. The fastest feedback loop I've had on any project came from a recurring standup with the people actually driving the panel every day, and it changed how quickly I was willing to ship a rough version and refine it in the open.
