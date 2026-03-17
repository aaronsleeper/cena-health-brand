# Cena Health — Toolbar Component Spec

_Design specification for toolbar and search input. All values reference named semantic tokens._

---

## 1. Overview

The toolbar is a horizontal bar that sits above data tables and list views. It contains a search input, filter pills, and action buttons. On mobile it stacks vertically.

---

## 2. Visual Properties

### Toolbar Container

| Property | Value |
|----------|-------|
| **Layout** | Flex row (column on mobile), `gap: space-3` |
| **Margin-bottom** | `space-4` |
| **Alignment** | stretch (mobile), center (desktop) |

### Search Input

| Property | Value |
|----------|-------|
| **Layout** | Relative wrapper, `flex: 1` |
| **Icon** | `icon-md` (20px), `color-text-tertiary`, absolute left `space-3` |
| **Input padding-left** | `space-10` (clears icon) |
| **Input** | Standard `.input-field` appearance |

---

## 3. Accessibility

1. Search input: `type="search"`, `aria-label` if no visible label.
2. Search icon: `aria-hidden="true"`, `pointer-events: none`.
3. Toolbar uses semantic grouping for screen readers.

---

## 4. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.toolbar` | Container bar |
| `.toolbar-search` | Search wrapper (`flex: 1`) |
| `.search-input` | Relative wrapper for icon + input |
| `.search-input-icon` | Positioned search icon |
