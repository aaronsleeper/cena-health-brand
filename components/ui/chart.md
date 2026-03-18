# Chart

CSS wrapper classes for Chart.js v4 canvas elements with Cena brand color constants. Line, bar, and sparkline variants only — no pie or donut charts (Tufte principle).

## Classes

| Class | Purpose |
|---|---|
| `chart-wrapper` | Relative wrapper, controls canvas sizing |
| `chart-line` | Line chart height: 240px |
| `chart-bar` | Bar chart height: 200px |
| `chart-sparkline` | Sparkline height: 40px, no axes |
| `chart-title` | Optional title above chart |
| `chart-legend` | Custom legend row |
| `chart-legend-item` | Legend entry (dot + label) |
| `chart-legend-dot` | Colored circle in legend |

## Chart.js loading

Chart.js v4 via CDN only. Load on individual pages that need charts — never in pl-head.html.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
```

## Color constants

All chart colors must use the `CENA.*` JS constants — never raw hex in chart markup or JS.

## No pie or donut charts

This is a firm design principle, not a preference. Use stat cards, bar charts, or numeric comparisons instead.
