# Collapse

## Purpose

A wrapper that toggles the visibility of its content panel using an animated
`max-height` transition. A trigger element toggles the panel. No group behavior —
each collapse is independent (contrast with Accordion which manages sibling state).

## When to use

- "Show more details" progressive disclosure
- Collapsible filter panels
- Inline help text hidden by default
- Expandable card sections

## When not to use

- Mutually exclusive panels — use Accordion
- Floating content that overlays the page — use Dropdown or Popover

## Anatomy

```
.collapse
  .collapse-trigger [data-collapse-trigger] [aria-expanded]
    (optional) .collapse-chevron
  .collapse-content [data-collapse-content]
    {content}
```

## Classes

| Class | Purpose |
|---|---|
| `.collapse` | Wrapper — position relative |
| `.collapse-trigger` | The toggle button or link |
| `.collapse-content` | The panel — max-height: 0, overflow hidden |
| `.collapse-content.open` | Revealed state — max-height: 60rem |
| `.collapse-chevron` | Optional chevron icon, rotates on open |

## States

- **Closed (default):** `aria-expanded="false"`, content has `max-height: 0`
- **Open:** `aria-expanded="true"`, content has `.open` class, `max-height: 60rem`

## Motion

- Open: `max-height var(--duration-normal) var(--ease-enter)`
- Close: `max-height var(--duration-fast) var(--ease-exit)`
- Chevron: `transform: rotate(180deg)`, same duration as content

## Accessibility

- Trigger must have `aria-expanded` toggled by JS
- Content panel should have `role="region"` and `aria-labelledby` pointing to trigger
- Reduced motion: transition-duration set to 0ms
