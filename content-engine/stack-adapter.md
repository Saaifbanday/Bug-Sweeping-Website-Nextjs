# Stack adapter (recorded 19 September 2026)

## Stack
- Next.js 16.2.3, App Router, React 19.2.4, TypeScript 5, Tailwind CSS v4 (`@tailwindcss/postcss`).
- Package manager: npm (`package-lock.json`).
- Commands: `npm run dev`, `npm run build`, `npm run lint` (eslint 9, `eslint-config-next`). No separate typecheck script; `next build` runs type checking.
- No CLAUDE.md or contributing guide in the repo. `docs/project-overview.md` describes the design system (it says Next.js 15; package.json says 16.2.3).

## Blog posts
- Stored as a TypeScript array in `lib/blog-data.ts` (`BlogPost` interface). Body is an HTML string in `content`, rendered with `dangerouslySetInnerHTML` inside `.prose-custom` by `app/blog/[slug]/page.tsx`.
- Fields: `slug`, `title` (becomes the H1), `excerpt` (shown under the H1, used as meta description and on the index card), `date` (ISO), `readTime`, `category`, `coverImage`, `content`.
- Optional fields added by the engine (19 Sep 2026): `seoTitle`, `metaDescription`, `coverImageAlt`, `dateModified`, `faqs`, `jsonLd`. Existing posts omit them and fall back to the old behaviour.
- The H1 comes from `post.title` in the layout; post bodies start at H2.
- Styles for body HTML: `.prose-custom` in `app/globals.css`.
- Blog index: `app/blog/page.tsx` renders `BlogGrid` from `blogPosts` (array order).
- Sitemap: `app/sitemap.ts`, generated from `blogPosts` and `cities`.
- Images: `public/images/blogs/`.

## Metadata and JSON-LD
- Root metadata in `app/layout.tsx` (`metadataBase` https://www.bugsweepingtscm.com).
- Before 19 Sep 2026 there was no JSON-LD anywhere in the repo. Blog posts may now carry a per-page graph via `post.jsonLd`, serialised with `<` escaped as `\u003c`.
- Canonical for blog posts was `https://bugsweepingtscm.com/blog/<slug>` (non-www) before 19 Sep 2026; now `https://www.bugsweepingtscm.com/blog/<slug>`.

## Locations
- `app/locations/[city]/page.tsx` from `lib/location-data.ts`. Published: mumbai, delhi, bengaluru, chandigarh.

## Tools available in this environment (19 Sep 2026)
- Node.js v24.21.0 / npm 11.19.0 (installed 19 Sep 2026). In PowerShell, refresh PATH from the Machine and User values if `node` is not found. `npm ci` works; npm's install-scripts policy skipped `sharp` and `unrs-resolver` (not approved by the owner yet), and the build still succeeds.
- Baseline lint: 2 pre-existing warnings (unused `CheckCircle2` in app/services/page.tsx, unused `Image` in components/sections/Hero.tsx), 0 errors.
- Rendered-route QA: `npx next start -p 3123`, then drive headless Chrome over the DevTools protocol (Emulation.setDeviceMetricsOverride) for 360/412/1280px measurements. No Playwright installed.
- Google Chrome 153 (headless) at `C:\Program Files\Google\Chrome\Application\chrome.exe`: used to render featured images (PNG screenshot, WebP via canvas) and static previews.
- Git available in Git Bash. Web search and fetch available.
