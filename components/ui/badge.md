# Cena Health — Badge Component Spec

_Design specification for the Badge component. Status indicators, categorical labels, and removable tags. All values reference named semantic tokens._

---

## 1. Overview

Badges are compact, non-interactive labels that communicate status, category, or count. They appear inline with other content — beside a patient name to indicate enrollment status, in a table cell to show risk level, or as a categorical tag on a care plan. Badges are read-only by default; the removable variant (tag) adds a dismiss button.

**Variants:** Status (info, warning, error, success), Neutral, Brand (teal, sage)
**Shapes:** Default (rounded), Pill (fully rounded)
**Sizes:** Default, Small

---

## 2. Anatomy

```
┌──────────────────────────┐
│  [dot/icon]  Label text  [×]  │
└──────────────────────────┘
```

- **Container:** Tinted background with matching border. `radius-sm` (4px) default, `radius-full` for pill.
- **Label text:** Source Sans 3, `text-xs` (13px), SemiBold 600.
- **Leading dot:** Optional. 6px circle in the variant's base color. Provides a secondary visual cue beyond background tint.
- **Leading icon:** Optional. `icon-sm` (16px). Alternative to dot for richer semantics.
- **Dismiss button:** Optional (tag variant only). × icon at `icon-sm`, with hover state.

---

## 3. Sizing

| Size | Height | Padding (V × H) | Font size | Icon size | Dot size |
|------|--------|------------------|-----------|-----------|----------|
| **Default** | 24px | `space-0-5` × `space-2` (2px × 8px) | `text-xs` (13px) | 16px | 6px |
| **Small** | 20px | `space-0-5` × `space-1-5` (2px × 6px) | `text-2xs` (10px) | 14px | 5px |

Touch targets: Badges are non-interactive, so no 44px minimum required. The removable tag's dismiss button uses a 24px hit area with padding expansion.

---

## 4. Variants

### 4.1 Status Variants

Same semantic color families as alerts, at lower intensity.

| Variant | Background | Border | Text | Dot/Icon color |
|---------|-----------|--------|------|----------------|
| **Info** | `color-info-bg` | `color-info-border` | `color-info-text` | `color-info-base` |
| **Warning** | `color-warning-bg` | `color-warning-border` | `color-warning-text` | `color-warning-base` |
| **Error** | `color-error-bg` | `color-error-border` | `color-error-text` | `color-error-base` |
| **Success** | `color-success-bg` | `color-success-border` | `color-success-text` | `color-success-base` |

### 4.2 Neutral Variant

For non-status categorical labels (department, role, type).

| Property | Value |
|----------|-------|
| **Background** | `color-surface-secondary` |
| **Border** | `color-border-default` |
| **Text** | `color-text-primary` |
| **Dot/Icon** | `color-text-secondary` |

### 4.3 Brand Variants

For brand-aligned categories (clinical vs. nutrition content).

| Variant | Background | Border | Text | Dot/Icon |
|---------|-----------|--------|------|----------|
| **Teal** | `color-surface-teal` | `color-border-brand` | `color-text-brand` | `color-brand-primary` |
| **Sage** | `color-surface-sage` | transparent | `color-text-primary` | `color-brand-sage` |

Note: `color-brand-sage` is non-text-safe, so it is used only for the dot/icon, never for label text.

---

## 5. States

Badges are non-interactive (no hover, focus, or active states) with one exception:

### Removable Tag — Dismiss Button

| State | Dismiss button appearance |
|-------|--------------------------|
| **Default** | Icon at 60% opacity |
| **Hover** | Icon at 100% opacity, subtle background tint |
| **Focus** | Focus ring: `0 0 0 2px {badge-bg}, 0 0 0 4px color-border-focus` |
| **Active** | `transform: scale(0.9)` |

---

## 6. Motion Behavior

### 6.1 Dismiss Animation (removable tags)

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-fast` (120ms) |
| **Properties** | opacity 1→0, transform scale(1)→scale(0.95) |

### 6.2 Reduced Motion

- Dismiss: instant removal, no animation.

---

## 7. On Different Surfaces

Badges use the same background/border on all surfaces. The tinted backgrounds provide sufficient contrast on `surface-page`, `surface-primary`, and `surface-secondary`. On `surface-teal`, the teal badge variant may lose contrast — use info or neutral instead. On `surface-sage`, the success and sage badge variants may be ambiguous — use info or neutral instead.

---

## 8. Density Behavior

Badges do not change with density tiers. Their compact size is fixed — they are already at the compact end of the scale. Spacing around badges (gap between badge and adjacent content) inherits from the parent context's density.

---

## 9. Accessibility

1. **Color is never the sole indicator.** Status badges include a text label. The dot provides a secondary visual cue beyond background tint.
2. **Removable tags:** Dismiss button has `aria-label="Remove {label}"`.
3. **Groups of badges:** Use `role="list"` on the container, `role="listitem"` on each badge for screen reader navigation.
4. **Contrast:** All text/background combinations pass WCAG AA (verified against the same color families used in alerts).

---

## 10. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.badge` | Base badge |
| `.badge-info` | Info variant |
| `.badge-warning` | Warning variant |
| `.badge-error` | Error variant |
| `.badge-success` | Success variant |
| `.badge-neutral` | Neutral variant |
| `.badge-teal` | Brand teal variant |
| `.badge-sage` | Brand sage variant |
| `.badge-sm` | Small size |
| `.badge-pill` | Pill shape (radius-full) |
| `.badge-dot` | Leading status dot |
| `.badge-dismiss` | Dismiss button (tag) |
| `.badge-exiting` | Exit animation class |
