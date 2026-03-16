# Cena Health — AI Coding Assistant Rules

Read this before touching any file in this project.

## The five rules that most commonly get violated

1. **Background color is `#FBFAF8`, never `#ffffff` or `white`.** Use `var(--color-surface-page)` or `bg-surface-page`. Pure white breaks the entire warmth system.

2. **Elevation uses surface color shifts and warm borders first, shadows last.** Use `bg-surface-primary` on `bg-surface-page` to create card elevation. Add `border border-warm-700` if more separation is needed. Only use `shadow-warm-*` for floating elements (modals, dropdowns, toasts).

3. **Interactive fill is `color-primary` (teal-400, `#1B685E`), not `color-brand-primary` (teal-500, `#3A8478`).** Use `bg-primary` for buttons, not `bg-brand-primary` or `bg-teal-500`. Teal-500 fails WCAG AA with white text.

4. **All component values use semantic CSS custom properties, never raw hex or hardcoded pixels.** Write `var(--color-text-primary)`, `var(--space-4)`, `var(--radius-md)` — not `#0D322D`, `16px`, `8px`.

5. **Density is set once on a parent container via `data-density="compact"`, never per-component.** Never add padding overrides inside individual components to achieve density. Never modify line-height for density.

## Pattern library — what to update when adding a component

Every new component requires changes to four places:

1. **`src/css/components/{name}.css`** — CSS implementation (or `src/css/slides/{name}.css` for slides)
2. **`src/css/main.css`** — add `@import` in the Components section, alphabetically
3. **`pattern-library/components/{name}.html`** — component markup with all variants and sections
4. **`pattern-library/pages/{name}.html`** — page that loads the component via `<load src="../components/{name}.html" />`
5. **`pattern-library/partials/pl-nav.html`** — add a nav link in the correct section
6. **`pattern-library/pages/index.html`** — add a card to the index grid

Nav section conventions:
- **Foundations** — colors, typography, spacing, motion token documentation
- **Primitives** — atomic interactive elements: buttons, inputs, alerts, badges, tags
- **Layout** — structural containers: cards, panels, page shells, grids
- **Navigation** — nav bars, sidebars, tabs, breadcrumbs, filter pills
- **Overlays** — modals, dropdowns, toasts, tooltips, popovers
- **Data** — tables, empty states, pagination, skeletons
- **Slides** — slide deck components

Component HTML file conventions (follow the alert.html pattern):
- Open with `@component-meta` comment block (name, category, classes, spec, css, when-to-use, do-not-use-when)
- Each variant group is a `<section class="pl-section" data-pl-section="...">` with a `pl-section-title`
- Canvases use `<div class="pl-canvas" style="background: var(--color-surface-{name});">` with a `pl-canvas-label`
- Component JS lives at the bottom of the component file inside `<script>(function() { ... })()</script>`

## Where to find the full system

- Full rules: `.agents/PROJECT-CONTEXT.md`
- Color tokens: `_tokens/color.md` and `src/css/tokens-color.css`
- All tokens: `src/css/tokens-*.css`
- Component specs: `components/ui/` and `components/slides/`
- Dev server: `npm run dev` → `http://localhost:5174`
- CSS-only build: `npm run build:css` → `dist/cena-health.css`
