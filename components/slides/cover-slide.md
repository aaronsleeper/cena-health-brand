# Cena Health — Cover Slide Template Spec

_Design specification for the slide deck cover template. All values reference named semantic tokens. Slide values use the 16:9 deck base unit (1 unit = 3pt) unless noted._

---

## 1. Overview

The cover slide is the brand's first impression in every presentation — investor decks, clinical integration proposals, partner overviews. It establishes the brand's identity through the logo mark at compositional scale, the display typeface at maximum authority, and the warm surface system. The cover should feel settled and confident: no visual complexity, no competing elements. The logo, the title, and warm ground.

**Density:** Always comfortable (1.25× spatial multiplier, per spacing.md §3.2 rule 4).

---

## 2. Layout

### Grid

- **Columns:** 6 (per spacing.md §2.4)
- **Gutter:** `space-6` (18pt)
- **Margin:** `space-16` (48pt)
- **Safe area:** Inset `space-20` (60pt) from all edges

### Composition Zones

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   ┌──────────┐   ┌──────────────────────────┐    │
│   │          │   │                          │    │
│   │  Logo    │   │  Title                   │    │
│   │  Mark    │   │  Subtitle                │    │
│   │          │   │                          │    │
│   │  (~40%   │   │  Presenter / Date        │    │
│   │   slide  │   │                          │    │
│   │  height) │   │                          │    │
│   │          │   │                          │    │
│   └──────────┘   └──────────────────────────┘    │
│                                                  │
└──────────────────────────────────────────────────┘
```

| Zone | Grid span | Description |
|------|-----------|-------------|
| **Logo mark** | Columns 1–2 | The concentric ring mark at ~40% of slide height, vertically centered |
| **Title block** | Columns 3–6 | Title, subtitle, and presenter info, vertically centered |

### Logo Mark Placement

| Property | Value |
|----------|-------|
| **Size** | ~40% of slide height (~432pt on 1080pt slide) |
| **Position** | Left third, vertically centered within the safe area |
| **Rendering** | Full three-color mark: teal-500, teal-600, sage-700 |
| **Background** | `color-surface-page` (`#FBFAF8`) behind the mark — the warm off-white is the mark's native ground |

At this scale, the mark's concentric ring structure becomes a visible compositional element. The three colors are distinguishable as individual rings. This is the moment where the mark reveals its full structure.

---

## 3. Typography

### Title

| Property | Value |
|----------|-------|
| **Typeface** | Lora |
| **Size** | `display` (68pt deck) |
| **Weight** | Bold (700) |
| **Line height** | 1.05 |
| **Letter spacing** | −0.02em |
| **Color** | `color-text-primary` (`#0D322D`) |

This is the hero heading style from the type system applied to the deck surface. Single line preferred; two lines maximum. If the title wraps, the tight line height (1.05) keeps the lines visually bound.

### Subtitle

| Property | Value |
|----------|-------|
| **Typeface** | Lora |
| **Size** | `md` (22pt deck) |
| **Weight** | Regular (400) |
| **Line height** | 1.50 |
| **Letter spacing** | 0 |
| **Color** | `color-brand-primary` (`#3A8478`) |

The subtitle uses brand teal — mirroring the two-tone wordmark logic. The title anchors in chromatic dark (the "Cena" role); the subtitle qualifies in brand teal (the "health" role).

### Presenter / Date

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `xs` (14pt deck) |
| **Weight** | Regular (400) |
| **Line height** | 1.45 |
| **Color** | `color-text-tertiary` (`#6B645C`) |

---

## 4. Spacing

| Zone | Value |
|------|-------|
| **Title-to-subtitle gap** | `space-4` (12pt) |
| **Subtitle-to-presenter gap** | `space-8` (24pt) |
| **Logo-to-title-block gap** | `space-8` (24pt) minimum — the grid gutter provides natural separation |
| **Vertical centering** | The title block group (title + subtitle + presenter) is vertically centered within the safe area |

---

## 5. Surface Treatment

| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` (`#FBFAF8`) |
| **Background texture** | Illustrated background texture at 5% opacity (per surface-treatment.md §3.2). The petal-derived organic texture provides warmth without competing with the logo mark. |
| **Logo watermark** | Not used on cover slides — the logo mark is present at full opacity as a compositional element, so a watermark would be redundant. |

---

## 6. Motion Behavior (Slide Enter)

When the cover slide appears (presentation start or navigation to the first slide):

### Slide Transition

Per motion.md §3.9, forward navigation:

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-moderate` (300ms) |
| **Opacity** | 0 → 1 |

The cover slide is the first slide — it has no exit-enter pair. A simple fade-in from the presentation start screen is sufficient.

### Element Stagger (Optional)

For high-production contexts (conference keynotes, major investor presentations), elements may stagger:

| Element | Delay | Animation |
|---------|-------|-----------|
| **Background + texture** | 0ms | Opacity 0 → 1, `duration-moderate` |
| **Logo mark** | 100ms | Opacity 0 → 1 + `translateX(-space-4)` → 0, `duration-moderate`, Enter easing |
| **Title** | 200ms | Opacity 0 → 1 + `translateY(space-2)` → 0, `duration-moderate`, Enter easing |
| **Subtitle** | 300ms | Opacity 0 → 1, `duration-normal` |
| **Presenter info** | 350ms | Opacity 0 → 1, `duration-normal` |

Total stagger duration: 650ms. This is a deliberate entrance, not a cascade — each element arrives and sticks.

**For standard presentations:** No stagger. All elements appear simultaneously with the slide transition. The stagger is reserved for contexts where the cover slide itself is a presentation moment.

### Reduced Motion

All elements appear simultaneously. No stagger, no translate. Opacity 0 → 1 at `duration-fast` (120ms).

---

## 7. Variants

### 7.1 Standard Cover (Default)

As described above. Logo left, title right, warm ground.

### 7.2 Dark Cover

For high-contrast opening slides (conference settings, video intros).

| Property | Value |
|----------|-------|
| **Background** | `oklch(18.0% 0.010 183)` — chromatic near-black with teal cast (from color.md §3, dark mode sketch) |
| **Title color** | `color-text-inverse` (`#FBFAF8`) |
| **Subtitle color** | `color-brand-secondary` (`#52A395`) — teal-600, visible against dark |
| **Presenter color** | `color-warm-600` (`#B3ADA4`) |
| **Logo mark** | Full color — the three logo colors are visible against the dark ground. The mark's colors are optimized for dark display via Display P3 values in the SVG. |
| **Background texture** | `teal-300` (`#124D45`) at 4% opacity |

**Usage constraint:** The dark cover is an exception to the warm-ground-by-default principle. It is reserved for projection contexts where the dark screen provides better contrast and avoids the washed-out appearance of light backgrounds on projectors. It must not become the standard cover.

### 7.3 Conference / Event Cover

Adds a sub-brand or event name.

Same layout as Standard, with an additional element:

| Element | Placement | Style |
|---------|-----------|-------|
| **Event name** | Above the title, within the title block | Overline style: Source Sans 3, `2xs` (12pt), SemiBold, uppercase, 0.08em tracking, `color-text-brand` |
| **Event-to-title gap** | `space-3` (9pt) |

---

## 8. Do's and Don'ts

**Do:**
- Use the full three-color logo mark at the specified size — this is the mark's fullest expression.
- Keep the title to one or two lines maximum.
- Let the warm ground breathe — resist filling empty space with content.

**Don't:**
- Place photography on the cover slide. The cover is a brand identity moment; illustration/mark territory.
- Use the logo mark at less than 30% of slide height on the cover — it loses its compositional presence.
- Add more than one subtitle line. If more context is needed, it belongs on the second slide.
- Use the `gradient-brand` on the cover — the logo mark's three-color structure already expresses the hue shift.
