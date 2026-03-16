# Cena Health — Coherence Assessment

_An honest critical evaluation of the design system as a whole. Read as a critic, not as the system's author._

---

## 1. Genuine Coherence

These are the places where the system works together in ways that exceed the sum of its parts. They are the system's real strengths and should be understood, protected, and not accidentally diluted.

### 1.1 The Warm Ground Mechanism

The single most successful move in the system. The teal-sage palette is inherently cool — in isolation, it reads as standard healthcare. The warm off-white surface system (`#FBFAF8`) transforms the same teals into something that feels organic and approachable without changing the teals themselves. This one decision cascades:

- Typography's chromatic dark text (`#0D322D`) reads as near-black on cream — branded but invisible. On pure white, the same color would read as "oddly green."
- The spacing system's "space creates warmth on warm ground" principle (spacing Principle 5) means that generous margins are not wasted space but active contributors to brand warmth.
- The shadow system uses warm-tinted shadows (`oklch(45% 0.008 70 / 8%)`) that extend the ground's warmth into the z-axis.
- Photography's color treatment shifts highlights toward the same warm cream, creating a shared tonal world between illustration and photography.

This is not a single-domain decision — it is a system-wide mechanism that makes five independent domains (color, spacing, typography, photography, elevation) feel like one thing. Protect this aggressively. The off-white surface is the most "invisible" decision in the system and the most impactful. If it is ever overridden to pure white for "cleanliness" or "simplicity," the entire emotional register shifts.

### 1.2 The Weight-Value-Authority Chain

The logo's coupling of heavier weight with darker value and greater authority produces a coherence that runs from the 64-unit logo SVG all the way through to the motion system's easing curves. Bold headings in chromatic dark. Lighter secondary text in warm neutral. Thicker icon strokes for primary elements. More spatial breathing room around more important content. Interaction that darkens on engagement (hover darkens to teal-400, press to teal-300). Even the Emphasis curve's overshoot is reserved for the most authoritative moment (stat displays). This chain is never broken anywhere in the system — no file contradicts it. It is the system's most internally consistent structural rule.

### 1.3 The Illustration-as-Infrastructure Synthesis

The illustration system's resolution of brand brief Q5 ("hand-drawn organic meets healthcare infrastructure") is the most conceptually ambitious move in the system, and it succeeds. The decision that infrastructure is depicted through natural metaphor — a kitchen scene that contains the care coordination workflow — simultaneously serves both audiences without switching styles or creating separate artifacts. The hospital CFO reads the system visible in the composition; the grandmother reads the familiar kitchen. The same drawing. This is not a workaround — it is a genuine visual invention that only works because the color system, spacing system, and illustration style specifications all support the same compositional logic (teal for infrastructure elements, sage/warm for human elements, overlapping forms for depth, warm grounds for integration).

### 1.4 The Density Tier System

The spacing system's density tiers (compact 0.75x, default 1x, comfortable 1.25x) elegantly resolve the cross-audience tension that the brand brief identifies as the central design challenge. The mechanism is simple — multiply spacing tokens by a scalar — but the implications are profound: the same component, the same typeface, the same colors, the same grid produce recognizably different experiences for clinical staff and patients. Typography reinforces this by allowing line height to flex between 1.45 (compact) and 1.65 (comfortable) while keeping the typeface and scale step identical. Color reinforces it by shifting emphasis (teal for institutional, sage/warm for patient) without changing the palette. This is the system's most practical strength — it will make implementation dramatically simpler than maintaining separate design systems per audience.

### 1.5 The Cross-Domain Compatibility Notes

Each token file ends with explicit compatibility notes for downstream agents. The color system tells the typographer how to use chromatic dark text. The typography system tells the space architect about line height alignment. The spacing system tells the motion designer about spatial tokens as motion distances. The motion system tells the visual language curator about static illustration adjacency rules. This web of cross-references is not just documentation — it is evidence that the system was designed with awareness of domain interactions. The references are specific and actionable, not generic. This is rare in design system documentation and should be maintained as new domains are added.

---

## 2. Tensions That Need Resolution

These are contradictions or unresolved trade-offs that have been papered over or left implicit. Each needs an explicit decision.

### 2.1 The Success-Green / Sage Proximity

The color system flags this but does not resolve it. Success green (H:155) is 10 degrees from sage (H:145). The color system says "downstream implementers should rely on iconography and labeling in addition to color" and offers H:160 as a fallback. But the illustration system uses sage as a primary color for organic/patient/nutrition contexts, and the icon system uses `success-base` for checkmarks and completion indicators. In a patient-facing nutrition context — a sage-tinted card showing a completed care plan with success checkmarks — the sage background, sage illustration accents, and success green icons will create a green-on-green-near-green situation where the visual distinction between "brand sage" and "system success" becomes unreliable.

**Proposed resolution:** Shift success to H:160 now, before component design. The 5-degree increase gives enough perceptual distance from sage while remaining in the green family. Additionally, mandate that success states in sage-dominant contexts (patient materials, nutrition content) always use the success icon (checkmark) at `icon-sm` minimum and pair it with a text label. Never rely on color alone for success feedback on sage surfaces.

### 2.2 The Overline Label's Isolation

The overline label style (Source Sans 3, `2xs`/10px, SemiBold 600, uppercase, 0.08em tracking, `color-text-brand`) is the only place in the type system where uppercase and wide letter spacing appear together. The typography system says this treatment "converts small text into a structural marker." But the spacing system, illustration system, and surface treatment system never reference overline labels in their brand moment compositions. The hero section spec in surface-treatment.md uses headings and illustrations but does not mention overlines. Stat callout panels use stat displays and labels but not overlines.

This creates a risk: the overline label exists as a defined typographic style but has no explicitly specified compositional home outside of the type system's own description. Designers may either underuse it (it exists but nobody places it) or overuse it (every section gets an overline because it seems like a nice pattern).

**Proposed resolution:** The component design phase should define 2-3 specific compositional patterns that use the overline — e.g., overline above H2 section headings on marketing pages, overline as category marker above card titles, overline as section classifier in slide decks. The overline should appear in no more than 3-4 instances per page/slide. This gives it a clear role without letting it become wallpaper.

### 2.3 The Condensed Width's Unspecified Behavior

Typography §1.4 introduces Source Sans 3's variable width axis for condensed settings in data tables, slide footnotes, and dense form layouts. But the spacing system's compact density tier already addresses the same problem (dense clinical interfaces) through spatial compression. The two mechanisms — typographic condensation and spatial compression — could be applied independently or together, and the system does not specify which.

If compact density AND condensed type are applied simultaneously to a data table, the cumulative compression may push the interface below comfortable readability — the compact tier's 0.75x multiplier combined with condensed type's 15-20% horizontal compression could produce a very dense artifact that the typography system's own health equity principle would reject.

**Proposed resolution:** Specify that condensed variable width is a tool to be used *within* the compact density tier when standard-width text still overflows available space — not as a parallel system. The combination rule: compact density is applied first; condensed width is applied to specific elements within it (table cells, form labels) only if standard-width text at compact density still exceeds its container. Body text and headings never use condensed width at any density tier.

### 2.4 The Photography Color Treatment's Precision Gap

Imagery.md §2 specifies that photograph highlights shift toward warm neutral 900 (`#F3F1EE`) and shadows shift toward teal-200 (`#0D322D`). The specification says these adjustments are made through "highlight tone adjustment, not by overlaying a color tint." But it does not provide the operational specifics — Lightroom/ACR slider values, LUT specifications, or even a reference image showing before/after treatment. The description is conceptually precise but technically vague.

For a single photographer or art director, this works — they can interpret the intent. For a brand system that may have multiple content producers treating photographs independently, the gap will produce inconsistency. Different interpretations of "shift highlights toward #F3F1EE" will produce visibly different results.

**Proposed resolution:** Phase 6 or an intermediate asset phase should produce: (1) a reference LUT or Lightroom preset that implements the treatment, (2) a set of 3-4 before/after reference images showing the treatment applied to typical subjects (food, team photo, facility), and (3) a tolerance range — how far from the reference treatment a photograph can drift and still be considered on-brand. This doesn't need to be in the token system — it's an operational asset. But it needs to exist before photography enters production.

---

## 3. Gaps

Things the system does not yet address that it will need before Phase 6 (component design). These are not failures — they are missing work that the current phase was not expected to produce.

### 3.1 Data Visualization Language

The system has stat displays (large numbers in brand teal with count-up animation) and data illustrations (illustrated companions to statistics). But it has no specification for actual data visualization: line charts, bar charts, pie/donut charts, tables with sparklines, heat maps. Healthcare dashboards will need these. The color system provides functional colors and the teal-sage palette, but which colors map to which data series? How are chart axes styled? Do chart labels use Source Sans 3 or Source Code Pro? What stroke weight do chart lines use? The illustration system explicitly separates its visual language from data visualization ("Illustrated scenes tell stories; data visualizations present structures. They are separate visual languages"). The gap between these two needs filling.

### 3.2 Form Component Specifications

The token files define form field padding (`inset-md`), label style (UI label at `sm`, Medium 500), input border (`color-border-default`, `radius-sm`), focus state (teal border with glow), and validation feedback (error border, background pulse). But there is no specification for the spatial relationship between label and input, between helper text and input, between multiple form fields in a group, or between form sections. The spacing primitives (stack, inline, inset) exist, but the specific stack variants for form layout patterns have not been specified. Forms are the primary interaction surface for clinical staff — this gap will be immediately felt.

### 3.3 Dark-on-Dark and Teal-on-Teal Rules

The system specifies that teal-tinted and sage-tinted surfaces should not be adjacent without a neutral separator (spacing §5.4). But it does not address what happens when brand-colored elements (teal buttons, teal icons, teal text) appear on teal-tinted surfaces (`surface-teal`). A teal-500 button on `surface-teal` (teal-950) has adequate contrast, but the visual effect is teal-on-teal — the button may feel embedded rather than actionable. Similarly, the brand's stat display in `color-brand-primary` on a `surface-teal` callout panel (specified in surface-treatment.md §3.5) creates a teal number on a teal surface.

Component design will need explicit rules: which interactive elements are permitted on which tinted surfaces, and whether buttons on tinted surfaces should use the default teal or an alternative treatment (outline button, chromatic dark button, etc.).

### 3.4 Responsive Illustration Behavior

The illustration system specifies dimensions (spot: 120-240px, narrative: 400-800px, etc.) but not how illustrations respond to viewport changes. A narrative scene at 800px width on desktop might need to be 375px on mobile — does it scale proportionally (maintaining composition but losing detail), does it crop (maintaining detail but losing context), or does it swap to a different asset (mobile-specific composition)? The illustration system's fine detail removal rule at small sizes (from the icon system: secondary strokes removed below 20px) hints at a progressive-detail philosophy, but it isn't specified for illustrations.

### 3.5 Animation Choreography for Complex Views

The motion system specifies individual interaction patterns (modal enter, dropdown open, toast slide-in, card hover) but not how they coordinate when multiple patterns fire simultaneously. A clinical dashboard loading state might involve: skeleton shimmer on multiple cards, staggered content reveal across cards, a stat count-up in a callout panel, and a toast notification entering — all potentially overlapping in time. The motion system's Principle 6 ("one motion at a time") provides the governing rule but no specific choreography pattern for this kind of compound load sequence.

### 3.6 Token Format for Implementation

All tokens are specified in markdown tables with OKLCH and hex values. For component design and development, these need to be exported as design tokens in a standard format (Style Dictionary, Tokens Studio, CSS custom properties, etc.). The token architecture (semantic layer referencing palette layer) is well-defined, but the handoff format is not specified. This is an implementation concern, not a design concern — but it will be the first thing the component design agents need.

---

## 4. Risks

Decisions that are correct in principle but fragile in practice. Where the system could be misapplied by someone who understood the letter but not the spirit.

### 4.1 The Warm Off-White Being Overridden

The surface-page color (`#FBFAF8`, oklch 98.5% 0.003 85) is barely perceptible against pure white. A developer or designer might look at it and think "this is basically white, I'll just use `#FFFFFF`." The color system notes this risk and calls the off-white "the most impactful single decision in the color system." But the impact is felt through relationships — a side-by-side comparison of `#FBFAF8` and `#FFFFFF` looks trivial. The impact is felt cumulatively: an entire page of warm off-white vs. an entire page of white feel emotionally different. This is a high risk because it's the easiest decision to override and the hardest to justify to someone who hasn't seen the system in full context.

**Mitigation:** The component library should make `surface-page` the non-overridable default. The semantic token `color-surface-page` should never map to `#FFFFFF` in any theme. If a pure white background is genuinely needed (e.g., for photographic color accuracy in an image viewing context), it should require an explicit override class that is documented as an exception.

### 4.2 The Two-Tone Typography Becoming Ubiquitous

The two-tone treatment (chromatic dark + brand teal in a single composition) is specified as a brand moment — reserved for stat displays, overline-heading pairs, pull quotes, and data dashboards, limited to 1-2 instances per page. But it is the system's most visually distinctive typographic gesture. Designers will be tempted to use it more, especially in marketing contexts where "looking like Cena Health" is the goal. If every heading gets a teal keyword, the treatment becomes noise and loses its signaling power.

**Mitigation:** Component design should provide two-tone-capable components (stat callout, overline-heading block, pull quote) as discrete, named components — not as a general-purpose typographic utility. If two-tone text is only achievable through specific components, not through ad hoc color overrides on any heading, the usage naturally limits itself.

### 4.3 The Illustration Style Drifting

The illustration system specifies quality references, execution parameters, and explicit rejections. But illustration is inherently the most subjective domain in the system. A new illustrator who reads "organic curves with hand-drawn irregularity" might produce something more sketchy than intended, or more geometric than intended. The "same illustrator test" (do new elements look like the same person drew them?) is a good heuristic but relies on judgment.

**Mitigation:** Before component design begins, the system needs 3-5 canonical illustration examples at each type (spot, narrative, data, background texture, diagram) that serve as style references — not as spec but as demonstration. These examples are the "voice samples" that establish what the written spec means in practice. Without them, the spec will be interpreted differently by different illustrators.

### 4.4 Compact Density Being Used by Default

The spacing system specifies that default density is the baseline and compact is an explicit override for clinical contexts. But developers building clinical dashboards will spend most of their time in compact density, and it may become their default mental model. When they build a component that will also be used in patient-facing contexts, they might design it at compact density because that's what they're used to — and the component ships with incorrect density assumptions.

**Mitigation:** The component library should make default density the literal default. Compact density should require an explicit wrapper or context provider. If a component is rendered without any density specification, it renders at default — never compact. This makes the "generous by default" principle a technical reality, not just a guideline.

### 4.5 The Sage Family Being Treated as Optional

The color system and illustration system both position sage as one pole of the brand's signature hue shift. But in practice, sage appears far less than teal in the token system — there are no sage interactive elements, no sage buttons, no sage text. It appears primarily in illustrations, patient-facing surface tints, and the logo's innermost ring. A designer working primarily on institutional/B2B surfaces might never use sage tokens, and the brand's visual output would converge on "teal brand with warm neutrals" — losing the analogous character that distinguishes it.

**Mitigation:** Component design should ensure that at least one common component variant (e.g., a "nutrition" or "patient" card variant, a "food" tag category, a "care plan" accent) uses sage family tokens as its primary accent. Sage should appear in the component library itself, not only in illustrations and surface tints, so that designers encounter it as a first-class token, not an illustration-only color.

---

## 5. The Warm Swatch Governance Question

### The Question

Illustration.md limits compositions to a maximum of **two** illustration-only warm swatches per illustration, alongside the full token palette. Complex food scenes — a table with mole (`illust-terracotta`), plantain (`illust-ochre`), and a clay bowl (`illust-clay`) — may need three warm swatches simultaneously. The two-swatch limit exists to "prevent warm swatches from dominating and pulling the illustration away from the brand's teal-sage identity." But the brand's core promise is culturally specific nutrition, and culturally specific food is where the warm swatches earn their place.

### Assessment

The two-swatch limit is too restrictive for its most important use case. The risk it guards against — warm swatches overwhelming the teal-sage identity — is real, but the mechanism (a hard numeric cap) is blunt. A single warm swatch used as a large background fill would do more damage to the brand's color identity than three warm swatches used as small foreground food details.

The issue is not how many warm swatches appear but how much surface area they occupy and whether the teal-sage structure remains dominant.

### Resolution

Replace the two-swatch hard cap with a proportional rule:

1. **Illustration-only warm swatches may occupy no more than 25% of the illustration's total colored area combined.** The remaining 75%+ must come from the teal, sage, and warm neutral token families. This preserves the teal-sage dominance regardless of how many warm swatches are used.

2. **A maximum of three warm swatches per illustration, raised from two.** This accommodates the culturally specific food scenes that are the brand's primary differentiator. A table scene with mole (terracotta), plantain (ochre), and a clay vessel (clay) is now permitted — provided those three warm elements together occupy no more than 25% of the total colored area.

3. **The existing rule that warm swatches are "never the dominant color in a composition" is preserved and restated as the primary governance mechanism.** The numeric cap is now a backstop, not the primary guard. The surface-area rule is the primary guard.

4. **If a composition requires more than three warm swatches** (a scenario that should be extremely rare — most food scenes can work with two or three), it requires explicit review against the 25% surface-area rule and a demonstration that the teal-sage identity remains visually dominant.

This resolution preserves the intent (brand's cool identity is protected) while accommodating the brand's most important visual promise (culturally specific food depicted with appetizing specificity).

---

## 6. Recommendations for Phase 6 (Component Design)

What the component design agents should know before they start, in order of importance.

### 6.1 Most Important Things to Get Right

**The density tier implementation must be a single mechanism, not per-component adjustments.** The spacing system specifies that density is set per-surface and all components inherit. If the component library implements density as per-component props instead of a contextual provider, every page becomes a density negotiation and the "never mix density tiers within a single view" rule becomes unenforceable. Get the density mechanism right at the infrastructure level. Everything else follows.

**The warm off-white surface must be the default that requires effort to override.** Make `color-surface-page` the root background. Make `#FFFFFF` an explicit exception, not an available alternative. This is the decision that most implementation teams will question and the decision that most affects the brand's emotional register.

**The semantic token layer must be the only layer that components reference.** Components should never import raw palette steps (teal-500, sage-700). They should reference `color-brand-primary`, `color-text-secondary`, `color-surface-page`. This insulation is specified in the color system but must be enforced architecturally. If a component directly references teal-500, it bypasses the semantic layer and becomes fragile to palette evolution.

**Card and container components must support the warm border system, not just box-shadow.** The spacing system specifies that the primary elevation method is surface color shift, then warm border, then warm shadow — in that order. Many component libraries default to box-shadow for elevation. If the components ship with shadow-first elevation, the warm-paper surface quality will be lost in favor of Material Design-style floating cards.

### 6.2 Most Likely Failure Modes

**Failure mode: "Clinical dashboard" becomes the design reference for all components.** Clinical dashboards are the most complex UI surface and will receive the most development attention. If components are designed dashboard-first, they will default to compact density, information-dense layout, and teal-dominant color — and the patient-facing, sage-tinted, comfortable-density register will be an afterthought. Design components at default density first. Compact is the override.

**Failure mode: Illustration is treated as a content type, not a compositional element.** If illustrations are dropped into image containers at fixed aspect ratios (like photographs), they lose the compositional integration that makes them work. The illustration system specifies that illustrations "blend with the surrounding surface, creating the feeling that the illustration grows from the page." This means illustration containers on warm surfaces should have no visible border and should use transparent or surface-matched backgrounds. They are not image cards — they are brand expressions that merge with the layout.

**Failure mode: The two-tone typography becomes a CSS utility class.** If a `.text-brand-accent` class exists that can be applied to any `<span>` within any heading, the two-tone treatment will appear everywhere. The treatment should be achievable only through designated component patterns — the stat callout component, the overline-heading component, the pull quote component — not through a generic text utility.

**Failure mode: Motion is added last.** If components ship without motion specifications and animation is added later, the motion will feel applied rather than integrated. The motion system's easing curves and durations are designed to reinforce the spatial and color systems — the enter curve's deceleration mirrors the spacing system's organic feel; the exit curve's acceleration mirrors the brand's directness. Components should be built with their motion behavior from the start.

**Failure mode: Photography and illustration share a container.** The imagery system is explicit: photography and illustration occupy separate spatial zones, never overlap or merge. If the component library includes a generic "media" container that accepts either photography or illustration interchangeably, the distinction between evidential and expressive visual languages will blur. Provide separate component patterns: an illustration well (borderless, surface-integrated, warm-ground) and a photo well (bordered, documentary, contained).

### 6.3 Specific Technical Recommendations

1. **Implement OKLCH as the canonical color format in CSS.** The color system specifies OKLCH as canonical. Modern browsers support `oklch()` natively. Hex values are fallbacks. If the component library uses hex as the implementation format and converts from OKLCH during build, rounding errors will accumulate and the carefully calibrated chroma/lightness relationships will drift.

2. **Use CSS custom properties for all tokens, not Sass variables or JS constants.** Custom properties enable runtime theme switching (e.g., density tier changes, future dark mode) without rebuilds. The token architecture (semantic referencing palette) maps cleanly to custom property layering.

3. **Implement the spacing scale as a custom property scale, not a utility class framework.** The density tiers work by multiplying the base unit. If spacing is implemented as fixed utility classes (`p-4`, `gap-6`), density tiers require regenerating all classes at each multiplier. If spacing is implemented as custom properties that reference a base unit (`--space-4: calc(var(--base-unit) * 4)`), changing `--base-unit` from 4px to 3px (compact) or 5px (comfortable) cascades automatically.

4. **Build the icon system as inline SVG components, not as a font or sprite sheet.** The icon specification requires variable stroke weight, selective fills at larger sizes, and color that responds to semantic tokens. Icon fonts cannot vary stroke weight per icon. SVG sprites cannot respond to contextual color tokens. Inline SVG components can do both.

5. **Provide a reduced-motion context that components can read.** The motion system specifies complete reduced-motion substitutions for every pattern. Rather than each component implementing its own `@media (prefers-reduced-motion: reduce)` query with potentially inconsistent behavior, provide a system-level context or CSS layer that components inherit. This ensures the reduced-motion behavior specified in motion.md §4 is implemented uniformly.

---

## 7. Overall Assessment

**The system coheres.** This is not false consensus — the coherence is specific and traceable.

The warm-ground mechanism, the weight-value-authority chain, the hue-shift-as-brand-identity, the density-tier audience resolution, and the illustration-as-infrastructure synthesis are five distinct systems that reinforce each other without any of them being aware they were designed to do so. The color system's warm off-white surface makes the spacing system's generous margins feel warm. The typography system's weight-carries-authority principle makes the color system's value hierarchy feel natural. The illustration system's natural-metaphor approach makes the motion system's organic deceleration feel thematically correct. Each domain reads the others' outputs and builds on them.

The tensions identified above (success/sage proximity, overline isolation, condensed-width ambiguity, photography treatment precision) are genuine but minor — they are edge cases that emerge when the system is pushed toward its boundaries, not contradictions in its core logic. The warm swatch governance question is the most consequential, and its resolution (proportional rule replacing hard cap) strengthens rather than weakens the system.

The gaps are expected — data visualization, form specifications, responsive illustration, token export format — and none of them require redesigning existing decisions. They are additive work that builds on a stable foundation.

The risks are real but addressable through implementation architecture (density as context provider, semantic tokens as the only component interface, off-white as non-overridable default). The system's greatest vulnerability is not in its design logic but in the distance between its intention (warmth through relationship, restraint as a feature) and the habits of implementation teams who may default to pure white, box-shadow elevation, and unrestricted brand-color utilities. The component design phase must embed the system's logic in its architecture, not just its documentation.
