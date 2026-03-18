# SLIDES-01: Cover Slide + Content Slide + Stat Callout + Data Slide

_Generated: 2026-03-17_
_Roadmap refs: B1 (Data Slide), plus three existing stubs_

---

## Objective

Four slide PL pages. Three have CSS already written and stubs only need the
component HTML and page content built out. One is new end-to-end.

| Page | CSS exists? | Stub exists? | Work needed |
|---|---|---|---|
| `slides-cover.html` | ✅ `cover-slide.css` | ✅ stub | Build component HTML + implement page |
| `slides-content.html` | ✅ `content-slide.css` | ✅ stub | Build component HTML + implement page |
| `slides-stat.html` | ✅ `stat-callout.css` | ✅ stub | Build component HTML + implement page |
| `slides-data.html` | ❌ needs CSS | ❌ new page | New CSS + component HTML + new page + nav link |

---

## Pre-Build Audit Gate

Read these files completely before writing anything:

1. `.agents/skills/pl-component-builder/SKILL.md`
2. `src/css/slides/cover-slide.css` — all classes defined
3. `src/css/slides/content-slide.css` — all classes defined
4. `src/css/slides/stat-callout.css` — all classes defined
5. `pattern-library/components/slide-quote.html` — reference for component structure
6. `pattern-library/components/slide-divider.html` — second reference
7. `pattern-library/pages/charts.html` — Chart.js CDN loading pattern to replicate
8. `pattern-library/partials/pl-nav.html` — Slides section, find insertion point for Data
9. `CLAUDE.md` — full rules, especially no pie/donut charts

---

## Pre-Build Plan (output before writing any file)

Before writing any file, output a plan covering:
- Class inventory for each slide type (from reading the CSS files)
- Sections to show per PL page
- How Chart.js is loaded for the data slide (CDN in page head only)
- CENA color constants approach for the data slide
- The file checklist for each slide

---

## Part A — Cover Slide (`slides-cover.html`)

### What it is

A 16:9 presentation slide with logo zone (left 2 columns) and title block
(right 4 columns). Three variants: Standard, Dark, Conference/Event.
Stagger entrance animation.

### Sections to show in `slide-cover.html`

1. **Standard** — warm white surface, logo placeholder, title + subtitle + presenter
2. **Dark Variant** — `.slide-cover--dark`, near-black teal background
3. **Conference / Event** — `.slide-cover__event` overline above the title
4. **Stagger Animation** — `.slide-cover--stagger`, add a "Replay" button that
   removes and re-adds the class to restart the animation

Use realistic content:
- Title: "Medically Tailored Meals at Scale"
- Subtitle: "A new model for food-as-medicine in managed care"
- Presenter: "Aaron Sleeper, CEO · Q1 2026 Investor Update"
- Event: "HLTH 2026 · Las Vegas, NV"

### Canvas treatment

Slides need space — wrap each demo in a `.pl-canvas` with
`style="background: var(--color-surface-secondary); padding: var(--space-4);"`.
This gives the 16:9 slide room to breathe against the PL background.
Add a `pl-canvas-label` noting the aspect ratio.

---

## Part B — Content Slide (`slides-content.html`)

### What it is

A 16:9 content frame with a 6-column grid, header zone, content zone with
four layout patterns, four surface variants, footer zone, and progressive reveal.

### Sections to show in `slide-content.html`

1. **Single Column** — `.slide-content__body--single`, title + body text + bullet list
2. **Two Column** — `.slide-content__body--two-col`, two panels side by side
3. **Asymmetric (4+2)** — `.slide-content__body--asym`, text left + visual placeholder right
4. **Asymmetric Reversed (2+4)** — visual left + text right
5. **Surface: Teal** — `.slide-content--teal` wrapping any of the above layouts
6. **Surface: Sage** — `.slide-content--sage`
7. **Surface: Gradient** — `.slide-content--gradient`
8. **Progressive Reveal** — `.slide-content__reveal-item` on each list item,
   a "Reveal next" button triggers `.reveal-item--visible` one at a time
9. **With Stat Block** — a content slide with a `.stat-block` embedded in the body zone

Use realistic clinical content:
- Title: "Program Outcomes — Q1 2026"
- Overline: "CLINICAL IMPACT"
- Body: HbA1c reduction stats, readmission rates, patient satisfaction
- Footnote: "Data sourced from pilot program, n=847, Jan–Mar 2026"

---

## Part C — Stat Callout Slide (`slides-stat.html`)

### What it is

Three stat layout patterns: full-slide single stat, embedded stat block,
and triple stat row. With count-up animation choreography.

### Sections to show in `slide-stat.html`

1. **Full-Slide Single Stat** — `.slide-stat`, centered, teal surface, watermark
2. **With Illustration Well** — `.slide-stat--illustrated`, stat left + SVG placeholder right
3. **Embedded Stat Block** — `.stat-block` inside a `.slide-content` body zone
4. **Triple Stat Row** — `.stat-row` with three `.stat-row__item` entries
5. **Triple Row with Dividers** — `.stat-row--dividers`
6. **Count-Up Animation** — a live demo with "Animate" button that triggers
   `.stat-block__number--counting` and count-up JS

Use realistic numbers:
- "23%" — reduction in 30-day readmission rates
- "4.8 / 5" — average patient satisfaction score
- "847" — patients enrolled in Q1 2026
- "18%" — reduction in total cost of care

### Count-up JS for the demo

IIFE in the component HTML:

```js
function countUp(el, target, duration) {
  var start = 0;
  var isFloat = String(target).indexOf('.') !== -1;
  var decimals = isFloat ? String(target).split('.')[1].length : 0;
  var step = (target / (duration / 16));
  var current = 0;
  var timer = setInterval(function() {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = isFloat
      ? current.toFixed(decimals)
      : Math.floor(current).toLocaleString();
  }, 16);
}
```

Trigger on "Animate" button click. Apply `--counting` classes, run count-up
on each `.stat-block__number--animate` or `.stat-row__number--animate` element.

---

## Part D — Data Slide (new, `slides-data.html`)

### What it is

A 16:9 presentation slide designed to hold a Chart.js chart with an
annotation system — headline stat, chart, source citation, and optional
key insight callout. The chart is the primary visual; all other elements
support it.

Roadmap item B1. Uses the same Chart.js v4 CDN and `CENA.*` color constants
established in `charts.html` (COMP-07).

### CSS — `src/css/slides/data-slide.css`

```
@layer components {

  .slide-data { ... }               /* 16:9 container, surface-page default */
  .slide-data--teal { ... }         /* surface-teal variant */
  .slide-data--dark { ... }         /* dark teal variant */

  /* Header zone */
  .slide-data__header { ... }       /* overline + headline stat + subtitle */
  .slide-data__overline { ... }
  .slide-data__headline { ... }     /* large number — the answer, not the chart */
  .slide-data__subtitle { ... }

  /* Chart zone */
  .slide-data__chart { ... }        /* flex-1, contains Chart.js canvas */
  .slide-data__chart canvas { ... } /* width: 100%; height: 100% */

  /* Insight callout — optional floating annotation */
  .slide-data__insight { ... }      /* small pill positioned on the chart */

  /* Footer */
  .slide-data__footer { ... }
  .slide-data__source { ... }       /* citation text */
  .slide-data__wordmark { ... }
}
```

Design values:
- Container: same as other slides — `aspect-ratio: 16/9`, `padding: var(--space-20)`,
  grid or flex layout
- Headline number: `var(--font-display)`, `var(--text-3xl)`, `var(--color-brand-primary)`
- Insight callout: `var(--color-surface-page)`, `var(--radius-full)`,
  `var(--shadow-sm)`, `var(--text-xs)`, `padding: var(--space-1-5) var(--space-3)`
- Dark variant: same as `.slide-cover--dark` — `oklch(18.0% 0.010 183)` background,
  `var(--color-text-inverse)` text

### CSS import

Add to `src/css/main.css` in the Slides section:
`@import "./slides/data-slide.css";`

### Sections to show in `slide-data.html`

1. **HbA1c Trend** — line chart, 6-month HbA1c data for 2 patient cohorts,
   headline "−1.4%" (average reduction), source citation
2. **Enrollment Bar** — monthly enrollment counts as a bar chart,
   headline "847 patients" enrolled Q1 2026
3. **With Insight Callout** — line chart with a `.slide-data__insight` pill
   positioned to annotate a significant data point
4. **Teal Surface Variant** — `.slide-data--teal` with the enrollment chart
5. **Dark Variant** — `.slide-data--dark` with adjusted chart colors

### Chart.js loading

Add to `slides-data.html` `<head>` only:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
```

### CENA color constants

Use identical constants to `charts.html`:
```js
var CENA = {
  primary:   '#1B685E',
  secondary: '#3A8478',
  sage:      '#81B983',
  warm:      '#B3ADA4',
  success:   '#3A8E64',
  warning:   '#B58B20',
  error:     '#C13C3B',
  info:      '#287AA3',
  gridColor: 'rgba(209, 205, 198, 0.5)',
  textColor: '#5B544C'
};
```

For the dark variant charts, override grid and text colors:
```js
var CENA_DARK = Object.assign({}, CENA, {
  gridColor: 'rgba(255,255,255,0.08)',
  textColor: 'rgba(255,255,255,0.6)'
});
```

---

## Files to create / modify

### Cover Slide
1. `pattern-library/components/slide-cover.html` — new component HTML
2. `pattern-library/pages/slides-cover.html` — replace stub with full implementation

### Content Slide
3. `pattern-library/components/slide-content.html` — new component HTML
4. `pattern-library/pages/slides-content.html` — replace stub with full implementation

### Stat Callout
5. `pattern-library/components/slide-stat.html` — new component HTML
6. `pattern-library/pages/slides-stat.html` — replace stub with full implementation

### Data Slide (new)
7. `src/css/slides/data-slide.css` — new CSS file
8. `src/css/main.css` — add `@import "./slides/data-slide.css"` in Slides section
9. `pattern-library/components/slide-data.html` — new component HTML
10. `pattern-library/pages/slides-data.html` — new page with Chart.js CDN in head
11. `pattern-library/partials/pl-nav.html` — add "Data" under Slides, after "Stat Callout"
12. `pattern-library/pages/index.html` — add index card for Data Slide

---

## Known constraints

- All slides use `aspect-ratio: 16/9` — never fixed pixel heights
- Canvas backgrounds: `style="background: var(--color-surface-secondary); padding: var(--space-4);"` — gives slides visual context in the PL
- Chart.js CDN only on `slides-data.html` — not in `pl-head.html`
- No pie or donut charts — ever
- All CENA chart colors via the constants object — never raw hex in JS
- Count-up animation must respect `prefers-reduced-motion` — check the flag
  before running count-up; if reduced motion, set the final value immediately
- No raw hex in CSS, no hardcoded px — all tokens
- All slide CSS inside `@layer components` (already the case for existing slide files)
- Dark variant background `oklch(18.0% 0.010 183)` is acceptable as a raw value
  in the CSS file because it is a one-off brand value with no corresponding token —
  document this with a comment

---

## Verification

1. `npm run build:css` — must pass
2. `http://localhost:5174/pattern-library/pages/slides-cover.html` — all 4 sections,
   stagger animation plays and replays on button click
3. `http://localhost:5174/pattern-library/pages/slides-content.html` — all 9 sections,
   progressive reveal demo works
4. `http://localhost:5174/pattern-library/pages/slides-stat.html` — count-up animation
   triggers on button click, respects reduced motion
5. `http://localhost:5174/pattern-library/pages/slides-data.html` — charts render,
   dark variant uses adjusted colors, "Data" appears in PL nav
6. No console errors from Chart.js on slides-data.html

---

## Completion Report

```
## Completion Report — SLIDES-01

- Files created: [list]
- Files modified: [list]
- New CSS classes (data slide): [list]
- Judgment calls: [list or "none"]
- Reduced motion handled: yes / no
- Build passes: yes / no
- Items deferred: [list or "none"]
```

```bash
git add -A
git commit -m "feat: slides track complete — cover, content, stat callout, data slide"
```

**Verify at:** http://localhost:5174/pattern-library/pages/slides-cover.html

---
_After SLIDES-01, all buildable pattern library work is complete.
Remaining: F2 (git baseline commit — no build needed), F1 (Figma variables — dedicated session)._
