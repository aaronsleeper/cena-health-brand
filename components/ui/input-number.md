# Input Number

A number input with visible increment (+) and decrement (−) stepper buttons flanking the input. Used for integer or decimal values where the range is bounded: nutrition targets (kcal, grams), medication doses, quantities.

## When to use

Use for bounded numeric values where users benefit from incremental adjustment — quantities, doses, targets.

## Do not use when

The number has no meaningful bounds or step (e.g. free-form ID entry) — use a standard text input with `type="text"` and `inputmode="numeric"`.

## Classes

| Class | Purpose |
|---|---|
| `.input-number` | Wrapper — inline-flex container |
| `.input-number-input` | Number input — centered, tabular-nums, no browser spinners |
| `.input-number-btn` | Shared stepper button base |
| `.input-number-btn-decrement` | Left (−) stepper |
| `.input-number-btn-increment` | Right (+) stepper |
| `.input-number-sm` | Small size modifier on wrapper |

## Reuses

- `.input-field` — base input styles (via extending)
- `.field`, `.input-label`, `.input-helper`, `.input-error-msg` — field structure

## JS behavior

- Decrement button: decrease value by `step` (default 1), clamp to `min`
- Increment button: increase value by `step`, clamp to `max`
- Disable decrement button when value === min
- Disable increment button when value === max
