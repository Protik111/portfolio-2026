# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build (also triggers postbuild: sitemap + rss.xml, see below)
npm run start   # serve the production build
npm run lint    # next lint (config: .eslintrc.json, extends next/core-web-vitals)
```

There is no test suite in this repo.

`npm run build` chains a `postbuild` step (`sitemap` via `next-sitemap.config.js`, then `rss:feed` which runs `scripts/generate-rss.js`) — both write into `public/` (`sitemap.xml`, `sitemap-0.xml`, `rss.xml`).

This is a **Next.js 12 Pages Router** app (JavaScript, not TypeScript, despite `.tsx`/`.ts` being listed in `pageExtensions`).

## Architecture

**Content is static JS/JSON, not fetched at build/runtime — despite the `lib/` API clients.** `lib/notion.js` (Notion API) and `lib/hashnode.js` (Hashnode GraphQL) exist but are not imported anywhere in the app; blog/project/experience content actually rendered on pages comes from hand-maintained data files instead:
- `data/blogs/blogs.js` — `blogsData` array, rendered by `pages/blogs/index.js` and the homepage blog section
- `data/projects/projects.js` — `projectsData` array, rendered by `pages/projects.js` and the homepage
- `data/experience/data.json` — rendered by `pages/experience.js` and the homepage

Adding/editing content generally means editing one of these three files, not touching `lib/`.

**Two separate blog content paths that aren't wired together:** `data/blogs/blogs.js` (the array above, driving what's actually shown on `/blogs`) is distinct from the `.mdx` files under `data/blogs/*.mdx`. Those `.mdx` files are only consumed by `scripts/generate-rss.js` (via frontmatter, using `gray-matter`) to produce `public/rss.xml` during `postbuild` — they don't render as pages. If you add a blog post to the RSS feed, also add its card data to `blogs.js` (and vice versa) if it should show up in both places.

**`pages/[slug].js` is a redirect router, not a content page.** It matches `utils/profiles.js` entries (social profile short links like `/github`, `/twitter`) and immediately client-side redirects (`router.push`) to the external profile URL — it has nothing to do with blog slugs.

**Environment variables** (see `next.config.js` `env` block) are consumed under `NEXT_PUBLIC_*` names and re-exposed under shorter names in `process.env`: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPALTE_ID` (sic), `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_NOTION_TOKEN`, `NEXT_PUBLIC_NOTION_DATABASE_ID`, `NEXT_PUBLIC_HASHNODE_KEY`. These are used by `@emailjs/browser` in the contact form (`pages/contact.js`) and by the unused `lib/` clients above.

**Theming** uses a `data-theme="dark"|"light"` attribute on `<html>` (set/read via `localStorage` in `utils/ThemeToggleButton.js`) rather than Chakra's color mode — `utils/theme.js` pins Chakra's `initialColorMode` to `"light"` with `useSystemColorMode: false`, and the actual dark-mode styling lives in `styles/global.css` via `[data-theme='dark']` selector overrides on CSS custom properties (`var(--bg)`, `var(--fg)`, `var(--muted)`, `var(--border)`, `var(--card-bg)`, etc). Most inline component styles reference these CSS vars directly rather than Chakra theme tokens.

**3D model rendering**: `components/DevDog/index.js` sets up a raw Three.js scene (renderer/camera/OrbitControls, manual RAF loop) that loads `public/dog.glb` via `utils/model.js`'s `loadGLTFModel`. This component isn't wired into `pages/index.js`'s current render tree — check before assuming it's live on the homepage.

**Page structure**: Pages under `pages/` are thin — they assemble `Seo` (SEO/meta tags, `components/Seo`), `Header`, `Footer`, and one or more feature components from `components/`. Most page-specific composition logic lives in `components/Home/index.js` (assembles Projects/Experience/Tech Stack/Education/Blogs/Contact sections for the homepage) rather than in `pages/index.js` itself.

**MDX support** is enabled via `@next/mdx` in `next.config.js` (`pageExtensions` includes `md`/`mdx`), but no page currently renders MDX blog content directly — see the two blog paths note above.
