# Datepicker

## Purpose

A text input that opens a calendar panel for single date selection. Used for scheduling appointments, setting due dates, and date-based filtering.

## Anatomy

1. **Input trigger** — standard `.input-field` with calendar icon, click/focus opens panel
2. **Panel** — floating calendar below the input
3. **Header** — month/year label with prev/next navigation arrows
4. **Weekday row** — Su Mo Tu We Th Fr Sa headers
5. **Day grid** — 7-column grid of day buttons (35–42 cells per month view)

## Classes

| Class | Purpose |
|---|---|
| `.datepicker` | Relative wrapper around input + panel |
| `.datepicker-panel` | Floating calendar panel (hidden by default) |
| `.datepicker-panel.open` | Shows the panel |
| `.datepicker-header` | Month/year label + nav row |
| `.datepicker-nav-btn` | Prev/next month arrow buttons |
| `.datepicker-grid` | 7-column CSS grid for days |
| `.datepicker-weekday` | Day-of-week header cell |
| `.datepicker-day` | Individual day button |
| `.datepicker-day-today` | Today indicator (teal outline) |
| `.datepicker-day-selected` | Selected day (filled teal) |
| `.datepicker-day-other-month` | Days from adjacent months |
| `.datepicker-day-disabled` | Blocked/past dates |

## Design values

- Panel: `surface-page` background, `border-default` border, `shadow-md`, `radius-lg`
- Panel width: 280px fixed
- Day button: 36×36px, `radius-sm`, `text-sm`
- Today: `outline: 2px solid var(--color-primary)`, no fill
- Selected: `background: var(--color-primary)`, white text
- Hover (unselected): `surface-secondary` background
- Other-month: `text-tertiary`, 50% opacity
- Disabled: `text-disabled`, `cursor: not-allowed`
- Weekday headers: `text-xs`, `text-tertiary`, `font-weight: 600`

## Keyboard interaction

- **Arrow keys** — navigate between days
- **Enter** — select focused day, close panel
- **Escape** — close panel without selecting
- **Tab** — close panel

## Accessibility

- Panel has `role="dialog"` and `aria-label="Choose date"`
- Day grid uses `role="grid"` with `role="row"` and `role="gridcell"`
- Selected day has `aria-selected="true"`
- Nav buttons have `aria-label="Previous month"` / `"Next month"`
- Today has `aria-current="date"`
