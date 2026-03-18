# COMP-03: Datepicker + Time Picker

_Generated: 2026-03-17_
_Backlog refs: Priority 1.3 and 1.5_

---

## Objective

Build two date/time input components in one pass. They share domain concerns
(scheduling) and a similar architecture (input trigger + floating panel + vanilla JS).

**Datepicker** — input that opens a calendar panel. Supports single date selection.
**Time Picker** — input that opens a time selection panel with hour/minute columns and AM/PM toggle.

---

## Pre-Build Audit Gate

Read these files completely before writing anything:

1. `.agents/skills/pl-component-builder/SKILL.md`
2. `src/css/components/input.css` — base input styles to extend
3. `src/css/components/dropdown.css` — floating panel pattern to reference
4. `pattern-library/components/dropdown.html` — reference for floating panel structure
5. `CLAUDE.md` — full rules

---

## Pre-Build Plan (output before writing any file)

Before writing any file, output a plan covering:
- Classes for each component
- Calendar layout approach (7-column grid for days)
- Time picker column approach (scrollable hour + minute columns)
- Sections to show in each PL page
- JS behavior summary
- The 7-file checklist for each component

---

## Part A — Datepicker

### What it is

A text input that, on click/focus, opens a calendar panel below it.
The panel shows a month grid with prev/next month navigation.
Single date selection only (no range). Keyboard accessible.

### CSS — `src/css/components/datepicker.css`

```
@layer components {
  .datepicker { ... }                    /* relative wrapper */
  .datepicker-panel { ... }              /* floating calendar panel */
  .datepicker-panel.open { ... }
  .datepicker-header { ... }             /* month/year label + nav arrows */
  .datepicker-nav-btn { ... }            /* prev/next month buttons */
  .datepicker-grid { ... }              /* 7-column day grid */
  .datepicker-weekday { ... }            /* Mon Tue Wed etc headers */
  .datepicker-day { ... }               /* individual day button */
  .datepicker-day:hover { ... }
  .datepicker-day-today { ... }          /* today: teal ring */
  .datepicker-day-selected { ... }       /* selected: filled teal */
  .datepicker-day-other-month { ... }    /* muted text for prev/next month days */
  .datepicker-day:disabled,
  .datepicker-day-disabled { ... }       /* past dates or blocked dates */
}
```

### Design values

- Panel: `var(--color-surface-page)` background, `var(--color-border-default)` border,
  `var(--shadow-md)`, `var(--radius-lg)`, positioned below the input
- Panel width: 280px (fixed — enough for 7 day columns)
- Day button size: 36×36px, `var(--radius-sm)`, `var(--text-sm)` text
- Today: `outline: 2px solid var(--color-primary)`, no fill
- Selected: `background: var(--color-primary)`, white text
- Hover (unselected): `background: var(--color-surface-secondary)`
- Other-month days: `var(--color-text-tertiary)`, 50% opacity
- Disabled: `var(--color-text-disabled)`, `cursor: not-allowed`
- Weekday headers: `var(--text-xs)`, `var(--color-text-tertiary)`, `font-weight: 600`

### Sections to show

1. **Default** — input with calendar open below (static, shown via `.open` class)
2. **Today Selected** — show today highlighted in teal
3. **A Past Date Selected** — show a selected date that is not today
4. **Disabled Dates** — show weekends or past dates disabled
5. **Live Demo** — fully functional, click input to open, select a date, updates input value
6. **In a Form** — datepicker inside a `.field` with label and helper text

### JS behavior

Vanilla JS IIFE in the component HTML:
- Click on `.datepicker-input` → open panel
- Render current month grid on open
- Prev/next nav arrows → re-render grid
- Click a day → set input value as `YYYY-MM-DD` or human-readable `March 14, 2026`, close panel
- Click outside → close panel
- Keyboard: Arrow keys navigate days, Enter selects, Escape closes, Tab closes

---

## Part B — Time Picker

### What it is

A text input that opens a floating panel with two scrollable columns:
hours (1–12) and minutes (00, 05, 10, ... 55), plus an AM/PM toggle.
On selection, the input value updates as `HH:MM AM/PM`.

### CSS — `src/css/components/timepicker.css`

```
@layer components {
  .timepicker { ... }                    /* relative wrapper */
  .timepicker-panel { ... }              /* floating panel */
  .timepicker-panel.open { ... }
  .timepicker-columns { ... }            /* flex row of hour + minute columns */
  .timepicker-col { ... }               /* single scrollable column */
  .timepicker-col-label { ... }          /* "Hour" / "Min" header */
  .timepicker-option { ... }            /* individual time option */
  .timepicker-option:hover { ... }
  .timepicker-option-active { ... }      /* selected option */
  .timepicker-ampm { ... }             /* AM/PM toggle group */
  .timepicker-ampm-btn { ... }          /* AM or PM button */
  .timepicker-ampm-btn.active { ... }
  .timepicker-footer { ... }            /* "Set" confirm button */
}
```

### Design values

- Panel: same as datepicker — `var(--color-surface-page)`, `var(--color-border-default)` border,
  `var(--shadow-md)`, `var(--radius-lg)`
- Panel width: 200px
- Column max-height: 200px, `overflow-y: auto`, scrollbar hidden
- Option: `var(--text-sm)`, `var(--space-2) var(--space-4)` padding, full-width
- Active option: `var(--color-primary)` background, white text
- Hover: `var(--color-surface-secondary)` background
- AM/PM toggle: uses `.segmented-control` pattern visually
- Footer "Set" button: `.btn-primary.btn-sm` full-width

### Sections to show

1. **Default** — input with panel open (static)
2. **With Seconds** — optional seconds column variant
3. **Live Demo** — functional, click input to open, select time, click Set to apply
4. **In a Form** — timepicker inside a `.field` with label

### JS behavior

Vanilla JS IIFE:
- Click input → open panel, pre-select current time
- Scrolling/clicking options → highlight selection
- AM/PM toggle → update selection
- "Set" button → format and write to input, close panel
- Click outside → close panel without updating

---

## Files to create

### Datepicker
1. `components/ui/datepicker.md`
2. `src/css/components/datepicker.css`
3. `src/css/main.css` — add `@import "./components/datepicker.css"` alphabetically (after `context-menu.css` or wherever it falls)
4. `pattern-library/components/datepicker.html`
5. `pattern-library/pages/datepickers.html`
6. `pattern-library/partials/pl-nav.html` — add "Datepicker" under Primitives, after "Range Slider"
7. `pattern-library/pages/index.html` — add index card

### Time Picker
1. `components/ui/timepicker.md`
2. `src/css/components/timepicker.css`
3. `src/css/main.css` — add `@import "./components/timepicker.css"` alphabetically
4. `pattern-library/components/timepicker.html`
5. `pattern-library/pages/timepickers.html`
6. `pattern-library/partials/pl-nav.html` — add "Time Picker" under Primitives, after "Datepicker"
7. `pattern-library/pages/index.html` — add index card

---

## Known constraints

- Vanilla JS only — no date library (moment, dayjs, date-fns, etc.)
- No raw hex, no hardcoded px
- Touch targets: day buttons 44×44px minimum — use `min-height` and `min-width`
- Calendar is purely a display component — does not write to a form's hidden date input in this demo
- Keyboard accessibility required for datepicker (arrow keys, Enter, Escape)
- Use `pl-canvas-tall` or `pl-canvas-xl` for canvases that need space below the panel
- Scrollbar in time picker column should be hidden visually:
  `scrollbar-width: none; &::-webkit-scrollbar { display: none; }`
- `@media (prefers-reduced-motion: reduce)` block required on any animated opening

---

## Verification

1. `npm run build:css` — must pass
2. `http://localhost:5174/pattern-library/pages/datepickers.html` — calendar renders and is interactive
3. `http://localhost:5174/pattern-library/pages/timepickers.html` — panel renders and Set updates input
4. Both nav links appear in sidebar and get `active` class when on that page
5. Both appear in the index page
6. Keyboard navigation works on datepicker (arrow keys, Enter, Escape)

---

## Completion Report

```
## Completion Report — COMP-03

- Files created: [list]
- Files modified: [list]
- New CSS classes: [list per component]
- Judgment calls: [list or "none"]
- Reduced motion added: yes / no
- Build passes: yes / no
- Items deferred: [list or "none"]
```

```bash
git add -A
git commit -m "feat: datepicker + time picker components"
```

**Verify at:** http://localhost:5174/pattern-library/pages/datepickers.html
