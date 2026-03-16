---
read-this-first: true
---

# Cena Health Brand Design System — Project Context

_Read this file first. Every time. Before any other file in this project._

---

## What This Is

A complete brand design system for Cena Health, built collaboratively by a suite of specialist AI agents. The system covers visual identity, design tokens, component specifications, and CSS implementation. It is a living document — built to be extended, not archived.

**Unifying idea:** "Cena Health makes infrastructure feel like it grew rather than was built."

Every decision in this system traces to this idea. When in doubt about any design choice, ask: does this feel grown or built?

---

## Your Role as an Agent

If you are reading this, you are operating in this project. Before doing anything:

1. Identify which agent role applies to the task at hand
2. Read the corresponding skill file in `.agents/skills/`
3. Follow the skill file's protocol exactly — especially the "do not modify any file" rule

The skill files are:

| Role | Skill file |
|---|---|
| Color work | `.agents/skills/color-theorist/SKILL.md` |
| Typography work | `.agents/skills/typographer/SKILL.md` |
| Spacing / layout work | `.agents/skills/space-architect/SKILL.md` |
| Motion / interaction work | `.agents/skills/motion-designer/SKILL.md` |
| Illustration / icon / photography work | `.agents/skills/visual-language-curator/SKILL.md` |
| Component specs or CSS | `.agents/skills/component-designer/SKILL.md` |
| Cross-domain coherence review | `.agents/skills/design-system-synthesizer/SKILL.md` |
| Accessibility / WCAG review | `.agents/skills/accessibility-reviewer/SKILL.md` |

If your task spans multiple roles, read all relevant skill files before proceeding.

---

## What Is Locked

These values are derived from the logo SVG and cannot change under any circumstances:

| Color | Hex | Role |
|---|---|---|
| `#0D322D` | Deep forest | Logo wordmark "Cena", primary text |
| `#3A8478` | Primary teal | Logo wordmark "health", brand identity |
| `#52A395` | Secondary teal | Logo middle ring |
| `#81B983` | Sage green | Logo inner ring |

The logo files in `_inputs/` are locked. The brand brief's locked asset table is authoritative.

---

## System Architecture

```
_brief/          Brand brief + logo analysis — source of truth for all decisions
_inputs/         Seed assets (logos, original guidelines)
  archive/       Pre-edit originals (historical reference only)
_tokens/         Design token specifications (canonical .md + web implementation .md + .css)
visual-language/ Iconography, illustration, imagery, surface treatment
principles/      Synthesized design principles + coherence notes
audits/          Accessibility and consistency audit results
components/      Component design specs (ui/ and slides/)
src/css/         CSS implementation
dist/            Built output (cena-health.css, ~49KB)
.agents/         Agent skills and project context
  PROJECT-CONTEXT.md  (this file)
  agent-roles.md      (role descriptions and review routing)
  skills/             (one SKILL.md per agent role)
```

---

## The Decision Hierarchy

When principles conflict, resolve in this order:

1. **WCAG AA contrast** — non-negotiable, no exceptions
2. **Locked logo colors** — cannot change
3. **Identity decisions** — warm ground, chromatic darks, hue shift from teal to sage
4. **System principles** — proportion over pixel, two registers one vocabulary
5. **Contextual preferences** — generous spacing, ease-out motion, border before shadow

---

## Critical Implementation Rules

Any agent working in this project must know these:

- **`color-surface-page` is `#FBFAF8`, never `#FFFFFF`.** The warm off-white is the system's primary warmth mechanism. Non-overridable.
- **`color-primary` (teal-400, `#1B685E`) ≠ `color-brand-primary` (teal-500, `#3A8478`).** Interactive fill is one step darker than identity color. Required for WCAG AA.
- **`color-text-brand` is teal-400 (`#1B685E`), not teal-500.** Teal-500 fails AA at normal text sizes.
- **Density tiers never modify line height.** The 0.75×/1.0×/1.25× multiplier applies to spacing between elements only.
- **Semantic tokens only in components.** No raw hex, no raw palette steps.
- **`color-brand-secondary` and `color-brand-sage` are non-text-safe.** Graphical use only.
- **Success states always use dual-cue** (icon + text label). Never color alone.
- **Illustration and photography are separate containers.** Never composited.

---

## The Review Protocol

Every change to this system must pass through the relevant agents before it is accepted. No exceptions.

See `.agents/agent-roles.md` for the full review routing table.

**The sequence for any change:**
1. Proposing agent writes the change with full rationale — does not modify any file
2. Domain reviewers evaluate against their area of expertise
3. Design System Synthesizer checks cross-domain coherence
4. Accessibility Reviewer checks WCAG compliance (if color or type is involved)
5. Human (Aaron) approves — then and only then is any file modified

---

## File Reference Map

**Always read first:**
- `.agents/PROJECT-CONTEXT.md` (this file)
- `_brief/brand-brief.md`
- `principles/design-principles.md`

**Then read for your domain:**
- Color → `_tokens/color.md`, `audits/accessibility-audit.md`
- Typography → `_tokens/typography.md`, `_tokens/color.md`
- Spacing → `_tokens/spacing.md`, `_tokens/typography.md`
- Motion → `_tokens/motion.md`, `_tokens/spacing.md`
- Visual language → all `visual-language/` + all `_tokens/`
- Components → all of the above + `principles/coherence-notes.md §6`
- CSS → all `_tokens/` web files + component specs

**Always check before proposing any change:**
- `principles/coherence-notes.md` — known tensions and risks
- `audits/accessibility-audit.md` — known constraints and corrected values

---

## Quality Standard

A change is acceptable when it passes all five tests from `principles/design-principles.md §4`:

1. **Token fidelity** — every value maps to a named token
2. **Cross-reference integrity** — decisions reinforce each other across domains
3. **Register coherence** — density, color, and composition align with intended audience
4. **Restraint discipline** — quiet mode is quiet; brand moments are earned
5. **The "Grew, Not Built" test** — does the change feel discovered or assembled?

---

## Current System State

Phases 0–7 complete. The system is production-ready.

**What still needs work:**
- Canonical illustration SVG assets (3–5 per type) — blocking for illustration-adjacent components
- Photography LUT / Lightroom preset — operational version of `visual-language/imagery.md §2`
- Data visualization language — gap in `principles/coherence-notes.md §3.1`
- Expanded component library — see `next-task.md` for priority list
- Figma variable architecture — not yet built

See `ROADMAP.md` for full status.
