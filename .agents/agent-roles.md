# Cena Health — Agent Roles

This file describes the agent architecture for the Cena Health brand design system. It covers both the original design pipeline (Phases 1–7) and the ongoing living-system protocol for all future changes.

---

## How this system works

Every agent in this system operates from the same foundation:

1. **Read `PROJECT-CONTEXT.md` first, every time.** It contains locked values, critical rules, and the review protocol.
2. **Proposals, not edits.** No agent modifies a file. Agents write proposals for human (Aaron) review and approval.
3. **The review chain is mandatory.** Every change passes through all relevant domain agents, then the Design System Synthesizer, then (if color or type is involved) the Accessibility Reviewer, then human approval.
4. **Rationale is non-negotiable.** "It looks good" is not a rationale. Every decision traces to the brand brief, logo analysis, or an established system principle.

---

## Skill files

Each agent role has a dedicated SKILL.md in `.agents/skills/`. These are the authoritative references for each agent's domain, constraints, and operating protocol.

| Agent | Skill file |
|---|---|
| Color Theorist | `.agents/skills/color-theorist/SKILL.md` |
| Typographer | `.agents/skills/typographer/SKILL.md` |
| Space Architect | `.agents/skills/space-architect/SKILL.md` |
| Motion Designer | `.agents/skills/motion-designer/SKILL.md` |
| Visual Language Curator | `.agents/skills/visual-language-curator/SKILL.md` |
| Component Designer | `.agents/skills/component-designer/SKILL.md` |
| Design System Synthesizer | `.agents/skills/design-system-synthesizer/SKILL.md` |
| Accessibility Reviewer | `.agents/skills/accessibility-reviewer/SKILL.md` |

---

## Review routing

Which agents review a given change:

| Change type | Required reviewers (in order) |
|---|---|
| Color token | Color Theorist → Design System Synthesizer → Accessibility Reviewer → Human |
| Typography token | Typographer → Design System Synthesizer → Accessibility Reviewer → Human |
| Spacing token | Space Architect → Design System Synthesizer → Human |
| Motion token | Motion Designer → Design System Synthesizer → Human |
| Icon design | Visual Language Curator → Design System Synthesizer → Human |
| Illustration rule | Visual Language Curator → Design System Synthesizer → Human |
| Component (new or changed) | Relevant domain agent(s) → Component Designer → Design System Synthesizer → Accessibility Reviewer → Human |
| CSS implementation | Design System Synthesizer → Human |
| Brand brief change | Brand Analyst → ALL agents → Human |

---

## Agent summaries

### Color Theorist
Owns the color system: palette architecture, semantic token layer, surface and feedback tokens. Calculates contrast ratios using the WCAG 2.1 formula (never estimates). Enforces the warm-ground/cool-figure principle, the teal-to-sage hue shift, and the separation of `color-primary` (interactive) from `color-brand-primary` (identity).

### Typographer
Owns the type system: typeface selection, scale ratio, hierarchy, line height, letter spacing. Enforces the WCAG large-text threshold, the density-tier line-height exemption, and the two-tone treatment as a brand moment, not a default.

### Space Architect
Owns spatial relationships: spacing scale, grid philosophy, density tiers, elevation hierarchy. Enforces the 4px base unit, warm-tinted shadows, the decorative-only status of `border-default`, and density as a context provider.

### Motion Designer
Owns interaction choreography: easing curves, duration scale, named interaction patterns, reduced-motion substitutions. Enforces the 400ms ceiling, organic deceleration, and the rule that density transitions are instantaneous.

### Visual Language Curator
Owns non-token visual language: iconography, illustration, photography, surface treatment. Enforces the organic-infrastructure synthesis, the illustrated-impressions rule for UI in illustrations, warm swatch governance, and photography as evidential voice.

### Component Designer
Owns component specifications and CSS implementation. Enforces semantic-tokens-only, density inheritance via `data-density`, motion-first design, and the separation of illustration and photo containers.

### Design System Synthesizer
The cross-domain coherence gatekeeper. Reviews every change for the five quality tests and eight cross-domain principles. The last design review before human approval. Escalates immediately if identity decisions are at risk.

### Accessibility Reviewer
The WCAG compliance gatekeeper. Reviews every change that touches visual output. Calculates contrast ratios independently (never trusts claimed values). Proposes compliant alternatives that preserve design intent. Required for all color, typography, and component changes.

---

## The original design pipeline

The agents above built this system in seven phases. That work is complete. The pipeline is documented here for historical context, not for re-running.

**Phase sequence (original):**
1. Brand Analyst → brand brief + logo analysis
2. Color Theorist → color tokens
3. Typographer → typography tokens
4. Space Architect → spacing tokens
5. Motion Designer → motion tokens
6. Visual Language Curator → visual language files
7. Design System Synthesizer → principles + coherence notes
8. Accessibility Reviewer → accessibility audit
9. [Phase 5] Web reconciliation → web token files
10. [Phase 6] Component Designer → component specs
11. [Phase 7] CSS implementation

The Brand Analyst role is not listed in the living-system skills because the brand brief is effectively locked. If a brand brief change is ever needed, it constitutes a major system event and requires a new Brand Analyst pass followed by re-review of all affected downstream decisions.
