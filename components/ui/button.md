# Cena Health — Button Component Spec

_Design specification for the Button component. All values reference named semantic tokens from the token system._

---

## 1. Overview

The button is the primary interactive element in the Cena Health system. It communicates available actions and responds to user engagement with the brand's characteristic organic precision — warm surfaces, confident interaction feedback, and motion that serves orientation.

**Variants:** Primary, Secondary, Ghost, Destructive
**Sizes:** Small, Default, Large

---

## 2. Anatomy

```
┌─────────────────────────────┐
│  [icon]  Label Text  [icon] │
└─────────────────────────────┘
```

- **Container:** Rounded rectangle with `radius-md` (8px)
- **Label:** Required. Source Sans 3, UI label style
- **Leading icon:** Optional. Sized to match label
- **Trailing icon:** Optional. Sized to match label
- Icon-only buttons are permitted at all sizes (require `aria-label`)

---

## 3. Sizing

All sizes use the **squish inset** pattern (reduced vertical, generous horizontal padding). Sizes respond to the active density tier.

| Size | Vertical padding | Horizontal padding | Font size | Font weight | Icon size | Min height |
|------|-----------------|-------------------|-----------|-------------|-----------|------------|
| **Small** | `space-1` (4px) | `space-2` (8px) | `text-xs` (13px) | Medium 500 | `icon-xs` (16px) | 28px |
| **Default** | `space-1.5` (6px) | `space-3` (12px) | `text-sm` (14px) | Medium 500 | `icon-sm` (20px) | 36px |
| **Large** | `space-2` (8px) | `space-4` (16px) | `text-base` (16px) | Medium 500 | `icon-md` (24px) | 44px |

**Icon-to-label gap:** `inline-xs` (`space-1`, 4px) for Small; `inline-sm` (`space-2`, 8px) for Default and Large.

**Icon-only buttons:** Use `inset-sm` (8px all sides) for Default, `inset-xs` (4px) for Small, `inset-md` (12px) for Large. Container is square; use `radius-full` for circular icon buttons.

**Minimum touch target:** All buttons meet 44×44px minimum interactive area (WCAG 2.5.8). Small buttons achieve this via transparent hit area expansion, not visual size increase.

---

## 4. Variants

### 4.1 Primary

The system's primary call to action. Used for the single most important action in a given context. One primary button per form or action group.

| Property | Resting | Hover | Active/Pressed | Focus | Disabled |
|----------|---------|-------|----------------|-------|----------|
| **Background** | `color-primary` (`#1B685E`) | `color-primary-hover` (`#124D45`) | `color-primary-active` (`#124D45`) | `color-primary` | `color-primary` at 40% opacity |
| **Text** | `color-on-primary` (`#FBFAF8`) | `color-on-primary` | `color-on-primary` | `color-on-primary` | `color-on-primary` at 60% opacity |
| **Border** | None | None | None | 2px `color-border-focus` (`#3A8478`) offset by `space-0.5` (2px) | None |
| **Shadow** | None | None | None | `0 0 0 space-0.5 oklch(56.3% 0.0762 181.3 / 25%)` | None |
| **Icon** | `color-on-primary` | `color-on-primary` | `color-on-primary` | `color-on-primary` | `color-on-primary` at 60% opacity |

**Contrast verification:** `color-on-primary` (#FBFAF8) on `color-primary` (#1B685E) = 6.31:1 (passes WCAG AA normal text, AAA large text).

### 4.2 Secondary

For secondary actions that complement a primary action. Outlined style with transparent fill.

| Property | Resting | Hover | Active/Pressed | Focus | Disabled |
|----------|---------|-------|----------------|-------|----------|
| **Background** | Transparent | `color-primary-subtle` (`#D0E7E2`) at 50% | `color-primary-subtle` at 70% | Transparent | Transparent |
| **Text** | `color-primary` (`#1B685E`) | `color-primary` | `color-primary-hover` (`#124D45`) | `color-primary` | `color-text-disabled` (`#958E85`) |
| **Border** | 1px `color-border-strong` (`#857E75`) | 1px `color-border-focus` (`#3A8478`) | 1px `color-primary-hover` | 2px `color-border-focus` offset `space-0.5` | 1px `color-border-default` (`#D1CDC6`) |
| **Shadow** | None | None | None | `0 0 0 space-0.5 oklch(56.3% 0.0762 181.3 / 25%)` | None |
| **Icon** | `color-primary` | `color-primary` | `color-primary-hover` | `color-primary` | `color-text-disabled` |

**Why `color-border-strong` for resting border:** The secondary button's border is the sole boundary indicator, so it must use `color-border-strong` (#857E75) which passes 3:1 non-text contrast on all surfaces (per color.md §2.5).

### 4.3 Ghost

For tertiary actions, toolbar buttons, and actions within dense interfaces. No border, no fill at rest.

| Property | Resting | Hover | Active/Pressed | Focus | Disabled |
|----------|---------|-------|----------------|-------|----------|
| **Background** | Transparent | `color-surface-secondary` (`#E7E4DF`) | `color-surface-secondary` at 80% | Transparent | Transparent |
| **Text** | `color-text-primary` (`#0D322D`) | `color-text-primary` | `color-text-primary` | `color-text-primary` | `color-text-disabled` |
| **Border** | None | None | None | 2px `color-border-focus` offset `space-0.5` | None |
| **Shadow** | None | None | None | `0 0 0 space-0.5 oklch(56.3% 0.0762 181.3 / 25%)` | None |
| **Icon** | `color-text-primary` | `color-text-primary` | `color-text-primary` | `color-text-primary` | `color-text-disabled` |

**Usage constraint:** Ghost buttons must always appear in a context where their function is clear — within a toolbar, beside a primary button, or in a location where the action is expected. A ghost button in isolation on `surface-page` is invisible and fails discoverability.

### 4.4 Destructive

For irreversible actions: delete, remove, cancel enrollment. Red-shifted to signal danger.

| Property | Resting | Hover | Active/Pressed | Focus | Disabled |
|----------|---------|-------|----------------|-------|----------|
| **Background** | `color-error-base` (`#C13C3B`) | `color-error-text` (`#932B2A`) | `color-error-text` | `color-error-base` | `color-error-base` at 40% opacity |
| **Text** | `color-on-primary` (`#FBFAF8`) | `color-on-primary` | `color-on-primary` | `color-on-primary` | `color-on-primary` at 60% opacity |
| **Border** | None | None | None | 2px `color-error-border` (`#D87972`) offset `space-0.5` | None |
| **Shadow** | None | None | None | `0 0 0 space-0.5 oklch(68% 0.12 25 / 25%)` | None |
| **Icon** | `color-on-primary` | `color-on-primary` | `color-on-primary` | `color-on-primary` | `color-on-primary` at 60% opacity |

**Contrast verification:** `color-on-primary` (#FBFAF8) on `color-error-base` (#C13C3B) = approximately 4.8:1 (passes WCAG AA normal text).

**Usage constraint:** Destructive buttons should never appear as the only action. Always pair with a cancel/secondary option. In clinical contexts, destructive actions require a confirmation step — the button itself triggers a confirmation dialog, not the destructive action directly.

---

## 5. Motion Behavior

### 5.1 Hover Transition

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-fast` (120ms) |
| **Properties animated** | `background-color`, `border-color` |

### 5.2 Press / Active State

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration (press)** | `duration-micro` (80ms) |
| **Duration (release)** | `duration-fast` (120ms) |
| **Transform** | `scale(1)` → `scale(0.98)` on press → `scale(1)` on release |
| **Background** | Transitions to active color simultaneously |

The 2% scale compression provides tactile feedback without implying z-axis depth (per motion.md §3.5).

### 5.3 Focus Ring

| Property | Value |
|----------|-------|
| **Easing** | Transition |
| **Duration** | `duration-fast` (120ms) |
| **Method** | `box-shadow` ring appears; no layout shift |

### 5.4 Reduced Motion

Under `prefers-reduced-motion: reduce`:
- **Hover:** Background color change only, `duration-micro` (80ms). No scale.
- **Press:** Background color change only, `duration-micro`. No scale transform.
- **Focus:** Ring appears instantly (0ms).

---

## 6. Layout and Composition

### Button Groups

Multiple buttons in a horizontal row use `inline-md` (`space-3`, 12px) gap. Primary button appears rightmost (in LTR) in confirmation contexts, leftmost in navigation contexts.

### Full-Width Buttons

On mobile viewports (<600px), buttons in form contexts may expand to full container width. Use `width: 100%` with standard padding. Full-width buttons stack vertically with `stack-sm` (`space-2`, 8px) gap.

### Button in Cards

Buttons within card components align to the card's internal grid. Use `inset-asym-lg` or the card's horizontal padding for alignment. Buttons at the bottom of a card sit below a `stack-lg` (`space-6`, 24px) gap from the preceding content.

---

## 7. Accessibility

1. **Minimum contrast:** All text/icon on background combinations meet WCAG AA (4.5:1 for normal text).
2. **Focus indicator:** Visible focus ring using `color-border-focus` with `space-0.5` offset passes 3:1 non-text contrast on all surfaces.
3. **Disabled state:** Uses reduced opacity, not color removal. Disabled buttons are excluded from tab order (`tabindex="-1"`, `aria-disabled="true"`).
4. **Icon-only buttons:** Require `aria-label` describing the action.
5. **Loading state:** When a button triggers an async action, replace label with a spinner at `icon-sm` size. Add `aria-busy="true"` and `aria-label` describing the pending action. The spinner uses the same color as the resting label.

---

## 8. On Tinted Surfaces

Buttons may appear on `surface-teal` or `surface-sage` backgrounds. Behavior adjustments:

| Variant | On `surface-teal` | On `surface-sage` |
|---------|-------------------|-------------------|
| **Primary** | No change — sufficient contrast | No change — sufficient contrast |
| **Secondary** | Border uses `color-border-focus` at rest (teal on teal — `color-border-strong` would be less visible) | No change |
| **Ghost** | Hover background uses `color-surface-primary` instead of `surface-secondary` | Hover background uses `color-surface-primary` |
| **Destructive** | No change | No change |

---

## 9. CSS Implementation Reference

```css
.btn {
  font-family: var(--font-body);
  font-weight: 500;
  line-height: 1.20;
  letter-spacing: 0.01em;
  border-radius: var(--radius-md);           /* 8px */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);                        /* 8px — default icon-label gap */
  transition:
    background-color var(--duration-fast) cubic-bezier(0.25, 0.1, 0.25, 1),
    border-color var(--duration-fast) cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow var(--duration-fast) cubic-bezier(0.25, 0.1, 0.25, 1),
    transform var(--duration-micro) cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Default size */
.btn--default {
  font-size: var(--text-sm);                  /* 14px */
  padding: var(--space-1-5) var(--space-3);   /* 6px 12px */
  min-height: 2.25rem;                        /* 36px */
}

/* Small size */
.btn--sm {
  font-size: var(--text-xs);                  /* 13px */
  padding: var(--space-1) var(--space-2);     /* 4px 8px */
  min-height: 1.75rem;                        /* 28px */
  gap: var(--space-1);                        /* 4px */
}

/* Large size */
.btn--lg {
  font-size: var(--text-base);                /* 16px */
  padding: var(--space-2) var(--space-4);     /* 8px 16px */
  min-height: 2.75rem;                        /* 44px */
}

/* Primary variant */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
}
.btn--primary:hover {
  background-color: var(--color-primary-hover);
}
.btn--primary:active {
  background-color: var(--color-primary-active);
  transform: scale(0.98);
}

/* Focus ring (all variants) */
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-surface-page), 0 0 0 4px var(--color-border-focus);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition-duration: 0ms;
  }
  .btn:active {
    transform: none;
  }
}
```

_Partial reference — full CSS for all variants follows the same token-referencing pattern._

---

## 10. Density Behavior

Buttons inherit the active density tier from their page context. Padding tokens scale automatically:

| Size | Compact padding | Default padding | Comfortable padding |
|------|----------------|-----------------|---------------------|
| Small | 4px × 6px | 4px × 8px | 4px × 10px |
| Default | 4px × 8px | 6px × 12px | 8px × 16px |
| Large | 6px × 12px | 8px × 16px | 10px × 20px |

Font size, font weight, and color do not change with density. Only spatial tokens scale.
