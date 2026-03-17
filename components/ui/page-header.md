# Cena Health — Page Header Component Spec

_Design specification for page headers. All values reference named semantic tokens._

---

## 1. Overview

Page header is a flex row with title on the left and action buttons on the right. Stacks vertically on mobile. Used at the top of every data view page.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Layout** | Flex row (column on mobile), space-between, centered vertically |
| **Gap** | `space-4` |
| **Margin-bottom** | `space-6` |

### Heading

The `<h1>` inside `.page-header` has its margin reset to 0.

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.page-header` | Container with title + actions layout |
