# Cena Health Brand Design System — Project Roadmap

**Status: Phase 8 In Progress — haven-ui Convergence**
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

### Implementation Layer — Core

| File | Phase | Status |
|---|---|---|
| `_tokens/color-web.md` | 5 | ✅ |
| `_tokens/typography-web.md` | 5 | ✅ |
| `_tokens/spacing-web.md` | 5 | ✅ |
| `src/css/tokens-color.css` | 7 | ✅ |
| `src/css/tokens-typography.css` | 7 | ✅ |
| `src/css/tokens-spacing.css` | 7 | ✅ |
| `src/css/tokens-motion.css` | 7 | ✅ |
| `src/css/main.css` | 7 | ✅ Tailwind v4 + Preline |
| `src/css/cena.css` | 8 | ✅ Theme integration, neutral remapping |
| `src/scripts/main.js` | 8 | ✅ Preline v4 autoInit |
| `dist/cena-health.css` | 7 | ✅ ~49KB minified |

### Implementation Layer — Components

| Component | CSS | PL page | PL component HTML | Status |
|---|---|---|---|---|
| Alert | ✅ | ✅ | ✅ | ✅ Complete |
| Badge | ✅ | ✅ | ✅ | ✅ Complete |
| Button | ✅ | ✅ | ✅ | ✅ Complete |
| Card | ✅ | ✅ | ✅ | ✅ Complete |
| Dropdown | ✅ | ✅ | ✅ | ✅ Complete |
| Form Group | ✅ | ✅ | ✅ | ✅ Complete |
| Input | ✅ | ✅ | ✅ | ✅ Complete |
| Modal | ✅ | ✅ | ✅ | ✅ Complete |
| Nav (Tabs + Breadcrumbs) | ✅ | ✅ | ✅ | ✅ Complete |
| Table | ✅ | ✅ | ✅ | ✅ Complete |
| Toast | ✅ | ✅ | ✅ | ✅ Complete |
| Sidebar | ✅ | ✅ | ✅ | ✅ Complete |
| Empty State | ✅ | ✅ | ✅ | ✅ Complete |
| Filter Pill | ✅ | ✅ | ✅ | ✅ Complete |
| Pagination | ✅ | ✅ | ✅ | ✅ Complete |
| Segmented Control | ✅ | ✅ | ✅ | ✅ Complete |
| Skeleton | ✅ | ✅ | ✅ | ✅ Complete |
| Toolbar | ✅ | ✅ | ✅ | ✅ Complete |
| Cover Slide | ✅ | ✅ | — | ✅ Complete |
| Content Slide | ✅ | ✅ | — | ✅ Complete |
| Stat Callout Slide | ✅ | ✅ | — | ✅ Complete |

### Infrastructure Alignment (Phase 8)

| Item | Status |
|---|---|
| Preline v4.1.2 installed | ✅ |
| `src/css/cena.css` — Preline token overrides, neutral remapping | ✅ |
| CSS import order corrected | ✅ |
| BEM → flat class name convergence (alert, button, card, input) | ✅ |
| BEM → flat convergence audit (agent-built components) | ✅ Already flat |
| `@apply` migration (agent-built components) | ✅ |

### Agent Infrastructure

| File | Status |
|---|---|
| `.agents/PROJECT-CONTEXT.md` | ✅ |
| `.agents/agent-roles.md` | ✅ Two-workflow model documented |
| `.agents/skills/color-theorist/SKILL.md` | ✅ |
| `.agents/skills/typographer/SKILL.md` | ✅ |
| `.agents/skills/space-architect/SKILL.md` | ✅ |
| `.agents/skills/motion-designer/SKILL.md` | ✅ |
| `.agents/skills/visual-language-curator/SKILL.md` | ✅ |
| `.agents/skills/component-designer/SKILL.md` | ✅ |
| `.agents/skills/design-system-synthesizer/SKILL.md` | ✅ |
| `.agents/skills/accessibility-reviewer/SKILL.md` | ✅ |
| `.agents/skills/pl-component-builder/SKILL.md` | ✅ |
| `.agents/skills/pl-component-qa/SKILL.md` | ✅ |
| `CLAUDE.md` | ✅ |

---

## Outstanding Work

Items are ordered by priority within each group.

---

### Group A — haven-ui Convergence (Priority: High)

These are components that exist in haven-ui's `components.css` and represent
reusable design-system primitives. They need CSS + PL pages in cena-health-brand
so that `dist/cena-health.css` can eventually replace haven-ui's compiled output
without touching any HTML.

~~**A1. Sidebar Navigation**~~ ✅
~~**A2. Stat Card**~~ ✅ (already in card.css)
~~**A3. Empty State**~~ ✅
~~**A4. Skeleton Loaders**~~ ✅
~~**A5. Pagination**~~ ✅
~~**A6. Toolbar**~~ ✅
~~**A7. Filter Pills**~~ ✅
~~**A8. Segmented Control / View Toggle**~~ ✅

**A9. Page Header**
Classes: `.page-header`
Note: Flex row, title left + actions right pattern.

**A10. Tag Group**
Classes: `.tag-group`, `.tag-group-label`, `.badge-removable`

**A11. Section Nav (in-page jump nav)**
Classes: `.section-nav`, `.section-nav-item`

**A12. Accordion**
Classes: `.hs-accordion-toggle`, `.accordion-chevron-up`, `.accordion-chevron-down`
Note: Preline-backed. Single accordion does not need `hs-accordion-group` wrapper.

**A13. KV Table**
Classes: `.kv-table` — key/value definition list pattern for detail pages.

**A14. Activity Feed Row**
Classes: `.activity-feed-row`
Note: Border-b row pattern. Must be excluded from `.card-body > * + *` spacing rule.

**A15. Timeline**
Classes: `.timeline-list`, `.timeline-event`, `.timeline-left`, `.timeline-connector`,
`.timeline-icon-circle`, `.timeline-icon-circle-*` variants, `.timeline-event-body`,
`.timeline-event-header`, `.timeline-event-preview`, `.timeline-event-detail`

**A16. Prompt Input**
Classes: `.prompt-input-container`, `.prompt-textarea`, `.prompt-toolbar`
Note: Textarea that auto-resizes. Focus ring on container, not textarea.

**A17. Chat Bubbles**
Classes: `.chat-bubble-user`, `.chat-bubble-ai`, `.chat-avatar-ai`,
`.message-sender-label`, `.message-date-sep`, `.message-timestamp`

**A18. Pipeline Bar**
Classes: `.pipeline-bar`, `.pipeline-segment`
Note: Horizontal segmented bar for showing proportional data without a chart.
Segments use inline `style="flex: N"` which is data-driven and acceptable.

---

### Group B — Slides Track Expansion (Priority: Medium)

**B1. Data Slide**
Chart frame + annotation system for data-heavy presentation slides.
Spec needed before CSS. No chart library — use Chart.js via CDN (same as haven-ui).

**B2. Quote Slide**
Patient and partner testimonial format. Large pull-quote, attribution, optional photo well.

**B3. Section Divider Slide**
Branded section break. Teal-to-sage gradient surface, large display type.

---

### Group C — Blocking Assets (Priority: High, external dependency)

**C1. Canonical illustration SVG assets**
3–5 examples per type: spot (120–240px), narrative (400–800px 16:9), data
(120–320px), background texture (tileable 200×200px), diagram (400–600px).
Blocks empty states, hero sections, onboarding, anything requiring an illustration well.
Spec: `visual-language/illustration.md §5`

**C2. Photography LUT / Lightroom preset**
Operational version of the spec in `visual-language/imagery.md §2`.
Highlights → `#F3F1EE`, shadows → `#0D322D`, saturation −15–20%.

---

### Group D — Data Visualization (Priority: Medium)

**D1. Chart language**
Color-to-series mapping, axis styling, chart label typography, interaction states.
Charts use Chart.js v4 via CDN — same as haven-ui. No npm chart library.
Gap documented in `principles/coherence-notes.md §3.1`.

**D2. Chart CSS**
Classes: `.chart-canvas-wrapper`, `.chart-sparkline`, `.chart-line`, `.chart-bar`
Wrappers that constrain Chart.js canvas sizing. No pie/donut charts (Tufte principle).

---

### Group E — Implementation Hardening (Priority: Lower)

~~**E1. Tailwind config hardening**~~ ✅
- ✅ Surface tokens (`surface-page`, `surface-primary`, `surface-secondary`) added to @theme as utilities
- ✅ `bg-white` still maps to warm off-white (safety net); components migrated to `bg-surface-page`
- ✅ Shadows already warm-only via @theme (rgba(91, 84, 76) base)
- ✅ Teal-500 not used in @apply anywhere — all components use semantic tokens

~~**E2. BEM → flat convergence for agent-built components**~~ ✅ Already flat as-built.

~~**E3. `@apply` migration for agent-built components**~~ ✅

---

### Group F — Governance + Tooling (Priority: Lower)

**F1. Figma variable architecture**
Figma variables mapped to the token system. Token architecture (semantic referencing
palette) maps cleanly to Figma variable collections. The Figma MCP connection is
available. Substantial work — dedicated session.

**F2. Git history baseline commit**
Files predate the commit protocol. A baseline commit gives the git log a clean
starting point.
```
[system] baseline commit — design system phases 0–8 complete
```

---

## Sequencing Recommendation

```
Done:      E2 + E3  — ✅ audit and fix agent-built components
Done:      A1–A8    — ✅ sidebar, stat card, empty state, skeleton, pagination,
                       toolbar, filter pills, segmented control

Done:      A9–A18   — ✅ page header, tag group, section nav, accordion, KV table,
                       activity feed, timeline, prompt input, chat bubbles, pipeline bar
Done:      B2–B3    — ✅ quote slide, section divider slide
Done:      E1       — ✅ Tailwind config hardening

Then:      B1–B3    — slides expansion
           D1–D2    — data visualization

When ready: C1–C2   — illustration and photography assets (external dependency)

Ongoing:   E1, F1, F2 — hardening and governance
```

---

## Key Architectural Decisions

**Color:**
- `#FBFAF8` warm off-white is the primary warmth mechanism. Non-overridable.
- `color-primary` (teal-400, interactive) ≠ `color-brand-primary` (teal-500, identity). WCAG AA required this separation.
- `color-text-brand` = teal-400. Teal-500 fails AA at normal text sizes.
- All OKLCH within sRGB gamut. Hex fallback via `@supports`.
- Warm/teal/sage scales are inverted (50=darkest, 950=lightest). `cena.css` remaps these for Tailwind utility compatibility.

**Typography:**
- Lora + Source Sans 3 + Source Code Pro. All OFL.
- Major third (1.250), 16px base, 11 steps — all clean integers.
- Density tiers never touch line height.

**Spacing:**
- 4px base. 9/15 steps on 8px grid; 6 sub-grid values intentional.
- Density via `data-density` attribute on parent containers. Never per-component.

**Preline:**
- Version 4.1.2. Loaded via `src/scripts/main.js` as an ES module — never CDN.
- CSS import order is load-bearing: Preline theme → `cena.css` → components.
- Dropdown visibility driven by `.hs-dropdown-menu.block` — never `hs-dropdown-open:*`.
- Sidebar mobile visibility via `translate-x` — never `hidden lg:block`.

**Class naming:**
- Flat modifier convention matching haven-ui: `.btn-primary`, `.alert-info`, `.card-body`.
- No BEM double-dash modifiers in HTML or CSS.

**Accessibility:**
- WCAG AA floor, AAA for primary/secondary text.
- Dual-cue required for all success states (icon + text, never color alone).
- `color-brand-secondary` and `color-brand-sage` are non-text-safe.

**Illustration:**
- Infrastructure through natural metaphor, not diagram.
- UI in illustrations = color blocks only, no text.
- Photography proves; illustration expresses. Never composited.
- 25% surface-area rule, three-swatch max for warm swatches.

---

## Build

```bash
npm run dev        # watch mode → http://localhost:5174
npm run build:css  # dist/cena-health.css (minified)
npm run build      # full Vite build
```

---

## Session Log

| Date | Work Done |
|---|---|
| 2026-03-13 | Project structure, agent roles, roadmap |
| 2026-03-15 | Phases 0–4: brand brief, tokens, visual language, synthesis, coherence |
| 2026-03-16 | Accessibility audit + corrections, Phase 5 web reconciliation, Phase 6 component specs, Phase 7 CSS implementation, agent skill infrastructure, CLAUDE.md |
| 2026-03-16 | Phase 8: Preline integration (INFRA-01), BEM→flat rename (INFRA-02), agent built full UI component track (alert, badge, button, card, dropdown, form-group, input, modal, nav, table, toast), BRAND.md, BRAND-ROADMAP.md, pl-component-builder + pl-component-qa skills, pattern library chrome fixed |
| 2026-03-16 | INFRA-03: @apply migration (7 files), A1–A8: sidebar, empty-state, skeleton, pagination, toolbar, filter-pill, segmented-control (specs, CSS, PL pages) |
| 2026-03-17 | A9–A18: page-header, tag-group, section-nav, accordion, kv-table, activity-feed, timeline, prompt-input, chat, pipeline-bar; B2–B3: quote slide, section divider slide; E1: Tailwind config hardening |
| 2026-03-17 | INFRA-03: @apply migration (4 CSS files updated, 3 already clean); 13 PL layout utility classes added to pl-head.html; inline styles replaced in badge, dropdown, modal, toast, nav, form-group HTML files. Drawer PL z-index fix (left drawer offset). |
| 2026-03-18 | Dummy copy audit: canonical name registry created at `.project-docs/dummy-copy.md`. Four inconsistencies identified (Maria Santos → Maria Rivera in kv-table + slide-quote; Dr. Michael Chen → Dr. James Chen in timeline; Lorem ipsum → Cena Health copy in input.html). Fix task written to `next-task.md` as COPY-01. Copy guidance added to `CLAUDE.md` and `pl-component-builder/SKILL.md`. |
