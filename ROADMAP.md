# Cena Health Brand Design System — Project Roadmap

**Status: COMPLETE**
**Last updated:** 2026-03-16

---

## Project Vision

A collaboratively designed visual identity and design system for Cena Health, produced by a suite of specialist AI agents with deep, compatible expertise. The system serves two surfaces: product UI (web applications) and automated slide deck creation, from a single shared token foundation.

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

---

## Key Architectural Decisions

**Color:**
- Warm off-white `#FBFAF8` is the system's primary warmth mechanism. Non-overridable.
- `color-primary` (interactive fill, teal-400 `#1B685E`) is distinct from `color-brand-primary` (identity, teal-500 `#3A8478`). Required for WCAG AA.
- `color-text-brand` = teal-400 for AA compliance at normal text sizes.
- All OKLCH values within sRGB gamut. OKLCH with hex fallback pattern used throughout.

**Typography:**
- Plus Jakarta Sans (display) + Source Sans 3 (body) + Source Code Pro (mono). All OFL.
- Major third (1.250) scale, 16px base. All computed px values are clean integers.
- Density tiers never modify line height — spacing between elements only.

**Spacing:**
- 4px base unit. 9 of 15 steps align to 8px grid; 6 sub-grid values are intentional.
- Density tiers via `data-density` attribute on the root container.

**Accessibility:**
- WCAG AA floor, AAA for primary and secondary text.
- Success states always use dual-cue (icon + label), not color alone.
- `color-brand-secondary` and `color-brand-sage` are non-text-safe — graphical use only.

**Illustration:**
- Infrastructure depicted through natural metaphor, not technical diagram (Q5 resolution).
- UI in illustrations = illustrated impressions (color blocks, no text) (Q6 resolution).
- Photography = evidential voice. Illustration = emotional voice. Never composited.
- Warm swatch governance: 25% surface-area rule, three-swatch maximum.

---

## What's Still Needed

1. **Canonical illustration SVG assets** (3–5 examples per type) — needed before illustration-adjacent components (empty states, hero sections, onboarding) can be implemented in Preline.

2. **Photography LUT / Lightroom preset** — for consistent color treatment of partner and food photography. The spec exists in `visual-language/imagery.md §2`; the operational asset doesn't.

3. **Data visualization language** — gap identified in `principles/coherence-notes.md §3.1`. Charts, sparklines, heat maps not yet specified.

4. **Expanded component library** — current specs cover button, input, card, and slide templates. See `next-task.md` for priority list.

---

## Build

```bash
npm run build   # produces dist/cena-health.css (~49KB minified)
npm run dev     # watch mode
```

---

## Session Log

| Date | Work Done |
|---|---|
| 2026-03-13 | Project structure, agent roles, roadmap |
| 2026-03-15 | Phases 0–4: brand brief, all tokens, visual language, synthesis, coherence |
| 2026-03-16 | Accessibility audit, corrections, Phase 5 web reconciliation, Phase 6 component specs, Phase 7 CSS implementation |
