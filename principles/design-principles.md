# Cena Health — Unified Design Principles

_The synthesized design logic of the Cena Health system. Derived from reading every token, visual language, and brand document together — not from any single source._

---

## 1. The Unifying Idea

**Cena Health makes infrastructure feel like it grew rather than was built.**

This is the thread. The logo's concentric rings emanate outward like a seed pod — organic form expressing systemic structure. The color system rotates hue from cool teal to warm sage as values lighten, mimicking the way natural light warms as it diffuses. The chromatic dark text (`#0D322D`) is a near-black that carries the green of living things rather than the neutrality of ink. The motion system decelerates organically — elements arrive quickly and settle slowly, like something finding its place in a landscape rather than snapping to a coordinate. The illustration system renders care coordination workflows as kitchen scenes where the infrastructure is visible only because the composition reveals it, not because it is drawn as a diagram. The spacing system treats empty space on warm off-white surfaces as warm presence rather than void — the ground itself has warmth, like soil that sustains.

This idea is specific to Cena Health's position: clinical infrastructure for prescription-based nutrition. Infrastructure implies engineering, systems, precision. Nutrition implies organic, cultural, human. Most brands in this space choose one register and gesture toward the other. Cena Health's design system does not gesture — it makes the infrastructure genuinely organic and the organic genuinely systematic. The token philosophy captures this: proportional relationships rather than pixel values, so the system breathes at every scale like a living structure. The illustration style captures it: natural metaphor as the means of depicting complex systems, not as decoration applied to them.

The unifying idea is not "clinical warmth" — that is the brand brief's first principle, and it describes the emotional outcome. The unifying idea is the mechanism that produces clinical warmth: everything in the system is designed to feel grown rather than constructed, so that infrastructure and humanity are not two things held in tension but a single thing experienced from two angles. The concentric rings of the logo are the diagram of this idea: the innermost ring (sage, warm, alive) is held by the outermost ring (teal, structural, institutional), and the progression from outside to inside is a journey from system to person — the same journey the brand asks every viewer to take.

---

## 2. System-Level Design Principles

These govern decisions that span multiple domains simultaneously. They are different from the per-domain principles in individual files — those principles govern within a domain; these govern between domains.

### Principle 1: The Hue Shift Is the Brand

The logo's 37-degree hue rotation from teal (H:181) to sage (H:145) is not a palette detail — it is the brand's signature visual move. It appears at every scale: within the logo mark's three rings, across the color system's analogous sweep, in the compositional gradient from teal-dominant institutional sections to sage-dominant patient sections, in the slide deck's structural progression from early teal slides to later sage slides, in the illustration system's color logic (teal for infrastructure, sage for organic life), and in the surface treatment system's `gradient-brand` specification. This hue shift is how the system physically enacts its unifying idea — the rotation from cool structure to warm life, expressed in color.

**Cross-domain resolution:** When designing a long-scroll webpage, the teal-to-sage progression should be felt as a narrative arc. Clinical/institutional sections near the top use `surface-teal` backgrounds with teal-dominant illustration and overline labels in `color-text-brand`. As the page scrolls toward patient-facing and nutrition content, sections shift to `surface-sage` backgrounds with sage/warm-dominant illustration. Typography follows: stat callouts in `color-brand-primary` (teal) give way to pull quotes in softer sage contexts. The page reads as a single composition that recapitulates the logo's ring structure — from institutional perimeter to human center.

### Principle 2: Weight and Value Move Together

The logo establishes an inviolable coupling: heavier visual weight pairs with darker value, and both signal authority. "Cena" is bold and near-black. "health" is light and teal. The outer ring is thickest and darkest-teal; the inner ring is thinnest and lightest-sage.

This coupling propagates without exception across every domain. In typography: Bold 700 headings use chromatic dark; Regular 400 body uses the same dark; lighter secondary text shifts to warm neutral. In color: darker, more saturated values carry primary importance. In spacing: the most important content receives the most space around it — display type gets `space-24` of breathing room; footnotes get `space-2`. In iconography: primary structural strokes are 2px; secondary detail strokes are 1.5px. In motion: interaction deepens color on hover and press (darkening = engagement), and the Emphasis curve's subtle overshoot is reserved for the brand's most authoritative gesture (stat displays).

**Cross-domain resolution:** When a card contains a heading, body text, an icon, and a stat number, the hierarchy resolves itself without a separate specification: the stat in display-size bold teal occupies the most space and has the heaviest visual mass; the heading in semibold chromatic dark comes next; the body in regular weight follows; the icon at secondary stroke weight and the caption in tertiary warm gray recede. Weight, value, size, and space all move in the same direction because they all follow the same rule.

### Principle 3: Warm Ground, Cool Figure — At Every Layer

The color system names this as its third principle, but the logic is not limited to color. It is the system's fundamental spatial relationship.

In spacing: warm off-white page ground is treated as an asset — generous margins expose more of it, amplifying warmth. In typography: chromatic dark teal text (cool figure) sits on cream surfaces (warm ground); secondary text in warm neutrals recedes into the ground itself. In illustration: scenes sit on warm neutral backgrounds and blend into surrounding surfaces, growing from the page rather than floating on it. In photography: highlights shift toward warm neutral 900; shadows toward chromatic teal-dark. In surface treatment: shadows are warm-tinted so that even elevation effects extend the warm ground rather than introducing cold.

**Cross-domain resolution:** When a dark-background section is needed (e.g., a teal-dark hero for institutional content), the relationship inverts carefully, not arbitrarily. Dark surfaces use the teal family at very low lightness (chromatic dark, not neutral gray). Text inverts to warm off-white. The "warm" element remains the human-facing content; the "cool" element remains the structural container. The warmth moves with the reader, not with the background color.

### Principle 4: One System, Two Registers — Through Composition Only

The brand serves hospital CFOs and grandmothers from the same design system. The resolution is never substitution — never a different typeface, palette, illustration style, or icon set. The resolution is always compositional: which elements are emphasized, how much space is used, which color family dominates.

Typography: patient materials use the same faces at larger sizes with generous line height and comfortable density. Color: institutional contexts lean teal-to-dark; patient contexts lean sage-to-warm. Illustration: same style, but institutional scenes foreground the platform (teal-dominant); patient scenes foreground the person (sage/warm-dominant). Spacing: comfortable tier (1.25x) for patients; compact tier (0.75x) for clinical dashboards. Motion: identical curves and durations everywhere — clinical brevity is universal.

**Cross-domain resolution:** When a single page must serve both registers (a care coordinator's view with a clinical dashboard and a patient care plan preview), the density tier provides the mechanism. The dashboard section uses compact density with `surface-teal`. The care plan preview uses comfortable density with `surface-sage`. The type system, icon system, and grid are identical — only density and color emphasis shift. A `surface-page` separator between sections provides visual breath between registers.

### Principle 5: Organic Form, Systematic Application

The system's visual elements — icon curves, illustration strokes, border radii, type terminals — are organically shaped. But their application is systematic: icons snap to a 24-unit grid, spacing follows a named scale, radii map to named tokens, density changes apply uniformly across a view. The organic quality lives in form; the systematic quality lives in arrangement. This mirrors the logo: organic petal shapes rendered with geometric consistency.

**Cross-domain resolution:** When designing a new icon, the designer draws with the system's organic line quality (variable weight, round caps, curvilinear geometry) but constructs on the 24x24 grid with specified stroke weights and optical corrections. The icon feels hand-drawn because the form is organic; it sits cleanly in any layout because the construction is systematic. The same logic applies to components: a card's border radius is organically rounded (`radius-md`, 8px), but its padding follows the spacing scale exactly (`inset-lg`, `space-4` all sides). Warm bones, precise skeleton.

### Principle 6: Restraint as the Default — Emphasis Is Earned

The system's default state is quiet. Body text disappears into content. Surfaces separate through color shift, not shadow. Motion confirms interaction, not decorates. Icons are stroke-based monochrome. Photography is documentary. The system's most expressive elements — stat count-ups, two-tone typography, the Emphasis easing curve, `gradient-brand`, logo-as-watermark, narrative scene illustrations — are all explicitly governed by usage caps and context rules.

**Cross-domain resolution:** When designing a feature page, the default mode is: Source Sans 3 on warm cream with chromatic dark, Plus Jakarta Sans headings in semibold, cards separated by surface color with warm borders, icons in monochrome. This quiet surface is where most time is spent. Brand moments — a hero illustration, a stat callout with count-up, a two-tone heading — are placed deliberately, surrounded by `space-16` or `space-24`, and limited to a few per page. If every section is a brand moment, none of them are.

### Principle 7: Evidence and Expression Stay in Their Lanes

Photography proves things (real partnerships, real food, real teams). Illustration expresses things (brand warmth, system concepts, emotional register). These visual languages coexist but never merge. No photo-illustration hybrids, no illustrated overlays on photographs, no photographic textures in drawn scenes. Color treatment bridges the gap so they share a warm-toned world, but they occupy separate containers on every surface.

**Cross-domain resolution:** On an investor deck slide about a hospital partnership, a narrative illustration (expressing the care coordination concept) and a photograph (proving the partnership exists) may both appear. The illustration sits higher in visual hierarchy — larger, more prominently placed. The photograph is treated to match the warm color world. They occupy separate grid regions. The illustration leads; the photograph supports. Neither pretends to be the other.

### Principle 8: Accessibility Is Load-Bearing Structure

The system's accessibility features are not accommodations — they are structural decisions that shape the system's character. The 1.55 body line height exists for low-literacy patients and also creates the spacious reading quality the brand needs. The chromatic dark text exists for branded color and also provides 15:1+ contrast. Dual-cue state changes (color + shape, shadow + border) exist for color-blind users and also create the accumulated hierarchy the system depends on. Removing accessibility features would break the design, not just compliance.

**Cross-domain resolution:** When a developer asks to tighten body line height to 1.4 for a clinical dashboard, the system says: minimum 1.45, via compact density tier only, clinical-staff-only contexts, never patient-facing. The line height is simultaneously the spacing system's vertical rhythm anchor, the type system's readability guarantee, and the brand's spatial warmth. Changing it ripples through three systems.

---

## 3. The Hierarchy of Decisions

When principles conflict, resolve them in this order. Higher tiers override lower tiers.

### Tier 1: Non-Negotiable Constraints

Not principles — boundaries. Cannot be overridden by any design decision.

1. **WCAG AA contrast minimums on all text.** The system exceeds AA for primary and secondary text; AA is the floor. No visual choice justifies illegible text.
2. **Minimum touch targets (44x44px).** Form labels at 14px must sit within adequate interactive zones regardless of visual density.
3. **The four locked logo colors at specified values.** The brand's DNA. Not open to interpretation.
4. **No functional color in illustrations.** Error-red, warning-gold, success-green, and info-blue are reserved for interactive UI feedback. Their semantic integrity is preserved by exclusion from decorative use.

### Tier 2: Identity Decisions

These define what Cena Health looks like. Overriding them changes the brand.

5. **Warm ground, cool figure.** Teal-sage on warm cream. Reversing this relationship produces a different brand.
6. **Chromatic darks, muted lights.** Darkest values carry color; lightest stay desaturated. Pure black text or candy-colored tints are identity violations.
7. **The hue shift from teal to sage.** The analogous rotation must be preserved. A monochromatic teal-only system kills the logo's most distinctive property.
8. **Illustration is primary; photography is secondary and evidential.** Reversing this hierarchy changes the brand from expression-led to documentation-led.

### Tier 3: System Principles

These govern how the system operates. Can be bent in exceptional circumstances with documented rationale.

9. **Proportion over pixel value.** Relationships defined as ratios. Fixed overrides permitted only when ratios produce values that fail at a specific rendering context.
10. **Two registers, one vocabulary.** Same elements at different emphasis. A new element for one register requires system-level justification.
11. **Restraint in expressive gestures.** Usage limits on two-tone type, brand gradient, stat count-up, logo-as-motif.
12. **Hierarchy through accumulated differentiation.** At least two properties change per hierarchy level.

### Tier 4: Contextual Preferences

Default behaviors. Can be overridden per-context with good judgment.

13. **Generous spacing by default, compact by permission.** Default density is comfortable enough for patients; compact is applied explicitly.
14. **Ease-out as default motion.** Overridden for exit (ease-in) and continuous loops (linear).
15. **Surface color before border before shadow.** Can be escalated when lighter methods prove insufficient.
16. **Single-column default for patient content.** Multi-column permitted when side-by-side comparison is genuinely needed.

### Using the Hierarchy

When a designer faces a genuine trade-off — for example, compact density would improve clinical task completion but generous density better serves health equity — they consult the tiers. Health equity (Tier 1 via accessibility) outranks density preference (Tier 4). The form uses default density. But if the same form is for clinical staff only, the audience constraint shifts, and compact density at Tier 4 is no longer in tension with Tier 1. The hierarchy resolves differently in different contexts, which is its purpose.

---

## 4. The Quality Standard

A design artifact is "done well" when it passes all five tests. Ordered from most objective to most diagnostic.

### Test 1: Token Fidelity

Every color, type style, spacing value, radius, shadow, easing curve, and duration maps to a named token. No magic numbers, no "close enough" hex values, no custom curves. If a value isn't in the token system, it's either wrong or it reveals a gap that should be formally addressed.

### Test 2: Cross-Reference Integrity

Each domain's choices reinforce the others. Text hierarchy uses weight AND color AND size AND spacing simultaneously. Interactive states use color AND border AND elevation (at least two). Illustration and photography share warm-tone calibration. Typography line heights and spacing steps are rhythmically consonant. A failure here means one domain was designed without reading the others.

### Test 3: Register Coherence

The density tier, color emphasis, and compositional register align with the intended audience. A card using teal color (institutional), comfortable density (patient), and sage illustration (patient) sends mixed signals. Each artifact should be internally coherent about its register. The register is a dial — it can lean one direction — but it should not point in two directions simultaneously.

### Test 4: Restraint Discipline

The quiet mode is genuinely quiet. Body text regions, data tables, form interfaces, and navigation chrome serve their content without drawing attention to their design. Brand moments are spatially separated, limited in number, and placed at genuine narrative inflection points. If every section has a stat count-up and a two-tone heading and a narrative illustration, the expressiveness has flattened into noise.

### Test 5: The "Grew, Not Built" Test

The most subjective test, but the most diagnostic. Does the artifact feel like its elements emerged from the same root? Or does it feel assembled — components placed correctly but without organic connection? The warm surfaces, organic curves, humanist type, analogous color shift, deceleration motion, and living-system illustration should combine into a felt quality of organic wholeness. If the artifact feels "correct but cold," it has passed tests 1-4 but failed test 5. The fix is almost always: more warm ground (expose more cream surface), more spatial generosity (increase spacing), or better illustration integration (let the visual language breathe into the composition rather than sitting in a container).

---

## 5. What This System Is Not

Anti-patterns — choices that contradict the system's logic, not matters of taste. Each is traced to the specific mechanism it violates.

### Not: Pure White Surfaces

Using `#FFFFFF` as a background anywhere. The warm off-white (`#FBFAF8`) sets the temperature of every screen. Pure white makes teal feel clinical, shadows feel rendered, and the entire register shifts from "infrastructure that feels human" to "infrastructure." The warmth comes from the ground. _(Violates: Warm Ground/Cool Figure; the unifying idea)_

### Not: Cool Gray Neutrals

Using cool gray (`#F5F5F5`, `#9E9E9E`, etc.) for surfaces, borders, or shadows. Every neutral carries a warm hue (H:60-85). Cool neutrals are foreign matter that makes the teal palette feel medical and sterile. _(Violates: Warm Ground/Cool Figure)_

### Not: Sharp Corners

Using 0px radius on any visible component. The logo contains no right angles. Icons use round caps and joins. Illustration uses organic curves. A sharp-cornered element introduces mechanical precision that every visual domain explicitly rejects. _(Violates: Organic Form/Systematic Application)_

### Not: Linear or Bouncy Motion

Using `linear` easing for user-facing transitions or bounce/spring effects for standard interactions. Organic deceleration is the default — elements settle, not snap. Linear feels mechanical. Bounce feels unserious. The only linear motion is continuous loops (shimmer, rotation). The only overshoot is the Emphasis curve's restrained 2-3% on stat count-ups. _(Violates: Motion Principle 2; Restraint as Default)_

### Not: Monochromatic Teal

Scaling a single teal hue across all lightness values. The logo's hue rotation from teal to sage is its most distinctive structural property. Lighter values must shift warmer. A monochromatic ramp contradicts the brand's analogous logic. _(Violates: The Hue Shift Is the Brand)_

### Not: Separate Visual Systems per Audience

Different typefaces, palettes, illustration styles, or component libraries for "clinical" vs. "patient" contexts. The brand brief is explicit: "fully credible AND fully warm," not two compromised systems. One vocabulary, two registers. _(Violates: One System/Two Registers)_

### Not: Decorative Motion

Bounce, spring, overshoot, or playful animation on standard UI interactions. Cascading reveals, parallax scrolling, animated illustrations. The longest standard UI animation is 400ms. If something is moving and isn't answering "where did that go?" or "did my action register?" — it should stop. _(Violates: Motion Principle 1; Clinical Brevity)_

### Not: Photography as the Emotional Lead

Leading a surface with photographic imagery where illustration should govern the emotional register. Photography proves; illustration expresses. A website hero built around a photograph rather than an illustration shifts the brand from "designed system" to "documented operations." _(Violates: Evidence and Expression Stay in Their Lanes)_

### Not: Functional Colors in Illustrations

Using error-base red, warning-base gold, success-base green, or info-base blue in drawn scenes. These carry interactive semantics that must be preserved. A chili pepper in error-red or a sky in info-blue introduces unconscious semantic confusion. _(Violates: Tier 1 constraint)_

### Not: Illustration as Wallpaper

Illustrated elements placed for "visual interest" without compositional relationship to content. Every illustration earns its place by connecting to specific content: an empty state illustration relates to what the state is for; a data illustration connects a statistic to its human outcome. Illustrations without content relationships violate infrastructure humility. _(Violates: Restraint as Default)_
