---
paths:
  - "app/globals.css"
  - "utils/ThemeToggleButton.tsx"
---

**Theming** uses a `data-theme="dark"|"light"` attribute on `<html>` (set/read via `localStorage` in `utils/ThemeToggleButton.tsx`), not Chakra or Tailwind's default `prefers-color-scheme`-based dark mode — Chakra UI was removed entirely in the migration (it was never actually mounted; nothing rendered through it). Dark-mode values live in `app/globals.css` via `[data-theme='dark']` overrides on CSS custom properties (`var(--bg)`, `var(--fg)`, `var(--muted)`, `var(--border)`, `var(--card-bg)`, etc). Tailwind v4's `dark:` variant is repointed at that same attribute via `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));` in `app/globals.css` — the default `prefers-color-scheme` strategy would silently no-op against this app's toggle.

**Styling is Tailwind v4** (CSS-first config, no `tailwind.config.js`) layered on the same CSS-variable design tokens the app always used. `@theme inline` in `app/globals.css` wires `--bg`/`--fg`/`--muted`/`--card-bg`/`--border`/font vars into Tailwind utilities (`bg-bg`, `text-fg`, `border-border`, `font-sans`, …) so the utilities keep tracking the live (theme-switchable) CSS vars rather than static values. A handful of hand-authored classes (`.card`, `.btn-neo`, `.badge`, `.section-heading`, `.container-narrow`/`.container-wide`, `.pill-nav`, `.tooltip`, `.celestial-loader`, etc.) remain as plain CSS in `globals.css` rather than being fully atomized into utilities — they're reused across many components, so keeping them as named classes avoids repeating long utility strings everywhere.
