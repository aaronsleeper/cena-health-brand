# Time Picker

## Purpose

A text input that opens a floating panel with scrollable hour and minute columns plus an AM/PM toggle. Used for scheduling appointments, setting reminders, and time-based inputs.

## Anatomy

1. **Input trigger** — standard `.input-field` with clock icon, click opens panel
2. **Panel** — floating below the input
3. **Columns** — scrollable hour (1–12) and minute (00, 05, 10 ... 55) lists
4. **AM/PM toggle** — segmented control for meridiem selection
5. **Footer** — "Set" confirmation button

## Classes

| Class | Purpose |
|---|---|
| `.timepicker` | Relative wrapper around input + panel |
| `.timepicker-panel` | Floating panel (hidden by default) |
| `.timepicker-panel.open` | Shows the panel |
| `.timepicker-columns` | Flex row containing hour + minute columns |
| `.timepicker-col` | Single scrollable column |
| `.timepicker-col-label` | "Hour" / "Min" / "Sec" header |
| `.timepicker-option` | Individual time value |
| `.timepicker-option-active` | Currently selected value |
| `.timepicker-ampm` | AM/PM toggle group |
| `.timepicker-ampm-btn` | Individual AM or PM button |
| `.timepicker-ampm-btn.active` | Active meridiem |
| `.timepicker-footer` | Footer with Set button |

## Design values

- Panel: `surface-page` background, `border-default` border, `shadow-md`, `radius-lg`
- Panel width: 200px
- Column max-height: 200px, hidden scrollbar
- Option: `text-sm`, `space-2 space-4` padding
- Active option: `color-primary` background, white text
- Hover: `surface-secondary` background
- AM/PM toggle: segmented control visual pattern
- Footer: full-width `.btn-primary.btn-sm`

## Keyboard interaction

- **Arrow Up/Down** — navigate options in focused column
- **Tab** — move between columns
- **Enter** — confirm selection (same as Set button)
- **Escape** — close panel without updating

## Accessibility

- Panel has `role="dialog"` and `aria-label="Choose time"`
- Each column has `role="listbox"`, options have `role="option"`
- Active option has `aria-selected="true"`
- AM/PM buttons use `aria-pressed`
