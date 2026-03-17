# Cena Health — Activity Feed Component Spec

_Design specification for activity feed rows. All values reference named semantic tokens._

---

## 1. Overview

Activity feed rows display chronological events in a simple list format inside cards. Each row has an icon, description, and timestamp.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Layout** | Flex row, centered vertically, `gap: space-3` |
| **Padding** | `space-3` vertical × `space-4` horizontal |
| **Border-bottom** | 1px `color-border-default` (last row: none) |
| **Hover** | `color-surface-primary` background |

### Icon
- `icon-sm` (16px), `shrink-0`, colored per event type

### Description
- `text-sm`, `color-text-primary`, `flex: 1`

### Timestamp
- `text-xs`, `color-text-tertiary`, `shrink-0`

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.activity-feed-row` | Single feed event row |
