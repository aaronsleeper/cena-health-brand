# Rating

Star rating component with interactive input and read-only display modes.

## Variants

- **Read-only** — filled/empty stars showing a static value (supports half-stars)
- **Interactive input** — clickable stars that set a value (1–5)
- **Size: sm** — 16×16px stars for compact contexts
- **Size: default** — 24×24px stars
- **Size: lg** — 32×32px stars for feedback form headers

## Anatomy

- `.rating` — flex row container
- `.rating-star` — individual star (button for interactive, span for read-only)
- `.rating-star-filled` — filled/active state
- `.rating-star-empty` — unfilled state
- `.rating-star-half` — half-filled (read-only only, uses SVG linearGradient)
- `.rating-input` — modifier on `.rating` for interactive mode
- `.rating-sm` / `.rating-lg` — size modifiers
- `.rating-label` — text beside stars ("4.2 / 5")

## Design values

- Filled star: `var(--color-warning-base)` (warm amber)
- Empty star: `var(--color-border-default)` stroke, transparent fill
- Hover: fill `var(--color-warning-border)`
- Gap: `var(--space-0-5)`
- Interactive touch target: 44×44px via padding
- Stars use inline SVG (5-point star path)

## When to use

- Meal satisfaction ratings
- Care experience scores
- Program feedback forms

## Do not use when

- Binary yes/no feedback — use a toggle
- Numeric scales beyond 5 — use a range slider
