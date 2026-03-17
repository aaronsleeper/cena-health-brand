# Cena Health — Select Component Spec

_Design specification for select dropdowns. All values reference named semantic tokens._

---

## 1. Overview

Styled native `<select>` element matching the input field appearance. Uses a custom chevron indicator. For complex multi-select or searchable select, use combobox instead.

---

## 2. Visual Properties

Same as `.input-field` with a custom dropdown chevron on the right. Inherits all input states (hover, focus, disabled, error).

---

## 3. CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.select-field` | Styled `<select>` element |
| `.select-field-sm` | Small variant |
| `.select-field-error` | Error state |
