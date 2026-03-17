# Cena Health — Radio Component Spec

_Design specification for radio buttons. All values reference named semantic tokens._

---

## 1. Overview

Styled radio buttons with label. Uses native `<input type="radio">` with custom visual treatment. Radio groups enforce single selection.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Circle size** | 1.25rem (20px) |
| **Border** | 2px solid `color-border-strong` |
| **Border-radius** | `radius-full` |
| **Inner dot (selected)** | 0.5rem, `color-on-primary` |
| **Selected background** | `color-primary` |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.radio` | Wrapper label (flex row) |
| `.radio-input` | Hidden native + custom visual |
| `.radio-label` | Text label |
| `.radio-group` | Vertical group of radios |
