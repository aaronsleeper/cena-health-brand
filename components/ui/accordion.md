# Cena Health — Accordion Component Spec

_Design specification for standalone accordion. All values reference named semantic tokens._

---

## 1. Overview

Standalone accordion for expandable content sections. Preline-backed (`hs-accordion`). The sidebar already has accordion styles scoped to `.sidebar-nav-item` — this component provides a general-purpose accordion for use anywhere.

---

## 2. Visual Properties

### Toggle Button

| Property | Value |
|----------|-------|
| **Layout** | Flex row, space-between, centered |
| **Padding** | `space-3` vertical × `space-4` horizontal |
| **Font** | `text-sm`, Medium 500 |
| **Color** | `color-text-primary` |
| **Background** | transparent |
| **Border** | none |
| **Border-radius** | `radius-md` |
| **Hover** | `color-surface-primary` background |

### Active Toggle

| Property | Value |
|----------|-------|
| **Color** | `color-text-brand` |

### Chevron

- 16px icon, 60% opacity
- Rotates: down when closed, up when open

### Content

- Preline manages visibility via `.hs-accordion-content`
- Height transition for smooth expand/collapse

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.accordion` | Wrapper for standalone accordion items |
| `.accordion-item` | Individual accordion (wraps `hs-accordion`) |
| `.accordion-toggle` | Styled trigger button |
| `.accordion-content` | Content area |
| `.accordion-chevron-up` | Up chevron (hidden when closed) |
| `.accordion-chevron-down` | Down chevron (hidden when open) |
