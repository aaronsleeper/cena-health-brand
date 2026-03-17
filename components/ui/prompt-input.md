# Cena Health — Prompt Input Component Spec

_Design specification for prompt input. All values reference named semantic tokens._

---

## 1. Overview

A textarea with auto-resize, toolbar, and focus ring on the container (not the textarea). Used for AI chat input, clinical note entry, and other multi-line text areas that need a toolbar below.

---

## 2. Visual Properties

### Container
| Property | Value |
|----------|-------|
| **Border** | 1px `color-border-default`, `radius-lg` |
| **Background** | `color-surface-page` |
| **Shadow** | `shadow-sm` |
| **Focus-within** | border `color-border-focus`, focus ring glow |

### Textarea
| Property | Value |
|----------|-------|
| **Padding** | `space-4` |
| **Font** | `text-sm`, Normal |
| **Border** | none (container handles border) |
| **Resize** | none, uses `field-sizing: content` for auto-resize |
| **Max-height** | 18.75rem (300px) |

### Toolbar
| Property | Value |
|----------|-------|
| **Padding** | `space-2` horizontal × `space-3` vertical |
| **Layout** | Flex row, gap, centered |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.prompt-input-container` | Outer wrapper with border + focus ring |
| `.prompt-textarea` | Styled textarea |
| `.prompt-toolbar` | Bottom toolbar area |
