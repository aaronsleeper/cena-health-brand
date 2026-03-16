# Cena Health Brand Design System

A collaborative, agent-driven visual design system for Cena Health -- built to serve both product UI and slide deck creation from a single shared token foundation.

## Project Goal

Design a brand-worthy visual system using a suite of specialist AI agents, each with deep domain knowledge. The goal is not to replicate what exists but to discover what's possible when expert perspectives collaborate without constraint -- while respecting the locked assets below.

## Locked Assets

- **Logo:** SVG icon, icon + wordmark, and tagline lockup (see `_inputs/`)
- **Teal palette:** Color values extracted from logo are canonical anchors
- Everything else is open to challenge with strong rationale

## Structure

```
_inputs/          Raw seed assets (logo SVGs, existing docs, color values)
_brief/           Agent-synthesized brand brief -- source of truth for all agents
tokens/           Design token decisions by domain (color, type, space, motion)
visual-language/  Iconography, illustration, imagery, surface treatment
principles/       Design principles and brand voice
components/
  ui/             Component design specs for web application surfaces
  slides/         Component design specs for slide deck surfaces
audits/           Consistency and accessibility review outputs
.agents/          Agent role definitions, prompts, and pipeline config
```

## Token Philosophy

Tokens are defined as **proportional relationships**, not fixed pixel values. A base unit is defined per surface (web, slides), and all spacing, type scale, and layout tokens are expressed as multipliers of that base. This makes the system portable across screen densities and form factors without changing the underlying relationships.

A separate web-reconciliation pass will handle snapping proportional values to practical web constraints (8px grid alignment, integer type sizes) without altering the base relationship definitions.

## Pipeline Order

1. Brand Analyst -- reads all `_inputs/`, produces `_brief/brand-brief.md`
2. Color Theorist -- reads brand brief, produces `tokens/color.md`
3. Typographer -- reads brand brief, produces `tokens/typography.md`
4. Space & Layout Architect -- reads brand brief + type tokens, produces `tokens/spacing.md`
5. Motion Designer -- reads brand brief, produces `tokens/motion.md`
6. Visual Language Curator -- reads brand brief + all tokens, produces `visual-language/`
7. Design System Synthesizer -- reads everything, produces `principles/design-principles.md`
8. Brand Consistency Auditor -- audits all outputs against brand brief
9. Accessibility Reviewer -- audits color + type tokens for WCAG compliance

Agents may challenge each other's outputs. No output is final until it has passed both audits.

## Interface

Claude Code (VS Code extension) -- all agent work is done here, reading from and writing to this folder.
