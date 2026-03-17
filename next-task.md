# INFRA-03: @apply Migration + PL Inline Style Cleanup

_Generated: 2026-03-16_
_Phase: Implementation hardening — no visual changes, no renames_

---

## Objective

Two cleanup tasks in one pass:

**Part A — @apply migration:** Rewrite the 7 agent-built component CSS files
to use `@apply` where Tailwind utilities exist, matching the authoring style
of the original 4 components (alert, button, card, input).

**Part B — PL inline style cleanup:** Add missing layout utility classes to
`pl-head.html`, then replace every inline `style=""` attribute in the 7
component HTML files with those classes.

No visual output changes in either part. No class renames. No token value changes.

---

## Pre-Build Audit Gate

Read these files completely before writing anything:

1. `src/css/components/button.css` — reference for correct @apply style
2. `src/css/cena.css` — the `@theme` block defines what utilities are available
3. `pattern-library/partials/pl-head.html` — existing PL chrome classes
4. `CLAUDE.md` — @apply rules and no-inline-style rule

---

## Part A — @apply Migration

### Files to update

- `src/css/components/badge.css`
- `src/css/components/dropdown.css`
- `src/css/components/form-group.css`
- `src/css/components/modal.css`
- `src/css/components/nav.css`
- `src/css/components/table.css`
- `src/css/components/toast.css`

### Rules

**Use `@apply` for:**
- Layout: `display`, `flex-direction`, `align-items`, `justify-content`,
  `overflow`, `position`, `inset`, `z-index`
- Sizing: `width: 100%`, `min-width: 0`, `flex: 1`, `flex-shrink: 0`
- Typography: font-size, font-weight, font-family (via `font-sans`),
  white-space, text-align, text-decoration, list-style, cursor
- Spacing: padding, margin, gap — when they match the spacing scale
- Border radius: when using `var(--radius-*)` values
- Colors: background-color, color, border-color — when a utility maps cleanly
- Shadows: `var(--shadow-md)` → `@apply shadow-md`

**Keep as raw CSS for:**
- `color-mix()`, `oklch()`, `calc()` values — no utility equivalent
- `transition` with multiple values
- `animation` and `@keyframes`
- Specific pixel/rem measurements with no utility equivalent
  (e.g. `width: 2.75rem` for touch targets — keep raw, add a comment)
- All rules inside `@media (prefers-reduced-motion: reduce)`
- Custom CSS variable assignments

**Never** `@apply` a semantic class inside another semantic class.

### Quick reference — common mappings

| Raw CSS | @apply |
|---|---|
| `display: flex` | `@apply flex` |
| `display: inline-flex` | `@apply inline-flex` |
| `display: block` | `@apply block` |
| `display: none` | `@apply hidden` |
| `flex-direction: column` | `@apply flex-col` |
| `align-items: center` | `@apply items-center` |
| `align-items: flex-start` | `@apply items-start` |
| `justify-content: center` | `@apply justify-center` |
| `justify-content: flex-end` | `@apply justify-end` |
| `justify-content: space-between` | `@apply justify-between` |
| `flex: 1` | `@apply flex-1` |
| `flex-shrink: 0` | `@apply shrink-0` |
| `flex-wrap: wrap` | `@apply flex-wrap` |
| `overflow: hidden` | `@apply overflow-hidden` |
| `overflow-x: auto` | `@apply overflow-x-auto` |
| `overflow-y: auto` | `@apply overflow-y-auto` |
| `position: relative` | `@apply relative` |
| `position: absolute` | `@apply absolute` |
| `position: fixed` | `@apply fixed` |
| `position: sticky` | `@apply sticky` |
| `inset: 0` | `@apply inset-0` |
| `width: 100%` | `@apply w-full` |
| `min-width: 0` | `@apply min-w-0` |
| `white-space: nowrap` | `@apply whitespace-nowrap` |
| `cursor: pointer` | `@apply cursor-pointer` |
| `cursor: not-allowed` | `@apply cursor-not-allowed` |
| `pointer-events: none` | `@apply pointer-events-none` |
| `user-select: none` | `@apply select-none` |
| `list-style: none` | `@apply list-none` |
| `text-decoration: none` | `@apply no-underline` |
| `text-align: left` | `@apply text-left` |
| `font-family: var(--font-body)` | `@apply font-sans` |
| `font-size: var(--text-xs)` | `@apply text-xs` |
| `font-size: var(--text-sm)` | `@apply text-sm` |
| `font-size: var(--text-base)` | `@apply text-base` |
| `font-weight: 400` | `@apply font-normal` |
| `font-weight: 500` | `@apply font-medium` |
| `font-weight: 600` | `@apply font-semibold` |
| `border-radius: var(--radius-sm)` | `@apply rounded-sm` |
| `border-radius: var(--radius-md)` | `@apply rounded-md` |
| `border-radius: var(--radius-lg)` | `@apply rounded-lg` |
| `border-radius: var(--radius-full)` | `@apply rounded-full` |
| `border: none` | `@apply border-none` |
| `border: 1px solid transparent` | `@apply border border-transparent` |
| `background: transparent` | `@apply bg-transparent` |
| `box-shadow: var(--shadow-md)` | `@apply shadow-md` |
| `box-shadow: var(--shadow-lg)` | `@apply shadow-lg` |
| `z-index: 40` | `@apply z-40` |
| `z-index: 50` | `@apply z-50` |
| `z-index: 60` | `@apply z-60` |

---

## Part B — PL Inline Style Cleanup

### Step 1: Add utility classes to `pl-head.html`

Add the following classes to the `<style>` block in
`pattern-library/partials/pl-head.html`, after the existing `.pl-note` rule:

```css
  /* ---- Layout helpers for component examples ---- */

  /* Inline row of components — wraps on overflow */
  .pl-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    align-items: center;
  }

  /* Inline row with tighter gap */
  .pl-row-sm {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    align-items: center;
  }

  /* Stacked column — gap-4 (use .pl-stack for gap-3) */
  .pl-stack-lg {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  /* Constrained demo containers — center within canvas */
  .pl-demo-sm  { max-width: 25rem; margin: 0 auto; }
  .pl-demo-md  { max-width: 32.5rem; margin: 0 auto; }
  .pl-demo-lg  { max-width: 40rem; margin: 0 auto; }
  .pl-demo-xl  { max-width: 36rem; }

  /* Canvas that needs extra height for overlays (dropdowns, tooltips) */
  .pl-canvas-tall { min-height: 16rem; }
  .pl-canvas-xl   { min-height: 20rem; }

  /* Right-aligned trigger — pushes a single child to the right */
  .pl-align-right {
    display: flex;
    justify-content: flex-end;
  }

  /* Inline demo text — body copy used in context examples */
  .pl-demo-text {
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: 400;
    color: var(--color-text-primary);
  }

  .pl-demo-text-medium {
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--color-text-primary);
  }

  /* Static menu panel replica — for item state documentation */
  .pl-menu-demo {
    max-width: 14rem;
    background: var(--color-surface-page);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    padding: var(--space-1) 0;
  }
```

### Step 2: Update the 7 component HTML files

Replace every inline `style=""` attribute with the appropriate PL class or
combination of classes. The exact replacements by file follow.

**Work through each file systematically. For each inline style found:**
1. Identify which new PL class covers it
2. Replace `style="..."` with `class="[pl-class]"` (or add to existing class list)
3. If no single class covers it exactly, use the closest match and note the delta

---

#### `pattern-library/components/badge.html`

| Current inline style | Replace with |
|---|---|
| `style="display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center;"` | `class="pl-row"` |
| `style="display: flex; gap: var(--space-2); flex-wrap: wrap;"` | `class="pl-row-sm"` |
| `style="max-width: 30rem; display: flex; flex-direction: column; gap: var(--space-4);"` | `class="pl-stack-lg"` with `style="max-width: 30rem;"` remaining (no utility for this exact width) |
| `style="display: flex; align-items: center; gap: var(--space-2);"` | `class="pl-row-sm"` |
| `style="display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap;"` | `class="pl-row-sm"` |
| `style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-3) 0; border-top: 1px solid var(--color-border-default);"` | Keep as inline style — this is a one-off layout row, not a reusable pattern |
| `style="font-family: var(--font-body); font-size: var(--text-base); font-weight: 500; color: var(--color-text-primary);"` | `class="pl-demo-text-medium"` |
| `style="display: flex; flex-direction: column; gap: var(--space-4);"` (wrapping surface canvases) | `class="pl-stack-lg"` |

---

#### `pattern-library/components/dropdown.html`

| Current inline style | Replace with |
|---|---|
| `style="background: var(--color-surface-page); min-height: 16rem;"` on `.pl-canvas` | Add `class="pl-canvas-tall"` to the div alongside `pl-canvas`, keep background as inline style (canvas backgrounds are always inline per convention) |
| `style="background: var(--color-surface-page); min-height: 20rem;"` | `pl-canvas-xl` modifier |
| `style="display: flex; justify-content: flex-end;"` | `class="pl-align-right"` |
| `style="max-width: 14rem; background: ...; border: ...; box-shadow: ...; padding: ...;"` (static states panel) | `class="pl-menu-demo"` |
| `style="pointer-events: none; background-color: var(--color-surface-primary);"` on items | Keep as inline — these are state simulation overrides, acceptable per button.html precedent where PL-only `<style>` blocks handle this. Move these to a `<style>` block at the top of dropdown.html instead |
| `style="pointer-events: none; background-color: var(--color-surface-secondary);"` | Same — move to `<style>` block |
| `style="display: flex; flex-direction: column; gap: var(--space-4);"` (surface stacks) | `class="pl-stack-lg"` |
| `style="display: inline-flex; margin-left: var(--space-1);"` on chevron spans (JS-injected) | Leave — JS-injected inline styles are acceptable |

For the item state simulation styles, add a `<style>` block at the top of
`dropdown.html` (after the `@component-meta` comment):

```html
<style>
  /* PL-only state simulation — never add to src/css/ */
  .dropdown-item--state-hover  { background-color: var(--color-surface-primary) !important; pointer-events: none; }
  .dropdown-item--state-active { background-color: var(--color-surface-secondary) !important; pointer-events: none; }
  .dropdown-item--state-danger-hover { background-color: var(--color-error-bg) !important; pointer-events: none; }
</style>
```

Then update the static state items to use these classes instead of inline styles.

---

#### `pattern-library/components/modal.html`

| Current inline style | Replace with |
|---|---|
| `style="max-width: 32.5rem; margin: 0 auto;"` | `class="pl-demo-md"` |
| `style="max-width: 25rem; margin: 0 auto;"` | `class="pl-demo-sm"` |
| `style="max-width: 40rem; margin: 0 auto;"` | `class="pl-demo-lg"` |
| `style="display: flex; gap: var(--space-3); flex-wrap: wrap;"` | `class="pl-row"` |
| `position: relative` on static `.modal` elements | Keep — required for PL static display |

---

#### `pattern-library/components/toast.html`

| Current inline style | Replace with |
|---|---|
| `style="display: flex; flex-direction: column; gap: var(--space-3); max-width: 22rem; margin: 0 auto;"` | `class="pl-stack pl-demo-sm"` (`.pl-stack` already exists with `gap-3`) |
| `style="max-width: 22rem; margin: 0 auto;"` | `class="pl-demo-sm"` |
| `style="display: flex; gap: var(--space-3); flex-wrap: wrap;"` | `class="pl-row"` |
| `position: relative` on static `.toast` elements | Keep — required for PL static display |

---

#### `pattern-library/components/nav.html`

| Current inline style | Replace with |
|---|---|
| `style="display: flex; flex-direction: column; gap: var(--space-6);"` (breadcrumb examples) | `class="pl-stack-lg"` |
| `style="pointer-events: none;"` on static tab bar | Move to `<style>` block |
| `style="color: var(--color-text-primary); background-color: var(--color-surface-primary); border-radius: var(--radius-sm) var(--radius-sm) 0 0;"` (hover state sim) | Move to `<style>` block |

Add a `<style>` block at the top of `nav.html`:

```html
<style>
  /* PL-only state simulation — never add to src/css/ */
  .tab--state-hover {
    color: var(--color-text-primary) !important;
    background-color: var(--color-surface-primary) !important;
    border-radius: var(--radius-sm) var(--radius-sm) 0 0 !important;
    pointer-events: none;
  }
</style>
```

Replace the hover state tab's inline style with `class="tab tab--state-hover"`.
Add `style="pointer-events: none;"` static tab bars — move to a wrapping div
with a PL class rather than on the `tabs` element directly so the semantic
class isn't contaminated:

```html
<div style="pointer-events: none;">
  <div class="tabs" role="tablist">
    ...
  </div>
</div>
```

---

#### `pattern-library/components/table.html`

Table.html has no significant inline style issues — the component markup is clean
and the PL wrappers don't use inline styles. **No changes needed.**

---

#### `pattern-library/components/form-group.html`

| Current inline style | Replace with |
|---|---|
| `style="max-width: 36rem;"` | `class="pl-demo-xl"` |
| `style="max-width: 24rem;"` | Keep as inline — `pl-demo-sm` is 25rem, not exact. No utility for 24rem. |

---

## Verification

After both parts are complete:

1. Run `npm run build:css` — must pass without errors

2. Check that **no inline `style=""` attributes remain** in the 7 component HTML
   files except for:
   - Canvas background colors (always inline per convention)
   - `position: relative` on static component instances shown outside a backdrop
   - JS-injected styles
   - One-off measurements with no utility equivalent (document these)

3. Open each PL page and confirm no visual regression:
   - `http://localhost:5174/pattern-library/pages/alerts.html`
   - `http://localhost:5174/pattern-library/pages/badges.html`
   - `http://localhost:5174/pattern-library/pages/buttons.html`
   - `http://localhost:5174/pattern-library/pages/dropdowns.html`
   - `http://localhost:5174/pattern-library/pages/form-groups.html`
   - `http://localhost:5174/pattern-library/pages/modals.html`
   - `http://localhost:5174/pattern-library/pages/nav.html`
   - `http://localhost:5174/pattern-library/pages/tables.html`
   - `http://localhost:5174/pattern-library/pages/toasts.html`

---

## Completion Report

```
## Completion Report — INFRA-03

### Part A — @apply migration
- CSS files modified: [list]
- Rules converted to @apply: [count per file]
- Rules kept as raw CSS with reason: [brief summary per file]

### Part B — PL inline style cleanup
- New PL classes added to pl-head.html: [list]
- HTML files modified: [list]
- Inline styles remaining (with reason): [list each one]

### Build + visual check
- Build passes: yes / no
- Visual regression: none / [describe]
- Items deferred: [list, or "none"]
```

Then:
```bash
git add -A
git commit -m "infra: @apply migration + PL layout utilities, remove inline styles"
```

---
**Verify at:** http://localhost:5174/pattern-library/pages/badges.html
