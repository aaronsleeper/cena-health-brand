---
name: cena-pl-component-qa
description: QA a completed pattern library component before committing. Run this skill after building any pattern library component — after all 7 files have been written and npm run build:css passes. Returns a structured pass/fail report. Do not commit until this skill returns PASS on all required checks.
---

# Cena Health — Pattern Library Component QA Skill

## When to invoke this skill

After completing a pattern library component build and before committing:
- All 7 files written (or confirmed already correct)
- `npm run build:css` passes
- Dev server is running at `http://localhost:5174`

This skill does not replace visual review at localhost — Aaron does that. This skill catches systematic errors that are verifiable from file content alone.

---

## Step 1: Read the files you're auditing

For component `{name}`:
1. `src/css/components/{name}.css`
2. `pattern-library/components/{name}.html`
3. `pattern-library/pages/{name}.html`
4. `src/css/main.css` (confirm import)
5. `pattern-library/partials/pl-nav.html` (confirm nav link)
6. `pattern-library/pages/index.html` (confirm index card)

---

## Step 2: Run each check

Work through every check below. Do not skip any. For each check, record PASS, FAIL, or N/A with a specific note if it fails.

---

### CSS File Checks (`src/css/components/{name}.css`)

**CSS-01: `@layer components` wrapper**
The entire file must be wrapped in `@layer components { ... }`. Any rules outside this wrapper will be overridden by Tailwind utilities.
- PASS: All rules are inside `@layer components { }`
- FAIL: State which rules are outside

**CSS-02: No raw hex values**
Search for `#` in the file. No hex color codes should appear in component rules. Token names (`var(--color-*)`) only.
- PASS: Zero hex values found
- FAIL: List every hex value found and the line it's on

**CSS-03: No hardcoded pixel values**
Spacing, sizing, and radius values must use tokens. Check for bare `px` values other than `1px` borders (which are acceptable) and vendor-specific uses.
- PASS: No hardcoded px values found (excluding `1px` and `2px` borders)
- FAIL: List every hardcoded px value found

**CSS-04: `@layer base` not used for component rules**
Component rules belong in `@layer components`. `@layer base` is for resets only (in `base.css`).
- PASS: No `@layer base` in this file
- FAIL: State which rules are incorrectly in `@layer base`

**CSS-05: Density via `[data-density]` selector, not per-component padding**
If the component has density behavior, it must use `[data-density="compact"] .{class}` and `[data-density="comfortable"] .{class}` — not internal modifiers or JS.
- PASS: Density uses attribute selectors OR component has no density-variable spacing
- FAIL: State which rules incorrectly handle density

**CSS-06: `@media (prefers-reduced-motion: reduce)` block**
Any component with transitions or animations must have a reduced-motion override.
- PASS: Block present and covers all animated properties
- FAIL / N/A (no animation): State which animations are missing overrides

**CSS-07: No `@apply` with custom semantic classes**
`@apply` must only reference Tailwind utility classes. Never `@apply alert` or `@apply btn` — this will cause a build error.
- PASS: No `@apply` with custom class names found
- FAIL: List the offending `@apply` calls

**CSS-08: Pure CSS rules have at least one real property**
Any rule with only raw CSS properties (no `@apply`) must have at least one CSS declaration to survive Tailwind v4 tree-shaking. Rules with `@apply` are safe.
- PASS: All pure-CSS rules have at least one declaration
- FAIL: List rules that have no declarations (empty or comment-only)

---

### Component HTML File Checks (`pattern-library/components/{name}.html`)

**HTML-01: `@component-meta` block present and complete**
Must be the first thing in the file. Must include: name, category, file, classes, spec, css, when-to-use, do-not-use-when.
- PASS: Block present with all 8 fields
- FAIL: List missing fields

**HTML-02: Every `pl-section` has `data-pl-section` attribute**
Every `<section class="pl-section">` must have a unique `data-pl-section="..."` value.
- PASS: All pl-section elements have unique data-pl-section values
- FAIL: List sections missing the attribute or with duplicate values

**HTML-03: Every `pl-canvas` has a `pl-canvas-label`**
Every `<div class="pl-canvas">` must be immediately followed by `<p class="pl-canvas-label">` as its first child.
- PASS: All canvases have labels
- FAIL: List canvases missing labels

**HTML-04: `pl-canvas` backgrounds use CSS custom properties**
The inline `style="background: ..."` on every `.pl-canvas` must use `var(--color-surface-*)` — not hex values.
- PASS: All canvas backgrounds use var() tokens
- FAIL: List canvases with raw hex backgrounds

**HTML-05: No raw hex in component markup**
Search for `#` in color-related contexts (not in `href`, `id`, or comments). No hex values in `style=""` attributes or anywhere in the component markup.
- PASS: Zero hex color values in markup
- FAIL: List every instance

**HTML-06: No Tailwind utility classes in component markup**
Component elements must use semantic classes only (`.alert--info`, `.btn--primary`, etc.). Tailwind utilities (`flex`, `text-sm`, `bg-teal-400`, etc.) must not appear on the components being documented.
- PASS: No Tailwind utility classes on documented component elements
- NOTE: Layout wrapper inline styles (on divs that are NOT the component) are acceptable

**HTML-07: `pointer-events: none` on all frozen state demos**
Any element using a state-simulation class (`.demo--hover`, `.demo--focus`, `.demo--active`, `.btn--state-hover`, etc.) must have `style="pointer-events: none;"` to prevent accidental interaction.
- PASS: All state demo elements have pointer-events disabled OR no state demos exist
- FAIL: List state demos missing pointer-events: none

**HTML-08: `aria-label` on all icon-only buttons**
Every `<button>` with no visible text (icon-only) must have `aria-label` attribute.
- PASS: All icon-only buttons have aria-label
- N/A: No icon-only buttons in this component
- FAIL: List buttons missing aria-label

**HTML-09: `role` and `aria-live` on alert/status components**
If the component is an alert/status/feedback element:
- Error and Warning: `role="alert"` and `aria-live="assertive"`
- Info and Success: `role="status"` and `aria-live="polite"`
- PASS / N/A: Not an alert component

**HTML-10: PL-only styles are in a `<style>` block, not in `src/css/`**
State simulation helpers (`.demo--hover`, etc.) must be in a `<style>` block inside the component HTML file. Verify they are NOT present in `src/css/components/{name}.css`.
- PASS: PL-only styles are isolated to the HTML file's `<style>` block
- N/A: No state simulation styles needed
- FAIL: PL-only styles found in src/css/

**HTML-11: Density section uses `data-density` on wrapper, not on the component itself**
The density demo must wrap each size variant in a `<div data-density="compact">` etc. — the data-density attribute belongs on a parent wrapper, never on the component element directly.
- PASS: data-density on wrapper divs, not on component elements
- N/A: No density section
- FAIL: data-density incorrectly placed

**HTML-12: IIFE pattern for all component JS**
Any `<script>` in the component file must use the IIFE pattern: `(function() { ... })()`. No bare script code. No `<script src="...">` tags.
- PASS: All scripts use IIFE OR no scripts in file
- FAIL: List non-IIFE scripts

---

### Integration Checks

**INT-01: `@import` present in `src/css/main.css`**
Grep `src/css/main.css` for `@import "./components/{name}.css"`. Must be present and in alphabetical order within the Components section.
- PASS: Import present and in correct position
- FAIL: Import missing OR out of alphabetical order

**INT-02: Nav link present in `pattern-library/partials/pl-nav.html`**
Grep for `{name}.html` in the nav file. Must be present in the correct section.
- PASS: Link present in correct section
- FAIL: Link missing OR in wrong section

**INT-03: Index card present in `pattern-library/pages/index.html`**
Grep for `{name}.html` in the index file.
- PASS: Card present
- FAIL: Card missing

**INT-04: Page file loads component via `<load>` tag**
The page file (`pattern-library/pages/{name}.html`) must contain `<load src="../components/{name}.html" />` — not the component markup inlined directly.
- PASS: Component loaded via `<load>` tag
- FAIL: Markup inlined OR load tag missing OR wrong path

**INT-05: `npm run build:css` passes**
The build must complete without errors. If it was already confirmed to pass before this QA skill was invoked, record PASS.
- PASS: Build succeeds, dist/cena-health.css updated
- FAIL: Build error — state the error message

---

## Step 3: Produce the QA report

Output this structured report. Every check must appear — no skipping.

```
## QA Report — {Component Name}

**Date:** {date}
**Files audited:** [list]

### CSS File Checks
- CSS-01 @layer wrapper:         PASS / FAIL — {note}
- CSS-02 No raw hex:             PASS / FAIL — {note}
- CSS-03 No hardcoded px:        PASS / FAIL — {note}
- CSS-04 No @layer base:         PASS / FAIL / N/A — {note}
- CSS-05 Density selectors:      PASS / FAIL / N/A — {note}
- CSS-06 Reduced motion block:   PASS / FAIL / N/A — {note}
- CSS-07 No @apply custom class: PASS / FAIL — {note}
- CSS-08 Pure CSS rule safety:   PASS / FAIL — {note}

### Component HTML Checks
- HTML-01 @component-meta:       PASS / FAIL — {note}
- HTML-02 data-pl-section:       PASS / FAIL — {note}
- HTML-03 pl-canvas-label:       PASS / FAIL — {note}
- HTML-04 Canvas backgrounds:    PASS / FAIL — {note}
- HTML-05 No raw hex in markup:  PASS / FAIL — {note}
- HTML-06 No utility classes:    PASS / FAIL — {note}
- HTML-07 State demo isolation:  PASS / FAIL / N/A — {note}
- HTML-08 Icon-only aria-label:  PASS / FAIL / N/A — {note}
- HTML-09 Alert ARIA:            PASS / FAIL / N/A — {note}
- HTML-10 PL styles isolated:    PASS / FAIL / N/A — {note}
- HTML-11 Density wrapper:       PASS / FAIL / N/A — {note}
- HTML-12 IIFE pattern:          PASS / FAIL / N/A — {note}

### Integration Checks
- INT-01 CSS @import:            PASS / FAIL — {note}
- INT-02 Nav link:               PASS / FAIL — {note}
- INT-03 Index card:             PASS / FAIL — {note}
- INT-04 Page <load> tag:        PASS / FAIL — {note}
- INT-05 Build passes:           PASS / FAIL — {note}

### Overall verdict
PASS — ready to commit
FAIL — fix required before commit: [list specific failures]

### Items for Aaron's visual review at localhost
[List 2–4 specific things that cannot be verified from file content and require eyes-on review, e.g.:]
- Density grid: verify three size variants are visually distinct
- Surface matrix: verify success alert is distinguishable on surface-sage
- State demos: verify hover/focus/active states look correct
- Animation: trigger enter demo and verify transition is smooth
```

---

## What this QA skill does NOT check

- Visual correctness — Aaron reviews at localhost
- Contrast ratios — those were verified during the design spec process (accessibility-audit.md)
- Whether the component content accurately reflects the spec — read the spec yourself
- Whether the sections cover all meaningful variants — use judgment
- Whether the copy/label text in demos is good — content quality is not in scope here
