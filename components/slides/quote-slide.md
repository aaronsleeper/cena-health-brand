# Cena Health — Quote Slide Spec

_Design specification for quote/testimonial slides. All values reference named semantic tokens._

---

## 1. Overview

Quote slides display patient or partner testimonials as large pull-quotes with attribution. Used for social proof in pitch decks and impact reports.

---

## 2. Container

| Property | Value |
|----------|-------|
| **Aspect ratio** | 16:9 |
| **Grid** | 6 columns, `space-6` gutter |
| **Padding** | `space-20` safe area |
| **Alignment** | Center vertically |
| **Density** | Always comfortable |

---

## 3. Surface Variants

| Variant | Background |
|---------|-----------|
| **Default** | `color-surface-page` (warm white) |
| **Teal** | `color-surface-teal` |
| **Sage** | `color-surface-sage` |

---

## 4. Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| **Quote mark** | Plus Jakarta Sans | `text-display` | 700 | `color-brand-primary` @ 20% opacity |
| **Quote text** | Plus Jakarta Sans | `text-xl` | 500 | `color-text-primary` |
| **Attribution name** | Source Sans 3 | `text-sm` | 600 | `color-text-primary` |
| **Attribution role** | Source Sans 3 | `text-sm` | 400 | `color-text-secondary` |

---

## 5. Layout

Quote text spans columns 2–5 (centered within the 6-column grid). Attribution sits below the quote with a small teal accent bar above it.

---

## 6. Motion

| Property | Value |
|----------|-------|
| **Entrance** | Quote mark fades in, quote text fades up, attribution fades in delayed |
| **Stagger** | 0/150/400ms |

### Reduced Motion
All items appear immediately.

---

## 7. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.slide-quote` | Container |
| `.slide-quote--teal` | Teal surface variant |
| `.slide-quote--sage` | Sage surface variant |
| `.slide-quote__content` | Centered content block |
| `.slide-quote__mark` | Decorative opening quote mark |
| `.slide-quote__text` | Quote body text |
| `.slide-quote__attribution` | Name + role block |
| `.slide-quote__name` | Attribution name |
| `.slide-quote__role` | Attribution role/title |
