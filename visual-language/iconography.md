# Cena Health — Iconography System

_Design specification for the Cena Health icon system. Every decision traces to the logo mark's visual language, the established token systems, and the brand brief's design principles._

---

## 1. Style Definition

### Visual Character

Cena Health icons are drawn, not constructed. Their geometry descends from the logo mark's concentric petal form: organic curves rendered with intentional control, variable stroke weight that carries hierarchy, and rounded terminals that echo the humanist typography system. The icons share the logo mark's central quality — they feel hand-placed rather than machine-generated, but their consistency reveals a governing logic beneath the organic surface.

**Specific visual qualities:**

- **Curvilinear geometry.** Straight lines are used only when they serve legibility (e.g., the vertical stroke of a clipboard, the horizontal bar of a menu icon). Every other path curves. Corners are always radiused. The icons inhabit the same formal world as the logo's petal lobes — no sharp angles, no mechanical precision.
- **Variable stroke weight within a single icon.** Primary structural paths use heavier weight; secondary detail paths use lighter weight. This mirrors the logo's ring structure, where outer rings are thicker than inner rings, and the typography system's weight-carries-authority principle. The weight difference is subtle — a 1.5:1 ratio between primary and secondary strokes — not cartoonish.
- **Organic imperfection, controlled.** Paths are clean vector, but their curves favor the slightly irregular quality of hand-drawn arcs over mathematically perfect Bezier segments. This means: generous curves rather than precise quarter-circles, stroke endings that taper subtly rather than cutting flat, junction points where paths meet with a soft overlap rather than a hard intersection. The logo mark exhibits this — its petal forms are not perfect ellipses but organic shapes that approximate ellipses.
- **Open forms.** Where possible, icon shapes remain open — paths that suggest enclosure without closing it. An envelope icon has a flap that lifts, not a sealed rectangle. A heart shape is described by two strokes that meet at the bottom point but remain separate paths. This openness is the icon language's expression of the brand's "lightness implies openness" principle from the logo analysis.

### What this system is not

- Not outline-only or filled-only. The system uses predominantly stroke-based forms with selective fills for emphasis (see Color Rules, §6).
- Not geometric. No circles-and-squares construction visible in the final form. The underlying grid is geometric (see §2), but the rendered paths soften it.
- Not illustrative. Icons are not tiny illustrations. They use the illustration system's line quality principles but at a level of abstraction that prioritizes instant recognition over narrative warmth.
- Not duotone, gradient, or multi-layered. Each icon is a single visual unit — one or two colors at most. The logo mark's three-color concentric rings are a mark-specific treatment, not an icon pattern.

---

## 2. Grid and Construction

### Construction Grid

Icons are built on a **24 x 24 unit grid** with a **20 x 20 unit live area** centered within it. The 2-unit margin on each side provides optical breathing room when icons sit adjacent to text or other icons.

| Property | Value | Rationale |
|----------|-------|-----------|
| Canvas | 24 x 24 units | Matches `space-6` (24px) — the line-height anchor of the spacing system. Icons at their default size occupy exactly one line-height unit. |
| Live area | 20 x 20 units, centered | 2-unit margin ensures icons never touch their bounding box edge, preventing optical crowding in tight UI layouts. |
| Key shapes | Circle (20u diameter), square (20u), horizontal rectangle (20 x 16u), vertical rectangle (16 x 20u) | Four base shapes that guide the outer boundary of icon silhouettes. Icons should touch at least two edges of their key shape. |
| Stroke grid | Strokes align to half-unit increments | Allows 0.5u precision for detailed paths while keeping primary structure on whole units. |

### Optical Corrections

- **Circles and rounded forms extend 0.5u beyond the live area** on each relevant side. A circular icon at 20u diameter optically appears smaller than a square icon at 20u; the extension compensates.
- **Pointed vertices (arrows, chevrons) extend 1u beyond the live area** at their tip. Pointed shapes have less visual mass at their extremes and need the extra reach to feel equivalent in size.
- **Diagonal strokes are 0.25u thicker than horizontal/vertical strokes** at the same nominal weight. Diagonals appear thinner due to anti-aliasing and the eye's orientation bias.
- **Interior detail is simplified at sizes below `space-5` (20px).** Below this threshold, secondary strokes and fine detail are removed, leaving only the primary structural paths. The icon must remain legible at `space-4` (16px) with primary strokes only.

---

## 3. Stroke Specification

### Weight

| Role | Weight (at 24u canvas) | Web equivalent at 24px | Notes |
|------|----------------------|----------------------|-------|
| Primary stroke | 2u | 2px | Structural paths: outlines, primary shapes, the elements that define what the icon is. |
| Secondary stroke | 1.5u | 1.5px | Detail paths: interior lines, secondary shapes, elements that add specificity. |
| Accent stroke | 1u | 1px | Fine detail: dots rendered as short strokes, subtle interior texture. Used sparingly. |

**Rationale:** The 2px primary stroke at 24px icon size produces a visual weight that harmonizes with Source Sans 3 at `base` (16px, Regular 400). Body text stroke width at that size is approximately 1.5–2px; the icon's primary stroke sits at the upper end of that range, ensuring icons carry enough presence to anchor alongside text without overpowering it. The logo mark's outer ring at its typical rendered size has approximately 3–4px apparent width — the icon primary stroke is deliberately lighter than the mark, maintaining the hierarchy: mark > icon > text.

### Cap Style

**Round caps exclusively.** No butt caps, no square caps. The illustration system specifies "round line caps for softness" (illustration-system.md, Line Quality), and the logo analysis identifies rounded terminals as a brand principle. Round caps on icon strokes create the same soft, approachable terminal quality.

### Join Style

**Round joins exclusively.** Where two paths meet at an angle, the join is rounded, never mitered or beveled. This eliminates sharp internal corners and maintains the organic quality even in structural shapes (the corner of a rectangle, the junction of a cross).

### Corner Radius

**2u radius on all corners** at the 24u canvas size, scaling proportionally. This produces a corner softness that is visible but not bubble-like — the shape reads as a rounded rectangle, not a squircle. The 2u radius at 24u canvas produces an 8.3% corner ratio, which matches the optical corner quality of the logo mark's inner ring structure.

---

## 4. Named Icon Categories

### 4.1 Navigation

**Visual approach:** The most restrained icons in the system. Navigation icons are structural affordances — they tell the user where they can go, not what they will find. Minimal detail, maximum legibility. Primary strokes only; no secondary detail at standard sizes.

| Icon | Description |
|------|-------------|
| `nav-home` | House silhouette with open doorway. Rounded roofline, not peaked. |
| `nav-menu` | Three horizontal lines, variable weight (top heaviest, bottom lightest — echoing the brand's weight-hierarchy). |
| `nav-back` | Left-pointing chevron, single stroke. |
| `nav-forward` | Right-pointing chevron, single stroke. |
| `nav-close` | Two crossing diagonal strokes, round caps creating soft endpoints. |
| `nav-search` | Circle with diagonal handle. Handle extends from lower-right. |
| `nav-settings` | Simplified gear — circular body with four rounded nubs at cardinal points. Not a six-tooth cog. |
| `nav-profile` | Head-and-shoulders silhouette. Rounded, organic head form above a curved shoulder line. |
| `nav-more` | Three horizontal dots (ellipsis), evenly spaced. |
| `nav-expand` | Upward chevron (for accordions) or outward-pointing diagonal arrows (for fullscreen). |

### 4.2 Action

**Visual approach:** Action icons carry slightly more visual weight than navigation icons — they represent things the user can do, not places they can go. Primary and secondary strokes are both present. The visual emphasis is on the verb: the part of the icon that communicates the action is rendered in primary weight, while the object being acted upon uses secondary weight.

| Icon | Description |
|------|-------------|
| `action-add` | Plus sign with round caps. Centered in live area. |
| `action-edit` | Pencil at 45 degrees, tip pointing lower-left. The pencil body uses primary stroke; the edit line beneath uses secondary. |
| `action-delete` | Trash can with lid slightly ajar (open form). Vertical body lines use secondary stroke. |
| `action-save` | Downward arrow into a horizontal tray. Arrow in primary weight, tray in secondary. |
| `action-share` | Three dots connected by two angled lines, forming the share graph. Dots are filled circles at accent stroke weight. |
| `action-filter` | Funnel shape, wide at top narrowing to bottom. Open at the narrow end. |
| `action-sort` | Two vertical arrows (up and down) side by side. |
| `action-upload` | Upward arrow from a horizontal base. Mirrors save icon, reversed. |
| `action-download` | Downward arrow to a horizontal base with a subtle surface line beneath. |
| `action-print` | Simplified printer: rounded rectangle body with paper emerging from top. |

### 4.3 Status

**Visual approach:** Status icons communicate state, not action. They use color as a primary differentiator (see §6) and simple, universally recognizable shapes. Minimal stroke complexity — these must be legible at `space-4` (16px) with color as the only distinguishing signal between states.

| Icon | Description |
|------|-------------|
| `status-success` | Checkmark, single stroke with round caps. Confident angle, not tentative. |
| `status-error` | X mark, two crossing strokes. Same geometry as `nav-close` but distinguished by color (error-base). |
| `status-warning` | Triangle outline with centered exclamation stroke. Triangle has rounded vertices. |
| `status-info` | Circle outline with centered lowercase "i" (dot and stroke). |
| `status-pending` | Clock face: circle with two hands meeting at center. Hands at 10:10 position. |
| `status-active` | Filled circle, small (12u diameter within 24u canvas). A status dot. |
| `status-inactive` | Open circle, same size as active. Stroke-only, no fill. |
| `status-locked` | Padlock with closed shackle. Rounded rectangular body, curved shackle. |
| `status-complete` | Circle with checkmark inside. Circle in secondary weight, checkmark in primary. |
| `status-new` | Starburst: small circle with four short radiating strokes at diagonals. |

### 4.4 Medical / Clinical

**Visual approach:** These icons walk the brand's core tension: they must be recognizable as healthcare without being intimidating. No stethoscopes, no syringes, no hospital beds. Instead, they depict the tools of Cena Health's specific clinical domain — nutrition-based care coordination, platform features, care plans. Organic forms dominate. Where a medical icon might traditionally be angular (clipboard, chart), this system rounds it.

| Icon | Description |
|------|-------------|
| `clinical-care-plan` | Clipboard with rounded top edge and three horizontal lines of decreasing length (content suggestion). No text. |
| `clinical-vitals` | Heart shape (two-stroke open form) with a simplified pulse line extending from its right side. |
| `clinical-assessment` | Rounded rectangle with a checkmark inside — the completed form. |
| `clinical-provider` | Person silhouette with a small plus sign near the shoulder — healthcare context without a lab coat. |
| `clinical-referral` | Two overlapping person silhouettes with a curved arrow connecting them. |
| `clinical-medication` | Capsule shape: rounded rectangle with a vertical dividing line. Organic, not pharmaceutical-sterile. |
| `clinical-progress` | Upward-curving arc with three dots along it marking stages. Not a line chart — a path. |
| `clinical-integration` | Two interlocking rounded shapes (suggesting system connection). Derived from the logo mark's overlapping ring geometry. |
| `clinical-telehealth` | Device screen (rounded rectangle) with a person silhouette inside. |
| `clinical-record` | Folder shape with a rounded tab and a subtle medical cross (rounded arms) in the center. |

### 4.5 Food / Nutrition

**Visual approach:** The warmest icons in the system. These depict food and nutrition with the cultural specificity the brand demands — not generic "healthy eating" symbols. Forms are rounder, lines are softer, and secondary detail is used more freely than in other categories. These icons are allowed to approach the illustration system's warmth without crossing into actual illustration.

| Icon | Description |
|------|-------------|
| `food-meal` | Plate (circle) with fork and spoon on either side. Utensils have organic handle curves, not straight lines. |
| `food-recipe` | Open book shape with a simplified spoon or whisk resting across the pages. |
| `food-grocery` | Shopping bag with a leaf or produce form peeking from the top. Rounded bag body. |
| `food-cooking` | Pot with curved handle, steam rising in two organic wavy lines. |
| `food-nutrition-label` | Rounded rectangle with three horizontal lines inside and a small leaf at the upper corner. |
| `food-calendar` | Calendar grid (simplified: rounded rectangle with two nubs at top) with a circular plate icon in one cell. |
| `food-delivery` | Simplified delivery bag or box with a curved motion line suggesting transport. |
| `food-allergy` | Shield shape with an exclamation mark — protective, not alarming. Rounded shield edges. |
| `food-cultural` | Bowl shape with chopsticks or a tortilla form — the specific icon varies by context. This is a category token, not a single icon; the system should offer culturally specific variants. |
| `food-hydration` | Glass or cup with a water line inside. Rounded glass form, not a laboratory beaker. |

### 4.6 Communication

**Visual approach:** Communication icons connect people. They carry a social warmth: slightly more organic than navigation icons, with forms that suggest human interaction (speech bubbles with rounded tails, envelope flaps that lift). Secondary strokes add the warmth.

| Icon | Description |
|------|-------------|
| `comm-message` | Speech bubble with rounded corners and a soft tail at lower-left. |
| `comm-voice` | Microphone with rounded head and stand. For AVA voice assistant contexts. |
| `comm-call` | Phone handset in a slightly rotated position (active, not resting). Organic curves on the receiver. |
| `comm-email` | Envelope with open flap. The open flap suggests accessibility and invitation. |
| `comm-notification` | Bell with a rounded clapper. Simple, iconic. |
| `comm-video` | Play-button triangle inside a rounded rectangle (camera/screen). |
| `comm-chat` | Two overlapping speech bubbles, slightly offset. Primary bubble in primary weight, secondary in secondary weight. |
| `comm-translate` | Globe with two curved lines (longitude) and a speech bubble overlay. For bilingual/multilingual contexts. |
| `comm-feedback` | Speech bubble with three dots inside (typing indicator / response pending). |
| `comm-announce` | Megaphone shape, simplified and rounded. For system announcements and broadcasts. |

---

## 5. Sizing System

Icons scale to the spacing system's tokens. Each named size corresponds to a spacing step, ensuring icons are always proportional to their surrounding spatial rhythm.

| Token | Size | Spacing reference | Use |
|-------|------|-------------------|-----|
| `icon-xs` | 16px | `space-4` | Inline text icons, metadata indicators, compact status dots. Minimum legible size. Secondary strokes removed at this size. |
| `icon-sm` | 20px | `space-5` | Standard inline icons beside body text, form field icons, table row indicators. |
| `icon-md` | 24px | `space-6` | **Default.** Navigation icons, action icons, list item leading icons. Matches body text line height. |
| `icon-lg` | 32px | `space-8` | Card leading icons, section header icons, prominent action icons. |
| `icon-xl` | 40px | `space-10` | Feature callout icons, empty state leading icons, onboarding illustrations. Secondary detail fully present. |
| `icon-2xl` | 48px | `space-12` | Hero feature icons, large empty states, decorative leading elements at the threshold of illustration. |

### Scaling Rules

1. **Primary strokes scale proportionally.** A 2px stroke at 24px becomes 2.67px at 32px. Do not snap icon strokes to integer pixels — anti-aliased rendering at these sizes handles sub-pixel strokes cleanly.
2. **Secondary strokes are removed below `icon-sm` (20px).** At `icon-xs` (16px), only primary structural paths remain. This follows the illustration system's principle that fine detail disappears when scaled down.
3. **The construction grid scales with the icon.** At `icon-lg` (32px), the grid is 32 x 32 with a 26.7 x 26.7 live area. Optical corrections scale proportionally.
4. **Icons above `icon-2xl` are no longer icons.** At sizes larger than 48px, the visual language shifts from iconography to illustration. Use spot illustrations instead.

---

## 6. Color Rules

### Default State

| Context | Icon color | Rationale |
|---------|-----------|-----------|
| Within body text | `color-text-primary` (`teal-200`, `#0D322D`) | Icons match text color for visual integration. The chromatic dark reads as near-black. |
| Within secondary text | `color-text-secondary` (`warm-300`, `#5B544C`) | Icons match their surrounding text hierarchy. |
| Navigation chrome | `color-text-primary` | Navigation icons use the strongest text color for maximum scanability. |
| On dark backgrounds | `color-text-inverse` (`warm-950`, `#FBFAF8`) | Inverts to the warm off-white, not pure white. |

### Brand Color

| Context | Icon color | Rationale |
|---------|-----------|-----------|
| Active/selected navigation | `color-brand-primary` (`teal-500`, `#3A8478`) | Selected state uses brand teal to signal "you are here." |
| Primary action icon | `color-brand-primary` | Icons within primary buttons use the on-primary text color (`#FBFAF8`); standalone action icons in brand context use teal-500. |
| Feature callout (icon-xl, icon-2xl) | `color-brand-primary` or `color-brand-sage` (`sage-700`, `#81B983`) | Large decorative icons in feature sections may use brand teal or sage, following the color system's two-register logic: teal for clinical/institutional, sage for patient/nutrition. |

### Functional Color

| State | Icon color | Rationale |
|-------|-----------|-----------|
| Success | `success-base` (`#438C60`) | Checkmarks, completion indicators. Always paired with shape, not color alone. |
| Error | `error-base` (`#C13C3B`) | X marks, alert indicators. Always paired with shape, not color alone. |
| Warning | `warning-text` (`#754B00`) | Warning triangles. Uses text-weight color, not the brighter warning-base, for legibility at icon sizes. |
| Info | `info-base` (`#287AA3`) | Information circles. |

### Selective Fill

Icons are predominantly stroke-based, but selective fills are permitted in two cases:

1. **Status dots.** `status-active` uses a filled circle in `color-brand-primary` or the relevant functional color. This is the one icon that is always filled — its meaning depends on the fill/no-fill distinction (active vs. inactive).
2. **Emphasis on a sub-element.** Within a complex icon (e.g., `clinical-care-plan`), a single sub-element may receive a fill in `color-brand-primary` at 15% opacity to create a tinted highlight zone. This is used at `icon-lg` and above only — at smaller sizes, the fill would be indistinguishable from the stroke.

Fills never use gradient. Fills never use colors outside the semantic token system.

---

## 7. Animation

Icons animate in two contexts: state transitions and micro-interactions. All icon animations reference the motion token system.

### State Transitions

When an icon changes between states (e.g., `nav-menu` → `nav-close`, `status-inactive` → `status-active`), the transition uses:

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-fast` (120ms) |
| **Method** | Morph — paths transform from one shape to another, not crossfade. If morph is not technically feasible, use opacity crossfade at `duration-fast`. |

The morph transition reinforces the system's spatial continuity principle (motion Principle 4): the icon transforms rather than being replaced, communicating that the state changed, not that the icon changed.

### Micro-Interactions

| Interaction | Animation | Easing | Duration |
|------------|-----------|--------|----------|
| Hover on interactive icon | Color transition to `color-brand-primary` | Transition | `duration-fast` (120ms) |
| Click/tap on icon button | Scale to 0.9, then return to 1.0 | Transition | `duration-micro` (80ms) press, `duration-fast` (120ms) release |
| Loading/processing indicator | Rotation, continuous, 1000ms per revolution | Linear (continuous loop exception per motion §3.8) | 1000ms loop |
| Notification badge appear | Scale from 0.5 to 1.0 with Emphasis easing | Emphasis (`cubic-bezier(0.34, 1.3, 0.64, 1)`) | `duration-normal` (200ms) |
| Success checkmark | Stroke draw-on: path draws from start to finish | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) | `duration-normal` (200ms) |

### Reduced Motion

Under `prefers-reduced-motion: reduce`:
- All morphs become instant state swaps (0ms).
- Color transitions reduce to `duration-micro` (80ms).
- Scale animations are suppressed — press feedback uses color change only.
- Rotation-based loading indicators become a static icon with pulsing opacity (Transition easing, 1600ms cycle, opacity 0.6–1.0).
- Stroke draw-on effects are suppressed — checkmarks appear fully formed.

---

## 8. Icon-to-Illustration Boundary

The icon system and the illustration system share a visual ancestor — the logo mark's organic, variable-weight line language — but they serve different purposes and must remain distinct.

**Icons are:**
- Abstract. They represent categories and actions, not specific moments.
- Constrained to the construction grid. No organic variation in overall silhouette.
- Colored with semantic tokens. No illustration-only colors.
- Sized within the `icon-xs` to `icon-2xl` range (16–48px).

**Illustrations are:**
- Narrative. They depict specific people, places, foods, and moments.
- Free-form in composition. They use the spacing system for placement but not for internal geometry.
- Extended in color palette. They access illustration-only warm swatches that icons cannot use.
- Sized above 48px, typically 120px+ for spot illustrations and larger for scenes.

**The transition zone (48–120px)** is governed by context: if the visual appears in a UI chrome location (nav, card header, empty state icon area), it is an icon at `icon-2xl`. If it appears in a content or marketing location (feature hero, section illustration, onboarding moment), it is a spot illustration. Never place a 48px icon where an illustration is expected, or a 120px illustration where an icon grid demands consistency.
