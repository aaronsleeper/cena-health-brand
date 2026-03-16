# COMP-UI-01: Alert Component — CSS Implementation + Pattern Library Page

_Generated: 2026-03-16_
_Priority: First in outstanding component queue (ROADMAP.md §4 "Expanded component library — UI track")_

---

## Context

The alert component is fully designed. The spec at `components/ui/alert.md` is complete and audited. No design decisions are open. This task translates the spec into CSS and pattern library markup only.

**What exists:**
- `components/ui/alert.md` — full spec (anatomy, variants, states, density, motion, accessibility, CSS class reference)
- `src/css/components/button.css` — model for CSS file structure and `@layer components` pattern

**What does not exist:**
- `src/css/components/alert.css`
- `pattern-library/components/alert.html`
- `pattern-library/pages/alert.html`

---

## Pre-Build Audit Gate

Before writing any code, read these files in full:

1. `components/ui/alert.md` — the authoritative spec. Every value in the CSS must come from here.
2. `src/css/components/button.css` — follow its file structure exactly (`@layer components`, section comments, reduced motion block at bottom)
3. `src/css/tokens-color.css` — confirm the exact token names for feedback colors (`--color-info-bg`, `--color-info-border`, `--color-info-base`, `--color-info-text`, etc.)
4. `_tokens/motion.md` — confirm duration and easing token names
5. `pattern-library/components/` — read any existing component HTML file for the `@component-meta` block format and section structure
6. `pattern-library/partials/pl-nav.html` — note the exact structure for adding a nav link
7. `CLAUDE.md` — extract the five rules and the four-place update checklist

---

## Prompt 1: CSS — `src/css/components/alert.css`

Read `components/ui/alert.md` and `src/css/components/button.css` before writing.

Create `src/css/components/alert.css` implementing the full alert spec. Structure and requirements:

### File structure (follow button.css exactly)

```css
/* ==========================================================================
   Cena Health — Alert Component
   Source: components/ui/alert.md
   ========================================================================== */

@layer components {

  /* Base */
  /* Variants */
  /* Dismiss button */
  /* Density */
  /* Motion — enter */
  /* Motion — exit */
  /* Reduced motion */

}
```

### Base container `.alert`

From spec §2 and §6:
- `display: flex; align-items: flex-start`
- Gap between icon and content: `var(--space-2)` (default density)
- Border-radius: `var(--radius-md)`
- Border: `1px solid` (color set per variant)
- Left accent: `border-left: 3px solid` (color set per variant — NOT the same as the 1px border)
- Padding: `var(--space-3) var(--space-4)` (default density)
- Position: relative (needed for dismiss button absolute positioning if used)

### Variants — four classes

`.alert--info`, `.alert--warning`, `.alert--error`, `.alert--success`

Each variant sets:
- `background-color` — the `-bg` token
- `border-color` — the `-border` token
- `border-left-color` — the `-base` token (overrides the border shorthand for left side)

Example pattern (info):
```css
.alert--info {
  background-color: var(--color-info-bg);
  border-color: var(--color-info-border);
  border-left-color: var(--color-info-base);
}
```

### Icon `.alert__icon`

- `flex-shrink: 0`
- `width: var(--icon-md); height: var(--icon-md)` (20px)
- Color set per variant via descendant selector:
  `.alert--info .alert__icon { color: var(--color-info-base); }` etc.
- `margin-top: 1px` — optical alignment to first line of text (matches alert.md §2)

### Content `.alert__content`

- `flex: 1; min-width: 0`
- `display: flex; flex-direction: column; gap: var(--space-1)` (default density)

### Message text `.alert__message`

- `font-family: var(--font-body); font-size: var(--text-sm); font-weight: 500; line-height: var(--leading-body-sm)`
- Color set per variant: `.alert--info .alert__message { color: var(--color-info-text); }` etc.

### Description text `.alert__description`

- `font-family: var(--font-body); font-size: var(--text-sm); font-weight: 400; line-height: var(--leading-body-sm)`
- Color: `var(--color-text-primary)` — same on all variants

### Dismiss button `.alert__dismiss`

From spec §2, §5:
- `flex-shrink: 0; margin-left: auto`
- Visual icon size: `var(--icon-sm)` (16px)
- Interactive touch target: 44×44px via padding (`padding: calc((44px - var(--icon-sm)) / 2)`)
- Resting opacity: set per variant at 70%: `.alert--info .alert__dismiss { color: color-mix(in oklch, var(--color-info-text) 70%, transparent); }`
- Hover: 100% opacity + subtle background fill (color-mix at low %)
- Focus ring: `box-shadow: 0 0 0 2px var(--color-{state}-bg), 0 0 0 4px var(--color-border-focus)`
- Active: `scale(0.95)`
- `.alert:not(.alert--dismissible) .alert__dismiss { display: none; }`

### Density (spec §6)

```css
[data-density="compact"] .alert {
  padding: var(--space-2) var(--space-3);
}

[data-density="compact"] .alert__content {
  gap: var(--space-1);
}

[data-density="comfortable"] .alert {
  padding: var(--space-4) var(--space-5);
}

[data-density="comfortable"] .alert__content {
  gap: var(--space-1-5);
}

[data-density="compact"] .alert__icon,
[data-density="comfortable"] .alert__icon,
[data-density="compact"] .alert__message,
[data-density="comfortable"] .alert__message {
  /* font-size, icon size, and colors do NOT change with density */
}
```

Left accent border-left-width stays 3px on all densities.

### Motion — enter animation (spec §8.1)

```css
@keyframes alert-enter {
  from {
    opacity: 0;
    transform: translateY(var(--space-1));
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 200px; /* sufficient ceiling — alert never approaches this */
  }
}

.alert {
  animation: alert-enter var(--duration-normal) var(--ease-enter) forwards;
}
```

### Motion — exit (spec §8.2)

Exit is JS-driven (user dismisses). Provide the exit class for JS to apply:

```css
.alert--exiting {
  animation: alert-exit var(--duration-fast) var(--ease-exit) forwards;
}

@keyframes alert-exit {
  from {
    opacity: 1;
    max-height: 200px;
    margin-bottom: 0;
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  to {
    opacity: 0;
    max-height: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
}
```

### Reduced motion (spec §8.3)

```css
@media (prefers-reduced-motion: reduce) {
  .alert {
    animation-duration: var(--duration-fast);
    /* No translate, no max-height animation */
  }

  @keyframes alert-enter {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .alert--exiting {
    animation: none;
    display: none;
  }
}
```

### Known constraints

- All values must use semantic CSS custom properties — no raw hex, no hardcoded pixels
- `@layer components` wrapper required
- `border-left` 3px accent requires overriding the `border` shorthand's left side — set `border` first, then `border-left-color` separately in variant rules
- Confirm token names exist in `src/css/tokens-color.css` before using them

---

## Prompt 2: Import — `src/css/main.css`

Read `src/css/main.css` and find the Components `@import` section. Add:

```css
@import "./components/alert.css";
```

Alphabetically relative to the other component imports. Do not modify any other line in the file.

---

## Prompt 3: Component HTML — `pattern-library/components/alert.html`

Read an existing component HTML file from `pattern-library/components/` before writing. Follow its `@component-meta` block format and section structure exactly.

Create `pattern-library/components/alert.html` with these sections:

### Section 1: Variants — Persistent

Four variants (info, warning, error, success) on `surface-page` background. Each with icon, message text, and optional description.

```html
<section class="pl-section" data-pl-section="variants-persistent">
  <h2 class="pl-section-title">Variants — Persistent</h2>
  <div class="pl-canvas" style="background: var(--color-surface-page);">
    <p class="pl-canvas-label">surface-page (#FBFAF8)</p>
    <div class="pl-stack">
      <!-- info -->
      <div class="alert alert--info" role="status" aria-live="polite">
        <span class="alert__icon"><!-- icon injected by script --></span>
        <div class="alert__content">
          <p class="alert__message">Info — A required form field has been pre-filled.</p>
          <p class="alert__description">Review the value before submitting.</p>
        </div>
      </div>
      <!-- warning, error, success — same structure, appropriate role/aria-live -->
    </div>
  </div>
</section>
```

Use appropriate `role` and `aria-live` per spec §3:
- Info, Success: `role="status"` `aria-live="polite"`
- Warning, Error: `role="alert"` `aria-live="assertive"`

### Section 2: Variants — Dismissible

Same four variants with `.alert--dismissible` and a dismiss button.

```html
<div class="alert alert--info alert--dismissible" role="status" aria-live="polite">
  <span class="alert__icon"></span>
  <div class="alert__content">
    <p class="alert__message">Info — Your session will expire in 5 minutes.</p>
  </div>
  <button class="alert__dismiss" type="button" aria-label="Dismiss">
    <!-- X icon injected by script -->
  </button>
</div>
```

### Section 3: Surface Matrix

Show one alert variant (warning) on all five surfaces to demonstrate surface behavior from spec §7.

### Section 4: Density

Show a single alert (info) at compact, default, and comfortable density.

### Component script

At the bottom of the file, an IIFE that:
1. Injects appropriate SVG icons into `.alert__icon` based on parent variant class
2. Handles dismiss button clicks: adds `.alert--exiting` class, listens for `animationend`, removes the element

```html
<script>
(function () {
  // Icon injection
  const icons = {
    'alert--info': '<svg ...>',    /* info-circle outlined, 20px */
    'alert--warning': '<svg ...>', /* warning-triangle outlined, 20px */
    'alert--error': '<svg ...>',   /* error-circle outlined, 20px */
    'alert--success': '<svg ...>'  /* check-circle outlined, 20px */
  };

  document.querySelectorAll('.alert__icon').forEach(function (el) {
    var alert = el.closest('.alert');
    var variant = Object.keys(icons).find(function (k) { return alert.classList.contains(k); });
    if (variant) el.innerHTML = icons[variant];
  });

  // Dismiss
  document.querySelectorAll('.alert__dismiss').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var alert = btn.closest('.alert');
      alert.classList.add('alert--exiting');
      alert.addEventListener('animationend', function () { alert.remove(); }, { once: true });
    });
  });
})();
</script>
```

**Note on SVG icons:** Use simple inline SVG paths for the four status icons. Keep strokes at `stroke-width="2"`, `stroke="currentColor"`, `fill="none"`, `viewBox="0 0 20 20"`. The `color` on the `.alert__icon` element (set per variant in CSS) will propagate via `currentColor`.

---

## Prompt 4: Page — `pattern-library/pages/alert.html`

Read an existing page from `pattern-library/pages/` before writing. Follow its structure exactly.

Create `pattern-library/pages/alert.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <load src="../partials/pl-head.html" />
  <title>Alert — Cena Health</title>
</head>
<body>
  <div style="display: flex; min-height: 100vh;">
    <load src="../partials/pl-nav.html" />
    <main class="pl-main">
      <header class="pl-page-header">
        <h1 class="pl-page-title">Alert</h1>
        <p class="pl-page-description">
          Inline feedback messages for system status, warnings, errors, and confirmations.
          Distinct from toasts, which float above content.
        </p>
      </header>
      <load src="../components/alert.html" />
    </main>
  </div>
  <load src="../partials/pl-scripts.html" />
</body>
</html>
```

---

## Prompt 5: Nav + Index

### 5a. `pattern-library/partials/pl-nav.html`

Find the **Primitives** section. Add a nav link for Alert in alphabetical order among the primitives:

```html
<li><a href="../pages/alert.html" class="sidebar-nav-item">
  <i class="..."></i> Alert
</a></li>
```

Use the same icon style as other primitive nav links.

### 5b. `pattern-library/pages/index.html`

Add a card for Alert in the index grid. Follow the existing card structure exactly — read the file before editing.

---

## Verification

After all prompts complete:

- [ ] `npm run build:css` completes without error
- [ ] Open `http://localhost:5174/pattern-library/pages/alert.html`
- [ ] All four variants render with correct background colors and left accent borders
- [ ] Left accent is visually thicker than the surrounding border (3px vs 1px)
- [ ] Dismiss buttons are functional — click removes the alert with fade animation
- [ ] Surface matrix section shows alert adapting across all five surfaces
- [ ] Density section shows three size variants of the same alert
- [ ] Alert nav link in sidebar is present under Primitives
- [ ] `dist/cena-health.css` includes alert styles after rebuild

---

## Completion Report

```
## Completion Report — COMP-UI-01

- Files created: [list]
- Files modified: [list]
- Token names used (verify these exist in tokens-color.css): [list]
- SVG icons used (source): [describe]
- Judgment calls: [list, or "none"]
- Reduced motion tested: yes / no
- Build passes: yes / no — dist size: [KB]
- Items deferred or incomplete: [list, or "none"]
```

Then:
```bash
git add -A
git commit -m "comp: alert component — CSS implementation, pattern library page"
```

---
**View result:** http://localhost:5174/pattern-library/pages/alert.html
