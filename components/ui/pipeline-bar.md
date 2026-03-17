# Cena Health — Pipeline Bar Component Spec

_Design specification for pipeline bars. All values reference named semantic tokens._

---

## 1. Overview

Pipeline bars show proportional data as colored horizontal segments. Each segment uses inline `style="flex: N"` for data-driven sizing. No chart library needed.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Layout** | Flex row, full width |
| **Height** | 2.5rem (40px) |
| **Border-radius** | `radius-md` |
| **Overflow** | `hidden` |

### Segment

| Property | Value |
|----------|-------|
| **Layout** | Flex, centered, `overflow: hidden` |
| **Font** | `text-xs`, Medium 500, white |
| **Min-width** | 3rem |
| **Padding** | 0 `space-2` |

Segment colors are applied via inline `style` since they are data-driven.

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.pipeline-bar` | Flex container for segments |
| `.pipeline-segment` | Individual colored segment |
