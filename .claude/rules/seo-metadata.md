---
paths:
  - "lib/metadata.ts"
  - "app/**/page.tsx"
  - "app/layout.tsx"
---

**SEO/metadata** uses the App Router's native metadata API instead of a `<Seo />` component. `lib/metadata.ts` exports `buildMetadata({ title, description, path })`, called from each page's `export const metadata = ...`. The root `app/layout.tsx` sets the site-wide default.
