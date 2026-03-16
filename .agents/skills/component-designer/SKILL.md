---
name: cena-component-designer
description: Design, extend, or review component specifications for the Cena Health design system. Use this skill whenever adding a new UI component, modifying an existing component spec, designing a new slide template, or reviewing component-level changes in the cena-health-brand project. This includes both design specs (components/ui/ and components/slides/) and CSS implementation (src/css/).
---

# Cena Health — Component Designer Skill

## Step 1: Read context before anything else

1. `.agents/PROJECT-CONTEXT.md` — locked values, review protocol, critical rules
2. `principles/design-principles.md` — especially §4 quality tests and §5 anti-patterns
3. `principles/coherence-notes.md §6` — Phase 6 failure modes to avoid
4. The relevant token files for your component's domain (all of `_tokens/`)
5. The existing component spec most similar to what you are building

---

## Domain expertise

- Component anatomy: state matrix, density behavior, surface variants, motion behavior
- Design token application: semantic tokens only, never raw palette steps or hex
- Tailwind v4 utility class mapping from `src/css/main.css`
- Density tier inheritance via `data-density` attribute
- Slide vs. web surface differences (pt vs. px base unit, comfortable density always on slides)
- WCAG 2.5.8 minimum touch target (44×44px) for interactive components

---

## Non-negotiable constraints

- **Semantic tokens only.** Components reference `color-text-primary`, `space-4`, `radius-md` — never `#0D322D`, `16px`, `8px`.
- **`color-surface-page` (`#FBFAF8`) is the default background.** Never `#FFFFFF`.
- **Density is a context provider, not per-component.** Components inherit `data-density` from a parent wrapper. They do not set their own density.
- **Every interactive component includes its full motion spec** — easing, duration, properties, reduced-motion substitution. Motion is not added later.
- **Illustration wells and photo wells are separate component types.** No shared "media" container that accepts either.
- **`color-brand-secondary` and `color-brand-sage` are non-text-safe.** Never set as text color in any component.
- **Focus ring uses `color-border-focus`** (`#3A8478`, passes 3:1 on all surfaces). Never suppressed.
- **Success states always use dual-cue** (icon + text label). Never color alone.

---

## Component spec structure

Every component spec must include:

1. **Purpose** — what problem this component solves, which surfaces it serves (web/slides/both)
2. **Anatomy** — named parts (container, label, icon, etc.) with token references for each
3. **Variants** — all named variants with their distinguishing token values
4. **State matrix** — resting, hover, focus, active, disabled, (error/success if applicable)
5. **Density behavior** — how the component responds to compact/default/comfortable context
6. **Surface variants** — behavior on `surface-page`, `surface-primary`, `surface-secondary`, `surface-teal`, `surface-sage`
7. **Motion spec** — easing token, duration token, properties animated, reduced-motion substitution
8. **Accessibility notes** — contrast ratios for text, WCAG touch target compliance, color-blind considerations
9. **CSS reference** — class names as implemented in `src/css/`

---

## When proposing a new component

1. Confirm no existing component already solves the problem
2. Identify which token domains are involved — this determines which agent skills must review
3. Write the full spec following the structure above
4. Identify the CSS implementation scope (new file in `src/css/components/` or `src/css/slides/`)
5. Name which agents must review: always includes Design System Synthesizer; includes Accessibility Reviewer if color or type is involved

Do not modify any file. Write the proposal for human review.

---

## When reviewing a component change

Check token compliance (semantic tokens only), density inheritance correctness, motion spec completeness, accessibility requirements, and consistency with existing components. Return: **APPROVE / APPROVE WITH CONDITIONS / REJECT** with rationale.
