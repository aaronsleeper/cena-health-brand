# Cena Health — Logo Visual Analysis

_Formal analysis of `logo-cenahealth-teal.svg` for use by Color Theorist, Typographer, and all downstream visual agents._

---

## 1. Color Values

The logo contains exactly four colors. No gradients, no opacity variation, no filters.

### Color 1: `#0D322D`
- **Role:** Wordmark "Cena" (the first four letters)
- **Display P3:** `color(display-p3 0.0510 0.1961 0.1765)`
- **Perceptual character:** Near-black with a strong green undertone. Reads as black at a glance but reveals its green cast when placed against true black (`#000000`). This is a chromatic dark — it has color identity without sacrificing authority. Functions as the brand's anchoring neutral.
- **Lightness:** Very low. Approximately 15-18% perceived lightness.

### Color 2: `#3A8478`
- **Role:** Wordmark "health" (all five letters) AND the outermost ring of the icon mark
- **Display P3:** `color(display-p3 0.2275 0.5176 0.4706)`
- **Perceptual character:** A mid-saturation teal sitting between green and blue, leaning green. Warm for a teal — it avoids the cold, clinical blue-teal common in healthcare brands. This is the brand's primary color and carries the most surface area across the full logo (wordmark + icon).
- **Lightness:** Medium. Approximately 45-50% perceived lightness.

### Color 3: `#52A395`
- **Role:** Middle ring of the icon mark only
- **Display P3:** `color(display-p3 0.3216 0.6392 0.5843)`
- **Perceptual character:** A lighter, slightly greener teal. Still clearly in the same family as `#3A8478` but with noticeably more luminosity. The shift from Color 2 to Color 3 is primarily a lightness step with a subtle hue rotation toward green.
- **Lightness:** Medium-high. Approximately 58-62% perceived lightness.

### Color 4: `#81B983`
- **Role:** Innermost ring of the icon mark only
- **Display P3:** `color(display-p3 0.5059 0.7255 0.5137)`
- **Perceptual character:** Sage green. This is a significant hue departure from the teals — it has shifted decisively from blue-green into true green territory with a warm, muted quality. It reads as natural, botanical, alive. This is the lightest and warmest value in the logo.
- **Lightness:** Medium-high. Approximately 67-70% perceived lightness.

### Color Relationships

The four colors form a **lightness ramp** from near-black to medium sage:

```
#0D322D ████  (anchor dark, green-black)
#3A8478 ████  (primary teal, mid-value)
#52A395 ████  (secondary teal, lighter)
#81B983 ████  (sage green, lightest)
```

The hue also rotates across this ramp: from **green-black** → **blue-green teal** → **green teal** → **warm sage green**. This means the logo's palette is not a simple monochromatic scale — it contains a deliberate hue shift from cool-teal to warm-green as values get lighter. This is the most important observation for palette expansion.

---

## 2. Geometry and Form

### Icon Structure

The icon mark is built from **three concentric, organic ring shapes** rendered using SVG `fill-rule="evenodd"` — each path defines an outer and inner boundary, and the even-odd rule fills only the space between them, creating a ring/outline effect.

**The form is a stylized six-lobed organic shape** — a rounded, roughly symmetrical structure with petal-like extensions radiating from a shared center point (approximately x=32, y=32 in the SVG coordinate space). The lobes extend:
- Upward (top)
- Upper-left and upper-right
- Lower-left and lower-right
- Downward (bottom) — though less pronounced due to the overall proportions

This creates a form reminiscent of:
- A **flower or seed pod** viewed from above — organic, natural, living
- A **molecular or cellular structure** — scientific, systematic, healthcare-adjacent
- A **community gathering** — multiple forms clustered together, connected at center

The visual idea the mark communicates is **organic interconnection**: multiple elements growing from or connected to a shared center, rendered with natural rather than geometric precision.

### Symmetry

The form has **approximate bilateral symmetry** along the vertical axis (left-right mirror), with the center at x≈32. It is not perfectly mathematically symmetric — there are subtle variations in the path coordinates that give it an organic, slightly hand-drawn quality even in vector form.

### Icon Dimensions

The icon occupies roughly the left quarter of the SVG canvas:
- Icon bounding box: approximately x=10 to x=54, y=10 to y=53
- This gives the icon a nearly square aspect ratio (~44×43 units)

---

## 3. Line Quality and Weight

### Wordmark

The wordmark uses **two distinct stroke weights**:

- **"Cena" (paths 1-4, filled `#0D322D`):** Heavier, bolder letterforms. These are filled shapes, not strokes — the letters have substantial visual mass. The forms suggest a **medium-weight to semi-bold sans-serif** with conventional proportions. Counter spaces are generous. No decorative features.

- **"health" (paths 5-10, filled `#3A8478`):** Noticeably lighter letterforms. These filled paths are thinner, with more delicate proportions suggesting a **light to regular weight sans-serif**. The contrast with "Cena" is deliberate and significant — "health" literally carries less visual weight than the proper noun.

This weight differential creates a clear hierarchy: **Cena** (the entity) is the noun; **health** (the domain) is the qualifier. The brand name leads; the sector follows.

### Icon Mark

The icon's three concentric rings are created through even-odd filled paths, resulting in **consistent stroke-like widths** within each ring:

- **Outer ring (`#3A8478`):** Widest apparent stroke, approximately 3-4 units. This matches the primary brand teal and shares its color with the "health" wordmark, visually linking the icon to the text.
- **Middle ring (`#52A395`):** Slightly narrower apparent stroke, approximately 2.5-3.5 units.
- **Inner ring (`#81B983`):** Narrowest apparent stroke, approximately 2-3 units.

The rings get progressively thinner as they move inward, reinforcing the lightness-to-center gradient. This creates a subtle **radiating outward** energy — the icon feels like it is growing or emanating from its center.

### Implications for Visual Language

The logo establishes two key stroke/weight principles:
1. **Weight carries meaning** — heavier elements are more important, more anchored, more authoritative
2. **Lightness implies openness** — thinner, lighter elements feel more accessible, more inviting, more organic

Any illustration system or UI component library should respect this logic. Bold elements anchor; light elements breathe.

---

## 4. Scale and Proportion

### SVG Canvas
- Total dimensions: **349 × 64 units** (roughly 5.5:1 aspect ratio)
- This is a wide horizontal lockup optimized for header/navigation use

### Icon-to-Wordmark Relationship
- **Icon width:** ~44 units (12.6% of total width)
- **Wordmark width:** ~280 units (80.2% of total width, from "C" to "h" in "health")
- **Gap between icon and wordmark:** ~24 units (6.9% of total width)
- **Icon height:** ~43 units, nearly the full vertical height of the canvas (67% of 64-unit height)
- **Wordmark cap height:** ~42 units for "Cena," ~42 units for "health" ascenders

The icon and wordmark are **vertically scaled to match** — neither dominates the vertical space. The icon is compact and dense; the wordmark is expansive and linear. Together they create a balanced horizontal composition where the icon functions as a compact, identifiable mark and the wordmark provides full legibility.

### "Cena" vs. "health" Proportions
- "Cena" occupies approximately x=62 to x=194 (~132 units, 37.8% of total width)
- "health" occupies approximately x=200 to x=338 (~138 units, 39.5% of total width)

The two words are nearly equal in width, but "Cena" carries more visual mass due to its heavier weight. This is deliberate: equal spatial allocation with unequal visual weight creates a hierarchy that is felt, not forced.

### Hierarchy Implications
The visual hierarchy, from highest to lowest emphasis:
1. **Icon mark** — dense, colorful, compact (the thing you remember)
2. **"Cena" wordmark** — heavy, dark, authoritative (the name you read)
3. **"health" wordmark** — lighter, teal, qualifying (the context you register)

This hierarchy tells downstream agents that the icon mark should be able to stand alone, that "Cena" is the primary text identifier, and that "health" is contextual framing that can be de-emphasized when space is constrained.

---

## 5. Implied Style Directions

### Compatible Illustration Styles
- **Organic line illustration with variable weight** — the logo's combination of organic form and controlled execution maps directly to this. Hand-drawn quality with professional consistency.
- **Soft geometric** — rounded shapes, generous radii, no sharp corners. The icon's lobed form is built from curves, not angles.
- **Layered/translucent compositions** — the concentric ring structure suggests visual systems built from overlapping, semi-transparent layers.
- **Botanical/natural motifs** — the icon reads as plant-like; illustration that incorporates organic and food-related imagery will feel native.

### Compatible Surface Treatments
- **Matte, warm finishes** — nothing glossy, metallic, or high-contrast
- **Subtle texture** (paper grain, linen, soft noise) — adds the tactile warmth the brand's organic forms suggest
- **Flat color with minimal gradients** — the logo uses flat fills exclusively; any gradients in the system should be subtle and purposeful

### Compatible Typographic Moods
- **Humanist sans-serifs** — the wordmark's proportions and generous counters suggest a humanist rather than geometric or grotesque typeface family. Something with warmth in its curves but clarity in its structure.
- **Two-weight systems** — the Cena/health weight split invites a typographic system where bold and regular (or medium and light) weights carry different semantic roles.
- **Rounded terminals preferred** — the icon's curves and the illustration system's "rounded caps and joins" principle should extend to type selection.

### Incongruous Styles
- **Geometric/Bauhaus precision** — too cold, too mechanical, contradicts the organic form language
- **Grunge, distressed, or heavy texture** — too aggressive, undermines clinical credibility
- **Neon, gradient-heavy, or glassmorphism** — too trendy, contradicts "trustworthy and established, not trendy"
- **Flat corporate (Microsoft/Google style)** — too generic, lacks the organic specificity the icon establishes
- **Serif-heavy or editorial typography** — too formal, too removed from the accessible warmth the brand requires
- **High-contrast black-and-white** — the logo's entire logic is built on a teal-to-green gradient; removing color removes identity
- **Isometric or 3D illustration** — too technical, too structured, contradicts the hand-drawn organic principle

---

## 6. Color System Seeds

### What Already Exists

The logo provides a **four-step value scale with hue rotation**:

| Step | Hex | Approx. HSL | Role |
|---|---|---|---|
| 1 (darkest) | `#0D322D` | H≈168° S≈60% L≈12% | Anchor dark |
| 2 | `#3A8478` | H≈169° S≈39% L≈37% | Primary teal |
| 3 | `#52A395` | H≈170° S≈33% L≈48% | Secondary teal |
| 4 (lightest) | `#81B983` | H≈133° S≈26% L≈61% | Sage accent |

### Key Observations

1. **The hue rotates ~37° from step 2 to step 4** (169° → 133°), shifting from blue-green to yellow-green. This is not a monochromatic palette — it is an **analogous sweep** through the green portion of the color wheel.

2. **Saturation decreases as lightness increases** (60% → 26%). The darkest value is the most saturated; the lightest is the most muted. This creates a natural, earthy quality — brighter greens would feel artificial or digital.

3. **There are no warm colors in the logo.** No reds, oranges, yellows, or warm neutrals. The entire palette lives in the cool-to-neutral green zone. This is a significant constraint for a brand that emphasizes food, warmth, and cultural specificity.

### Natural Expansion Directions

**Direction 1: Warm Neutral Ground**
The brand's verbal language emphasizes warmth, but the logo palette is entirely cool. The most critical palette addition is a **warm neutral family** (cream, warm gray, sand, clay) that provides a ground for the teals to sit on. Without warm neutrals, the brand risks feeling clinical despite its organic forms.

**Direction 2: Earthy Warm Accents**
Food illustration and cultural specificity demand warm colors the logo does not provide. Muted terracotta, warm ochre, or soft coral would complement the teal family without competing. These should be low-saturation and mid-to-low value — nothing that overwhelms the primary teal.

**Direction 3: Extended Teal Scale**
The logo's four values can be extended in both directions: darker than `#0D322D` (approaching true black with green cast) for deep backgrounds, and lighter than `#81B983` (approaching mint/seafoam) for tinted surfaces and UI backgrounds.

**Direction 4: Functional Colors**
Healthcare UI requires semantic colors for status, alerts, and data visualization. These must be chosen to complement the teal base without clashing. Red for error/critical states must be carefully calibrated — a standard red will clash violently with the teal palette. Consider warm, desaturated red-oranges instead.

### Relationships to Preserve

- The **lightness ramp from dark to light** is the logo's structural logic and must be reflected in the full palette's value architecture.
- The **hue rotation from teal to sage** establishes that the system is analogous, not monochromatic. The palette should continue to shift hue as values change rather than scaling a single hue.
- The **desaturation at lighter values** keeps the palette grounded. Light tints should remain muted, not candy-colored.
- The **chromatic dark** (`#0D322D` as near-black with green identity) establishes that the brand's darkest values should always carry color, never collapse to neutral black.

---

## Appendix: Raw SVG Structure

- **Total paths:** 14
- **Paths 1-4:** Wordmark "Cena" — filled `#0D322D`, standard filled paths
- **Paths 5-10:** Wordmark "health" — filled `#3A8478`, mix of standard and even-odd filled paths (the "t" and "e" use `fill-rule="evenodd"` due to counter spaces)
- **Path 11 (not present, misnumbered):** N/A — paths are zero-indexed in SVG
- **Paths 12-14:** Icon mark — three concentric ring paths using `fill-rule="evenodd"` and `clip-rule="evenodd"`, colored `#3A8478` (outer), `#52A395` (middle), `#81B983` (inner)
- **Canvas:** 349×64, `fill="none"` background
- **All paths include both sRGB hex and Display P3 color values** via inline `style` attributes
