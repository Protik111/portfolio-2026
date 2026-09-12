---
paths:
  - "app/**/page.tsx"
  - "components/Home/**"
---

**Page structure**: pages under `app/*/page.tsx` are thin — they assemble `Header`, `Footer`, and one or more feature components from `components/`, plus a `metadata` export. Most page-specific composition logic lives in `components/Home/index.tsx` (assembles Projects/Experience/Tech Stack/Education/Blogs/Contact sections for the homepage) rather than in `app/page.tsx` itself.
