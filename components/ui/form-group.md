# Cena Health — Form Group Component Spec

_Design specification for form layout patterns. Builds on the field primitives in input.css to provide section-level form structure. All values reference named semantic tokens._

---

## 1. Overview

Form groups organize multiple fields into logical sections within a form. In clinical contexts, forms are the primary interaction surface — care plan entry, patient enrollment, assessment questionnaires. Clear sectioning reduces cognitive load and error rates.

This component provides structural containers; the individual field primitives (`.field`, `.field-row`, `.input-field`, `.input-label`) remain in input.css.

**Parts:** Form container, Form section (fieldset), Section heading, Form actions, Form error summary

---

## 2. Anatomy

```
┌─── Form ──────────────────────────────────────────┐
│                                                     │
│  ┌─ Error Summary (if validation failed) ────────┐ │
│  │  [!] 3 errors need your attention:             │ │
│  │  • Enter a valid email address                 │ │
│  │  • Date of birth is required                   │ │
│  │  • Select at least one condition               │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
│  ┌─ Section ──────────────────────────────────────┐ │
│  │  PATIENT INFORMATION                  (legend) │ │
│  │                                                │ │
│  │  [First name]  [Last name]        (field-row)  │ │
│  │  [Email address]                  (field)      │ │
│  │  [Date of birth]                  (field)      │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
│  ┌─ Section ──────────────────────────────────────┐ │
│  │  CLINICAL DETAILS                              │ │
│  │                                                │ │
│  │  [Primary condition]              (field)      │ │
│  │  [Notes]                          (textarea)   │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
│  ┌─ Actions ──────────────────────────────────────┐ │
│  │                    [Cancel]  [Submit]           │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 3. Visual Properties

### Form Container

| Property | Value |
|----------|-------|
| **Display** | `flex`, column |
| **Gap** | `space-8` between sections |
| **Max-width** | Contextual — typically 36rem (576px) for single-column forms |

### Form Section (Fieldset)

| Property | Value |
|----------|-------|
| **Display** | `flex`, column |
| **Border** | None by default (sections are separated by gap alone) |
| **Padding** | 0 |

### Section Legend / Heading

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-2xs` (10px), SemiBold 600, uppercase |
| **Letter spacing** | `tracking-widest` (0.08em) |
| **Color** | `color-text-tertiary` |
| **Padding-bottom** | `space-4` |
| **Border-bottom** | 1px `color-border-default` |
| **Margin-bottom** | `space-4` |

### Form Actions

| Property | Value |
|----------|-------|
| **Display** | `flex`, right-aligned |
| **Gap** | `space-3` between buttons |
| **Padding-top** | `space-6` |
| **Border-top** | 1px `color-border-default` |

### Error Summary

| Property | Value |
|----------|-------|
| **Background** | `color-error-bg` |
| **Border** | 1px `color-error-border` |
| **Border-left** | 3px `color-error-base` |
| **Border radius** | `radius-md` |
| **Padding** | `space-3` vertical × `space-4` horizontal |
| **Title** | Source Sans 3, `text-sm`, SemiBold 600, `color-error-text` |
| **List items** | Source Sans 3, `text-sm`, Regular 400, `color-error-text` |
| **List gap** | `space-1` between items |

---

## 4. Accessibility

1. **Use `<fieldset>` and `<legend>`** for form sections. The legend provides a programmatic group label.
2. **Error summary uses `role="alert"`** so it is announced immediately when form validation fails.
3. **Error summary links** — each error item should link to the corresponding field via anchor.
4. **Focus management** — on validation failure, focus moves to the error summary.

---

## 5. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.form` | Form container |
| `.form-section` | Fieldset-level grouping |
| `.form-legend` | Section heading / legend |
| `.form-actions` | Button row at form bottom |
| `.form-error-summary` | Validation error summary block |
| `.form-error-list` | List of error items within summary |
