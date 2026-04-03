<!-- Extracted from CLAUDE.md — edit here, not in CLAUDE.md -->

# Pattern library HTML conventions

## Component HTML conventions

Follow `pattern-library/components/alert.html` as the model.

- Open with `@component-meta` comment block: `name`, `category`, `classes`, `spec`, `css`, `when-to-use`, `do-not-use-when`
- Each variant group is `<section class="pl-section" data-pl-section="...">` with `<h2 class="pl-section-title">`
- Canvases: `<div class="pl-canvas" style="background: var(--color-surface-{name});">` with `<p class="pl-canvas-label">`
- Component JS (if any) lives at the bottom of the component file inside `<script>(function() { ... })()</script>`
- No external script files for component demos — inline IIFE only

## Page HTML structure

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

## Nav — active state

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
