# Cena Health — Color System

_Design token specification for the Cena Health color system. OKLCH is canonical. Hex values are provided for reference and tooling compatibility._

---

## 0. Color System Principles

These principles govern every color decision in the Cena Health system. They derive from the brand brief and the structural logic of the logo palette.

### Principle 1: Chromatic Darks, Muted Lights

The brand's darkest values always carry color — never collapse to neutral black. The logo's anchor dark (`#0D322D`) is a green-black, not a true black. Conversely, the lightest values remain muted and warm, never candy-colored or high-chroma. This follows the logo's observed pattern: saturation decreases as lightness increases (brand brief §4, logo analysis §1).

**Application:** Text and foreground elements use chromatic darks. Tinted surfaces use low-chroma, warm pastels. Neither end of the value scale is neutral.

### Principle 2: Analogous, Not Monochromatic

The logo palette rotates hue ~37° from blue-green teal (H≈181) to warm sage green (H≈145) as values lighten. The color system preserves this logic: lighter values shift warmer. A single-hue teal ramp would contradict the logo's most distinctive structural property (logo analysis §1, "Key Observations").

**Application:** When creating tints or extending any color family, allow hue to drift slightly warmer at lighter values. Do not pin hue across an entire scale.

### Principle 3: Warm Ground, Cool Figure

The logo contains no warm colors. The brand brief emphasizes warmth, food, cultural specificity, and human connection — all of which demand warm tones the logo does not provide. The color system resolves this by introducing warm neutrals as the ground (surfaces, backgrounds, paper) against which the cool teal-sage figures operate. This creates clinical warmth through color relationship rather than through the brand colors themselves (brand brief §6, Q1).

**Application:** Primary surfaces use warm neutrals (cream, sand). Brand teals and sages sit on top of warm grounds, never on cool gray or pure white. The warmth comes from context, not from the brand color itself.

### Principle 4: Restraint in Functional Color

Healthcare UI requires red, yellow, and blue for semantic feedback. These colors must not compete with the teal-sage identity or overwhelm the organic, warm character of the brand. Functional colors are desaturated relative to industry defaults, and their background tints are calibrated to feel native alongside the warm neutral surface system (brand brief §2, Principle 1: Clinical Warmth).

**Application:** Error red is a warm, muted red-orange — not a pure crimson. Warning yellow is ochre-toned. Info blue is a subdued slate-blue. All functional background tints carry enough warmth to sit comfortably on cream surfaces.

### Principle 5: Color Carries Hierarchy

The logo uses darkness = authority and lightness = openness. "Cena" is heavy and dark; "health" is lighter and teal; the innermost icon ring is the lightest value. The color system extends this: darker, more saturated colors carry more visual weight and signal primary importance. Lighter, less saturated colors recede and support (logo analysis §3, "Implications for Visual Language").

**Application:** Primary actions and headings use the darkest brand values. Secondary and supporting elements use progressively lighter values. Do not use the lightest tints for primary UI actions.

### Principle 6: Two Registers, One System

The brand serves both hospital CFOs and grandmothers managing chronic conditions (brand brief §3, "Cross-audience tension"). The color system supports this through a single palette that shifts in emphasis — not through separate palettes. B2B materials lean on the teal-to-dark range (clinical credibility). Patient materials lean on the sage-to-warm-neutral range (approachable warmth). Both draw from the same system.

**Application:** The teal family governs clinical, institutional, and data-forward contexts. The sage and warm neutral families govern patient-facing, food-related, and community contexts. The system is one palette used at different saturation points, not two palettes stitched together.

---

## 1. Palette Architecture

### 1.1 Teal — Primary Brand Family

**Semantic role:** Primary brand identity, clinical credibility, institutional trust. This is the color of Cena Health as a system — the infrastructure, the platform, the clinical layer.

**Hue logic:** Centered on H≈181 (blue-green teal), matching the three teal values in the logo. Hue drifts slightly from H:183 at the darkest extreme to H:181 through the core range. This is a cooler family than the sage — it reads as healthcare without reading as cold, because its blue-green character is warmer than a pure cyan or blue teal.

**Chroma logic:** Peaks at mid-values (C≈0.083 at step 600, matching the logo's secondary teal) and tapers at both extremes. The darkest steps are chromatic but restrained. The lightest steps are barely tinted — enough to register as teal, not enough to feel saturated.

**Lightness logic:** 11 steps from near-black (L:15%) to near-white (L:96%). Steps 200, 500, and 600 are locked to the logo's exact values.

| Step | OKLCH | Hex | Notes |
|------|-------|-----|-------|
| 50 | `oklch(15.0% 0.025 183)` | `#010F0C` | Near-black with green cast. Deep backgrounds, overlay scrims. |
| 100 | `oklch(22.0% 0.035 183)` | `#04201C` | Very dark teal. Dark-mode surfaces if adopted. |
| **200** | **`oklch(28.9% 0.0426 182.8)`** | **`#0D322D`** | **LOCKED — logo anchor dark.** Primary text color, wordmark "Cena." |
| 300 | `oklch(38.0% 0.060 182)` | `#124D45` | Dark teal. Secondary text, strong borders. |
| 400 | `oklch(47.0% 0.075 181.5)` | `#1B685E` | Mid-dark teal. Interactive fill color. |
| **500** | **`oklch(56.3% 0.0762 181.3)`** | **`#3A8478`** | **LOCKED — logo primary teal.** Brand identity color. Wordmark "health," outermost icon ring. |
| **600** | **`oklch(66.0% 0.0827 181.0)`** | **`#52A395`** | **LOCKED — logo secondary teal.** Middle icon ring. Decorative brand moments. |
| 700 | `oklch(74.0% 0.065 181)` | `#7CB9AD` | Light teal. Decorative borders, illustration accents. |
| 800 | `oklch(83.0% 0.045 181)` | `#A8D1C9` | Pale teal. Tag backgrounds, subtle highlights. |
| 900 | `oklch(91.0% 0.025 181)` | `#D0E7E2` | Very light teal. Tinted surface backgrounds. |
| 950 | `oklch(96.0% 0.013 181)` | `#E9F5F2` | Near-white teal wash. Lightest tinted surface. |

---

### 1.2 Sage — Warm Green Family

**Semantic role:** Organic warmth, food and nutrition contexts, patient-facing materials, community. This is the color of Cena Health as a human experience — the meals, the cultural specificity, the living quality of the brand.

**Hue logic:** Centered on H≈145–148 (warm yellow-green), matching the logo's innermost icon ring. The hue shift from teal (H:181) to sage (H:145) is the logo's most important structural move — it signals that the brand is analogous, not monochromatic. Sage hue drifts slightly warmer (toward H:148) at the lightest values, continuing the analogous sweep.

**Chroma logic:** Peaks higher than teal's peak (C≈0.097 at step 700, matching the logo's sage value). Sage is the most chromatic family at its midpoint — appropriate for its role as the "alive" color in the system. Chroma tapers at extremes following the same logic as teal.

**Lightness logic:** 11 steps. Step 700 is locked to the logo's exact sage value. The sage scale is intentionally shifted lighter than the teal scale — its lowest step is not as dark as teal-50, and its core use range is steps 500–800. This reflects the logo's design: sage appears only at the lightest, innermost position.

| Step | OKLCH | Hex | Notes |
|------|-------|-----|-------|
| 50 | `oklch(15.0% 0.020 148)` | `#060D07` | Near-black sage. Rarely used; exists for completeness. |
| 100 | `oklch(22.0% 0.035 147)` | `#0F1F11` | Very dark sage. |
| 200 | `oklch(30.0% 0.050 147)` | `#1C351F` | Dark sage. Strong botanical accent. |
| 300 | `oklch(38.0% 0.065 146)` | `#2A4C2D` | Mid-dark sage. |
| 400 | `oklch(46.0% 0.078 146)` | `#3A643D` | Core dark sage. Dense illustration fills. |
| 500 | `oklch(55.0% 0.085 145.5)` | `#507F53` | Mid sage. Body text accent in patient materials. |
| 600 | `oklch(64.0% 0.090 145.5)` | `#689B6A` | Bright sage. Strong decorative use. |
| **700** | **`oklch(73.3% 0.0967 145.4)`** | **`#81B983`** | **LOCKED — logo sage green.** Innermost icon ring. |
| 800 | `oklch(82.0% 0.060 146)` | `#ACCFAD` | Pale sage. Soft backgrounds, card tints. |
| 900 | `oklch(90.0% 0.035 147)` | `#D0E5D1` | Very light sage. Surface tint. |
| 950 | `oklch(95.0% 0.018 148)` | `#E7F2E8` | Near-white sage wash. |

---

### 1.3 Warm Neutral — Ground Family

**Semantic role:** The essential addition the logo does not provide. Warm neutrals are the ground for the entire system — surfaces, backgrounds, paper textures, body text support. They carry the human warmth that the brand brief demands but the cool teal-sage palette cannot deliver alone.

**Hue logic:** H≈60–85 (warm yellow-brown territory). This places the warm neutrals roughly opposite the teal-sage range on the hue wheel, creating a complementary ground-figure dynamic. The hue drifts from H:60 at the darkest (slightly amber) to H:85 at the lightest (slightly warm gray), preventing the neutrals from ever feeling yellow.

**Chroma logic:** Very low throughout (C:0.003–0.018). These are neutrals — their warmth is felt, not seen. The peak chroma at mid-values (C:0.018 at step 500) is roughly one-fifth the chroma of the teal at its peak. This restraint prevents warm neutrals from competing with brand colors.

**Lightness logic:** 11 steps, but the primary use range is steps 800–950 (the cream/sand/off-white zone that serves as the dominant surface color). Dark warm neutrals exist for text in contexts where teal-200 would be too chromatic.

**Rationale — why not cool gray?** The brand brief identifies "clinical warmth" as the first design principle. A cool gray ground would make the teals feel medical and sterile. A warm ground makes the same teals feel organic and approachable — the warmth transfers by adjacency. This is the mechanism by which the brand achieves "clinical credibility and human warmth simultaneously" (brand brief §2).

| Step | OKLCH | Hex | Notes |
|------|-------|-----|-------|
| 50 | `oklch(15.0% 0.008 60)` | `#0E0A08` | Near-black warm. Alternative dark for non-brand contexts. |
| 100 | `oklch(25.0% 0.010 65)` | `#25211D` | Very dark warm brown. |
| 200 | `oklch(35.0% 0.013 68)` | `#3F3933` | Dark warm gray. Secondary body text alternative. |
| 300 | `oklch(45.0% 0.016 70)` | `#5B544C` | Mid-dark warm gray. Disabled text, tertiary labels. |
| 400 | `oklch(55.0% 0.018 73)` | `#787066` | Mid warm gray. Placeholder text, subtle borders. |
| 500 | `oklch(65.0% 0.016 75)` | `#958E85` | Light warm gray. Borders, dividers, deemphasized UI. |
| 600 | `oklch(75.0% 0.014 78)` | `#B3ADA4` | Pale warm gray. Subtle borders on light backgrounds. |
| 700 | `oklch(85.0% 0.011 80)` | `#D1CDC6` | Very light warm. Card borders, section dividers. |
| 800 | `oklch(92.0% 0.008 82)` | `#E7E4DF` | Sand. Secondary surface, card backgrounds. |
| 900 | `oklch(96.0% 0.005 84)` | `#F3F1EE` | Cream. Primary surface background. |
| 950 | `oklch(98.5% 0.003 85)` | `#FBFAF8` | Off-white. Lightest surface, page background. |

---

### 1.4 Functional Colors — Feedback System

**Rationale for approach:** Healthcare interfaces must communicate status clearly and accessibly. Standard SaaS reds, yellows, greens, and blues would clash with the teal-sage palette and overwhelm the warm, organic character of the brand. Every functional color here is desaturated relative to industry defaults and hue-shifted to avoid direct conflict with the brand palette.

#### 1.4.1 Error / Critical

**Hue:** H:25 (warm red-orange). Not pure red (H:0–10), which would clash violently with the teal palette. The warm shift creates a terracotta-adjacent red that feels serious without feeling alarming. Per logo analysis §6: "a standard red will clash violently with the teal palette. Consider warm, desaturated red-oranges instead."

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| error-bg | `oklch(94.0% 0.025 25)` | `#FCE5E3` | Background tint for error containers |
| error-border | `oklch(68.0% 0.120 25)` | `#D87972` | Border for error states |
| error-base | `oklch(55.0% 0.170 25)` | `#C13C3B` | Primary error color (icons, badges) |
| error-text | `oklch(45.0% 0.140 25)` | `#932B2A` | Error text on light backgrounds |

#### 1.4.2 Warning / Caution

**Hue:** H:80–85 (warm ochre-gold). Deliberately shifted away from pure yellow (H:100+) toward ochre, which relates naturally to the warm neutral family and the earthy, food-adjacent character of the brand.

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| warning-bg | `oklch(94.0% 0.030 85)` | `#F4EAD5` | Background tint for warning containers |
| warning-border | `oklch(75.0% 0.100 82)` | `#CEA861` | Border for warning states |
| warning-base | `oklch(60.0% 0.120 85)` | `#B58B20` | Primary warning color. Deeper amber achieves 3:1 non-text contrast on surface-page. _(Correction per accessibility-audit.md R4. Original #E7B643 failed SC 1.4.11 on all surfaces.)_ |
| warning-text | `oklch(45.0% 0.100 75)` | `#754B00` | Warning text on light backgrounds |

#### 1.4.3 Success / Confirmation

**Hue:** H:160 (desaturated green). Shifted 15° away from the sage family (H:145) to provide reliable perceptual distance in sage-dominant contexts — patient materials, nutrition content, and `surface-sage` backgrounds where sage and success would otherwise appear in close proximity.

_Note: Originally specified at H:155. Shifted to H:160 following Design System Synthesizer review (coherence-notes.md §2.1). The 15° separation ensures `success` remains distinguishable from `sage-700` even in the brand's most sage-heavy surfaces._

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| success-bg | `oklch(94.0% 0.025 160)` | `#DCF0E5` | Background tint for success containers |
| success-border | `oklch(62.0% 0.090 160)` | `#4F9870` | Border for success states |
| success-base | `oklch(58.0% 0.100 160)` | `#3A8E64` | Primary success color |
| success-text | `oklch(35.0% 0.060 160)` | `#174430` | Success text on light backgrounds |

> **Implementation note:** On sage-dominant surfaces (`surface-sage`, sage-tinted cards, patient nutrition contexts), success states must always pair the success color with a checkmark icon at `icon-sm` minimum and a text label. Never rely on color alone to communicate success on sage surfaces.

#### 1.4.4 Info / Informational

**Hue:** H:235 (slate blue). The only blue in the system. It is desaturated enough to read as neutral-informational rather than as a competing brand color. Its coolness provides maximum differentiation from the warm error and warning families.

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| info-bg | `oklch(94.0% 0.020 235)` | `#DFEEF7` | Background tint for info containers |
| info-border | `oklch(62.0% 0.080 235)` | `#538EB0` | Border for info states |
| info-base | `oklch(55.0% 0.100 235)` | `#287AA3` | Primary info color |
| info-text | `oklch(40.0% 0.080 235)` | `#0B4E6C` | Info text on light backgrounds |

---

### 1.5 Surface / Background System

Surfaces are not a separate color family — they are specific applications of the warm neutral, teal, and sage families at their lightest values. This section defines the named surface tokens.

| Token | Source | OKLCH | Hex | Use |
|-------|--------|-------|-----|-----|
| surface-page | warm-950 | `oklch(98.5% 0.003 85)` | `#FBFAF8` | Default page background |
| surface-primary | warm-900 | `oklch(96.0% 0.005 84)` | `#F3F1EE` | Primary content surface (cards, panels) |
| surface-secondary | warm-800 | `oklch(92.0% 0.008 82)` | `#E7E4DF` | Secondary surface (sidebar, grouped content) |
| surface-teal | teal-950 | `oklch(96.0% 0.013 181)` | `#E9F5F2` | Brand-tinted surface (feature callouts, hero sections) |
| surface-sage | sage-950 | `oklch(95.0% 0.018 148)` | `#E7F2E8` | Sage-tinted surface (nutrition content, patient materials) |
| surface-overlay | — | `oklch(15.0% 0.025 183 / 60%)` | — | Modal overlay (teal-50 at 60% opacity) |

**Rationale:** The default surface is warm cream (`#FBFAF8`), not pure white. Pure white (`#FFFFFF`) would create a cold, clinical ground that contradicts the brand's warmth principle. The 0.003 chroma at H:85 introduces a barely perceptible warmth — invisible in isolation but felt in aggregate. This is the most impactful single decision in the color system: it sets the temperature of every screen.

> **Judgment call flag:** Using off-white rather than pure white as the default surface is a strong opinion that goes beyond the brief. The brief requires "warmth" but does not specify surface color. I recommend this because: (1) the logo analysis identifies warm ground as the most critical palette addition; (2) pure white against the teal palette reads sterile; (3) the 0.003 chroma is subtle enough to not register as "yellow" or "beige" — it simply feels "not cold." If this is rejected, pure white can be substituted without breaking the token structure, but the emotional register of the brand will shift toward clinical and away from warm.

---

## 2. Semantic Token Layer

Semantic tokens map the raw palette to meaning. Implementations reference semantic tokens, not raw palette steps. This insulates UI from palette changes and enforces consistent usage across surfaces.

### 2.1 Brand Tokens

These lock the logo's exact values to named semantic roles.

| Token | Value | OKLCH | Hex |
|-------|-------|-------|-----|
| `color-brand-anchor` | teal-200 | `oklch(28.9% 0.0426 182.8)` | `#0D322D` |
| `color-brand-primary` | teal-500 | `oklch(56.3% 0.0762 181.3)` | `#3A8478` |
| `color-brand-secondary` | teal-600 | `oklch(66.0% 0.0827 181.0)` | `#52A395` |
| `color-brand-sage` | sage-700 | `oklch(73.3% 0.0967 145.4)` | `#81B983` |

### 2.2 Primary Action Tokens

| Token | Value | OKLCH | Hex | Notes |
|-------|-------|-------|-----|-------|
| `color-primary` | teal-400 | `oklch(47.0% 0.075 181.5)` | `#1B685E` | Interactive fill color (buttons, toggles, selected states). One step darker than `color-brand-primary` to achieve AA contrast with `on-primary`. |
| `color-primary-hover` | teal-300 | `oklch(38.0% 0.060 182)` | `#124D45` | Hover: darkens one further step. |
| `color-primary-active` | teal-300 | `oklch(38.0% 0.060 182)` | `#124D45` | Active/pressed: same as hover at this depth. |
| `color-primary-subtle` | teal-900 | `oklch(91.0% 0.025 181)` | `#D0E7E2` | Subtle/ghost button background |
| `color-on-primary` | — | `oklch(98.5% 0.003 85)` | `#FBFAF8` | Text on primary-colored backgrounds |

**Rationale for hover/active direction:** Darkening on interaction (rather than lightening) follows the logo's hierarchy principle — engagement deepens the color, signaling increased commitment. The on-primary text uses the warm off-white rather than pure white, maintaining warmth even in high-contrast contexts.

**Important: `color-primary` (interactive fill) vs. `color-brand-primary` (identity color).** These are now distinct values. `color-brand-primary` remains teal-500 (#3A8478) — the logo's locked value, used for brand identity expressions (stat displays, overline labels at large sizes, decorative brand moments). `color-primary` is teal-400 (#1B685E) — used wherever a filled interactive element needs text on top of it. This separation is required for WCAG AA compliance: teal-500's mid-luminance (L=0.188) creates a dead zone where neither light nor dark text achieves 4.5:1. Verified: `on-primary` (#FBFAF8) on teal-400 = 6.31:1 (AA normal text, AAA large text). _(Correction per accessibility-audit.md R1, finding C1.)_

### 2.3 Text Tokens

| Token | Value | OKLCH | Hex | Min contrast on surface-page |
|-------|-------|-------|-----|------|
| `color-text-primary` | teal-200 | `oklch(28.9% 0.0426 182.8)` | `#0D322D` | ≥13:1 — exceeds WCAG AAA _(Correction per accessibility-audit.md R7. Previous claim of ≥15:1 was overstated; actual ratio is 13.32:1, which still comfortably exceeds AAA.)_ |
| `color-text-secondary` | warm-300 | `oklch(45.0% 0.016 70)` | `#5B544C` | ≥7:1 — meets WCAG AAA |
| `color-text-tertiary` | warm-400 adjusted | `oklch(52.0% 0.016 70)` | `#6B645C` | ≥4.5:1 on all surfaces including surface-secondary. _(Correction per accessibility-audit.md R3. Original #787066 failed AA on all surfaces except surface-page.)_ |
| `color-text-disabled` | warm-500 | `oklch(65.0% 0.016 75)` | `#958E85` | ~3:1 — intentionally below AA for disabled state |
| `color-text-inverse` | warm-950 | `oklch(98.5% 0.003 85)` | `#FBFAF8` | For use on dark backgrounds |
| `color-text-brand` | teal-400 | `oklch(47.0% 0.075 181.5)` | `#1B685E` | Brand-colored text (links, overline labels, quotes). Teal-400 achieves 6.31:1 on surface-page (AA normal text). _(Correction per accessibility-audit.md R2, finding C2. Teal-500 fails AA for normal-size text on all surfaces.)_ |

**Rationale for teal-200 as primary text:** The logo uses `#0D322D` for the "Cena" wordmark — the most important text in the brand. Using this as the default text color extends the wordmark logic into the type system: all primary text carries the brand's chromatic dark. It reads as near-black in most contexts, revealing its green character only against true black or in large display sizes. This subtle coloring is more intentional and branded than a generic off-black.

**Rationale for warm neutrals as secondary/tertiary text:** Secondary text uses warm gray rather than teal to create clear hierarchy. If both primary and secondary text were teal-family, the hierarchy would depend entirely on lightness. Using a different hue family (warm vs. cool) creates a qualitative distinction: primary text says "brand"; secondary text says "information."

### 2.4 Surface Tokens

| Token | Value | OKLCH | Hex |
|-------|-------|-------|-----|
| `color-surface-page` | warm-950 | `oklch(98.5% 0.003 85)` | `#FBFAF8` |
| `color-surface-primary` | warm-900 | `oklch(96.0% 0.005 84)` | `#F3F1EE` |
| `color-surface-secondary` | warm-800 | `oklch(92.0% 0.008 82)` | `#E7E4DF` |
| `color-surface-teal` | teal-950 | `oklch(96.0% 0.013 181)` | `#E9F5F2` |
| `color-surface-sage` | sage-950 | `oklch(95.0% 0.018 148)` | `#E7F2E8` |
| `color-surface-overlay` | teal-50/60% | `oklch(15.0% 0.025 183 / 60%)` | — |

### 2.5 Border Tokens

| Token | Value | OKLCH | Hex |
|-------|-------|-------|-----|
| `color-border-default` | warm-700 | `oklch(85.0% 0.011 80)` | `#D1CDC6` | Decorative only. Fails SC 1.4.11 (3:1) on all surfaces. Must not be the sole visual indicator of a component boundary — always pair with a surface color change. |
| `color-border-strong` | warm-500 adjusted | `oklch(62.0% 0.014 78)` | `#857E75` | Passes 3:1 on all surfaces. Use for input field resting borders and any border that is the sole boundary indicator. _(Correction per accessibility-audit.md R6. Original #958E85 passed 3:1 only on surface-page.)_ |
| `color-border-brand` | teal-600 | `oklch(66.0% 0.0827 181.0)` | `#52A395` | Decorative/emphasis only. Fails SC 1.4.11 on all surfaces. Never the sole boundary indicator. |
| `color-border-focus` | teal-500 | `oklch(56.3% 0.0762 181.3)` | `#3A8478` | Passes 3:1 non-text on all surfaces (3.49–4.24:1). |

### 2.6 Feedback Tokens

| Token | Background | Border | Base | Text |
|-------|-----------|--------|------|------|
| `color-error-*` | `oklch(94% 0.025 25)` | `oklch(68% 0.12 25)` | `oklch(55% 0.17 25)` | `oklch(45% 0.14 25)` |
| `color-warning-*` | `oklch(94% 0.03 85)` | `oklch(75% 0.10 82)` | `oklch(60% 0.12 85)` | `oklch(45% 0.10 75)` |
| `color-success-*` | `oklch(94% 0.025 160)` | `oklch(62% 0.09 160)` | `oklch(58% 0.10 160)` | `oklch(35% 0.06 160)` |
| `color-info-*` | `oklch(94% 0.02 235)` | `oklch(62% 0.08 235)` | `oklch(55% 0.10 235)` | `oklch(40% 0.08 235)` |

Full hex values for feedback tokens are specified in §1.4.

---

## 3. Dark Mode Considerations

### Recommendation: Do not ship dark mode at launch. Develop it as a future phase.

**Reasoning:**

1. **The brand's warmth depends on warm light surfaces.** The emotional register documented in the brand brief — "clinical infrastructure that feels human," "warm without softness," "dignified humanity" — is achieved through the interaction of cool teal figures on warm cream grounds. Dark mode inverts this relationship and risks losing the warmth that differentiates Cena Health from standard healthcare brands. The logo was designed for light backgrounds; its concentric ring structure reads best against warm, light surfaces where the lightness ramp from dark anchor to sage can express its full range.

2. **The primary audiences do not require dark mode.** Hospital system buyers review materials in well-lit clinical and office environments. Patients interact with nutrition plans in kitchens and at dining tables. Investor materials are viewed in conference rooms and on-screen in daylight. None of these contexts create strong demand for dark mode.

3. **Dark mode done poorly is worse than no dark mode.** The teal-sage palette has narrow chroma ranges — a hasty inversion would produce either washed-out or garish results. A proper dark mode requires re-mapping every surface, text, and feedback token with attention to the chromatic-dark principle.

### If dark mode is later required

The following sketch outlines the approach. It has not been tested and should be validated with full contrast audits before adoption.

**Key inversions:**

| Light mode token | Dark mode mapping | Rationale |
|-----------------|-------------------|-----------|
| `surface-page` (warm-950) | `oklch(18.0% 0.010 183)` | Near-black with teal cast — maintains chromatic dark principle |
| `surface-primary` (warm-900) | `oklch(22.0% 0.012 180)` | Slightly elevated from page |
| `surface-secondary` (warm-800) | `oklch(26.0% 0.015 178)` | Third surface level |
| `text-primary` (teal-200) | `oklch(92.0% 0.008 82)` — warm-800 equivalent | Warm near-white, not pure white |
| `text-secondary` (warm-300) | `oklch(75.0% 0.014 78)` — warm-600 equivalent | Mid-light warm gray |
| `color-primary` (teal-400) | `oklch(66.0% 0.0827 181.0)` — teal-600 | Lightened primary for dark bg contrast |

**Principle:** Dark mode surfaces use the teal family at very low lightness and chroma, not neutral dark grays. This maintains the chromatic-dark principle across the entire surface system. Text inverts to warm off-whites, preserving the warm-vs-cool figure-ground relationship (now warm text on cool surface, rather than cool text on warm surface).

---

## 4. Accessibility Notes

### Contrast ratios

All semantic text tokens have been designed to meet or exceed WCAG AA (4.5:1) on their intended surface, with primary and secondary text meeting AAA (7:1). Specific minimums:

- `text-primary` on `surface-page`: ≥13:1 (AAA — claim corrected per accessibility-audit.md R7)
- `text-secondary` on `surface-page`: ≥7:1 (AAA large and normal)
- `text-tertiary` on all surfaces: ≥4.5:1 (AA normal — corrected value #6B645C)
- `on-primary` on `color-primary`: ≥6.3:1 (AA normal, AAA large — corrected to teal-400)
- All feedback text tokens on their respective feedback backgrounds: ≥4.5:1 (AA normal)

### Color-blind considerations

The teal-sage palette occupies a narrow hue range (H:145–183). For users with deuteranopia or protanopia (the most common color vision deficiencies), teal and sage may be difficult to distinguish. Mitigations:

1. **Never use teal vs. sage as the sole differentiator** between two states or categories. Always pair with shape, icon, label, or position.
2. **Functional colors are spread across the hue wheel** (H:25, 75–85, 160, 235), providing maximum differentiation under all color vision conditions.
3. **Error red (H:25) is well-separated from the teal-sage range** and reads as distinct even under deuteranopia. However, downstream implementers should always pair error states with iconography (X or exclamation mark).
4. **Success states must always use dual-cue confirmation** (icon + text label) in all contexts — not only on sage surfaces. Success green (H:160) may merge perceptually with teal and sage under deuteranopia.

---

## 5. Compatibility Notes for Downstream Agents

### For the Typographer

- **Primary text color is `#0D322D` (teal-200)**, a chromatic dark that reads as near-black. If you use this as your body text color, it will feel branded at display sizes and neutral at body sizes. This is intentional. Do not substitute true black (`#000`) — it would break the chromatic-dark principle.
- **The two-tone wordmark logic** (dark "Cena" + teal "health") can extend into the type system. For brand moments, headings in teal-200 with key terms in `color-text-brand` (teal-400) create the two-tone effect. Teal-500 (`color-brand-primary`) must not be used as text color below the large-text threshold.
- **Secondary text uses warm neutrals, not teal.** If you design a typographic hierarchy where lighter weights or smaller sizes are used for secondary content, pair them with `color-text-secondary` (`#5B544C`), not a lighter teal. The hue shift from teal (primary) to warm (secondary) reinforces the hierarchy.
- **Weight and color should align.** The logo establishes that heavier weight = darker color = more authority. A bold heading in teal-200 and a regular paragraph in warm-300 follows this logic. A bold heading in a light teal would contradict it.
- **Density tiers must not modify line heights.** The compact density multiplier (0.75×) applies to spacing between elements only. Body text line height (1.55) must never be multiplied by the density scalar — doing so would produce 1.16 line height in compact mode, violating WCAG 1.4.8.

### For the Space Architect

- **Surfaces are not pure white.** The default page background is `#FBFAF8` (warm off-white, L:98.5%). If you are defining spacing tokens or layout patterns, test them against this background — not `#FFFFFF`. The difference is subtle but affects the perception of shadow and elevation.
- **Card and panel elevation** should use warm neutral borders (`#D1CDC6`) rather than box-shadows, or if shadows are used, they should be warm-tinted (`oklch(45% 0.008 70 / 10%)`) not cool gray. This prevents elevation from introducing coldness into the surface system.
- **`color-border-default` is decorative only** and must not be the sole visual indicator of a component boundary. Always pair it with a surface color change. Use `color-border-strong` (#857E75) for any border that is the primary boundary cue.
- **The tinted surfaces** (`surface-teal` and `surface-sage`) are available for section differentiation in long-scroll layouts. Space these at least one hierarchy level apart — don't place teal-tinted and sage-tinted sections adjacent without a neutral separator.

### For the Visual Language Curator

- **`color-brand-secondary` (teal-600, #52A395) and `color-brand-sage` (sage-700, #81B983) must never be used as text color at any size.** Teal-600 achieves only 2.86:1 and sage-700 only 2.19:1 on surface-page — both fail all WCAG text contrast thresholds. These values are for graphical elements, illustration accents, icon fills, and decorative surfaces only. For brand-colored text, use `color-text-brand` (teal-400). _(Per accessibility-audit.md R8.)_
- **The illustration palette should draw from the full teal and sage scales**, not just the four logo values. Steps 300–700 in both families provide the core illustration range — dark enough to carry visual weight, light enough to feel open and organic.
- **Warm neutrals are the illustration ground.** Illustrated scenes should sit on warm surfaces, and any background fills within illustrations should use warm neutral 800–950, not white or gray. This keeps illustrations feeling embedded in the brand environment rather than floating in a void.
- **The warm neutral family is your path to depicting food and skin tones.** The logo provides no warm colors. The warm neutral scale (H:60–85) can be extended toward H:40–50 (terracotta/clay) for illustration purposes where food coloring, skin tones, or cultural artifacts need warm representation. These extended illustration colors should not become UI tokens — they live in the illustration layer only.
- **Functional colors should not appear in illustrations.** Error-red, warning-gold, info-blue, and success-green are reserved for UI feedback. If an illustration needs to depict a warning or alert, use the narrative context (a character's expression, a visual indicator) rather than the functional color itself. This preserves the semantic meaning of functional colors for interactive contexts.

> **Judgment call flag — illustration warm extension:** The suggestion that the warm neutral family be extended toward H:40–50 for illustration purposes goes beyond what the brief specifies. The brief requires "culturally specific" depiction of food and communities, which cannot be achieved with a teal-sage-cream palette alone. This extension is recommended but must be governed by the Visual Language Curator to prevent scope creep into the token layer. Illustration colors live in the illustration system, not in this color token file.

---

## Appendix A: Full Palette Reference

All values in a single table for implementation reference.

### Teal Family

| Step | OKLCH | Hex |
|------|-------|-----|
| 50 | `oklch(15.0% 0.025 183)` | `#010F0C` |
| 100 | `oklch(22.0% 0.035 183)` | `#04201C` |
| 200 | `oklch(28.9% 0.0426 182.8)` | `#0D322D` |
| 300 | `oklch(38.0% 0.060 182)` | `#124D45` |
| 400 | `oklch(47.0% 0.075 181.5)` | `#1B685E` |
| 500 | `oklch(56.3% 0.0762 181.3)` | `#3A8478` |
| 600 | `oklch(66.0% 0.0827 181.0)` | `#52A395` |
| 700 | `oklch(74.0% 0.065 181)` | `#7CB9AD` |
| 800 | `oklch(83.0% 0.045 181)` | `#A8D1C9` |
| 900 | `oklch(91.0% 0.025 181)` | `#D0E7E2` |
| 950 | `oklch(96.0% 0.013 181)` | `#E9F5F2` |

### Sage Family

| Step | OKLCH | Hex |
|------|-------|-----|
| 50 | `oklch(15.0% 0.020 148)` | `#060D07` |
| 100 | `oklch(22.0% 0.035 147)` | `#0F1F11` |
| 200 | `oklch(30.0% 0.050 147)` | `#1C351F` |
| 300 | `oklch(38.0% 0.065 146)` | `#2A4C2D` |
| 400 | `oklch(46.0% 0.078 146)` | `#3A643D` |
| 500 | `oklch(55.0% 0.085 145.5)` | `#507F53` |
| 600 | `oklch(64.0% 0.090 145.5)` | `#689B6A` |
| 700 | `oklch(73.3% 0.0967 145.4)` | `#81B983` |
| 800 | `oklch(82.0% 0.060 146)` | `#ACCFAD` |
| 900 | `oklch(90.0% 0.035 147)` | `#D0E5D1` |
| 950 | `oklch(95.0% 0.018 148)` | `#E7F2E8` |

### Warm Neutral Family

| Step | OKLCH | Hex |
|------|-------|-----|
| 50 | `oklch(15.0% 0.008 60)` | `#0E0A08` |
| 100 | `oklch(25.0% 0.010 65)` | `#25211D` |
| 200 | `oklch(35.0% 0.013 68)` | `#3F3933` |
| 300 | `oklch(45.0% 0.016 70)` | `#5B544C` |
| 400 | `oklch(55.0% 0.018 73)` | `#787066` |
| 500 | `oklch(65.0% 0.016 75)` | `#958E85` |
| 600 | `oklch(75.0% 0.014 78)` | `#B3ADA4` |
| 700 | `oklch(85.0% 0.011 80)` | `#D1CDC6` |
| 800 | `oklch(92.0% 0.008 82)` | `#E7E4DF` |
| 900 | `oklch(96.0% 0.005 84)` | `#F3F1EE` |
| 950 | `oklch(98.5% 0.003 85)` | `#FBFAF8` |

### Functional Colors

| Family | Token | OKLCH | Hex |
|--------|-------|-------|-----|
| Error | bg | `oklch(94.0% 0.025 25)` | `#FCE5E3` |
| Error | border | `oklch(68.0% 0.120 25)` | `#D87972` |
| Error | base | `oklch(55.0% 0.170 25)` | `#C13C3B` |
| Error | text | `oklch(45.0% 0.140 25)` | `#932B2A` |
| Warning | bg | `oklch(94.0% 0.030 85)` | `#F4EAD5` |
| Warning | border | `oklch(75.0% 0.100 82)` | `#CEA861` |
| Warning | base | `oklch(60.0% 0.120 85)` | `#B58B20` |
| Warning | text | `oklch(45.0% 0.100 75)` | `#754B00` |
| Success | bg | `oklch(94.0% 0.025 160)` | `#DCF0E5` |
| Success | border | `oklch(62.0% 0.090 160)` | `#4F9870` |
| Success | base | `oklch(58.0% 0.100 160)` | `#3A8E64` |
| Success | text | `oklch(35.0% 0.060 160)` | `#174430` |
| Info | bg | `oklch(94.0% 0.020 235)` | `#DFEEF7` |
| Info | border | `oklch(62.0% 0.080 235)` | `#538EB0` |
| Info | base | `oklch(55.0% 0.100 235)` | `#287AA3` |
| Info | text | `oklch(40.0% 0.080 235)` | `#0B4E6C` |

---

## Appendix B: Judgment Call Summary

Decisions that go beyond or extend the brief, flagged for review:

1. **Warm off-white default surface** (§1.5): The brief requires warmth but does not specify surface color. This system uses `#FBFAF8` instead of `#FFFFFF`. Reversible without structural impact.

2. **Success green hue shift** (§1.4.3): Success shifted from H:155 to H:160 following Design System Synthesizer review. The 15° separation from sage (H:145) provides reliable perceptual distance in sage-dominant contexts. Dual-cue confirmation (icon + label) required on all surfaces.

3. **Illustration warm color extension** (§5, Visual Language Curator note): Suggested extending warm neutrals toward H:40–50 for food/cultural illustration. This is outside the token system's scope — the recommendation is directional, not prescriptive.

4. **Dark mode deferral** (§3): The brief does not mention dark mode. This system recommends against launching with it. If stakeholders require dark mode, the sketch in §3 provides a starting point, but it needs full validation.

5. **Teal-200 as primary text color** (§2.3): Using the logo's anchor dark as default body text is an extension of the wordmark's logic. It reads as near-black in practice. If this proves too chromatic for dense body text in clinical documentation, warm-100 (`#25211D`) is the fallback — less branded but more neutral.

6. **`color-primary` separated from `color-brand-primary`** (§2.2): Interactive fill (teal-400) is now distinct from brand identity color (teal-500). This was required for WCAG AA compliance. Brand identity color remains teal-500 everywhere it is used decoratively; teal-400 is used for any interactive element that carries white-ish text on top of it.
