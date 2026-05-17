# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal blog at `vinsong.csie.org`, built on the [`astro-theme-pure`](https://github.com/cworld1/astro-theme-pure) template (Astro 6 + MDX + UnoCSS). Deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml` (uses `withastro/action@v5`). The custom domain is pinned via `public/CNAME`.

Bun is the package manager of record (`bun.lock` is the source of truth; `package-lock.json` exists but Bun is what the README and scripts assume).

## Commands

```shell
bun install              # install deps
bun dev                  # astro dev server (host:true, see astro.config.ts)
bun run build            # astro-pure check && astro check && astro build
bun preview              # preview built site
bun new                  # scaffold a new post via astro-pure CLI
bun run check            # astro check (type-check .astro + content schemas)
bun run sync             # astro sync (regenerate .astro types after schema edits)
bun run lint             # eslint --fix on src/**/*.{js,ts,jsx,tsx,astro}
bun run format           # prettier --write '**/*.{js,jsx,ts,tsx,md,mdx,astro}'
bun run yijiansilian     # lint + sync + check + format (run before committing larger edits)
bun run clean            # rm -rf .astro .vercel dist
bun run cache:avatars    # opt-in: cache friend-link avatars to public/avatars/
```

`astro-pure check` runs *before* `astro check` in the build — it validates content against the theme's own schemas and will fail the build on issues. Don't expect `astro check` alone to catch everything.

## Architecture

### Theme is consumed via an integration, not vendored

`astro.config.ts` wires up exactly one integration: `AstroPureIntegration(config)` from the `astro-pure` npm package. That integration internally registers MDX, sitemap, UnoCSS, and pagefind — do **not** add those manually. All theme-level behavior (header menu, footer, share buttons, waline comments, hitokoto/quotes, mediumZoom, typography, pagefind) is driven by the single config object exported from `src/site.config.ts`.

A local copy of the theme lives at `packages/pure/` but the runtime imports come from `node_modules/astro-pure` (see `package.json` dependency `astro-pure: 1.3.6`). Treat `packages/pure/` as reference, not as the active source — editing it does not affect the site.

### Content collections

Defined in `src/content.config.ts`:
- `blog` — `src/content/blog/**/*.{md,mdx}`. Required frontmatter: `title` (≤60), `description` (≤160), `publishDate`. Optional: `updatedDate`, `heroImage`, `tags`, `language`, `draft`, `comment`.
- `docs` — `src/content/docs/**/*.{md,mdx}`. Adds `order` (default 999) for sidebar sorting.

Tags are lowercased and de-duped by the schema transform. The blog post route is `src/pages/blog/[...id].astro`; the paginated list is `[...page].astro`. After changing the schema, run `bun run sync` so `.astro/types.d.ts` regenerates.

### MDX conventions (important when editing posts)

`convert.md` at the repo root is the spec the author uses to port HackMD/Obsidian notes into this site's MDX. When converting or authoring posts, follow it:
- HackMD/Obsidian callouts `> [!Note] Title\n> body` become `<Aside type="note" title="Title">…</Aside>` (imported from `astro-pure/user`).
- HackMD code-block titles ` ```c=main.c ` become ` ```c title="main.c" `.
- Preserve original text verbatim; only the syntax wrappers change.

Math is enabled globally: `remark-math` + `rehype-katex` are wired in `astro.config.ts`. Use `$…$` / `$$…$$` in any post without per-file setup. Heading anchors are added by a local plugin (`src/plugins/rehype-auto-link-headings.ts`), and Shiki gets custom transformers from `src/plugins/shiki-transformers.ts` (copy button, title bar, language badge, notation diff/highlight). Themes are `github-light` / `github-dark`.

### Layouts, pages, and the `/note` page

Layouts live in `src/layouts/` (`BaseLayout`, `BlogPost`, `CommonPage`, `ContentLayout`, `IndividualPage`). Top-level routes are in `src/pages/`. The header menu in `site.config.ts` must match the page set: changing the menu without adding the corresponding `src/pages/<slug>/index.astro` produces dead links.

`src/pages/note/index.astro` is a hand-curated PDF index that renders `PDFCard` components for class notes stored in `public/pdf/` with thumbnails in `public/images/`. To add a note, add the PDF + thumbnail under `public/` and append an entry to the `notes` array — there's no automatic loader.

### Path aliases

`tsconfig.json` defines `@/assets`, `@/components`, `@/layouts`, `@/pages`, `@/plugins`, `@/utils`, `@/types`, `@/site-config`. Prefer these over relative paths in `src/`.

### Avatar caching is opt-in

`scripts/cacheAvatars.ts` short-circuits unless `integ.links.cacheAvatar` is `true` in `site.config.ts`. The current config has it disabled, so `bun run cache:avatars` is a no-op until that flag flips.

## Style

ESLint (`eslint.config.mjs`) + Prettier (`prettier.config.mjs` with `@ianvs/prettier-plugin-sort-imports` and `prettier-plugin-astro`) handle formatting and import ordering — don't hand-sort imports. The Astro tsconfig extends `astro/tsconfigs/strict` with `strictNullChecks` and `verbatimModuleSyntax` on, so type-only imports must be marked `import type`.
