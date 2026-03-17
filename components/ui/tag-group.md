# Cena Health — Tag Group Component Spec

_Design specification for tag groups. All values reference named semantic tokens._

---

## 1. Overview

Tag groups display categorized sets of badges/tags with a label. Used on detail pages to show allergens, diet orders, diagnoses, and other multi-value fields. Tags can optionally be removable.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Layout** | Flex row, wrap, centered vertically |
| **Gap** | `space-2` |
| **Padding** | `space-2` vertical |
| **Border-bottom** | 1px `color-border-default` (last group: none) |

### Label

| Property | Value |
|----------|-------|
| **Font** | `text-xs`, 500, uppercase, `tracking-wide` |
| **Color** | `color-text-tertiary` |
| **Min-width** | 7rem |

### Removable Badge

Uses existing `.badge` classes with a dismiss button.

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.tag-group` | Row with label + tags |
| `.tag-group-label` | Category label |
