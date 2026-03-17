# Context Menu

## Purpose

A menu that appears at the cursor position on right-click. Visually identical to
`.dropdown-menu` — reuses the same item, divider, header, and danger item classes.
The difference is positioning: fixed at cursor coordinates rather than relative to
a trigger element.

## When to use

- Right-click actions on table rows, cards, or list items
- Power-user shortcut menus in data-dense views

## When not to use

- Click-triggered action lists — use Dropdown
- Touch-only interfaces — context menus have no mobile equivalent

## Anatomy

```
.context-menu
  .dropdown-header       (reused from dropdown)
  .dropdown-item         (reused from dropdown)
  .dropdown-item-danger  (reused from dropdown)
  .dropdown-divider      (reused from dropdown)
```

## Classes

| Class | Purpose |
|---|---|
| `.context-menu` | Fixed position container, hidden by default |
| `.context-menu.open` | Visible state |

All inner elements reuse dropdown classes.

## Design values

- `position: fixed` — works inside scrolled containers
- `z-index: 45` — above most content, below modals
- Same visual as dropdown-menu: surface-page bg, border-default, shadow-md, radius-md
- `min-width: 12rem`
- `padding: var(--space-1) 0`

## JS behavior

- `contextmenu` event on `.context-menu-zone` → prevent default, position at clientX/clientY
- Click anywhere or Escape → close
- Position clamping: flip if menu would overflow viewport edges
