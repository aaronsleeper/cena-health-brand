# INFRA-03: @apply Migration Audit — Agent-Built Components

_Generated: 2026-03-16_
_Phase: Implementation hardening — no visual changes, no renames_

---

## Objective

Audit the 7 agent-built component CSS files and migrate rules from raw CSS to
`@apply` where an equivalent Tailwind utility exists. This aligns them with the
original 4 components (alert, button, card, input) and makes the codebase
consistent throughout.

The 7 files are:
- `src/css/components/badge.css`
- `src/css/components/dropdown.css`
- `src/css/components/form-group.css`
- `src/css/components/modal.css`
- `src/css/components/nav.css`
- `src/css/components/table.css`
- `src/css/components/toast.css`

**No visual output changes.** No class renames. No token value changes.
This is a CSS authoring style migration only.

---

## Pre-Build Audit Gate

Read these files before writing anything:

1. `src/css/cena.css` — the full `@theme` block. This defines every Tailwind
   utility available for `@apply`. Only use `@apply` for utilities that resolve
   from this theme.
2. `src/css/components/button.css` — the reference implementation showing the
   correct balance between `@apply` and raw CSS.
3. `CLAUDE.md` — the `@apply` rules section.

---

## Rules for this migration

**Use `@apply` when:**
- A Tailwind utility class directly expresses the value
  (e.g. `font-size: var(--text-sm)` → `@apply text-sm`)
- The property is structural layout (flex, grid, overflow, position, z-index)
- The property is a spacing value from the spacing scale
  (padding, margin, gap — use `@apply p-*`, `@apply gap-*` etc.)
- The property is a color that maps to a Tailwind color utility
  (background, border-color, text color)

**Keep as raw CSS when:**
- The value uses `color-mix()`, `oklch()`, or other CSS functions
  that have no Tailwind utility equivalent
- The value is a calculation (`calc()`)
- The property is `transition` with multiple values
- The property is `animation` or `@keyframes`
- The property is a custom CSS variable assignment
- The value is a specific pixel measurement with no utility equivalent
  (e.g. `width: 2.75rem` for a touch target — keep raw, add a comment)
- The rule is inside `@media (prefers-reduced-motion: reduce)`
  — keep these as raw CSS for clarity

**Never `@apply` a semantic class inside another semantic class.**
Only `@apply` Tailwind utility classes.

**First line rule:** Any rule that uses only raw CSS (no `@apply`) must start
with `@apply block;` or another display utility to prevent tree-shaking.
Exception: rules that already have `display:` or `position:` set explicitly
as raw CSS — these are safe.

---

## What to do for each file

Work through each file. For each ruleset:

1. Identify properties that map to Tailwind utilities
2. Replace those properties with `@apply` equivalents
3. Keep remaining properties as raw CSS after the `@apply` line
4. Preserve `@layer components` wrapper — do not remove it
5. Preserve all comments

### Quick reference — common mappings

| Raw CSS | @apply equivalent |
|---|---|
| `display: flex` | `@apply flex` |
| `display: inline-flex` | `@apply inline-flex` |
| `display: block` | `@apply block` |
| `flex-direction: column` | `@apply flex-col` |
| `align-items: center` | `@apply items-center` |
| `justify-content: flex-end` | `@apply justify-end` |
| `overflow-x: auto` | `@apply overflow-x-auto` |
| `overflow: hidden` | `@apply overflow-hidden` |
| `width: 100%` | `@apply w-full` |
| `min-width: 0` | `@apply min-w-0` |
| `flex: 1` | `@apply flex-1` |
| `flex-shrink: 0` | `@apply shrink-0` |
| `white-space: nowrap` | `@apply whitespace-nowrap` |
| `cursor: pointer` | `@apply cursor-pointer` |
| `cursor: not-allowed` | `@apply cursor-not-allowed` |
| `pointer-events: none` | `@apply pointer-events-none` |
| `user-select: none` | `@apply select-none` |
| `list-style: none` | `@apply list-none` |
| `text-decoration: none` | `@apply no-underline` |
| `text-align: left` | `@apply text-left` |
| `position: relative` | `@apply relative` |
| `position: absolute` | `@apply absolute` |
| `position: fixed` | `@apply fixed` |
| `position: sticky` | `@apply sticky` |
| `inset: 0` | `@apply inset-0` |
| `z-index: 40` | `@apply z-40` |
| `font-family: var(--font-body)` | `@apply font-sans` (maps via `--font-sans` alias) |
| `font-size: var(--text-sm)` | `@apply text-sm` |
| `font-size: var(--text-xs)` | `@apply text-xs` |
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
| `background-color: var(--color-surface-page)` | `@apply bg-white` (warm white alias) |
| `background-color: var(--color-surface-primary)` | `@apply bg-gray-100` |
| `background-color: var(--color-surface-secondary)` | `@apply bg-gray-200` |
| `color: var(--color-text-primary)` | `@apply text-gray-900` |
| `color: var(--color-text-secondary)` | `@apply text-gray-600` |
| `color: var(--color-text-tertiary)` | `@apply text-gray-500` |
| `border-color: var(--color-border-default)` | `@apply border-gray-300` |
| `box-shadow: var(--shadow-lg)` | `@apply shadow-lg` |
| `box-shadow: var(--shadow-md)` | `@apply shadow-md` |

**Note on spacing:** The Cena spacing scale uses `--space-*` tokens which map
to Tailwind's `--spacing-*` in `@theme`. Use `@apply` spacing utilities for
standard padding/margin/gap values where they exist.

---

## Verification

After migrating all 7 files:

1. Run `npm run build:css` — must pass without errors
2. Open each PL page and confirm no visual regression:
   - `http://localhost:5174/pattern-library/pages/badges.html`
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

- Files modified: [list]
- Rules converted to @apply: [count per file]
- Rules kept as raw CSS (with reason): [brief summary]
- Build passes: yes / no
- Visual regression: none / [describe]
- Items deferred: [list, or "none"]
```

Then:
```bash
git add -A
git commit -m "infra: migrate agent-built components to @apply"
```

---
**Verify at:** http://localhost:5174/pattern-library/pages/badges.html
