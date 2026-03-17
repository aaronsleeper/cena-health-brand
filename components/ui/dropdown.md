# Cena Health — Dropdown Component Spec

_Design specification for the Dropdown menu component. All values reference named semantic tokens._

---

## 1. Overview

Dropdowns reveal a list of actions or options from a trigger element. They are the system's primary progressive-disclosure pattern — content that is available but not visible until requested. In clinical contexts, dropdowns appear as action menus on care plan rows, filter selectors on patient lists, and option menus in toolbar areas.

**Types:** Action menu (buttons), Navigation menu (links), Select-like menu (single selection)
**Alignment:** Left (default), Right

---

## 2. Anatomy

```
  [Trigger button ▾]
  ┌─────────────────────────┐
  │  [icon]  Menu item 1    │  ← menu-item
  │  [icon]  Menu item 2    │
  │  ─────────────────────  │  ← divider
  │  Section header         │  ← menu-header
  │  [icon]  Menu item 3    │
  │  [icon]  Danger item    │  ← danger variant
  └─────────────────────────┘
```

### Parts

- **Trigger:** Any button or interactive element. The dropdown attaches below it.
- **Menu panel:** Floating container with action/navigation items.
- **Menu item:** A single action or link within the menu. May have a leading icon.
- **Menu header:** Non-interactive section label within the menu.
- **Divider:** A thin horizontal rule separating item groups.
- **Danger item:** A menu item for destructive actions, styled with error color.

---

## 3. Visual Properties

### Menu Panel

| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` |
| **Border** | 1px `color-border-default` |
| **Border radius** | `radius-md` (8px) |
| **Shadow** | `shadow-md` — floating element, shadow appropriate |
| **Min-width** | 12rem (192px) |
| **Max-width** | 20rem (320px) |
| **Max-height** | 20rem (320px) — scrolls beyond |
| **Padding** | `space-1` vertical (4px) |
| **Z-index** | 40 |
| **Offset from trigger** | `space-1` (4px) below trigger |

### Menu Item

| Property | Value |
|----------|-------|
| **Padding** | `space-2` vertical × `space-3` horizontal |
| **Font** | Source Sans 3, `text-sm` (14px), Regular 400 |
| **Color** | `color-text-primary` |
| **Icon** | Optional leading icon at `icon-sm` (16px), `color-text-secondary` |
| **Gap** | `space-2` between icon and label |
| **Border radius** | `radius-sm` (4px) — inset within the panel |
| **Margin** | 0 `space-1` (horizontal inset from panel edge) |

### Menu Header

| Property | Value |
|----------|-------|
| **Padding** | `space-2` vertical × `space-3` horizontal |
| **Font** | Source Sans 3, `text-2xs` (10px), SemiBold 600, uppercase |
| **Letter spacing** | `tracking-widest` (0.08em) |
| **Color** | `color-text-tertiary` |
| **Margin** | 0 `space-1` |

### Divider

| Property | Value |
|----------|-------|
| **Height** | 1px |
| **Color** | `color-border-default` |
| **Margin** | `space-1` vertical |

---

## 4. States

### Menu Item States

| State | Background | Text | Icon |
|-------|-----------|------|------|
| **Default** | transparent | `color-text-primary` | `color-text-secondary` |
| **Hover** | `color-surface-primary` | `color-text-primary` | `color-text-primary` |
| **Focus** | `color-surface-primary` | `color-text-primary` | `color-text-primary` |
| **Active** | `color-surface-secondary` | `color-text-primary` | `color-text-primary` |
| **Disabled** | transparent | `color-text-disabled` | `color-text-disabled` |

### Danger Item States

| State | Text | Icon |
|-------|------|------|
| **Default** | `color-error-text` | `color-error-base` |
| **Hover** | `color-error-text` | `color-error-base` (bg: `color-error-bg`) |

---

## 5. Motion Behavior

Per motion.md §3.3:

### Open

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform origin** | Top left (or top right for right-aligned) |
| **Scale** | `scaleY(0.9)` → `scaleY(1)` |
| **Opacity** | 0 → 1 |

### Close

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-fast` (120ms) |
| **Scale** | `scaleY(1)` → `scaleY(0.95)` |
| **Opacity** | 1 → 0 |

### Reduced Motion

- Open/close: instant show/hide, no animation.

---

## 6. Interaction

### Open triggers
- Click on trigger button (toggle)
- Enter or Space on focused trigger

### Close triggers
- Click on a menu item (action fires, then close)
- Click outside the menu
- `Escape` key
- Click trigger again (toggle)

### Keyboard navigation
- `ArrowDown` — move focus to next item (skip headers and dividers)
- `ArrowUp` — move focus to previous item
- `Home` — focus first item
- `End` — focus last item
- `Enter` or `Space` — activate focused item
- `Tab` — close menu and move focus to next element in page

---

## 7. Accessibility

1. **Trigger:** `aria-haspopup="true"`, `aria-expanded="false/true"`.
2. **Menu panel:** `role="menu"`.
3. **Menu items:** `role="menuitem"`.
4. **Menu headers:** `role="presentation"` (not focusable).
5. **Disabled items:** `aria-disabled="true"`, not focusable.
6. **Focus management:** On open, focus moves to first menu item. On close, focus returns to trigger.

---

## 8. Alignment

- **Left-aligned (default):** Menu left edge aligns with trigger left edge. `transform-origin: top left`.
- **Right-aligned:** Menu right edge aligns with trigger right edge. `transform-origin: top right`. Use for triggers near the right viewport edge.

---

## 9. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.dropdown` | Wrapper (trigger + menu positioning context) |
| `.dropdown-menu` | The floating menu panel |
| `.dropdown-menu-right` | Right-aligned menu |
| `.dropdown-item` | Action or link within the menu |
| `.dropdown-item-danger` | Destructive action item |
| `.dropdown-header` | Non-interactive section label |
| `.dropdown-divider` | Horizontal rule separator |
| `.dropdown-item-icon` | Leading icon within a menu item |
| `.dropdown-enter` | Open animation |
| `.dropdown-exiting` | Close animation |
