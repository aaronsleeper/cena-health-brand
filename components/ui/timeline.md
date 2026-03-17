# Cena Health — Timeline Component Spec

_Design specification for vertical timelines. All values reference named semantic tokens._

---

## 1. Overview

Vertical timeline for displaying chronological events with type-coded icon circles and a connecting line. Used on patient detail pages for care history.

---

## 2. Visual Properties

### Event Row
- Flex row, `gap: space-4`, bottom padding `space-6` (last: none)

### Left Column (icon + connector)
- Width: 2rem, flex column, centered
- Icon circle: 2rem × 2rem, `rounded-full`, centered icon
- Connector: 1px wide, `color-border-default`, flex-1 (hidden on last event)

### Icon Circle Variants
| Variant | Background | Icon color |
|---------|-----------|------------|
| enrollment | `color-surface-teal` | `color-primary` |
| clinical | `color-info-bg` | `color-info-base` |
| delivery | `color-info-bg` | `color-info-base` |
| alert | `color-warning-bg` | `color-warning-base` |
| careplan | `color-surface-primary` | `color-text-tertiary` |

### Event Body
- Flex-1, min-width 0
- Header: flex row, gap, wrap, badges + actor text
- Preview: `text-sm`, `color-text-secondary`, truncated
- Detail: `text-sm`, `color-text-secondary`, multi-line

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.timeline-list` | Container |
| `.timeline-event` | Single event row |
| `.timeline-left` | Icon + connector column |
| `.timeline-connector` | Vertical line |
| `.timeline-icon-circle` | Base icon circle |
| `.timeline-icon-circle-{type}` | Color variants |
| `.timeline-event-body` | Content area |
| `.timeline-event-header` | Badge + actor row |
| `.timeline-event-preview` | Truncated summary |
| `.timeline-event-detail` | Expanded detail |
