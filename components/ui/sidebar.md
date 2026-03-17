# Cena Health — Sidebar Navigation Component Spec

_Design specification for the application sidebar. All values reference named semantic tokens._

---

## 1. Overview

The sidebar provides primary application-level navigation. It is always visible on desktop (lg+) and slides in from the left on mobile via Preline overlay. Accordion sub-navigation supports expandable sections for grouped pages.

**Derived from:** haven-ui sidebar pattern, adapted to Cena token system.

---

## 2. Anatomy

```
┌──────────────────┐
│  [Brand/Logo]    │  ← .app-sidebar-header / .app-sidebar-brand
├──────────────────┤
│  SECTION LABEL   │  ← .sidebar-nav-section
│  ○ Dashboard     │  ← .sidebar-nav-item (active)
│  ○ Patients      │  ← .sidebar-nav-item
│  ○ Care Plans ▾  │  ← .hs-accordion-toggle.sidebar-nav-item
│    ├ Overview    │  ← .sidebar-subnav-item
│    ├ Templates   │  ← .sidebar-subnav-item (active)
│    └ Archive     │  ← .sidebar-subnav-item
│  SECTION LABEL   │
│  ○ Reports       │
│  ○ Settings      │
└──────────────────┘
```

---

## 3. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Position** | Fixed, left 0, top 0, bottom 0 |
| **Width** | 16rem (256px) |
| **Background** | `color-mix(in srgb, var(--sidebar) 42%, transparent)` |
| **Border** | 1px right, `color-border-default` |
| **z-index** | 60 |
| **Padding** | `space-8` top, `space-10` bottom |
| **Overflow** | `overflow-y: auto` |

### Navigation Item

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-sm` (14px), Normal 400 |
| **Padding** | `space-1-5` vertical × `space-3` horizontal |
| **Min-height** | 2.75rem (44px) — WCAG touch target |
| **Gap** | `space-3` between icon and label |
| **Border-radius** | `radius-md` |
| **Icon size** | `icon-md` (20px) |

### Navigation Item States

| State | Color | Background | Weight |
|-------|-------|-----------|--------|
| **Default** | `color-text-secondary` | transparent | 400 |
| **Hover** | `color-text-primary` | `color-surface-primary` | 400 |
| **Active** | `color-text-primary` | `color-surface-primary` | 500 |
| **Disabled** | `color-text-secondary` @ 50% opacity | transparent | 400 |

### Section Label

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-2xs` (10px), Semibold 600, uppercase |
| **Tracking** | `tracking-widest` |
| **Color** | `color-text-tertiary` |
| **Margin** | `space-5` top, `space-2` bottom, `space-3` left |

### Sub-Navigation Item

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-xs` (13px), Normal 400 |
| **Min-height** | 2.25rem (36px) |
| **Left border** | 3px solid transparent (active: `color-primary`) |
| **Border-radius** | 0 right-md right-md 0 |

### Sub-Navigation Item States

| State | Color | Background | Border-left |
|-------|-------|-----------|-------------|
| **Default** | `color-text-secondary` | transparent | transparent |
| **Hover** | `color-text-primary` | `color-surface-primary` | `color-border-strong` |
| **Active** | `color-text-brand` | `color-surface-teal` | `color-primary` |

---

## 4. Mobile Behavior

- Mobile (< lg): sidebar is off-screen left (`translateX(-100%)`), triggered via Preline overlay (`data-hs-overlay`)
- Desktop (lg+): sidebar is always visible (`translateX(0)`)
- **Never** use `hidden lg:block` — use `translate-x` for mobile visibility
- Mobile toggle bar is sticky at top, hidden at lg+

---

## 5. Accordion Sub-Navigation

- Preline `hs-accordion` handles expand/collapse
- Chevron icons toggle via `.hs-accordion.active` state
- `data-hs-accordion-always-open` allows multiple sections expanded simultaneously
- Accordion content uses `transition: height` for smooth expansion

---

## 6. Scrollbar

| Property | Value |
|----------|-------|
| **Width** | 0.5rem (8px) |
| **Thumb** | `rounded-full`, `color-warm-600` |
| **Track** | `color-surface-primary` |

---

## 7. Motion

| Property | Value |
|----------|-------|
| **Sidebar slide** | `duration-normal`, `ease-transition` |
| **Nav item hover** | `duration-fast`, `ease-transition` |
| **Accordion expand** | `duration-normal`, `ease-transition` |

### Reduced Motion

All transitions and slide animations set to `0ms`.

---

## 8. Accessibility

1. **`<nav aria-label="...">`** on `.app-sidebar-nav`
2. **`aria-current="page"`** on the active nav item
3. **44px minimum** touch target on all nav items
4. **Focus ring** on all interactive elements
5. **`aria-label`** on mobile toggle button
6. **`aria-expanded`** managed by Preline on accordion toggles
7. **Skip link** should bypass sidebar to main content (app-level concern)

---

## 9. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.app-sidebar` | Fixed sidebar container |
| `.app-sidebar-header` | Header area with brand |
| `.app-sidebar-brand` | Brand text/logo link |
| `.app-sidebar-nav` | `<nav>` wrapper |
| `.sidebar-nav-list` | `<ul>` list container |
| `.sidebar-nav-item` | Primary nav link |
| `.sidebar-nav-section` | Uppercase section label |
| `.sidebar-subnav-list` | Accordion sub-nav `<ul>` |
| `.sidebar-subnav-item` | Sub-nav link |
| `.sidebar-toggle-bar` | Mobile-only sticky toggle bar |
| `.sidebar-toggle-btn` | Hamburger toggle button |
