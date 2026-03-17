# Cena Health — File Upload Component Spec

---

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.file-upload` | Dashed border dropzone container |
| `.file-upload-icon` | Centered upload icon |
| `.file-upload-text` | Primary instruction text |
| `.file-upload-hint` | Secondary hint text (file types, size limit) |

## Anatomy

```
.file-upload
  .file-upload-icon  (upload SVG icon)
  .file-upload-text  "Drag and drop files here, or click to browse"
  .file-upload-hint  "PDF, PNG, JPG up to 10MB"
```

## Design Tokens

- Border: 2px dashed `var(--color-border-default)`
- Border radius: `var(--radius-md)`
- Padding: `var(--space-8) var(--space-6)`
- Background: transparent
- Drag-over border: `var(--color-primary)`
- Drag-over background: `var(--color-surface-teal)`
- Icon size: `var(--icon-xl)`, color `var(--color-text-tertiary)`
- Text: `var(--text-sm)`, `var(--color-text-primary)`
- Hint: `var(--text-xs)`, `var(--color-text-tertiary)`
