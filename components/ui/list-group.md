# Cena Health — List Group Component Spec

---

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.list-group` | Container with border and rounded corners |
| `.list-group-item` | Individual list item |
| `.list-group-item-action` | Interactive item with hover/active states |

## Anatomy

```
.list-group
  .list-group-item          "Static item"
  .list-group-item-action   "Clickable item"
  .list-group-item          "Another item"
```

## Design Tokens

- Border: 1px solid `var(--color-border-default)`
- Border radius: `var(--radius-md)`
- Item padding: `var(--space-3) var(--space-4)`
- Item border-bottom: 1px solid `var(--color-border-default)` (not last)
- Background: `var(--color-surface-page)`
- Action hover: `var(--color-surface-primary)`
- Action active: `var(--color-surface-secondary)`
- Text: `var(--text-sm)`, `var(--color-text-primary)`
