# Cena Health — Typography Web Implementation

_Web-specific mapping layer for the typographic token system. All canonical values live in `typography.md` — this file provides computed pixel values, rounding decisions, and implementation-ready CSS._

**Constraint:** This file does not modify base token values. It is a translation layer only.

---

## 1. Type Scale — Computed Values and Rounding

### 1.1 Scale Derivation

**Base:** 16px (1rem)
**Ratio:** 1.250 (major third) — governs `base` through `display`
**Sub-base steps:** Manually set (not ratio-derived)

### 1.2 Rounding Decisions

| Step | Multiplier | Strict value (px) | Rounded value (px) | rem | Rounding applied | Notes |
|------|-----------|-------------------|--------------------|----|-----------------|-------|
| `3xs` | 0.512 | 8.192 | **8** | 0.500 | Rounded down to nearest integer | Legal minimum. Floor to 8px for rendering clarity. |
| `2xs` | 0.640 | 10.240 | **10** | 0.625 | Rounded down to nearest integer | Overline labels, dense table headers. |
| `xs` | 0.800 | 12.800 | **13** | 0.8125 | Rounded up to nearest integer | Captions, footnotes. Rounded up to avoid sub-pixel blur at 12.8. |
| `sm` | 0.889 | 14.224 | **14** | 0.875 | Rounded down to nearest integer | Small body. 14px is a standard web size with clean rendering. |
| **`base`** | **1.000** | **16.000** | **16** | **1.000** | **Exact** | **Body text. No rounding needed.** |
| `md` | 1.250 | 20.000 | **20** | 1.250 | Exact | Large body, lead paragraphs. |
| `lg` | 1.563 | 25.008 | **25** | 1.5625 | Rounded down (–0.008px) | Subsection headings (H3). Negligible rounding. |
| `xl` | 1.953 | 31.248 | **31** | 1.9375 | Rounded down (–0.248px) | Section headings (H2). |
| `2xl` | 2.441 | 39.056 | **39** | 2.4375 | Rounded down (–0.056px) | Page titles (H1). |
| `3xl` | 3.052 | 48.832 | **49** | 3.0625 | Rounded up (+0.168px) | Hero headings. Rounded up to avoid 48px which crowds the next step down. |
| `display` | 3.815 | 61.040 | **61** | 3.8125 | Rounded down (–0.040px) | Display headlines, stat callouts. |

**Summary of rounding approach:**
- All web sizes are whole integers — no fractional pixels.
- Rounding direction chosen to maintain clear visual separation between adjacent steps.
- Maximum rounding deviation is 0.248px (`xl`), which is imperceptible.
- Sub-base steps (`3xs` through `sm`) are manually set to practical values, not strict ratio products.

---

## 2. CSS Custom Properties — Type Scale

```css
:root {
  /* Type scale — pixel values as rem */
  --text-3xs:     0.5rem;     /* 8px */
  --text-2xs:     0.625rem;   /* 10px */
  --text-xs:      0.8125rem;  /* 13px */
  --text-sm:      0.875rem;   /* 14px */
  --text-base:    1rem;       /* 16px */
  --text-md:      1.25rem;    /* 20px */
  --text-lg:      1.5625rem;  /* 25px */
  --text-xl:      1.9375rem;  /* 31px */
  --text-2xl:     2.4375rem;  /* 39px */
  --text-3xl:     3.0625rem;  /* 49px */
  --text-display: 3.8125rem;  /* 61px */
}
```

**Note on rem precision:** The rem values above use increments of 0.0625rem (1px at 16px base). This means every scale step lands on a whole pixel when the root font size is 16px. If the root font size is changed (e.g., for accessibility zoom), the scale remains proportional.

---

## 3. CSS Custom Properties — Font Stacks

```css
:root {
  --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body:    'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono:    'Source Code Pro', ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
}
```

---

## 4. CSS Custom Properties — Line Heights

```css
:root {
  --leading-none:    1.00;  /* Stat display */
  --leading-tight:   1.05;  /* Hero heading */
  --leading-heading: 1.15;  /* H1 */
  --leading-snug:    1.20;  /* H2, UI labels, overlines */
  --leading-normal:  1.25;  /* H3 */
  --leading-relaxed: 1.45;  /* Captions; also compact-tier body minimum */
  --leading-body-sm: 1.50;  /* Body small, quotes */
  --leading-body:    1.55;  /* Default body text */
  --leading-loose:   1.65;  /* Comfortable-tier body text */
}
```

### 4.1 Computed Line Heights (px)

These are the actual pixel line heights at each style's specified size and leading. Values are rounded to aid vertical rhythm calculation.

| Style | Size (px) | Leading | Computed (px) | Nearest 4px grid | Notes |
|-------|----------|---------|--------------|-------------------|-------|
| Hero heading | 61 | 1.05 | 64.05 | **64** | Aligns to 4px grid. |
| H1 | 39 | 1.15 | 44.85 | **44** | 0.85px deviation. Snaps down to 44px (11 × 4). |
| H2 | 31 | 1.20 | 37.20 | **36** | 1.20px deviation. Snaps down to 36px (9 × 4). |
| H3 | 25 | 1.25 | 31.25 | **32** | 0.75px deviation. Snaps up to 32px (8 × 4). |
| Body | 16 | 1.55 | 24.80 | **24** | 0.80px deviation. Snaps down to 24px (6 × 4). |
| Body small | 14 | 1.50 | 21.00 | **20** | 1.00px deviation. Snaps down to 20px (5 × 4). |
| UI label | 14 | 1.20 | 16.80 | **16** | 0.80px deviation. Snaps down to 16px (4 × 4). |
| Caption | 13 | 1.45 | 18.85 | **20** | 1.15px deviation. Snaps up to 20px (5 × 4). |
| Overline | 10 | 1.20 | 12.00 | **12** | Exact. Aligns to 4px grid. |
| Stat display | 61 | 1.00 | 61.00 | **60** | 1.00px deviation. Snaps down to 60px (15 × 4). |
| Quote | 20 | 1.50 | 30.00 | **28** | 2.00px deviation. Snaps down to 28px (7 × 4). |

**Implementation recommendation:** Use unitless line-height values in CSS (e.g., `line-height: 1.55`), not pixel values. The browser computes the actual line height from font size × multiplier. The 4px-grid-snapped values above are provided for vertical rhythm calculation in layout, not for overriding CSS line-height behavior.

If strict 4px grid alignment is required for vertical rhythm, set line heights in rem:

```css
/* Optional: grid-snapped line heights for strict vertical rhythm */
:root {
  --leading-body-grid:    1.5rem;    /* 24px — snapped from 24.8px */
  --leading-body-sm-grid: 1.25rem;   /* 20px — snapped from 21px */
  --leading-h3-grid:      2rem;      /* 32px — snapped from 31.25px */
  --leading-h2-grid:      2.25rem;   /* 36px — snapped from 37.2px */
  --leading-h1-grid:      2.75rem;   /* 44px — snapped from 44.85px */
  --leading-hero-grid:    4rem;      /* 64px — snapped from 64.05px */
}
```

---

## 5. CSS Custom Properties — Letter Spacing

```css
:root {
  --tracking-tightest: -0.02em;   /* Hero heading, stat display */
  --tracking-tight:    -0.01em;   /* H1 */
  --tracking-snug:     -0.005em;  /* H2 */
  --tracking-normal:    0;        /* H3, body, quote */
  --tracking-wide:      0.005em;  /* Body small */
  --tracking-wider:     0.01em;   /* UI label, caption */
  --tracking-widest:    0.08em;   /* Overline (uppercase) */
}
```

---

## 6. Complete Style Definitions — Implementation-Ready

### 6.1 Heading Styles

```css
.h1, h1 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);        /* 39px */
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);  /* #0D322D */
}

.h2, h2 {
  font-family: var(--font-display);
  font-size: var(--text-xl);         /* 31px */
  font-weight: 600;
  line-height: 1.20;
  letter-spacing: -0.005em;
  color: var(--color-text-primary);
}

.h3, h3 {
  font-family: var(--font-display);
  font-size: var(--text-lg);         /* 25px */
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0;
  color: var(--color-text-primary);
}
```

### 6.2 Body Styles

```css
.body, p {
  font-family: var(--font-body);
  font-size: var(--text-base);       /* 16px */
  font-weight: 400;
  line-height: 1.55;
  letter-spacing: 0;
  color: var(--color-text-primary);  /* #0D322D */
}

.body-sm {
  font-family: var(--font-body);
  font-size: var(--text-sm);         /* 14px */
  font-weight: 400;
  line-height: 1.50;
  letter-spacing: 0.005em;
  color: var(--color-text-secondary); /* #5B544C */
}
```

### 6.3 UI and Functional Styles

```css
.ui-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);         /* 14px */
  font-weight: 500;
  line-height: 1.20;
  letter-spacing: 0.01em;
  color: var(--color-text-primary);
}

.caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);         /* 13px */
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0.01em;
  color: var(--color-text-tertiary); /* #6B645C */
}

.overline {
  font-family: var(--font-body);
  font-size: var(--text-2xs);        /* 10px */
  font-weight: 600;
  line-height: 1.20;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-brand);    /* #1B685E */
}
```

### 6.4 Display and Emphasis Styles

```css
.hero-heading {
  font-family: var(--font-display);
  font-size: var(--text-display);    /* 61px */
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);  /* #0D322D */
}

.stat-display {
  font-family: var(--font-display);
  font-size: var(--text-display);    /* 61px */
  font-weight: 700;
  line-height: 1.00;
  letter-spacing: -0.02em;
  color: var(--color-brand-primary); /* #3A8478 */
}

.quote {
  font-family: var(--font-display);
  font-size: var(--text-md);         /* 20px */
  font-weight: 400;
  line-height: 1.50;
  letter-spacing: 0;
  color: var(--color-brand-primary); /* #3A8478 */
}

.mono-inline {
  font-family: var(--font-mono);
  font-size: var(--text-sm);         /* 14px */
  font-weight: 400;
  line-height: inherit;
  letter-spacing: 0;
  color: inherit;
}

.mono-block {
  font-family: var(--font-mono);
  font-size: var(--text-sm);         /* 14px */
  font-weight: 400;
  line-height: 1.55;
  letter-spacing: 0;
  color: var(--color-text-primary);
}
```

---

## 7. Font Loading — Implementation

### 7.1 HTML Preload Tags

```html
<link rel="preload" href="/fonts/PlusJakartaSans-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/SourceSans3-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

### 7.2 @font-face Declarations

```css
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/PlusJakartaSans-Variable.woff2') format('woff2');
  font-weight: 200 800;
  font-display: swap;
}

@font-face {
  font-family: 'Source Sans 3';
  src: url('/fonts/SourceSans3-Variable.woff2') format('woff2');
  font-weight: 200 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Source Sans 3';
  src: url('/fonts/SourceSans3-Italic-Variable.woff2') format('woff2');
  font-weight: 200 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Source Code Pro';
  src: url('/fonts/SourceCodePro-Variable.woff2') format('woff2');
  font-weight: 200 900;
  font-display: swap;
}
```

**Note:** Italic and monospace files can be lazy-loaded. Only the first two `<link rel="preload">` tags are critical.

---

## 8. Snapping Decisions Log

| Value | Strict calculation | Snapped web value | Deviation | Rationale |
|-------|-------------------|-------------------|-----------|-----------|
| `3xs` | 8.192px | 8px | −0.192 | Floor to nearest integer. 8px is the minimum practical text size. |
| `2xs` | 10.240px | 10px | −0.240 | Floor to nearest integer. |
| `xs` | 12.800px | 13px | +0.200 | Rounded up. 12px would be too close to `2xs` (10px). 13px maintains step separation. |
| `sm` | 14.224px | 14px | −0.224 | Floor to standard web size. 14px has excellent rendering across platforms. |
| `lg` | 25.008px | 25px | −0.008 | Negligible rounding. |
| `xl` | 31.248px | 31px | −0.248 | Largest rounding in the scale. Still imperceptible. |
| `2xl` | 39.056px | 39px | −0.056 | Negligible. |
| `3xl` | 48.832px | 49px | +0.168 | Rounded up to maintain clear separation from `space-12` (48px). |
| `display` | 61.040px | 61px | −0.040 | Negligible. |

No rounding decision changes the visual intent or proportional relationship of the scale. All deviations are ≤0.25px.
