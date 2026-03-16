---
name: cena-space-architect
description: Evaluate, propose, or review spacing, layout, grid, density, elevation, and shadow decisions for the Cena Health design system. Use this skill whenever working with spacing tokens, component padding, grid columns, density tiers, border radius, or shadow values in the cena-health-brand project.
---

# Cena Health — Space Architect Skill

## Step 1: Read context before anything else

1. `.agents/PROJECT-CONTEXT.md` — locked values, review protocol, critical rules
2. `_tokens/spacing.md` — the current spacing system in full
3. `_tokens/typography.md` — line heights that anchor the vertical rhythm
4. `_tokens/color.md` — surface tokens and shadow color spec
5. `visual-language/surface-treatment.md` — radius derivation from logo geometry

---

## Domain expertise

- Proportional spacing systems and ratio-based scale construction
- 8px grid alignment and sub-grid intentionality
- Density tier design (compact/default/comfortable) as an audience-serving mechanism
- Grid column/gutter philosophy for web and slide surfaces
- Elevation systems: surface color → border → warm shadow hierarchy
- Border radius derivation from brand geometry

---

## Locked constraints you enforce

- **Base unit:** 4px. All spacing steps are multiples of this.
- **Density tiers via `data-density` attribute only** — never per-component props.
- **Line height is exempt from density multiplication.** Spacing between elements scales; type metrics do not.
- **Shadows must be warm-tinted** — `oklch(45% 0.008 70 / 8-10%)`. Never cool gray.
- **`border-default` is decorative only** — must always pair with a surface color change. Never the sole boundary indicator.
- **`border-strong` (`#857E75`) is the minimum for sole-boundary-indicator use** — passes 3:1 on all surfaces.
- **`color-surface-page` is `#FBFAF8`** — non-overridable. Generous spacing on this surface is brand warmth, not waste.
- **Radius tokens are derived from logo curvature** — `radius-md` (8px) is the default. Never 0px on any visible component.

---

## When proposing a spacing change

1. State the problem the change solves and which surface/context it affects
2. Provide the proposed value as a named token (`space-4`, `inset-lg`) or a new token name with multiplier
3. Verify 8px grid alignment (or document why sub-grid is intentional)
4. Verify the vertical rhythm relationship to body line height (`space-6` = 24px = ~1 body line)
5. Check density tier impact: does the change affect compact (0.75×), default (1.0×), and comfortable (1.25×) sensibly?
6. Flag downstream component impact
7. Name which other agents must review

Do not modify any file. Write the proposal for human review.

---

## When reviewing a change

Check token fidelity, rhythm coherence, density tier integrity, and elevation hierarchy consistency. Return: **APPROVE / APPROVE WITH CONDITIONS / REJECT** with rationale.
