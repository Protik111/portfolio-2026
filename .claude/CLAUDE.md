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

This is a **Next.js 16 App Router** app (TypeScript). It was migrated from a Next.js 12 Pages Router / JavaScript / Chakra UI codebase; see git history before this migration commit if you need the old structure for reference. **No more DevDog / Three.js / MDX rendering / EmailJS / react-toastify** — all were dead code removed in that migration (`components/DevDog` + `public/dog.glb`, `@next/mdx`, and EmailJS/react-toastify — the current contact page is just mailto/Calendly links). Don't reintroduce them without checking whether the need is real first.

**Toolchain note:** `typescript` is pinned to the 6.x line, not the newer native-compiler 7.x, because `typescript-eslint` (pulled in by `eslint-config-next`) doesn't support TS 7 yet. Likewise `eslint` is pinned to 9.x — `eslint-config-next@16.3.2`'s bundled `eslint-plugin-react` still calls an ESLint API that ESLint 10 removed. Re-check both pins when bumping either package.

## Architecture

Topic-specific detail lives in `.claude/rules/` and is pulled into context automatically once you touch a matching file — no need to read them upfront:
- `rules/content-data.md` — the static-data files behind writings/projects/experience/case-studies, and the separate `.mdx` → RSS path
- `rules/routing.md` — `app/[slug]/page.tsx` as a profile-redirect router, not a content page
- `rules/seo-metadata.md` — the `buildMetadata()` convention
- `rules/theming.md` — the `data-theme` dark-mode attribute + Tailwind v4 token wiring
- `rules/ui-primitives.md` — `components/ui/` + `cn()` (hand-assembled, no shadcn CLI)
- `rules/root-layout.md` — `app/layout.tsx`, `#app-root`, and the `.bg-decor` gotcha for fixed background layers
- `rules/page-structure.md` — how `app/*/page.tsx` composes `components/`

The root `CLAUDE.md` (one level up) holds only the auto-managed Next.js agent-rules block — `next dev` regenerates it there, at the actual project root, not here. Don't move it into this file.
