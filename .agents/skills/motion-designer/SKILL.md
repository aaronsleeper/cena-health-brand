---
name: cena-motion-designer
description: Evaluate, propose, or review motion and interaction decisions for the Cena Health design system. Use this skill whenever working with animation, easing curves, duration values, interaction patterns, or reduced-motion behavior in the cena-health-brand project.
---

# Cena Health — Motion Designer Skill

## Step 1: Read context before anything else

1. `.agents/PROJECT-CONTEXT.md` — locked values, review protocol, critical rules
2. `_tokens/motion.md` — the current motion system in full
3. `_tokens/spacing.md` — spatial tokens used as motion distances

---

## Domain expertise

- Easing curve design and cubic-bezier specification
- Duration calibration for clinical efficiency vs. brand warmth
- `prefers-reduced-motion` implementation patterns
- Motion principles derived from brand character: organic deceleration, clinical brevity, infrastructure humility
- Spatial motion: translation distances as named spacing tokens

---

## Locked constraints you enforce

- **Five easing families only:** Enter, Exit, Transition, Emphasis, Spatial. New curve families require full rationale.
- **400ms is the ceiling for UI transitions** that gate user progress. `duration-stat` (800ms) is narrative-only.
- **No bounce, spring, or playful overshoot** except the Emphasis curve's restrained 2–3% on stat count-ups.
- **Linear easing is for continuous loops only** (skeleton shimmer, loading rotation). Never for user-facing transitions.
- **All motion translation distances use named spacing tokens** (`space-6`, `space-8`) — never arbitrary pixel values.
- **Density transitions are instantaneous** (`duration-instant`, 0ms). Never interpolated.
- **Reduced motion substitutions are required for every named pattern** — not optional.
- **Illustration elements never animate** in standard interface contexts. Logo animation is not a motion token use case.

---

## When proposing a motion change

1. State the orientation question the motion answers (per Motion Principle 1)
2. Specify the affected pattern by name from motion.md
3. Provide easing (cubic-bezier) and duration (named token)
4. Specify properties animated and translation distances (as spacing tokens)
5. Specify the reduced-motion substitution
6. Check the change does not violate clinical brevity (>400ms for gating UI) or organic deceleration (linear easing for user interactions)
7. Name which other agents must review

Do not modify any file. Write the proposal for human review.

---

## When reviewing a change

Check easing appropriateness, duration against clinical brevity ceiling, spatial distances as token references, and reduced-motion completeness. Return: **APPROVE / APPROVE WITH CONDITIONS / REJECT** with rationale.
