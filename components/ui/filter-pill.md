# Cena Health — Filter Pill Component Spec

_Design specification for filter pills. All values reference named semantic tokens._

---

## 1. Overview

Filter pills are toggle buttons used to filter data views. They appear in toolbars and above data tables. One pill may be active at a time (radio behavior) or multiple (checkbox behavior) depending on context.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Display** | `inline-flex`, centered |
| **Padding** | `space-1` vertical × `space-3` horizontal |
| **Font** | Source Sans 3, `text-sm` (14px), Normal 400 |
| **Border** | 1px solid `color-border-default` |
| **Border-radius** | `radius-full` (pill shape) |
| **Gap** | `space-1-5` (between icon and label) |

### States

| State | Background | Border | Color | Weight |
|-------|-----------|--------|-------|--------|
| **Default** | `color-surface-page` | `color-border-default` | `color-text-secondary` | 400 |
| **Hover** | `color-surface-primary` | `color-border-default` | `color-text-secondary` | 400 |
| **Active** | `color-surface-teal` | `color-border-brand` | `color-text-brand` | 500 |

---

## 3. Motion

| Property | Value |
|----------|-------|
| **Hover transition** | `duration-fast`, `ease-transition` |

### Reduced Motion
Transition duration set to `0ms`.

---

## 4. Accessibility

1. Use `<button>` elements, not links.
2. `aria-pressed="true"` on active pills for toggle behavior.
3. Focus ring: standard Cena focus ring.

---

## 5. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.filter-pill` | Base filter pill button |
| `.filter-pill.active` | Active/selected state |
