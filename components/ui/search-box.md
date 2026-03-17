# Search Box

## Purpose

A search input with a leading search icon, a clear button that appears when there
is input, and an optional dropdown results list. Distinct from Combobox (no selection
model) and Toolbar search (richer interaction model).

## When to use

- Patient search in headers or toolbars
- Filtering a known dataset with instant results
- Search-as-you-type with preview results

## When not to use

- Multi-select from search results — use Combobox
- Full-page search with pagination — use a dedicated search page

## Anatomy

```
.search-box
  .search-box-icon          (leading search icon, absolute)
  .search-box-input         (the input field)
  .search-box-clear         (× clear button, absolute right)
  .search-box-results
    .search-box-result-item
      .search-box-result-item-label
      .search-box-result-item-meta
    .search-box-empty        ("No results" state)
```

## Classes

| Class | Purpose |
|---|---|
| `.search-box` | Relative wrapper |
| `.search-box-input` | The input — left/right padding for icons |
| `.search-box-icon` | Leading search icon, absolute positioned |
| `.search-box-clear` | Clear button, absolute right, hidden by default |
| `.search-box-clear.visible` | Shown when input has value |
| `.search-box-results` | Floating results panel |
| `.search-box-results.open` | Visible state |
| `.search-box-result-item` | Individual result row |
| `.search-box-result-item-label` | Primary text |
| `.search-box-result-item-meta` | Secondary text (MRN, condition) |
| `.search-box-empty` | "No results" message |

## Design values

- Input left padding: `calc(var(--space-4) + var(--icon-md) + var(--space-2))`
- Clear button: 44×44px touch target
- Results panel: same as `.dropdown-menu` — surface-page bg, border-default, shadow-md, radius-md
- Meta text: text-xs, color-text-tertiary

## Accessibility

- Clear button: `aria-label="Clear search"`
- Results panel: `role="listbox"`, items have `role="option"`
- Input: `aria-autocomplete="list"`, `aria-controls` pointing to results panel
