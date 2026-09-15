---
paths:
  - "data/**"
  - "app/writings/**"
  - "app/projects/**"
  - "app/experience/**"
  - "app/case-studies/**"
  - "scripts/generate-rss.js"
---

**Content is static TS data, not fetched at build/runtime.** There is no `lib/notion.js` or `lib/hashnode.js` anymore (removed in the migration — they were unused, and hardcoded a previous template owner's account). Writing/project/experience content comes from hand-maintained, typed data files (types in `lib/types.ts`):
- `data/writings/writings.ts` — `writingsData`, rendered by `app/writings/page.tsx` and the homepage writings section
- `data/projects/projects.ts` — `projectsData`, rendered by `app/projects/page.tsx` and the homepage
- `data/experience/data.ts` — `experiencesData`, rendered by `app/experience/page.tsx` and the homepage
- `data/caseStudies/caseStudies.ts` — `caseStudiesData`, rendered by `app/case-studies/page.tsx` only (no homepage section)

Adding/editing content generally means editing one of these four files.

**Two separate writing content paths that aren't wired together:** `data/writings/writings.ts` (the array above, driving what's actually shown on `/writings`) is distinct from the `.mdx` files under `data/writings/*.mdx`. Those `.mdx` files are only consumed by `scripts/generate-rss.js` (via frontmatter, using `gray-matter`) to produce `public/rss.xml` during `postbuild` — they don't render as pages. If you add a post to the RSS feed, also add its card data to `writings.ts` (and vice versa) if it should show up in both places.
