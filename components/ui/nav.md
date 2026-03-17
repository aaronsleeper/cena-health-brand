# Cena Health — Nav Component Spec

_Design specification for navigation components: tab bar and breadcrumbs. All values reference named semantic tokens._

---

## 1. Overview

Navigation components provide wayfinding within the application. Tab bars switch between views within a context. Breadcrumbs show hierarchical position.

Sidebar navigation and top nav bars are application-level concerns handled at the layout level, not as reusable components. This spec covers the reusable navigation primitives.

**Components:** Tab Bar, Breadcrumbs

---

## 2. Tab Bar

### Anatomy

```
┌───────────────────────────────────────────────────┐
│  [Tab 1]   [Tab 2]   [Tab 3]   [Tab 4]           │
│  ════════                                          │  ← active indicator
├───────────────────────────────────────────────────┤
│  Tab content area                                  │
└───────────────────────────────────────────────────┘
```

### Visual Properties

| Property | Value |
|----------|-------|
| **Container** | `flex`, bottom border 1px `color-border-default` |
| **Tab padding** | `space-2` vertical × `space-4` horizontal |
| **Tab gap** | `space-1` between tabs |
| **Font** | Source Sans 3, `text-sm` (14px), Medium 500 |

### Tab States

| State | Color | Border-bottom | Background |
|-------|-------|--------------|-----------|
| **Default** | `color-text-secondary` | None | transparent |
| **Hover** | `color-text-primary` | None | `color-surface-primary` |
| **Active** | `color-text-brand` | 2px `color-primary` | transparent |
| **Disabled** | `color-text-disabled` | None | transparent |

### Active Indicator

The active tab has a 2px bottom border in `color-primary` that sits on top of the container's border. This creates a clear "you are here" signal without adding visual weight.

---

## 3. Breadcrumbs

### Anatomy

```
Home  /  Patients  /  Maria Rivera  /  Care Plan
 link     link          link          current (not linked)
```

### Visual Properties

| Property | Value |
|----------|-------|
| **Container** | `flex`, wrap, centered vertically |
| **Gap** | `space-1` between items and separators |
| **Font** | Source Sans 3, `text-sm` (14px), Regular 400 |
| **Link color** | `color-text-secondary` |
| **Link hover** | `color-text-brand` |
| **Current color** | `color-text-primary`, Medium 500 |
| **Separator** | `/` in `color-text-tertiary` |

---

## 4. Motion

### Tab Switch

| Property | Value |
|----------|-------|
| **Active indicator** | Transition easing, `duration-fast` |
| **Tab color change** | Transition easing, `duration-fast` |

### Reduced Motion

- Tab indicator: instant position change.

---

## 5. Accessibility

### Tab Bar
1. **`role="tablist"`** on the container.
2. **`role="tab"`** on each tab, **`role="tabpanel"`** on content areas.
3. **`aria-selected="true"`** on the active tab.
4. **Arrow keys** navigate between tabs.
5. **`aria-disabled="true"`** on disabled tabs.

### Breadcrumbs
1. **`<nav aria-label="Breadcrumb">`** wrapper.
2. **`<ol>`** for the list structure.
3. **`aria-current="page"`** on the current (last) item.

---

## 6. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.tabs` | Tab bar container |
| `.tab` | Individual tab button |
| `.tab-active` | Active tab state |
| `.tab-panel` | Tab content panel |
| `.breadcrumb` | Breadcrumb nav container |
| `.breadcrumb-list` | Ordered list |
| `.breadcrumb-item` | Individual breadcrumb |
| `.breadcrumb-separator` | `/` separator |
| `.breadcrumb-current` | Current page (not linked) |
