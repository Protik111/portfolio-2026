# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build (also triggers postbuild: sitemap + rss.xml, see below)
npm run start   # serve the production build
npm run lint    # eslint . (config: eslint.config.mjs, flat config from eslint-config-next)
```

There is no test suite in this repo.

`npm run build` chains a `postbuild` step (`sitemap` via `next-sitemap.config.js`, then `rss:feed` which runs `scripts/generate-rss.js`) — both write into `public/` (`sitemap.xml`, `sitemap-0.xml`, `rss.xml`).

This is a **Next.js 16 App Router** app (TypeScript). It was migrated from a Next.js 12 Pages Router / JavaScript / Chakra UI codebase; see git history before this migration commit if you need the old structure for reference.

**Toolchain note:** `typescript` is pinned to the 6.x line, not the newer native-compiler 7.x, because `typescript-eslint` (pulled in by `eslint-config-next`) doesn't support TS 7 yet. Likewise `eslint` is pinned to 9.x — `eslint-config-next@16.3.2`'s bundled `eslint-plugin-react` still calls an ESLint API that ESLint 10 removed. Re-check both pins when bumping either package.

## Architecture

**Content is static TS data, not fetched at build/runtime.** There is no `lib/notion.js` or `lib/hashnode.js` anymore (removed in the migration — they were unused, and hardcoded a previous template owner's account). Blog/project/experience content comes from hand-maintained, typed data files (types in `lib/types.ts`):
- `data/blogs/blogs.ts` — `blogsData`, rendered by `app/blogs/page.tsx` and the homepage blog section
- `data/projects/projects.ts` — `projectsData`, rendered by `app/projects/page.tsx` and the homepage
- `data/experience/data.ts` — `experiencesData`, rendered by `app/experience/page.tsx` and the homepage

Adding/editing content generally means editing one of these three files.

**Two separate blog content paths that aren't wired together:** `data/blogs/blogs.ts` (the array above, driving what's actually shown on `/blogs`) is distinct from the `.mdx` files under `data/blogs/*.mdx`. Those `.mdx` files are only consumed by `scripts/generate-rss.js` (via frontmatter, using `gray-matter`) to produce `public/rss.xml` during `postbuild` — they don't render as pages. If you add a blog post to the RSS feed, also add its card data to `blogs.ts` (and vice versa) if it should show up in both places.

**`app/[slug]/page.tsx` is a redirect router, not a content page.** It matches `utils/profiles.ts` entries (social profile short links like `/github`, `/twitter`) and server-redirects (`redirect()` from `next/navigation`) to the external profile URL — it has nothing to do with blog slugs. `dynamicParams = false` makes any slug not in `profiles` 404 instead of falling through to a redirect.

**SEO/metadata** uses the App Router's native metadata API instead of a `<Seo />` component. `lib/metadata.ts` exports `buildMetadata({ title, description, path })`, called from each page's `export const metadata = ...`. The root `app/layout.tsx` sets the site-wide default.

**Theming** uses a `data-theme="dark"|"light"` attribute on `<html>` (set/read via `localStorage` in `utils/ThemeToggleButton.tsx`), not Chakra or Tailwind's default `prefers-color-scheme`-based dark mode — Chakra UI was removed entirely in the migration (it was never actually mounted; nothing rendered through it). Dark-mode values live in `app/globals.css` via `[data-theme='dark']` overrides on CSS custom properties (`var(--bg)`, `var(--fg)`, `var(--muted)`, `var(--border)`, `var(--card-bg)`, etc). Tailwind v4's `dark:` variant is repointed at that same attribute via `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));` in `app/globals.css` — the default `prefers-color-scheme` strategy would silently no-op against this app's toggle.

**Styling is Tailwind v4** (CSS-first config, no `tailwind.config.js`) layered on the same CSS-variable design tokens the app always used. `@theme inline` in `app/globals.css` wires `--bg`/`--fg`/`--muted`/`--card-bg`/`--border`/font vars into Tailwind utilities (`bg-bg`, `text-fg`, `border-border`, `font-sans`, …) so the utilities keep tracking the live (theme-switchable) CSS vars rather than static values. A handful of hand-authored classes (`.card`, `.btn-neo`, `.badge`, `.section-heading`, `.container-narrow`/`.container-wide`, `.pill-nav`, `.tooltip`, `.celestial-loader`, etc.) remain as plain CSS in `globals.css` rather than being fully atomized into utilities — they're reused across many components, so keeping them as named classes avoids repeating long utility strings everywhere.

**Root layout** (`app/layout.tsx`) replaces the old `_app.js`/`_document.js` split: it inlines the pre-hydration theme-flash-prevention script and the homepage reload-loader-flag script (both must run before first paint), and renders a `ScrollRestoration` client component for `history.scrollRestoration = "manual"`. There's no `#__next` wrapper in the App Router — `#app-root` (a div in the layout) plays that role for the CSS that used to target `#__next`.

**Page structure**: pages under `app/*/page.tsx` are thin — they assemble `Header`, `Footer`, and one or more feature components from `components/`, plus a `metadata` export. Most page-specific composition logic lives in `components/Home/index.tsx` (assembles Projects/Experience/Tech Stack/Education/Blogs/Contact sections for the homepage) rather than in `app/page.tsx` itself.

**No more DevDog / Three.js / MDX rendering / EmailJS / react-toastify.** All were dead code removed in the migration: `components/DevDog` (unused Three.js scene) and `public/dog.glb`, `@next/mdx` (no page ever rendered `.mdx` directly), and EmailJS/react-toastify (the current contact page is just mailto/Calendly links — no email-sending code exists).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
