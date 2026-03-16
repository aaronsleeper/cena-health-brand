# Cena Health — Spacing & Layout System

_Design token specification for spatial relationships, grid structure, density, and elevation. All values are proportional multipliers of a base unit — not fixed pixels. Each surface maps its own base unit to these relationships._

---

## 0. Spatial Principles

These govern every spatial decision in the Cena Health system. They derive from specific tensions in the brand brief, the typography system's line-height logic, and the color system's surface structure.

### Principle 1: Space Is the Density Toggle

Cena Health serves clinical staff scanning dense dashboards and grandmothers reading meal plans (brand brief §3). The type system resolves the cross-audience tension through composition, not font switching (typography Principle 4). The spacing system resolves it through density tiers: the same components, the same type hierarchy, the same grid — only the spatial tokens change. When space increases, the interface becomes patient-friendly. When space decreases, it becomes clinician-efficient. Neither mode degrades legibility; both feel like the same brand.

**Application:** Never change typeface, type scale step, or color to achieve density. Change padding, gap, and margin only.

### Principle 2: Vertical Rhythm Follows the Line

Body text at `base` (16px web) with 1.55 line height produces a ~24.8px line. The spacing system treats 1 base unit × 6 (= 24px on web) as the fundamental vertical rhythm anchor. Major vertical spaces are multiples of this line-height unit; minor spaces subdivide it. This means body text, heading gaps, and section breaks all share a rhythmic pulse without forcing rigid baseline alignment between the two typefaces (per typography §6, Space Architect note).

**Application:** The vertical space between a heading and its following paragraph, the gap between cards in a grid, and the padding inside a content block all resolve to steps in the same scale. The rhythm is felt because it derives from the text's own cadence.

### Principle 3: Asymmetric Insets Reflect Reading Direction

Healthcare content is read, not browsed. Readers enter from the top-left (in LTR layouts) and scan downward. Horizontal padding can be generous — it frames content and creates breathing room on warm surfaces. Vertical padding is tighter — it keeps the reader's eye moving to the next line or element without unnecessary gaps. This asymmetry (wider horizontal, tighter vertical) is encoded as the default inset pattern.

**Application:** The standard component inset is wider on the horizontal axis than the vertical. Only square insets are used for compact interactive elements (buttons, tags) where directional bias would feel unbalanced at small scale.

### Principle 4: Generous by Default, Compact by Permission

The brand's "warm without softness" character (brand brief §1, trait 2) is expressed spatially as default generous spacing that can be tightened for specific contexts — never tight spacing that must be loosened. The default density tier is comfortable enough for patient materials. Clinical density is an override, not the baseline.

**Application:** Components ship with `default` density. Compact density is applied via explicit context (clinical dashboard, admin table, dense form). Comfortable density is applied for patient-facing, marketing, and presentation contexts.

### Principle 5: Space Creates Warmth on Warm Ground

The color system's warm off-white surface (`#FBFAF8`, `surface-page`) means that empty space itself carries warmth — it is not a void, it is a warm field. Generous margins and padding expose more of the warm ground, amplifying the brand's human character. This is the spatial counterpart to the color system's "warm ground, cool figure" principle (color system Principle 3): space between elements is not absence, it is warm presence.

**Application:** When in doubt between tighter and looser spacing, choose looser. The warm ground is an asset, not wasted space. This bias is especially strong on marketing and patient-facing surfaces.

### Principle 6: Proximity Is the Primary Grouping Mechanism

Before reaching for borders, background color, or elevation to group related elements, use proximity. Related elements sit closer together; unrelated elements sit farther apart. The spacing scale has enough steps to create clear proximity distinctions without visual dividers. This aligns with "organic precision" — grouping through spatial relationship rather than drawn containers feels more natural and less clinical.

**Application:** Inside a card, the heading-to-body gap is tighter than the card-to-card gap. Inside a form, the label-to-input gap is tighter than the field-to-field gap. These proximity differences should be at least two scale steps apart to register clearly.

---

## 1. Base Unit and Scale

### 1.1 Base Unit

**The base unit is 4.**

- **Web UI:** 1 base unit = 4px
- **Slide deck (16:9):** 1 base unit = 3pt
- **Slide deck (4:3):** 1 base unit = 2.5pt

**Rationale:** The 4px base is the smallest increment that registers as intentional space on screen. It divides evenly into the type system's key measurements: body text at 16px = 4 base units; body line height at ~24px = 6 base units; heading line height at ~28–36px = 7–9 base units. The 4px module also nests cleanly into an 8px implementation grid (every 2 steps = 8px), which downstream web reconciliation can snap to without distorting proportional relationships.

The slide deck mapping uses smaller point values because projected/shared-screen content is viewed at distance. The spatial relationships (multipliers) are identical; only the base unit changes per surface.

### 1.2 Named Scale Steps

The scale is not a strict geometric or arithmetic progression. It is a pragmatic sequence that serves real component needs: hairline gaps at the bottom, hero-level breathing room at the top, with enough resolution in the mid-range (where most UI decisions happen) to create clear proximity distinctions.

| Step | Multiplier | Web (px) | Deck 16:9 (pt) | Deck 4:3 (pt) | Primary Use |
|------|-----------|----------|-----------------|----------------|-------------|
| `space-px` | 0.25 | 1 | 0.75 | 0.625 | Hairline borders, sub-pixel rounding safety. Not a layout value. |
| `space-0.5` | 0.5 | 2 | 1.5 | 1.25 | Minimum visible gap. Focus ring offset, icon-to-text micro-gap. |
| `space-1` | 1 | 4 | 3 | 2.5 | Tightest intentional spacing. Dense tag gaps, compact inline spacing. |
| `space-1.5` | 1.5 | 6 | 4.5 | 3.75 | Small form gaps, tight stack spacing. |
| `space-2` | 2 | 8 | 6 | 5 | Standard tight gap. Icon-label pairs, button icon offset. |
| `space-3` | 3 | 12 | 9 | 7.5 | Compact component padding. Tight card insets, compact form fields. |
| `space-4` | 4 | 16 | 12 | 10 | Default internal padding. Matches body text size. Form field padding, list item spacing. |
| `space-5` | 5 | 20 | 15 | 12.5 | Comfortable internal padding. Default card horizontal inset. |
| `space-6` | 6 | 24 | 18 | 15 | **Line-height anchor.** Matches body text line height (~24.8px ≈ 24px). Default vertical gap between content blocks. |
| `space-8` | 8 | 32 | 24 | 20 | Section gap within a component. Heading-to-content gap. Default card vertical inset in comfortable density. |
| `space-10` | 10 | 40 | 30 | 25 | Large component gap. Space between cards in a grid. |
| `space-12` | 12 | 48 | 36 | 30 | Major section break. Page section dividers. |
| `space-16` | 16 | 64 | 48 | 40 | Hero padding. Large section margins. Breathing room around display type. |
| `space-20` | 20 | 80 | 60 | 50 | Page-level horizontal margin (desktop). Slide content inset. |
| `space-24` | 24 | 96 | 72 | 60 | Maximum structural spacing. Hero section vertical padding. |

**Why this shape, not a strict ratio:**

A geometric ratio (e.g., ×1.5 per step) bunches values at the small end and gaps at the large end. Cena Health's layout needs are the opposite: fine-grained control in the 8–32px range (where component padding, form gaps, and card spacing live) and coarse steps above 48px (where section breaks and hero spacing need less precision). The scale provides six steps between 8px and 32px but only three steps from 48px to 96px. This resolution matches where the design decisions are densest.

### 1.3 Relationship to Typography Line Heights

The spacing scale is synchronized with the type system's line heights so that vertical spacing feels rhythmic rather than arbitrary.

| Type style | Size × Line height | Computed line (web) | Nearest spacing step |
|-----------|-------------------|--------------------|--------------------|
| Body (`base`, 1.55) | 16 × 1.55 | 24.8px | `space-6` (24px) |
| Body small (`sm`, 1.50) | 14 × 1.50 | 21px | `space-5` (20px) |
| H3 (`lg`, 1.25) | 25 × 1.25 | 31.25px | `space-8` (32px) |
| H2 (`xl`, 1.20) | 31 × 1.20 | 37.2px | `space-10` (40px) |
| H1 (`2xl`, 1.15) | 39 × 1.15 | 44.85px | `space-12` (48px) |
| UI label (`sm`, 1.20) | 14 × 1.20 | 16.8px | `space-4` (16px) |

These are not forced alignments — computed line heights do not need to exactly equal spacing steps. The table shows that the scale's step boundaries naturally shadow the type system's rhythmic intervals, which means spacing tokens and line heights will produce visual consonance without requiring manual tuning.

---

## 2. Grid Philosophy

### 2.1 Web UI — Desktop (≥1024px viewport)

| Property | Value | Rationale |
|----------|-------|-----------|
| **Column count** | 12 | Divides cleanly into halves, thirds, quarters, and sixths — all layouts Cena Health needs. Clinical dashboards use 3×4 or 4×3 splits. Marketing pages use full-width heroes with 8+4 or 6+6 content grids. |
| **Gutter** | `space-6` (24px) | Matches body line height. The horizontal gap between columns echoes the vertical rhythm of body text, creating spatial coherence across both axes. |
| **Margin** | `space-20` (80px) | Generous margin exposes the warm `surface-page` ground at screen edges, reinforcing Principle 5 (space creates warmth). At 80px per side on a 1440px viewport, the content area is 1280px — wide enough for 12-column layouts with data tables while maintaining breathing room. |
| **Max content width** | 1280px (320 base units) | Content does not stretch beyond this regardless of viewport width. Wider viewports gain more warm margin, not wider content. |

### 2.2 Web UI — Tablet (600–1023px viewport)

| Property | Value | Rationale |
|----------|-------|-----------|
| **Column count** | 8 | Sufficient for two-column layouts (4+4) and asymmetric splits (5+3) that handle sidebar-plus-content patterns. Clinical workflows on tablet typically show a list panel plus a detail panel — 8 columns accommodate this. |
| **Gutter** | `space-5` (20px) | One step tighter than desktop. The reduced gutter maintains proportion as the viewport narrows without collapsing content. |
| **Margin** | `space-8` (32px) | Smaller margin preserves content area. On a 768px tablet, this yields 704px of content width — tight but workable for data tables. |

### 2.3 Web UI — Mobile (<600px viewport)

| Property | Value | Rationale |
|----------|-------|-----------|
| **Column count** | 4 | Four columns handle single-column body text (spanning all 4), side-by-side metric cards (2+2), and icon-plus-text rows (1+3). Cena Health's mobile experience is primarily patient-facing: meal plans, care plan summaries, VozCare platform — all single-column content with occasional paired elements. |
| **Gutter** | `space-4` (16px) | Matches body text size. On mobile, the gutter equals the text size, creating a natural pause between adjacent elements that doesn't waste scarce horizontal space. |
| **Margin** | `space-5` (20px) | 20px margins on a 375px viewport leave 335px content width. This is tight but intentional — mobile content should fill the viewport without feeling cramped. The warm margin stripe at each edge is still visible, maintaining the warm ground effect. |

### 2.4 Slide Deck — 16:9 Standard

| Property | Value (in base units / pt) | Rationale |
|----------|---------------------------|-----------|
| **Column count** | 6 | Slide content is simpler than web UI. Six columns support full-width headlines, two-column comparisons (3+3), and asymmetric hero layouts (4+2 for text + image). Investor decks and clinical presentations rarely need more than three content zones per slide. |
| **Gutter** | `space-6` (18pt) | Same multiplier as web desktop. The spatial relationship is consistent across surfaces even though the base unit differs. |
| **Margin** | `space-16` (48pt) | Large margins create the cinematic breathing room that presentation slides require. On a standard 1920×1080 export, 48pt margins frame the content generously and keep text away from screen edges where projector cropping occurs. |
| **Safe area** | Inset from all edges by `space-20` (60pt) | Critical content (text, data, charts) stays inside the safe area. Decorative elements (background tints, brand patterns) may bleed into the margin. |

### 2.5 Slide Deck — 4:3 Fallback

| Property | Value (in base units / pt) | Rationale |
|----------|---------------------------|-----------|
| **Column count** | 6 | Same as 16:9. The narrower aspect ratio reduces column width but maintains the same structural logic. |
| **Gutter** | `space-5` (12.5pt) | Tighter than 16:9 to preserve content width in the narrower format. |
| **Margin** | `space-12` (30pt) | Reduced margin compensates for the less generous horizontal dimension of 4:3. |

---

## 3. Density Tiers

Density tiers modify spacing tokens without altering typeface, type scale step, or color. They are the spatial mechanism that resolves the cross-audience tension between clinical efficiency and patient accessibility (brand brief §3).

### 3.1 Tier Definitions

#### Compact

**Contexts:** Clinical dashboards, admin data tables, EHR integration views, dense forms for clinical staff, workflow management interfaces.

**Modifier:** All spacing tokens scale to **0.75×** their default value (rounded to nearest base unit increment).

**Typography adjustments:** None to typeface, scale step, or color. Line height for body text may tighten to **1.45** (the minimum acceptable value per typography §Appendix B, judgment call 3). UI labels and captions retain their default line heights — they are already tight at 1.20.

**Character:** Dense, efficient, scannable. The clinical staff can see more data per viewport without scrolling. The interface still uses the warm surface system and brand colors — density changes the spacing, not the emotional register.

| Token | Default (px) | Compact (px) | Notes |
|-------|-------------|-------------|-------|
| `space-2` | 8 | 6 | 0.75× → 6, nearest to `space-1.5` |
| `space-3` | 12 | 8 | 0.75× → 9, snapped to 8 |
| `space-4` | 16 | 12 | 0.75× → 12, exact `space-3` |
| `space-6` | 24 | 16 | 0.75× → 18, snapped to 16 |
| `space-8` | 32 | 24 | 0.75× → 24, exact `space-6` |
| `space-10` | 40 | 32 | 0.75× → 30, snapped to 32 |

**Rule:** The compact tier never reduces spacing below `space-1` (4px) for any layout gap. Below 4px, elements lose their visual separation and the interface degrades.

---

#### Default

**Contexts:** General product UI, care plans, provider-facing content that is not purely data-dense, mixed-audience pages.

**Modifier:** **1.0×** — all spacing tokens at their defined values.

**Typography adjustments:** All styles at their specified values (body line height 1.55).

**Character:** Balanced, clear, professional. This is the baseline: credible enough for a hospital system buyer reviewing an integration spec, warm enough for a care coordinator building a nutrition plan.

---

#### Comfortable

**Contexts:** Patient-facing materials, marketing pages, enrollment flows, community health content, accessibility-prioritized views, slide decks.

**Modifier:** All spacing tokens scale to **1.25×** their default value (rounded to nearest base unit increment).

**Typography adjustments:** None to typeface, scale step, or color. Body text line height may increase to **1.65** for patient-facing long-form content. Heading line heights remain unchanged — headings are already large enough to breathe at default spacing.

| Token | Default (px) | Comfortable (px) | Notes |
|-------|-------------|------------------|-------|
| `space-2` | 8 | 10 | 1.25× → 10, nearest to `space-2.5` (interpolated) |
| `space-3` | 12 | 16 | 1.25× → 15, snapped to 16 |
| `space-4` | 16 | 20 | 1.25× → 20, exact `space-5` |
| `space-6` | 24 | 32 | 1.25× → 30, snapped to 32 |
| `space-8` | 32 | 40 | 1.25× → 40, exact `space-10` |
| `space-10` | 40 | 48 | 1.25× → 50, snapped to 48 |

**Character:** Open, inviting, accessible. The generous spacing exposes more warm `surface-page` background, amplifying the brand's human warmth. Large touch targets, clear separation between elements, and ample reading room make this tier appropriate for audiences with limited health literacy or reduced dexterity.

---

### 3.2 Density Tier Selection Rules

1. **Never mix density tiers within a single view.** A clinical dashboard is compact throughout. A patient enrollment flow is comfortable throughout. Mixing tiers within a page creates spatial dissonance — the eye cannot settle on a rhythm.

2. **Density is set per surface, not per component.** A card does not choose its own density. The page declares a density context, and all components within it inherit.

3. **When uncertain, use default.** The default tier is designed to work for both audiences. Compact and comfortable are refinements for specific contexts, not corrections for the default.

4. **Slide decks always use comfortable.** Projected content viewed at distance requires generous spacing. The comfortable tier's 1.25× multiplier on top of the slide base unit (3pt for 16:9) produces spacing that reads clearly at presentation scale.

---

## 4. Component Spacing Primitives

These are the reusable spatial patterns used to compose all components. Each primitive uses named scale steps, not raw values. Density tiers modify the underlying scale steps; primitives reference steps by name and inherit the active tier's values.

### 4.1 Inset — Padding Inside a Container

Insets define the space between a container's edge and its content.

#### Square Inset

Equal padding on all four sides. Used for compact interactive elements where directional asymmetry would feel unbalanced.

| Variant | All sides | Use |
|---------|-----------|-----|
| `inset-xs` | `space-1` | Tags, badges, tight pills. |
| `inset-sm` | `space-2` | Compact buttons, chips, inline code blocks. |
| `inset-md` | `space-3` | Standard buttons, form inputs, small cards. |
| `inset-lg` | `space-4` | Default card padding, modal padding, panel padding. |
| `inset-xl` | `space-6` | Large cards, section containers, hero content blocks. |

#### Asymmetric Inset

Wider horizontal padding, tighter vertical padding. The default pattern for content containers (Principle 3: horizontal frames, vertical propels).

| Variant | Vertical | Horizontal | Use |
|---------|----------|------------|-----|
| `inset-asym-sm` | `space-2` | `space-3` | Compact list items, dense table cells. |
| `inset-asym-md` | `space-3` | `space-4` | Default list items, table cells, nav items. |
| `inset-asym-lg` | `space-4` | `space-6` | Content cards, panel sections, dialog content areas. |
| `inset-asym-xl` | `space-6` | `space-8` | Hero content blocks, marketing sections, patient-facing panels. |

### 4.2 Squish Inset — Reduced Vertical Padding

For elements where vertical compactness is critical: buttons in dense toolbars, tab labels, compact navigation. Horizontal padding remains generous to maintain label readability; vertical padding is halved.

| Variant | Vertical | Horizontal | Use |
|---------|----------|------------|-----|
| `squish-sm` | `space-1` | `space-2` | Dense toolbar buttons, compact tabs. |
| `squish-md` | `space-1.5` | `space-3` | Standard buttons, tab labels, compact nav items. |
| `squish-lg` | `space-2` | `space-4` | Large buttons, prominent tab labels. |

### 4.3 Stack — Vertical Space Between Elements

Stacks define the gap between vertically arranged siblings. This is the most frequently used primitive — it governs the rhythm of reading.

| Variant | Gap | Use |
|---------|-----|-----|
| `stack-xs` | `space-1` | Related metadata (label + value within a single datum). Tightest vertical grouping. |
| `stack-sm` | `space-2` | Label-to-input gap in forms. Heading-to-subheading. Tight content grouping. |
| `stack-md` | `space-4` | Paragraph-to-paragraph. Item-to-item in a list. Default vertical rhythm. |
| `stack-lg` | `space-6` | Heading-to-body-content. Card-to-card in a vertical list. Section-within-section. |
| `stack-xl` | `space-10` | Section-to-section. Major content group breaks. |
| `stack-2xl` | `space-16` | Page section breaks. Hero-to-content transition. Top-level structural division. |

**Proximity rule:** The gap between related elements (`stack-sm` or `stack-md`) must be at least two scale steps smaller than the gap between unrelated groups (`stack-lg` or `stack-xl`). This ensures that proximity grouping is unambiguous without relying on borders or background color.

### 4.4 Inline — Horizontal Space Between Elements

Inline spacing governs the gap between horizontally arranged siblings: buttons in a group, icons beside text, tags in a row.

| Variant | Gap | Use |
|---------|-----|-----|
| `inline-xs` | `space-1` | Icon-to-label in a compact button. Minimum horizontal rhythm. |
| `inline-sm` | `space-2` | Icon-to-text pairing. Tag-to-tag in a row. Standard inline grouping. |
| `inline-md` | `space-3` | Button-to-button in a group. Navigation item spacing. |
| `inline-lg` | `space-4` | Form field groups side by side. Card-to-card in a horizontal row. |
| `inline-xl` | `space-6` | Major horizontal content groups. Column gap for non-grid layouts. |

---

## 5. Elevation and Surface Separation

### 5.1 Design Approach

The brand's organic, warm character is best served by subtle surface separation. Heavy drop shadows feel like they belong to a different visual language — one of hard edges, cool surfaces, and material depth. Cena Health's surfaces are warm paper, not floating glass.

**Primary separation method: background color shift.**

The color system provides five surface tokens that create natural layering:

1. `surface-page` (`#FBFAF8`) — the warm ground
2. `surface-primary` (`#F3F1EE`) — content cards, panels
3. `surface-secondary` (`#E7E4DF`) — nested containers, sidebars
4. `surface-teal` (`#E9F5F2`) — brand-accent sections
5. `surface-sage` (`#E7F2E8`) — patient/nutrition sections

These tokens alone provide three levels of neutral separation (page → primary → secondary) plus two brand-tinted levels. For most layouts, surface color is sufficient — no shadow or border needed.

**Secondary separation method: warm border.**

When surface color alone does not create enough distinction (e.g., a `surface-primary` card on a `surface-primary` sidebar), a warm neutral border provides the next level of separation. Use `color-border-default` (`#D1CDC6`), which is calibrated to feel like a crease in warm paper rather than a drawn line.

| Border weight | Use |
|--------------|-----|
| 1px | Default card border, section divider, form input border. |
| 2px | Emphasized container border (e.g., selected card, active section). Uses `color-border-brand` (`#52A395`). |

**Tertiary separation method: warm shadow.**

Shadows are used sparingly — only for elements that float above the page (modals, dropdowns, popovers, tooltips). The color system specifies that shadows must be warm-tinted, not cool gray (color system §5, Space Architect note). The warm off-white page ground (`#FBFAF8`) means a cool gray shadow would read as a foreign element.

### 5.2 Elevation Levels

| Level | Method | Token Values | Use |
|-------|--------|-------------|-----|
| **Level 0** | Flat on page | No shadow, no border. Content sits directly on `surface-page`. | Inline content, text blocks, page-level sections. |
| **Level 1** | Surface color | Background: `surface-primary`. No shadow. Optional: 1px `color-border-default` border. | Cards, content panels, form containers. This is the default component elevation. |
| **Level 2** | Surface color + border | Background: `surface-primary` or `surface-secondary`. Border: 1px `color-border-default`. | Sidebar panels, grouped content areas, nested containers. |
| **Level 3** | Shadow (low) | `0 space-0.5 space-2 0` warm shadow | Dropdown menus, autocomplete panels, small popovers. These float slightly above the page. |
| **Level 4** | Shadow (medium) | `0 space-1 space-4 0` warm shadow | Modals, dialog boxes, large floating panels. Clear elevation above page content. |
| **Level 5** | Shadow (high) | `0 space-2 space-6 space-0.5` warm shadow | Toast notifications, command palettes, overlay panels that demand immediate attention. |

### 5.3 Shadow Color Specification

All shadows use a warm-tinted color derived from the warm neutral family, not a neutral gray or black.

| Context | Shadow color |
|---------|-------------|
| On `surface-page` | `oklch(45% 0.008 70 / 8%)` — warm-300 at 8% opacity |
| On `surface-primary` | `oklch(45% 0.008 70 / 10%)` — warm-300 at 10% opacity (slightly more opaque to register on the lighter card surface) |
| On `surface-teal` or `surface-sage` | `oklch(45% 0.008 70 / 10%)` — same warm shadow; the tinted surface provides enough context that the shadow does not need color adjustment |

**Rationale:** The color system notes that pure gray shadows will read as cool and inconsistent on the warm off-white surface (color system §5). Using warm-300 (`#5B544C`, H:70) at low opacity produces a shadow that feels like the natural darkening of the warm paper surface — an extension of the ground, not an intrusion from a different system.

### 5.4 Separation Rules

1. **Use the lightest separation method that creates sufficient distinction.** Background color shift before border, border before shadow. Most components in the system need only Level 1 elevation.

2. **Shadows imply interactive floating.** If an element has a shadow, it should be dismissible, moveable, or temporary. Persistent, static UI elements do not cast shadows.

3. **Never use shadow for emphasis.** If a card needs to attract attention, use `surface-teal` or `surface-sage` tinting, or a `color-border-brand` accent border — not a larger shadow. Shadow communicates elevation (z-axis position), not importance.

4. **Do not stack tinted surfaces adjacent to each other** without a neutral separator. A `surface-teal` section immediately above a `surface-sage` section creates a hue collision. Insert at least one section of `surface-page` or `surface-primary` between tinted surfaces.

---

## 6. Layout Principles

These six principles govern spatial composition across all Cena Health surfaces. They are specific to this brand's needs — not general design advice.

### LP1: Leading Metric, Supporting Narrative

The brand brief is explicit: "Metrics first, narrative second" (brand brief §3, Audience 1). Every layout that presents an outcome or data point places the metric in a position of spatial primacy — larger, higher in the visual hierarchy, with more breathing room around it. The supporting narrative (explanation, context, source) sits in tighter vertical proximity below or beside the metric. The stat display type style (`display` size in `color-brand-primary`) requires at least `space-8` of clear space on all sides to register as an independent compositional element.

### LP2: Organic Margins, Structured Content

The brand is "organic precision" (brand brief §5). In layout terms: margins and outer spacing use the generous end of the scale (warm ground exposure), while internal content structure uses the tighter, more precise mid-range. The effect is that the page edge feels natural and breathing while the content zone feels organized and efficient. This is the spatial version of the logo's character: organic petal forms rendered with geometric consistency.

### LP3: Single-Column Default for Patient Content

Patient-facing content (care plans, meal guides, enrollment flows, VozCare interactions) defaults to single-column layout on all breakpoints. Two-column layouts require justification in patient contexts — they introduce scanning complexity that works against the health equity principle (typography Principle 1). Clinical and B2B content may use multi-column layouts freely.

### LP4: Content Width Governs Line Length

Body text (`base` at 16px) set at 65–75 characters per line requires approximately 560–640px of content width. This width — not the grid — determines the maximum paragraph width. Even within a 12-column grid, body text should span no more than 8 columns on desktop (≈640px at default gutter) to maintain readable line length. Headings may span the full available width.

### LP5: Consistent Content Edges

All content within a page section shares the same left edge. Indented sub-content aligns to the next grid column, not to an arbitrary offset. This creates vertical alignment rails that the scanning eye can follow down the page — critical for clinical staff scanning dense documents. The only exception is block quotes and callout panels, which inset by exactly `space-6` from the content edge and use a 2px `color-border-brand` left border to signal their inset status.

### LP6: Space Scales with Importance

The most important content on a page receives the most space around it. A hero heading at `display` size gets `space-24` of vertical breathing room. A body paragraph gets `space-4` between siblings. A footnote gets `space-2`. This is the spatial encoding of hierarchy — it mirrors the type system's size hierarchy and the color system's value hierarchy (darker/bolder = more important = more space).

---

## 7. Compatibility Notes for Downstream Agents

### For the Motion Designer

- **Spatial tokens define rest states, not motion targets.** When an element enters or exits the layout, it should move in increments of the spacing scale — not arbitrary pixel values. A card sliding in from below might translate from `space-8` below its final position; a dropdown opening might grow from `space-0` to its full height. This keeps motion spatially coherent with the layout.

- **Density transitions should not animate.** If a view switches from default to compact density (e.g., a user toggles a density control), the spacing change should be instantaneous, not smoothly interpolated. Animating spacing changes across an entire layout creates a distracting "breathing" effect. State changes to the spatial system are immediate.

- **Elevation transitions can animate.** When an element changes elevation level (e.g., a card being picked up for drag-and-drop, or a modal entering), the shadow can transition smoothly. Use short durations (150–200ms) and ease-out curves. Shadow grows outward and increases opacity — it does not change color or hue during transition.

- **Hover effects on cards** should use a subtle elevation shift: from Level 1 (no shadow) to Level 3 (low shadow) on hover. This implies the card is "liftable" — interactive and responsive. The transition should be 120–150ms ease-out.

### For the Visual Language Curator

- **Illustration placement respects the spacing scale.** When an illustration sits within a content layout, its bounding space uses the same spacing tokens as any other element. An illustration in a card gets `inset-lg` padding. An illustration as a section hero gets `space-16` or `space-24` vertical breathing room. Do not create special spacing values for illustration — they live within the same spatial system.

- **Full-bleed illustrations break the grid intentionally.** When an illustration extends to the page edge (e.g., a hero scene, a section background), it breaks out of the content grid's margins. This is the spatial equivalent of the brand's organic forms breaking free of structure — organic margins, structured content (LP2). The content within or overlaying the illustration still aligns to the grid.

- **Icon sizing follows the spacing scale.** UI icons should be sized to spacing steps: `space-4` (16px) for inline icons, `space-5` (20px) for standard UI icons, `space-6` (24px) for prominent navigation or action icons. This keeps icons proportional to surrounding spacing and prevents them from feeling either cramped or floating.

- **White space within illustrations should approximate the comfortable density tier's rhythm.** Illustrated scenes that depict UI screens, food arrangements, or community settings should use spacing proportions similar to the comfortable tier — generous, breathing, warm. Dense, compact spacing within illustrations would contradict the brand's spatial warmth.

---

## Appendix A: Quick Reference — Spacing Scale

| Step | Multiplier | Web (px) | Deck 16:9 (pt) |
|------|-----------|----------|-----------------|
| `space-px` | 0.25 | 1 | 0.75 |
| `space-0.5` | 0.5 | 2 | 1.5 |
| `space-1` | 1 | 4 | 3 |
| `space-1.5` | 1.5 | 6 | 4.5 |
| `space-2` | 2 | 8 | 6 |
| `space-3` | 3 | 12 | 9 |
| `space-4` | 4 | 16 | 12 |
| `space-5` | 5 | 20 | 15 |
| `space-6` | 6 | 24 | 18 |
| `space-8` | 8 | 32 | 24 |
| `space-10` | 10 | 40 | 30 |
| `space-12` | 12 | 48 | 36 |
| `space-16` | 16 | 64 | 48 |
| `space-20` | 20 | 80 | 60 |
| `space-24` | 24 | 96 | 72 |

---

## Appendix B: Density Tier Quick Reference

| Token | Compact (0.75×) | Default (1.0×) | Comfortable (1.25×) |
|-------|-----------------|----------------|---------------------|
| `space-2` | 6px | 8px | 10px |
| `space-3` | 8px | 12px | 16px |
| `space-4` | 12px | 16px | 20px |
| `space-5` | 16px | 20px | 24px |
| `space-6` | 16px | 24px | 32px |
| `space-8` | 24px | 32px | 40px |
| `space-10` | 32px | 40px | 48px |
| `space-12` | 36px | 48px | 64px |

Body line height: Compact 1.45 · Default 1.55 · Comfortable 1.65

---

## Appendix C: Judgment Call Summary

Decisions that extend beyond or interpret the brief, flagged for review:

1. **4px base unit over 8px** (§1.1): An 8px base would simplify the scale but would not provide enough resolution for the tight end of component spacing (tag gaps, icon offsets, form label gaps). The 4px base gives fine-grained control where it matters while still producing 8px multiples at every even step. If downstream implementation prefers an 8px grid, every even-numbered spacing step (`space-2`, `space-4`, `space-6`, etc.) already aligns to it.

2. **0.75× compact / 1.25× comfortable multipliers** (§3.1): These are judgment calls balancing density range against visual disruption. A more aggressive compact (0.5×) would compress too much and risk touching WCAG touch-target minimums. A more generous comfortable (1.5×) would waste viewport space and make clinical content feel like marketing. The chosen range keeps both tiers within the same recognizable spatial language as default.

3. **Asymmetric inset as default** (§4.1): Most design systems default to square insets. The asymmetric default here (wider horizontal, tighter vertical) is driven by the brand's reading-centric, content-heavy interfaces. If this proves unintuitive for implementers, square insets can be made the default with asymmetric as the named variant — but the current bias better serves the actual content patterns.

4. **Minimal shadow usage** (§5.1): This system prefers surface color and border over shadow for separation. This is a strong opinion driven by the brand's organic, paper-like warmth. If stakeholders or testing reveal that the low-shadow approach creates insufficient visual hierarchy in complex clinical dashboards, Level 1 can be upgraded to include a subtle warm shadow without restructuring the system.

5. **Single-column default for patient content** (LP3): This constrains layout flexibility for patient-facing surfaces. The justification is health equity — multi-column layouts measurably increase cognitive load for low-literacy readers. If patient content requires side-by-side comparison (e.g., two meal plans), use a `comfortable` density card grid rather than a multi-column text layout.

6. **Comfortable tier mandatory for slide decks** (§3.2, rule 4): Slide content is always in the comfortable tier regardless of audience. Even investor decks aimed at hospital CFOs use comfortable density because projected content at distance requires generous spacing. If a data-dense slide (e.g., comparison table, financial model) needs more content per slide, use the compact tier selectively for that slide's table while keeping surrounding text and headings at comfortable.
