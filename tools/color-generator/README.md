# Cena Color System v2 — Generator

Build-time tool that emits the canonical palette CSS for Cena Color System v2.

## What it does

1. Reads `family-source.json` — mirror of `_tokens/color-system-v2.md` §3 + §3b family triplets (root/max/min OKLCH for each of 18 active families) plus the 4 logo-identity hex values.
2. Computes 11 stops per family via linear-in-L interpolation in OKLCH space (per spec §1.4).
3. Emits `_tokens/generated/palette.css` with:
   - Logo identity tokens (hex-frozen, pass-through)
   - 18 families × 11 stops × 2 declarations (OKLCH primary + sRGB hex fallback at `-hex` suffix)

## Running

```bash
cd tools/color-generator
npm install  # one-time
npm run build
```

Output lands at `_tokens/generated/palette.css`.

## Consuming in haven-ui

Manual copy for now:

```bash
cp _tokens/generated/palette.css \
   ../../Lab/haven-ui/packages/design-system/src/styles/tokens/palette.css
```

A future automated sync (npm-package or shared workspace) is Phase F polish.

## Source-of-truth contract

- `_tokens/color-system-v2.md` is **human-canonical** — design rationale, restraint principles, validation rules.
- `family-source.json` is **machine-canonical** — the structured form the generator reads.
- Both must match. If the spec is updated, update the JSON in the same commit.

## Validation

The generator validates:
- Every active family produces 11 OKLCH stops + 11 hex fallbacks
- Every logo identity token is emitted
- No computed L value is out of [0, 100] range

If validation fails, the generator exits with code 1 and reports the issue list.

## Not validated (by design)

- Family palette stops are NOT validated against the logo identity registry. Per spec §1.5, family palette and logo identity are decoupled. Family stops may drift slightly from logo hex at the equivalent stop number; that drift is intentional and acceptable.

## Adding a family

1. Add the new family's `root`, `max`, `min` OKLCH triplets to `_tokens/color-system-v2.md` (with hue position rationale).
2. Mirror the same triplets in `family-source.json` under `families`.
3. Run `npm run build`. The generator emits the new family's 22 declarations (11 OKLCH + 11 hex).
4. Visual review against the preview at `pattern-library/pages/color-system-v2-preview.html`.

## Dropping a family

1. Note the drop rationale in the spec (e.g., spec §3b.5 "sky — DROPPED 2026-05-11").
2. Move the family's entry from `families` to `dropped` in `family-source.json`. The `dropped` entry preserves the values in case of revival.
3. Run `npm run build`. The dropped family's tokens are not generated.

## Curve choice

Linear-in-L (k=1) per spec §1.4 — every numerical stop sits at an equal L-delta from neighbors. Earlier draft used cubic ease k=2.4; switched on Aaron's feedback (2026-05-11) because cubic clustered values at extremes and starved the middle.

If a future curve change is needed, update the `mix` weights in `STOPS` at the top of `generate.mjs` and re-run.
