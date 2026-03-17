# Cena Health — Section Divider Slide Spec

_Design specification for section divider slides. All values reference named semantic tokens._

---

## 1. Overview

Section divider slides mark transitions between major sections of a presentation. They use a teal-to-sage gradient surface with large display typography. Maximum one gradient slide per deck (per coherence notes); additional dividers use solid teal or sage surfaces.

---

## 2. Container

| Property | Value |
|----------|-------|
| **Aspect ratio** | 16:9 |
| **Grid** | 6 columns, `space-6` gutter |
| **Padding** | `space-20` safe area |
| **Alignment** | Center vertically and horizontally |
| **Density** | Always comfortable |

---

## 3. Surface Variants

| Variant | Background |
|---------|-----------|
| **Gradient** | Linear gradient: `color-teal-900` → `color-sage-950`, left to right |
| **Teal** | `color-surface-teal` |
| **Sage** | `color-surface-sage` |

---

## 4. Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| **Section number** | Source Sans 3 | `text-2xs` | 600, uppercase | `color-text-brand` |
| **Section title** | Plus Jakarta Sans | `text-2xl` | 600 | `color-text-primary` |
| **Section subtitle** | Source Sans 3 | `text-base` | 400 | `color-text-secondary` |

---

## 5. Motion

| Property | Value |
|----------|-------|
| **Entrance** | Crossfade (no translate), `duration-moderate` |
| **Text stagger** | Number → title → subtitle, 0/100/200ms delays |

### Reduced Motion
All items appear immediately at full opacity.

---

## 6. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.slide-divider` | Container (gradient variant) |
| `.slide-divider--teal` | Solid teal surface |
| `.slide-divider--sage` | Solid sage surface |
| `.slide-divider__content` | Centered text block |
| `.slide-divider__number` | Section number overline |
| `.slide-divider__title` | Section title |
| `.slide-divider__subtitle` | Section subtitle |
