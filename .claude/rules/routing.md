---
paths:
  - 'app/\[slug\]/**'
  - "utils/profiles.ts"
---

**`app/[slug]/page.tsx` is a redirect router, not a content page.** It matches `utils/profiles.ts` entries (social profile short links like `/github`, `/twitter`) and server-redirects (`redirect()` from `next/navigation`) to the external profile URL — it has nothing to do with blog slugs. `dynamicParams = false` makes any slug not in `profiles` 404 instead of falling through to a redirect.
