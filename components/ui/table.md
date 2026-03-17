# Cena Health — Table Component Spec

_Design specification for data tables. Clinical dashboards, patient lists, lab results. All values reference named semantic tokens._

---

## 1. Overview

Tables present structured data in rows and columns. In Cena Health, tables appear in clinical dashboards (patient lists, lab results), administrative views (enrollment reports), and care plan detail views (meal plans, check-in history). Tables default to compact density for data-heavy contexts but inherit density from their parent.

**Variants:** Default, Striped, Bordered
**Features:** Sortable headers, row hover, row selection, sticky header

---

## 2. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Border** | 1px `color-border-default` |
| **Border radius** | `radius-md` (8px) |
| **Overflow** | Hidden (clips to border radius) + horizontal scroll wrapper |
| **Background** | `color-surface-page` |

### Header Row

| Property | Value |
|----------|-------|
| **Background** | `color-surface-primary` |
| **Border-bottom** | 1px `color-border-strong` |
| **Font** | Source Sans 3, `text-xs` (13px), SemiBold 600 |
| **Color** | `color-text-secondary` |
| **Letter spacing** | `tracking-wider` |
| **Padding** | `space-2` vertical × `space-4` horizontal |
| **Text transform** | None (sentence case) |

### Body Cell

| Property | Value |
|----------|-------|
| **Font** | Source Sans 3, `text-sm` (14px), Regular 400 |
| **Color** | `color-text-primary` |
| **Padding** | `space-2` vertical × `space-4` horizontal |
| **Border-bottom** | 1px `color-border-default` |
| **Vertical align** | Middle |

### Last Row

No bottom border on the last row (the container border handles it).

---

## 3. Variants

### Striped

Alternating row backgrounds for improved scanability in long tables.

| Row | Background |
|-----|-----------|
| **Even** | `color-surface-page` |
| **Odd** | `color-surface-primary` |

### Bordered

All cells have visible borders for dense data where column alignment is critical.

| Property | Value |
|----------|-------|
| **Vertical borders** | 1px `color-border-default` between columns |

---

## 4. States

### Row Hover

| Property | Value |
|----------|-------|
| **Background** | `color-surface-secondary` |
| **Transition** | `duration-fast`, Transition easing |

### Sortable Header

| State | Indicator |
|-------|-----------|
| **Unsorted** | No indicator |
| **Ascending** | ▲ arrow after header text, `color-text-brand` |
| **Descending** | ▼ arrow after header text, `color-text-brand` |
| **Hover** | `color-text-primary` (from `color-text-secondary`) |

### Row Selection (optional)

| State | Left border | Background |
|-------|-------------|-----------|
| **Selected** | 2px `color-primary` | `color-surface-teal` at 30% opacity |

---

## 5. Sticky Header

When the table scrolls vertically, the header row remains fixed at the top of the scroll container.

| Property | Value |
|----------|-------|
| **Position** | `sticky`, `top: 0` |
| **Z-index** | 10 |
| **Shadow** | 0 1px 0 `color-border-default` (subtle line shadow on scroll) |

---

## 6. Responsive

On viewports < 600px, tables scroll horizontally within their container. A subtle fade/shadow on the right edge indicates more content.

---

## 7. Accessibility

1. **Use `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`** — semantic HTML.
2. **`<th scope="col">`** on header cells.
3. **Sortable headers** use `aria-sort="ascending"` / `"descending"` / `"none"`.
4. **`<caption>`** or `aria-label` on the table for screen reader context.
5. **Row selection** uses `aria-selected="true"` on selected `<tr>`.

---

## 8. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.table-wrapper` | Scroll container with border radius |
| `.table` | Base table element |
| `.table-striped` | Alternating row backgrounds |
| `.table-bordered` | Vertical cell borders |
| `.table-hover` | Row hover highlight |
| `.table-sticky` | Sticky header |
| `.table-sort` | Sortable header cell |
| `.table-sort-asc` | Ascending sort indicator |
| `.table-sort-desc` | Descending sort indicator |
| `.table-row-selected` | Selected row styling |
