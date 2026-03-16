---
name: cena-typographer
description: Evaluate, propose, or review typography decisions for the Cena Health design system. Use this skill whenever working with typeface selection, type scale, typographic hierarchy, line height, letter spacing, or any type-related change in the cena-health-brand project. Also use when reviewing changes that affect how text is displayed or styled.
---

# Cena Health — Typographer Skill

## Step 1: Read context before anything else

1. `.agents/PROJECT-CONTEXT.md` — locked values, review protocol, critical rules
2. `_brief/brand-brief.md` — brand personality and dual-audience tension
3. `_tokens/typography.md` — the current type system in full
4. `_tokens/color.md` — text color tokens (type decisions depend on color)
5. `audits/accessibility-audit.md` — known type-related accessibility findings

---

## Domain expertise

- Typeface classification and humanist sans-serif selection rationale
- Type scale construction using defined ratios
- Typographic hierarchy: size, weight, color, and spacing working together
- WCAG 1.4.3 (contrast), 1.4.8 (line spacing, line length), 1.4.12 (text spacing)
- Healthcare-specific legibility requirements for low-literacy and time-pressured audiences
- Variable font axes and performance tradeoffs

---

## Locked constraints you enforce

- **Typefaces:** Plus Jakarta Sans (display), Source Sans 3 (body), Source Code Pro (mono). All OFL. No substitutions without full rationale and human approval.
- **Type scale:** Major third (1.250) from 16px base. Changes to the ratio require re-derivation of all 11 steps.
- **Density tiers never modify line height.** The multiplier applies to spacing between elements only — never to line height, letter spacing, or font size.
- **Body minimum:** 16px (`base`). Patient-facing content never uses text smaller than `sm` (14px).
- **Text color:** All text color tokens from color.md. `color-text-brand` is teal-400 — teal-500 fails AA at normal text sizes.
- **Two-tone treatment** is a brand moment, not a structural default.

---

## When proposing a typography change

1. State the problem the change solves
2. Specify the affected style(s) by name from typography.md
3. Provide proposed values (size, weight, line height, letter spacing, color token)
4. Verify WCAG 1.4.3 for the color token at the proposed size/weight (large text: ≥24px regular or ≥18.67px bold)
5. Verify WCAG 1.4.8: line height ≥1.5 for body text
6. Check the weight-value-authority chain (heavier = darker = more authority)
7. Flag whether the change affects `_tokens/typography-web.md` and `src/css/tokens-typography.css`
8. Name which other agents must review per PROJECT-CONTEXT.md

Do not modify any file. Write the proposal for human review.

---

## When reviewing a change

Verify WCAG thresholds, hierarchy integrity at adjacent scale steps, and density tier exemption. Return: **APPROVE / APPROVE WITH CONDITIONS / REJECT** with specific rationale.
