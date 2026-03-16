# Cena Health — Content Slide Template Spec

_Design specification for the standard content slide template. All values use the 16:9 deck base unit (1 unit = 3pt)._

---

## 1. Overview

The content slide is the deck's workhorse — it carries body text, bullet points, two-column comparisons, images, and data. It must support the brand's "metrics first, narrative second" positioning while remaining flexible enough for diverse content types. The template provides zones, not fixed layouts: a header zone, a content zone, and optional zones for imagery and footnotes.

**Density:** Always comfortable (1.25× multiplier).

---

## 2. Layout

### Grid

| Property | Value |
|----------|-------|
| **Columns** | 6 |
| **Gutter** | `space-6` (18pt) |
| **Margin** | `space-16` (48pt) |
| **Safe area** | Inset `space-20` (60pt) from all edges |

### Zone Map

```
┌──────────────────────────────────────────────────┐
│  [Header zone]                                   │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│  [Content zone]                                  │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
│  [Footer zone]                              [pg] │
└──────────────────────────────────────────────────┘
```

| Zone | Vertical allocation | Description |
|------|-------------------|-------------|
| **Header** | ~15% of slide height | Overline + slide title. Fixed at top within safe area. |
| **Content** | ~70% of slide height | Flexible content area. Body text, lists, images, data. |
| **Footer** | ~15% of slide height | Footnotes, source citations, page number. Fixed at bottom within safe area. |

---

## 3. Header Zone

### Overline (Optional)

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `2xs` (12pt deck) |
| **Weight** | SemiBold (600) |
| **Transform** | Uppercase |
| **Letter spacing** | 0.08em |
| **Color** | `color-text-brand` (`#1B685E`) |

The overline labels the section or category of the slide: "CLINICAL OUTCOMES", "PLATFORM OVERVIEW", "PATIENT EXPERIENCE". It provides structural orientation in long decks.

### Slide Title

| Property | Value |
|----------|-------|
| **Typeface** | Plus Jakarta Sans |
| **Size** | `2xl` (44pt deck) |
| **Weight** | Bold (700) |
| **Line height** | 1.15 |
| **Letter spacing** | −0.01em |
| **Color** | `color-text-primary` (`#0D322D`) |

H1 style applied to the deck surface. One line preferred; two lines maximum.

### Spacing

| Gap | Value |
|-----|-------|
| **Overline-to-title** | `space-2` (6pt) |
| **Title-to-content zone** | `space-8` (24pt) |

---

## 4. Content Zone — Layout Patterns

The content zone supports multiple layout patterns. Each is a composition of the 6-column grid.

### 4.1 Single Column (Full Width)

Body text, numbered lists, or bullet points spanning all 6 columns. Text should not exceed 5 columns for readable line length on body text. Headings may span all 6.

| Property | Value |
|----------|-------|
| **Body text** | Source Sans 3, `base` (18pt deck), Regular 400, `color-text-primary` |
| **Line height** | 1.55 (comfortable body) |
| **Bullet style** | Small filled circle in `color-brand-primary`, 6pt diameter, aligned to first line cap height |
| **Bullet indent** | `space-4` (12pt) from left content edge |
| **Bullet-to-text gap** | `space-3` (9pt) |
| **List item gap** | `space-4` (12pt) — `stack-md` at deck scale |

### 4.2 Two Column (3 + 3)

Equal columns for comparisons, before/after, pros/cons.

| Property | Value |
|----------|-------|
| **Column span** | 3 columns each |
| **Gutter** | `space-6` (18pt) between columns |
| **Column heading** | Plus Jakarta Sans, `lg` (28pt deck), SemiBold 600, `color-text-primary` |
| **Column body** | Source Sans 3, `base` (18pt deck), Regular 400, `color-text-primary` |

### 4.3 Asymmetric (4 + 2 or 2 + 4)

Text-heavy content with a supporting visual (image, illustration, chart, or data callout).

| Zone | Grid span | Content |
|------|-----------|---------|
| **Primary content** | 4 columns | Text, lists, data |
| **Visual** | 2 columns | Image, illustration, or stat callout block |

The visual may extend vertically beyond the text content. It is vertically centered within the content zone.

### 4.4 Image / Illustration Full-Bleed

A single large visual that fills the content zone. Text is minimal (title only in the header).

| Property | Value |
|----------|-------|
| **Image placement** | Spans all 6 columns within the content zone |
| **Image border radius** | `radius-lg` (12pt equivalent) |
| **Caption** | Below image, Source Sans 3, `xs` (14pt deck), `color-text-tertiary` |
| **Image-to-caption gap** | `space-3` (9pt) |

**Photography vs. illustration rule:** Photographs are contained within a border-radius container. Illustrations may extend to the content zone edges without a visible container — they blend with the slide surface (per design-principles.md §5, illustration as compositional element).

---

## 5. Footer Zone

### Footnotes / Source Citations

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `xs` (14pt deck) |
| **Weight** | Regular (400) |
| **Color** | `color-text-tertiary` (`#6B645C`) |
| **Placement** | Left-aligned within safe area, at bottom |

### Page Number

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `xs` (14pt deck) |
| **Weight** | Regular (400) |
| **Color** | `color-text-tertiary` |
| **Placement** | Right-aligned within safe area, at bottom |

### Logo Wordmark (Optional)

A small logo wordmark ("Cena health") may appear in the footer zone, left-aligned, at approximately 14pt cap height. This is a subtle brand reminder, not a compositional element.

| Property | Value |
|----------|-------|
| **Size** | ~14pt cap height |
| **Opacity** | 40% |
| **Color** | Canonical wordmark colors (`#0D322D` / `#3A8478`) at 40% opacity |

---

## 6. Surface Variants

### 6.1 Default (Warm White)

| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` (`#FBFAF8`) |
| **Texture** | Illustrated background texture at 5% opacity (optional) |

The standard surface for most content slides.

### 6.2 Teal-Tinted

| Property | Value |
|----------|-------|
| **Background** | `color-surface-teal` (`#E9F5F2`) |
| **Use** | Clinical/institutional content slides, platform feature highlights |
| **Text adjustment** | All text colors remain standard — contrast verified on teal-950 |

### 6.3 Sage-Tinted

| Property | Value |
|----------|-------|
| **Background** | `color-surface-sage` (`#E7F2E8`) |
| **Use** | Patient-focused content, nutrition topics, food and cultural content |
| **Text adjustment** | All text colors remain standard |

### 6.4 Gradient Background

| Property | Value |
|----------|-------|
| **Background** | `gradient-brand`: `teal-900` → `sage-950`, left to right |
| **Use** | Reserved for the single most important content slide in a deck — the key claim, the summary statement. Maximum one per deck. |
| **Text adjustment** | Standard colors. Contrast verified against the lightest gradient stop. |

**Adjacent surface rule:** Do not place two teal-tinted slides or two sage-tinted slides consecutively. Insert a default (warm white) slide between tinted slides. The tinted surfaces are section accents, not default backgrounds (per spacing.md §5.4).

---

## 7. Motion Behavior

### Slide Transition

Per motion.md §3.9, forward navigation between content slides:

| Property | Exiting slide | Entering slide |
|----------|--------------|----------------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-moderate` (300ms) | `duration-moderate` (300ms) |
| **Opacity** | 1 → 0 | 0 → 1 |
| **Transform** | `translateX(0)` → `translateX(-space-8)` | `translateX(space-8)` → `translateX(0)` |

Backward navigation reverses translateX direction.

### Section Break Transition

When transitioning between surface variants (e.g., warm white → teal-tinted), use the section break crossfade:

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-slow` (400ms) |
| **Method** | Opacity crossfade only, no translate |

### Content Build (Progressive Reveal)

When slide content is revealed incrementally (bullet by bullet, element by element):

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-normal` (200ms) per element |
| **Stagger** | 60ms between elements |
| **Transform** | `translateY(space-2)` → `translateY(0)` with opacity 0 → 1 |
| **Max stagger items** | 5 — beyond 5, remaining items appear simultaneously |

### Reduced Motion

- Slide transitions: Instant cut (0ms).
- Content build: All items appear simultaneously, no translate.

---

## 8. Composition Rules

1. **Maximum 40 words of body text per slide.** Slides are presentation aids, not documents. If content exceeds this, split across multiple slides.
2. **One visual per slide** (image, illustration, or chart). Exceptions: two-column layouts may have one visual per column.
3. **Headings are assertions, not topics.** "30% Hospitalization Reduction" not "Clinical Outcomes." The slide title should communicate the takeaway even if the presenter is muted.
4. **No more than 5 bullet points per slide.** Each bullet is one line (two lines maximum).
5. **Data tables on slides use Source Sans 3 condensed width** (per typography.md §1.4) when standard width overflows. Maximum 4 columns and 6 rows visible per slide — larger datasets belong in appendix slides or handout documents.

---

## 9. Accessibility

1. **All text meets WCAG AA contrast** on every surface variant. Verified: `color-text-primary` (#0D322D) achieves ≥7:1 on all surfaces including tinted variants.
2. **Images include alt text** in the presentation file for screen reader compatibility.
3. **Progressive reveal respects presentation software accessibility modes** — full slide content is available in the slide notes or accessible view regardless of build state.
4. **Minimum text size on slides is `xs` (14pt deck),** reserved for footnotes and citations only.
