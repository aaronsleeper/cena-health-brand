# COMP-02: Navbar

_Generated: 2026-03-17_
_Backlog ref: Priority 1.2_

---

## Objective

Build the top horizontal navigation bar component. This is distinct from the
sidebar — it sits at the top of the viewport and contains the app logo/brand,
primary nav links, and right-side actions (search, notifications, avatar).

---

## Pre-Build Audit Gate

Read these files completely before writing anything:

1. `.agents/skills/pl-component-builder/SKILL.md`
2. `src/css/components/sidebar.css` — reference for how nav chrome is handled
3. `pattern-library/components/sidebar.html` — reference for section structure
4. `pattern-library/partials/pl-nav.html` — find exact insertion point (after Sidebar)
5. `CLAUDE.md` — full rules

---

## Pre-Build Plan (output before writing any file)

Before writing a single file, output a plan covering:
- Classes you will define
- Mobile behavior approach (hamburger toggle via Preline `data-hs-collapse`)
- Sections to show in the PL page
- JS behavior required
- The 7-file checklist

---

## What it is

A fixed or sticky top bar that spans the full viewport width. Contains:
- Left: logo/brand name (`.navbar-brand`)
- Center (optional): primary nav links (`.navbar-nav`, `.navbar-nav-item`)
- Right: action buttons — search icon, notifications badge, avatar

On mobile (<768px): nav links collapse behind a hamburger toggle using
Preline's `data-hs-collapse` attribute (same JS pattern as the sidebar's
mobile toggle). The toggle button gets `data-hs-collapse` pointing to the
nav list's `id`.

### CSS — `src/css/components/navbar.css`

```
@layer components {
  .navbar { ... }              /* fixed top, full-width, z-index 40 */
  .navbar-inner { ... }        /* max-width container, flex row */
  .navbar-brand { ... }        /* logo + name, left */
  .navbar-nav { ... }          /* center/right link list, horizontal */
  .navbar-nav-item { ... }     /* individual nav link */
  .navbar-nav-item.active { ... }
  .navbar-actions { ... }      /* right-side icon group */
  .navbar-divider { ... }      /* vertical separator in actions */
  .navbar-mobile-toggle { ... } /* hamburger button, visible <md */
  .navbar-collapse { ... }     /* the collapsible nav list on mobile */
}
```

### Design values

- Background: `var(--color-surface-page)` — warm off-white
- Border-bottom: `1px solid var(--color-border-default)`
- Height: 64px (use `min-height: 4rem`)
- Brand text: `var(--font-display)`, `var(--text-sm)`, `font-weight: 700`, `var(--color-text-primary)`
- Nav link: `var(--text-sm)`, `var(--color-text-secondary)`, hover → `var(--color-text-primary)`
- Active nav link: `var(--color-text-brand)`, bottom border `2px solid var(--color-primary)`
- Actions: icon buttons using `.btn-ghost` + `.btn-icon-only` base
- Mobile collapse: slides down with `max-height` transition

### Sections to show

1. **Default** — full navbar with brand, 4 nav links (one active), and action icons
2. **Brand Only** — minimal navbar with just the logo/name and actions (no center nav)
3. **With Notification Badge** — action icons with unread count indicator using `.badge`
4. **Mobile (simulated)** — show the collapsed state + open hamburger state side by side
   (use pointer-events simulation in a PL `<style>` block, same pattern as nav.html hover state)
5. **Surface Variants** — navbar on `surface-primary` (slightly elevated)

### JS behavior

Hamburger toggle uses Preline `data-hs-collapse`. No custom JS needed beyond
Preline's autoInit (already handled by `pl-scripts.html`).

---

## Files to create

1. `components/ui/navbar.md`
2. `src/css/components/navbar.css`
3. `src/css/main.css` — add `@import "./components/navbar.css"` alphabetically (after `nav.css`)
4. `pattern-library/components/navbar.html`
5. `pattern-library/pages/navbar.html`
6. `pattern-library/partials/pl-nav.html` — add "Navbar" under Navigation, after "Sidebar"
7. `pattern-library/pages/index.html` — add index card

---

## Known constraints

- `z-index: 40` — below modals (50) and toasts (60), above most content
- No raw hex, no hardcoded px
- Touch target on hamburger: 44×44px minimum
- Use `data-hs-collapse` for mobile toggle — do not write custom toggle JS
- Active state must use `tab-active` pattern if Preline tabs drive it, or a
  manually applied `.active` class for the static documentation demo
- Use `pl-row`, `pl-stack` etc. — no inline style layout wrappers in the PL HTML

---

## Verification

1. `npm run build:css` — must pass
2. `http://localhost:5174/pattern-library/pages/navbar.html` — all sections render
3. Active nav link shows teal bottom border
4. Mobile collapse demo shows both open and closed states clearly
5. Nav link appears in sidebar and gets `active` class

---

## Completion Report

```
## Completion Report — COMP-02

- Files created: [list]
- Files modified: [list]
- New CSS classes: [list]
- Judgment calls: [list or "none"]
- Reduced motion added: yes / no
- Build passes: yes / no
- Items deferred: [list or "none"]
```

```bash
git add -A
git commit -m "feat: navbar component"
```

**Verify at:** http://localhost:5174/pattern-library/pages/navbar.html

---
_Next task after Aaron confirms: COMP-03 (Datepicker + Time Picker)_
