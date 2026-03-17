# Cena Health — Toast Component Spec

_Design specification for the Toast notification component. All values reference named semantic tokens._

---

## 1. Overview

Toasts are non-blocking, temporary notifications that appear at the edge of the viewport. They confirm completed actions, report background status updates, or surface system messages. Unlike alerts (which are inline and persistent), toasts are floating and auto-dismiss after a timeout.

**Variants:** Info, Warning, Error, Success
**Position:** Top-right of viewport, stacked vertically
**Behavior:** Auto-dismiss after 5 seconds (configurable). Error toasts persist until manually dismissed.

---

## 2. Anatomy

```
┌────────────────────────────────────────────┐
│  [icon]  Title — optional                  [×]  │
│          Message text                            │
└────────────────────────────────────────────┘
```

### Parts

- **Container:** Floating panel with `surface-page` background, high shadow, left accent border.
- **Icon:** Variant-specific status icon at `icon-md` (20px).
- **Title:** Optional bold label. Source Sans 3, `text-sm`, SemiBold 600.
- **Message:** Description text. Source Sans 3, `text-sm`, Regular 400.
- **Dismiss button:** Always present. × icon with `aria-label`.

---

## 3. Visual Properties

### Container

| Property | Value |
|----------|-------|
| **Background** | `color-surface-page` |
| **Border** | 1px `color-border-default` |
| **Border-left** | 3px variant accent color |
| **Border radius** | `radius-md` (8px) |
| **Shadow** | `shadow-lg` — floating above all content |
| **Width** | 22rem (352px) |
| **Max-width** | `calc(100vw - space-8)` |
| **Padding** | `space-3` vertical × `space-4` horizontal |
| **Gap** | `space-2` between icon, content, and dismiss |

### Toast Container (viewport-level)

| Property | Value |
|----------|-------|
| **Position** | Fixed, top-right |
| **Inset** | `space-4` from top and right edges |
| **Stack gap** | `space-3` between toasts |
| **Z-index** | 60 (above modals at 50) |

### Variant Accent Colors

| Variant | Border-left | Icon color | Title color |
|---------|-------------|------------|-------------|
| **Info** | `color-info-base` | `color-info-base` | `color-info-text` |
| **Warning** | `color-warning-base` | `color-warning-base` | `color-warning-text` |
| **Error** | `color-error-base` | `color-error-base` | `color-error-text` |
| **Success** | `color-success-base` | `color-success-base` | `color-success-text` |

### Dismiss Button

Same pattern as alert dismiss: 2.75rem touch target, 70% opacity at rest, 100% on hover. Positioned top-right of toast.

---

## 4. Motion Behavior

Per motion.md §3.6:

### Enter

| Property | Value |
|----------|-------|
| **Easing** | Enter (`cubic-bezier(0.16, 1, 0.3, 1)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform** | `translateX(space-10)` → `translateX(0)` |
| **Opacity** | 0.6 → 1 |

### Auto-Dismiss Exit

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-normal` (200ms) |
| **Transform** | `translateX(0)` → `translateX(space-10)` |
| **Opacity** | 1 → 0 |

### User-Dismiss Exit

| Property | Value |
|----------|-------|
| **Easing** | Exit (`cubic-bezier(0.5, 0, 0.75, 0)`) |
| **Duration** | `duration-fast` (120ms) |
| **Transform** | `translateX(0)` → `translateX(space-10)` |
| **Opacity** | 1 → 0 |

### Reduced Motion

- Enter/exit: instant show/hide, no animation.

---

## 5. Auto-Dismiss Behavior

- **Default timeout:** 5 seconds.
- **Error toasts:** Do not auto-dismiss. Require manual dismissal.
- **Hover pauses timer:** Hovering over a toast pauses the auto-dismiss countdown. Timer resumes on mouse leave.
- **Progress indicator:** Optional thin bar at the bottom that shrinks over the timeout duration, providing a visual cue of remaining time.

---

## 6. Stacking

Multiple toasts stack vertically from the top. Newest toast appears at the top, pushing older toasts down. When a toast is dismissed, remaining toasts slide up to fill the gap.

Maximum visible toasts: 3. If a 4th toast arrives, the oldest is auto-dismissed immediately.

---

## 7. Accessibility

1. **`role="status"` and `aria-live="polite"`** for info and success toasts.
2. **`role="alert"` and `aria-live="assertive"`** for error and warning toasts.
3. **Dismiss button has `aria-label="Dismiss"`.**
4. **Auto-dismiss respects `prefers-reduced-motion`** — but the timeout still applies; only the animation is removed.
5. **Toasts do not steal focus** from the user's current task.

---

## 8. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.toast-container` | Fixed viewport-level wrapper |
| `.toast` | Individual toast panel |
| `.toast-info` | Info variant |
| `.toast-warning` | Warning variant |
| `.toast-error` | Error variant |
| `.toast-success` | Success variant |
| `.toast-icon` | Status icon |
| `.toast-content` | Text wrapper (title + message) |
| `.toast-title` | Optional bold title |
| `.toast-message` | Description text |
| `.toast-dismiss` | Close button |
| `.toast-progress` | Auto-dismiss progress bar |
| `.toast-enter` | Enter animation |
| `.toast-exiting` | Exit animation (user dismiss) |
| `.toast-auto-exiting` | Exit animation (auto dismiss) |
