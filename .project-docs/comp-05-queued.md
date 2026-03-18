# COMP-05: Avatar Group + Character Count + File Upload Progress

_Generated: 2026-03-17_
_Backlog refs: Priority 2.2, 2.6, 2.9_

---

## Objective

Three additive builds — each extends an existing component file rather than
creating a new page. No new pages or nav links needed.

**Avatar Group** — overlapping stacked avatars with overflow count.
`avatar.html` and `avatar.css` already have a `.avatar-group` section but
it's minimal. Expand it properly.

**Character Count** — live textarea character counter. Add to the
existing inputs page as a new section on the textarea.

**File Upload Progress** — upload-in-progress state showing filename,
file size, progress bar, and cancel button. Add to the existing
file-uploads page as a new section.

---

## Pre-Build Audit Gate

Read these files completely before writing anything:

1. `.agents/skills/pl-component-builder/SKILL.md`
2. `src/css/components/avatar.css` — existing avatar classes
3. `pattern-library/components/avatar.html` — current avatar-group section to replace
4. `src/css/components/input.css` — add character count styles here
5. `pattern-library/components/input.html` — add character count section here
6. `src/css/components/file-upload.css` — add file progress styles here
7. `pattern-library/components/file-upload.html` — add file progress section here
8. `CLAUDE.md` — full rules

---

## Pre-Build Plan (output before writing any file)

Before writing any file, output a plan covering:
- Exact location of each addition within existing files
- New classes to define for each part
- JS behavior required
- Confirm no new pages or nav links needed (additions only)

---

## Part A — Avatar Group

### Current state

`avatar.css` has `.avatar-group` defined. `avatar.html` has a group section
with a basic overflow indicator using an inline `style=` attribute.
The `@component-meta` classes list already includes `avatar-group`.

### What to improve

**In `src/css/components/avatar.css`:** Add or strengthen these classes
if not already fully defined:

```
.avatar-group { ... }             /* flex row, avatars overlap via negative margin */
.avatar-group .avatar { ... }     /* ring to separate overlapping avatars */
.avatar-group-overflow { ... }    /* "+N" overflow badge — same size as avatar,
                                     warm neutral bg, tertiary text */
```

Design values:
- Overlap: `margin-left: calc(-1 * var(--space-3))` on all but first
- Ring: `box-shadow: 0 0 0 2px var(--color-surface-page)` on each avatar
  (creates white gap between overlapping avatars)
- Overflow badge: `var(--color-surface-secondary)` background,
  `var(--color-text-secondary)` text, same border-radius and size as `.avatar`
- On `surface-primary`, ring should be `box-shadow: 0 0 0 2px var(--color-surface-primary)`
  — add a `.surface-primary .avatar-group .avatar` rule

**In `pattern-library/components/avatar.html`:** Replace the existing
`avatar-group` section with a fuller demonstration:

Sections to show:
1. **Default Group** — 4 avatars overlapping, no overflow
2. **With Overflow** — 4 avatars + "+3" overflow badge
3. **Sizes** — group at sm, default, and lg sizes
4. **On Tinted Surface** — group on `surface-primary` showing ring color adapts
5. **With Status** — group where individual avatars carry status indicators

Remove the inline `style="background-color: ..."` from the overflow avatar
and replace with `.avatar-group-overflow`.

---

## Part B — Character Count (Toggle Count)

### Current state

`input.html` has a textarea section (Section 5) with no character count.
`input.css` has no character count classes.

### What to add

**In `src/css/components/input.css`:** Add at the end of `@layer components`:

```
/* --------------------------------------------------------------------------
   Character Count
   -------------------------------------------------------------------------- */

.textarea-count { ... }           /* wrapper: field + count in a relative container */
.textarea-count-label { ... }     /* "N / 500" — right-aligned below textarea */
.textarea-count-warning { ... }   /* color shifts to warning when near limit */
.textarea-count-error { ... }     /* color shifts to error when at/over limit */
```

Design values:
- Count label: `var(--text-xs)`, `var(--color-text-tertiary)`, right-aligned,
  `margin-top: var(--space-1)`
- Warning state (>80% of limit): `var(--color-warning-text)`
- Error state (at or over limit): `var(--color-error-text)`
- Transition: color change only, `var(--duration-fast) var(--ease-transition)`

**In `pattern-library/components/input.html`:** Add a new section after
the existing Textarea section (Section 5):

```
Section: Character Count
```

Sections to show:
1. **Default** — textarea with count label "0 / 500", live as user types
2. **Near Limit** — static demo showing "423 / 500" in warning state
3. **At Limit** — static demo showing "500 / 500" in error state, textarea
   has `input-field-error` class applied

**JS behavior** — IIFE addition to the existing `<script>` block in `input.html`:

```js
// Character count demo
document.querySelectorAll('[data-char-count]').forEach(function(textarea) {
  var max = parseInt(textarea.getAttribute('maxlength') || textarea.getAttribute('data-char-count'));
  var label = textarea.closest('.textarea-count').querySelector('.textarea-count-label');
  if (!label) return;

  function update() {
    var len = textarea.value.length;
    label.textContent = len + ' / ' + max;
    label.classList.remove('textarea-count-warning', 'textarea-count-error');
    if (len >= max) {
      label.classList.add('textarea-count-error');
    } else if (len / max >= 0.8) {
      label.classList.add('textarea-count-warning');
    }
  }
  textarea.addEventListener('input', update);
  update();
});
```

**Also update `@component-meta` classes field** in `input.html` to include
`textarea-count`, `textarea-count-label`, `textarea-count-warning`, `textarea-count-error`.

---

## Part C — File Upload Progress

### Current state

`file-upload.html` has 4 sections: Default dropzone, Drag-over state,
Compact variant, On card surface. No progress state.

### What to add

**In `src/css/components/file-upload.css`:** Add at the end of `@layer components`:

```
/* --------------------------------------------------------------------------
   File Upload Progress
   -------------------------------------------------------------------------- */

.file-progress { ... }            /* a single in-progress file row */
.file-progress-info { ... }       /* left side: icon + name + size */
.file-progress-icon { ... }       /* file type icon */
.file-progress-name { ... }       /* filename, truncated */
.file-progress-size { ... }       /* file size label */
.file-progress-bar-track { ... }  /* full-width track */
.file-progress-bar-fill { ... }   /* animated fill, width driven by JS/inline style */
.file-progress-cancel { ... }     /* × button, top-right */
.file-progress-complete { ... }   /* variant: completed state (green check) */
.file-progress-error { ... }      /* variant: failed state (red warning) */
.file-progress-list { ... }       /* wrapper for multiple in-progress files */
```

Design values:
- Row: `var(--color-surface-primary)` background, `var(--radius-md)` border radius,
  `var(--space-3) var(--space-4)` padding, `1px solid var(--color-border-default)` border
- Filename: `var(--text-sm)`, `font-weight: 500`, `var(--color-text-primary)`, truncated
- File size: `var(--text-xs)`, `var(--color-text-tertiary)`
- Progress track: `var(--color-surface-secondary)`, height `6px`, `var(--radius-full)`
- Progress fill: `var(--color-primary)`, same height, `var(--radius-full)`,
  `width` driven by inline style (`style="width: 65%"`) — this is data-driven, acceptable
- Cancel button: `.btn-ghost .btn-icon-only .btn-sm` pattern, 44×44px touch target
- Complete variant: fill replaced by `var(--color-success-base)`, cancel → checkmark icon
- Error variant: fill replaced by `var(--color-error-base)`, helpful error text below

**In `pattern-library/components/file-upload.html`:** Add a new section 5
after the existing "On Card Surface" section:

```
Section 5: Upload Progress
Section 6: Multiple Files in Progress
Section 7: Completed + Error States
```

Sections to show:
1. **Single File — In Progress** — filename, size, 65% progress bar, cancel button
2. **Multiple Files** — a `.file-progress-list` with 3 files at different progress
   percentages, one nearly done
3. **Completed State** — green fill, checkmark icon replaces cancel
4. **Error State** — red fill, error message "Upload failed — check your connection"
   with a retry button

**No new JS needed** for the static documentation. The progress bar `width` is
set by inline `style="width: 65%"` on `.file-progress-bar-fill` which is
data-driven and acceptable per CLAUDE.md.

**Also update `@component-meta` classes field** in `file-upload.html` to include
the new progress classes.

---

## Files to modify (no new files)

1. `src/css/components/avatar.css` — strengthen `.avatar-group`, add `.avatar-group-overflow`
2. `pattern-library/components/avatar.html` — replace group section with full demo
3. `src/css/components/input.css` — add character count classes
4. `pattern-library/components/input.html` — add character count section + JS
5. `src/css/components/file-upload.css` — add file progress classes
6. `pattern-library/components/file-upload.html` — add file progress sections

**No new CSS imports in `main.css`** — all additions go into existing files.
**No new pages.** **No new nav links.**

---

## Known constraints

- Avatar ring color must adapt to the surface it sits on — add surface-specific
  overrides for `surface-primary`, `surface-secondary`, `surface-teal`, `surface-sage`
- Character count label position: always right-aligned below the textarea,
  never overlapping it
- File progress bar `width` set via inline style is intentional and acceptable
  (data-driven value, not styling)
- No raw hex, no hardcoded px anywhere
- All new rules inside `@layer components`
- `@media (prefers-reduced-motion: reduce)` not required for these additions
  (no new animations introduced — file progress bar width changes are not animated
  in the static demo; character count color changes use the existing transition
  token in input.css)

---

## Verification

1. `npm run build:css` — must pass
2. `http://localhost:5174/pattern-library/pages/avatars.html` — group sections render,
   overflow badge uses `.avatar-group-overflow` (no inline style), rings visible
3. `http://localhost:5174/pattern-library/pages/inputs.html` — character count section
   present, typing updates count, warning/error colors apply correctly
4. `http://localhost:5174/pattern-library/pages/file-uploads.html` — progress sections
   render, bar widths correct, complete/error variants visible

---

## Completion Report

```
## Completion Report — COMP-05

- Files modified: [list]
- New CSS classes added: [list per component]
- Judgment calls: [list or "none"]
- Build passes: yes / no
- Items deferred: [list or "none"]
```

```bash
git add -A
git commit -m "feat: avatar group, character count, file upload progress"
```

**Verify at:** http://localhost:5174/pattern-library/pages/avatars.html
