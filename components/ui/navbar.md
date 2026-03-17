# Navbar

## Purpose
Top horizontal navigation bar for the application shell. Contains brand identity, primary navigation links, and right-side action icons (search, notifications, user avatar).

## Anatomy
- **Brand** (`.navbar-brand`) — Logo or app name, always visible
- **Nav links** (`.navbar-nav` > `.navbar-nav-item`) — Horizontal link list, collapses on mobile
- **Actions** (`.navbar-actions`) — Icon buttons on the right (search, notifications, avatar)
- **Divider** (`.navbar-divider`) — Vertical separator between action groups
- **Mobile toggle** (`.navbar-mobile-toggle`) — Hamburger button, visible below 768px
- **Collapse** (`.navbar-collapse`) — Collapsible container for nav links on mobile

## Design values
- Background: `var(--color-surface-page)`
- Border-bottom: `1px solid var(--color-border-default)`
- Height: `min-height: 4rem` (64px)
- Brand: `var(--font-display)`, `var(--text-sm)`, `font-weight: 700`
- Nav link: `var(--text-sm)`, `var(--color-text-secondary)`, hover → `var(--color-text-primary)`
- Active nav link: `var(--color-text-brand)`, `border-bottom: 2px solid var(--color-primary)`
- Actions: icon buttons using `.btn-ghost` + `.btn-icon-only`
- z-index: 40

## Mobile behavior
Below 768px, `.navbar-nav` hides inside `.navbar-collapse`. A hamburger `.navbar-mobile-toggle` toggles visibility with `max-height` transition.

## When to use
Top-level application navigation bar that persists across all pages.

## Do not use when
You need in-page section navigation — use tabs or section nav instead.
