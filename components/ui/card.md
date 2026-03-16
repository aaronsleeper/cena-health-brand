# Cena Health — Card Component Spec

_Design specification for the Card component across three variants. All values reference named semantic tokens._

---

## 1. Overview

Cards are the primary content container in the Cena Health system. They group related information into scannable units — a care plan summary, a feature description, a key metric. The card's visual treatment follows the elevation philosophy: surface color shift and warm borders as primary separation, shadows only for interactive lift (per spacing.md §5).

**Variants:** Default, Feature, Stat Callout

---

## 2. Shared Anatomy and Properties

All card variants share these base properties:

| Property | Value |
|----------|-------|
| **Background** | `color-surface-primary` (`#F3F1EE`) |
| **Border** | 1px `color-border-default` (`#D1CDC6`) |
| **Border radius** | `radius-md` (8px) — Default and Stat Callout; `radius-lg` (12px) — Feature |
| **Elevation** | Level 1 (surface color, optional border, no shadow at rest) |
| **Overflow** | Hidden (content clips to border radius) |

### Inner Radius Correction

When a child element within the card also has a radius (e.g., an image at the top, a nested container), its radius should be the card's outer radius minus the padding between card edge and child. For a `radius-md` (8px) card with `space-4` (16px) padding: inner radius = 8 − 16 = negative, so the child gets `radius-sm` (4px) minimum. For a `radius-lg` (12px) card with 0 padding to an image: the image matches the card's radius at the relevant corners.

---

## 3. Variant: Default Card

The workhorse container. Used for care plan summaries, list items, content panels, grouped information.

### Anatomy

```
┌─────────────────────────────────────┐
│  [Optional: Image / Illustration]   │  ← Full-width, top-aligned, no padding
├─────────────────────────────────────┤
│                                     │
│  [Optional: Overline label]         │  ← overline style, color-text-brand
│  Heading                            │  ← H3 style (Plus Jakarta Sans, lg, SemiBold 600)
│  Body text or metadata              │  ← body-sm style (Source Sans 3, sm, Regular 400)
│                                     │
│  [Optional: Action row]             │  ← buttons or links
│                                     │
└─────────────────────────────────────┘
```

### Spacing

| Zone | Value |
|------|-------|
| **Content inset** | `inset-asym-lg`: `space-4` (16px) vertical × `space-6` (24px) horizontal |
| **Image-to-content gap** | `space-4` (16px) — if image is present, measured from image bottom to first content element |
| **Overline-to-heading gap** | `stack-xs` (`space-1`, 4px) |
| **Heading-to-body gap** | `stack-sm` (`space-2`, 8px) |
| **Body-to-action gap** | `stack-lg` (`space-6`, 24px) |
| **Action row internal gap** | `inline-md` (`space-3`, 12px) between buttons |

### Image Handling

- **Full-width image:** Extends to card edges, clips to top border radius. No horizontal padding. Recommended aspect ratio: 16:9 or 3:2.
- **Illustration container:** Unlike photographs, illustrations sit on a `surface-sage` or `surface-teal` tinted background within the image zone. The illustration blends with its container (no visible border between illustration and its background).
- **No image:** Content starts at the top of the card with standard inset padding.

### Interactive (Clickable) Cards

When the entire card is a link or clickable element:

| Property | Resting | Hover | Active | Focus |
|----------|---------|-------|--------|-------|
| **Shadow** | None | `--shadow-sm` (Level 3) | `--shadow-sm` | None |
| **Border** | 1px `color-border-default` | 1px `color-border-brand` (`#52A395`) | 1px `color-border-brand` | 2px `color-border-focus` (`#3A8478`) |
| **Transform** | None | `translateY(-space-0.5)` (−2px lift) | None | None |
| **Cursor** | `pointer` | `pointer` | `pointer` | — |

Per motion.md §3.4: The card hover creates a subtle lift with warm shadow and border color shift. Two cues (border + shadow) ensure hover is perceptible in reduced-motion contexts.

### Non-Interactive Cards

Static cards (display-only content panels) have no hover, active, or clickable behavior. They remain at Level 1 elevation permanently.

---

## 4. Variant: Feature Card

A larger, more prominent card for feature callouts, product highlights, and marketing content. Uses the comfortable end of the spacing scale and a larger border radius to signal "this is a brand moment."

### Visual Differences from Default

| Property | Default Card | Feature Card |
|----------|-------------|--------------|
| **Border radius** | `radius-md` (8px) | `radius-lg` (12px) |
| **Content inset** | `inset-asym-lg` (16 × 24px) | `inset-asym-xl` (24 × 32px) |
| **Background** | `color-surface-primary` | `color-surface-primary` or `color-surface-teal` or `color-surface-sage` |
| **Leading icon** | Not standard | Optional `icon-xl` (40px) or `icon-2xl` (48px) in `color-brand-primary` or `color-brand-sage` |
| **Heading style** | H3 (25px, SemiBold) | H2 (31px, SemiBold) |

### Anatomy

```
┌───────────────────────────────────────────┐
│                                           │
│   [Icon at icon-xl/2xl]                   │  ← Brand teal or sage
│                                           │
│   [Optional: Overline label]              │
│   Feature Heading                         │  ← H2 style
│   Feature description body text that      │
│   may run to 2-3 lines.                   │  ← body style (16px)
│                                           │
│   [Optional: CTA button or link]          │
│                                           │
└───────────────────────────────────────────┘
```

### Spacing

| Zone | Value |
|------|-------|
| **Content inset** | `inset-asym-xl`: `space-6` (24px) vertical × `space-8` (32px) horizontal |
| **Icon-to-overline/heading gap** | `stack-md` (`space-4`, 16px) |
| **Overline-to-heading gap** | `stack-xs` (`space-1`, 4px) |
| **Heading-to-body gap** | `stack-sm` (`space-2`, 8px) |
| **Body-to-CTA gap** | `stack-lg` (`space-6`, 24px) |

### Tinted Surface Variants

Feature cards may use brand-tinted backgrounds:

| Surface | Use context | Color logic |
|---------|-------------|-------------|
| `color-surface-teal` (`#E9F5F2`) | Clinical features, platform capabilities, institutional messaging | Teal register — the "infrastructure" face |
| `color-surface-sage` (`#E7F2E8`) | Nutrition features, patient benefits, food/cultural content | Sage register — the "human" face |
| `color-surface-primary` (`#F3F1EE`) | Neutral features, mixed-audience content | Default register |

**Rule:** When using tinted surfaces, the card border changes to `color-border-brand` (`#52A395`) on teal, or no visible border on sage (the surface color provides sufficient separation from the page). Icons on teal surfaces use `color-brand-primary`; icons on sage surfaces use `color-brand-sage`.

### Feature Card Is Not Interactive

Feature cards are display containers, not clickable elements. If the feature card needs a CTA, it contains a button (Primary or Secondary) — the card itself does not have hover/active states.

---

## 5. Variant: Stat Callout Card

The brand's most impactful data presentation component. Reserved for core claims: hospitalization reduction, ER visit reduction, preventable cost savings. This is where the stat display type style, the two-tone typography, and the count-up animation converge.

### Anatomy

```
┌───────────────────────────────────────────┐
│                                           │
│   [Optional: Overline label]              │  ← "CLINICAL OUTCOMES" in overline style
│                                           │
│   30%                                     │  ← stat-display style (61px, Bold, color-brand-primary)
│   reduction in hospitalizations           │  ← body style (16px, color-text-primary)
│                                           │
│   [Optional: Source citation]             │  ← caption style (13px, color-text-tertiary)
│                                           │
└───────────────────────────────────────────┘
```

### Visual Properties

| Property | Value |
|----------|-------|
| **Background** | `color-surface-teal` (`#E9F5F2`) |
| **Border** | None — the teal tint provides sufficient separation from `surface-page` |
| **Border radius** | `radius-md` (8px) — or `radius-xl` (20px) when used as a hero-scale panel |
| **Content inset** | `inset-asym-xl`: `space-6` (24px) vertical × `space-8` (32px) horizontal |

### Typography

| Element | Style |
|---------|-------|
| **Overline** | Source Sans 3, `text-2xs` (10px), SemiBold 600, uppercase, 0.08em tracking, `color-text-brand` (#1B685E) |
| **Stat number** | Plus Jakarta Sans, `text-display` (61px), Bold 700, −0.02em tracking, `color-brand-primary` (#3A8478) |
| **Stat label** | Source Sans 3, `text-base` (16px), Regular 400, `color-text-primary` (#0D322D) |
| **Source citation** | Source Sans 3, `text-xs` (13px), Regular 400, `color-text-tertiary` (#6B645C) |

**Two-tone relationship:** The stat number in brand teal and the supporting label in chromatic dark creates the wordmark's two-tone logic — the impactful element (the number) in the distinctive brand color, the explanatory text (the label) grounded in the anchor dark.

### Spacing

| Zone | Value |
|------|-------|
| **Overline-to-stat gap** | `stack-sm` (`space-2`, 8px) |
| **Stat-to-label gap** | `stack-xs` (`space-1`, 4px) |
| **Label-to-citation gap** | `stack-md` (`space-4`, 16px) |
| **Clear space around stat number** | Minimum `space-8` (32px) on all sides to register as an independent compositional element (per spacing.md LP1) |

### With Data Illustration

The stat callout may include an optional data illustration (illustration.md §5.3) to the right of the stat content. When present:

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   CLINICAL OUTCOMES               [Data              │
│   30%                              illustration      │
│   reduction in hospitalizations    64-120px]          │
│                                                      │
│   Source: UConn Health, 2024                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Content occupies ~60% width; illustration occupies ~40%.
- The illustration sits vertically centered within the card.
- The illustration remains **static** while the stat number animates (per motion.md §5 — the animated data is the foreground; the illustrated context is the static ground).

---

## 6. Motion Behavior

### 6.1 Default Card — Interactive Hover

Per motion.md §3.4:

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-fast` (120ms) |
| **Transform** | `translateY(0)` → `translateY(-space-0.5)` (−2px) |
| **Shadow** | None → `--shadow-sm` |
| **Border color** | `color-border-default` → `color-border-brand` |

Hover-off: Same easing and duration, reversed. Symmetric in/out.

### 6.2 Stat Callout — Count-Up Animation

Per motion.md §3.10:

| Property | Value |
|----------|-------|
| **Trigger** | Element enters viewport (IntersectionObserver) |
| **Easing** | Emphasis (`cubic-bezier(0.34, 1.3, 0.64, 1)`) |
| **Duration** | `duration-stat` (800ms) |
| **Number interpolation** | 0 → final value. Integers count whole; percentages by 1%. |
| **Overshoot** | ~2-3% (e.g., "30%" briefly shows "31%" for ~30ms, then settles) |
| **Label fade-in** | Enter easing, `duration-moderate` (300ms), delayed 500ms from count-up start |
| **Label transform** | `translateY(space-2)` → `translateY(0)` with opacity 0 → 1 |

Count-up fires only on first viewport entry. Subsequent scrolls past do not re-trigger.

### 6.3 Feature Card

Feature cards have no interactive motion (they are display containers). If they enter the viewport as part of a page load, they may use the skeleton → content pattern (motion.md §3.8) but have no hover/active animation.

### 6.4 Reduced Motion

- **Interactive card hover:** Border color change only, instant. No shadow, no translate.
- **Stat count-up:** Final value displayed immediately. Label appears simultaneously. No animation.
- **Skeleton → content:** Instant swap.

---

## 7. Card Grid Layout

Cards are typically arranged in grids. The spacing system governs gaps.

### Horizontal Grid

| Breakpoint | Cards per row | Gap |
|------------|--------------|-----|
| Desktop (≥1024px) | 2, 3, or 4 | `inline-lg` → `space-6` (24px) — matches grid gutter |
| Tablet (600–1023px) | 2 | `inline-md` → `space-5` (20px) |
| Mobile (<600px) | 1 (stacked) | N/A |

### Vertical Stacking

| Context | Gap |
|---------|-----|
| Card-to-card (vertical list) | `stack-lg` (`space-6`, 24px) |
| Card group-to-next section | `stack-xl` (`space-10`, 40px) |

### Equal Height Cards

In a row, cards should stretch to equal height. Content within cards aligns top; action rows align bottom (pushed to card bottom via flex column layout with `margin-top: auto` on the action row).

---

## 8. On Different Surfaces

| Page surface | Default Card | Feature Card | Stat Callout |
|-------------|--------------|--------------|--------------|
| `surface-page` (#FBFAF8) | Standard — `surface-primary` bg + `border-default` | Standard | Standard — `surface-teal` bg |
| `surface-primary` (#F3F1EE) | Use `surface-page` as card bg (invert for contrast) + `border-default` | Use `surface-page` or tinted bg | Use `surface-teal` bg — sufficient contrast |
| `surface-teal` (#E9F5F2) | Use `surface-page` bg + `border-strong` border | Use `surface-page` bg | **Do not place stat callout on `surface-teal`** — teal-on-teal collapses |
| `surface-sage` (#E7F2E8) | Use `surface-page` bg + `border-default` | Use `surface-page` bg | Standard — `surface-teal` bg provides contrast against sage |

**Key rule:** Never place a `surface-teal` card directly on a `surface-teal` section. The stat callout (which uses `surface-teal`) must sit on `surface-page` or `surface-sage` — never on `surface-teal`.

---

## 9. Accessibility

1. **Interactive cards use `<a>` or `<button>` as the root element,** or use `role="link"` / `role="button"` with `tabindex="0"` and keyboard handlers.
2. **Card heading level is contextual.** A card within a page section headed by H2 should use H3 internally. Never hard-code heading level.
3. **Images within cards have `alt` text** (photographs) or `aria-hidden="true"` (decorative illustrations).
4. **Stat callout numbers use `aria-label`** to provide the full metric: `aria-label="30 percent reduction in hospitalizations"`.
5. **Focus indicator on interactive cards:** 2px `color-border-focus` with `space-0.5` offset (same pattern as button focus).
6. **Card groups use `role="list"` and `role="listitem"`** when cards represent a collection of similar items.

---

## 10. Density Behavior

Cards inherit density from their page context:

| Property | Compact | Default | Comfortable |
|----------|---------|---------|-------------|
| **Default card inset** | 8px × 16px | 16px × 24px | 20px × 32px |
| **Feature card inset** | 16px × 24px | 24px × 32px | 32px × 40px |
| **Stat callout inset** | 16px × 24px | 24px × 32px | 32px × 40px |
| **Heading-to-body gap** | 6px | 8px | 10px |
| **Card-to-card gap** | 16px | 24px | 32px |

Typography, colors, and border radius do not change with density. Only spatial tokens scale.
