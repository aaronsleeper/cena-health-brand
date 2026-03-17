# Cena Health — Chat Bubble Component Spec

_Design specification for chat bubbles. All values reference named semantic tokens._

---

## 1. Overview

Chat bubbles display user and AI messages in a conversation thread. User messages align right with brand fill. AI messages align left with a card-like container and avatar.

---

## 2. Visual Properties

### User Bubble
| Property | Value |
|----------|-------|
| **Background** | `color-primary` |
| **Color** | `color-on-primary` (white) |
| **Padding** | `space-3` |
| **Border-radius** | `radius-xl`, top-right: 0 |
| **Max-width** | 80% |
| **Shadow** | `shadow-sm` |

### AI Bubble
| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` |
| **Border** | 1px `color-border-default` |
| **Padding** | `space-4` |
| **Border-radius** | `radius-xl`, top-left: 0 |
| **Max-width** | 80% |
| **Shadow** | `shadow-sm` |

### AI Avatar
| Property | Value |
|----------|-------|
| **Size** | 2rem × 2rem |
| **Shape** | Circle |
| **Background** | `color-surface-teal` |
| **Color** | `color-text-brand` |
| **Font** | `text-xs`, Bold |

### Message Metadata
| Class | Style |
|-------|-------|
| `.message-sender-label` | `text-xs`, `color-text-tertiary` |
| `.message-date-sep` | `text-xs`, `color-text-tertiary`, centered |
| `.message-timestamp` | `text-xs`, `color-text-tertiary` |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.chat-bubble-user` | User message bubble |
| `.chat-bubble-ai` | AI message bubble |
| `.chat-avatar-ai` | AI avatar circle |
| `.message-sender-label` | Sender name label |
| `.message-date-sep` | Date separator |
| `.message-timestamp` | Timestamp below message |
