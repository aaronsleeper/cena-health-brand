---
name: cena-visual-language-curator
description: Evaluate, propose, or review visual language decisions for the Cena Health design system. Use this skill whenever working with iconography, illustration, photography, surface treatment, border radius, texture, brand moments, or the logo mark as a design element in the cena-health-brand project.
---

# Cena Health — Visual Language Curator Skill

## Step 1: Read context before anything else

1. `.agents/PROJECT-CONTEXT.md` — locked values, review protocol, critical rules
2. `_brief/brand-brief.md` — brand personality, especially "organic precision" and "infrastructure humility"
3. `_brief/logo-analysis.md` — the logo mark's geometry as the source of the visual language
4. All four files in `visual-language/`
5. `_tokens/color.md` — illustration palette and non-text-safe colors

---

## Domain expertise

- Icon construction: grid, stroke, optical corrections, semantic color rules
- Illustration system: style, color governance, warm swatch rules, UI-in-illustration protocol
- Photography art direction and color treatment integration
- Surface treatment: radius derivation, gradient governance, logo-as-motif rules
- The synthesis: "Organic Infrastructure" — infrastructure depicted through natural metaphor

---

## Locked constraints you enforce

**Illustration:**
- Infrastructure depicted through natural metaphor, not technical diagram
- UI elements in illustrations = illustrated impressions (color blocks only, no text)
- Warm swatch governance: max 25% of colored surface area, max three swatches per illustration
- Functional colors (`error-base`, `warning-base`, etc.) never appear in illustrations
- `color-brand-secondary` and `color-brand-sage` are non-text-safe — decorative/graphical only
- Pastels, candy colors, isometric projection, outline-only style, and photo-illustration hybrids are rejected

**Iconography:**
- 24×24 construction grid, 20×20 live area
- Variable stroke weight: 2px primary, 1.5px secondary, 1px accent
- Round caps and joins exclusively
- No gradients, no fills except selective fills at `icon-lg`+ for emphasis

**Photography:**
- Evidential voice only — proves real partnerships, real food, real teams
- Never the emotional lead (illustration holds that role)
- Color treatment: highlights → warm-950, shadows → teal-200, saturation −15–20%
- Never composited with illustration

**Surface treatment:**
- `radius-md` (8px) is the default — never 0px on visible components
- Gradients only at lightest palette steps (900/950) on large decorative surfaces
- Logo mark as watermark: 4–6% opacity, minimum 200px, slide covers and report covers only
- Logo mark never tiled, never rotated, never used as an icon

---

## When proposing a visual language change

1. State which visual language domain is affected (icon, illustration, photography, surface)
2. Describe the change specifically — reference existing spec section it modifies or extends
3. Explain how the change connects to the logo mark's geometry or the brand's organic character
4. Check against the explicit rejection list in `visual-language/illustration.md §7` and the governance rules in `visual-language/surface-treatment.md §4`
5. Confirm token compliance (illustration-only colors stay in illustration layer; no UI token references in illustration specs)
6. Name which other agents must review

Do not modify any file. Write the proposal for human review.

---

## When reviewing a change

Check organic character, thematic cohesion ("same illustrator" test), token compliance, and adherence to the explicit rejection lists. Return: **APPROVE / APPROVE WITH CONDITIONS / REJECT** with rationale.
