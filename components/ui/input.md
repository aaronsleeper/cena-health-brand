# Cena Health — Input Field Component Spec

_Design specification for the text input field component, including validation states. All values reference named semantic tokens._

---

## 1. Overview

The input field is the primary data entry point in the Cena Health system. It appears in clinical forms (care plan entry, patient data), enrollment flows, search, and administrative interfaces. The design prioritizes legibility and clear state communication — in healthcare contexts, ambiguous input states are not a UX inconvenience, they are a potential safety issue.

**Types covered:** Text, Email, Password, Number, Search, Textarea
**States:** Default, Hover, Focus, Filled, Error, Success, Disabled, Read-only

---

## 2. Anatomy

```
  Label Text                    (optional: Required indicator)
┌──────────────────────────────────────────────┐
│  [leading icon]  Placeholder / Value  [trailing icon/action] │
└──────────────────────────────────────────────┘
  Helper text / Error message   (optional: Character count)
```

- **Label:** Required for all inputs. Source Sans 3, UI label style.
- **Container:** Rounded rectangle with `radius-sm` (4px).
- **Input text:** Source Sans 3, `text-base` (16px), Regular 400.
- **Placeholder text:** Same face and size, `color-text-tertiary` (#6B645C).
- **Leading icon:** Optional. `icon-sm` (20px). For search, type indicators.
- **Trailing icon/action:** Optional. `icon-sm`. For clear, toggle visibility, validation indicator.
- **Helper text:** Optional. Below the container. Source Sans 3, `text-xs` (13px), `color-text-secondary`.
- **Error message:** Replaces helper text when in error state. Same size, `color-error-text`.
- **Character count:** Optional. Aligned right below container.

---

## 3. Sizing

| Size | Container height | Container padding (V × H) | Font size | Label size | Icon size |
|------|-----------------|---------------------------|-----------|------------|-----------|
| **Default** | 44px | `space-3` × `space-4` (12px × 16px) | `text-base` (16px) | `text-sm` (14px) | `icon-sm` (20px) |
| **Small** | 36px | `space-2` × `space-3` (8px × 12px) | `text-sm` (14px) | `text-xs` (13px) | `icon-xs` (16px) |

**Why 44px default height:** Meets the WCAG 2.5.8 minimum touch target without hit area expansion. The 16px input text on a 44px container with 12px vertical padding produces comfortable vertical centering.

**Why no Large size:** Input fields at body text size (16px) are already at the health equity minimum. Larger text in inputs creates a mismatch with surrounding body content. If a larger input is needed for patient-facing contexts, use the Default size within the comfortable density tier, which adds spatial generosity around the same-sized input.

---

## 4. Spacing

### Label-to-Input

**Gap:** `stack-sm` (`space-2`, 8px)

The label sits directly above its input, left-aligned. The 8px gap is tight enough to create clear association (Gestalt proximity) while providing enough space that the label does not visually merge with the input border.

### Input-to-Helper Text

**Gap:** `stack-xs` (`space-1`, 4px)

Tighter than label-to-input. Helper text is metadata about the input — it belongs to the input more closely than the label does.

### Field-to-Field (Vertical Stacking)

**Gap:** `stack-lg` (`space-6`, 24px)

Between complete field groups (label + input + helper). This gap must be at least two scale steps larger than the label-to-input gap to maintain clear proximity grouping (per spacing.md §4.3).

### Field-to-Field (Horizontal / Side-by-Side)

**Gap:** `inline-lg` (`space-4`, 16px)

Used for short fields side by side (e.g., First Name / Last Name). On mobile (<600px), side-by-side fields stack vertically.

### Required Indicator

An asterisk `*` in `color-error-base` (#C13C3B) appears after the label text with `inline-xs` (`space-1`, 4px) gap. Alternatively, mark optional fields with "(optional)" in `color-text-tertiary` — choose one convention per form and apply consistently.

---

## 5. States

### 5.1 Default (Resting)

| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` (`#FBFAF8`) |
| **Border** | 1px `color-border-strong` (`#857E75`) |
| **Text** | `color-text-primary` (`#0D322D`) |
| **Placeholder** | `color-text-tertiary` (`#6B645C`) |
| **Icon** | `color-text-secondary` (`#5B544C`) |

**Why `color-border-strong`:** The input border is the sole boundary indicator (no background color difference from page on `surface-page`). Per color.md §2.5, sole-boundary borders must use `color-border-strong` which passes 3:1 non-text contrast on all surfaces.

### 5.2 Hover

| Property | Value |
|----------|-------|
| **Border** | 1px `color-border-focus` (`#3A8478`) |
| **All other properties** | Same as Default |

### 5.3 Focus

| Property | Value |
|----------|-------|
| **Border** | 2px `color-border-focus` (`#3A8478`) |
| **Box shadow** | `0 0 0 space-0.5 oklch(56.3% 0.0762 181.3 / 15%)` — teal-500 at 15% opacity, 2px spread |
| **Background** | `color-surface-page` |

The border thickens from 1px to 2px on focus. To prevent layout shift, use `outline` or an inset box-shadow technique rather than changing border-width, or compensate with adjusted padding.

### 5.4 Filled (Value Entered, Not Focused)

| Property | Value |
|----------|-------|
| **Border** | 1px `color-border-strong` (`#857E75`) |
| **Text** | `color-text-primary` (`#0D322D`) |
| **All other properties** | Same as Default |

Identical to Default except the value text replaces placeholder text. The input does not visually distinguish between "filled" and "default" beyond the presence of a value — this is intentional. No persistent highlight for filled state prevents visual noise in forms with many fields.

### 5.5 Error

| Property | Value |
|----------|-------|
| **Border** | 2px `color-error-border` (`#D87972`) |
| **Background** | `color-surface-page` (no persistent tint — the motion pulse handles the attention moment) |
| **Label** | `color-text-primary` (unchanged) |
| **Helper text** | Replaced by error message in `color-error-text` (`#932B2A`) |
| **Trailing icon** | Error icon (`status-error`) in `color-error-base` (`#C13C3B`) at `icon-sm` |

**Error message format:** Lead with what's wrong and what to fix: "Enter a valid email address" not "Invalid input." Use sentence case, no period.

**Accessibility:** Error messages are announced via `aria-describedby` linking the input to the error text element. The input receives `aria-invalid="true"`.

### 5.6 Success (Validated)

| Property | Value |
|----------|-------|
| **Border** | 1px `color-success-border` (`#4F9870`) |
| **Trailing icon** | Checkmark (`status-success`) in `color-success-base` (`#3A8E64`) at `icon-sm` |
| **Helper text** | Optional confirmation in `color-success-text` (`#174430`) |

Success state is transient — it confirms validation and then reverts to the Filled state after 2 seconds or when the user moves to the next field. Success feedback must always include the checkmark icon; never rely on border color alone (per color.md §4, color-blind considerations).

### 5.7 Disabled

| Property | Value |
|----------|-------|
| **Background** | `color-surface-secondary` (`#E7E4DF`) |
| **Border** | 1px `color-border-default` (`#D1CDC6`) |
| **Text** | `color-text-disabled` (`#958E85`) |
| **Cursor** | `not-allowed` |

Disabled inputs are not focusable. `aria-disabled="true"` and `tabindex="-1"`.

### 5.8 Read-Only

| Property | Value |
|----------|-------|
| **Background** | `color-surface-primary` (`#F3F1EE`) |
| **Border** | None |
| **Text** | `color-text-primary` (`#0D322D`) |

Read-only inputs look like content, not like inputs. The removal of the border signals "you cannot edit this." They remain focusable and selectable for copy purposes.

---

## 6. Motion Behavior

### 6.1 Focus Transition

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-fast` (120ms) |
| **Properties animated** | `border-color`, `box-shadow` |

Per motion.md §3.7. The transition is calm — the field signals readiness without demanding attention.

### 6.2 Error Validation Pulse

When an error state is triggered (on blur or on submit):

| Property | Value |
|----------|-------|
| **Easing** | Transition (`cubic-bezier(0.25, 0.1, 0.25, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Border** | Transitions to `color-error-border` |
| **Background pulse** | Brief flash of `color-error-bg` (`#FCE5E3`) at 50% opacity, then fades back to transparent over an additional `duration-normal` (200ms) |

The pulse draws the eye. The persistent state (error border + error message + error icon) holds the information.

### 6.3 Success Confirmation

| Property | Value |
|----------|-------|
| **Easing** | Emphasis (`cubic-bezier(0.34, 1.3, 0.64, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Icon** | Checkmark scales from 0.7 → 1.0 with Emphasis micro-overshoot (~1.02 then settle) |
| **Border** | Transitions to `color-success-border` with Transition easing |

### 6.4 Reduced Motion

Under `prefers-reduced-motion: reduce`:
- Focus: Border color change only, instant.
- Error: Border color change only, instant. No background pulse.
- Success: Icon appears fully formed, instant. No scale animation.

---

## 7. Textarea Variant

For multi-line text input (care plan notes, clinical documentation).

| Property | Value |
|----------|-------|
| **Min height** | 3 lines of body text (~72px at default) |
| **Max height** | Defined by context; scrolls beyond max |
| **Resize** | Vertical only (`resize: vertical`) |
| **Padding** | `inset-asym-md` (12px × 16px) |
| **Line height** | `leading-body` (1.55) — matches body text |

All states, colors, borders, and motion behaviors are identical to the standard input.

---

## 8. On Tinted Surfaces

| Surface | Background adjustment | Border adjustment |
|---------|----------------------|-------------------|
| `surface-page` | No change | No change |
| `surface-primary` | Input bg: `color-surface-page` (creates contrast with card) | No change |
| `surface-teal` | Input bg: `color-surface-page` | Hover/focus border may need stronger contrast — use `color-primary` (#1B685E) for focus border |
| `surface-sage` | Input bg: `color-surface-page` | No change |

The input always uses `surface-page` as its background — even on elevated surfaces. This creates a recessed, paper-white field against the surface, mimicking the physical experience of a form printed on slightly tinted paper.

---

## 9. Accessibility

1. **Every input has a visible label.** Placeholder text is not a substitute for labels. Labels use `<label>` with `for` attribute or wrap the input.
2. **Error messages use `aria-describedby`.** The input's `aria-describedby` references both helper text and error message IDs. Error messages are live-announced via `aria-live="polite"` on the container or `role="alert"` on the error text.
3. **`aria-invalid="true"`** is set on inputs in error state.
4. **`aria-required="true"`** on required fields.
5. **Color is never the sole indicator of state.** Error uses border + icon + text message. Success uses border + icon. Disabled uses background change + border change + opacity.
6. **Minimum text size:** Input text at 16px meets the health equity minimum. Never reduce input text below `text-sm` (14px), and only at the Small size variant.

---

## 10. Density Behavior

Inputs inherit the active density tier. Padding tokens scale automatically:

| Property | Compact | Default | Comfortable |
|----------|---------|---------|-------------|
| Container V × H | 8px × 12px | 12px × 16px | 16px × 20px |
| Container height | 36px | 44px | 52px |
| Label-to-input gap | 6px | 8px | 10px |
| Input-to-helper gap | 4px | 4px | 4px |
| Field-to-field gap | 16px | 24px | 32px |

Font size, font weight, border radius, and color do not change with density.

---

## 11. CSS Implementation Reference

```css
.input-field {
  font-family: var(--font-body);
  font-size: var(--text-base);               /* 16px */
  font-weight: 400;
  line-height: 1.55;
  color: var(--color-text-primary);
  background-color: var(--color-surface-page);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);            /* 4px */
  padding: var(--space-3) var(--space-4);     /* 12px 16px */
  min-height: 2.75rem;                        /* 44px */
  width: 100%;
  transition:
    border-color var(--duration-fast) cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow var(--duration-fast) cubic-bezier(0.25, 0.1, 0.25, 1);
}

.input-field::placeholder {
  color: var(--color-text-tertiary);          /* #6B645C */
}

.input-field:hover {
  border-color: var(--color-border-focus);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 var(--space-0-5) oklch(56.3% 0.0762 181.3 / 15%);
}

.input-field--error {
  border-color: var(--color-error-border);
  border-width: 2px;
}

.input-field:disabled {
  background-color: var(--color-surface-secondary);
  border-color: var(--color-border-default);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.input-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: 1.20;
  letter-spacing: 0.01em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);              /* 8px */
}

.input-helper {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: 1.45;
  color: var(--color-text-secondary);
  margin-top: var(--space-1);                 /* 4px */
}

.input-error-msg {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: 1.45;
  color: var(--color-error-text);
  margin-top: var(--space-1);
}

@media (prefers-reduced-motion: reduce) {
  .input-field {
    transition-duration: 0ms;
  }
}
```

_Partial reference — covers core patterns; full implementation extends for all states and variants._
