# Cena Health — Typographic System

_Design token specification for the Cena Health type system. Every decision traces to the brand brief, logo analysis, or color system._

---

## 0. Typographic Principles

These govern every typographic decision across the Cena Health system. They are derived from specific brand requirements, not general best practice.

### Principle 1: Legibility Is a Health Equity Requirement

Cena Health serves patients with limited health literacy and clinical staff scanning dense information under time pressure (brand brief §3, Audiences 3–4). Typeface selection, sizing, and spacing are not aesthetic preferences — they are accessibility obligations. Every typographic choice must pass a dual test: can a grandmother managing a chronic condition read this comfortably, and can a nurse scan this quickly in a clinical workflow?

**Application:** Minimum body text is 16px on screens. Line lengths never exceed 75 characters. Letter spacing is never tightened below the typeface's default at body sizes. Small text always uses `color-text-primary` or `color-text-secondary`, never `color-text-tertiary`.

### Principle 2: Weight Carries Authority

The logo establishes a clear hierarchy: "Cena" is heavy and dark, "health" is lighter and teal. Heavier elements anchor; lighter elements breathe (logo analysis §3). The type system extends this: bolder weights pair with darker colors and signal primary importance. Lighter weights pair with secondary colors and recede. A bold heading in a light color, or a thin caption in a dark color, would contradict the logo's structural logic.

**Application:** Display and heading text uses SemiBold or Bold with `color-text-primary`. Body text uses Regular with `color-text-primary`. Secondary and tertiary text uses Regular or Light with `color-text-secondary` or `color-text-tertiary`. Never pair heavy weight with light color or vice versa.

### Principle 3: Warmth Through Shape, Not Decoration

The brand requires "clinical infrastructure that feels human" (brand brief §1). Typography delivers warmth through humanist letterforms with open counters and subtly rounded terminals — not through decorative faces, ornamental features, or casual scripts. The typefaces must be warm in their bones, not in their accessories.

**Application:** All typefaces in the system are humanist in classification. Geometric and grotesque alternatives are rejected. The warmth is structural (letter proportions, curve quality, counter openness) and survives even in dense, data-heavy contexts where decoration would fail.

### Principle 4: One System, Two Registers

The brand serves hospital CFOs and grandmothers from the same typographic system — not from separate type treatments (brand brief §3, "Cross-audience tension"; color system Principle 6). B2B materials use the heading face at restrained sizes with the full weight range. Patient materials use the same faces at larger sizes with generous spacing. The faces are the same; the composition shifts.

**Application:** Never introduce a separate typeface for patient vs. institutional contexts. Adjust size, weight, spacing, and color — not the typeface itself. The system's two-register flexibility comes from its scale and weight range, not from switching fonts.

### Principle 5: Quiet Until Display

At body and UI sizes, typography should be invisible — the reader should absorb content, not notice the typeface. At display sizes (hero text, slide titles, stat callouts), the heading face's character becomes visible and expressive. The type system earns the right to be noticed only at scale.

**Application:** Body and UI text use Source Sans 3, which is designed to disappear into content. Display text uses Plus Jakarta Sans, whose rounded terminals and warm proportions become legible personality at 32px+. Below 24px, the two faces converge in character; above 32px, they diverge.

### Principle 6: Structure Serves Scanning

Healthcare audiences scan before they read — the CFO scans for ROI figures, the nurse scans for dosage, the patient scans for what to eat today. Typographic hierarchy must create clear entry points at every level, using size, weight, and color contrast together. A single differentiator (e.g., only size, or only weight) is insufficient.

**Application:** Every hierarchy step differs from its neighbors in at least two properties (size + weight, weight + color, size + spacing). Adjacent hierarchy levels are never distinguished by size alone.

---

## 1. Typeface Selection

### 1.1 Display / Heading — Plus Jakarta Sans

**Foundry:** Glyph Studio (Tokotype)
**Classification:** Humanist sans-serif
**License:** SIL Open Font License 1.1 — free for all uses, including commercial and embedding.
**Variable axes:** Weight (ExtraLight 200 – ExtraBold 800)

**Why Plus Jakarta Sans is specifically right for Cena Health:**

The logo wordmark establishes that Cena Health's typographic identity is a humanist sans-serif with generous counters, subtly rounded stroke endings, and a warm tonal character that avoids clinical coldness (logo analysis §5, "Compatible Typographic Moods"). Plus Jakarta Sans matches this description precisely — its stroke terminals carry a soft rounding that echoes the icon mark's organic curves without becoming overtly rounded or playful.

The brand must be "credible before charismatic" (brand brief §1). Plus Jakarta Sans is professional enough for an investor deck but warm enough that a patient-facing flyer does not feel institutional. Its moderate x-height keeps it from feeling either compressed (clinical) or bubbly (consumer wellness). The generous counter forms — particularly in `a`, `e`, `g`, and `s` — support readability at large display sizes and maintain clarity when viewed at a distance on slides.

The weight axis runs from ExtraLight to ExtraBold, providing the full range needed for the two-weight hierarchy the wordmark demands: Bold or SemiBold for primary headings (the "Cena" role — authoritative, anchored) and Regular or Light for supporting text (the "health" role — open, qualifying).

**What it expresses that the brand requires:**
- Organic precision: warm curves rendered with controlled consistency — matching the logo's "organic forms executed with intentional control" (brand brief §5, Principle 5)
- Accessible authority: clear enough for low-literacy readers at large sizes, professional enough for institutional audiences
- Modern without trend: it reads as contemporary infrastructure, not as a startup performing personality

**Alternatives considered and rejected:**

- **Nunito Sans:** More aggressively rounded terminals. At display sizes, it reads as consumer-friendly rather than clinically credible. The rounded terminals that are charming at 14px become cartoonish at 48px. Rejected: too soft for the "credible before charismatic" requirement.
- **DM Sans:** Geometric classification despite humanist influences. Counter forms are more closed, reducing readability for low-literacy audiences. The geometric structure contradicts the logo analysis's explicit preference for humanist over geometric (logo analysis §5). Rejected: geometry conflicts with organic brand language.
- **Figtree:** Warm and accessible, but limited weight range (300–700) cannot support the full two-weight hierarchy. The Light weight is not light enough to create the "health" register, and there is no ExtraBold for maximum emphasis. Rejected: insufficient range.
- **Commissioner:** Strong humanist sans with variable width axis. Technically excellent, but its character at display sizes reads more editorial/journalistic than healthcare infrastructure. The Slavic design heritage gives it a slightly different curve logic than the logo wordmark's Latin-centric forms. Rejected: tonal mismatch at display.
- **Outfit:** Clean and modern, but sits at the geometric-humanist boundary. Lacks the curve warmth that Plus Jakarta Sans carries in its stroke transitions. At display sizes it reads as tech rather than health. Rejected: too geometric-leaning.

---

### 1.2 Body / UI — Source Sans 3

**Foundry:** Paul D. Hunt, Adobe Originals
**Classification:** Humanist sans-serif
**License:** SIL Open Font License 1.1
**Variable axes:** Weight (ExtraLight 200 – Black 900), Italic

**Why Source Sans 3 is specifically right for Cena Health:**

Cena Health is a platform — its typography must handle care plans, clinical documentation, EHR integration notes, form labels, data tables, and patient-facing meal guidance (brand brief §3, Audiences 3–4). Source Sans 3 was designed explicitly for extended screen reading in interface contexts. It is not a typeface with a strong opinion; it is a typeface that serves the content it carries.

The critical requirement is letterform differentiation. In clinical contexts, confusing `I` / `l` / `1` or `O` / `0` in a patient ID, FHIR reference, or medication code is not a design inconvenience — it is a potential safety issue. Source Sans 3 maximizes differentiation between ambiguous glyphs: the capital `I` has serifs, the lowercase `l` has a tail, and the `1` has a distinct flag. The `0` is narrower than `O`. These are not ornamental choices — they are functional requirements for healthcare typography.

The open counter forms (particularly `a`, `c`, `e`, `s`) support readability for patients with limited health literacy. The generous x-height creates a large, legible letter body without requiring oversized point sizes, keeping clinical interfaces information-dense without sacrificing clarity.

Source Sans 3 includes a full italic family — essential for clinical documentation where emphasis, drug names, and Latin terminology require true italics rather than obliques.

**What it expresses that the brand requires:**
- Infrastructure humility: the typeface disappears into the content it serves, matching the brand's "scaffolding, not savior" positioning (brand brief §1, trait 4)
- Dual-audience readability: clear enough for low-literacy patients, efficient enough for time-pressed clinical staff
- Systematic reliability: behaves predictably across sizes, weights, and contexts — the typographic equivalent of "trustworthy infrastructure"

**Alternatives considered and rejected:**

- **Fira Sans (Mozilla):** Strong humanist sans, but its character at body sizes carries a faint editorial quality — it was designed for a magazine-like reading experience in Firefox OS. Cena Health needs platform neutrality, not content personality. Rejected: personality competes with heading face.
- **IBM Plex Sans:** Excellent for technology infrastructure brands, but its design heritage (IBM's corporate identity) carries an enterprise connotation that skews too institutional for patient-facing materials. Its terminals are more squared than rounded. Rejected: too corporate, insufficient warmth.
- **Noto Sans:** The most complete glyph coverage available (critical for multilingual support), but its design is optimized for universal legibility across all scripts rather than excellence in Latin text. In direct comparison with Source Sans 3 at body sizes, Noto's letterforms feel marginally more generic. Rejected: utility over character, though worth revisiting if significant non-Latin script support is needed.
- **Atkinson Hyperlegible:** Designed by the Braille Institute specifically for low-vision readability. Exceptional letterform differentiation. However, at body sizes in dense UI contexts, its exaggerated differentiation features (oversized counters, pronounced tails) create visual noise that slows scanning for high-literacy users. The brand must serve both audiences equally. Rejected: optimized for one audience at the expense of the other.

---

### 1.3 Monospace — Source Code Pro

**Foundry:** Paul D. Hunt, Adobe Originals
**Classification:** Monospaced sans-serif
**License:** SIL Open Font License 1.1
**Variable axes:** Weight (ExtraLight 200 – Black 900), Italic

**Why Source Code Pro is specifically right for Cena Health:**

Source Code Pro is the monospaced companion to Source Sans 3. It shares the same design philosophy, x-height proportions, and stroke logic, meaning monospaced text (clinical IDs, FHIR resource references, medication codes, tabular data) will feel native alongside body text rather than like a foreign element injected from a different design system.

In healthcare interfaces, monospaced text appears in specific, high-stakes contexts: patient identifiers, integration endpoints, clinical codes (ICD-10, CPT, NDC), and data tables where column alignment matters. The typeface must maximize character differentiation (same rationale as Source Sans 3 body) while maintaining visual consistency with the surrounding UI text.

**What it expresses that the brand requires:**
- Precision in data contexts: clinical codes and identifiers are rendered with unambiguous clarity
- Systematic cohesion: monospaced text does not break the visual rhythm established by Source Sans 3
- Infrastructure visibility: when monospace appears, it signals "this is system data" — reinforcing the brand's identity as clinical infrastructure

**Alternatives considered and rejected:**

- **JetBrains Mono:** Excellent monospace face with ligatures and good differentiation, but its design is optimized for code editing in IDEs — a context far removed from clinical data display. Its ligatures (which are a key feature) are inappropriate for clinical identifiers where exact character rendering matters. Rejected: designed for software engineers, not healthcare data.
- **IBM Plex Mono:** Same corporate connotation concern as IBM Plex Sans. Additionally, its visual weight at regular sits slightly heavier than Source Code Pro, which would create a visual bump when monospaced inline text appears within Source Sans 3 body. Rejected: weight mismatch with body face.

---

### 1.4 Condensed (Argued For) — Source Sans 3 Condensed Widths

**Source:** Source Sans 3 includes a variable width axis that supports condensed settings.
**License:** Same SIL OFL as the base family.

**Why a condensed width is warranted:**

Cena Health's platform includes data tables (clinical outcomes, nutrition tracking, cost analysis), slide footnotes, and dense administrative interfaces (brand brief §3, Audiences 1 and 4). In these contexts, standard-width Source Sans 3 at readable sizes may exceed available horizontal space — particularly in responsive layouts and data grids.

Rather than introducing a separate condensed typeface (which would add a third sans-serif to the system), Source Sans 3's variable width axis allows continuous adjustment between normal and condensed settings. This keeps the system at two font families while providing density control.

**Usage rule:** Condensed widths are permitted only in data tables, slide footnotes, dense form layouts, and administrative interfaces. Never for body text, headings, or patient-facing materials. The condensed setting is a density tool, not a design choice.

---

### 1.5 Secondary Display — Not Warranted

A secondary expressive face for patient-facing materials is not justified. The brand brief explicitly rejects the idea that patient materials should look softer or less professional than institutional materials — the system must be "fully credible AND fully warm" without "compromise in positioning" (brand brief §3, "Cross-audience tension"). Introducing a separate patient-facing display face would create exactly the split the brief prohibits.

Plus Jakarta Sans at larger sizes with increased line height and generous spacing already produces the warm, accessible character needed for patient materials. The warmth comes from composition (sizing, spacing, color) — not from switching fonts.

---

## 2. Type Scale

### 2.1 Scale Foundation

**Base unit:** 16px (1rem)
**Ratio:** 1.250 (major third)

**Rationale for the major third:**

The brand operates across two contexts with fundamentally different density needs: product UI (clinical dashboards, care plans, data tables) and presentation surfaces (investor decks, patient flyers, hero sections). A minor third (1.200) provides too little differentiation at the display end — slide titles at 1.2× steps feel incremental rather than authoritative, undermining the "credible before charismatic" requirement that demands clear, confident hierarchy in presentations. A perfect fourth (1.333) creates too much jump between adjacent steps — in dense UI contexts, the gap between body and subheading becomes visually disruptive, working against the "infrastructure humility" principle.

The major third (1.250) strikes the specific balance Cena Health requires: enough range at the top of the scale for commanding display text in slides and hero sections, with moderate enough increments at the body-and-below range to support the fine-grained hierarchy clinical interfaces demand. The 1.250 ratio also produces clean, memorable size values at the base (16 → 20 → 25 → 31.25), reducing rounding complexity in implementation.

### 2.2 Named Scale Steps

Each step specifies its multiplier from base, a recommended pixel size for web UI (at 16px base), and a recommended point size for slide decks (at 18pt base, reflecting the larger viewing distance of projected/shared-screen contexts).

| Step | Multiplier | Web UI (px) | Slide Deck (pt) | Primary Use |
|------|-----------|-------------|-----------------|-------------|
| `3xs` | 0.512 | 8 | 9 | Minimum legal text, microprint. Avoid in patient-facing materials. |
| `2xs` | 0.640 | 10 | 12 | Overline labels, table column headers in dense views. |
| `xs` | 0.800 | 13 | 14 | Captions, footnotes, helper text, metadata. |
| `sm` | 0.889 | 14 | 16 | Small body text, secondary paragraphs, form hints. |
| **`base`** | **1.000** | **16** | **18** | **Default body text, form inputs, UI labels.** |
| `md` | 1.250 | 20 | 22 | Large body, lead paragraphs, emphasized UI text. |
| `lg` | 1.563 | 25 | 28 | Subsection headings (H3), card titles, nav sections. |
| `xl` | 1.953 | 31 | 35 | Section headings (H2), modal titles. |
| `2xl` | 2.441 | 39 | 44 | Page titles (H1), slide section headers. |
| `3xl` | 3.052 | 49 | 55 | Hero headings, slide titles, key brand statements. |
| `display` | 3.815 | 61 | 68 | Display headlines, stat callouts, maximum-impact brand moments. |

**Notes:**
- Web UI sizes are rounded to the nearest whole pixel for rendering clarity.
- Slide deck sizes are scaled 1.125× from web UI equivalents to account for viewing distance.
- Below `sm`, restrict use to clinical/administrative contexts. Patient-facing materials should not use text smaller than `sm` (14px).
- The sub-base steps (`3xs` through `sm`) do not follow the 1.250 ratio precisely — they are manually set to produce usable sizes at the small end where strict ratio adherence would yield impractical values (e.g., strict 1.250 from 16px down gives 12.8, 10.24, 8.19). The adjustment is pragmatic; the ratio governs `base` through `display`.

---

## 3. Typographic Hierarchy

### 3.1 Heading and Display Styles

#### Page / Slide Title (H1)

| Property | Value |
|----------|-------|
| **Role** | Top-level page title or slide header. One per page/slide. |
| **Typeface** | Plus Jakarta Sans |
| **Scale step** | `2xl` (39px web / 44pt deck) |
| **Weight** | Bold (700) |
| **Line height** | 1.15 |
| **Letter spacing** | −0.01em |
| **Color** | `color-text-primary` (`#0D322D`) |

**Rationale:** The heaviest weight at the largest standard heading size anchors the page. The slight negative tracking at this size tightens the visual rhythm without reducing legibility — Plus Jakarta Sans's generous default spacing tolerates it. The line height of 1.15 keeps multi-line titles compact and authoritative.

#### Section Heading (H2)

| Property | Value |
|----------|-------|
| **Role** | Major section divisions within a page or document. |
| **Typeface** | Plus Jakarta Sans |
| **Scale step** | `xl` (31px web / 35pt deck) |
| **Weight** | SemiBold (600) |
| **Line height** | 1.20 |
| **Letter spacing** | −0.005em |
| **Color** | `color-text-primary` (`#0D322D`) |

**Rationale:** One weight step lighter than H1 and one scale step smaller creates clear subordination. The weight difference (Bold → SemiBold) is the primary differentiator, not size alone — following Principle 6 (at least two differentiating properties per level).

#### Subsection Heading (H3)

| Property | Value |
|----------|-------|
| **Role** | Subsections within a major section. Card titles, grouped content headers. |
| **Typeface** | Plus Jakarta Sans |
| **Scale step** | `lg` (25px web / 28pt deck) |
| **Weight** | SemiBold (600) |
| **Line height** | 1.25 |
| **Letter spacing** | 0 (default) |
| **Color** | `color-text-primary` (`#0D322D`) |

**Rationale:** Same weight as H2 but smaller size. The hierarchy at this level is driven by size and the return to default letter spacing (H2 has slight negative tracking; H3 does not). This creates a subtle loosening that signals reduced authority.

---

### 3.2 Body Styles

#### Body Text (Default)

| Property | Value |
|----------|-------|
| **Role** | All running text — documentation, care plans, descriptions, page content. |
| **Typeface** | Source Sans 3 |
| **Scale step** | `base` (16px web / 18pt deck) |
| **Weight** | Regular (400) |
| **Line height** | 1.55 |
| **Letter spacing** | 0 (default) |
| **Color** | `color-text-primary` (`#0D322D`) |

**Rationale:** The generous 1.55 line height reflects the health equity principle. Patients with limited health literacy benefit from more vertical space between lines, and clinical staff benefit from clearer line distinction when scanning dense paragraphs. Source Sans 3 at Regular weight in the chromatic dark provides high contrast (≥15:1 on `surface-page`) and branded warmth simultaneously.

#### Body Text (Small / Secondary)

| Property | Value |
|----------|-------|
| **Role** | Secondary paragraphs, supporting descriptions, metadata blocks. |
| **Typeface** | Source Sans 3 |
| **Scale step** | `sm` (14px web / 16pt deck) |
| **Weight** | Regular (400) |
| **Line height** | 1.50 |
| **Letter spacing** | 0.005em |
| **Color** | `color-text-secondary` (`#5B544C`) |

**Rationale:** Two differentiating properties from default body: smaller size and warm neutral color (versus the teal-dark of primary text). The slight positive letter spacing compensates for the smaller size, maintaining readability. The color shift from teal-family to warm-family is the critical move — it follows the color system's rationale that secondary text uses warm neutrals, not lighter teals, creating a qualitative hierarchy (color system §2.3).

---

### 3.3 UI and Functional Styles

#### UI Label (Form Labels, Nav Items, Tags)

| Property | Value |
|----------|-------|
| **Role** | Form field labels, navigation items, tag text, button labels. |
| **Typeface** | Source Sans 3 |
| **Scale step** | `sm` (14px web) |
| **Weight** | Medium (500) |
| **Line height** | 1.20 |
| **Letter spacing** | 0.01em |
| **Color** | `color-text-primary` (`#0D322D`) |
| **Text transform** | None (sentence case by default; uppercase only for overline labels at `2xs`) |

**Rationale:** Medium weight distinguishes labels from body text at the same size. The slightly elevated letter spacing improves scanning — labels are read as identifiers, not as prose, and the additional space helps each word register as a discrete unit. The tight 1.20 line height reflects that labels are typically single-line and need to sit compactly alongside their associated inputs or content.

#### Caption / Footnote

| Property | Value |
|----------|-------|
| **Role** | Image captions, chart annotations, footnotes, source citations. |
| **Typeface** | Source Sans 3 |
| **Scale step** | `xs` (13px web / 14pt deck) |
| **Weight** | Regular (400) |
| **Line height** | 1.45 |
| **Letter spacing** | 0.01em |
| **Color** | `color-text-tertiary` (`#787066`) |

**Rationale:** The lightest text treatment in the system: smallest size, lightest color, widest letter spacing. These three differentiators stack to create clear subordination. The color uses `color-text-tertiary` which meets WCAG AA (≥4.5:1 on `surface-page`). Captions should recede but remain legible. Do not use this style for any text that patients must read to understand their care.

#### Overline Label

| Property | Value |
|----------|-------|
| **Role** | Category indicators above headings, section classifiers, contextual markers. |
| **Typeface** | Source Sans 3 |
| **Scale step** | `2xs` (10px web / 12pt deck) |
| **Weight** | SemiBold (600) |
| **Line height** | 1.20 |
| **Letter spacing** | 0.08em |
| **Text transform** | Uppercase |
| **Color** | `color-text-brand` (`#3A8478`) |

**Rationale:** The only place in the system where uppercase and wide letter spacing are used together. This treatment converts small text into a structural marker — it reads as a label on the architecture, not as content to be read as prose. The brand teal color links it to the system identity. This is the typographic equivalent of the icon mark's outermost ring: a structural frame that signals "you are in Cena Health's system."

---

### 3.4 Display and Emphasis Styles

#### Data / Stat Display (Large Number, Key Metric)

| Property | Value |
|----------|-------|
| **Role** | Hero statistics (e.g., "30% reduction"), key metrics on dashboards, large numerical callouts in slides. |
| **Typeface** | Plus Jakarta Sans |
| **Scale step** | `display` (61px web / 68pt deck) or `3xl` depending on context |
| **Weight** | Bold (700) |
| **Line height** | 1.00 |
| **Letter spacing** | −0.02em |
| **Color** | `color-brand-primary` (`#3A8478`) |

**Rationale:** This is a brand moment. The stat display uses the primary brand teal — the color of "health" in the wordmark — to signal that this number is a system outcome, not a decorative element. The tight letter spacing and 1.0 line height create a dense, impactful block. Bold weight in Plus Jakarta Sans at display size is the most visually commanding treatment in the system — reserved for the metrics that define the brand's credibility: "30% hospitalization reduction, 25% fewer ER visits" (brand brief §1).

The brand brief is explicit: "lead with business fundamentals. Metrics first, narrative second." This style exists to make that concrete.

#### Quote / Callout Text

| Property | Value |
|----------|-------|
| **Role** | Pull quotes, patient testimonials, highlighted brand statements. |
| **Typeface** | Plus Jakarta Sans |
| **Scale step** | `md` (20px web / 22pt deck) |
| **Weight** | Regular (400) |
| **Line height** | 1.50 |
| **Letter spacing** | 0 (default) |
| **Color** | `color-brand-primary` (`#3A8478`) |

**Rationale:** Quotes use the heading typeface at body-adjacent size but at Regular weight — the inverse of heading treatment (heading = large + bold; quote = moderate + regular). This creates distinction without hierarchical confusion. The brand teal color differentiates it from body text while linking it to the system's voice. The Regular weight in Plus Jakarta Sans at 20px is warm and readable — appropriate for patient voices and testimonials, which should feel human, not institutional.

#### Hero Heading

| Property | Value |
|----------|-------|
| **Role** | Maximum-impact brand statements. Website hero, conference slides, campaign headlines. |
| **Typeface** | Plus Jakarta Sans |
| **Scale step** | `display` (61px web / 68pt deck) |
| **Weight** | Bold (700) |
| **Line height** | 1.05 |
| **Letter spacing** | −0.02em |
| **Color** | `color-text-primary` (`#0D322D`) |

**Rationale:** The fullest expression of the type system's authority. Display size + Bold weight + chromatic dark = the typographic equivalent of the "Cena" wordmark: heavy, anchored, the proper noun. Reserved for single statements that must command a surface.

---

## 4. The Wordmark Question — Response to Brand Brief Q2

### Decision: The two-tone logic extends into the type system — but only at defined brand moments, not as a structural default.

The logo's "Cena" / "health" color split uses `color-text-primary` (`#0D322D`) for the proper noun and `color-brand-primary` (`#3A8478`) for the domain qualifier. This creates a hierarchy where the entity (Cena) is anchored in the darkest value and the descriptor (health) floats in the brand color.

**Where the two-tone treatment applies:**

1. **Stat displays:** The number/metric uses `color-brand-primary` while its label uses `color-text-primary`. Example: **"30%"** in teal, **"reduction in hospitalizations"** in chromatic dark. This mirrors the wordmark: the impactful element (the stat, like "Cena") is rendered in the more distinctive color, while the explanatory text (the label, like "health") grounds it. *(Correction: I am inverting the wordmark logic here for a reason — in stat displays, the number IS the brand moment, and brand teal makes it pop against surrounding dark text. The wordmark uses dark for the proper noun because names must anchor; stats use teal for the number because metrics must attract.)*

2. **Overline + Heading combinations:** The overline label (in `color-text-brand` / `#3A8478`) above a heading (in `color-text-primary` / `#0D322D`) creates a two-tone vertical pair that echoes the wordmark's horizontal pair. The teal overline qualifies; the dark heading asserts.

3. **Pull quotes:** Quote text in `color-brand-primary` with attribution in `color-text-secondary`. The voice (the teal) speaks; the source (the neutral) identifies.

4. **Data dashboards:** Section titles in `color-text-primary` with metric values in `color-brand-primary`. The structural label is dark; the living data is teal.

**Where the two-tone treatment does NOT apply:**

- **Body text.** Running paragraphs are always single-color (`color-text-primary`). Applying teal highlights within body copy would create a visual stutter that undermines reading flow.
- **Every heading.** The two-tone treatment is not a heading style — it is a brand moment. If every H2 had a teal keyword, the technique would become noise. Reserve it for 1–2 instances per page/slide at most.
- **Navigation and UI chrome.** Interface labels, buttons, and navigation use the standard UI label style. Two-tone text in interactive elements would create ambiguity about what is clickable.
- **Clinical documentation.** Care plans, clinical notes, and medical documentation use the body hierarchy exclusively. The two-tone treatment is a brand voice tool, not a medical communication tool.

**Governing rule:** The two-tone treatment is used when the brand is speaking as Cena Health — making a claim, presenting an outcome, framing a narrative. It is not used when the system is serving the user — displaying content, presenting data neutrally, enabling a task. This maps to the brand brief's distinction between "credible before charismatic": the charisma is in the brand moments; the credibility is in the infrastructure.

---

## 5. Font Loading and Performance Specification

### Required Font Files

| Face | Weights to Load | Format | Variable? |
|------|-----------------|--------|-----------|
| Plus Jakarta Sans | 400, 600, 700 | WOFF2 | Yes — single variable file covers all weights |
| Source Sans 3 | 400, 500, 600 | WOFF2 | Yes — single variable file covers all weights |
| Source Sans 3 Italic | 400 | WOFF2 | Yes — single variable file |
| Source Code Pro | 400, 500 | WOFF2 | Yes — single variable file |

**Total font payload:** ~200KB for four variable WOFF2 files.

### Loading Strategy

1. **Preload** Plus Jakarta Sans variable (display face appears above the fold in most layouts).
2. **Preload** Source Sans 3 variable (body text is immediately visible).
3. **Lazy-load** Source Sans 3 Italic and Source Code Pro (used in specific contexts, not required on first paint).
4. **Fallback stack:** `system-ui, -apple-system, 'Segoe UI', sans-serif` for both heading and body. The fallback should approximate the metrics of Source Sans 3 to minimize layout shift.
5. **`font-display: swap`** for all faces — content visibility takes priority over font fidelity. The system's meaning should never be blocked by font loading.

### CSS Custom Properties

```
--font-display: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-body: 'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-mono: 'Source Code Pro', ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
```

---

## 6. Compatibility Notes for Downstream Agents

### For the Space Architect

- **Line heights are specified as unitless multipliers**, not pixel values. Your spacing system can use these directly. The body text at 16px / 1.55 line height produces a 24.8px line — round to 24px or 25px when calculating vertical rhythm if your spacing grid requires integer values. A 4px base grid will work (16px body, 24px line = 6 grid units; 20px md text at 1.45 line height = ~29px ≈ 7 grid units approximated to 28px).
- **The heading face (Plus Jakarta Sans) has slightly different metrics than the body face (Source Sans 3).** When headings and body text appear in adjacent layout blocks (e.g., a sidebar heading next to a main-content paragraph), the baseline grids will not align automatically. Do not force baseline alignment between the two faces — the visual weight difference already creates sufficient grouping. Align to a consistent spacing grid (the space between elements) rather than to baselines.
- **Minimum touch targets for labels:** UI labels at `sm` (14px) must sit within touch targets of at least 44×44px (WCAG 2.5.8). Your component spacing must account for the small text size requiring a generous interactive zone around it.
- **Condensed text in data tables** uses Source Sans 3 at narrower variable width, not a separate font. The horizontal density gain is approximately 15–20%, which your table column sizing should factor in.

### For the Visual Language Curator

- **Illustrations should never contain typeset text** (brand brief §6, Q6 addresses this). When UI screens appear within illustrated scenes, any text on those screens should be suggested through shape and color (gray bars for text, teal rectangles for buttons) rather than rendered as actual type. This prevents typographic inconsistency between the illustration layer and the live UI.
- **The heading face (Plus Jakarta Sans) may appear in brand collateral illustrations** — for example, as part of a photographed or illustrated poster, banner, or presentation within a scene. When this happens, use the actual typeface at an appropriate hierarchy level; do not approximate it with hand-drawn lettering. The type system is the bridge between illustration and interface.
- **Color pairing rules apply within typography-adjacent illustration.** If illustrated content includes chart labels, diagram annotations, or contextual text (outside the "no text in illustrations" rule, which applies to thematic illustrations), use `color-text-primary` on warm neutral grounds and `color-text-inverse` on dark teal grounds. Never place teal text on sage backgrounds or vice versa — the hue proximity creates vibration.
- **The stat display style** (`display` size in `color-brand-primary`) is the typographic element most likely to appear in illustrated/designed compositions (infographics, annual report pages, impact summaries). Its visual behavior — large, bold, teal — should be treated as a compositional element like the icon mark: it has mass, it needs space around it, it anchors a region.

---

## Appendix A: Quick Reference Table

| Style | Face | Step | Weight | Line Height | Tracking | Color Token |
|-------|------|------|--------|-------------|----------|-------------|
| Hero heading | Plus Jakarta Sans | `display` | 700 | 1.05 | −0.02em | `color-text-primary` |
| H1 | Plus Jakarta Sans | `2xl` | 700 | 1.15 | −0.01em | `color-text-primary` |
| H2 | Plus Jakarta Sans | `xl` | 600 | 1.20 | −0.005em | `color-text-primary` |
| H3 | Plus Jakarta Sans | `lg` | 600 | 1.25 | 0 | `color-text-primary` |
| Overline | Source Sans 3 | `2xs` | 600 | 1.20 | 0.08em | `color-text-brand` |
| Body | Source Sans 3 | `base` | 400 | 1.55 | 0 | `color-text-primary` |
| Body small | Source Sans 3 | `sm` | 400 | 1.50 | 0.005em | `color-text-secondary` |
| UI label | Source Sans 3 | `sm` | 500 | 1.20 | 0.01em | `color-text-primary` |
| Caption | Source Sans 3 | `xs` | 400 | 1.45 | 0.01em | `color-text-tertiary` |
| Stat display | Plus Jakarta Sans | `display` | 700 | 1.00 | −0.02em | `color-brand-primary` |
| Quote | Plus Jakarta Sans | `md` | 400 | 1.50 | 0 | `color-brand-primary` |
| Mono inline | Source Code Pro | `sm` | 400 | inherit | 0 | inherit |
| Mono block | Source Code Pro | `sm` | 400 | 1.55 | 0 | `color-text-primary` |

---

## Appendix B: Judgment Call Summary

Decisions that extend beyond or interpret the brief, flagged for review:

1. **Plus Jakarta Sans over more established alternatives** (§1.1): This is a relatively young typeface (released 2021). Its open-source license and variable font support are strong, but it lacks the decades of battle-testing that faces like Source Sans or Fira have. If brand longevity is a concern, Source Sans 3 could serve as both heading and body face — losing some display personality but gaining maximum consistency and proven reliability.

2. **Major third ratio** (§2.1): The 1.250 ratio is a judgment call balancing slide/display needs against UI density. If testing reveals that the jump from `base` (16px) to `md` (20px) is too large for UI contexts, a 1.200 minor third with a manually enlarged display step would be the alternative.

3. **1.55 body line height** (§3.2): More generous than the typical 1.4–1.5 range. This is driven by the health equity principle — wider line spacing measurably improves reading comprehension for low-literacy audiences. If dense clinical interfaces require tighter spacing, 1.45 is the minimum acceptable value, and only in clinical-staff-only contexts, never patient-facing.

4. **Two-tone treatment rules** (§4): The decision to extend the wordmark's two-tone logic beyond the logo is interpretive. The brand brief asks the Typographer to decide; the color system suggests it can work but should be "used sparingly." The rules defined here attempt to be specific enough to prevent misuse while allowing the brand's most distinctive typographic gesture to appear where it serves the narrative. If this creates inconsistency in practice, the safe fallback is to isolate two-tone treatment to the logo only.

5. **No secondary display face** (§1.5): This rejects the option of a warmer/softer face for patient materials. The reasoning follows the brief's "cross-audience tension" resolution: one system, not two. If user testing with patient populations reveals that Plus Jakarta Sans at large sizes reads as too institutional, this decision should be revisited — but the first attempt should be compositional adjustment (larger sizes, more spacing, sage/warm color palette) before introducing a new typeface.

6. **Condensed as variable width, not separate family** (§1.4): This keeps the system at two font families plus one monospace. If Source Sans 3's variable width axis proves insufficient for extreme density requirements (e.g., multi-column data tables on narrow mobile views), a dedicated condensed family could be introduced — but only after the variable width approach has been tested and found inadequate.
