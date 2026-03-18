# Pattern Library — Component Backlog

_Last updated: 2026-03-17_

Components grouped by priority. Each item lists what needs to be built:
CSS file, component HTML file, PL page, and nav entry in `pl-nav.html`.

All builds follow the standard workflow:
1. Read `pl-component-builder/SKILL.md` before writing anything
2. Output pre-build plan
3. Write files
4. `npm run build:css` must pass
5. Run QA using `pl-component-qa/SKILL.md`
6. Verify at `http://localhost:5174`

---

## Priority 1 — High-value, unblocked

### 1.1 Input Group
Preline ref: Basic Forms > Input Group
Input with leading/trailing addons: icon prefix, text prefix (e.g. "$", "kg"),
button suffix (e.g. "Search"), or combined.
Classes: `input-group`, `input-group-addon`, `input-group-addon-leading`,
`input-group-addon-trailing`, `input-group-btn`
CSS: `src/css/components/input-group.css`
PL page: `pattern-library/pages/input-groups.html`
Component HTML: `pattern-library/components/input-group.html`
Nav section: Primitives (after Inputs)

### 1.2 Navbar (Top Nav Bar)
Preline ref: Navigations > Navbar
Horizontal top navigation bar — distinct from the sidebar.
Used for app top bars with logo, primary nav links, and actions (search, avatar, notifications).
Classes: `navbar`, `navbar-brand`, `navbar-nav`, `navbar-nav-item`,
`navbar-actions`, `navbar-mobile-toggle`
Note: Uses Preline `data-hs-collapse` for mobile hamburger toggle behavior.
CSS: `src/css/components/navbar.css`
PL page: `pattern-library/pages/navbar.html`
Component HTML: `pattern-library/components/navbar.html`
Nav section: Navigation (after Sidebar)

### 1.3 Datepicker
Preline ref: Basic Forms > Datepicker
Inline calendar and input-triggered calendar picker.
Classes: `datepicker`, `datepicker-input`, `datepicker-calendar`,
`datepicker-header`, `datepicker-day`, `datepicker-day-selected`,
`datepicker-day-today`, `datepicker-day-disabled`
Note: Vanilla JS only — no third-party date library. Keyboard accessible.
CSS: `src/css/components/datepicker.css`
PL page: `pattern-library/pages/datepickers.html`
Component HTML: `pattern-library/components/datepicker.html`
Nav section: Primitives (after Range Slider)

### 1.4 Input Number
Preline ref: Advanced Forms > Input Number
Number input with increment/decrement stepper buttons.
Used for nutrition targets (kcal, protein grams), quantity fields.
Classes: `input-number`, `input-number-input`, `input-number-btn`,
`input-number-btn-decrement`, `input-number-btn-increment`
CSS: `src/css/components/input-number.css`
PL page: `pattern-library/pages/input-numbers.html`
Component HTML: `pattern-library/components/input-number.html`
Nav section: Primitives (after Input Group)

### 1.5 Time Picker
Preline ref: Basic Forms > TimePicker
Time input with AM/PM toggle and keyboard navigation.
Used for scheduling: check-in times, delivery windows, appointment slots.
Classes: `timepicker`, `timepicker-input`, `timepicker-panel`,
`timepicker-col`, `timepicker-option`, `timepicker-option-active`
Note: Vanilla JS only — no dependency on native time input (poor cross-browser UX).
CSS: `src/css/components/timepicker.css`
PL page: `pattern-library/pages/timepickers.html`
Component HTML: `pattern-library/components/timepicker.html`
Nav section: Primitives (after Datepicker)

---

## Priority 2 — Medium value, unblocked

### 2.1 Collapse
Preline ref: Base Components > Collapse
Single panel show/hide with animated height transition.
Distinct from accordion — no heading required, no sibling relationship.
Used for: "Show more" sections, collapsible filter panels, inline help text.
Classes: `collapse`, `collapse-trigger`, `collapse-content`, `collapse-open`
Note: Uses Preline `data-hs-collapse` for JS behavior.
CSS: `src/css/components/collapse.css`
PL page: `pattern-library/pages/collapse.html`
Component HTML: `pattern-library/components/collapse.html`
Nav section: Layout (after Accordion)

### 2.2 Avatar Group
Preline ref: Base Components > Avatar Group
Overlapping stack of avatars with overflow count badge.
Extends the existing `.avatar` component.
Classes: `avatar-group`, `avatar-group-item`, `avatar-group-overflow`
CSS: Add to `src/css/components/avatar.css` (no new file needed)
PL page: Add section to existing `pattern-library/pages/avatars.html`
Component HTML: Add section to existing `pattern-library/components/avatar.html`
Nav section: No change (already in Data > Avatar)

### 2.3 Search Box
Preline ref: Advanced Forms > SearchBox
Search input with clear button and optional dropdown results list.
Distinct from combobox (no selection from list) and toolbar search (no dropdown).
Classes: `search-box`, `search-box-input`, `search-box-clear`,
`search-box-results`, `search-box-result-item`
CSS: `src/css/components/search-box.css`
PL page: `pattern-library/pages/search-boxes.html`
Component HTML: `pattern-library/components/search-box.html`
Nav section: Primitives (after Combobox)

### 2.4 Scrollspy
Preline ref: Navigations > Scrollspy
Highlights the active section nav link as the user scrolls.
Works in conjunction with the existing `.section-nav` component.
Classes: No new semantic classes needed — behavior via JS + `section-nav-item.active`
Note: Vanilla JS IntersectionObserver. The CSS is already in section-nav.css.
No new CSS file needed.
PL page: Add a live demo section to existing `pattern-library/pages/section-nav.html`
Component HTML: Add demo section to `pattern-library/components/section-nav.html`
Nav section: No change

### 2.5 Blockquote
Preline ref: Layout & Content > Blockquote (typography element)
Pull-quote styling for patient testimonials and clinical citations.
Classes: `blockquote`, `blockquote-text`, `blockquote-attribution`
CSS: `src/css/components/blockquote.css`
PL page: Add section to existing `pattern-library/pages/foundations.html` under Typography,
or new `pattern-library/pages/blockquote.html` — agent's discretion.
Component HTML: `pattern-library/components/blockquote.html`
Nav section: Foundations or Primitives — agent's discretion

### 2.6 Toggle Count (Character Count)
Preline ref: Advanced Forms > Toggle Count
Live character count display beneath a textarea.
Used for care notes, clinical observations, patient messages.
Classes: `textarea-count`, `textarea-count-label`, `textarea-count-warning`
CSS: Add to `src/css/components/input.css` (no new file needed)
PL page: Add section to existing `pattern-library/pages/inputs.html`
Component HTML: Add section to existing `pattern-library/components/input.html`
Nav section: No change

### 2.7 Context Menu
Preline ref: Overlays > Context Menu
Right-click triggered action menu. Same visual as `.dropdown-menu` but
positioned at cursor coordinates rather than relative to a trigger element.
Classes: `context-menu` (thin wrapper, reuses `.dropdown-menu` visually)
Note: Vanilla JS `contextmenu` event.
CSS: `src/css/components/context-menu.css`
PL page: `pattern-library/pages/context-menus.html`
Component HTML: `pattern-library/components/context-menu.html`
Nav section: Overlays (after Dropdowns)

### 2.8 Ratings
Preline ref: Base Components > Ratings
Star rating input and read-only display.
Useful for meal feedback, care satisfaction scoring.
Classes: `rating`, `rating-star`, `rating-star-filled`,
`rating-star-empty`, `rating-input`
CSS: `src/css/components/rating.css`
PL page: `pattern-library/pages/ratings.html`
Component HTML: `pattern-library/components/rating.html`
Nav section: Feedback (after Indicator)

### 2.9 File Upload Progress
Preline ref: Base Components > File Uploading Progress
Upload progress state within the file upload flow — distinct from the file
input itself. Shows filename, size, progress bar, and cancel.
Classes: `file-progress`, `file-progress-name`, `file-progress-size`,
`file-progress-bar`, `file-progress-cancel`
CSS: Add to `src/css/components/file-upload.css`
PL page: Add section to existing `pattern-library/pages/file-uploads.html`
Component HTML: Add section to `pattern-library/components/file-upload.html`
Nav section: No change

---

## Priority 3 — Lower value or more complex

### 3.1 Charts
Roadmap item D1 + D2. Chart.js v4 via CDN. No npm chart libraries.
No pie or donut charts (Tufte principle).
Requires color-to-series mapping spec before building.
Classes: `chart-canvas-wrapper`, `chart-line`, `chart-bar`, `chart-sparkline`
CSS: `src/css/components/chart.css`
PL page: `pattern-library/pages/charts.html`
Component HTML: `pattern-library/components/chart.html`
Nav section: Data (new entry)

### 3.2 Datatables
Preline ref: Third-Party > Datatables
Advanced table with client-side sort, filter, search, and pagination.
Extends the existing `.table` and `.table-wrapper` components.
Vanilla JS only — no DataTables.js library.
Classes: `datatable`, `datatable-search`, `datatable-controls`,
`datatable-entries-label`
CSS: `src/css/components/datatable.css`
PL page: `pattern-library/pages/datatables.html`
Component HTML: `pattern-library/components/datatable.html`
Nav section: Data (after Tables)

### 3.3 Button Group (connected)
Preline ref: Base Components > Button Group
Grouped buttons sharing borders with no gap — segmented selector pattern.
Distinct from `.btn-group` which arranges buttons with spacing.
CSS: Add section to `src/css/components/button.css`
PL page: Add section to existing `pattern-library/pages/buttons.html`
Nav section: No change

---

## Excluded from scope (with rationale)

| Preline item | Reason excluded |
|---|---|
| Container / Columns / Grid | Generic CSS layout utilities — not components |
| Layout Splitter | No resizable pane use case |
| Images | Native HTML element |
| Links | Covered by typography |
| KBD | No keyboard shortcut UI in scope |
| Custom Scrollbar | Accessibility risk, browser-specific |
| Carousel | Not appropriate for clinical data display |
| Devices | Marketing mockup frames only |
| Lists | Native HTML |
| Tree View | No hierarchical navigation use case identified |
| Mega Menu | No multi-column nav use case |
| Color Picker | No use case |
| Strong Password | No auth UI in scope |
| Toggle Password | No auth UI in scope |
| PIN Input | No auth UI in scope |
| Drag and Drop | No use case identified |
| WYSIWYG Editor | No rich text editing in scope |
| Maps | No mapping use case |
| Confetti Animation | Not appropriate for clinical context |
| Advanced Select | Preline Pro only |

---

## Stub check

All current PL pages and component HTML files are fully implemented as of 2026-03-17.
No stubs found. Every page has sections, canvases, semantic markup, and
interactive demos where applicable.
