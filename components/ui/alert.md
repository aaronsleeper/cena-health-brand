# Cena Health — Alert / Banner Component Spec

_Design specification for the Alert component. All values reference named semantic tokens from the token system._

---

## 1. Overview

Alerts are inline feedback messages that communicate system status within a page flow. They display in four semantic variants — info, warning, error, and success — and may be persistent or dismissible. Alerts sit inline with page content (Level 0–1 elevation, no shadow); they are distinct from toasts, which float above content (Level 5 elevation, slide from viewport edge). Alerts and toasts share the same four feedback color token families but differ in placement, elevation, and motion pattern.

**Variants:** Info, Warning, Error, Success
**Modes:** Persistent, Dismissible
**Surfaces:** Web UI only (not slides)

---

## 2. Anatomy

```
┌─ container ──────────────────────────────────────────────────────┐
│                                                                   │
│  [status-icon]   Message text                     [dismiss-btn]   │
│                  Optional description text                        │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

### Named Parts

| Part | Required | Description |
|------|----------|-------------|
| **Container** | Yes | Background: `color-{state}-bg`; Border: 1px `color-{state}-border` on all sides; Left accent: 3px `color-{state}-base`; Border-radius: `radius-md` (8px) |
| **Status icon** | Yes | Size: `icon-md` (20px); Color: `color-{state}-base`; Category: outlined/stroke (2px primary strokes) |
| **Message text** | Yes | Font: `--font-body` (Source Sans 3); Size: `--text-sm` (14px); Weight: Medium 500; Line-height: `--leading-body-sm` (1.50); Color: `color-{state}-text` |
| **Description text** | No | Font: `--font-body`; Size: `--text-sm` (14px); Weight: Regular 400; Line-height: `--leading-body-sm` (1.50); Color: `color-text-primary` (#0D322D) |
| **Dismiss button** | Dismissible only | Touch target: 44×44px (WCAG 2.5.8); Visual icon: `icon-sm` (16px) X/close; Color: `color-{state}-text` at 70% opacity resting |

### Left Accent Border Rationale

The 3px left accent border uses `color-{state}-base` (the darker functional color) rather than `color-{state}-border`. This achieves ≥3:1 non-text contrast against the alert's own feedback background (SC 1.4.11) on all four variants. The 3px weight is between the system's 1px decorative and 2px emphasis borders, creating a distinct "alert accent" unique to this component's inline feedback role.

---

## 3. Variants

### 3.1 Info

| Property | Token | Value |
|----------|-------|-------|
| Container background | `var(--color-info-bg)` | #DFEEF7 |
| Container border | `var(--color-info-border)` | #538EB0 |
| Left accent border | `var(--color-info-base)` | #287AA3 |
| Status icon | info-circle (outlined) | `var(--color-info-base)` |
| Message text | `var(--color-info-text)` | #0B4E6C |
| Description text | `var(--color-text-primary)` | #0D322D |
| ARIA role | `status` | — |
| ARIA live | `polite` | — |

### 3.2 Warning

| Property | Token | Value |
|----------|-------|-------|
| Container background | `var(--color-warning-bg)` | #F4EAD5 |
| Container border | `var(--color-warning-border)` | #CEA861 |
| Left accent border | `var(--color-warning-base)` | #B58B20 |
| Status icon | warning-triangle (outlined) | `var(--color-warning-base)` |
| Message text | `var(--color-warning-text)` | #754B00 |
| Description text | `var(--color-text-primary)` | #0D322D |
| ARIA role | `alert` | — |
| ARIA live | `assertive` | — |

### 3.3 Error

| Property | Token | Value |
|----------|-------|-------|
| Container background | `var(--color-error-bg)` | #FCE5E3 |
| Container border | `var(--color-error-border)` | #D87972 |
| Left accent border | `var(--color-error-base)` | #C13C3B |
| Status icon | error-circle (outlined) | `var(--color-error-base)` |
| Message text | `var(--color-error-text)` | #932B2A |
| Description text | `var(--color-text-primary)` | #0D322D |
| ARIA role | `alert` | — |
| ARIA live | `assertive` | — |

### 3.4 Success

| Property | Token | Value |
|----------|-------|-------|
| Container background | `var(--color-success-bg)` | #DCF0E5 |
| Container border | `var(--color-success-border)` | #4F9870 |
| Left accent border | `var(--color-success-base)` | #3A8E64 |
| Status icon | check-circle (outlined) | `var(--color-success-base)` |
| Message text | `var(--color-success-text)` | #174430 |
| Description text | `var(--color-text-primary)` | #0D322D |
| ARIA role | `status` | — |
| ARIA live | `polite` | — |

**Success dual-cue compliance:** The checkmark icon + message text label are always present. Color is never the sole indicator. This satisfies the system-wide mandate from color.md §4 and accessibility-audit.md R10.

---

## 4. State Matrix

| State | Container | Icon | Message | Dismiss button |
|-------|-----------|------|---------|----------------|
| **Resting** | Per variant spec | `color-{state}-base` | `color-{state}-text` | `color-{state}-text` at 70% opacity |
| **Hover (dismiss)** | No change | No change | No change | `color-{state}-text` at 100%; subtle background fill |
| **Focus (dismiss)** | No change | No change | No change | 2px `color-border-focus` ring, `space-0.5` offset |
| **Active (dismiss)** | No change | No change | No change | `color-{state}-text` at 100%; `scale(0.95)` |

### Dismiss Button Focus Ring

The focus ring uses the system's standard pattern: `box-shadow: 0 0 0 2px var(--color-{state}-bg), 0 0 0 4px var(--color-border-focus)`. The inner ring matches the alert background so the focus indicator has a visible gap. `color-border-focus` (#3A8478) achieves 3.68–3.73:1 on all four feedback backgrounds.

---

## 5. Dismissible vs. Persistent

| Mode | Dismiss button | Auto-dismiss | Behavior |
|------|---------------|-------------|----------|
| **Persistent** | Hidden | No | Alert remains until the condition it describes is resolved |
| **Dismissible** | Visible | No | User-initiated dismissal via close button; triggers exit animation |

Dismiss button uses `<button aria-label="Dismiss">` containing an X/close icon at `icon-sm` (16px). The visual icon is 16px but the interactive area is 44×44px, achieved via transparent padding expansion around the icon.

---

## 6. Density Behavior

Density is inherited from the parent container via `data-density`. The alert never sets its own density.

| Property | Compact | Default | Comfortable |
|----------|---------|---------|-------------|
| Vertical padding | `var(--space-2)` | `var(--space-3)` | `var(--space-4)` |
| Horizontal padding | `var(--space-3)` | `var(--space-4)` | `var(--space-5)` |
| Icon-to-text gap | `var(--space-2)` | `var(--space-2)` | `var(--space-3)` |
| Message-to-description gap | `var(--space-1)` | `var(--space-1)` | `var(--space-1-5)` |
| Left accent width | 3px | 3px | 3px |

Font size, font weight, icon size, and colors do not change with density. Only spatial tokens scale. The left accent border width is fixed at 3px across all densities — it is a visual identity element, not a spatial one.

---

## 7. Surface Behavior

Alerts may appear on all five surfaces. The feedback background tints are calibrated for visibility on each.

| Surface | Notes |
|---------|-------|
| `surface-page` (#FBFAF8) | Standard — feedback bg tints are clearly visible against warm off-white |
| `surface-primary` (#F3F1EE) | Feedback bg tints remain differentiated; the 1px border and left accent reinforce |
| `surface-secondary` (#E7E4DF) | Feedback bg is lighter than the surface — the alert reads as a lighter panel. Border and left accent provide additional separation |
| `surface-teal` (#E9F5F2) | Info-bg on surface-teal: both are cool-toned tints — the border provides primary differentiation. All other states contrast clearly |
| `surface-sage` (#E7F2E8) | Success-bg on surface-sage: close in hue. The border + icon + text label provide differentiation per dual-cue mandate (coherence-notes §2.1) |

**Critical rule:** On `surface-sage`, success alerts rely on their border, icon, and text label — not background color alone. This is the scenario flagged in coherence-notes §2.1.

---

## 8. Motion Spec

Alerts use inline enter/exit animations. They do not slide from the viewport edge (that is the toast pattern from motion.md §3.6).

### 8.1 Enter (Alert Appears)

| Property | Value |
|----------|-------|
| **Easing** | Enter (`var(--ease-enter)`) |
| **Duration** | `var(--duration-normal)` (200ms) |
| **Opacity** | 0 → 1 |
| **Transform** | `translateY(var(--space-1))` → `translateY(0)` |
| **Max-height** | 0 → measured height (Enter easing, `duration-normal`) |

The `max-height` animation ensures content below the alert reflows smoothly rather than jumping. The small 4px downward translate telegraphs "something new appeared here" without the dramatic spatial movement of a toast.

### 8.2 Exit (Dismissible Alert Dismissed)

| Property | Value |
|----------|-------|
| **Easing** | Exit (`var(--ease-exit)`) |
| **Duration** | `var(--duration-fast)` (120ms) |
| **Opacity** | 1 → 0 |
| **Transform** | None (fade only) |
| **Max-height** | Measured → 0 (Exit easing, `duration-fast`) |
| **Margin/padding** | Animate to 0 simultaneously |

Exit is faster than enter and uses fade only — the user initiated the dismiss and already knows what is leaving. No directional motion needed.

### 8.3 Reduced Motion

| Pattern | Default | Reduced motion |
|---------|---------|----------------|
| Enter | opacity + translateY + max-height, 200ms | opacity only, `duration-fast` (120ms). No translate. Max-height instant. |
| Exit | opacity + max-height, 120ms | Instant removal (0ms). No fade, no height animation. |
| Dismiss hover | Background color, `duration-fast` | Background color, instant. |
| Dismiss active | scale(0.95) + color | Color only, instant. No scale. |

---

## 9. Icon Integration

| State | Icon name | Size token | Color token |
|-------|-----------|------------|-------------|
| Info | `info-circle` (outlined) | `--icon-md` (20px) | `var(--color-info-base)` |
| Warning | `warning-triangle` (outlined) | `--icon-md` (20px) | `var(--color-warning-base)` |
| Error | `error-circle` (outlined) | `--icon-md` (20px) | `var(--color-error-base)` |
| Success | `check-circle` (outlined) | `--icon-md` (20px) | `var(--color-success-base)` |

Icons use the outlined/stroke category with 2px primary strokes. At `icon-md` (20px), the icon is proportional to the `text-sm` (14px) message text — slightly larger, giving it visual weight as the leading element. The icon vertically aligns to the first line of message text (`align-items: flex-start` with top padding), not centered to the full container height.

---

## 10. Accessibility

### WCAG Success Criteria

| Criterion | How met |
|-----------|---------|
| **SC 1.3.1** (Info and Relationships) | `role="alert"` (error, warning) or `role="status"` (info, success) conveys function programmatically |
| **SC 1.4.1** (Use of Color) | Icon + text label + color — never color alone. Triple-cue on all states |
| **SC 1.4.3** (Contrast) | Message text: 6.36–9.25:1 on feedback backgrounds (exceeds AA). Description text: 11.55–11.72:1 (exceeds AAA) |
| **SC 1.4.11** (Non-text Contrast) | Left accent uses `*-base` tokens: 3.37–4.39:1. Icons: 3.37–4.39:1. All pass 3:1 |
| **SC 2.4.11** (Focus Appearance) | Focus ring at 3.68–3.73:1 on all feedback backgrounds |
| **SC 2.5.8** (Target Size) | Dismiss button: 44×44px interactive area |
| **SC 4.1.3** (Status Messages) | `aria-live` regions: `polite` for info/success, `assertive` for error/warning |

### Contrast Verification — Message Text on Feedback Backgrounds

| State | Ratio | Level |
|-------|-------|-------|
| Error text on error-bg | 6.66:1 | AA |
| Warning text on warning-bg | 6.36:1 | AA |
| Success text on success-bg | 9.25:1 | AAA |
| Info text on info-bg | 7.63:1 | AAA |

### Contrast Verification — Left Accent Border on Feedback Backgrounds (SC 1.4.11)

| State | Ratio | Level |
|-------|-------|-------|
| Error-base on error-bg | 4.39:1 | PASS |
| Warning-base on warning-bg | 4.34:1 | PASS |
| Success-base on success-bg | 3.37:1 | PASS |
| Info-base on info-bg | 4.02:1 | PASS |

### Color-Blind Considerations

- The four feedback hues (H:25 error, H:80–85 warning, H:160 success, H:235 info) are maximally spread across the hue wheel.
- Under deuteranopia/protanopia, success green may merge with teal/sage. The mandatory checkmark icon and text label provide non-color differentiation.
- All four states use triple-cue (color + icon + text), ensuring state identification under all color vision conditions.

---

## 11. CSS Implementation Reference

```
.alert                    — base container
.alert--info              — info variant
.alert--warning           — warning variant
.alert--error             — error variant
.alert--success           — success variant
.alert--dismissible       — adds right padding for dismiss button
.alert__icon              — status icon
.alert__content           — text wrapper (message + description)
.alert__message           — primary message text
.alert__description       — optional secondary description
.alert__dismiss           — dismiss button
```

Full implementation: `src/css/components/alert.css`
