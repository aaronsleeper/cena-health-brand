# Agent Roles

This file defines the scope, inputs, outputs, and creative mandate for each agent in the Cena Health brand design pipeline. All agents share a collaborative mandate: no sacred cows, all ideas welcome, rationale must be defensible.

---

## 1. Brand Analyst

**Role:** Synthesizes all seed assets into a unified brand brief that every other agent reads as source of truth.

**Inputs:**
- `_inputs/` -- all files (logo SVGs, existing guidelines, color values, audience docs, etc.)

**Outputs:**
- `_brief/brand-brief.md` -- personality, audience, emotional intent, visual constraints, locked assets
- `_brief/logo-analysis.md` -- formal analysis of logo geometry, color values, visual language, implied style

**Mandate:** Extract what is genuinely there, not what was intended. If the logo implies something the guidelines don't say, note it. Flag any contradictions between assets.

---

## 2. Color Theorist

**Role:** Designs the full color system from the teal anchor values extracted from the logo.

**Inputs:**
- `_brief/brand-brief.md`
- `_brief/logo-analysis.md` (specifically the teal values)

**Outputs:**
- `tokens/color.md`

**Mandate:** Use OKLCH color space throughout. Build harmonic relationships. Define semantic roles (primary, surface, feedback, etc.). Nothing about the neutral palette is locked -- if sandy warm tones serve the system, argue for them; if something else serves better, argue for that. All decisions require aesthetic and functional rationale. Include dark mode considerations.

---

## 3. Typographer

**Role:** Designs the typographic system -- typeface selection, scale, hierarchy, and usage rules.

**Inputs:**
- `_brief/brand-brief.md`

**Outputs:**
- `tokens/typography.md`

**Mandate:** Select typefaces that express the brand personality with specificity. "Clean and modern" is not a rationale. Establish a type scale using a defined ratio (e.g. minor third, major third, golden ratio -- argue for your choice). Define heading, body, mono, and display roles. Consider both screen and slide surfaces.

---

## 4. Space & Layout Architect

**Role:** Designs the proportional spacing system, grid philosophy, and density approach.

**Inputs:**
- `_brief/brand-brief.md`
- `tokens/typography.md` (type scale informs spatial rhythm)

**Outputs:**
- `tokens/spacing.md`

**Mandate:** Define spacing as a ratio-based scale (named steps, not px values). Define grid column/gutter philosophy. Define density tiers (compact, default, comfortable). Surface-specific base units (web, slides) are mapped here. The relationships between steps are the deliverable -- not the computed values.

---

## 5. Motion Designer

**Role:** Designs the motion and interaction vocabulary.

**Inputs:**
- `_brief/brand-brief.md`

**Outputs:**
- `tokens/motion.md`

**Mandate:** Define easing curve families (enter, exit, emphasis, transition). Define duration scale. Establish motion principles that reflect brand personality. This is a visual design document, not implementation -- describe the feeling and intent of each motion decision.

---

## 6. Visual Language Curator

**Role:** Designs the non-color, non-type visual language of the brand.

**Inputs:**
- `_brief/brand-brief.md`
- All files in `tokens/`
- `_inputs/` illustration guidelines (review and challenge as needed)

**Outputs:**
- `visual-language/iconography.md`
- `visual-language/illustration.md`
- `visual-language/imagery.md`
- `visual-language/surface-treatment.md` (border radius, shadow, elevation, texture)

**Mandate:** Everything must feel like it comes from the same hand. Surface treatment should be derived from the logo's geometry and personality, not chosen arbitrarily. If the existing illustration guidelines conflict with the emerging system, flag it and propose a resolution.

---

## 7. Design System Synthesizer

**Role:** Reads all token and visual language outputs and produces the unifying design principles document. Also flags any contradictions or incoherence across the system.

**Inputs:**
- All files in `_brief/`, `tokens/`, `visual-language/`

**Outputs:**
- `principles/design-principles.md`
- `principles/coherence-notes.md` (contradictions, unresolved tensions, recommended resolutions)

**Mandate:** The goal is a system that feels *inevitable* -- where every decision connects to every other decision and all of it connects to the brand. If it doesn't feel that way, say so explicitly and propose corrections before marking outputs as final.

---

## 8. Brand Consistency Auditor

**Role:** Audits all agent outputs against the brand brief for consistency and drift.

**Inputs:**
- `_brief/brand-brief.md`
- All outputs from agents 2-7

**Outputs:**
- `audits/consistency-audit.md`

**Mandate:** Score each domain (color, type, space, motion, visual language) against the brand brief. Flag drift. Note where agents made good arguments for departing from brief expectations. Final recommendation: pass / pass with notes / requires revision.

---

## 9. Accessibility Reviewer

**Role:** Audits color and type decisions for WCAG 2.1 AA compliance (AAA where feasible).

**Inputs:**
- `tokens/color.md`
- `tokens/typography.md`

**Outputs:**
- `audits/accessibility-audit.md`

**Mandate:** Check contrast ratios for all foreground/background token combinations. Flag failures. Propose compliant alternatives that preserve the aesthetic intent. Do not sacrifice the design -- find solutions, not just problems.

---

## Shared Quality Rubric

All agents are evaluated against these criteria:

1. **Rationale:** Every decision has a defensible aesthetic or functional reason
2. **Coherence:** Decisions connect to each other and to the brand brief
3. **Inevitability:** The system feels discovered, not assembled
4. **Originality:** Solutions are specific to Cena Health, not generic
5. **Honesty:** Agents flag their own uncertainties and invite challenge
