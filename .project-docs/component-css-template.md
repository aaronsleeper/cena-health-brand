<!-- Extracted from CLAUDE.md — edit here, not in CLAUDE.md -->

# Component CSS file structure

Follow `src/css/components/button.css` or `src/css/components/alert.css` as the model. Required structure:

```css
/* ==========================================================================
   Cena Health — {Component Name} Component
   Source: components/ui/{name}.md
   ========================================================================== */

@layer components {

  /* Base */

  /* Variants */

  /* States (hover, focus, active, disabled) */

  /* Density */

  /* Motion */

  /* Reduced motion */

}
```

Every component that animates must have a `@media (prefers-reduced-motion: reduce)` block.
