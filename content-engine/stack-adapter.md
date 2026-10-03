# Stack adapter (recorded 19 September 2026)

## Stack
- Next.js 16.2.3, App Router, React 19.2.4, TypeScript 5, Tailwind CSS v4 (`@tailwindcss/postcss`).
- Package manager: npm (`package-lock.json`).
- Commands: `npm run dev`, `npm run build`, `npm run lint` (eslint 9, `eslint-config-next`). No separate typecheck script; `next build` runs type checking.
- No CLAUDE.md or contributing guide in the repo. `docs/project-overview.md` describes the design system (it says Next.js 15; package.json says 16.2.3).

## Blog posts
- Stored as a TypeScript array in `lib/blog-data.ts` (`BlogPost` interface). Body is an HTML string in `content`, rendered with `dangerouslySetInnerHTML` inside `.prose-custom` by `app/blog/[slug]/page.tsx`.
- Fields: `slug`, `title` (becomes the H1), `excerpt` (shown under the H1, used as meta description and on the index card), `date` (ISO), `readTime`, `category`, `coverImage`, `content`.
- Optional fields on `BlogPost` as at 3 Oct 2026: `seoTitle`, `metaDescription`, `coverImageAlt`, `ogImage`, `dateModified`, `publishedBy`, `cta`, `jsonLd`. Existing posts omit them and fall back to the old behaviour. There is no `faqs` field on the interface: FAQs are built in `lib/blog-data.ts` by local `Faq[]` arrays passed through `faqHtml()` into the `content` string and `faqJsonLd()` into `jsonLd`, so one array drives both the visible FAQ and the markup.
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
- `app/locations/[city]/page.tsx` from `lib/location-data.ts`. 36 city pages published as at 2 Oct 2026; read the array for the live list rather than trusting this note.
- `app/locations/state/[state]/page.tsx` from `lib/state-data.ts`. 15 state hubs published as at 2 Oct 2026.
- `app/locations/page.tsx` is the index of both tiers, grouping cities by region. Header and index both derive from the data arrays, so a new city needs no navigation edit.

## Static export (important for QA)
- `next.config.ts` sets `output: "export"` with `images.unoptimized`, so the build emits `out/`. Deployment is AWS Amplify with `artifacts.baseDirectory: out`.
- **`next start` does not work with static export.** The stack-adapter note below predates the export switch. Serve `out/` with a static file server for rendered-route QA, then drive headless Chrome over the DevTools protocol as described.

## Tools available in this environment (19 Sep 2026)
- Node.js v24.21.0 / npm 11.19.0 (installed 19 Sep 2026). In PowerShell, refresh PATH from the Machine and User values if `node` is not found. `npm ci` works; npm's install-scripts policy skipped `sharp` and `unrs-resolver` (not approved by the owner yet), and the build still succeeds.
- Baseline lint: 2 pre-existing warnings (unused `CheckCircle2` in app/services/page.tsx, unused `Image` in components/sections/Hero.tsx), 0 errors.
- Rendered-route QA: serve the built `out/` directory with a static server (see the static export note above; `next start` fails under `output: "export"`), then drive headless Chrome over the DevTools protocol for 360/412/1280px measurements. `Emulation.setDeviceMetricsOverride` is required for widths below 500px, otherwise the window floor silently reports a wider viewport. No Playwright installed.
- Google Chrome 153 (headless) at `C:\Program Files\Google\Chrome\Application\chrome.exe`: used to render featured images (PNG screenshot, WebP via canvas) and static previews.
- Git available in Git Bash. Web search and fetch available.
