# Cena Health — Clipboard Component Spec

---

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.clipboard-btn` | Copy-to-clipboard button |
| `.clipboard-copied` | "Copied!" feedback state |

## Anatomy

```
button.clipboard-btn
  svg (copy icon)
  span "Copy"

button.clipboard-btn.clipboard-copied
  svg (check icon)
  span "Copied!"
```

## Design Tokens

- Base: ghost button styling — transparent background, `var(--color-text-secondary)`
- Hover: `var(--color-surface-secondary)` background
- Copied state: `var(--color-success-text)` color
- Icon size: `var(--icon-sm)`
- Padding: `var(--space-1) var(--space-2)`
- Border radius: `var(--radius-sm)`
- Transition: `var(--duration-fast) var(--ease-transition)`
