# INFRA-01: Preline Integration + haven-ui Architecture Alignment

_Generated: 2026-03-16_
_Phase: Infrastructure — no design decisions, no class renames, no component rewrites_

---

## Objective

Wire Preline v4.1.2 into cena-health-brand using the same architecture established in haven-ui.
After this task, Preline's interactive components will initialise correctly on every PL page,
and the CSS import order will be ready for the class-name convergence work in INFRA-02.

No existing component CSS is changed. No class names are changed. No design tokens are changed.
This task is purely additive infrastructure.

---

## Pre-Build Audit Gate

Read these files completely before writing anything:

1. `vite.config.js` — understand current build inputs
2. `src/css/main.css` — understand current import order
3. `pattern-library/partials/pl-head.html` — understand how pages load CSS/JS
4. `pattern-library/partials/pl-scripts.html` — understand current script loading
5. `CLAUDE.md` — confirm Preline patterns section

Do not write any file until you have read all five.

---

## Step 1 — Install Preline

Run from the repo root:

```bash
npm install preline@4.1.2
```

Confirm `package.json` `dependencies` now contains `"preline": "^4.1.2"`.

---

## Step 2 — Create `src/scripts/main.js`

Create this file exactly:

```js
import 'preline';

// Preline v4 ESM does not auto-call autoInit — trigger it manually after DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});
```

The `HSStaticMethods` guard prevents a console error during hot reload when the module
re-executes before Preline's globals are fully attached.

---

## Step 3 — Update `vite.config.js`

The JS entry point needs to be included in the build so Preline gets bundled.
Also create a `src/scripts/` directory if it doesn't exist.

Add `src/scripts/main.js` as an additional Rollup input. Find the `output` block
in `vite.config.js` and update the `rollupOptions` to include it:

```js
build: {
  rollupOptions: {
    input: {
      ...getHtmlEntries(),
      'cena-main': resolve(__dirname, 'src/scripts/main.js'),
    },
    output: {
      entryFileNames: 'assets/cena-health.js',
      assetFileNames: 'assets/cena-health.[ext]',
    },
  },
},
```

No other changes to `vite.config.js`.

---

## Step 4 — Create `src/css/cena.css`

This file does two things:
1. Remaps Tailwind's neutral color utilities (`gray-*`, `neutral-*`, `slate-*`, `stone-*`, `zinc-*`)
   to the Cena warm palette so `bg-gray-50` etc. render in warm, not cool gray.
2. Remaps Preline's `--primary-*` CSS variables to the Cena teal scale so all Preline
   interactive components (dropdowns, accordions, modals) render in teal, not Preline's
   default blue.

Create `src/css/cena.css` with this exact content:

```css
/* ==========================================================================
   Cena Health — Theme Integration
   Equivalent of haven-ui's haven.css.

   Two responsibilities:
   1. @theme block: maps Tailwind's neutral utilities to the Cena warm palette
      so bg-gray-*, text-gray-*, border-gray-* etc. use warm values, not cool gray.
   2. :root block: maps Preline's --primary-* variables to the Cena teal scale
      so all Preline interactive components render in the correct brand color.

   VALUES: All values reference tokens already defined in tokens-color.css.
   Do not hardcode hex values here.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Tailwind neutral utility remapping
   Maps gray/neutral/slate/stone/zinc to the Cena warm scale so utility
   classes like bg-gray-50, text-gray-900, border-neutral-200 etc. resolve
   to warm values throughout the pattern library and app pages.
   -------------------------------------------------------------------------- */

@theme {
  /* Primary (interactive teal) — maps to Cena's teal scale.
     Note: Cena's teal scale is inverted (50=darkest, 950=lightest).
     Tailwind's primary utilities expect 50=lightest, 950=darkest,
     so we map in reverse order. */
  --color-primary-50:  var(--color-teal-950);
  --color-primary-100: var(--color-teal-900);
  --color-primary-200: var(--color-teal-800);
  --color-primary-300: var(--color-teal-700);
  --color-primary-400: var(--color-teal-600);
  --color-primary-500: var(--color-teal-500);
  --color-primary-600: var(--color-teal-400);   /* interactive fill */
  --color-primary-700: var(--color-teal-300);   /* hover */
  --color-primary-800: var(--color-teal-200);
  --color-primary-900: var(--color-teal-100);
  --color-primary-950: var(--color-teal-50);

  /* Secondary (warm neutral) — maps to Cena's warm scale.
     Same inversion: warm-50=darkest, warm-950=lightest. */
  --color-secondary-50:  var(--color-warm-950);
  --color-secondary-100: var(--color-warm-900);
  --color-secondary-200: var(--color-warm-800);
  --color-secondary-300: var(--color-warm-700);
  --color-secondary-400: var(--color-warm-600);
  --color-secondary-500: var(--color-warm-500);
  --color-secondary-600: var(--color-warm-400);
  --color-secondary-700: var(--color-warm-300);
  --color-secondary-800: var(--color-warm-200);
  --color-secondary-900: var(--color-warm-100);
  --color-secondary-950: var(--color-warm-50);

  /* Gray / neutral / slate / stone / zinc — all map to warm scale.
     Preline and Tailwind utility classes that use these (bg-gray-50,
     text-neutral-700, border-gray-200 etc.) will render warm. */
  --color-gray-50:    var(--color-warm-950);
  --color-gray-100:   var(--color-warm-900);
  --color-gray-200:   var(--color-warm-800);
  --color-gray-300:   var(--color-warm-700);
  --color-gray-400:   var(--color-warm-600);
  --color-gray-500:   var(--color-warm-500);
  --color-gray-600:   var(--color-warm-400);
  --color-gray-700:   var(--color-warm-300);
  --color-gray-800:   var(--color-warm-200);
  --color-gray-900:   var(--color-warm-100);
  --color-gray-950:   var(--color-warm-50);

  --color-neutral-50:  var(--color-warm-950);
  --color-neutral-100: var(--color-warm-900);
  --color-neutral-200: var(--color-warm-800);
  --color-neutral-300: var(--color-warm-700);
  --color-neutral-400: var(--color-warm-600);
  --color-neutral-500: var(--color-warm-500);
  --color-neutral-600: var(--color-warm-400);
  --color-neutral-700: var(--color-warm-300);
  --color-neutral-800: var(--color-warm-200);
  --color-neutral-900: var(--color-warm-100);
  --color-neutral-950: var(--color-warm-50);

  --color-slate-50:  var(--color-warm-950);
  --color-slate-100: var(--color-warm-900);
  --color-slate-200: var(--color-warm-800);
  --color-slate-300: var(--color-warm-700);
  --color-slate-400: var(--color-warm-600);
  --color-slate-500: var(--color-warm-500);
  --color-slate-600: var(--color-warm-400);
  --color-slate-700: var(--color-warm-300);
  --color-slate-800: var(--color-warm-200);
  --color-slate-900: var(--color-warm-100);
  --color-slate-950: var(--color-warm-50);

  --color-stone-50:  var(--color-warm-950);
  --color-stone-100: var(--color-warm-900);
  --color-stone-200: var(--color-warm-800);
  --color-stone-300: var(--color-warm-700);
  --color-stone-400: var(--color-warm-600);
  --color-stone-500: var(--color-warm-500);
  --color-stone-600: var(--color-warm-400);
  --color-stone-700: var(--color-warm-300);
  --color-stone-800: var(--color-warm-200);
  --color-stone-900: var(--color-warm-100);
  --color-stone-950: var(--color-warm-50);

  --color-zinc-50:  var(--color-warm-950);
  --color-zinc-100: var(--color-warm-900);
  --color-zinc-200: var(--color-warm-800);
  --color-zinc-300: var(--color-warm-700);
  --color-zinc-400: var(--color-warm-600);
  --color-zinc-500: var(--color-warm-500);
  --color-zinc-600: var(--color-warm-400);
  --color-zinc-700: var(--color-warm-300);
  --color-zinc-800: var(--color-warm-200);
  --color-zinc-900: var(--color-warm-100);
  --color-zinc-950: var(--color-warm-50);

  /* White / black */
  --color-white: var(--color-warm-950);   /* warm off-white, not pure #fff */
  --color-black: var(--color-warm-50);    /* near-black */

  /* Feedback — success, error, warning, info.
     Maps semantic *-50 (light bg) through *-900 (dark text) to the
     Cena functional color families for @apply usage. */
  --color-success-50:  var(--color-success-bg);
  --color-success-200: var(--color-success-border);
  --color-success-600: var(--color-success-base);
  --color-success-800: var(--color-success-text);

  --color-error-50:  var(--color-error-bg);
  --color-error-200: var(--color-error-border);
  --color-error-600: var(--color-error-base);
  --color-error-800: var(--color-error-text);

  --color-warning-50:  var(--color-warning-bg);
  --color-warning-200: var(--color-warning-border);
  --color-warning-600: var(--color-warning-base);
  --color-warning-800: var(--color-warning-text);

  --color-info-50:  var(--color-info-bg);
  --color-info-200: var(--color-info-border);
  --color-info-600: var(--color-info-base);
  --color-info-800: var(--color-info-text);

  /* Font sans — Tailwind uses --font-sans for the `font-sans` utility */
  --font-sans: var(--font-body);
}

/* --------------------------------------------------------------------------
   2. Preline token overrides
   Preline uses its own CSS variable namespace (--primary, --primary-hover,
   --sidebar-*, --layer-*, --muted-*, --destructive-*) separate from Tailwind.
   These must be set AFTER Preline's theme.css imports its defaults so they
   win the cascade.
   -------------------------------------------------------------------------- */

:root {
  /* Primary action — Cena teal-400 (#1B685E) */
  --primary-50:  var(--color-primary-50);
  --primary-100: var(--color-primary-100);
  --primary-200: var(--color-primary-200);
  --primary-300: var(--color-primary-300);
  --primary-400: var(--color-primary-400);
  --primary-500: var(--color-primary-500);
  --primary-600: var(--color-primary-600);
  --primary-700: var(--color-primary-700);
  --primary-800: var(--color-primary-800);
  --primary-900: var(--color-primary-900);
  --primary-950: var(--color-primary-950);

  --primary:          var(--color-primary-600);
  --primary-hover:    var(--color-primary-700);
  --primary-focus:    var(--color-primary-700);
  --primary-active:   var(--color-primary-700);
  --primary-checked:  var(--color-primary-600);
  --primary-foreground: var(--color-warm-950);
  --primary-line:     transparent;

  /* Sidebar — warm light surfaces */
  --sidebar:               var(--color-warm-950);
  --sidebar-line:          var(--color-warm-700);
  --sidebar-divider:       var(--color-warm-700);
  --sidebar-nav-foreground: var(--color-warm-300);
  --sidebar-nav-hover:     var(--color-warm-800);
  --sidebar-nav-focus:     var(--color-warm-800);
  --sidebar-nav-active:    var(--color-warm-800);
  --sidebar-inverse:       var(--color-teal-50);

  /* Layer hover states (used by Preline dropdowns, lists) */
  --layer-hover:  var(--color-warm-900);
  --layer-focus:  var(--color-warm-900);
  --layer-active: var(--color-warm-900);

  /* Muted hover states */
  --muted-hover:  var(--color-warm-800);
  --muted-focus:  var(--color-warm-800);
  --muted-active: var(--color-warm-800);

  /* Destructive */
  --destructive:            var(--color-error-base);
  --destructive-foreground: var(--color-warm-950);
  --destructive-hover:      var(--color-error-text);
  --destructive-focus:      var(--color-error-text);
}
```

---

## Step 5 — Update `src/css/main.css`

The import order is critical. Preline's theme.css must come **before** `cena.css`
so Cena's `:root` overrides win the cascade.

Replace the entire contents of `src/css/main.css` with:

```css
/* ==========================================================================
   Cena Health — Main Stylesheet
   Tailwind v4 + Preline v4 + Design System Tokens

   IMPORT ORDER IS LOAD-BEARING — do not reorder:
   1. Token layers (CSS custom properties, no Tailwind dependency)
   2. Tailwind (generates utilities from @theme blocks)
   3. Preline theme defaults (sets --primary-* to blue)
   4. Base styles
   5. cena.css (overrides --primary-* to teal, remaps neutral utilities)
   6. Component CSS (can now use @apply with correctly-mapped utilities)
   ========================================================================== */

/* 1. Token layers */
@import "./tokens-color.css";
@import "./tokens-typography.css";
@import "./tokens-spacing.css";
@import "./tokens-motion.css";

/* 2. Tailwind */
@import "tailwindcss";

/* 3. Preline theme defaults — sets its own --primary-* to blue */
@import "../../node_modules/preline/css/themes/theme.css";

/* 4. Base styles */
@import "./base.css";

/* 5. Cena theme — overrides Preline defaults with Cena teal,
      remaps Tailwind neutral utilities to warm palette */
@import "./cena.css";

/* 6. Components — add new imports here, alphabetically */
@import "./components/alert.css";
@import "./components/button.css";
@import "./components/card.css";
@import "./components/input.css";

/* Slide templates */
@import "./slides/cover-slide.css";
@import "./slides/content-slide.css";
@import "./slides/stat-callout.css";
```

**Remove the entire `@theme` block** that currently appears below the component imports
in `main.css`. All `@theme` content must move to `cena.css` where it belongs.
The `@theme` block in `main.css` duplicates what `cena.css` now handles and having
two `@theme` blocks in the same compilation will cause unpredictable ordering issues.

Wait — before removing, confirm that all `@theme` entries currently in `main.css` are
present in `cena.css`. They are: font families, text sizes, line heights, letter spacing,
spacing, border radius, shadows, breakpoints, and animation easings.

The spacing, radius, shadows, breakpoints, and animation easings are **not** in `cena.css`
yet. Add them to the `@theme` block in `cena.css` before the closing `}`:

```css
  /* Spacing */
  --spacing-px:  0.0625rem;
  --spacing-0-5: 0.125rem;
  --spacing-1:   0.25rem;
  --spacing-1-5: 0.375rem;
  --spacing-2:   0.5rem;
  --spacing-3:   0.75rem;
  --spacing-4:   1rem;
  --spacing-5:   1.25rem;
  --spacing-6:   1.5rem;
  --spacing-8:   2rem;
  --spacing-10:  2.5rem;
  --spacing-12:  3rem;
  --spacing-16:  4rem;
  --spacing-20:  5rem;
  --spacing-24:  6rem;

  /* Border radius */
  --radius-sm:   0.25rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.75rem;
  --radius-xl:   1.25rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px 0 rgba(91, 84, 76, 0.08);
  --shadow-md: 0 4px 16px 0 rgba(91, 84, 76, 0.08);
  --shadow-lg: 0 8px 24px 2px rgba(91, 84, 76, 0.10);

  /* Breakpoints */
  --breakpoint-sm: 600px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;

  /* Font families */
  --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body:    'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono:    'Source Code Pro', ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
  --font-sans:    var(--font-body);

  /* Text sizes */
  --text-3xs:     0.5rem;
  --text-2xs:     0.625rem;
  --text-xs:      0.8125rem;
  --text-sm:      0.875rem;
  --text-base:    1rem;
  --text-md:      1.25rem;
  --text-lg:      1.5625rem;
  --text-xl:      1.9375rem;
  --text-2xl:     2.4375rem;
  --text-3xl:     3.0625rem;
  --text-display: 3.8125rem;

  /* Line heights */
  --leading-none:    1;
  --leading-tight:   1.05;
  --leading-heading: 1.15;
  --leading-snug:    1.2;
  --leading-normal:  1.25;
  --leading-relaxed: 1.45;
  --leading-body-sm: 1.5;
  --leading-body:    1.55;
  --leading-loose:   1.65;

  /* Letter spacing */
  --tracking-tightest: -0.02em;
  --tracking-tight:    -0.01em;
  --tracking-snug:     -0.005em;
  --tracking-normal:    0em;
  --tracking-wide:      0.005em;
  --tracking-wider:     0.01em;
  --tracking-widest:    0.08em;

  /* Animation easings */
  --ease-enter:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit:       cubic-bezier(0.5, 0, 0.75, 0);
  --ease-transition: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-emphasis:   cubic-bezier(0.34, 1.3, 0.64, 1);
  --ease-spatial:    cubic-bezier(0.22, 0.68, 0, 1);
```

After adding these to `cena.css`, the `@theme` block in `main.css` can be removed entirely.

---

## Step 6 — Add Preline JS to the pattern library

Update `pattern-library/partials/pl-scripts.html`. Add the Preline module script
**before** the existing active-nav script. The module script must load as `type="module"`:

```html
<script type="module" src="/src/scripts/main.js"></script>
<script>
(function () {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.pl-nav-link').forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop().split('#')[0];
    if (href && href === current) {
      link.classList.add('active');
    }
  });
})();
</script>
```

---

## Step 7 — Create `src/scripts/` directory

Confirm the directory exists. If not, create it. No other files needed yet.

---

## Verification

After all steps complete:

1. Run `npm run dev` and confirm the dev server starts at `http://localhost:5174`
   with no console errors related to Preline or missing modules.

2. Open `http://localhost:5174/pattern-library/pages/buttons.html` — confirm:
   - [ ] Page renders identically to before (no visual regression)
   - [ ] No console errors

3. Open `http://localhost:5174/pattern-library/pages/alerts.html` — confirm:
   - [ ] Page renders identically to before (no visual regression)
   - [ ] Active nav link "Alerts" is highlighted in the sidebar

4. Add a minimal Preline dropdown to `alerts.html` temporarily to confirm Preline
   initialises correctly. Place this HTML inside any `pl-canvas` div and verify it
   opens/closes:

   ```html
   <!-- Preline init smoke test — remove after verification -->
   <div class="hs-dropdown relative inline-flex" style="margin-top: var(--space-4);">
     <button type="button" class="hs-dropdown-toggle" style="
       font-family: var(--font-body);
       font-size: var(--text-sm);
       padding: var(--space-2) var(--space-3);
       background: var(--color-primary);
       color: var(--color-warm-950);
       border: none;
       border-radius: var(--radius-md);
       cursor: pointer;
     ">
       Preline test ▾
     </button>
     <div class="hs-dropdown-menu" role="menu" style="
       min-width: 10rem;
       background: var(--color-surface-page);
       border: 1px solid var(--color-border-default);
       border-radius: var(--radius-md);
       padding: var(--space-1);
       margin-top: var(--space-1);
     ">
       <a href="#" style="display: block; padding: var(--space-2) var(--space-3); font-size: var(--text-sm); color: var(--color-text-primary); text-decoration: none;">Option 1</a>
       <a href="#" style="display: block; padding: var(--space-2) var(--space-3); font-size: var(--text-sm); color: var(--color-text-primary); text-decoration: none;">Option 2</a>
     </div>
   </div>
   ```

   - [ ] Dropdown opens on click
   - [ ] Dropdown closes on outside click
   - [ ] No console errors

   After confirming, remove the smoke test HTML from `alerts.html`.

5. Run `npm run build:css` — confirm it completes without error and
   `dist/cena-health.css` updates.

---

## Known Constraints

- Do not change any existing component class names in this task
- Do not change any design token values
- Do not modify any component CSS files
- Do not modify any pattern library HTML files (except `pl-scripts.html` for the
  module script addition and `alerts.html` temporarily for the smoke test)
- The `@theme` block move from `main.css` to `cena.css` is a refactor, not a
  design change — values must be identical

---

## Completion Report

```
## Completion Report — INFRA-01

- Files created: [list]
- Files modified: [list]
- npm install output: [confirm preline@4.1.2 installed]
- Preline smoke test result: [opened/closed correctly or error description]
- Build passes: yes / no
- Visual regression on buttons page: none / [describe any diff]
- Items deferred or incomplete: [list, or "none"]
```

Then:
```bash
git add -A
git commit -m "infra: add Preline v4, cena.css theme integration, @theme consolidation"
```

---
**Verify at:** http://localhost:5174/pattern-library/pages/buttons.html
