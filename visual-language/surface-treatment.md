# Cena Health — Surface Treatment System

_Design specification for border radius, pattern, texture, brand moments, logo-as-motif governance, and gradient rules. Every decision traces to the logo mark's geometry and the established token systems._

---

## 1. Border Radius

### Derivation from the Logo Mark

The logo mark's concentric petal forms are built from organic curves — not mathematically perfect arcs but controlled, rounded shapes that avoid both sharp corners and circular bubbles (logo analysis §2). The mark does not contain any right angles. Its smallest radius of curvature occurs at the junction between petal lobes, where two curves meet; its largest radius is the broad sweep of each petal's outer edge.

The border radius system translates this geometry into named tokens by extracting the mark's curvature logic: **generous but not circular, organic but not arbitrary.** The visual result is components that feel related to the mark — they share its rounded warmth without mimicking its specific shape.

### Named Radius Tokens

| Token | Value | Web (px at 4px base) | Ratio of component height | Use |
|-------|-------|---------------------|--------------------------|-----|
| `radius-sm` | 1 base unit | 4px | ~12–15% of a 28–32px element | Input fields, tags, badges, small chips. Barely perceptible rounding that softens hard edges without calling attention to itself. |
| `radius-md` | 2 base units | 8px | ~15–20% of a 40–56px element | Buttons, cards, dropdown menus, form select boxes, toast notifications. The system's default radius — visible, warm, never bubbly. |
| `radius-lg` | 3 base units | 12px | ~20–25% of a 48–64px element | Large cards, modal dialogs, panel containers, image containers. More pronounced rounding that creates a soft, welcoming container. |
| `radius-xl` | 5 base units | 20px | ~25–30% of a 64–80px element | Hero cards, feature callout containers, large promotional panels. Approaches the curvature of the logo's outer petal edge. |
| `radius-full` | 50% | 50% | Fully circular | Avatars, status dots, circular icon containers, rounded pill shapes (tags, badges with text). |

### Justification

**Why not larger default radius?** Many contemporary design systems use 12–16px as their default radius, creating a rounded, "friendly" component library. Cena Health's brand requires "credible before charismatic" (brand brief §1). An 8px default radius is warm enough to avoid clinical sharpness but restrained enough that a hospital CFO reviewing the platform sees professional software, not a consumer app. The additional warmth comes from the color system's warm surfaces and the typography's humanist letterforms — the border radius does not need to carry the full warmth burden.

**Why the gradation from sm to xl?** The logo mark uses progressively broader curves from its inner rings (tighter curvature) to its outer boundary (broader sweep). The radius scale mirrors this: smaller, tighter components use smaller radii; larger, more spacious components use larger radii. The radius grows with the component, maintaining the same perceptual curvature ratio.

**Why `radius-full` exists:** Circular forms are native to the logo mark's concentric ring structure. Avatar circles, status dots, and pill-shaped elements are organic shapes that feel at home beside the mark. Circular forms in the system are always small — `radius-full` is not applied to large containers.

### Mapping to Component Types

| Component | Radius token | Notes |
|-----------|-------------|-------|
| Button (standard) | `radius-md` | All buttons: primary, secondary, ghost, outline. |
| Button (pill variant) | `radius-full` | Only for compact actions (tag-like buttons, filter chips). |
| Input field | `radius-sm` | Inputs use the smallest visible radius. The subtle rounding prevents clinical sharpness without competing with the input's content. |
| Card | `radius-md` (default), `radius-lg` (large cards, feature cards) | Large cards at `radius-lg` when they contain illustration or serve as feature callouts. |
| Modal | `radius-lg` | Modals are large, prominent containers — the larger radius signals "this is a special surface." |
| Dropdown / Menu | `radius-md` | Matches button radius since dropdowns are triggered by buttons. |
| Toast notification | `radius-md` | Matches the system default. Toasts are transient UI, not special surfaces. |
| Avatar | `radius-full` | Always circular. |
| Tag / Badge | `radius-sm` (rectangular) or `radius-full` (pill) | Pill shape for standalone tags; rectangular for inline badges. |
| Image container | `radius-md` or `radius-lg` | Images within cards inherit the card's radius. Standalone images use `radius-md`. |
| Tooltip | `radius-sm` | Small, transient — minimal radius. |

### Consistency Rule

**Never mix radius tokens within a single component.** A card with `radius-lg` on its outer container does not use `radius-md` on internal elements unless those elements are independently recognizable components (a button within a card). Decorative sub-containers within a component match the parent's radius.

**Inner radius correction:** When a container has padding between its outer edge and an inner element that also has a radius, the inner element's radius should be the outer radius minus the padding (minimum `radius-sm`). This prevents the optical illusion of mismatched curvature when two rounded rectangles nest inside each other.

---

## 2. Pattern and Texture

### The Decision: Texture, Not Pattern

Cena Health does not use repeating geometric patterns. The brand's visual language is organic, not mechanical — a tiling geometric pattern would introduce regularity and repetition that contradicts the hand-drawn, variable-weight quality of the illustration and icon systems. Even organic patterns, when tiled mechanically, reveal their mathematical construction and feel produced rather than placed.

Instead, the brand achieves tactile quality through three mechanisms:

### 2.1 Background Texture (Illustrated)

The illustration system defines background textures as tileable organic forms (illustration.md §5.4). These are the brand's primary texture language — subtle, near-imperceptible, derived from the logo mark's petal geometry. They appear on surface backgrounds and slide deck surfaces at 5–10% opacity.

**These textures are illustrations, not patterns.** They are drawn with the illustration system's line quality and they follow its color rules. They do not tile with visible seams — the organic irregularity of the drawn marks prevents seam detection.

### 2.2 Paper-Like Surface Quality

The warm off-white surface system (`surface-page` at `#FBFAF8`, `surface-primary` at `#F3F1EE`, `surface-secondary` at `#E7E4DF`) already communicates a paper-like tactile quality through color alone. The slight warmth of these surfaces — perceptible against pure white but not identifiable as "beige" or "cream" in isolation — creates the impression of natural material: warm paper, linen, cotton. This is the brand's default tactile expression. No additional texture is needed on most surfaces.

### 2.3 Selective Texture Within Illustration

The illustration system (illustration.md §2) uses texture selectively to communicate material quality: fabric weave, wood grain, food steam, ceramic surface. These textures appear only within illustrated compositions, never as standalone surface treatments. They are drawn by the illustrator, not applied as overlays or filters.

### What Creates the Brand's Tactile Quality

Without repeating patterns, the brand's tactile quality comes from:

1. **Warm surface colors** that read as natural material.
2. **Organic line quality** in icons and illustrations — the variable weight and hand-drawn character create a felt texture even in vector form.
3. **The warm shadow system** (spacing.md §5.3) — warm-tinted shadows feel like shadows cast by soft light on paper, not by a rendering engine.
4. **Typography's humanist curves** — Lora's rounded terminals and Source Sans 3's open counters add a micro-level organic quality to every text-bearing surface.
5. **Illustrated background textures** — the lightest, most ambient layer of the illustration system, applied at near-transparency.

These five layers combine to create a surface quality that feels warm, organic, and material without any single decorative pattern being visible.

---

## 3. Brand Moments

Brand moments are the high-impact surfaces where Cena Health expresses its visual identity most fully. These surfaces combine multiple visual language elements — illustration, typography, color, and surface treatment — into compositions that are more visually expressive than standard UI.

### 3.1 Hero Sections (Website, Landing Pages)

**Treatment:** Full-width narrative illustration (illustration.md §5.2) on a `surface-sage` or `surface-teal` background that bleeds to the page edge. The hero heading (Lora, `display` size, `color-text-primary`) sits within the illustration's negative space — not overlaid on the illustration but composed alongside it. The illustration and the heading share the composition.

**Spacing:** `space-24` (96px) vertical padding above and below the heading. The illustration extends beyond the padded content area, reaching to the section edge. Content within the hero aligns to the page grid; the illustration breaks the grid intentionally (per spacing.md §7, LP2: organic margins, structured content).

**Color logic:** The hero section uses a tinted surface (`surface-teal` for institutional landing pages, `surface-sage` for patient/nutrition pages). The illustration sits on this tinted ground, and the heading reads against it. The surface tint should be subtle enough that the heading maintains ≥7:1 contrast.

### 3.2 Slide Deck Covers

**Treatment:** The Cena Health logo mark occupies the left third of the slide at approximately 40% of slide height — large enough to be a compositional presence, not just a logo placement. The title (Lora, `display` size) occupies the right two-thirds. Background is `surface-page` (`#FBFAF8`) with an illustrated background texture at 5% opacity.

**The logo mark at this scale reveals its concentric ring structure** as a visual element in its own right. The three colors (teal-500, teal-600, sage-700) become visible as distinct rings rather than blending into a single mark. This is intentional — the cover slide is the moment where the mark is most fully itself.

**Subtitle** (Lora, `md` size, `color-brand-primary`) sits beneath the title with `space-4` gap. Presenter name and date in caption style (`xs`, `color-text-tertiary`).

### 3.3 Section Dividers (Website, Slide Decks)

**Treatment:** Full-width horizontal band at `space-16` (64px) height on web, `space-12` (36pt) height on slides. Background uses `surface-teal` or `surface-sage`. An overline label (Source Sans 3, `2xs`, SemiBold, uppercase, `color-text-brand`) centered within the band names the upcoming section.

**The divider's role is rhythm,** not decoration. It creates a visual breath between major content sections, uses the tinted surfaces to signal a shift in topic or register, and anchors the next section with a structural label. The dividers should feel like chapter marks in a well-designed book — present, helpful, unobtrusive.

### 3.4 Empty States

**Treatment:** Centered spot illustration (illustration.md §5.1) at `icon-2xl` (48px) or slightly larger (64–80px), with a heading (Lora, `lg`, `color-text-primary`) and body text (Source Sans 3, `base`, `color-text-secondary`) below. The composition is vertically stacked: illustration → `space-6` → heading → `space-3` → body text → `space-6` → action button.

**The illustration is the emotional moment.** A care plan list with no entries shows an illustration of ingredients waiting on a counter — the potential, not the absence. A search with no results shows a gentle "looking" metaphor, not a frowning face. Empty states in Cena Health never communicate failure — they communicate readiness.

**Color:** The empty state illustration uses sage family colors if the empty state relates to food/nutrition content, teal family colors if it relates to platform/clinical features. The action button (if present) uses the standard primary button style.

### 3.5 Stat Callout Panels

**Treatment:** A panel on `surface-teal` background containing a stat display (Lora, `display`, `color-brand-primary`) with its supporting label (Source Sans 3, `base`, `color-text-primary`) and an optional data illustration (illustration.md §5.3) to the right. The panel uses `radius-xl` for its container and `inset-asym-xl` (`space-6` vertical, `space-8` horizontal) padding.

**The stat count-up animation** (motion.md §3.10) fires when this panel enters the viewport. The illustration remains static while the number builds — the motion system specifies this figure/ground relationship (motion.md §5).

**These panels are reserved for the brand's core claims:** hospitalization reduction, ER visit reduction, preventable cost savings. They are not used for minor metrics or operational data. Each panel earns its visual weight by carrying a number that defines the brand's value proposition.

---

## 4. The Logo Mark as a Design Element

### Governance Principle

The concentric ring mark is the brand's most distinctive visual asset. Its petal geometry, three-color structure, and organic quality make it a powerful design element beyond its role as a logo. This power creates risk — overuse, misscaling, or inappropriate application would dilute the mark's identity function. The rules below govern tightly.

### Permitted Uses

#### 4.1 Watermark / Background Element

**When:** Presentation slides (cover and divider slides only), printed report covers, formal documents (letterhead, certificates).

**How:** The mark is rendered as a single color at 4–6% opacity on the relevant surface. On `surface-page`: use `teal-300` (`#124D45`) at 5%. On `surface-teal`: use `teal-400` (`#1B685E`) at 6%. The mark is scaled to 50–80% of the surface's shorter dimension and positioned off-center — either cropped at an edge (extending beyond the surface boundary) or placed in a corner with generous margin.

**The mark as watermark must be large enough that its organic form reads as a shape, not as a smudge.** Below approximately 120px, the concentric ring detail collapses into an indistinct blob. Minimum watermark size: 200px.

#### 4.2 Derived Forms: Ring Extracts

The three concentric rings of the mark can be used individually as decorative graphic devices — a single ring as a section accent, two rings overlapping as a visual connector.

**When:** Brand collateral only — not in product UI. Marketing materials, report designs, environmental graphics (signage, event materials).

**How:** A single ring is extracted from the mark's geometry and rendered in one color from the brand palette at full opacity. It sits at the edge of a composition, partially visible — cropped by the surface boundary. It is never centered, never floating freely in the composition, and never at a size smaller than the adjacent heading's cap height.

**Color rule for extracted rings:**
- Outermost ring → `teal-500` (`#3A8478`)
- Middle ring → `teal-600` (`#52A395`)
- Innermost ring → `sage-700` (`#81B983`)

The ring always uses its canonical color. Rings do not appear in colors other than their own.

#### 4.3 Favicon and App Icon

The full three-color mark at standard scales (16px favicon, 32px, 180px Apple touch icon, 512px Play Store / App Store). The mark is rendered at full opacity on a `surface-page` (`#FBFAF8`) background — not on white, not on teal. The warm background maintains the brand's surface warmth at the smallest scale.

### Prohibited Uses

| Prohibition | Reason |
|-------------|--------|
| The mark as a repeating pattern | Tiling the mark destroys its singularity. The logo is a specific, placed entity — not a textile. |
| The mark as an icon within UI | The icon system (iconography.md) governs all icons. The logo mark is not an icon — it is the logo. Using it as a navigation element, button graphic, or status indicator confuses identity with interface. |
| The mark in non-canonical colors | The mark's three-color structure (teal-500, teal-600, sage-700) is the brand's most recognizable color moment. Rendering it in grayscale, monochrome non-brand colors, or inverted values damages recognition. Monochrome `teal-200` is acceptable only for single-color printing contexts. |
| The mark at an angle or rotated | The mark's vertical bilateral symmetry (logo analysis §2) creates its stability. Rotation destabilizes it — the petal form becomes ambiguous when its vertical axis is not vertical. |
| The mark animated in routine UI | The motion system explicitly places logo animation outside its scope (motion.md §5). The mark does not pulse, spin, grow, or assemble in standard interface contexts. A one-off brand animation (e.g., a launch video, a conference intro) requires dedicated creative direction. |
| The mark composited with photography | No photograph shows through the mark's silhouette. No photograph is masked into the mark's shape. The mark exists in the brand's drawn-and-colored visual language, not in the photographic documentary language (imagery.md §4). |

---

## 5. Gradient Use

### The Decision: No Gradients in UI. Restrained Gradients in Decorative Contexts.

The token system uses flat color exclusively. The logo uses flat fills. The illustration system uses flat fills. This is a flat-color brand. Gradients in UI components — buttons, cards, surfaces, icons — are rejected without exception.

**However,** the brand's teal-to-sage hue shift (the logo's most important structural property, per color system Principle 2) is inherently a gradient when expressed across a surface larger than a single element. The question is not whether gradient exists in the brand — it does, in the logo's ring-by-ring color progression — but whether it is permissible to express that progression continuously rather than in discrete steps.

### Permitted Gradient Use

#### 5.1 Large-Surface Decorative Gradient

**When:** Presentation slide backgrounds, website section backgrounds, large promotional panels (minimum 800px in the gradient's direction). Never in UI components, never in elements smaller than 400px.

**How:** A two-stop gradient using adjacent steps from the brand palette.

| Gradient name | From | To | Direction | Use |
|--------------|------|-----|-----------|-----|
| `gradient-teal` | `teal-900` (`#D0E7E2`) | `teal-950` (`#E9F5F2`) | Top to bottom | Large teal-tinted surface backgrounds. Adds subtle depth to `surface-teal` without introducing a new color. |
| `gradient-sage` | `sage-900` (`#D0E5D1`) | `sage-950` (`#E7F2E8`) | Top to bottom | Large sage-tinted surface backgrounds. |
| `gradient-warm` | `warm-800` (`#E7E4DF`) | `warm-950` (`#FBFAF8`) | Top to bottom | Large warm surface backgrounds. The default page gradient when flat `surface-page` needs subtle variation. |
| `gradient-brand` | `teal-900` (`#D0E7E2`) | `sage-950` (`#E7F2E8`) | Left to right | The brand's signature gradient: the teal-to-sage hue shift expressed as a continuous surface. Reserved for the most prominent brand moment on a page — hero sections, report covers, conference backdrops. Maximum one instance per surface. |

**Rules:**

1. Gradients use only the lightest palette steps (900 and 950). Mid-value or dark gradients would create a visual complexity that competes with content.
2. The color distance between gradient stops is never more than two palette steps apart. This prevents visible banding and keeps the gradient imperceptibly smooth.
3. Gradients always move in one direction (vertical or horizontal). Radial, diagonal, and multi-direction gradients are rejected — they introduce a visual energy that contradicts the brand's settled, grounded character.
4. Text and interactive elements on gradient backgrounds must meet contrast requirements against the **lightest** stop of the gradient (the worst-case contrast point).

#### 5.2 Background Texture Enhancement

The illustrated background textures (illustration.md §5.4) may sit on top of a decorative gradient. The gradient provides a gentle tonal variation; the texture provides organic warmth. Together, they create a surface that feels like natural material (paper that varies slightly in tone across its surface) rather than a digital flat-fill.

### Gradient-Adjacent: The Teal-Sage Transition in Composition

The brand's most distinctive color move — the hue shift from teal (H:181) to sage (H:145) — should be felt across every major brand composition. In slide decks, this might be a structural progression: early slides use `surface-teal`, later slides use `surface-sage`, with `surface-page` sections between. On a long website page, this might be a section-by-section shift from teal-tinted sections (clinical/institutional content) to sage-tinted sections (patient/food/community content).

This is not a gradient in the CSS sense — it is a compositional gradient, a deliberate color journey across the surface. The viewer experiences the hue shift as a narrative movement: from infrastructure to humanity, from system to person, from teal to sage. This compositional gradient is the largest-scale expression of the logo mark's ring structure: the outermost ring (teal) frames the middle ring (teal-green), which frames the innermost ring (sage). The brand's compositions, at every scale, recapitulate this from-outside-in warmth progression.

---

## 6. Resolution of Remaining Open Questions

All six brand brief open questions have been addressed across the visual language files. For completeness:

| Question | Resolved in | Summary |
|----------|------------|---------|
| Q1: How green is this brand? | color.md (primary), illustration.md §3 | The green is anchored in healthcare by warm neutral grounds and restrained illustration-only warm swatches. |
| Q2: Two-tone wordmark logic | typography.md §4 | Extends to defined brand moments (stat displays, overline + heading, pull quotes, data dashboards). Not a structural default. |
| Q3: Role of photography | imagery.md §1 | Photography is used selectively as the brand's evidential voice. Illustration is primary. |
| Q4: B2B/B2C visual split | illustration.md §6 ("Depicting the B2B/B2C Continuum") | One illustration style, two compositional registers. Teal-dominant for institutional, sage/warm-dominant for patient. |
| Q5: Hand-drawn organic meets healthcare infrastructure | illustration.md §1 ("The Synthesis: Organic Infrastructure") | Infrastructure is depicted through natural metaphor, not technical diagram. The organic style is the means of understanding infrastructure, not decoration applied to it. |
| Q6: UI elements in illustrations | illustration.md §4 | UI elements are rendered as illustrated impressions — color blocks and shape suggestions, never literal text or reproduced UI components. |
