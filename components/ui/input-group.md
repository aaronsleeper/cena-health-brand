# Input Group

An input with one or both ends decorated: a text label prefix ("$", "kg", "https://"), an SVG icon prefix, or a button suffix ("Search", "Copy"). The addon is visually attached to the input — same border, same height, shared border-radius treatment.

## When to use

Use when an input needs a static label, unit indicator, or action button visually attached to the field — currency prefixes, domain suffixes, search with button.

## Do not use when

The icon is purely decorative and does not represent a unit or action — use the standard `.input-wrapper` with `.input-icon` instead.

## Classes

| Class | Purpose |
|---|---|
| `.input-group` | Wrapper — inline-flex container for addon + input |
| `.input-group-addon` | Text or icon addon base |
| `.input-group-addon-leading` | Left-side addon |
| `.input-group-addon-trailing` | Right-side addon |
| `.input-group-btn` | Button addon — adapts border-radius |
| `.input-group-sm` | Small size modifier on wrapper |

## Reuses

- `.input-field` — the input itself
- `.input-field-sm` — small input
- `.input-field-error` — error state
- `.field`, `.input-label`, `.input-helper`, `.input-error-msg` — field structure
