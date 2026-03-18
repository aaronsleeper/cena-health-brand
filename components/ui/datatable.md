# Datatable

Enhanced table with client-side search, column sort, entries-per-page selector, and pagination. Built on top of `.table` and `.table-wrapper`. Vanilla JS only — no DataTables.js.

## Classes

| Class | Purpose |
|---|---|
| `datatable-wrapper` | Outer wrapper for the full control |
| `datatable-controls` | Top row: entries selector + search |
| `datatable-entries` | Left: "Show N entries" label + select |
| `datatable-entries-label` | "Show" text |
| `datatable-entries-select` | The select element |
| `datatable-search` | Right: search box wrapper |
| `datatable-footer` | Bottom row: info text + pagination |
| `datatable-info` | "Showing 1 to 10 of 47 entries" |
| `datatable-pagination` | Page buttons container |
| `datatable-page-btn` | Individual page button |
| `datatable-page-btn.active` | Current page |
| `datatable-empty` | "No matching records found" row |

## Behavior

- **Search**: filters visible rows as the user types (debounced 150ms)
- **Sort**: toggle asc/desc on th click, update aria-sort, re-render
- **Entries**: change page size on select change, reset to page 1
- **Pagination**: prev/next/page number controls
- **Info text**: "Showing X to Y of Z entries" (or "Z filtered from N total")

## Design values

- Controls row: flex, space-between, gap space-4, margin-bottom space-3
- Entries select: reuse `.select-cena` pattern
- Search: reuse `.search-box` component
- Footer: flex, space-between, margin-top space-3
- Info text: text-sm, color-text-secondary
- Pagination: reuse `.pagination-btn` from pagination.css
- Empty row: centered, text-tertiary, text-sm, padding space-8
- Touch targets: 44x44px minimum on pagination buttons
