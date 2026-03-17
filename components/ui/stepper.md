# Cena Health — Stepper Component Spec

---

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.stepper` | Horizontal flex container for step items |
| `.stepper-item` | Individual step (circle + label + connector) |
| `.stepper-item-active` | Current step — teal circle outline |
| `.stepper-item-complete` | Completed step — teal filled circle with check |
| `.stepper-circle` | Numbered circle indicator |
| `.stepper-label` | Text label below circle |
| `.stepper-connector` | Horizontal line between steps |

## Anatomy

```
.stepper
  .stepper-item.stepper-item-complete
    .stepper-circle  (check icon)
    .stepper-label   "Account"
  .stepper-connector
  .stepper-item.stepper-item-active
    .stepper-circle  "2"
    .stepper-label   "Profile"
  .stepper-connector
  .stepper-item
    .stepper-circle  "3"
    .stepper-label   "Review"
```

## Design Tokens

- Circle size: 2rem (32px)
- Circle border: 2px solid
- Active: `var(--color-primary)` border, `var(--color-primary)` text
- Complete: `var(--color-primary)` background, `var(--color-on-primary)` check icon
- Upcoming: `var(--color-border-default)` border, `var(--color-text-tertiary)` text
- Connector: 1px solid `var(--color-border-default)`, flex-1
- Complete connector: `var(--color-primary)`
- Label: `var(--text-xs)`, `var(--color-text-secondary)`
- Active label: `var(--color-text-primary)`, font-weight 600
