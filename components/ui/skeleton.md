# Cena Health — Skeleton Loader Component Spec

_Design specification for skeleton loading placeholders. All values reference named semantic tokens._

---

## 1. Overview

Skeleton loaders are placeholder shapes that indicate content is loading. They use a pulse animation with the warm neutral palette. Place skeletons inside cards and content areas to maintain layout during data fetches.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Background** | `color-surface-secondary` (warm gray) |
| **Border-radius** | `radius-sm` |
| **Animation** | Pulse between `color-surface-secondary` and `color-surface-primary` |

### Size Variants

| Class | Height |
|-------|--------|
| `.skeleton-text` | `space-4` (16px) — body text line |
| `.skeleton-text-sm` | `space-3` (12px) — small text/caption line |

---

## 3. Motion

| Property | Value |
|----------|-------|
| **Animation** | `skeleton-pulse`, 1.5s, ease-in-out, infinite |
| **Effect** | Opacity pulse between 1 and 0.4 |

### Reduced Motion
Animation disabled; shows static placeholder at full opacity.

---

## 4. Accessibility

1. Container should have `aria-busy="true"` and `aria-label="Loading"`.
2. Skeletons are decorative — no semantic role needed on individual shapes.

---

## 5. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.skeleton` | Base skeleton shape with pulse animation |
| `.skeleton-text` | Text-line height (16px) |
| `.skeleton-text-sm` | Small text-line height (12px) |
