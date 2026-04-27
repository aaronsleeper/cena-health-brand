# Cena Health — Modal Component Spec

_Design specification for the Modal (dialog) component. All values reference named semantic tokens._

---

## 1. Overview

Modals interrupt the current task to present critical information or collect a response. They are the system's highest-attention UI pattern — a modal says "this cannot wait." In clinical contexts, modals gate destructive actions (delete care plan, discharge patient), collect required input (confirm dosage, add allergy), and present information that demands acknowledgment (lab result alert, compliance warning).

**Use sparingly.** Every modal is an interruption. If the content can live inline or in a panel, it should.

**Variants:** Default, Danger (destructive confirmation)
**Sizes:** Small (400px), Default (520px), Large (640px)

---

## 2. Anatomy

```
┌──── Backdrop (dark overlay) ──────────────────────────┐
│                                                        │
│   ┌──── Modal Container ─────────────────────────┐    │
│   │                                               │    │
│   │  ┌─ Header ────────────────────────────────┐ │    │
│   │  │  Title                           [×]    │ │    │
│   │  │  Optional description                   │ │    │
│   │  └─────────────────────────────────────────┘ │    │
│   │                                               │    │
│   │  ┌─ Body (scrollable) ─────────────────────┐ │    │
│   │  │                                         │ │    │
│   │  │  Content area                           │ │    │
│   │  │                                         │ │    │
│   │  └─────────────────────────────────────────┘ │    │
│   │                                               │    │
│   │  ┌─ Footer ────────────────────────────────┐ │    │
│   │  │            [Cancel]  [Confirm]          │ │    │
│   │  └─────────────────────────────────────────┘ │    │
│   │                                               │    │
│   └───────────────────────────────────────────────┘    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Parts

- **Backdrop:** Semi-transparent dark overlay covering the entire viewport.
- **Container:** The modal panel — `surface-page` background, warm shadow, rounded corners.
- **Header:** Title, optional description, close button. Separated from body by a subtle border.
- **Body:** Scrollable content area. Can hold text, forms, alerts, or any component.
- **Footer:** Action buttons, right-aligned. Primary action on the right. Separated from body by a subtle border.
- **Close button:** Always present in the top-right corner. Icon-only button with `aria-label`.

---

## 3. Sizing

| Size | Max-width | Use when |
|------|-----------|----------|
| **Small** | 25rem (400px) | Simple confirmations, short messages, single-field input |
| **Default** | 32.5rem (520px) | Standard dialogs, forms with 2-4 fields, detail views |
| **Large** | 40rem (640px) | Complex forms, multi-section content, data review |

All sizes have a minimum margin of `space-6` from viewport edges. On mobile (<600px), all modals become full-width with `space-4` margin.

Max-height: `calc(100vh - space-12)`. Body scrolls when content exceeds available height.

---

## 4. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` (`#FBFAF8`) |
| **Border** | 1px `color-border-default` |
| **Border radius** | `radius-lg` (12px) |
| **Shadow** | `shadow-lg` — modals are floating elements, shadow is appropriate |
| **Overflow** | Hidden on container; scroll on body |

### Backdrop

| Property | Value |
|----------|-------|
| **Background** | `oklch(20% 0.01 70 / 50%)` — warm dark at 50% opacity |
| **Blur** | None — backdrop blur creates performance issues and feels decorative |

### Header

| Property | Value |
|----------|-------|
| **Padding** | `space-5` horizontal, `space-4` vertical |
| **Border bottom** | 1px `color-border-default` |
| **Title** | Lora, `text-lg` (25px), SemiBold 600, `color-text-primary` |
| **Description** | Source Sans 3, `text-sm` (14px), Regular 400, `color-text-secondary` |
| **Title-to-description gap** | `space-1` |

### Body

| Property | Value |
|----------|-------|
| **Padding** | `space-5` horizontal, `space-4` vertical |
| **Font** | Inherits from content within |
| **Overflow-y** | `auto` — scrolls when content exceeds max-height |
| **Max-height** | Fills available space between header and footer |

### Footer

| Property | Value |
|----------|-------|
| **Padding** | `space-5` horizontal, `space-4` vertical |
| **Border top** | 1px `color-border-default` |
| **Alignment** | `justify-content: flex-end` |
| **Button gap** | `space-3` |

### Close Button

| Property | Value |
|----------|-------|
| **Size** | 2.75rem × 2.75rem (44px — WCAG touch target) |
| **Icon** | × at `icon-sm` (16px) |
| **Position** | Top-right corner of header |
| **Color** | `color-text-secondary` at 70% opacity |
| **Hover** | 100% opacity, `color-surface-secondary` background |
| **Focus** | Standard focus ring |

---

## 5. Variant: Danger

For destructive confirmations (delete, discharge, remove). Uses the same anatomy with color overrides in the header.

| Property | Danger value |
|----------|-------------|
| **Header border-bottom** | `color-error-border` |
| **Title color** | `color-error-text` |
| **Primary action** | `.btn-danger` instead of `.btn-primary` |

The danger variant does NOT tint the entire modal — only the header signals danger. The body and footer remain neutral. This prevents the modal from feeling alarming before the user has read the content.

---

## 6. Motion Behavior

### 6.1 Enter

Per motion.md §1.1 (Enter easing) and §2 (durations):

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Container** | opacity 0→1, translateY(`space-4`)→translateY(0) |
| **Backdrop** | opacity 0→1, `duration-normal` |

The modal arrives from slightly below (not above — downward entry feels like gravity, which contradicts the organic-settle metaphor). It settles into its centered position.

### 6.2 Exit

Per motion.md §1.2 (Exit easing):

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-fast` (120ms) |
| **Container** | opacity 1→0, scale(1)→scale(0.98) |
| **Backdrop** | opacity 1→0, `duration-fast` |

Exit is faster than enter (clinical brevity). The slight scale-down creates a receding effect without translation.

### 6.3 Reduced Motion

- Container: instant show/hide, no transform or opacity animation.
- Backdrop: instant show/hide.

---

## 7. Interaction

### Open
- Content behind modal is inert (`aria-hidden="true"` on main content, or `inert` attribute).
- Focus moves to the first focusable element inside the modal (typically the close button or first form field).
- Body scroll is locked while modal is open.

### Close triggers
- Close button (×)
- Cancel / secondary button in footer
- `Escape` key
- Backdrop click (except on danger variant — accidental dismissal of destructive confirmation is unsafe)

### Focus management
- Focus is trapped within the modal while open.
- Tab cycles through focusable elements; Shift+Tab cycles backward.
- On close, focus returns to the element that triggered the modal.

---

## 8. Accessibility

1. **`role="dialog"` and `aria-modal="true"`** on the modal container.
2. **`aria-labelledby`** pointing to the title element.
3. **`aria-describedby`** pointing to the description element (if present).
4. **Close button has `aria-label="Close"`.**
5. **Focus trap** — keyboard focus cannot leave the modal while it is open.
6. **Focus return** — when the modal closes, focus returns to the trigger element.
7. **Escape key** closes the modal (except danger variant on some implementations).
8. **No autofocus on destructive actions** — danger modals should focus the cancel button or close button, never the destructive action button.

---

## 9. On Different Surfaces

Modals always use `surface-page` as their background regardless of the page surface beneath them. The backdrop overlay normalizes whatever surface the modal sits above.

---

## 10. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.modal-backdrop` | Semi-transparent overlay |
| `.modal` | Container / dialog panel |
| `.modal-sm` | Small size (400px) |
| `.modal-lg` | Large size (640px) |
| `.modal-danger` | Danger variant header styling |
| `.modal-header` | Header section |
| `.modal-title` | Title text |
| `.modal-description` | Optional description text |
| `.modal-close` | Close button |
| `.modal-body` | Scrollable content area |
| `.modal-footer` | Action button row |
| `.modal-enter` | Enter animation class |
| `.modal-exiting` | Exit animation class |
| `.modal-backdrop-enter` | Backdrop enter animation |
| `.modal-backdrop-exiting` | Backdrop exit animation |
