# Cena Health — Accessibility Audit: Color & Typography Tokens

_Pre-component WCAG 2.1 compliance audit of the color and typography token systems. AA is the floor; AAA is the target where claimed._

---

## 1. Audit Methodology

### Algorithm

All contrast ratios are calculated using the WCAG 2.1 relative luminance formula:

1. Convert sRGB hex values to linear RGB: for each channel, if `C_sRGB ≤ 0.04045`, then `C_lin = C_sRGB / 12.92`; otherwise `C_lin = ((C_sRGB + 0.055) / 1.055)^2.4`.
2. Relative luminance: `L = 0.2126 × R_lin + 0.7152 × G_lin + 0.0722 × B_lin`.
3. Contrast ratio: `CR = (L_lighter + 0.05) / (L_darker + 0.05)`.

All calculations are performed on the hex reference values provided in color.md. Hex values are taken as the implementation format; OKLCH values are canonical but hex is what browsers render and what this audit must verify.

### WCAG 2.1 thresholds applied

| Level | Normal text (< 24px regular / < 18.67px bold) | Large text (≥ 24px regular / ≥ 18.67px bold) | Non-text (SC 1.4.11) |
|-------|------|------|------|
| **AA** (SC 1.4.3) | 4.5:1 | 3:1 | 3:1 |
| **AAA** (SC 1.4.6) | 7:1 | 4.5:1 | — |

### Surface combinations audited

The color system defines five surfaces: `surface-page` (#FBFAF8), `surface-primary` (#F3F1EE), `surface-secondary` (#E7E4DF), `surface-teal` (#E9F5F2), and `surface-sage` (#E7F2E8). Text may appear on any of these. This audit checks every text token against every surface token — not only against `surface-page`, which is the only surface the color system explicitly claims against.

Four feedback background tints are also checked as text surfaces, since feedback banners and alerts carry text.

### Relative luminance reference table

| Token | Hex | Relative luminance |
|-------|-----|--------------------|
| `surface-page` | #FBFAF8 | 0.9566 |
| `surface-primary` | #F3F1EE | 0.8814 |
| `surface-secondary` | #E7E4DF | 0.7780 |
| `surface-teal` | #E9F5F2 | 0.8904 |
| `surface-sage` | #E7F2E8 | 0.8632 |
| `text-primary` | #0D322D | 0.0256 |
| `text-secondary` | #5B544C | 0.0909 |
| `text-tertiary` | #787066 | 0.1654 |
| `text-disabled` | #958E85 | 0.2743 |
| `text-brand` / `color-primary` | #3A8478 | 0.1876 |
| `on-primary` / `text-inverse` | #FBFAF8 | 0.9566 |
| `error-text` | #932B2A | 0.0810 |
| `warning-text` | #754B00 | 0.0881 |
| `success-text` | #174430 | 0.0453 |
| `info-text` | #0B4E6C | 0.0660 |
| `error-bg` | #FCE5E3 | 0.8228 |
| `warning-bg` | #F4EAD5 | 0.8288 |
| `success-bg` | #DCF0E5 | 0.8319 |
| `info-bg` | #DFEEF7 | 0.8355 |
| `border-default` | #D1CDC6 | 0.6130 |
| `border-strong` | #958E85 | 0.2743 |
| `border-brand` | #52A395 | 0.3016 |
| `border-focus` | #3A8478 | 0.1876 |
| `warning-base` | #E7B643 | 0.5085 |
| `error-base` | #C13C3B | 0.1488 |
| `success-base` | #3A8E64 | 0.2117 |
| `info-base` | #287AA3 | 0.1701 |

---

## 2. Claimed Contrast Verification

The color system makes six specific contrast claims in §2.3 and §4. Each is verified below.

### Claim 1: `text-primary` on `surface-page` — "≥15:1, exceeds WCAG AAA"

| Foreground | Background | Calculated ratio | Claimed | Verdict |
|------------|------------|-----------------|---------|---------|
| #0D322D | #FBFAF8 | **13.32:1** | ≥15:1 | **FAIL — claim overstated** |

The actual ratio is 13.32:1. This comfortably exceeds AAA (7:1) for both normal and large text. The system's accessibility posture is not at risk — but the specific claim of ≥15:1 is incorrect by approximately 11%. The likely cause is that the claim was estimated from OKLCH lightness values rather than calculated from the hex implementation values.

**Impact:** Low. AAA is met with significant margin. The documentation claim should be corrected to "≥13:1."

### Claim 2: `text-secondary` on `surface-page` — "≥7:1, meets WCAG AAA"

| Foreground | Background | Calculated ratio | Claimed | Verdict |
|------------|------------|-----------------|---------|---------|
| #5B544C | #FBFAF8 | **7.15:1** | ≥7:1 | **PASS — meets AAA** |

Passes, but with only 2% margin. Any darkening of this surface (e.g., a surface between `surface-page` and `surface-primary`) would drop below AAA.

### Claim 3: `text-tertiary` on `surface-page` — "≥4.5:1, meets WCAG AA"

| Foreground | Background | Calculated ratio | Claimed | Verdict |
|------------|------------|-----------------|---------|---------|
| #787066 | #FBFAF8 | **4.67:1** | ≥4.5:1 | **PASS — meets AA** |

Passes AA with 4% margin. See §3 for failures on other surfaces.

### Claim 4: `text-disabled` on `surface-page` — "~3:1, intentionally below AA"

| Foreground | Background | Calculated ratio | Claimed | Verdict |
|------------|------------|-----------------|---------|---------|
| #958E85 | #FBFAF8 | **3.10:1** | ~3:1 | **PASS — matches claim** |

Documented as intentional. See §3 for assessment of disabled state on other surfaces.

### Claim 5: `on-primary` on `color-primary` — "≥7:1 (AAA)"

| Foreground | Background | Calculated ratio | Claimed | Verdict |
|------------|------------|-----------------|---------|---------|
| #FBFAF8 | #3A8478 | **4.24:1** | ≥7:1 | **CRITICAL FAIL** |

The actual ratio is 4.24:1 — 40% below the claimed 7:1 and below even the AA normal-text threshold of 4.5:1. Even substituting pure white (#FFFFFF) yields only 4.42:1, still below AA.

This is the most significant finding in this audit. Teal-500 (#3A8478) sits in the mid-luminance range (L=0.1876) where neither white nor dark text achieves strong contrast. The `on-primary` color cannot meet the claimed AAA on the current `color-primary` value, and the gap is not marginal — it is structural.

**Impact:** Critical. Every primary button, every filled interactive element using `color-primary` as background with `on-primary` as text fails WCAG AA for normal text. This must be resolved before component design begins.

### Claim 6: All feedback text on respective backgrounds — "≥4.5:1 (AA)"

| Pair | Calculated ratio | Verdict |
|------|-----------------|---------|
| `error-text` (#932B2A) on `error-bg` (#FCE5E3) | **6.66:1** | PASS AA |
| `warning-text` (#754B00) on `warning-bg` (#F4EAD5) | **6.36:1** | PASS AA |
| `success-text` (#174430) on `success-bg` (#DCF0E5) | **9.25:1** | PASS AAA |
| `info-text` (#0B4E6C) on `info-bg` (#DFEEF7) | **7.63:1** | PASS AAA |

All four pass. Success and info exceed AAA. Error and warning exceed AA with comfortable margin.

---

## 3. Unchecked Combinations Audit

### 3.1 All text tokens on all surface tokens

The color system only claims contrast against `surface-page`. Text will appear on all five surfaces and on the four feedback backgrounds. Every combination is audited below.

#### `text-primary` (#0D322D) — all surfaces

| Surface | Ratio | AA normal | AAA normal | AA large |
|---------|-------|-----------|------------|----------|
| `surface-page` (#FBFAF8) | 13.32:1 | PASS | PASS | PASS |
| `surface-primary` (#F3F1EE) | 12.33:1 | PASS | PASS | PASS |
| `surface-secondary` (#E7E4DF) | 10.96:1 | PASS | PASS | PASS |
| `surface-teal` (#E9F5F2) | 12.45:1 | PASS | PASS | PASS |
| `surface-sage` (#E7F2E8) | 12.09:1 | PASS | PASS | PASS |

No issues. `text-primary` exceeds AAA on every surface by a wide margin.

#### `text-secondary` (#5B544C) — all surfaces

| Surface | Ratio | AA normal | AAA normal | AA large |
|---------|-------|-----------|------------|----------|
| `surface-page` (#FBFAF8) | 7.15:1 | PASS | PASS | PASS |
| `surface-primary` (#F3F1EE) | 6.61:1 | PASS | **FAIL** | PASS |
| `surface-secondary` (#E7E4DF) | 5.88:1 | PASS | **FAIL** | PASS |
| `surface-teal` (#E9F5F2) | 6.68:1 | PASS | **FAIL** | PASS |
| `surface-sage` (#E7F2E8) | 6.48:1 | PASS | **FAIL** | PASS |

**Finding:** `text-secondary` achieves AAA only on `surface-page`. On all other surfaces, it meets AA but falls short of AAA. Since the system targets AAA for secondary text, this is a conditional pass — the AAA claim holds only for the primary surface.

#### `text-tertiary` (#787066) — all surfaces

| Surface | Ratio | AA normal | AAA normal | AA large |
|---------|-------|-----------|------------|----------|
| `surface-page` (#FBFAF8) | 4.67:1 | PASS | FAIL | PASS |
| `surface-primary` (#F3F1EE) | 4.32:1 | **FAIL** | FAIL | PASS |
| `surface-secondary` (#E7E4DF) | 3.84:1 | **FAIL** | FAIL | PASS |
| `surface-teal` (#E9F5F2) | 4.37:1 | **FAIL** | FAIL | PASS |
| `surface-sage` (#E7F2E8) | 4.24:1 | **FAIL** | FAIL | PASS |

**Finding: `text-tertiary` fails AA on every surface except `surface-page`.** This is significant because captions and footnotes (which use `text-tertiary`) will appear on cards (`surface-primary`), sidebar panels (`surface-secondary`), and tinted sections (`surface-teal`, `surface-sage`). The current value only passes on the lightest surface and fails everywhere else.

The typography system uses `text-tertiary` for the Caption/Footnote style at `xs` (13px) — this is normal text requiring 4.5:1.

#### `text-disabled` (#958E85) — all surfaces

| Surface | Ratio | AA normal | AA large (3:1) |
|---------|-------|-----------|----------------|
| `surface-page` (#FBFAF8) | 3.10:1 | FAIL | PASS |
| `surface-primary` (#F3F1EE) | 2.87:1 | FAIL | **FAIL** |
| `surface-secondary` (#E7E4DF) | 2.55:1 | FAIL | **FAIL** |
| `surface-teal` (#E9F5F2) | 2.90:1 | FAIL | **FAIL** |
| `surface-sage` (#E7F2E8) | 2.82:1 | FAIL | **FAIL** |

**Finding:** The intentional sub-AA disabled state only reaches 3:1 on `surface-page`. On all other surfaces, it falls below even the 3:1 threshold. This is acceptable per WCAG — disabled controls are exempt from contrast requirements under SC 1.4.3 ("Text or images of text that are part of an inactive user interface component... have no contrast requirement"). However, the system should document that disabled text on non-page surfaces may be nearly invisible to low-vision users, and consider whether this compromises comprehensibility even if it is technically compliant.

#### `text-brand` / `color-text-brand` (#3A8478) — all surfaces

| Surface | Ratio | AA normal | AA large (3:1) |
|---------|-------|-----------|----------------|
| `surface-page` (#FBFAF8) | 4.24:1 | **FAIL** | PASS |
| `surface-primary` (#F3F1EE) | 3.92:1 | **FAIL** | PASS |
| `surface-secondary` (#E7E4DF) | 3.49:1 | **FAIL** | PASS |
| `surface-teal` (#E9F5F2) | 3.96:1 | **FAIL** | PASS |
| `surface-sage` (#E7F2E8) | 3.84:1 | **FAIL** | PASS |

**Finding: `color-text-brand` (teal-500) fails AA for normal text on every surface in the system.** It passes only the large-text threshold (3:1).

This token is used for:
- **Overline labels** (10px SemiBold — definitely not large text) — **FAILS AA**
- **Quote/Callout text** (20px Regular — below 24px threshold, not large text) — **FAILS AA**
- **Stat displays** (61px Bold — large text) — PASSES AA large text
- **Links and brand-colored accents** at body sizes — **FAILS AA**

The overline label is the most concerning: at 10px, it is the smallest text in the system and its contrast is below AA. The quote text at 20px Regular also fails for normal text.

### 3.2 `on-primary` on primary interactive states

| Background | Ratio | AA normal | AAA normal |
|-----------|-------|-----------|------------|
| `color-primary` (#3A8478) — default | 4.24:1 | **FAIL** | FAIL |
| `color-primary-hover` (#1B685E) — hover | 6.31:1 | PASS | FAIL |
| `color-primary-active` (#124D45) — pressed | 9.26:1 | PASS | PASS |

The default state fails AA. Hover passes AA. Active passes AAA. The interaction darkening (Principle: "engagement deepens the color") progressively improves contrast, but the resting state — the one users see most — is the one that fails.

Additionally, `text-primary` (#0D322D) on `color-primary` achieves only 3.14:1 — dark text on teal-500 also fails AA. Teal-500's mid-luminance (L=0.188) creates a dead zone where neither light nor dark text achieves 4.5:1.

### 3.3 Feedback text on non-matching surfaces

Feedback text tokens may appear outside their dedicated feedback containers — for instance, inline error messages below form fields on any surface.

| Text token | surface-page | surface-primary | surface-secondary | surface-teal | surface-sage |
|-----------|-------------|----------------|------------------|-------------|-------------|
| `error-text` | 7.68 | 7.11 | 6.32 | 7.18 | 6.97 |
| `warning-text` | 7.29 | 6.74 | 5.99 | 6.81 | 6.61 |
| `success-text` | 10.56 | 9.77 | 8.69 | 9.87 | 9.58 |
| `info-text` | 8.68 | 8.03 | 7.14 | 8.10 | 7.87 |

All feedback text tokens pass AA on every surface. Success and info exceed AAA everywhere. Error and warning meet AAA on `surface-page` and pass AA comfortably elsewhere. This is a strong result.

### 3.4 Focus ring visibility — `color-border-focus` (#3A8478)

WCAG SC 1.4.11 (Non-text Contrast) requires 3:1 for UI component boundaries.

| Surface | Ratio | SC 1.4.11 (3:1) |
|---------|-------|-----------------|
| `surface-page` | 4.24:1 | PASS |
| `surface-primary` | 3.92:1 | PASS |
| `surface-secondary` | 3.49:1 | PASS |
| `surface-teal` | 3.96:1 | PASS |
| `surface-sage` | 3.84:1 | PASS |

Focus ring passes non-text contrast on all surfaces. The lowest ratio (3.49:1 on `surface-secondary`) has adequate margin.

However, WCAG 2.2 SC 2.4.13 (Focus Appearance, AAA) and the emerging best practice of 2.4.11 (Focus Not Obscured) suggest that focus indicators should ideally achieve stronger contrast. The focus ring at 3.49:1 against `surface-secondary` is functional but not generous.

### 3.5 Border tokens — non-text contrast

| Token | surface-page | surface-primary | surface-secondary | surface-teal | surface-sage |
|-------|-------------|----------------|------------------|-------------|-------------|
| `border-default` (#D1CDC6) | 1.52 | 1.40 | 1.25 | 1.42 | 1.38 |
| `border-strong` (#958E85) | 3.10 | 2.87 | 2.55 | 2.90 | 2.82 |
| `border-brand` (#52A395) | 2.86 | 2.65 | 2.36 | 2.67 | 2.60 |
| `border-focus` (#3A8478) | 4.24 | 3.92 | 3.49 | 3.96 | 3.84 |

**Finding:**

- **`border-default` fails 3:1 on every surface.** This is the standard card and divider border. If `border-default` is the sole visual indicator of a component boundary (e.g., a card edge, an input field outline), it fails SC 1.4.11. If the border is accompanied by a surface color change (e.g., a card with `surface-primary` on `surface-page`), the combination may suffice — but the border alone does not.

- **`border-strong` passes 3:1 only on `surface-page`** (3.10:1). On all other surfaces it falls below 3:1. If `border-strong` is used for input field boundaries on non-page surfaces, it fails non-text contrast.

- **`border-brand` fails 3:1 on every surface.** Teal-600's luminance (L=0.302) is too similar to the light surfaces for adequate non-text contrast.

### 3.6 Feedback base colors as non-text indicators (icons, badges)

Feedback `*-base` colors are used for icons and badges. Per SC 1.4.11, these need 3:1 against their background.

| Token | surface-page | surface-primary | surface-secondary |
|-------|-------------|----------------|------------------|
| `error-base` (#C13C3B) | 5.06 | 4.68 | 4.16 |
| `warning-base` (#E7B643) | **1.80** | **1.67** | **1.48** |
| `success-base` (#3A8E64) | 3.85 | 3.56 | 3.16 |
| `info-base` (#287AA3) | 4.57 | 4.23 | 3.76 |

**Finding: `warning-base` (#E7B643) fails non-text contrast on every surface.** At L=0.509, it is too bright for 3:1 against any light surface. Warning icons, badge fills, and any graphical indicator using `warning-base` will be insufficiently distinct.

Error, success, and info base colors pass 3:1 on all primary surfaces. Success is marginal on `surface-secondary` (3.16:1).

### 3.7 Brand secondary and sage as decorative text

Though not specified as text tokens, component designers may reach for `brand-secondary` (teal-600, #52A395) or `brand-sage` (sage-700, #81B983) as accent text.

| Token | Hex | on surface-page | Assessment |
|-------|-----|----------------|------------|
| `brand-secondary` | #52A395 | 2.86:1 | Fails AA even for large text (3:1). Must not be used as text. |
| `brand-sage` | #81B983 | 2.19:1 | Fails all thresholds. Must not be used as text. |

These values should be documented as non-text-safe in the token system to prevent misuse.

---

## 4. Typography Accessibility Assessment

### 4.1 Minimum size vs. WCAG large-text thresholds

WCAG defines "large text" as ≥ 18pt (24px) at normal weight or ≥ 14pt (18.67px) at bold weight. This threshold determines which contrast ratio applies.

| Style | Size | Weight | Large text? | Contrast-critical? |
|-------|------|--------|-------------|-------------------|
| Hero heading | 61px | 700 (Bold) | Yes | No — uses `text-primary`, passes AAA everywhere |
| H1 | 39px | 700 (Bold) | Yes | No — same |
| H2 | 31px | 600 (SemiBold) | Yes | No — same |
| H3 | 25px | 600 (SemiBold) | Yes (≥24px at ≥Bold) | No — same |
| Stat display | 61px | 700 (Bold) | Yes | **Conditional** — uses `brand-primary`, passes 3:1 but not 4.5:1 |
| Quote/Callout | 20px | 400 (Regular) | **No** | **YES — uses `brand-primary` at 4.24:1, FAILS AA** |
| Body (md) | 20px | 400 (Regular) | **No** | Depends on color token used |
| Body (base) | 16px | 400 (Regular) | **No** | No — uses `text-primary`, passes AAA |
| Body small | 14px | 400 (Regular) | **No** | No — uses `text-secondary`, passes AA+ |
| UI label | 14px | 500 (Medium) | **No** (500 ≠ Bold) | No — uses `text-primary`, passes AAA |
| Caption | 13px | 400 (Regular) | **No** | **YES — uses `text-tertiary`, fails AA on non-page surfaces** |
| Overline | 10px | 600 (SemiBold) | **No** (10px < 18.67px) | **YES — uses `text-brand` at 4.24:1, FAILS AA** |
| `3xs` | 8px | — | **No** | Excluded from patient materials; still requires AA if used |
| `2xs` | 10px | — | **No** | Same concern as overline |

**Key findings:**

1. **Overline labels fail AA.** The overline is the most vulnerable style: smallest text in the system (10px) using the lowest-contrast text color (`text-brand` at 4.24:1). Even though SemiBold 600 is used, 10px is far below the 18.67px bold threshold for large text. This style requires 4.5:1 and does not achieve it.

2. **Quote text fails AA.** At 20px Regular, quote text is below the large-text threshold and uses `brand-primary` at 4.24:1. This is a named typographic style specified in the system that fails normal-text contrast.

3. **Caption text is fragile.** The caption style at 13px using `text-tertiary` passes AA only on `surface-page` (4.67:1). On every other surface, it fails. Captions on cards or tinted sections are non-compliant.

### 4.2 Line height compliance — WCAG 1.4.8 (AAA) and 1.4.12 (AA)

WCAG 1.4.8 (Level AAA) requires line spacing "at least 1.5 within paragraphs" for body text. WCAG 1.4.12 (Level AA) requires that content can be displayed with line-height at least 1.5 times the font size without loss of content.

| Style | Line height | WCAG 1.4.8 (1.5x body) | Assessment |
|-------|-------------|------------------------|------------|
| Body default | 1.55 | PASS | Exceeds minimum |
| Body small | 1.50 | PASS | At exact minimum |
| UI label | 1.20 | N/A | Not paragraph text |
| Caption | 1.45 | **CONDITIONAL** | Below 1.5; captions are typically short-form, not paragraphs |
| H1 | 1.15 | N/A | Heading, not paragraph |
| H2 | 1.20 | N/A | Heading |
| H3 | 1.25 | N/A | Heading |
| Quote | 1.50 | PASS | At exact minimum |

**Finding:** Body small at 1.50 is exactly at the threshold. The typography system notes that 1.45 is the "minimum acceptable value" for compact clinical contexts — but 1.45 would fail WCAG 1.4.8 AAA. If compact density applies a 0.75x multiplier to line heights as suggested in coherence-notes §1.4, body text at `1.55 × 0.75 = 1.16` would severely violate this requirement. The density tier system must not multiply line heights — it should multiply spacing between elements only.

### 4.3 Line length compliance — WCAG 1.4.8

WCAG 1.4.8 (AAA) recommends no more than 80 characters per line. The typography system specifies "never exceed 75 characters."

**PASS.** The system's 75-character limit is more restrictive than WCAG's 80-character recommendation. This must be enforced through max-width constraints in the layout system, not just documented as a guideline.

### 4.4 Letter spacing at extremes

| Style | Letter spacing | Concern |
|-------|---------------|---------|
| Overline | +0.08em | Appropriate for uppercase at small size |
| H1 | −0.01em | Acceptable at 39px; would be harmful at body sizes |
| Hero / Stat | −0.02em | Acceptable at 61px display |
| Caption | +0.01em | Appropriate for small text |

WCAG 1.4.12 (AA) requires that content can be displayed with letter-spacing at least 0.12em without loss. The negative letter-spacing on headings and stat displays should not be hardcoded — it should be overridable by user stylesheets. If implemented as a CSS custom property rather than a fixed value, this is compliant.

**PASS** — provided implementation allows user override.

### 4.5 Minimum accessible size

The typography system's smallest text is `3xs` at 8px. At this size, even maximum contrast (black on white at 21:1) produces text that is difficult for low-vision users. The system correctly restricts 8px to "minimum legal text, microprint" and excludes it from patient-facing materials.

`2xs` at 10px is used for overline labels. Combined with the contrast failure identified above, 10px text in brand teal on any surface is both small and low-contrast — a compounding accessibility risk.

**Recommendation:** The overline's minimum accessible usage requires either a contrast correction (darker color) or a size increase (to at least 12px), or both.

---

## 5. Color-Blind Simulation Assessment

### 5.1 Teal–sage distinction under dichromacy

The teal (H≈181) and sage (H≈145) families occupy a 36° hue span in the blue-green to yellow-green range. Under the two most common forms of color vision deficiency:

**Deuteranopia** (red-green, ~6% of males): Both teal and sage shift toward a blue-yellow axis. The hue distinction between H:181 and H:145 collapses substantially — both are perceived as variants of blue-gray to yellow-green, with the primary distinction becoming lightness rather than hue. At matched lightness values (e.g., teal-700 vs. sage-700), these two colors become nearly indistinguishable.

**Protanopia** (red-green, ~2% of males): Similar collapse. The teal-sage hue range maps almost entirely to the blue channel, and both families read as variations of the same blue-gray. Again, lightness becomes the only reliable differentiator.

**Assessment:** The color system's own §4 correctly identifies this risk and mandates "never use teal vs. sage as the sole differentiator." This is necessary and sufficient as a design rule — but it must be enforced at the component level. The concern identified in coherence-notes §2.1 (sage-dominant contexts where success green and sage blend) is amplified under dichromacy: success-base (#3A8E64) and sage-700 (#81B983) already have low contrast at 1.76:1 under normal vision. Under deuteranopia, both will appear as similar desaturated blue-green values.

### 5.2 Success green (H:160) separation from sage (H:145)

The success hue was shifted from H:155 to H:160 following the coherence review. Under normal vision, the 15° separation and significant lightness difference between `success-base` (L=0.58) and `sage-700` (L=0.73) provide adequate differentiation.

Under deuteranopia:
- The 15° hue shift from H:145 to H:160 is partially preserved — deuteranopes retain some blue-green discrimination, and H:160 maps slightly more toward blue than H:145.
- The primary distinguishing factor remains lightness: `success-base` is significantly darker than `sage-700`.
- However, `success-border` (#4F9870, L=0.253) vs. `sage-800` (#ACCFAD, L=0.564) — which might appear in proximity on patient nutrition cards — maintains adequate lightness contrast even under dichromacy.

**Assessment:** The H:160 shift is helpful but not decisive. The mandatory dual-cue rule (icon + text label for success on sage surfaces) is the actual safeguard. This rule must be non-negotiable in component specifications.

### 5.3 Functional color hue spread under dichromacy

| Color | Hue | Deuteranopia perception | Protanopia perception |
|-------|-----|------------------------|----------------------|
| Error (H:25) | Warm red-orange | Appears as dark ochre/brown — distinct from greens | Appears as dark yellow-brown — distinct |
| Warning (H:80-85) | Ochre-gold | Appears as warm yellow — distinct from greens | Appears as yellow — distinct |
| Success (H:160) | Desaturated green | Appears as blue-gray — may merge with teal | Appears as blue-gray — may merge with teal |
| Info (H:235) | Slate blue | Appears as blue — clearly distinct | Appears as blue — clearly distinct |

**Finding:** Error and warning are well-differentiated from the brand palette under all color vision conditions — the warm hues separate cleanly. Info (blue) is also clearly distinct. Success is the vulnerable color: it falls in the same blue-green-gray perceptual zone as teal and sage under both deuteranopia and protanopia. The mandatory icon + label requirement for success states is essential and must extend to all contexts where success green appears adjacent to any teal or sage element — not only on sage surfaces.

### 5.4 Tritanopia consideration

Tritanopia (~0.003% prevalence) affects blue-yellow discrimination. Under tritanopia:
- The teal family (blue-green) and sage family (yellow-green) become more distinguishable, not less — the blue-yellow contrast between them is exactly what tritanopes retain.
- Warning (ochre-gold) may merge with error (red-orange) as both shift toward the red end.
- Info (slate blue) may lose saturation and become difficult to distinguish from neutral gray.

These are low-prevalence edge cases. The existing dual-cue requirements for functional colors (icon + label + color) mitigate tritanopia risks.

---

## 6. Findings Summary

### Critical failures — must resolve before component design

| ID | Combination | Ratio | Required | Gap |
|----|------------|-------|----------|-----|
| **C1** | `on-primary` on `color-primary` | 4.24:1 | 4.5:1 AA (7:1 claimed) | -40% from claim; -6% from AA |
| **C2** | `text-brand` on `surface-page` (as normal text) | 4.24:1 | 4.5:1 AA | -6% from AA |

### Failures — must resolve or constrain usage

| ID | Combination | Ratio | Required | Notes |
|----|------------|-------|----------|-------|
| **F1** | `text-tertiary` on `surface-primary` | 4.32:1 | 4.5:1 AA | Captions on cards |
| **F2** | `text-tertiary` on `surface-secondary` | 3.84:1 | 4.5:1 AA | Captions on sidebars |
| **F3** | `text-tertiary` on `surface-teal` | 4.37:1 | 4.5:1 AA | Captions on teal sections |
| **F4** | `text-tertiary` on `surface-sage` | 4.24:1 | 4.5:1 AA | Captions on sage sections |
| **F5** | `text-brand` on all surfaces (as normal text) | 3.49–4.24:1 | 4.5:1 AA | Overline, quote, links |
| **F6** | `warning-base` as non-text on all surfaces | 1.48–1.80:1 | 3:1 SC 1.4.11 | Warning icons/badges |
| **F7** | `border-default` on all surfaces | 1.25–1.52:1 | 3:1 SC 1.4.11 | Card/divider borders |
| **F8** | `border-strong` on non-page surfaces | 2.55–2.90:1 | 3:1 SC 1.4.11 | Input borders on cards |
| **F9** | `border-brand` on all surfaces | 2.36–2.86:1 | 3:1 SC 1.4.11 | Teal decorative borders |

### Conditional passes — AA met, AAA not met on all surfaces

| ID | Combination | Range | Notes |
|----|------------|-------|-------|
| **P1** | `text-secondary` on non-page surfaces | 5.88–6.68:1 | AA pass; AAA only on surface-page |
| **P2** | `on-primary` on `primary-hover` | 6.31:1 | AA pass; AAA fail |

### Documented intentional sub-AA

| ID | Combination | Ratio | Rationale |
|----|------------|-------|-----------|
| **D1** | `text-disabled` on `surface-page` | 3.10:1 | Intentional per color.md. WCAG exempts disabled controls. |
| **D2** | `text-disabled` on other surfaces | 2.55–2.90:1 | Below 3:1 on non-page surfaces. Exempt per WCAG but may compromise comprehensibility for low-vision users. |

### Passes

| Combination | Assessment |
|-------------|-----------|
| `text-primary` on all surfaces | PASS AAA (10.96–13.32:1) |
| `text-secondary` on `surface-page` | PASS AAA (7.15:1) |
| `text-secondary` on all other surfaces | PASS AA (5.88–6.68:1) |
| `text-tertiary` on `surface-page` | PASS AA (4.67:1) |
| All feedback text on their respective backgrounds | PASS AA+ (6.36–9.25:1) |
| All feedback text on all surfaces | PASS AA (5.88–10.56:1) |
| `border-focus` on all surfaces | PASS 3:1 (3.49–4.24:1) |
| `error-base` non-text on all surfaces | PASS 3:1 (4.16–5.06:1) |
| `success-base` non-text on all surfaces | PASS 3:1 (3.16–3.85:1) |
| `info-base` non-text on all surfaces | PASS 3:1 (3.76–4.57:1) |
| Body line height (1.55) | PASS 1.4.8 |
| Body small line height (1.50) | PASS 1.4.8 (at minimum) |
| Line length (75 char max) | PASS 1.4.8 |
| All heading sizes vs. large-text threshold | PASS — all ≥ 24px or ≥ 18.67px bold |
| Minimum body size (16px) | PASS |

### Overstatement

| ID | Claim | Actual | Correction |
|----|-------|--------|-----------|
| **O1** | `text-primary` on `surface-page` "≥15:1" | 13.32:1 | Correct to "≥13:1" — still AAA |

---

## 7. Recommendations

### R1: Fix `color-primary` / `on-primary` contrast — CRITICAL

**Problem:** Teal-500 (#3A8478, L=0.188) is too light for white text and too dark for dark text. Neither `on-primary` (#FBFAF8) at 4.24:1 nor `text-primary` (#0D322D) at 3.14:1 achieves AA on it.

**Recommendation:** Use **teal-400 (#1B685E)** as the interactive primary background for filled elements (buttons, toggles, selected states). This achieves:

| Combination | Ratio | Level |
|-------------|-------|-------|
| `on-primary` (#FBFAF8) on teal-400 (#1B685E) | 6.31:1 | AA normal, AAA large |
| Pure white on teal-400 | 6.59:1 | AA normal, AAA large |

Teal-500 (#3A8478) remains `color-brand-primary` — the logo's value, the brand identity color. But `color-primary` (the interactive token used for button fills) shifts to teal-400. This is a one-step darkening that preserves the teal character while clearing AA. The hover state stays at teal-400 (already specified) or shifts to teal-300; the active state at teal-300 (already 9.26:1) is unchanged.

To reach the originally claimed AAA (7:1), use **teal-300 (#124D45)** at 9.26:1 — but this is significantly darker and may feel too heavy for primary buttons. AA via teal-400 is the pragmatic recommendation; AAA via teal-300 is available if the system decides buttons should be darker.

Update the `on-primary` claim in color.md §2.2 and §4 accordingly.

### R2: Darken `text-brand` for normal-text use — or restrict its usage

**Problem:** Teal-500 as text fails AA at all sizes below 24px regular / 18.67px bold.

**Recommendation (preferred):** Create a **`color-text-brand-accessible`** token using **teal-400 (#1B685E)** for all normal-text-size uses of brand-colored text. This achieves 6.31:1 on `surface-page` — AA for normal text, AAA for large text. Teal-400 is one step darker than teal-500 but remains recognizably teal. It preserves the brand hue while clearing the contrast threshold.

Token mapping:

| Context | Token | Value | Ratio on surface-page |
|---------|-------|-------|----------------------|
| Brand text at ≥ 24px / ≥ 18.67px bold | `color-text-brand` | teal-500 (#3A8478) | 4.24:1 (AA large) |
| Brand text at normal sizes (links, overline, quote) | `color-text-brand` | teal-400 (#1B685E) | 6.31:1 (AA normal) |

**Alternative (simpler):** Replace `color-text-brand` with teal-400 at all sizes. This is a single-value change that clears all contrast issues. The cost is that brand-colored text is slightly darker than the logo's "health" wordmark value — but at body sizes, this difference is nearly imperceptible, and the darker value actually reads as more authoritative per the system's own weight-value-authority principle.

The overline label, quote text, and link text should all use whichever text-brand value clears 4.5:1. The current teal-500 should be documented as a non-text color for graphical/decorative use only at sizes below the large-text threshold.

### R3: Darken `text-tertiary` to pass AA on non-page surfaces

**Problem:** #787066 (L=0.165) passes 4.5:1 only on `surface-page`.

**Recommendation:** Darken `text-tertiary` to approximately **#6B645C** (oklch ~52% with the same hue/chroma character). This value achieves:

| Surface | Current (#787066) | Proposed (#6B645C) |
|---------|-------------------|---------------------|
| `surface-page` | 4.67:1 | 5.59:1 |
| `surface-primary` | 4.32:1 | 5.17:1 |
| `surface-secondary` | 3.84:1 | 4.60:1 |
| `surface-teal` | 4.37:1 | 5.22:1 |
| `surface-sage` | 4.24:1 | 5.07:1 |

This clears AA on all surfaces including `surface-secondary`, the darkest standard surface. The visual difference from the current value is subtle — approximately one warm-neutral half-step darker — and preserves the tertiary text's intended role as the lightest readable text level in the system.

### R4: Darken `warning-base` for non-text contrast

**Problem:** #E7B643 (L=0.509) fails 3:1 on all surfaces as a non-text indicator.

**Recommendation:** Darken `warning-base` to approximately **#B58B20** (oklch ~60% 0.12 H:85). This achieves 3.01:1 on `surface-page` — just clearing the threshold. The color shifts from a bright gold to a deeper amber, which aligns with the system's "ochre-toned" description for warning and maintains the warm, desaturated character.

Alternatively, if the bright gold is essential for the warning icon's visibility, keep `warning-base` at its current value but mandate that warning indicators always pair the icon with `warning-border` (#CEA861) or `warning-text` (#754B00), both of which have adequate contrast. The `warning-base` color would then be restricted to fills that are accompanied by a higher-contrast border or label.

### R5: Document `border-default` as a decorative-only border

**Problem:** #D1CDC6 fails 3:1 on all surfaces.

**Recommendation:** Do not darken `border-default` — its role as a subtle divider and card border is intentional, and the system uses surface color shifts as the primary elevation mechanism (coherence-notes §6.3, "card and container components must support the warm border system"). Instead:

1. **Document that `border-default` must not be the sole visual indicator of a UI component boundary.** Cards using `border-default` must also have a surface color change (e.g., `surface-primary` card on `surface-page` background). Input fields must use `border-strong` or darker for their resting state if the border is the sole boundary indicator.
2. **Reassign input field resting borders to `border-strong`** or a new token between strong and default.
3. If a 3:1 subtle border is needed, **#B3ADA4** (warm-600, L=0.301) on `surface-page` gives 2.72:1 — still short. **#A8A199** at approximately oklch(70% 0.012 78) would achieve 3.0:1 while remaining visually subtle.

### R6: Strengthen `border-strong` for non-page surfaces

**Problem:** #958E85 passes 3:1 only on `surface-page`.

**Recommendation:** Darken to approximately **#857E75** (oklch ~62% 0.014 78). This achieves:

| Surface | Current (#958E85) | Proposed (#857E75) |
|---------|-------------------|---------------------|
| `surface-page` | 3.10:1 | 3.84:1 |
| `surface-primary` | 2.87:1 | 3.56:1 |
| `surface-secondary` | 2.55:1 | 3.16:1 |

This clears 3:1 on all standard surfaces. The one-step darkening preserves the warm neutral character.

### R7: Correct the `text-primary` contrast claim

**Problem:** Documented as ≥15:1, actual is 13.32:1.

**Recommendation:** Update color.md §2.3 to read: "≥13:1 — exceeds WCAG AAA." No token value change needed — the actual contrast is excellent.

### R8: Add usage restrictions for `brand-secondary` and `brand-sage` as text

**Problem:** Teal-600 (#52A395) at 2.86:1 and sage-700 (#81B983) at 2.19:1 fail all text contrast thresholds.

**Recommendation:** Add to color.md §5 (Compatibility Notes): "Neither `color-brand-secondary` (teal-600) nor `color-brand-sage` (sage-700) may be used as text color at any size. These values are for graphical elements, illustration accents, and decorative fills only. For brand-colored text, use `color-text-brand`."

### R9: Guard against density-tier line-height compression

**Problem:** If the compact density multiplier (0.75x) is applied to line heights, body text at 1.55 drops to 1.16 — a severe WCAG violation.

**Recommendation:** Specify explicitly in the typography system and spacing system: **Density tiers affect inter-element spacing only. Line height, letter spacing, and font size are never modified by the density multiplier.** This is implied by the current system but must be stated as a rule to prevent implementation error.

### R10: Mandate icon + label for success states system-wide

**Problem:** Success green is perceptually close to teal and sage under color-blind conditions.

**Recommendation:** Extend the current sage-surface-specific rule to all contexts: "Success states must always pair color with a checkmark icon and a text label. Never rely on `success-base` or `success-border` color alone to communicate success, regardless of the surface."

---

## Appendix: Token change summary

If all recommendations are adopted, the following tokens change:

| Token | Current | Proposed | Rationale |
|-------|---------|----------|-----------|
| `color-primary` (interactive fill) | teal-500 (#3A8478) | teal-400 (#1B685E) | R1: on-primary contrast |
| `color-text-brand` (normal text) | teal-500 (#3A8478) | teal-400 (#1B685E) | R2: text contrast |
| `color-text-tertiary` | warm-400 (#787066) | ~#6B645C | R3: multi-surface AA |
| `warning-base` | #E7B643 | ~#B58B20 | R4: non-text contrast |
| `color-border-strong` | warm-500 (#958E85) | ~#857E75 | R6: non-text on non-page |

Tokens that do **not** change:

| Token | Value | Reason |
|-------|-------|--------|
| `color-brand-primary` | teal-500 (#3A8478) | Remains the brand identity color (logo value). Only its use as interactive fill changes. |
| `color-text-primary` | teal-200 (#0D322D) | Passes AAA everywhere. |
| `color-text-secondary` | warm-300 (#5B544C) | Passes AA everywhere, AAA on page. |
| `border-default` | warm-700 (#D1CDC6) | Remains decorative; usage rules change, not the value. |
| `text-disabled` | warm-500 (#958E85) | Intentional sub-AA; WCAG-exempt. |
| All feedback text tokens | As specified | All pass AA on all surfaces. |
| `border-focus` | teal-500 (#3A8478) | Passes 3:1 non-text on all surfaces. |
