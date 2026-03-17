# Cena Health — Empty State Component Spec

_Design specification for empty state displays. All values reference named semantic tokens._

---

## 1. Overview

Empty states communicate that a view has no data to display. They provide context and a suggested action. Used inside cards, table containers, and content areas.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Layout** | Flex column, centered horizontally and vertically |
| **Padding** | `space-8` (mobile: `space-6`) |
| **Text-align** | Center |

### Icon

| Property | Value |
|----------|-------|
| **Size** | `icon-xl` (32px) |
| **Color** | `color-text-tertiary` |
| **Margin-bottom** | `space-4` |

### Heading

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-md` (20px), Semibold 600 |
| **Color** | `color-text-primary` |
| **Margin-bottom** | `space-2` |

### Description

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-sm` (14px), Normal 400 |
| **Color** | `color-text-secondary` |
| **Max-width** | 24rem (readable line length) |
| **Margin-bottom** | `space-6` |

---

## 3. Accessibility

1. Heading should be `<h3>` or appropriate level for context.
2. Icon is decorative (`aria-hidden="true"`).
3. Action button follows standard button accessibility.

---

## 4. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.empty-state` | Container with centered flex layout |
| `.empty-state-icon` | Large decorative icon |
