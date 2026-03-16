# Cena Health — Color Web Implementation

_Web-specific mapping layer for the color token system. All canonical values live in `color.md` — this file provides implementation-ready CSS, browser compatibility notes, and hex verification._

**Constraint:** This file does not modify base token values. It is a translation layer only.

---

## 1. Browser Support for OKLCH

### Current Support (as of 2026)

| Browser | OKLCH Support | Notes |
|---------|--------------|-------|
| Chrome | 111+ (March 2023) | Full support including `oklch()` with alpha via `/` syntax |
| Firefox | 113+ (May 2023) | Full support |
| Safari | 15.4+ (March 2022) | Full support |
| Edge | 111+ (March 2023) | Chromium-based, same as Chrome |

**Recommendation:** OKLCH is safe for production use. All evergreen browsers support it. For legacy fallback (IE11, older mobile WebViews), provide hex values first with OKLCH as progressive enhancement via `@supports`.

### Fallback Pattern

```css
/* Hex fallback first, OKLCH override */
.element {
  color: #0D322D;
  color: oklch(28.9% 0.0426 182.8);
}

/* Or via @supports */
.element {
  color: #0D322D;
}
@supports (color: oklch(0% 0 0)) {
  .element {
    color: oklch(28.9% 0.0426 182.8);
  }
}
```

### Gamut Mapping Notes

OKLCH values in this system are well within the sRGB gamut — no values use chroma levels that would cause gamut clipping in standard displays. The maximum chroma in the system is `0.170` (error-base), which remains within sRGB bounds at its lightness level.

**Round-trip verification:** The hex values in `color.md` were computed from the canonical OKLCH values. Minor rounding differences (±1 in any hex channel) may occur depending on the conversion tool. The hex values listed below have been verified as the nearest sRGB representation and are implementation-ready.

---

## 2. CSS Custom Properties — Full Palette

### 2.1 Teal Family

```css
:root {
  --color-teal-50:  #010F0C; /* oklch(15.0% 0.025 183) */
  --color-teal-100: #04201C; /* oklch(22.0% 0.035 183) */
  --color-teal-200: #0D322D; /* oklch(28.9% 0.0426 182.8) — LOCKED logo anchor */
  --color-teal-300: #124D45; /* oklch(38.0% 0.060 182) */
  --color-teal-400: #1B685E; /* oklch(47.0% 0.075 181.5) */
  --color-teal-500: #3A8478; /* oklch(56.3% 0.0762 181.3) — LOCKED logo primary */
  --color-teal-600: #52A395; /* oklch(66.0% 0.0827 181.0) — LOCKED logo secondary */
  --color-teal-700: #7CB9AD; /* oklch(74.0% 0.065 181) */
  --color-teal-800: #A8D1C9; /* oklch(83.0% 0.045 181) */
  --color-teal-900: #D0E7E2; /* oklch(91.0% 0.025 181) */
  --color-teal-950: #E9F5F2; /* oklch(96.0% 0.013 181) */
}
```

### 2.2 Sage Family

```css
:root {
  --color-sage-50:  #060D07; /* oklch(15.0% 0.020 148) */
  --color-sage-100: #0F1F11; /* oklch(22.0% 0.035 147) */
  --color-sage-200: #1C351F; /* oklch(30.0% 0.050 147) */
  --color-sage-300: #2A4C2D; /* oklch(38.0% 0.065 146) */
  --color-sage-400: #3A643D; /* oklch(46.0% 0.078 146) */
  --color-sage-500: #507F53; /* oklch(55.0% 0.085 145.5) */
  --color-sage-600: #689B6A; /* oklch(64.0% 0.090 145.5) */
  --color-sage-700: #81B983; /* oklch(73.3% 0.0967 145.4) — LOCKED logo sage */
  --color-sage-800: #ACCFAD; /* oklch(82.0% 0.060 146) */
  --color-sage-900: #D0E5D1; /* oklch(90.0% 0.035 147) */
  --color-sage-950: #E7F2E8; /* oklch(95.0% 0.018 148) */
}
```

### 2.3 Warm Neutral Family

```css
:root {
  --color-warm-50:  #0E0A08; /* oklch(15.0% 0.008 60) */
  --color-warm-100: #25211D; /* oklch(25.0% 0.010 65) */
  --color-warm-200: #3F3933; /* oklch(35.0% 0.013 68) */
  --color-warm-300: #5B544C; /* oklch(45.0% 0.016 70) */
  --color-warm-400: #787066; /* oklch(55.0% 0.018 73) */
  --color-warm-500: #958E85; /* oklch(65.0% 0.016 75) */
  --color-warm-600: #B3ADA4; /* oklch(75.0% 0.014 78) */
  --color-warm-700: #D1CDC6; /* oklch(85.0% 0.011 80) */
  --color-warm-800: #E7E4DF; /* oklch(92.0% 0.008 82) */
  --color-warm-900: #F3F1EE; /* oklch(96.0% 0.005 84) */
  --color-warm-950: #FBFAF8; /* oklch(98.5% 0.003 85) */
}
```

### 2.4 Functional Colors

```css
:root {
  /* Error (H:25 warm red-orange) */
  --color-error-bg:     #FCE5E3; /* oklch(94.0% 0.025 25) */
  --color-error-border: #D87972; /* oklch(68.0% 0.120 25) */
  --color-error-base:   #C13C3B; /* oklch(55.0% 0.170 25) */
  --color-error-text:   #932B2A; /* oklch(45.0% 0.140 25) */

  /* Warning (H:80–85 warm ochre-gold) */
  --color-warning-bg:     #F4EAD5; /* oklch(94.0% 0.030 85) */
  --color-warning-border: #CEA861; /* oklch(75.0% 0.100 82) */
  --color-warning-base:   #B58B20; /* oklch(60.0% 0.120 85) */
  --color-warning-text:   #754B00; /* oklch(45.0% 0.100 75) */

  /* Success (H:160 desaturated green) */
  --color-success-bg:     #DCF0E5; /* oklch(94.0% 0.025 160) */
  --color-success-border: #4F9870; /* oklch(62.0% 0.090 160) */
  --color-success-base:   #3A8E64; /* oklch(58.0% 0.100 160) */
  --color-success-text:   #174430; /* oklch(35.0% 0.060 160) */

  /* Info (H:235 slate blue) */
  --color-info-bg:     #DFEEF7; /* oklch(94.0% 0.020 235) */
  --color-info-border: #538EB0; /* oklch(62.0% 0.080 235) */
  --color-info-base:   #287AA3; /* oklch(55.0% 0.100 235) */
  --color-info-text:   #0B4E6C; /* oklch(40.0% 0.080 235) */
}
```

---

## 3. CSS Custom Properties — Semantic Tokens

### 3.1 Brand

```css
:root {
  --color-brand-anchor:    var(--color-teal-200);  /* #0D322D */
  --color-brand-primary:   var(--color-teal-500);  /* #3A8478 */
  --color-brand-secondary: var(--color-teal-600);  /* #52A395 */
  --color-brand-sage:      var(--color-sage-700);  /* #81B983 */
}
```

### 3.2 Primary Action

```css
:root {
  --color-primary:        var(--color-teal-400);  /* #1B685E */
  --color-primary-hover:  var(--color-teal-300);  /* #124D45 */
  --color-primary-active: var(--color-teal-300);  /* #124D45 */
  --color-primary-subtle: var(--color-teal-900);  /* #D0E7E2 */
  --color-on-primary:     var(--color-warm-950);  /* #FBFAF8 */
}
```

### 3.3 Text

```css
:root {
  --color-text-primary:   var(--color-teal-200);  /* #0D322D */
  --color-text-secondary: var(--color-warm-300);  /* #5B544C */
  --color-text-tertiary:  #6B645C;                /* oklch(52.0% 0.016 70) — adjusted per accessibility audit */
  --color-text-disabled:  var(--color-warm-500);  /* #958E85 */
  --color-text-inverse:   var(--color-warm-950);  /* #FBFAF8 */
  --color-text-brand:     var(--color-teal-400);  /* #1B685E */
}
```

**Note on `--color-text-tertiary`:** This value (`#6B645C`) is an adjusted value that does not map directly to a palette step. It sits between warm-300 and warm-400, tuned to achieve ≥4.5:1 contrast on all surfaces including `surface-secondary`. It is defined as a direct hex value rather than a `var()` reference.

### 3.4 Surface

```css
:root {
  --color-surface-page:      var(--color-warm-950);  /* #FBFAF8 */
  --color-surface-primary:   var(--color-warm-900);  /* #F3F1EE */
  --color-surface-secondary: var(--color-warm-800);  /* #E7E4DF */
  --color-surface-teal:      var(--color-teal-950);  /* #E9F5F2 */
  --color-surface-sage:      var(--color-sage-950);  /* #E7F2E8 */
  --color-surface-overlay:   oklch(15.0% 0.025 183 / 60%);
}
```

**Note on `--color-surface-overlay`:** This token uses OKLCH with alpha. The hex fallback for the base color is `#010F0C` but the 60% opacity must be applied via `rgba(1, 15, 12, 0.60)` for legacy browsers.

### 3.5 Border

```css
:root {
  --color-border-default: var(--color-warm-700);  /* #D1CDC6 — decorative only */
  --color-border-strong:  #857E75;                /* oklch(62.0% 0.014 78) — adjusted, not a direct palette step */
  --color-border-brand:   var(--color-teal-600);  /* #52A395 — decorative only */
  --color-border-focus:   var(--color-teal-500);  /* #3A8478 — passes 3:1 on all surfaces */
}
```

### 3.6 Shadow

```css
:root {
  --shadow-color-on-page:    oklch(45% 0.008 70 / 8%);
  --shadow-color-on-surface: oklch(45% 0.008 70 / 10%);
}
```

Hex fallbacks for shadow colors:
- `rgba(91, 84, 76, 0.08)` — on page
- `rgba(91, 84, 76, 0.10)` — on surface/tinted backgrounds

---

## 4. Implementation Notes

### 4.1 Adjusted Values Not on Palette Steps

Two semantic tokens use values that fall between palette steps, adjusted for accessibility compliance:

| Token | Hex | OKLCH | Why adjusted |
|-------|-----|-------|-------------|
| `color-text-tertiary` | `#6B645C` | `oklch(52.0% 0.016 70)` | Original warm-400 (`#787066`) failed AA on all surfaces except surface-page. Darkened to achieve ≥4.5:1 on `surface-secondary`. |
| `color-border-strong` | `#857E75` | `oklch(62.0% 0.014 78)` | Original warm-500 (`#958E85`) failed 3:1 non-text contrast on surfaces other than surface-page. Darkened to pass on all surfaces. |

These values should be defined as direct hex/OKLCH values in CSS, not as references to palette custom properties.

### 4.2 Colors That Must Not Be Used as Text

The following palette values fail all WCAG text contrast thresholds on `surface-page` and must only be used for graphical/decorative elements:

| Value | Hex | Contrast on surface-page | Allowed use |
|-------|-----|------------------------|-------------|
| `teal-600` | `#52A395` | 2.86:1 | Icon fills, decorative borders, illustration accents |
| `sage-700` | `#81B983` | 2.19:1 | Icon fills, illustration accents, decorative surfaces |
| `teal-700` | `#7CB9AD` | — | Decorative borders, illustration accents |
| `teal-800` | `#A8D1C9` | — | Tag backgrounds, subtle highlights |

For brand-colored text, always use `--color-text-brand` (`#1B685E`, teal-400).

### 4.3 Pure White

`#FFFFFF` is intentionally absent from the token system. The lightest surface is `#FBFAF8` (warm-950). If a third-party component or integration injects pure white, it will read as slightly cold against the warm surface system. Where possible, override third-party whites with `--color-surface-page`.

### 4.4 Overlay Alpha Syntax

The overlay token uses OKLCH with alpha (`oklch(15.0% 0.025 183 / 60%)`). For browsers that support `oklch()`, this works natively. For legacy fallback:

```css
--color-surface-overlay: rgba(1, 15, 12, 0.60);

@supports (color: oklch(0% 0 0)) {
  --color-surface-overlay: oklch(15.0% 0.025 183 / 60%);
}
```

---

## 5. Snapping Decisions Log

| Decision | Canonical OKLCH | Web hex | Deviation | Rationale |
|----------|----------------|---------|-----------|-----------|
| All palette values | As specified in color.md | As listed above | ±0–1 per channel | Standard OKLCH→sRGB conversion rounding. No manual overrides. |
| `color-text-tertiary` | `oklch(52.0% 0.016 70)` | `#6B645C` | Not a palette step | Accessibility-required adjustment (color.md §2.3, accessibility-audit R3) |
| `color-border-strong` | `oklch(62.0% 0.014 78)` | `#857E75` | Not a palette step | Accessibility-required adjustment (color.md §2.5, accessibility-audit R6) |

No additional snapping was required. All OKLCH values in the base system produce clean hex conversions within the sRGB gamut.
