# Cena Health — Spacing Web Implementation

_Web-specific mapping layer for the spacing and layout token system. All canonical values live in `spacing.md` — this file provides 8px grid alignment analysis, density tier computed values, and implementation-ready CSS._

**Constraint:** This file does not modify base token values. It is a translation layer only.

---

## 1. Spacing Scale — 8px Grid Analysis

**Base unit:** 4px
**Implementation grid:** 8px (common web standard)

The 4px base produces an 8px value at every even-numbered step. The analysis below shows which spacing tokens align to the 8px grid and which are intentional sub-grid values.

| Step | Multiplier | Web (px) | On 8px grid? | Role |
|------|-----------|----------|-------------|------|
| `space-px` | 0.25 | **1** | No — sub-grid | Hairline. Not a layout value. |
| `space-0.5` | 0.5 | **2** | No — sub-grid | Focus ring offset, micro-gap. |
| `space-1` | 1 | **4** | No — half-grid | Tightest intentional spacing. Minimum layout gap. |
| `space-1.5` | 1.5 | **6** | No — sub-grid | Small form gaps, tight stacking. |
| `space-2` | 2 | **8** | **Yes** | Standard tight gap. Icon-label pairs. |
| `space-3` | 3 | **12** | No — 1.5× grid | Compact component padding. |
| `space-4` | 4 | **16** | **Yes** | Default internal padding. Matches body text size. |
| `space-5` | 5 | **20** | No — 2.5× grid | Comfortable internal padding. |
| `space-6` | 6 | **24** | **Yes** | Line-height anchor. Default vertical gap. |
| `space-8` | 8 | **32** | **Yes** | Section gap within component. |
| `space-10` | 10 | **40** | **Yes** | Large component gap. Card-to-card spacing. |
| `space-12` | 12 | **48** | **Yes** | Major section break. |
| `space-16` | 16 | **64** | **Yes** | Hero padding, large section margins. |
| `space-20` | 20 | **80** | **Yes** | Desktop page horizontal margin. |
| `space-24` | 24 | **96** | **Yes** | Maximum structural spacing. |

### Summary

- **9 of 15 steps** align to the 8px grid (all even-multiplier steps from `space-2` upward).
- **6 steps** are sub-grid values: `space-px` (1), `space-0.5` (2), `space-1` (4), `space-1.5` (6), `space-3` (12), `space-5` (20).
- The sub-grid values are intentional — they provide fine-grained control for component internals (tag gaps, icon offsets, form micro-spacing) where 8px increments are too coarse.
- **No snapping is applied.** The 4px base already produces clean integer values at every step. Forcing all values to the 8px grid would eliminate the resolution needed for compact UI elements.

---

## 2. CSS Custom Properties — Spacing Scale

```css
:root {
  --space-px:   0.0625rem;  /* 1px */
  --space-0-5:  0.125rem;   /* 2px */
  --space-1:    0.25rem;    /* 4px */
  --space-1-5:  0.375rem;   /* 6px */
  --space-2:    0.5rem;     /* 8px */
  --space-3:    0.75rem;    /* 12px */
  --space-4:    1rem;       /* 16px */
  --space-5:    1.25rem;    /* 20px */
  --space-6:    1.5rem;     /* 24px */
  --space-8:    2rem;       /* 32px */
  --space-10:   2.5rem;     /* 40px */
  --space-12:   3rem;       /* 48px */
  --space-16:   4rem;       /* 64px */
  --space-20:   5rem;       /* 80px */
  --space-24:   6rem;       /* 96px */
}
```

**Note:** Values are defined in `rem` to scale with user font-size preferences. At the standard 16px root, all values resolve to the listed pixel values exactly.

---

## 3. Density Tiers — Complete Computed Values

### 3.1 Full Density Table

All values in pixels at 16px root font size. Compact uses 0.75× multiplier snapped to the nearest 4px increment. Comfortable uses 1.25× multiplier snapped to the nearest 4px increment.

| Step | Default (px) | Compact (px) | Comfortable (px) | Compact snap | Comfortable snap |
|------|-------------|-------------|------------------|-------------|-----------------|
| `space-px` | 1 | 1 | 1 | No change — minimum | No change — hairline fixed |
| `space-0.5` | 2 | 2 | 2 | No change — minimum | No change — micro fixed |
| `space-1` | 4 | 4 | 4 | No change — system minimum | No change — system minimum |
| `space-1.5` | 6 | 4 | 8 | 0.75× = 4.5 → 4 | 1.25× = 7.5 → 8 |
| `space-2` | 8 | 6 | 10 | 0.75× = 6 (exact) | 1.25× = 10 (exact) |
| `space-3` | 12 | 8 | 16 | 0.75× = 9 → 8 | 1.25× = 15 → 16 |
| `space-4` | 16 | 12 | 20 | 0.75× = 12 (exact) | 1.25× = 20 (exact) |
| `space-5` | 20 | 16 | 24 | 0.75× = 15 → 16 | 1.25× = 25 → 24 |
| `space-6` | 24 | 16 | 32 | 0.75× = 18 → 16 | 1.25× = 30 → 32 |
| `space-8` | 32 | 24 | 40 | 0.75× = 24 (exact) | 1.25× = 40 (exact) |
| `space-10` | 40 | 32 | 48 | 0.75× = 30 → 32 | 1.25× = 50 → 48 |
| `space-12` | 48 | 36 | 64 | 0.75× = 36 (exact) | 1.25× = 60 → 64 |
| `space-16` | 64 | 48 | 80 | 0.75× = 48 (exact) | 1.25× = 80 (exact) |
| `space-20` | 80 | 60 | 96 | 0.75× = 60 (exact) | 1.25× = 100 → 96 |
| `space-24` | 96 | 72 | 120 | 0.75× = 72 (exact) | 1.25× = 120 (exact) |

### 3.2 Snapping Rules for Density Tiers

- **Snapping target:** Nearest value on the default spacing scale (not nearest arbitrary 4px multiple). This ensures compact and comfortable values always land on a recognized step.
- **Direction:** Snap to whichever scale step is nearer. When equidistant, snap down for compact (favor tighter) and snap up for comfortable (favor looser).
- **Floor:** No spacing token in any density tier drops below `space-1` (4px) for layout gaps. `space-px` and `space-0.5` are fixed across all tiers — they serve structural roles (hairline borders, focus offsets) that should not scale with density.

### 3.3 CSS Custom Properties — Density Overrides

```css
/* Default density — no overrides needed, base values apply */

/* Compact density */
[data-density="compact"] {
  --space-1-5:  0.25rem;    /* 4px (was 6) */
  --space-2:    0.375rem;   /* 6px (was 8) */
  --space-3:    0.5rem;     /* 8px (was 12) */
  --space-4:    0.75rem;    /* 12px (was 16) */
  --space-5:    1rem;       /* 16px (was 20) */
  --space-6:    1rem;       /* 16px (was 24) */
  --space-8:    1.5rem;     /* 24px (was 32) */
  --space-10:   2rem;       /* 32px (was 40) */
  --space-12:   2.25rem;    /* 36px (was 48) */
  --space-16:   3rem;       /* 48px (was 64) */
  --space-20:   3.75rem;    /* 60px (was 80) */
  --space-24:   4.5rem;     /* 72px (was 96) */
}

/* Comfortable density */
[data-density="comfortable"] {
  --space-1-5:  0.5rem;     /* 8px (was 6) */
  --space-2:    0.625rem;   /* 10px (was 8) */
  --space-3:    1rem;       /* 16px (was 12) */
  --space-4:    1.25rem;    /* 20px (was 16) */
  --space-5:    1.5rem;     /* 24px (was 20) */
  --space-6:    2rem;       /* 32px (was 24) */
  --space-8:    2.5rem;     /* 40px (was 32) */
  --space-10:   3rem;       /* 48px (was 40) */
  --space-12:   4rem;       /* 64px (was 48) */
  --space-16:   5rem;       /* 80px (was 64) */
  --space-20:   6rem;       /* 96px (was 80) */
  --space-24:   7.5rem;     /* 120px (was 96) */
}
```

### 3.4 Line Height Overrides by Density

```css
[data-density="compact"] {
  --leading-body: 1.45;     /* Tightened from 1.55. Minimum per typography spec. */
}

[data-density="comfortable"] {
  --leading-body: 1.65;     /* Loosened from 1.55. For patient-facing long-form content. */
}
```

**Critical constraint:** Only body text line height changes with density. UI labels (1.20), captions (1.45), headings (1.15–1.25), and overlines (1.20) remain fixed across all density tiers. Per typography.md: "Density tiers must not modify line heights" for heading styles, and compact body line height must never go below 1.45 (WCAG 1.4.8).

---

## 4. Component Spacing Primitives — Computed Values

### 4.1 Inset (Padding)

#### Square Inset

| Variant | Default | Compact | Comfortable |
|---------|---------|---------|-------------|
| `inset-xs` | 4px | 4px | 4px |
| `inset-sm` | 8px | 6px | 10px |
| `inset-md` | 12px | 8px | 16px |
| `inset-lg` | 16px | 12px | 20px |
| `inset-xl` | 24px | 16px | 32px |

#### Asymmetric Inset (V × H)

| Variant | Default | Compact | Comfortable |
|---------|---------|---------|-------------|
| `inset-asym-sm` | 8 × 12 | 6 × 8 | 10 × 16 |
| `inset-asym-md` | 12 × 16 | 8 × 12 | 16 × 20 |
| `inset-asym-lg` | 16 × 24 | 12 × 16 | 20 × 32 |
| `inset-asym-xl` | 24 × 32 | 16 × 24 | 32 × 40 |

#### Squish Inset (V × H)

| Variant | Default | Compact | Comfortable |
|---------|---------|---------|-------------|
| `squish-sm` | 4 × 8 | 4 × 6 | 4 × 10 |
| `squish-md` | 6 × 12 | 4 × 8 | 8 × 16 |
| `squish-lg` | 8 × 16 | 6 × 12 | 10 × 20 |

### 4.2 Stack (Vertical Gaps)

| Variant | Default | Compact | Comfortable |
|---------|---------|---------|-------------|
| `stack-xs` | 4px | 4px | 4px |
| `stack-sm` | 8px | 6px | 10px |
| `stack-md` | 16px | 12px | 20px |
| `stack-lg` | 24px | 16px | 32px |
| `stack-xl` | 40px | 32px | 48px |
| `stack-2xl` | 64px | 48px | 80px |

### 4.3 Inline (Horizontal Gaps)

| Variant | Default | Compact | Comfortable |
|---------|---------|---------|-------------|
| `inline-xs` | 4px | 4px | 4px |
| `inline-sm` | 8px | 6px | 10px |
| `inline-md` | 12px | 8px | 16px |
| `inline-lg` | 16px | 12px | 20px |
| `inline-xl` | 24px | 16px | 32px |

---

## 5. Grid — Web Implementation Values

### 5.1 Breakpoints

| Name | Range | Columns | Gutter | Margin |
|------|-------|---------|--------|--------|
| Mobile | < 600px | 4 | 16px (`space-4`) | 20px (`space-5`) |
| Tablet | 600–1023px | 8 | 20px (`space-5`) | 32px (`space-8`) |
| Desktop | ≥ 1024px | 12 | 24px (`space-6`) | 80px (`space-20`) |

### 5.2 CSS Grid Implementation

```css
.grid {
  display: grid;
  max-width: 80rem; /* 1280px */
  margin-inline: auto;
  padding-inline: var(--space-20); /* 80px desktop margin */
}

/* Desktop: 12 columns, 24px gutter */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-6);
    padding-inline: var(--space-20);
  }
}

/* Tablet: 8 columns, 20px gutter */
@media (min-width: 600px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
    gap: var(--space-5);
    padding-inline: var(--space-8);
  }
}

/* Mobile: 4 columns, 16px gutter */
@media (max-width: 599px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
    padding-inline: var(--space-5);
  }
}
```

### 5.3 Content Width Constraints

```css
:root {
  --max-content: 80rem;     /* 1280px — max content width */
  --max-prose:   40rem;     /* 640px — max body text width (~65–75 chars at 16px) */
}
```

Body text should be constrained to `--max-prose` to maintain readable line length (per spacing.md LP4).

---

## 6. Elevation — Web Shadow Values

```css
:root {
  /* Shadow base color: warm-300 at varying opacity */
  --shadow-sm:  0 2px 8px 0 oklch(45% 0.008 70 / 8%);    /* Level 3 — dropdowns, small popovers */
  --shadow-md:  0 4px 16px 0 oklch(45% 0.008 70 / 8%);    /* Level 4 — modals, dialogs */
  --shadow-lg:  0 8px 24px 2px oklch(45% 0.008 70 / 10%); /* Level 5 — toasts, command palettes */
}

/* Hex fallbacks for legacy browsers */
@supports not (color: oklch(0% 0 0)) {
  :root {
    --shadow-sm:  0 2px 8px 0 rgba(91, 84, 76, 0.08);
    --shadow-md:  0 4px 16px 0 rgba(91, 84, 76, 0.08);
    --shadow-lg:  0 8px 24px 2px rgba(91, 84, 76, 0.10);
  }
}
```

Shadow offset values map to spacing tokens:
- Level 3: Y-offset `space-0.5` (2px), blur `space-2` (8px)
- Level 4: Y-offset `space-1` (4px), blur `space-4` (16px)
- Level 5: Y-offset `space-2` (8px), blur `space-6` (24px), spread `space-0.5` (2px)

---

## 7. Icon Sizing

Per spacing.md §7 (Visual Language Curator note), icon sizes align to the spacing scale:

```css
:root {
  --icon-sm:   1rem;       /* 16px — space-4. Inline icons. */
  --icon-md:   1.25rem;    /* 20px — space-5. Standard UI icons. */
  --icon-lg:   1.5rem;     /* 24px — space-6. Navigation, action icons. */
}
```

---

## 8. Snapping Decisions Log

| Decision | Strict value | Snapped value | Deviation | Rationale |
|----------|-------------|---------------|-----------|-----------|
| Compact `space-3` | 9px (0.75 × 12) | 8px | −1px | Snapped to nearest scale step (`space-2` = 8px). |
| Compact `space-5` | 15px (0.75 × 20) | 16px | +1px | Snapped to nearest scale step (`space-4` = 16px). |
| Compact `space-6` | 18px (0.75 × 24) | 16px | −2px | Snapped down to `space-4` (16px). 18px is not on the scale. |
| Compact `space-10` | 30px (0.75 × 40) | 32px | +2px | Snapped to nearest scale step (`space-8` = 32px). |
| Comfortable `space-1.5` | 7.5px (1.25 × 6) | 8px | +0.5px | Snapped up to `space-2` (8px). |
| Comfortable `space-3` | 15px (1.25 × 12) | 16px | +1px | Snapped to nearest scale step (`space-4` = 16px). |
| Comfortable `space-5` | 25px (1.25 × 20) | 24px | −1px | Snapped down to `space-6` (24px). |
| Comfortable `space-6` | 30px (1.25 × 24) | 32px | +2px | Snapped up to `space-8` (32px). |
| Comfortable `space-10` | 50px (1.25 × 40) | 48px | −2px | Snapped down to `space-12` (48px). |
| Comfortable `space-12` | 60px (1.25 × 48) | 64px | +4px | Snapped up to `space-16` (64px). |
| Comfortable `space-20` | 100px (1.25 × 80) | 96px | −4px | Snapped down to `space-24` (96px). |
| No sub-grid values modified | — | — | — | `space-px`, `space-0.5`, `space-1` remain fixed across all tiers. |

All snapping decisions preserve the proportional relationship between adjacent steps and maintain clear proximity distinctions (related elements remain ≥2 steps closer than unrelated groups).
