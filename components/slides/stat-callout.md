# Cena Health — Stat Callout Block Spec (Slides)

_Design specification for the stat callout block used in slide decks. All values use the 16:9 deck base unit (1 unit = 3pt)._

---

## 1. Overview

The stat callout block is the slide deck's most impactful brand moment — the visual expression of "metrics first, narrative second." It presents a single key metric at display scale with the count-up animation, the two-tone typography, and the brand teal. This block is reserved for the numbers that define Cena Health's value proposition: hospitalization reduction, ER visit reduction, preventable cost savings, patient engagement rates.

**Density:** Always comfortable.

**Usage cap:** Maximum 3 stat callout blocks per deck. Each must carry a metric that substantiates the brand's core claims. Operational metrics, minor data points, and illustrative numbers use standard body text or data tables — not the stat callout.

---

## 2. Anatomy

### Single Stat (Default)

```
┌───────────────────────────────────────┐
│                                       │
│  CLINICAL OUTCOMES                    │  ← Overline
│                                       │
│  30%                                  │  ← Stat number (display size)
│  reduction in hospitalizations        │  ← Stat label
│                                       │
│  Source: UConn Health, 2024           │  ← Source citation
│                                       │
└───────────────────────────────────────┘
```

### Stat with Data Illustration

```
┌───────────────────────────────────────────────────┐
│                                                   │
│  CLINICAL OUTCOMES             [Data              │
│                                 illustration      │
│  30%                            120-180pt]        │
│  reduction in hospitalizations                    │
│                                                   │
│  Source: UConn Health, 2024                        │
│                                                   │
└───────────────────────────────────────────────────┘
```

### Triple Stat Row (Comparison)

```
┌───────────────────────────────────────────────────┐
│                                                   │
│   30%              25%              $17B           │
│   hospitalization  fewer ER         preventable    │
│   reduction        visits           costs          │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## 3. Typography

### Overline

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `2xs` (12pt deck) |
| **Weight** | SemiBold (600) |
| **Transform** | Uppercase |
| **Letter spacing** | 0.08em |
| **Color** | `color-text-brand` (`#1B685E`) |

### Stat Number

| Property | Value |
|----------|-------|
| **Typeface** | Lora |
| **Size** | `display` (68pt deck) for single stat; `3xl` (55pt deck) for triple stat row |
| **Weight** | Bold (700) |
| **Line height** | 1.00 |
| **Letter spacing** | −0.02em |
| **Color** | `color-brand-primary` (`#3A8478`) |

The stat number is rendered in brand teal at the system's most commanding size. This is the number earning its visual weight — the brand's proof point made physical.

### Stat Label

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `base` (18pt deck) for single stat; `sm` (16pt deck) for triple row |
| **Weight** | Regular (400) |
| **Line height** | 1.55 |
| **Color** | `color-text-primary` (`#0D322D`) |

### Source Citation

| Property | Value |
|----------|-------|
| **Typeface** | Source Sans 3 |
| **Size** | `xs` (14pt deck) |
| **Weight** | Regular (400) |
| **Color** | `color-text-tertiary` (`#6B645C`) |

---

## 4. Spacing

### Single Stat

| Gap | Value |
|-----|-------|
| **Overline-to-stat number** | `space-3` (9pt) |
| **Stat number-to-label** | `space-2` (6pt) |
| **Label-to-source** | `space-6` (18pt) |
| **Block internal padding** | `space-8` (24pt) vertical × `space-10` (30pt) horizontal |
| **Clear space around stat number** | Minimum `space-10` (30pt) on top and sides — the stat must breathe |

### Triple Stat Row

| Gap | Value |
|-----|-------|
| **Stat-to-stat horizontal gap** | `space-8` (24pt) minimum, or grid gutter |
| **Stat number-to-label** | `space-1` (3pt) — tighter than single stat because the smaller type size needs less breathing room |
| **Block internal padding** | `space-6` (18pt) vertical × `space-8` (24pt) horizontal |

### With Data Illustration

| Gap | Value |
|-----|-------|
| **Text-to-illustration gap** | `space-8` (24pt) |
| **Illustration size** | 120–180pt height, constrained to ~35% of block width |
| **Illustration vertical alignment** | Centered to the stat number's baseline |

---

## 5. Container Treatment

### As a Full-Slide Block

When the stat callout is the entire slide content (the stat IS the slide):

| Property | Value |
|----------|-------|
| **Background** | `color-surface-teal` (`#E9F5F2`) for the full slide |
| **No container border** | The tinted slide background IS the container |
| **Content alignment** | Vertically and horizontally centered within the safe area |
| **Logo watermark** | Optional: logo mark at 4% opacity in `teal-300`, positioned lower-right, 50% of slide height, cropped at edge |

### As an Embedded Block Within a Content Slide

When the stat callout appears as a component within a larger content slide:

| Property | Value |
|----------|-------|
| **Background** | `color-surface-teal` (`#E9F5F2`) |
| **Border** | None — teal tint provides separation |
| **Border radius** | `radius-xl` (20pt equivalent) — the larger radius signals "brand moment" |
| **Grid span** | 4–6 columns depending on layout |
| **Margin from surrounding content** | `space-8` (24pt) minimum on all sides |

### Triple Stat Row Container

| Property | Value |
|----------|-------|
| **Layout** | Three equal-width zones within the block |
| **Dividers** | Optional: 1px vertical divider in `color-border-default` (`#D1CDC6`) between stats, extending from stat number top to label bottom |
| **Background** | `color-surface-teal` or `color-surface-page` |

---

## 6. Motion Behavior

### 6.1 Count-Up Animation (Single Stat)

Per motion.md §3.10:

| Property | Value |
|----------|-------|
| **Trigger** | Slide enter transition completes |
| **Easing** | Emphasis (`cubic-bezier(0.34, 1.3, 0.64, 1)`) |
| **Duration** | `duration-stat` (800ms) |
| **Number interpolation** | 0 → final value. Percentages count by 1%; currency by significant digits; integers by whole numbers. |
| **Overshoot** | ~2-3% — "30%" briefly shows "31%" for ~30ms before settling. The Emphasis curve's micro-overshoot creates a physical landing. |

### 6.2 Label Fade-In

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-moderate` (300ms) |
| **Delay** | 500ms from count-up start (~62% of count-up complete) |
| **Transform** | `translateY(space-2)` → `translateY(0)` |
| **Opacity** | 0 → 1 |

The label arrives as the number settles — a two-beat rhythm: number builds → label contextualizes.

### 6.3 Source Citation Fade-In

| Property | Value |
|----------|-------|
| **Delay** | 750ms from count-up start |
| **Duration** | `duration-normal` (200ms) |
| **Opacity** | 0 → 1 |
| **No translate** — the citation simply appears, not arriving from a direction |

### 6.4 Triple Stat Row

Each stat counts up sequentially with 200ms stagger:

| Stat | Count-up start | Count-up duration |
|------|---------------|-------------------|
| **First** | 0ms (slide enter + 100ms) | 800ms |
| **Second** | 200ms | 800ms |
| **Third** | 400ms | 800ms |

All labels fade in simultaneously at 700ms (when the first stat is ~87% complete). This prevents a cascading label reveal that would feel too choreographed.

### 6.5 Data Illustration

The illustration is **static throughout**. It is present when the slide enters and does not animate. The animated stat number is the foreground; the illustration is the context ground.

### 6.6 Reduced Motion

- **Count-up:** Final value displayed immediately. No interpolation.
- **Labels:** Appear simultaneously with the stat number. No delay, no translate.
- **Source citation:** Appears simultaneously. No delay.
- **Triple row:** All values appear simultaneously. No stagger.

---

## 7. Color on Different Surfaces

| Slide background | Stat block behavior |
|-----------------|---------------------|
| `surface-page` (warm white) | Block uses `surface-teal` background. Standard colors. |
| `surface-teal` | **Full-slide stat only.** No embedded block — teal-on-teal collapses the container. Stat number, label, and citation sit directly on the teal slide. |
| `surface-sage` | Block uses `surface-teal` — the teal block on sage slide creates a complementary brand moment (the hue shift made visible). |
| `gradient-brand` | Block uses `color-surface-page` background — the gradient is the brand moment; the block provides contrast. |

---

## 8. Content Rules

1. **Every stat has a source.** No unsourced numbers in stat callout blocks. The source citation is not optional — it is required by the brand's "credible before charismatic" principle.
2. **Stat labels are complete sentences without periods.** "reduction in hospitalizations" not "Hospitalization Reduction" and not "reduction in hospitalizations." Lowercase, no period — the number leads, the label explains.
3. **Numbers use the clearest format.** "30%" not "thirty percent." "$17B" not "$17,000,000,000." "25%" not "1 in 4." The stat display's purpose is immediate comprehension at presentation speed.
4. **Triple stat rows use parallel structure.** All three labels should follow the same grammatical pattern: all gerund phrases, all noun phrases, or all adjective-noun phrases. "reducing hospitalizations / preventing ER visits / saving costs" — not "30% reduction / fewer ER visits / $17B saved."
5. **Stat numbers in the range 1–999 display without abbreviation.** Thousands use "K" (e.g., "2.4K"). Millions use "M." Billions use "B." Percentages always show the "%" symbol.

---

## 9. Accessibility

1. **Stat numbers include full-text equivalents** in presentation notes or alt text: "30 percent reduction in hospitalizations, source UConn Health 2024."
2. **Count-up animation respects `prefers-reduced-motion`.** Presentation software should detect this preference and display final values immediately.
3. **Color is not the sole differentiator.** The stat number's large size and bold weight distinguish it from surrounding text independently of its teal color.
4. **Triple stat row dividers are decorative.** If used, they are `aria-hidden` — the spatial separation between stats provides the grouping, not the lines.

---

## 10. Relationship to Web Stat Callout Card

The slide stat callout block and the web stat callout card (components/ui/card.md §5) share typography, color, and motion tokens but differ in spatial values:

| Property | Web (card.md) | Slides (this spec) |
|----------|--------------|---------------------|
| **Stat size** | `text-display` (61px) | `display` (68pt) |
| **Base unit** | 4px | 3pt |
| **Container** | Card with `radius-md` or `radius-xl` | Full-slide or `radius-xl` embedded block |
| **Count-up trigger** | IntersectionObserver (viewport entry) | Slide enter transition |
| **Density** | Inherits page density tier | Always comfortable |

The two components express the same brand moment in different media. The tokens ensure they feel like the same gesture despite the different spatial contexts.
