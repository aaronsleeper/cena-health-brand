# Cena Health — Avatar Component Spec

_Design specification for avatars. All values reference named semantic tokens._

---

## 1. Overview

User avatars with image, initials fallback, and optional status indicator. Supports individual avatars and stacked avatar groups.

---

## 2. Sizes

| Size | Class | Dimensions |
|------|-------|-----------|
| sm | `.avatar-sm` | 2rem (32px) |
| default | `.avatar` | 2.5rem (40px) |
| lg | `.avatar-lg` | 3rem (48px) |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.avatar` | Base circle with image or initials |
| `.avatar-sm` / `.avatar-lg` | Size variants |
| `.avatar-initials` | Initials fallback (teal surface) |
| `.avatar-group` | Stacked overlapping group |
| `.avatar-status` | Status dot indicator |
