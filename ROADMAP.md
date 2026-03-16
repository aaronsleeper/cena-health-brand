# Cena Health Brand Design System — Project Roadmap

**Status: Phase 7 Complete — Active Development**
**Last updated:** 2026-03-16

---

## The Unifying Idea

> **"Cena Health makes infrastructure feel like it grew rather than was built."**

Every decision traces to this idea — from the logo's concentric rings to the chromatic dark text to the organic deceleration of motion to the natural-metaphor approach to depicting care coordination workflows. The teal-to-sage hue shift recapitulates at every scale: a single logo mark, a component color palette, a slide deck section progression, an entire website's narrative arc.

---

## Completion Status

### Design Layer

| File | Phase | Status |
|---|---|---|
| `_brief/brand-brief.md` | 1 | ✅ |
| `_brief/logo-analysis.md` | 1 | ✅ |
| `_tokens/color.md` | 2 | ✅ Audited + corrected |
| `_tokens/typography.md` | 2 | ✅ |
| `_tokens/spacing.md` | 2 | ✅ |
| `_tokens/motion.md` | 2 | ✅ |
| `visual-language/iconography.md` | 3 | ✅ |
| `visual-language/illustration.md` | 3 | ✅ |
| `visual-language/imagery.md` | 3 | ✅ |
| `visual-language/surface-treatment.md` | 3 | ✅ |
| `principles/design-principles.md` | 4 | ✅ |
| `principles/coherence-notes.md` | 4 | ✅ |
| `audits/accessibility-audit.md` | 4 | ✅ |
| `components/ui/button.md` | 6 | ✅ |
| `components/ui/input.md` | 6 | ✅ |
| `components/ui/card.md` | 6 | ✅ |
| `components/slides/cover-slide.md` | 6 | ✅ |
| `components/slides/content-slide.md` | 6 | ✅ |
| `components/slides/stat-callout.md` | 6 | ✅ |

### Implementation Layer

| File | Phase | Status |
|---|---|---|
| `_tokens/color-web.md` | 5 | ✅ |
| `_tokens/typography-web.md` | 5 | ✅ |
| `_tokens/spacing-web.md` | 5 | ✅ |
| `src/css/tokens-color.css` | 7 | ✅ |
| `src/css/tokens-typography.css` | 7 | ✅ |
| `src/css/tokens-spacing.css` | 7 | ✅ |
| `src/css/tokens-motion.css` | 7 | ✅ |
| `src/css/main.css` | 7 | ✅ Tailwind v4 `@theme` |
| `src/css/components/button.css` | 7 | ✅ |
| `src/css/components/input.css` | 7 | ✅ |
| `src/css/components/card.css` | 7 | ✅ |
| `src/css/slides/cover-slide.css` | 7 | ✅ |
| `src/css/slides/content-slide.css` | 7 | ✅ |
| `src/css/slides/stat-callout.css` | 7 | ✅ |
| `dist/cena-health.css` | 7 | ✅ ~49KB minified |

### Agent Infrastructure

| File | Status |
|---|---|
| `.agents/PROJECT-CONTEXT.md` | ✅ |
| `.agents/agent-roles.md` | ✅ |
| `.agents/skills/color-theorist/SKILL.md` | ✅ |
| `.agents/skills/typographer/SKILL.md` | ✅ |
| `.agents/skills/space-architect/SKILL.md` | ✅ |
| `.agents/skills/motion-designer/SKILL.md` | ✅ |
| `.agents/skills/visual-language-curator/SKILL.md` | ✅ |
| `.agents/skills/component-designer/SKILL.md` | ✅ |
| `.agents/skills/design-system-synthesizer/SKILL.md` | ✅ |
| `.agents/skills/accessibility-reviewer/SKILL.md` | ✅ |
| `CLAUDE.md` | ✅ |

---

## Outstanding Work

Items are grouped by type. All require agent review per `.agents/agent-roles.md` before implementation.

### Blocking (gates other work)

**1. Canonical illustration SVG assets**
3–5 examples per type (spot, narrative, data, background texture, diagram). Blocks all illustration-adjacent components: empty states, hero sections, onboarding, anything requiring an illustration well.
Spec: `visual-language/illustration.md §5`

**2. Photography LUT / Lightroom preset**
Operational version of the color treatment spec in `visual-language/imagery.md §2`. Required before partner photography or food documentation enters production. Without it, each photographer interprets the spec independently and results diverge.

### Design gaps

**3. Data visualization language**
Charts, sparklines, heat maps, data tables with embedded visualization. Color-to-series mapping, axis styling, chart label typography, interaction states. Gap documented in `principles/coherence-notes.md §3.1`.

**4. Expanded component library — UI track**
Priority order (per coherence-notes §6 and component-designer skill):
- `alert.md` / `alert.css` — info/warning/error/success banners
- `badge.md` / `badge.css` — status indicators, tags
- `modal.md` / `modal.css` — dialog overlay
- `dropdown.md` / `dropdown.css` — menus, select panels
- `toast.md` / `toast.css` — notification system
- `form-group.md` — label + input + helper text layout
- `table.md` — clinical data tables in compact density
- `nav.md` — navigation bar, sidebar, tab bar

**5. Expanded component library — Slides track**
- `data-slide.md` — chart frame + annotation system
- `quote-slide.md` — patient/partner testimonials
- `section-divider.md` — branded section break slide

### Implementation hardening

**6. Tailwind config hardening**
Embed system logic in architecture, not just documentation (per `principles/coherence-notes.md` final paragraph). Three specific changes to `src/css/main.css` and Tailwind config:
- Remove `white` / `#ffffff` from the theme palette; alias `surface-page` as the "white" equivalent so `bg-white` is unavailable
- Replace Tailwind's default shadow scale (cool gray) with warm-only shadow tokens exclusively
- Gate teal-500 utilities behind a `brand-` prefix (`bg-brand-primary`) so `bg-teal-500` is not a usable class; interactive fill utilities exist only for teal-400 (`bg-primary`)

**7. Figma variable architecture**
Figma variables mapped to the token system, enabling design-to-code handoff without value drift. Token architecture (semantic referencing palette) maps cleanly to Figma variable collections. The Figma MCP connection is available. This is substantial work — likely a dedicated session.

### Governance

**8. Git history baseline commit**
The existing project files predate the commit protocol. A baseline commit documenting the state at project completion would give the git log a clean starting point for the living-system phase.
Suggested message:
```
[system] baseline commit — design system v1.0 complete

Phases 0–7 complete. All tokens, visual language, component specs,
CSS implementation, and agent infrastructure in place.

Approved by: Aaron
```

---

## Key Architectural Decisions

**Color:**
- `#FBFAF8` warm off-white is the primary warmth mechanism. Non-overridable.
- `color-primary` (teal-400, interactive) ≠ `color-brand-primary` (teal-500, identity). WCAG AA required this separation.
- `color-text-brand` = teal-400. Teal-500 fails AA at normal text sizes.
- All OKLCH within sRGB gamut. Hex fallback via `@supports`.

**Typography:**
- Plus Jakarta Sans + Source Sans 3 + Source Code Pro. All OFL.
- Major third (1.250), 16px base, 11 steps — all clean integers.
- Density tiers never touch line height.

**Spacing:**
- 4px base. 9/15 steps on 8px grid; 6 sub-grid values intentional.
- Density via `data-density` attribute, context provider pattern.

**Accessibility:**
- WCAG AA floor, AAA for primary/secondary text.
- Dual-cue required for all success states.
- `color-brand-secondary` and `color-brand-sage` are non-text-safe.

**Illustration:**
- Infrastructure through natural metaphor, not diagram.
- UI in illustrations = color blocks only, no text.
- Photography proves; illustration expresses. Never composited.
- 25% surface-area rule, three-swatch max for warm swatches.

---

## Build

```bash
npm run build   # dist/cena-health.css (~49KB minified)
npm run dev     # watch mode
```

---

## Session Log

| Date | Work Done |
|---|---|
| 2026-03-13 | Project structure, agent roles, roadmap |
| 2026-03-15 | Phases 0–4: brand brief, tokens, visual language, synthesis, coherence |
| 2026-03-16 | Accessibility audit + corrections, Phase 5 web reconciliation, Phase 6 component specs, Phase 7 CSS implementation, agent skill infrastructure, CLAUDE.md, commit protocol |
