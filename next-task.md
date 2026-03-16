# Next Task

## Status: Phase 7 Complete — System Ready for Use

`dist/cena-health.css` (~49KB minified) is the production artifact.

---

## Immediate priorities

### 1. Canonical illustration SVG assets
**Blocking** for illustration-adjacent components.

Need 3–5 examples per type:
- Spot illustrations (120–240px)
- Narrative scenes (400–800px, 16:9)
- Data illustrations (120–320px, alongside metrics)
- Background textures (tileable, 200×200px tile)
- Diagram illustrations (400–600px, process flows)

Reference: `visual-language/illustration.md` for full style spec.

### 2. Photography LUT / Lightroom preset
Reference: `visual-language/imagery.md §2` for exact treatment spec:
- Highlights → warm neutral 900 (`#F3F1EE`)
- Shadows → teal-200 (`#0D322D`)
- Saturation −15–20% from capture default

### 3. Expanded component library (next in priority order)

**UI track — next:**
- `alert.md` / `alert.css` — info/warning/error/success banners
- `badge.md` / `badge.css` — status indicators, tags
- `modal.md` / `modal.css` — dialog overlay (motion spec in motion.md §3.2)
- `dropdown.md` / `dropdown.css` — menus, select panels
- `toast.md` / `toast.css` — notification system (motion spec in motion.md §3.6)
- `form-group.md` — label + input + helper text layout patterns
- `table.md` — clinical data tables in compact density
- `nav.md` — navigation bar, sidebar, tab bar

**Slides track — next:**
- `data-slide.md` — chart frame + annotation system
- `quote-slide.md` — patient/partner testimonials
- `section-divider.md` — branded section break

### 4. Data visualization language
Gap documented in `principles/coherence-notes.md §3.1`.
Needs: color-to-series mapping, axis styling, chart label typography, interaction patterns.

---

## Key constraints for new components

All future components must:
- Reference semantic tokens only (no raw hex or raw palette steps)
- Treat `color-surface-page` (`#FBFAF8`) as non-overridable default
- Inherit density tier via `data-density` attribute (see `src/css/tokens-spacing.css`)
- Include motion behavior from day one with reduced-motion substitutions
- Keep illustration wells and photo wells as separate component types

Read before writing any new component: `principles/coherence-notes.md §6`
