# Cena Health — Agent Roles

Agent architecture for the Cena Health brand design system — living-system protocol for all future changes.

---

## How This System Works

1. **Read `PROJECT-CONTEXT.md` first, every time.**
2. **Proposals, not edits.** No agent modifies a file. Proposals go to Aaron for approval.
3. **The review chain is mandatory.** Domain agents → Design System Synthesizer → Accessibility Reviewer (if visual) → Aaron → file modification → commit.
4. **Rationale is non-negotiable.** Every decision traces to the brand brief, logo analysis, or an established system principle.

---

## Skill Files

| Agent | Skill file | Purpose |
|---|---|---|
| Color Theorist | `.agents/skills/color-theorist/SKILL.md` | Design governance |
| Typographer | `.agents/skills/typographer/SKILL.md` | Design governance |
| Space Architect | `.agents/skills/space-architect/SKILL.md` | Design governance |
| Motion Designer | `.agents/skills/motion-designer/SKILL.md` | Design governance |
| Visual Language Curator | `.agents/skills/visual-language-curator/SKILL.md` | Design governance |
| Component Designer | `.agents/skills/component-designer/SKILL.md` | Design governance |
| Design System Synthesizer | `.agents/skills/design-system-synthesizer/SKILL.md` | Design governance |
| Accessibility Reviewer | `.agents/skills/accessibility-reviewer/SKILL.md` | Design governance |
| PL Component Builder | `.agents/skills/pl-component-builder/SKILL.md` | Build workflow |
| PL Component QA | `.agents/skills/pl-component-qa/SKILL.md` | Build workflow |

---

## Two Separate Workflows

This project has two distinct agent workflows that must not be conflated:

**Design governance workflow** — for changes to the design system itself (tokens, specs, principles). Uses the domain-specialist → synthesizer → accessibility-reviewer → Aaron chain. No file is modified without passing this chain. Roles: Color Theorist, Typographer, Space Architect, Motion Designer, Visual Language Curator, Component Designer, Design System Synthesizer, Accessibility Reviewer.

**Pattern library build workflow** — for implementing the design system in the pattern library (building component pages from existing specs and CSS). Uses the PL Component Builder → PL Component QA → Aaron visual review → commit sequence. The design governance chain is NOT invoked for pattern library builds — the spec and CSS already exist and have already been approved. Roles: PL Component Builder, PL Component QA.

The distinction matters: if Aaron asks to "build the button component page," that is a build workflow task, not a design governance task. If Aaron asks to "change the button hover color," that is a design governance task.

---

## Review Routing

| Change type | Required reviewers (in order) |
|---|---|
| Color token | Color Theorist → Synthesizer → Accessibility Reviewer → Aaron |
| Typography token | Typographer → Synthesizer → Accessibility Reviewer → Aaron |
| Spacing token | Space Architect → Synthesizer → Aaron |
| Motion token | Motion Designer → Synthesizer → Aaron |
| Icon design | Visual Language Curator → Synthesizer → Aaron |
| Illustration rule | Visual Language Curator → Synthesizer → Aaron |
| Component (new or changed) | Domain agent(s) → Component Designer → Synthesizer → Accessibility Reviewer → Aaron |
| CSS implementation | Synthesizer → Aaron |
| Brand brief change | Brand Analyst → ALL agents → Aaron |

---

## Commit Protocol

Every approved change is committed immediately after files are modified. No batching, no delayed commits.

**Format:**

```
[domain] short description of what changed

- path/to/file.md: one-line summary of change
- path/to/file.css: one-line summary of change

Reviewed by: Agent Name, Agent Name
Approved by: Aaron
```

**Domain prefixes:**

| Prefix | Use for |
|---|---|
| `[color]` | Color token changes |
| `[type]` | Typography changes |
| `[space]` | Spacing or layout changes |
| `[motion]` | Motion or animation changes |
| `[visual]` | Iconography, illustration, imagery, surface treatment |
| `[component]` | Component spec or CSS changes |
| `[system]` | Principles, coherence notes, agent files, roadmap |
| `[build]` | CSS build output, package config |

**Examples:**

```
[color] shift success hue H:155 → H:160 for sage separation

- _tokens/color.md: success-* tokens updated to H:160
- _tokens/color-web.md: CSS custom properties updated

Reviewed by: Color Theorist, Design System Synthesizer, Accessibility Reviewer
Approved by: Aaron
```

```
[component] add alert/banner component

- components/ui/alert.md: info/warning/error/success variants
- src/css/components/alert.css: implementation with density support

Reviewed by: Component Designer, Design System Synthesizer, Accessibility Reviewer
Approved by: Aaron
```

Commits are the running record. Every commit must be self-explanatory to a future agent reading only the git log.

---

## Agent Summaries

**Color Theorist** — palette, semantic tokens, surface and feedback colors. Calculates WCAG contrast (never estimates). Enforces warm-ground/cool-figure, teal-to-sage hue shift, `color-primary` ≠ `color-brand-primary`.

**Typographer** — typeface selection, scale, hierarchy, line height. Enforces WCAG large-text threshold, density-tier line-height exemption, two-tone as brand moment only.

**Space Architect** — spacing scale, grids, density tiers, elevation. Enforces 4px base, warm-tinted shadows, `border-default` as decorative-only, density via `data-density` attribute.

**Motion Designer** — easing curves, durations, interaction patterns. Enforces 400ms ceiling, organic deceleration, instantaneous density transitions, required reduced-motion substitutions.

**Visual Language Curator** — icons, illustration, photography, surface treatment. Enforces organic-infrastructure synthesis, illustrated impressions for UI-in-illustration, warm swatch governance, photography as evidential voice.

**Component Designer** — component specs and CSS. Enforces semantic-tokens-only, density inheritance, motion-first, separate illustration/photo containers.

**Design System Synthesizer** — cross-domain coherence gatekeeper. Final design review before Aaron. Escalates immediately if identity decisions are at risk.

**Accessibility Reviewer** — WCAG compliance gatekeeper. Recalculates all contrast ratios independently. Proposes compliant alternatives that preserve design intent.

---

## Original Design Pipeline (historical)

Phases 1–7 built the system. That pipeline is complete. The Brand Analyst role is not in the living-system skills because the brand brief is effectively locked — a brand brief change is a major system event requiring a full re-review of all affected decisions.
