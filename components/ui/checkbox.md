# Cena Health — Checkbox Component Spec

_Design specification for checkboxes. All values reference named semantic tokens._

---

## 1. Overview

Styled checkbox with label. Uses native `<input type="checkbox">` with custom visual treatment via CSS. Supports indeterminate state for "select all" patterns.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Box size** | 1.25rem (20px) |
| **Border** | 2px solid `color-border-strong` |
| **Border-radius** | `radius-sm` |
| **Background (unchecked)** | `color-surface-page` |
| **Background (checked)** | `color-primary` |
| **Check mark** | White SVG via `background-image` |
| **Label font** | `text-sm`, Normal 400, `color-text-primary` |
| **Gap** | `space-2` between box and label |

### States
| State | Border | Background |
|-------|--------|-----------|
| Unchecked | `color-border-strong` | `color-surface-page` |
| Checked | `color-primary` | `color-primary` |
| Indeterminate | `color-primary` | `color-primary` |
| Disabled | `color-border-default` | `color-surface-secondary` |
| Error | `color-error-border` | — |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.checkbox` | Wrapper label (flex row) |
| `.checkbox-input` | Hidden native + custom visual |
| `.checkbox-label` | Text label |
| `.checkbox-description` | Optional helper text below label |
