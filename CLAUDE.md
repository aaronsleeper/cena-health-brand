# Cena Health Brand — AI Coding Assistant Rules

Read this file completely before touching any file in this project.

---

## The five rules most commonly violated

**1. Background is `#FBFAF8` (`var(--color-surface-page)`), never `#ffffff` or `white`.**
The warm off-white is the entire warmth mechanism. Using pure white breaks it.

**2. Interactive fill is `color-primary` (teal-400, `#1B685E`), not `color-brand-primary` (teal-500, `#3A8478`).**
Teal-500 fails WCAG AA with light text. Use `var(--color-primary)` for buttons and interactive states.

**3. All component values use semantic CSS custom properties, never raw hex or hardcoded pixels.**
Write `var(--color-text-primary)`, `var(--space-4)`, `var(--radius-md)` — not `#0D322D`, `16px`, `8px`.

**4. Elevation uses surface color shifts and warm borders first, shadows last.**
Cards sit on `surface-primary` on `surface-page`. Add `border` for more separation. Only use `shadow-*` for floating elements (modals, dropdowns, toasts).

**5. Density is set once on a parent container via `data-density="compact"`, never per-component.**
The spacing token scale re-maps under `[data-density="compact"]` and `[data-density="comfortable"]` — do not add per-component padding overrides to achieve density.

---

## Stack

- **Tailwind CSS v4** (CSS-first, no `tailwind.config.js`)
- **vite-plugin-html-inject** for `<load src="...">` partials
- **Vite** dev server at `http://localhost:5174` (`strictPort: true`)
- **No Preline, no jQuery, no component framework** — vanilla JS only
- **No FontAwesome** — icons are inline SVG only

---

## Tailwind v4 — Critical Rules

### All CSS must use `@layer`

Every component CSS file must wrap its rules in `@layer components`. Base/reset rules use `@layer base`. Failure to do this causes Tailwind to override component styles.

```css
/* Correct */
@layer components {
  .alert { ... }
}

/* Wrong — rule will be overridden by Tailwind utilities */
.alert { ... }
```

### Pure CSS rules need `display` or another property to survive tree-shaking

In Tailwind v4, any CSS rule with **only raw CSS properties** (no `@apply`) can be silently dropped during build. To prevent this, always include at least one meaningful CSS property (any real CSS declaration is sufficient — using `display` is a good convention).

```css
/* Wrong — may be silently dropped */
.pl-note {
  font-style: italic;
}

/* Correct — raw CSS rule survives */
.pl-note {
  display: block;
  font-style: italic;
}
```

This applies anywhere in `src/css/` — component files, base.css, and slides.

### Never use `@apply` with a custom semantic class

`@apply` can only resolve Tailwind's own utility classes. It cannot resolve custom classes defined in your own CSS files. Writing `@apply alert` inside another class will cause a build error.

```css
/* Wrong — build error */
.alert--custom {
  @apply alert;
}

/* Correct — repeat the properties inline */
.alert--custom {
  display: flex;
  align-items: flex-start;
  /* ... rest of alert base ... */
}
```

### Token namespace — use these exact names

Spacing: `--space-px`, `--space-0-5`, `--space-1`, `--space-1-5`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-8`, `--space-10`, `--space-12`, `--space-16`, `--space-20`, `--space-24`

Icon sizes (from `tokens-spacing.css`): `--icon-sm` (16px), `--icon-md` (20px), `--icon-lg` (24px), `--icon-xl` (32px)

Border radius: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-xl` (20px), `--radius-full`

Motion: `--duration-micro`, `--duration-fast`, `--duration-normal`, `--duration-slow`; `--ease-enter`, `--ease-exit`, `--ease-transition`

Typography: `--font-display` (Plus Jakarta Sans), `--font-body` (Source Sans 3), `--font-mono` (Source Code Pro)

Text sizes: `--text-3xs`, `--text-2xs`, `--text-xs`, `--text-sm`, `--text-base`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`, `--text-display`

Line heights: `--leading-none`, `--leading-tight`, `--leading-heading`, `--leading-snug`, `--leading-normal`, `--leading-relaxed`, `--leading-body-sm`, `--leading-body`, `--leading-loose`

Letter spacing: `--tracking-tightest` through `--tracking-widest`

Colors — see `src/css/tokens-color.css` for the full list. Key semantic tokens: `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`, `--color-text-brand`, `--color-primary`, `--color-primary-hover`, `--color-surface-page`, `--color-surface-primary`, `--color-surface-secondary`, `--color-surface-teal`, `--color-surface-sage`, `--color-border-default`, `--color-border-strong`, `--color-border-focus`

---

## Pattern library build workflow

Every component build task follows this sequence:

1. **Read** `.agents/skills/pl-component-builder/SKILL.md` — before writing any file
2. **Output a pre-build plan** — the skill specifies the format
3. **Write the files** — following the structural rules in the skill
4. **Run** `npm run build:css` — must pass before proceeding
5. **Run QA** using `.agents/skills/pl-component-qa/SKILL.md` — produces a structured pass/fail report
6. **Report to Aaron** with the QA report and a list of things to verify at localhost
7. **Commit** only after Aaron confirms

Do not skip steps 2, 4, or 5. The pre-build plan prevents class name errors. The QA report catches systematic errors before they reach Aaron.

---

## Adding a new component — the required update list

Every new component requires all of these, in this order:

1. `components/ui/{name}.md` — design spec (if not already present)
2. `src/css/components/{name}.css` — CSS implementation using `@layer components`
3. `src/css/main.css` — add `@import "./components/{name}.css"` alphabetically in the Components section
4. `pattern-library/components/{name}.html` — markup with all variants
5. `pattern-library/pages/{name}.html` — page that loads the component via `<load src="../components/{name}.html" />`
6. `pattern-library/partials/pl-nav.html` — nav link in the correct section
7. `pattern-library/pages/index.html` — card in the index grid

Do not skip any of these. An incomplete update leaves the pattern library out of sync with the CSS.

---

## Component CSS file structure

Follow `src/css/components/button.css` or `src/css/components/alert.css` as the model. Required structure:

```css
/* ==========================================================================
   Cena Health — {Component Name} Component
   Source: components/ui/{name}.md
   ========================================================================== */

@layer components {

  /* Base */

  /* Variants */

  /* States (hover, focus, active, disabled) */

  /* Density */

  /* Motion */

  /* Reduced motion */

}
```

Every component that animates must have a `@media (prefers-reduced-motion: reduce)` block.

---

## Pattern library component HTML conventions

Follow `pattern-library/components/alert.html` as the model.

- Open with `@component-meta` comment block: `name`, `category`, `classes`, `spec`, `css`, `when-to-use`, `do-not-use-when`
- Each variant group is `<section class="pl-section" data-pl-section="...">` with `<h2 class="pl-section-title">`
- Canvases: `<div class="pl-canvas" style="background: var(--color-surface-{name});">` with `<p class="pl-canvas-label">`
- Component JS (if any) lives at the bottom of the component file inside `<script>(function() { ... })()</script>`
- No external script files for component demos — inline IIFE only

---

## Pattern library page HTML structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <load src="../partials/pl-head.html" />
  <title>{Component} — Cena Health</title>
</head>
<body>
  <div style="display: flex; min-height: 100vh;">
    <load src="../partials/pl-nav.html" />
    <main class="pl-main">
      <header class="pl-page-header">
        <h1 class="pl-page-title">{Component}</h1>
        <p class="pl-page-description">...</p>
      </header>
      <load src="../components/{name}.html" />
    </main>
  </div>
  <load src="../partials/pl-scripts.html" />
</body>
</html>
```

---

## Pattern library nav — active state

`pl-scripts.html` contains a script that sets `active` class on the current page's nav link. The active state CSS is in `pl-head.html`:

```css
.pl-nav-link.active {
  background: var(--color-teal-900);
  color: var(--color-teal-400);
  font-weight: 500;
}
```

The script matches `window.location.pathname` filename against each `.pl-nav-link` href. **Do not remove this script.**

Nav section conventions for new links:
- **Foundations** — colors, typography, spacing, motion
- **Primitives** — atomic interactive elements: buttons, inputs, alerts, badges, tags
- **Layout** — structural containers: cards, panels, grids
- **Navigation** — nav bars, sidebars, tabs, breadcrumbs
- **Overlays** — modals, dropdowns, toasts, tooltips
- **Data** — tables, empty states, pagination, skeletons
- **Slides** — slide deck components

---

## JavaScript rules

- **Vanilla JS only.** No Preline, no jQuery, no component framework.
- Component demo JS lives in the component HTML file as an IIFE: `(function() { ... })()`
- Do not add `<script src="...">` tags to component files — inline only
- `pl-scripts.html` handles the active nav state script — add page-level shared scripts here
- Never use `localStorage` or `sessionStorage`

---

## Accessibility requirements for every component

- WCAG AA minimum. AAA for primary/secondary text.
- Dual-cue for all success states: icon + text label, never color alone.
- Touch targets: 44×44px minimum for all interactive elements.
- Focus ring: `box-shadow: 0 0 0 2px var(--color-surface-page), 0 0 0 4px var(--color-border-focus)` — match the inner ring to the component's background on colored surfaces.
- `aria-label` on icon-only buttons.
- Appropriate `role` and `aria-live` on alert/status components.
- Every motion component needs `@media (prefers-reduced-motion: reduce)` override.

---

## Build and verification

- Dev server: `npm run dev` → `http://localhost:5174`
- Always verify at `http://localhost:5174` — never a different port (`strictPort: true`)
- CSS-only build: `npm run build:css` → `dist/cena-health.css`
- Full build: `npm run build`

---

## Verification checklist

After every build task:

- [ ] Dev server at `http://localhost:5174` — not any other port
- [ ] All CSS wrapped in `@layer components` (or `@layer base` for resets)
- [ ] No raw CSS rules without at least one CSS property (tree-shaking safety)
- [ ] All values use semantic tokens — no raw hex, no hardcoded px
- [ ] Density inherited from parent `data-density` — no per-component padding overrides
- [ ] `src/css/main.css` updated with new `@import` (alphabetically)
- [ ] `pattern-library/components/{name}.html` created
- [ ] `pattern-library/pages/{name}.html` created
- [ ] `pattern-library/partials/pl-nav.html` updated with new nav link
- [ ] `pattern-library/pages/index.html` updated with new card
- [ ] All animated components include `@media (prefers-reduced-motion: reduce)` block
- [ ] Dual-cue on all success states (icon + text label)
- [ ] `npm run build:css` completes without error

---

## Completion report format

After every task, output this:

```
## Completion Report — {TASK-ID}

- Files created: [list]
- Files modified: [list]
- New CSS classes added: [list]
- Token names used: [list]
- Judgment calls: [list, or "none"]
- Reduced motion added: yes / no
- Build passes: yes / no
- Items deferred or incomplete: [list, or "none"]
```

Then provide the git commands:
```bash
git add -A
git commit -m "{description of what was built}"
```

---

## Where to find the full system

- Brand brief: `_brief/brand-brief.md`
- Color tokens spec: `_tokens/color.md` and `src/css/tokens-color.css`
- Typography spec: `_tokens/typography.md` and `src/css/tokens-typography.css`
- Spacing spec: `_tokens/spacing.md` and `src/css/tokens-spacing.css`
- Motion spec: `_tokens/motion.md` and `src/css/tokens-motion.css`
- Component specs: `components/ui/` and `components/slides/`
- Design principles: `principles/design-principles.md`
- Coherence notes: `principles/coherence-notes.md`
- Accessibility audit: `audits/accessibility-audit.md`
- Outstanding work queue: `ROADMAP.md §Outstanding Work`
- Agent roles: `.agents/agent-roles.md`
- Full project context: `.agents/PROJECT-CONTEXT.md`
