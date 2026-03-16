---
read-this-first: true
---

# Cena Health Brand Design System — Project Context

_Read this file first. Every time. Before any other file in this project._

---

## What This Is

A complete brand design system for Cena Health. Visual identity, design tokens, component specifications, and CSS implementation. It is a living system — built to be extended, not archived.

**Unifying idea:** "Cena Health makes infrastructure feel like it grew rather than was built."

---

## What Is Locked

These four values are derived from the logo SVG and cannot change under any circumstances:

| Color | Hex | Role |
|---|---|---|
| `#0D322D` | Deep forest | Logo wordmark "Cena", primary text |
| `#3A8478` | Primary teal | Logo wordmark "health", brand identity |
| `#52A395` | Secondary teal | Logo middle ring |
| `#81B983` | Sage green | Logo inner ring |

---

## Critical Rules — Memorize These

The rules most commonly violated by implementation teams:

- **`color-surface-page` is `#FBFAF8`, never `#FFFFFF`.** Non-overridable. The warm off-white is the entire warmth mechanism.
- **`color-primary` (teal-400 `#1B685E`) ≠ `color-brand-primary` (teal-500 `#3A8478`).** Interactive fill is one step darker than identity. Required for WCAG AA.
- **`color-text-brand` is teal-400, not teal-500.** Teal-500 fails AA at normal text sizes.
- **Semantic tokens only in components.** No raw hex, no raw palette steps.
- **Density tiers never modify line height.** Multiplier applies to spacing between elements only.
- **`color-brand-secondary` and `color-brand-sage` are non-text-safe.** Graphical use only.
- **Success states always use dual-cue** (icon + text label). Never color alone.
- **Illustration and photography are separate containers.** Never composited.
- **Elevation order: surface color → border → warm shadow.** Never reach for box-shadow first.

---

## Your Role as an Agent

1. Identify which agent role applies to your task
2. Read the corresponding skill file in `.agents/skills/`
3. Follow the skill file's protocol — especially "do not modify any file"

| Role | Skill file |
|---|---|
| Color work | `.agents/skills/color-theorist/SKILL.md` |
| Typography work | `.agents/skills/typographer/SKILL.md` |
| Spacing / layout | `.agents/skills/space-architect/SKILL.md` |
| Motion / interaction | `.agents/skills/motion-designer/SKILL.md` |
| Illustration / icon / photography | `.agents/skills/visual-language-curator/SKILL.md` |
| Component specs or CSS | `.agents/skills/component-designer/SKILL.md` |
| Cross-domain coherence review | `.agents/skills/design-system-synthesizer/SKILL.md` |
| Accessibility / WCAG review | `.agents/skills/accessibility-reviewer/SKILL.md` |

---

## The Decision Hierarchy

When principles conflict, resolve in this order:

1. WCAG AA contrast — non-negotiable
2. Locked logo colors — cannot change
3. Identity decisions — warm ground, chromatic darks, teal-to-sage hue shift
4. System principles — proportion over pixel, two registers one vocabulary
5. Contextual preferences — generous spacing, ease-out motion, border before shadow

---

## The Review Protocol

Every change passes through this sequence. No exceptions.

1. Proposing agent writes the change with full rationale — **does not modify any file**
2. Domain reviewers evaluate their area
3. Design System Synthesizer checks cross-domain coherence
4. Accessibility Reviewer checks WCAG compliance (if color or type is involved)
5. Human (Aaron) approves
6. Agent modifies the approved files
7. **Agent commits all changed files immediately** — see `agent-roles.md` for commit format

Full review routing table: `.agents/agent-roles.md`

---

## File Reference Map

**Always read first:** this file + `_brief/brand-brief.md` + `principles/design-principles.md`

**By domain:**
- Color → `_tokens/color.md`, `audits/accessibility-audit.md`
- Typography → `_tokens/typography.md`, `_tokens/color.md`
- Spacing → `_tokens/spacing.md`, `_tokens/typography.md`
- Motion → `_tokens/motion.md`, `_tokens/spacing.md`
- Visual language → all `visual-language/` + all `_tokens/`
- Components → all of the above + `principles/coherence-notes.md §6`
- CSS → all `_tokens/` web files + component specs

**Before proposing any change:** `principles/coherence-notes.md` + `audits/accessibility-audit.md`

---

## Quality Standard

A change passes when it satisfies all five tests from `principles/design-principles.md §4`:

1. Token fidelity — every value maps to a named token
2. Cross-reference integrity — decisions reinforce each other across domains
3. Register coherence — density, color, and composition match intended audience
4. Restraint discipline — quiet mode stays quiet; brand moments are earned
5. The "Grew, Not Built" test — does the change feel discovered or assembled?

---

## System Architecture

```
_brief/          Brand brief + logo analysis
_inputs/         Seed assets (logos, original guidelines)
_tokens/         Token specs (canonical .md + web .css)
visual-language/ Iconography, illustration, imagery, surface treatment
principles/      Design principles + coherence notes
audits/          Accessibility audit
components/      Component specs (ui/ and slides/)
src/css/         CSS implementation
dist/            Built output (~49KB)
.agents/         This file + agent-roles.md + skills/
```

**Current state:** Phases 0–7 complete. Production-ready.
Remaining gaps: illustration SVG assets, photography LUT, data visualization language, expanded component library, Figma variables. See `ROADMAP.md`.
