# Cena Health — KV Table Component Spec

_Design specification for key-value tables. All values reference named semantic tokens._

---

## 1. Overview

KV tables display label-value pairs in a two-column table format. Used on detail pages for patient demographics, enrollment data, and other structured metadata.

---

## 2. Visual Properties

| Property | Value |
|----------|-------|
| **Display** | `block`, full width |
| **Row border** | 1px bottom `color-border-default` (last row: none) |
| **Key cell** | `text-sm`, Semibold 600, `color-text-tertiary`, right padding `space-4` |
| **Value cell** | `text-sm`, Normal 400, `color-text-primary` |
| **Cell padding** | `space-2` vertical |

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.kv-table` | `<table>` with key-value pair styling |
