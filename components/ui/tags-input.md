# Cena Health — Tags Input Component Spec

---

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.tags-input` | Container styled like an input field, wraps tags + text input |
| `.tags-input-field` | Inline text input for typing new tags |
| `.tags-input-tag` | Individual tag (badge-like) with dismiss button |

## Anatomy

```
.tags-input
  .tags-input-tag
    span "Diabetes"
    button (dismiss)
  .tags-input-tag
    span "Hypertension"
    button (dismiss)
  input.tags-input-field[placeholder="Add tag..."]
```

## Design Tokens

- Container: inherits `.input-field` border/background styling, uses flex-wrap
- Container padding: `var(--space-1-5) var(--space-2)`
- Tag: uses badge-like styling — `var(--color-surface-teal)`, `var(--color-text-brand)`
- Tag padding: `var(--space-0-5) var(--space-2)`
- Tag radius: `var(--radius-sm)`
- Input: border-none, background transparent, flex-1
- Focus: container shows focus ring
