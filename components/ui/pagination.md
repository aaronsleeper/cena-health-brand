# Cena Health — Pagination Component Spec

_Design specification for pagination controls. All values reference named semantic tokens._

---

## 1. Overview

Pagination displays result count and page navigation controls. It sits below data tables and list views.

---

## 2. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Layout** | Flex row, space-between, centered vertically |
| **Padding** | `space-3` vertical × `space-6` horizontal |

### Info Text

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-sm` (14px), Normal 400 |
| **Color** | `color-text-tertiary` |

### Controls

| Property | Value |
|----------|-------|
| **Layout** | Flex row, `gap: space-1` |

### Page Button

| Property | Value |
|----------|-------|
| **Size** | 2rem × 2rem (32px — compact touch target) |
| **Font** | Source Sans 3, `text-sm` (14px) |
| **Border-radius** | `radius-md` |

### Page Button States

| State | Background | Color |
|-------|-----------|-------|
| **Default** | transparent | `color-text-secondary` |
| **Hover** | `color-surface-primary` | `color-text-secondary` |
| **Active (current page)** | `color-primary` | `color-on-primary` |
| **Disabled** | transparent, 50% opacity | `color-text-secondary` |

---

## 3. Motion

| Property | Value |
|----------|-------|
| **Hover transition** | `duration-fast`, `ease-transition` |

### Reduced Motion
Transition duration set to `0ms`.

---

## 4. Accessibility

1. Container: `<nav aria-label="Pagination">`.
2. Current page button: `aria-current="page"`.
3. Previous/Next buttons: `aria-label="Previous page"` / `aria-label="Next page"`.
4. Disabled buttons: `disabled` attribute.

---

## 5. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.pagination` | Container with info + controls |
| `.pagination-info` | "Showing X–Y of Z" text |
| `.pagination-controls` | Button group wrapper |
| `.pagination-btn` | Individual page button |
| `.pagination-btn.active` | Current page button |
