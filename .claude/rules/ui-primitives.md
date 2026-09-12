---
paths:
  - "components/ui/**"
  - "lib/utils.ts"
---

**`components/ui/` holds shadcn-style primitives, added by hand.** There's no shadcn CLI, no `components.json`, no registry wired up — `components/ui/*` and the `cn()` helper (`lib/utils.ts`, `clsx` + `tailwind-merge`) were created manually to match that convention when copy-pasting community components (e.g. `vignette-grid-background.tsx`). Feature components stay under `components/<Feature>/` as before; only generic, page-agnostic visual primitives belong in `components/ui/`.
