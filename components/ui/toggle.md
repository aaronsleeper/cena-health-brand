# Cena Health — Toggle/Switch Component Spec

_Design specification for toggle switches. All values reference named semantic tokens._

---

## 1. Overview

On/off switch control. Uses native `<input type="checkbox">` with switch visual treatment. The thumb slides between positions with a smooth transition.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Track size** | 2.75rem × 1.5rem |
| **Track radius** | `radius-full` |
| **Thumb size** | 1.25rem circle |
| **Off state** | Track: `color-border-default`, Thumb: white |
| **On state** | Track: `color-primary`, Thumb: white |
| **Transition** | `duration-fast`, `ease-transition` |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.toggle` | Wrapper label |
| `.toggle-input` | Hidden native checkbox |
| `.toggle-track` | Visual track element |
| `.toggle-label` | Text label |
