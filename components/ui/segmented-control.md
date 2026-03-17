# Cena Health — Segmented Control Component Spec

_Design specification for segmented controls and view toggles. All values reference named semantic tokens._

---

## 1. Overview

Segmented controls let users switch between mutually exclusive views or modes. Two variants share the same visual treatment: text-label segmented controls and icon-only view toggles.

---

## 2. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Display** | `inline-flex` |
| **Border** | 1px solid `color-border-default` |
| **Border-radius** | `radius-md` |
| **Overflow** | `hidden` (container handles rounding) |

### Button

| Property | Value |
|----------|-------|
| **Padding** | `space-1-5` vertical × `space-3` horizontal |
| **Font** | Source Sans 3, `text-sm` (14px), Normal 400 |
| **Background** | `color-surface-page` |
| **Color** | `color-text-secondary` |
| **Border-radius** | 0 (container handles rounding) |
| **Separator** | 1px right border `color-border-default` (last child: none) |

### Button States

| State | Background | Color | Weight |
|-------|-----------|-------|--------|
| **Default** | `color-surface-page` | `color-text-secondary` | 400 |
| **Hover** | `color-surface-primary` | `color-text-secondary` | 400 |
| **Active** | `color-surface-teal` | `color-text-brand` | 500 |

---

## 3. View Toggle Variant

Same as segmented control but with icon-only buttons. Must have `aria-label` on each button.

---

## 4. Motion

| Property | Value |
|----------|-------|
| **Hover transition** | `duration-fast`, `ease-transition` |

### Reduced Motion
Transition duration set to `0ms`.

---

## 5. Accessibility

1. Container: `role="group"` with `aria-label`.
2. Buttons: `aria-pressed="true"` on active button.
3. Icon-only buttons: `aria-label` required.
4. Focus ring: standard Cena focus ring with `z-10` to prevent clipping.

---

## 6. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.segmented-control` | Text-label container |
| `.segmented-control-btn` | Text-label button |
| `.view-toggle` | Icon-only container |
| `.view-toggle-btn` | Icon-only button |
