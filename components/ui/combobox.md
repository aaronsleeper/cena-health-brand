# Cena Health — Combobox Component Spec

---

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.combobox` | Wrapper container (relative positioning) |
| `.combobox-input` | Search text input (extends `.input-field` styling) |
| `.combobox-listbox` | Dropdown results list (extends `.dropdown-menu` styling) |
| `.combobox-option` | Individual result option |
| `.combobox-option-active` | Highlighted/focused option |

## Anatomy

```
.combobox
  input.combobox-input[role="combobox"][aria-expanded][aria-autocomplete="list"]
  ul.combobox-listbox[role="listbox"]
    li.combobox-option[role="option"]
    li.combobox-option.combobox-option-active[role="option"][aria-selected="true"]
```

## Design Tokens

- Input: inherits `.input-field` styles
- Listbox: same as dropdown-menu panel styling
- Option padding: `var(--space-2) var(--space-3)`
- Option hover: `var(--color-surface-primary)`
- Active option: `var(--color-surface-teal)`, `var(--color-text-brand)`
- Border: 1px solid `var(--color-border-default)`
- Shadow: `var(--shadow-md)`
