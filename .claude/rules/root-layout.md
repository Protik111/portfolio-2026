---
paths:
  - "app/layout.tsx"
  - "app/globals.css"
  - "components/ScrollRestoration.tsx"
---

**Root layout** (`app/layout.tsx`) replaces the old `_app.js`/`_document.js` split: it inlines the pre-hydration theme-flash-prevention script and the homepage reload-loader-flag script (both must run before first paint), and renders a `ScrollRestoration` client component for `history.scrollRestoration = "manual"`. There's no `#__next` wrapper in the App Router — `#app-root` (a div in the layout) plays that role for the CSS that used to target `#__next`.

**`#app-root`'s fixed decorative background layers need a `.bg-decor` class.** `app/globals.css` resets `#app-root > div { background: transparent !important }` so a page's own opaque root `<div>` doesn't cover the glow/grid layers sitting behind it — but that selector matches *any* direct-child div, including the decorative layers themselves. Any fixed-position background effect added in `app/layout.tsx` (alongside `.top-glow`) must carry `.bg-decor` (excluded via `:not(.bg-decor)`) or its own `background`/`background-image` gets silently wiped to transparent.
