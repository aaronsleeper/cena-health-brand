# Cena Health — Section Nav Component Spec

_Design specification for in-page section navigation. All values reference named semantic tokens._

---

## 1. Overview

Section nav is a horizontal pill-style nav for jumping between sections within a page. It sits below the page header and above the content area. Similar to tabs but used for in-page anchor navigation rather than switching tab panels.

---

## 2. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Layout** | Flex row, `gap: space-1`, wrap |
| **Padding** | `space-2` |
| **Background** | `color-surface-page` |
| **Border-bottom** | 1px `color-border-default` |

### Item

| Property | Value |
|----------|-------|
| **Padding** | `space-1-5` vertical × `space-3` horizontal |
| **Font** | `text-sm`, Medium 500 |
| **Border-radius** | `radius-md` |
| **Color** | `color-text-tertiary` (default), `color-text-primary` (hover) |

### Active State

| Property | Value |
|----------|-------|
| **Background** | `color-surface-teal` |
| **Color** | `color-text-brand` |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.section-nav` | Container |
| `.section-nav-item` | Individual nav link |
| `.section-nav-item.active` | Current section |
