# Cena Health — Motion & Interaction System

_Design token specification for motion, easing, duration, and interaction choreography. Every decision traces to the brand brief, logo analysis, and the established color, typography, and spacing systems._

---

## 0. Motion Principles

These govern every motion decision in the Cena Health system. They derive from specific brand requirements and the spatial, chromatic, and typographic systems already in place.

### Principle 1: Motion Serves Orientation, Not Decoration

Every animation must answer a question the user is already asking: Where did that go? What just changed? Is my action registered? Motion that exists solely to make the interface feel "alive" or "modern" violates the brand's infrastructure humility (brand brief §1, trait 4). Cena Health is scaffolding — its motion language confirms spatial relationships and acknowledges interaction, then gets out of the way. If removing an animation would leave the user disoriented, it belongs. If removing it would leave the user unaffected, it does not.

**Application:** Before specifying any animation, identify the orientation question it answers. If none exists, do not animate.

### Principle 2: Organic Deceleration

The logo's concentric petal form emanates outward from center — an expansion that implies arrival, not departure (logo analysis §3). Motion in this system favors deceleration: elements arrive quickly and settle slowly, like a leaf landing. Ease-out curves dominate. Linear motion is avoided because it feels mechanical and clinical in the wrong way — precise without warmth. Ease-in is reserved for exit, where elements gather speed as they leave, as if released. This creates an asymmetry between enter and exit that gives the system a directional character: entering is careful and present; leaving is swift and unburdened.

**Application:** Default all transitions to ease-out. Use ease-in only for elements leaving the viewport or being dismissed. Never use linear easing for user-facing motion.

### Principle 3: Clinical Brevity

Clinical staff operate under time pressure (brand brief §3, Audience 4). Motion must never make them wait. The longest animation in the system — a full page transition — is under 400ms. Most interactions resolve in 120–200ms. The brand's "direct" personality trait (brand brief §1, trait 5) applies to motion as it does to voice: no preambles, no flourishes, no multi-stage choreography where a single gesture will do. A dropdown opens. A modal appears. There is no overture.

**Application:** If a motion feels like it is performing, shorten it. If shortening it makes it invisible, question whether it was needed.

### Principle 4: Warmth Through Continuity, Not Exuberance

The brand requires warmth (brand brief §1, trait 2), but motion warmth in a healthcare context cannot come from bounce, overshoot, or playfulness — these read as unserious in a system that coordinates clinical nutrition for chronic conditions. Instead, warmth is expressed through continuity: elements do not pop into existence, they arrive from somewhere. Elements do not vanish, they depart to somewhere. This spatial continuity — the sense that the interface has a physical geography — is what makes motion feel human rather than programmatic.

**Application:** Prefer translate and opacity over scale for enter/exit. Elements should feel like they moved through space, not like they were instantiated. The spacing system's tokens define the distances: a card enters from `space-8` below; a dropdown grows from its trigger point; a toast slides in from the viewport edge.

### Principle 5: Respect the Spatial System

The spacing system defines rest states (spacing.md §7). Motion connects those rest states — it is the journey between two spatially valid positions. Motion distances use spacing tokens, not arbitrary pixel values. A modal does not slide in from "20px above" — it translates from `space-6` above its resting position. A toast does not enter from "off-screen right" — it enters from `space-10` beyond the viewport edge. This keeps motion spatially coherent with the layout it serves and ensures that density tiers do not produce motion artifacts (a 20px slide that feels proportional at default density would feel excessive at compact).

**Application:** All motion translation distances reference named spacing tokens. Density transitions do not animate — they are instantaneous (spacing.md §7).

### Principle 6: One Motion at a Time

Simultaneous animations competing for attention create cognitive noise. In a clinical context, cognitive noise is not just distracting — it is a barrier to task completion. When multiple elements need to change state, they either change together as a single visual unit (same timing, same easing) or they sequence with clear ordering. Staggered cascades are used only where they communicate meaningful hierarchy (e.g., list items loading in order), never for decorative ripple effects.

**Application:** If two animations would overlap, either synchronize them or suppress one. Default to fewer, more intentional motions over many concurrent ones.

---

## 1. Easing Curve Families

Each easing family defines a motion character — the felt quality of how an element accelerates and decelerates. The CSS cubic-bezier values are implementation references; the design intent is what governs usage.

### 1.1 Enter — Arriving with Composure

**Feel:** An element steps into its place — not thrown, not dropped, but placed with quiet confidence. Fast at the start (the element has purpose; it knows where it is going), then a long, gentle settle into position. The deceleration tail is where the warmth lives: the element doesn't snap to rest, it eases into belonging.

**CSS:** `cubic-bezier(0.16, 1, 0.3, 1)`

**When used:**
- Elements appearing in the layout for the first time (modals, toasts, drawers, dropdown menus)
- Content that loads after the initial page render (skeleton → content transition)
- New list items or cards added to a visible set

**When NOT used:**
- Hover state changes (too slow in the deceleration phase for micro-interactions)
- State changes within an already-visible element (color shifts, icon swaps)
- Density tier switches (these are instantaneous, per spacing.md §7)
- Exit animations (the Enter curve's slow settle feels reluctant in reverse — elements should leave decisively)

---

### 1.2 Exit — Departing Without Ceremony

**Feel:** An element gathers itself and leaves. A brief moment of stillness at the start (the element is still visible, still acknowledging its presence), then it accelerates away. The fast departure prevents exit animations from delaying the user's next action. Exits are selfless — they clear the stage for what comes next.

**CSS:** `cubic-bezier(0.5, 0, 0.75, 0)`

**When used:**
- Elements being dismissed (modal closing, toast auto-dismissing, dropdown collapsing)
- Content being removed from a list or replaced by new content
- Navigating away from a view (the departing view's exit)

**When NOT used:**
- Elements entering or appearing (the acceleration-away shape creates an unsettling "pulled in from distance" feeling in reverse)
- Hover-off transitions (too dramatic for releasing a hover state; use Transition instead)
- Anything the user did not initiate — automatic exit of error messages or loading states should use Transition, not Exit, because the element is completing a process, not being dismissed

---

### 1.3 Transition — Changing in Place

**Feel:** A state change within an element that is already present and staying present. Smooth, even, unremarkable — the motion equivalent of Source Sans 3 body text: it serves the content without calling attention to itself. Slight deceleration at the end prevents a mechanical stop, but the curve is close to linear through its middle range. This is the workhorse easing, used more than any other.

**CSS:** `cubic-bezier(0.25, 0.1, 0.25, 1)` (close to the CSS `ease` keyword but with a slightly softer entry)

**When used:**
- Color transitions (hover states, focus states, active states)
- Opacity changes within persistent elements
- Icon morphing or rotation
- Border color and width changes
- Typography emphasis changes (e.g., text color shifting to brand teal on interaction)

**When NOT used:**
- Spatial movement (translate, position change) — use Enter, Exit, or Spatial instead
- Large-scale visibility changes (appearing/disappearing elements) — use Enter/Exit
- Stat count-ups or data reveals — use Emphasis

---

### 1.4 Emphasis — Drawing the Eye with Purpose

**Feel:** A subtle, measured pulse of attention. Not a bounce, not a flash — a brief intensification that says "look here" and then settles. The curve starts and ends slow, with a pronounced mid-section acceleration that creates a felt moment of heightened presence. This is the motion equivalent of the stat display type style: the brand speaking in teal at display size, demanding that a number or outcome be registered.

**CSS:** `cubic-bezier(0.34, 1.3, 0.64, 1)`

The slight overshoot (control point at 1.3) is intentional but restrained — it produces approximately 2–3% overshoot in scale or position, which reads as a subtle breath rather than a bounce. This is the only curve in the system that exceeds 1.0 on the y-axis.

**When used:**
- Stat/metric count-up animations (the final value "lands" with a micro-settle)
- New notification badge appearing
- Validation success feedback (checkmark materializing)
- Attention-directing moments in onboarding or first-run experiences

**When NOT used:**
- Standard UI interactions (hover, focus, click) — too theatrical for routine actions
- Error states — errors use Transition easing with color change; emphasis on errors would feel celebratory
- Loading states — emphasis implies completion, not process
- Any context where the motion repeats more than once in a session — repeated emphasis becomes noise

---

### 1.5 Spatial — Moving Through the Layout

**Feel:** An element physically relocating within the interface — dragged, reordered, sliding between positions. The curve has a muscular quality: quick to respond to the initiating gesture, smooth through the middle, and precise at the landing. There is no overshoot — elements land exactly where they belong, reinforcing the "organic precision" principle. The deceleration is more pronounced than Transition but less dramatic than Enter, because the element is already known to the user — it is being repositioned, not introduced.

**CSS:** `cubic-bezier(0.22, 0.68, 0, 1)`

**When used:**
- Drag-and-drop reordering
- Carousel or slider movement
- Page/view slide transitions
- Sidebar open/close (horizontal translate)
- Accordion expand/collapse (vertical translate)
- Any element changing its x or y position within the existing layout

**When NOT used:**
- Elements entering from outside the viewport — use Enter
- Elements exiting to outside the viewport — use Exit
- Scale changes — use Transition or Emphasis depending on intent
- Opacity-only changes — use Transition

---

## 2. Duration Scale

Duration tokens define how long animations last. The scale is calibrated to clinical brevity (Principle 3) — the upper bound is where it is because healthcare professionals should never wait for an interface to finish moving.

### 2.1 Named Duration Steps

| Token | Value | Feel | Primary Use |
|-------|-------|------|-------------|
| `duration-instant` | 0ms | Immediate. No perceptible motion. | Density tier switches, state resets, programmatic repositioning. |
| `duration-micro` | 80ms | A flicker of acknowledgment. | Button press feedback, checkbox toggle, focus ring appearance. |
| `duration-fast` | 120ms | Quick and confident. | Hover color transitions, small icon rotations, tooltip fade-in, border color changes. |
| `duration-normal` | 200ms | The system's default rhythm. | Dropdown open/close, form field focus, card hover elevation, toast enter, small component transitions. |
| `duration-moderate` | 300ms | Deliberate and present. | Modal enter/exit, sidebar slide, accordion expand, content fade-in after load. |
| `duration-slow` | 400ms | The longest standard motion. | Full page/view transitions, large panel reveals, hero content entrance. |
| `duration-stat` | 800ms | Reserved for data storytelling. | Stat/metric count-up, chart reveal, progress bar fill. Not a UI transition — a narrative moment. |

### 2.2 Rationale for the Range

**Why 80ms is the floor (excluding instant):** Below 80ms, motion is perceived as a state flicker rather than a transition — the eye registers change but not movement. At 80ms, a button press produces a felt response: the color darkens, the surface shifts, and the user's motor action receives confirmation. For clinical staff performing rapid sequences of clicks (e.g., reviewing a queue of care plans), this 80ms feedback loop keeps the interface responsive without creating perceptual bottlenecks.

**Why 400ms is the ceiling for standard UI:** Research on perceived interface latency places the "instant" threshold at approximately 100ms and the "responsive" threshold at approximately 300ms. At 400ms, the system is at the outer edge of "fast response." Beyond this, users begin to perceive waiting. Clinical staff in high-throughput workflows (brand brief §3, Audience 4) would experience any standard transition over 400ms as an impediment. The 400ms ceiling applies to all UI transitions that gate user progress — the user cannot act on the destination content until the transition completes.

**Why `duration-stat` exists at 800ms:** Stat count-ups and chart reveals are not gating transitions — the user is watching, not waiting. These are narrative moments in investor decks, dashboards, and impact reports where the brand "leads with business fundamentals, metrics first" (brand brief §3, Audience 2). The 800ms count-up creates a sense of the number building, earning its final value. This duration is never used for UI transitions that gate interaction.

### 2.3 Duration and Distance Relationship

Longer translations require longer durations. A toast entering from `space-10` beyond the viewport edge travels farther than a dropdown opening from zero height, and should take correspondingly longer. The following guidelines calibrate duration to motion distance:

| Translation distance | Suggested duration | Example |
|---------------------|--------------------|---------|
| 0–`space-2` (0–8px) | `duration-micro` to `duration-fast` | Focus ring, button press, checkbox |
| `space-2`–`space-6` (8–24px) | `duration-fast` to `duration-normal` | Dropdown, tooltip, small elevation change |
| `space-6`–`space-12` (24–48px) | `duration-normal` to `duration-moderate` | Modal enter, sidebar slide, accordion |
| `space-12`+ (48px+) | `duration-moderate` to `duration-slow` | Page transition, full-panel reveal, hero entrance |

These are guidelines, not rules. The easing curve's character matters more than raw duration — a 200ms Enter curve with aggressive deceleration feels faster than a 200ms linear transition because the element reaches 80% of its final position within the first 60ms.

---

## 3. Motion Patterns

Each pattern specifies the full motion behavior for a specific interaction. All values reference tokens defined above. Property animations are listed in the order they should be declared (for clarity, not technical requirement).

### 3.1 Page / View Transition

**What the user sees:** The current view exits to the left (or fades) while the new view enters from the right (or fades in). In back-navigation, the direction reverses. The transition communicates spatial geography — the user is moving through a sequence, not teleporting.

| Property | Exiting view | Entering view |
|----------|-------------|---------------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-slow` (400ms) | `duration-slow` (400ms) |
| **Transform** | `translateX(0)` → `translateX(-space-12)` | `translateX(space-12)` → `translateX(0)` |
| **Opacity** | 1 → 0.4 | 0.4 → 1 |

**Sequencing:** Exiting and entering views animate simultaneously. The outgoing view's opacity reduction and the incoming view's opacity increase create a brief crossfade in the middle of the transition where both are partially visible. This overlapping presence prevents a black flash and maintains spatial continuity.

**Why translate rather than scale or opacity-only:** The spacing system defines a physical layout; page transitions should respect that physicality. A slide reinforces the mental model that views are adjacent in space, which supports orientation when navigating complex clinical workflows. Pure fade (opacity-only) would work but sacrifices the spatial metaphor.

---

### 3.2 Modal Enter / Exit

**Enter — what the user sees:** The modal fades into visibility and rises subtly from below, arriving at center. The overlay darkens behind it. The modal's entrance is composed, not dramatic — it steps forward like someone approaching a conversation.

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-moderate` (300ms) |
| **Transform** | `translateY(space-6)` → `translateY(0)` |
| **Opacity** | 0 → 1 |
| **Overlay opacity** | 0 → 60% (matching `color-surface-overlay` at teal-50/60%) |

**Exit — what the user sees:** The modal fades and drops slightly, releasing the space it occupied. The overlay clears.

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform** | `translateY(0)` → `translateY(space-4)` |
| **Opacity** | 1 → 0 |
| **Overlay opacity** | 60% → 0 |

**Why exit is faster than enter:** The user initiated the dismissal — they have already moved on mentally. A slow exit forces them to watch something they are done with. The 200ms exit clears the stage 100ms sooner than the 300ms entry, which is felt as responsiveness to the user's intent.

**Why the enter distance (`space-6`, 24px) is larger than the exit distance (`space-4`, 16px):** Enter needs enough travel to be perceived as directional movement. Exit can be shorter because the opacity fade carries more of the perceptual work — the modal is already dimming by the time the translate registers.

---

### 3.3 Dropdown / Menu Open / Close

**Open — what the user sees:** The menu reveals from its trigger point, growing downward. Content fades in as the container expands.

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform origin** | Top edge, aligned to trigger |
| **Scale** | `scaleY(0.9)` → `scaleY(1)` |
| **Opacity** | 0 → 1 |
| **Shadow** | Level 0 → Level 3 (low shadow, per spacing.md §5.2) |

**Close:**

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-fast` (120ms) |
| **Scale** | `scaleY(1)` → `scaleY(0.95)` |
| **Opacity** | 1 → 0 |

**Why close is faster than open (120ms vs 200ms):** Dropdown close is almost always a result of the user making a selection or clicking away. Either way, they have committed to a next action. The dropdown should clear instantly enough to not register as a separate event. The 120ms close is just above the perception threshold — enough to prevent a jarring pop but fast enough to feel like a direct result of the click.

**Why scaleY rather than height animation:** Height animation from 0 triggers layout reflow on every frame, which degrades performance on complex clinical dashboards with many potential dropdowns. ScaleY from 0.9 (not 0) avoids the uncanny "growing from nothing" effect while keeping the transform on the GPU compositing layer.

---

### 3.4 Card Hover State

**What the user sees:** The card subtly lifts — a warmth shift in the surface and the appearance of a soft shadow beneath. The card is saying "I am interactive, you can engage with me."

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-fast` (120ms) |
| **Shadow** | Level 1 (none or border-only) → Level 3 (low warm shadow) |
| **Border color** | `color-border-default` → `color-border-brand` (`#52A395`) |
| **Transform** | `translateY(0)` → `translateY(-space-0.5)` (lift of 2px) |

**On hover-off:** Same properties reverse with identical easing and duration. The return is symmetric — hovering on and off should feel equally smooth, with no perceptual difference in speed.

**Why the lift is only `space-0.5` (2px):** The brand's "infrastructure humility" principle means interactive affordances are understated. A 2px lift with a warm shadow is enough to communicate clickability without making the card feel like it is performing. Larger lifts (4px+) create a material-design "floating card" aesthetic that contradicts the organic, paper-like surface quality defined in the spacing system (spacing.md §5.1).

**Why border color changes with the shadow:** On `surface-page`, Level 1 cards use `color-border-default` (warm gray). On hover, the border shifting to `color-border-brand` (teal) provides a color signal that reinforces the shadow's elevation signal. Two cues (border + shadow) ensure the hover is perceptible even in reduced-motion contexts where the translateY may be suppressed.

---

### 3.5 Button Press State

**What the user sees:** A quick, confident darkening — the button's background shifts to its active color and the surface compresses very slightly. This is the smallest, fastest motion in the system: a tactile acknowledgment that the press registered.

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-micro` (80ms) |
| **Background color** | `color-primary` → `color-primary-active` (teal-500 → teal-300) |
| **Transform** | `scale(1)` → `scale(0.98)` |

**On release:** The scale returns to 1 over `duration-fast` (120ms) with the same Transition easing. The release is slightly slower than the press — the press is reflexive (immediate feedback), but the release is the system confirming the action is underway.

**Why 0.98 scale and not translateY:** A downward translate on press would imply the button is sinking into the surface, which suggests depth and material — concepts the spacing system deliberately minimizes (spacing.md §5.1, minimal shadow usage). A 2% scale reduction feels like compression: the button absorbs the press force and springs back. This is a subtle physical metaphor that reads as responsive without implying z-axis movement.

---

### 3.6 Toast / Notification Enter / Exit

**Enter — what the user sees:** The toast slides in from the right edge of the viewport, arriving at its resting position with a gentle deceleration. It carries important but non-blocking information: a success confirmation, a status update, a system message.

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform** | `translateX(space-10)` → `translateX(0)` |
| **Opacity** | 0.6 → 1 |
| **Shadow** | Level 5 (high warm shadow, per spacing.md §5.2) |

**Exit (auto-dismiss) — what the user sees:** The toast fades and slides out to the right, clearing the viewport.

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform** | `translateX(0)` → `translateX(space-10)` |
| **Opacity** | 1 → 0 |

**Exit (user-dismiss) — what the user sees:** Faster than auto-dismiss. The user swiped or clicked to close — the toast should feel flicked away.

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-fast` (120ms) |
| **Transform** | `translateX(0)` → `translateX(space-10)` |
| **Opacity** | 1 → 0 |

**Why enter opacity starts at 0.6, not 0:** Starting partially visible prevents the toast from appearing to materialize from nothing at the viewport edge. The slight pre-visibility means the user's peripheral vision catches the motion earlier, making the entrance feel less abrupt.

**Why Level 5 shadow:** Toasts float above all page content. The high warm shadow communicates their temporary, overlay nature and distinguishes them from inline content. Per spacing.md §5.4, shadows imply dismissibility — toasts are always dismissible.

---

### 3.7 Form Field Focus / Validation Feedback

**Focus — what the user sees:** The field's border transitions from `color-border-default` to `color-border-focus` (teal-500), and a subtle teal glow appears around the field. The transition is calm and encouraging — "we are ready for your input."

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-fast` (120ms) |
| **Border color** | `color-border-default` → `color-border-focus` |
| **Box shadow** | None → `0 0 0 space-0.5 oklch(56.3% 0.0762 181.3 / 15%)` (teal-500 at 15% opacity, `space-0.5` spread) |

**Blur (focus loss):** Border and shadow return to default with the same timing.

**Validation error — what the user sees:** The border shifts to error-border and a brief, single color pulse draws the eye to the field that needs attention.

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Border color** | Current → `error-border` (`#D87972`) |
| **Background color** | Current → `error-bg` (`#FCE5E3`) at 50% opacity, then back to transparent over an additional `duration-normal` |

**Why the error background fades back to transparent:** A persistent error background tint is handled by the component's static error state (CSS class, not animation). The animated pulse — a brief flash of error-bg that recedes — serves as the attention-directing moment. It says "look here, something changed." The persistent state then holds the visual. This separation between the motion (attention) and the state (information) prevents the animation from interfering with form readability.

**Validation success — what the user sees:** A brief green confirmation. Checkmark icon fades in with slight scale-up.

| Property | Value |
|----------|-------|
| **Easing** | Emphasis (`cubic-bezier(0.34, 1.3, 0.64, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Icon opacity** | 0 → 1 |
| **Icon scale** | 0.7 → 1.0 (the Emphasis curve's micro-overshoot produces a very subtle scale bounce to ~1.02 before settling at 1.0) |

---

### 3.8 Data Loading / Skeleton State

**Skeleton shimmer — what the user sees:** Placeholder shapes occupy the layout positions of content-to-come. A warm, luminous gradient sweeps left-to-right across the skeleton elements in a slow, continuous cycle. The shimmer communicates "content is arriving" — an active process, not a dead end.

| Property | Value |
|----------|-------|
| **Easing** | Linear (exception to Principle 2 — continuous loops use linear to avoid rhythmic pulsing) |
| **Duration** | 1600ms per cycle, continuous loop |
| **Gradient** | `surface-primary` (`#F3F1EE`) → `surface-secondary` (`#E7E4DF`) → `surface-primary` |
| **Direction** | Left to right (follows LTR reading direction) |

**Skeleton → Content transition — what the user sees:** The skeleton fades out as actual content fades in. The content does not slide or translate — it occupies the exact spatial position the skeleton held, reinforcing that the skeleton was a truthful placeholder.

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-moderate` (300ms) |
| **Skeleton opacity** | 1 → 0 |
| **Content opacity** | 0 → 1 |
| **Stagger (if multiple elements)** | 40ms per item, maximum 5 items staggered (200ms total stagger). Items beyond 5 appear simultaneously with item 5. |

**Why the gradient uses surface tokens, not brand colors:** The skeleton occupies the content layer — it is infrastructure, not brand expression. Using warm neutral surface colors (not teal or sage) keeps the loading state humble and prevents the shimmer from competing with the actual content when it arrives. This follows the brand's infrastructure humility: the scaffolding is visible but not charismatic.

**Why the stagger caps at 5 items:** Staggered reveal communicates sequential data loading — each item arriving. Beyond 5, the stagger becomes decorative rather than informative. Staggering 20 list items over 800ms (20 × 40ms) would create an excessive cascade that violates Principle 3 (clinical brevity). The cap ensures that content-heavy views (clinical dashboards with many rows) resolve quickly.

---

### 3.9 Slide Transition (Deck Surface)

**What the presenter sees:** The current slide exits and the next slide enters. The transition is clean and rapid — it should never upstage the content. Presentation motion exists to orient the audience to the change, not to entertain them.

**Forward navigation:**

| Property | Exiting slide | Entering slide |
|----------|--------------|----------------|
| **Easing** | Exit | Enter |
| **Duration** | `duration-moderate` (300ms) | `duration-moderate` (300ms) |
| **Opacity** | 1 → 0 | 0 → 1 |
| **Transform** | `translateX(0)` → `translateX(-space-8)` | `translateX(space-8)` → `translateX(0)` |

**Backward navigation:** Reverse the translateX direction.

**Section break transition:** When transitioning between major sections (signaled by a section divider slide or a change in slide background tint), use a longer crossfade without translate:

| Property | Value |
|----------|-------|
| **Easing** | Transition |
| **Duration** | `duration-slow` (400ms) |
| **Exiting opacity** | 1 → 0 |
| **Entering opacity** | 0 → 1 |

**Why slide transitions are simpler than page transitions:** Slide decks are presenter-controlled, not user-navigated. The audience does not need spatial orientation cues as strongly because the presenter's voice provides continuity. A simple directional slide with crossfade is sufficient. Elaborate transitions (3D rotations, zoom, cube effects) are explicitly rejected — they belong to a presentation vocabulary incompatible with Cena Health's "credible before charismatic" positioning.

---

### 3.10 Stat / Metric Count-Up

**What the viewer sees:** A key metric — "30% reduction in hospitalizations," "25% fewer ER visits," "$17B in preventable costs" — counts up from zero (or from a baseline) to its final value. The number itself is rendered in the stat display type style (Lora, `display` size, `color-brand-primary`). The count-up is a narrative device: the number earns its value.

| Property | Value |
|----------|-------|
| **Easing** | Emphasis (`cubic-bezier(0.34, 1.3, 0.64, 1)`) |
| **Duration** | `duration-stat` (800ms) |
| **Interpolation** | Numeric, from 0 to final value. Integers count in whole numbers; percentages count by 1%; currency counts by significant digits. |
| **Final value behavior** | The Emphasis curve's overshoot means the displayed number will briefly exceed the final value by ~2–3% (e.g., "30%" might flash "31%" for ~30ms) before settling at the true value. This micro-overshoot creates a felt "landing" — the number arrives and sticks. |

**Triggering:** Count-up begins when the stat element enters the viewport (scroll-triggered on web, slide-enter on decks). It does not auto-play on page load if below the fold.

**Supporting label behavior:** The descriptive label below the stat (e.g., "reduction in hospitalizations") fades in over the last 300ms of the count-up, arriving as the number settles. This creates a two-beat rhythm: number builds → label contextualizes.

| Property | Value |
|----------|-------|
| **Easing** | Enter |
| **Duration** | `duration-moderate` (300ms) |
| **Delay** | 500ms (starts when count-up is ~62% complete) |
| **Opacity** | 0 → 1 |
| **Transform** | `translateY(space-2)` → `translateY(0)` |

**Why the number overshoots briefly:** Without the overshoot, a count-up that decelerates to its final value can feel like it is struggling to arrive — the last few increments slow to a crawl. The 2–3% overshoot from the Emphasis curve creates a definitive landing: the number passes through its target and snaps back, like a gauge needle settling. This is the only place in the system where overshoot is used, and it is the only place where it is warranted — the brand's core claim ("30% hospitalization reduction") deserves a moment of physical certainty in its presentation.

---

## 4. Reduced Motion

### 4.1 Approach

When the user has set `prefers-reduced-motion: reduce`, the system respects their preference by eliminating spatial movement and reducing or removing animated transitions. The guiding question is: does the motion carry information, or does it carry feeling? Informational motion (a count-up that reveals a value, a stagger that indicates loading order) is preserved in modified form. Feeling motion (a slide entrance that expresses composure, a hover lift that implies interactivity) is eliminated.

### 4.2 Specific Substitutions

| Pattern | Default behavior | Reduced motion behavior |
|---------|-----------------|------------------------|
| Page/view transition | Translate + crossfade, 400ms | Instant cut (0ms). No translate, no fade. |
| Modal enter | TranslateY + opacity, 300ms | Opacity only, `duration-fast` (120ms). No translate. |
| Modal exit | TranslateY + opacity, 200ms | Opacity only, `duration-micro` (80ms). |
| Dropdown open | ScaleY + opacity, 200ms | Opacity only, `duration-fast` (120ms). |
| Dropdown close | ScaleY + opacity, 120ms | Instant (0ms). |
| Card hover | Elevation + border + translateY | Border color change only. No shadow transition, no translate. Instant. |
| Button press | Scale + color, 80ms | Color change only, `duration-micro` (80ms). No scale. |
| Toast enter | TranslateX + opacity, 200ms | Opacity only, `duration-fast` (120ms). |
| Toast exit | TranslateX + opacity | Opacity only, `duration-micro` (80ms). |
| Form focus | Border + shadow, 120ms | Border color change only, instant. No shadow animation. |
| Validation error | Border + background pulse | Border color change only, instant. No background pulse. |
| Validation success | Icon scale + opacity | Icon opacity only, instant. No scale. |
| Skeleton shimmer | Continuous gradient sweep | Static `surface-secondary` background. No shimmer. |
| Skeleton → content | Crossfade with stagger | Instant swap. No fade, no stagger. |
| Slide transition | Translate + crossfade | Instant cut. |
| Stat count-up | Numeric interpolation, 800ms | Final value displayed immediately. No count-up. Label appears simultaneously. |

### 4.3 What Is Preserved

- **Color transitions** on focus and hover states are preserved because they communicate interactive state, not spatial position. These are reduced to instant or `duration-micro` but never eliminated — the user must still see feedback.
- **Opacity transitions** on modal and toast enter are preserved at reduced duration because appearing/disappearing elements need some visual continuity. An element materializing with zero transition in a complex layout can be disorienting even for users who prefer reduced motion. The `duration-fast` (120ms) opacity fade is the compromise.

### 4.4 What Is Eliminated

- All `transform` properties (translate, scale, rotate) are set to their end states immediately. Spatial movement is the primary motion that reduced-motion users are opting out of.
- All continuous animations (skeleton shimmer) are replaced with static states.
- All stagger/sequencing is collapsed to simultaneous.
- All overshoot (Emphasis curve) is eliminated — elements go directly to their final values.

### 4.5 Implementation Principle

Reduced motion is not "motion but slower." It is a different interaction model: state changes are binary (before/after) rather than continuous (transition). The brand's warmth in reduced-motion mode comes from the same sources it always does — warm surfaces, organic color, humanist typography — not from animation. The motion system is one expression of brand character, not the only one.

---

## 5. Compatibility Notes for the Visual Language Curator

### Motion within illustrations

Illustrated scenes in the Cena Health system are static — they do not animate. If an illustration appears alongside animated UI elements (e.g., an illustrated scene within a card that has a hover state), the illustration itself remains motionless. The card's elevation and border may transition on hover, but the illustration content does not scale, shift, or transform. Animated illustration would create a different visual language — one closer to app onboarding or consumer product marketing — that conflicts with the brand's "credible before charismatic" mandate.

### Motion-adjacent illustration concerns

If the Visual Language Curator designs illustrated loading states (e.g., a custom illustration instead of a skeleton screen), the motion system imposes one constraint: the illustration must not animate with movement-based transitions. A static illustrated loading state with a subtle opacity pulse (Transition easing, 1600ms cycle, opacity between 0.7 and 1.0) is acceptable. A bouncing, spinning, or waving illustrated character is not. The brand's loading state should communicate "your content is being prepared" — not "we are entertaining you while you wait."

### The icon mark's concentric rings

The logo's concentric ring structure might invite animation — rings pulsing outward, rotating, or assembling. This is explicitly outside the motion system's scope. Logo animation, if ever needed, is a brand moment that requires dedicated creative direction, not a token-level specification. The motion system governs interface interactions, not brand identity animation. If a logo animation is requested for a loading screen or hero moment, it should be designed as a one-off motion piece, not assembled from motion tokens.

### Stat display as a compositional element

The stat count-up (§3.10) is the motion system's most visible intersection with the Visual Language Curator's work. In infographics, impact summaries, and illustrated data compositions, the stat display type style (Lora, `display` size, `color-brand-primary`) will often sit alongside illustrated elements. The count-up animation should be the only moving element in these compositions — the illustrated surroundings remain static while the number builds. This creates a figure/ground relationship between the animated data (the foreground claim) and the illustrated context (the supporting scene), mirroring the brand's hierarchy: metrics first, narrative second.

### Color transitions and illustration adjacency

When a card containing an illustration transitions its border color on hover (from `color-border-default` to `color-border-brand`), the teal border will momentarily draw the eye to the card's edge rather than its illustrated content. This is intentional — the border transition signals interactivity. However, the Visual Language Curator should ensure that illustrations within interactive cards do not have teal-dominant edges that would blur the distinction between illustration and interactive border during the transition. Leave a margin of warm neutral space between illustration content and card edges.

---

## Appendix A: Quick Reference — Easing Curves

| Family | CSS cubic-bezier | Feel | Primary context |
|--------|-----------------|------|-----------------|
| Enter | `cubic-bezier(0.16, 1, 0.3, 1)` | Fast start, long gentle settle | Elements appearing |
| Exit | `cubic-bezier(0.5, 0, 0.75, 0)` | Brief hold, then accelerate away | Elements disappearing |
| Transition | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Smooth, even, slightly soft landing | In-place state changes |
| Emphasis | `cubic-bezier(0.34, 1.3, 0.64, 1)` | Subtle overshoot, measured pulse | Attention moments, stat landing |
| Spatial | `cubic-bezier(0.22, 0.68, 0, 1)` | Responsive start, precise landing | Layout position changes |

---

## Appendix B: Quick Reference — Duration Scale

| Token | Value | Use |
|-------|-------|-----|
| `duration-instant` | 0ms | Density switches, state resets |
| `duration-micro` | 80ms | Button press, checkbox, focus ring |
| `duration-fast` | 120ms | Hover color, tooltip, small transitions |
| `duration-normal` | 200ms | Dropdown, toast, card hover, form focus |
| `duration-moderate` | 300ms | Modal, sidebar, accordion, content fade |
| `duration-slow` | 400ms | Page transition, large panel reveal |
| `duration-stat` | 800ms | Stat count-up, chart reveal |

---

## Appendix C: Judgment Call Summary

Decisions that extend beyond or interpret the brief, flagged for review:

1. **Emphasis curve with overshoot** (§1.4): The only easing curve that exceeds 1.0 on the y-axis. The overshoot is restrained (~2–3%) and used only for stat count-ups and validation success. If stakeholders find any overshoot inappropriate for a healthcare context, the Emphasis curve can be replaced with a standard ease-out — the stat count-up will lose its physical "landing" but remain functional. The stat display is the brand's most confident visual gesture, and the micro-overshoot is calibrated to support that confidence without tipping into playfulness.

2. **800ms stat count-up duration** (§2.1): More than double the longest standard UI transition. This is a narrative moment, not a UI transition — it exists in investor decks and dashboards, not in care plan workflows. If data-heavy dashboards use count-ups on every visible metric, the cumulative animation time could feel excessive. Mitigation: count-ups should trigger only on initial viewport entry, not on subsequent visits to the same view. If 800ms feels slow in practice, 600ms with the same Emphasis curve preserves the character.

3. **Directional page transitions rather than crossfade-only** (§3.1): The translate-based page transition creates a spatial metaphor (pages are adjacent) that may not match the actual information architecture of every Cena Health surface. For non-linear navigation (e.g., jumping from a dashboard to a settings page), a pure crossfade (Transition easing, `duration-moderate`) may be more honest than a directional slide. The specification defaults to directional for sequential navigation and recommends crossfade for non-sequential — but this distinction requires implementation judgment.

4. **Toast entering from viewport edge rather than appearing in-place** (§3.6): Slide-in from the right is a spatial metaphor that implies toasts live in a notification layer beyond the viewport. An alternative is in-place appearance with opacity + scaleY, which would be more consistent with the modal pattern. The slide-in is chosen because toasts are fundamentally different from modals — they are uninvited, arriving on the system's initiative, not the user's. The slide-in telegraphs their arrival from peripheral vision, giving the user a moment to register the incoming information before it reaches its final position.

5. **Skeleton shimmer as the only continuous animation** (§3.8): All other animations are triggered and finite. The shimmer loops indefinitely, which could create visual fatigue on slow connections. If loading times regularly exceed 3 seconds, consider pausing the shimmer after 3 seconds and replacing it with a static `surface-secondary` fill plus a pulsing opacity on the skeleton shapes (Transition easing, 2000ms cycle, opacity 0.5 → 1.0). This reduces visual energy for extended waits while maintaining the "content is coming" signal.

6. **Reduced motion preserves opacity transitions** (§4.3): Some reduced-motion implementations eliminate all animation, including opacity. The decision to preserve short opacity fades (120ms) is a judgment that appearing/disappearing elements benefit from even minimal visual continuity. If user testing reveals that reduced-motion users prefer truly instant state changes, all opacity transitions can be set to 0ms without breaking the system.
