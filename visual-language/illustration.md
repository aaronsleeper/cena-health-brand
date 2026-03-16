# Cena Health — Illustration System

_Design specification for the Cena Health illustration language. Builds on illustration-system.md (the seed document), resolves its silences, and integrates with the established color, typography, spacing, and motion token systems._

---

## 0. Relationship to the Seed Document

The illustration-system.md input is a strong foundation. Its four Visual DNA principles (Warm Clarity, Dignified Humanity, Grounded Optimism, Thematic Cohesion), its Emotional Architecture, its Subject Library, and its Composition Patterns are adopted in full. This document does not restate them — it builds the execution layer they left open, resolves the brand brief's open questions that fall to illustration, and extends the system where the seed was silent.

**What this document adds:**
- A resolved synthesis of "hand-drawn organic" and "healthcare infrastructure" (brand brief Q5)
- A specific execution style with quality references
- Color governance for illustration beyond the UI token system
- A rule for UI elements within illustrated scenes (brand brief Q6)
- Illustration types with dimensions and composition rules
- An explicit rejection list

**Where this document departs from the seed:**
- The seed's "Core Rule: No text or icons within illustrations" is modified. The rule as stated creates an impossible constraint when depicting the VozCare platform, AVA voice assistant, or any Cena Health UI in context. §4 resolves this with a specific protocol.
- The seed's composition patterns (Simple/Complex) are expanded into five named illustration types with distinct specifications.

---

## 1. The Synthesis: Organic Infrastructure

### Resolving Brand Brief Q5

> _"What happens at the intersection of 'hand-drawn organic' and 'healthcare infrastructure'?"_

The answer is not a compromise — it is a specific visual invention. The Cena Health illustration style renders infrastructure as if it were a living system. Data flows like water. Platform connections branch like roots. Care plans unfold like recipes. The organic quality is not applied to infrastructure as decoration — it is the means by which infrastructure is understood.

**The principle:** Infrastructure is depicted through natural metaphor, not technical diagram. Where a generic health-tech brand would show a flowchart of care coordination, Cena Health shows a kitchen where ingredients come together — and the ingredients happen to include a phone showing a care plan, a provider's hand reaching in from the edge of the frame, and a meal taking shape on a cutting board. The system is visible because the scene is composed to reveal it, not because the system is drawn as a system.

**Why this works for both audiences:** The hospital CFO sees the care coordination workflow embedded in the scene — the phone, the provider, the patient, the meal — and recognizes the infrastructure. The grandmother sees a kitchen where someone is helping her manage her meals, and recognizes her own life. The illustration does not change between audiences; the reading changes.

**The execution boundary:** Illustrations may depict complex systems but never depict them as diagrams. The moment a care pathway becomes a flowchart with boxes and arrows, it has left the illustration system and entered the data visualization system. These are separate visual languages. Illustrated scenes tell stories; data visualizations present structures. They may sit adjacent on a page, but they do not merge.

---

## 2. Style Definition

### Execution Quality

Cena Health illustrations are executed at the quality level of a skilled editorial illustrator working for a thoughtful publication — not a stock illustration house, not a tech company's onboarding screens, not a children's book. The work is confident, economical, and emotionally precise. Every stroke exists because it earns its place.

### Quality References

These are reference points for understanding the intended quality and feeling — not sources to copy or styles to replicate. They illuminate specific qualities the Cena Health style requires.

- **Ojima Fumoto's editorial work.** The flatness of color, the confidence of limited palettes, the way human figures carry emotion through posture rather than facial detail. Cena Health's illustration style shares this economy — it says more with less.
- **Lotta Nieminen's approach to environmental illustration.** The way spaces feel inhabited without being cluttered. Specific objects create atmosphere rather than comprehensive inventory. Cena Health's kitchen scenes, community health center interiors, and home environments should feel this way: suggestive, not exhaustive.
- **Owen Davey's natural forms.** The organic geometry — shapes that are clearly constructed but feel grown. Rounded, rhythmic, patterned without being decorative. This is the quality the Cena Health icon-mark establishes in miniature.
- **The mid-century travel poster tradition** (not its aesthetics, its logic). The way a flat-color composition creates depth through overlapping shapes and value contrast rather than through perspective or shadow. Cena Health illustrations use overlapping forms and the teal-to-sage value ramp to create spatial depth without rendering shadow or light.

### Specific Execution Parameters

| Property | Specification |
|----------|--------------|
| **Line weight** | Variable, per illustration-system.md. Primary elements: 2.5–3.5px at 400px illustration width. Secondary: 1.5–2.5px. Fine detail: 1–1.5px. Scale proportionally. |
| **Line quality** | Organic curves with hand-drawn irregularity. Not jittery or sketchy — confident and flowing. Vector paths with manual curve adjustments that prevent mathematical perfection. |
| **Caps and joins** | Round caps, round joins exclusively. No miters, no butt caps. Consistent with iconography system. |
| **Fill approach** | Predominantly flat fill with selective line detail. Large areas receive flat color; contour and detail are added through line work, not through color variation within a single form. |
| **Depth method** | Overlapping forms + value contrast. No cast shadows, no rendered lighting. Darker values recede; lighter values advance. The teal family provides depth in institutional scenes; the sage and warm families provide depth in patient/nutrition scenes. |
| **Perspective** | Gentle isometric suggestion — not true isometric, not flat orthographic. Objects have a very slight three-quarter view that gives them presence without activating a vanishing-point perspective system. Think: a plate seen from slightly above, not from directly overhead or from table level. |
| **Texture** | Selective, never default. Texture is reserved for communicating material quality: the weave of a textile, the grain of a wooden table, the steam rising from food. Applied as a distinct visual element (stipple, cross-hatch, or organic noise in a constrained area), not as a full-surface overlay. |

---

## 3. Color Application

### The Illustration Palette

Illustrations draw from the full teal and sage token scales (steps 200–800 in both families) plus the warm neutral scale (steps 100–900). The color system specifies this range (color.md §5, Visual Language Curator note). Within these ranges, illustration has full access — no per-step restrictions.

**Core illustration color use:**

| Color family | Steps | Illustration role |
|-------------|-------|-------------------|
| Teal 200–600 | `#0D322D` – `#52A395` | Structural elements: devices, buildings, clinical environments, platform UI depictions, background architecture. The institutional register. |
| Sage 300–800 | `#2A4C2D` – `#ACCFAD` | Organic elements: plants, food, textiles, natural environments. The living register. |
| Warm neutral 100–900 | `#25211D` – `#F3F1EE` | Grounds, skin tones, wood, paper, fabric, food surfaces, general warmth. The human register. |

### Illustration-Only Warm Extension

The color system flags the need for warm colors beyond the neutral family for food, skin tones, and cultural artifacts (color.md §5, judgment call). This document defines the illustration-only warm swatches.

**These colors exist only in the illustration layer. They are not UI tokens. They must not migrate into component code, surface tokens, or any interactive element.**

| Swatch name | OKLCH | Approximate hex | Use |
|-------------|-------|----------------|-----|
| `illust-terracotta` | `oklch(52% 0.10 40)` | `#A0614A` | Clay pottery, warm wood, certain skin tone midtones, mole sauce, spice tones. |
| `illust-clay` | `oklch(62% 0.08 45)` | `#B8856B` | Lighter wood, bread crust, tortilla, warm skin tone highlights, ceramic. |
| `illust-ochre` | `oklch(70% 0.10 75)` | `#C9A55E` | Corn, plantain, certain textiles, warm metal, honey, golden food tones. |
| `illust-umber` | `oklch(38% 0.06 50)` | `#5E3F2E` | Dark wood, coffee, dark chocolate, deep skin tones, leather, rich earth. |
| `illust-blush` | `oklch(75% 0.06 30)` | `#CDA09A` | Light skin tone highlights, certain fabric, soft warm accent. |
| `illust-paprika` | `oklch(55% 0.14 35)` | `#B8533F` | Chili, tomato, certain textiles, warm accent for cultural specificity. |

**Governance rules:**

_Note: Governance updated following Design System Synthesizer review (coherence-notes.md §5). The original two-swatch hard cap was replaced with a proportional surface-area rule because the brand's most important visual promise — culturally specific food — is the primary use case for warm swatches, and complex food scenes legitimately need three swatches simultaneously._

1. **Illustration-only warm swatches are never the dominant color in a composition.** This is the primary governance rule. Warm swatches appear in food, skin, textiles, and cultural artifacts — foreground detail, not background fields. The teal, sage, and warm neutral token families must remain visually dominant across the full composition.
2. **Warm swatches may occupy no more than 25% of the illustration's total colored area combined.** The remaining 75%+ must come from the teal, sage, and warm neutral token families. This protects the brand's cool-figure-on-warm-ground identity regardless of how many individual swatches are used.
3. **Maximum three illustration-only warm swatches per illustration** (raised from two). This accommodates culturally specific food scenes — mole (terracotta), plantain (ochre), clay vessel (clay) — that are central to the brand's cultural competency promise and cannot be faithfully depicted with fewer swatches.
4. **If a composition requires more than three warm swatches**, it requires explicit review against the 25% surface-area rule and a demonstration that the teal-sage identity remains visually dominant. This should be extremely rare.
5. Any designer extending this swatch list must present the proposed swatch alongside the full teal-sage palette at the intended illustration scale, and verify that the brand's cool-figure-on-warm-ground dynamic is preserved.
6. Functional colors (`error-base`, `warning-base`, `success-base`, `info-base`) **do not appear in illustrations**. If an illustration depicts a warning or alert, it uses narrative context (a character's expression, a visual indicator shaped within the illustration's own language), never the UI functional color. This preserves the semantic integrity of functional colors for interactive contexts.

### Background and Ground

Illustrated scenes sit on warm grounds. Background fills within illustrations use warm neutral 800–950 (`#E7E4DF` – `#FBFAF8`). When an illustration appears within a `surface-page` or `surface-primary` context, its internal background should blend with the surrounding surface, creating the feeling that the illustration grows from the page rather than sitting on top of it.

Illustrations should **never** have a pure white (`#FFFFFF`) background, a cool gray background, or a black background. The warm ground is not optional — it is the mechanism by which illustrations feel native to the brand environment.

---

## 4. UI Elements Within Illustrated Scenes

### Resolving Brand Brief Q6

> _"How literal is the 'no text in illustrations' rule?"_

The seed document prohibits text overlays, standalone icons, and UI-style graphics within illustrations. This rule is correct for pure thematic illustrations. But the brand must depict the VozCare platform, the AVA voice assistant, and other Cena Health UI in context — showing technology "in hands, not looming" (brand brief §5, Principle 6). These depictions require that screens show something.

**The rule:** UI elements within illustrated scenes are rendered as **illustrated impressions**, not as literal UI reproductions.

**Specifically:**

1. **Device screens show color and shape, not text.** Text lines are represented as horizontal bars in `warm-500` to `warm-600` on a warm surface background. Buttons are represented as rounded rectangles in `teal-500` or `sage-700`. Headers are thicker bars in `teal-200`. The impression is "this screen has content" — not "this screen says X."

2. **The VozCare interface, when depicted, uses the brand's color tokens** to suggest its UI structure. A teal navigation bar, sage-tinted content cards, warm surface backgrounds. The viewer recognizes the color language as belonging to Cena Health without reading any words.

3. **The AVA voice assistant is depicted through its interaction moment** — a speech bubble with organic, wave-like lines (suggesting voice) rather than text. The bubble uses the illustration's line language: variable weight, rounded caps, organic form.

4. **No actual typefaces appear within illustrated scenes.** The typography system specifies this clearly (typography.md §6, Visual Language Curator note): "any text on those screens should be suggested through shape and color." The only exception is the Cena Health logo itself, which may appear on a depicted device screen as a recognizable mark.

5. **Illustrated UI elements must pass the "same illustrator" test** from the seed document. If a depicted screen looks like a screenshot pasted into an illustration, it fails. The screen's content must be drawn with the same stroke quality, the same organic imperfection, and the same flat-fill logic as the surrounding illustration.

6. **Icons within depicted screens** are simplified to basic geometric impressions — a circle for a profile, a rounded square for a feature, a horizontal bar for a menu. They do not replicate the icon system's specific designs. The iconography system exists for actual UI; illustrated screens suggest icons without reproducing them.

---

## 5. Illustration Types

### 5.1 Spot Illustrations

**Purpose:** Focused, single-concept visuals that accompany text or fill specific UI positions. The workhorse illustration type — used more frequently than any other.

| Property | Specification |
|----------|--------------|
| **Dimensions** | 120–240px at 1x. Square or near-square aspect ratio (within 4:3). |
| **Content** | Single subject: one food item, one person in action, one device interaction, one conceptual metaphor. No background environment — the subject sits on the page's warm surface. |
| **Composition** | Off-center/balanced (per seed document). Single clear focal point. Minimum 30% negative space. |
| **Detail level** | Moderate. Primary and secondary strokes. No fine texture detail at this size. |
| **Color** | 3–5 colors from the token palette. Maximum one illustration-only warm swatch. |
| **Use contexts** | Empty states, feature descriptions, list item leaders, card illustrations, onboarding steps, FAQ sections. |

### 5.2 Narrative Scenes

**Purpose:** The signature illustration type. Multi-character, environmentally situated compositions that tell a story about Cena Health's work. These are the illustrations that answer "what does this brand look like when it expresses itself fully?"

| Property | Specification |
|----------|--------------|
| **Dimensions** | 400–800px width at 1x. Aspect ratio varies: 16:9 for hero sections and slide backgrounds, 4:3 for card-spanning illustrations, 1:1 for square social formats. |
| **Content** | Multiple subjects in an environment: people preparing food, families gathered at a table, a community health center visit, a care coordinator reviewing a plan. The scene depicts a moment, not a process. |
| **Composition** | Layered depth per seed document (foreground 40%, midground 30%, background 30%). Left-to-right narrative flow for sequential scenes. Eye path guided by color contrast (teal focal points against warm ground). Maximum detail density: 60% of composition. |
| **Detail level** | Full. All three stroke weights active. Texture used selectively for material quality. |
| **Color** | Full token palette plus up to three illustration-only warm swatches (subject to 25% surface-area rule). |
| **Use contexts** | Website hero sections, slide deck illustrations, marketing materials, report covers, investor deck feature spreads. |

**Composition rules specific to narrative scenes:**

1. **At least one person in every narrative scene is doing something with their hands.** The brand's "dignified agency" principle (brand brief §5, Principle 3) requires active participation. Hands preparing food, holding a phone, gesturing in conversation, writing a list.
2. **Technology, when present, is held or in use** — never floating, never the largest element, never the compositional center. It appears at human scale within the scene's environment.
3. **The environment is specific, not generic.** A kitchen with a particular countertop, a specific pot, recognizable food. A community health center with a particular chair arrangement, not a generic waiting room. Specificity is how the brand earns trust (brand brief §5, Principle 2).
4. **The viewer's eye enters from the left** and follows the color-contrast path. The highest-contrast element (typically a teal device or a brightly-clad figure) should sit at the first-read position (upper-left third of the composition).

### 5.3 Data Illustrations

**Purpose:** Visual companions to statistics, outcomes, and metrics. They provide context for the numbers the brand leads with. These sit alongside stat displays and data sections, framing the data in human terms.

| Property | Specification |
|----------|--------------|
| **Dimensions** | 120–320px width. Tall aspect ratios welcome (2:3, 3:4) for vertical arrangements alongside horizontal data rows. |
| **Content** | A single visual metaphor that connects a statistic to a human outcome. "30% hospitalization reduction" sits beside an illustration of a person at home, healthy, preparing a meal. "$17B in preventable costs" sits beside an illustration of a community health center buzzing with activity. The illustration never depicts the number — it depicts what the number means. |
| **Composition** | Centered or off-center, depending on whether the illustration sits to the left or right of its data. The data side faces toward the statistic (the figure's gaze, the scene's energy). |
| **Detail level** | Moderate. Simpler than narrative scenes, more developed than spot illustrations. |
| **Color** | 3–6 colors. Teal-dominant if the adjacent data uses `color-brand-primary` for the stat display, to create visual kinship between number and illustration. |
| **Use contexts** | Investor decks alongside metrics, website impact sections, annual reports, dashboard summary panels. |

### 5.4 Background Textures

**Purpose:** Subtle illustrated patterns that occupy large surfaces without competing for attention. These are the quietest illustrations in the system — they exist to give surfaces warmth and tactility.

| Property | Specification |
|----------|--------------|
| **Dimensions** | Tileable, minimum tile size 200 x 200px. |
| **Content** | Abstract organic forms derived from the logo mark's petal geometry: curved lines that suggest growth, overlapping shapes at very low opacity, stippled or speckled texture fields. Never figurative — these are felt, not read. |
| **Composition** | Even distribution. No focal point. No directional energy. The viewer should not be drawn to any part of the texture — it is a ground, not a figure. |
| **Detail level** | Minimal. Single stroke weight (accent weight, 1–1.5px equivalent). |
| **Color** | Monochrome. Uses a single color at 5–10% opacity on the relevant surface. On `surface-page`: warm neutral 300 at 5%. On `surface-teal`: teal-600 at 8%. On `surface-sage`: sage-600 at 8%. The texture should barely exceed the perception threshold. |
| **Use contexts** | Section backgrounds, slide deck surfaces, printed material backgrounds, email header zones. Never on interactive UI surfaces (cards, buttons, form fields) where the texture would interfere with readability. |

### 5.5 Diagram Illustrations

**Purpose:** Process and concept explanations that need more visual warmth than a standard flowchart but more structure than a narrative scene. These bridge the illustration system and data visualization.

| Property | Specification |
|----------|--------------|
| **Dimensions** | 400–600px width. Wide aspect ratios (16:9 or 2:1) for horizontal process flows; square for cyclical concepts. |
| **Content** | Steps in a care pathway, platform features in relationship, the food-as-medicine delivery chain. Each step or node is represented by a spot illustration (drawn to spot illustration rules) connected by organic paths — not straight arrows, not sharp-cornered connectors, but flowing curves in the teal or sage family. |
| **Composition** | Sequential for processes (left to right or top to bottom). Radial for cyclical concepts (nodes arranged around a center, connected by curved paths). |
| **Detail level** | Moderate at nodes, minimal for connections. |
| **Color** | Teal family for connective paths. Sage and warm families for node illustrations. This creates a color logic: the infrastructure (paths) is teal; the human moments (nodes) are warm. |
| **Use contexts** | Investor decks, website "how it works" sections, clinical documentation, integration guides. |

---

## 6. Subject Guidelines

The seed document's Subject Library is adopted in full. This section extends it for specific Cena Health contexts the seed did not address.

### Depicting the Cena Health Platform

The VozCare platform and AVA voice assistant are central to Cena Health's value proposition and must appear in illustrations. They are always depicted per §4's rules (illustrated impressions, not literal UI). Specific guidance:

- **VozCare on a phone:** The phone is held in a hand, at a slight angle. The screen shows teal and sage color blocks suggesting UI structure. The phone is never the largest element in the scene.
- **AVA voice assistant:** Depicted through a speech-bubble-like form with gentle wave lines, emerging from a phone or speaker. The wave lines use the illustration's variable stroke weight. The bubble floats near the device but is integrated into the scene's visual language — it does not look like a UI tooltip.
- **Care coordinator dashboard:** When a laptop or desktop screen appears in a scene (provider context), the screen shows a warm-ground surface with teal and sage elements suggesting the platform. The screen is always shown in context: on a desk, in a community health center, beside a patient interaction.

### Depicting Food with Cultural Specificity

The seed document lists culturally specific foods. This section specifies how they must be rendered:

- **Food is recognizable.** A tamale must look like a tamale, not like a generic wrapped shape. Collard greens must show their characteristic leaf structure. Dumplings have their pleated edges. The illustration system's organic imperfection does not extend to making food unrecognizable — specificity is how the brand earns trust.
- **Food is in context.** The seed document specifies this. The extension: food appears in culturally appropriate vessels and settings. A mole is in a clay bowl or on a plate with tortillas, not in a generic white bowl. Greens are in a pot or on a plate with cornbread, not floating in space.
- **Food is appetizing.** This is a brand that prescribes nutrition through food. The illustration of food must make the viewer want to eat it. Colors lean into the illustration-only warm swatches: `illust-ochre` for plantain, `illust-paprika` for chili, `illust-terracotta` for mole, `illust-umber` for dark greens. The warm extension exists primarily for this purpose.

### Depicting the B2B/B2C Continuum

Brand brief Q4 asks how the brand handles the visual split between institutional and patient audiences. The illustration system resolves this through compositional emphasis, not style change:

- **Investor/institutional illustrations** use the full narrative scene format but emphasize the system: the care coordinator, the platform, the workflow. People are present but the composition foregrounds the infrastructure they are connected through. The teal family dominates color. Environments lean clinical-adjacent (community health center, care coordination office) rather than domestic.
- **Patient/community illustrations** use the same narrative scene format but emphasize the person: the patient preparing food, the family at the table, the caregiver and patient in conversation. The sage and warm families dominate color. Environments are domestic (kitchen, dining room, living room).
- **The style does not change between registers.** Same line quality, same stroke weights, same flat-fill logic, same organic perspective. The brand is recognizably one entity across both contexts. The compositional shift — what is foregrounded, what color family dominates — is sufficient to modulate the emotional register.

---

## 7. What the System Explicitly Rejects

Every rejection is specific and traced to a brand principle.

### Rejected: Isometric Illustration

Isometric projection creates a grid-locked, technical visual language. It reads as "tech startup explaining its product" — precisely the visual vocabulary of generic health-tech brands that Cena Health must differentiate from. The logo analysis explicitly names isometric as incongruous (logo analysis §5). Cena Health's slight three-quarter view provides spatial depth without the mechanical quality of isometric axes.

### Rejected: Gradient Fills Within Illustrated Forms

The token system uses flat color exclusively (logo analysis §5, color system throughout). Gradient fills within illustration forms would create a material quality (glass, metal, glow) that contradicts the system's matte, paper-like warmth. The only gradients permitted in the brand are subtle background textures at near-imperceptible opacity (see surface-treatment.md for governance). Illustration uses flat fills and achieves depth through overlapping forms and value contrast.

### Rejected: Outline-Only Illustration Style

An outline-only style (no fills, just strokes) reads as unfinished, tentative, and — at the scale of narrative scenes — visually noisy. Cena Health's brand brief requires confidence: "credible before charismatic." Outline-only illustration is charismatic before credible. The system uses strokes for structure and detail but fills for mass and presence.

### Rejected: Exaggerated Body Proportions

No elongated limbs, oversized heads, or stylized body ratios that signal "tech company onboarding illustration." Cena Health depicts people with realistic proportions. Bodies may be simplified (fewer anatomical details, abstracted hands when not actively doing something), but their proportions must feel true. The brand serves people managing chronic conditions — depicting them in unrealistic bodies would undermine the dignified humanity principle.

### Rejected: Pastels and Candy Colors

The color system's lightest values are muted, not candy-colored (color system Principle 1: "saturation decreases as lightness increases"). Illustration follows this rule. Light sage is sage-800 (`#ACCFAD`), not mint. Light teal is teal-800 (`#A8D1C9`), not aqua. Pastel candy colors read as consumer wellness — the exact category the brand brief identifies as "what Cena Health is not" (brand brief §1).

### Rejected: Clip Art Aesthetics

No uniform stroke weight throughout. No geometric-primitive construction visible in the final form. No flat, mechanical symmetry. No identical, reusable human figures placed at different locations (every figure is drawn for its context). Clip art signals "we did not invest in this" — incompatible with a brand that asks hospital CFOs to trust it with clinical infrastructure.

### Rejected: Cultural Decoration

The brand brief specifically warns against being "culturally decorative" (brand brief §1, trait 3). Illustrations do not use cultural patterns (textiles, pottery motifs, traditional art) as background decoration or border treatment. Cultural specificity appears through what the scene depicts — specific food, specific settings, specific activities — not through applied decorative pattern. A Oaxacan textile may appear in a scene as an object a character is wearing or a cloth on a table; it does not appear as a border pattern framing a generic composition.

### Rejected: Photography-Illustration Hybrid

See imagery.md for the full photography recommendation. Within the illustration system: no photographic textures layered into illustrations, no photo cutouts composited with drawn elements, no photographic backgrounds with illustrated foregrounds. The illustration system is a self-contained visual language. Hybrid approaches create tonal dissonance — the precision of photography clashes with the organic imperfection of the drawn line.
