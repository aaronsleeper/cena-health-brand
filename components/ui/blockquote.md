# Blockquote

Styled pull-quote element for patient testimonials, partner statements, and clinical citations.

## Variants

- **Default** — left border accent, no background
- **Teal surface** — `.blockquote-teal`, teal background + teal border
- **Sage surface** — `.blockquote-sage`, sage background + sage border

## Anatomy

- `.blockquote` — wrapper (uses `<blockquote>` element)
- `.blockquote-mark` — optional large decorative quotation mark
- `.blockquote-text` — the quote text
- `.blockquote-attribution` — name, role, context

## Design values

- Padding: `var(--space-6) var(--space-8)`
- Left border: 4px solid `var(--color-border-brand)`
- Quote text: Lora, `var(--text-md)`, weight 400, `var(--color-brand-primary)`
- Attribution: Source Sans 3, `var(--text-sm)`, `var(--color-text-secondary)`
- Decorative mark: `var(--text-3xl)`, `var(--color-border-brand)`, line-height 1

## When to use

- Patient testimonials on marketing or reporting pages
- Partner statements in slide decks or annual reports
- Clinical citations referencing studies or protocols

## Do not use when

- Displaying inline quoted text within body copy — use `<q>` or the `.quote` utility class
- Showing user-generated comments — use chat bubbles
