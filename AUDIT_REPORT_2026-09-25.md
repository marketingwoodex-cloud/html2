# Woodex Interior — Deep Website Audit Report
**Date:** 2026-09-25 · **Build:** 98 pages (85 indexable + 11 noindex stubs + 404 + demo) · **Branch:** `arena/01a0a723-html2`
**Scope:** full static crawl of `_site` + source templates — links, SEO, accessibility, performance, forms, structured data, content hygiene, design linting.

---

## Scorecard

| Area | Before | After | Method |
|---|---|---|---|
| Broken internal links | 0 | **0** | regex crawl of all `href="/…"` vs built tree |
| Missing assets (img/css/js) | 0 | **0** | src/href resolved against `_site` |
| Dead in-page anchors | 1 | **0** | `href="#x"` vs `id="x"` per page |
| Duplicate IDs | 0 | **0** | counter per page |
| Duplicate titles | 1 pair | **0** | exact title match across pages |
| Pages without H1 | 0 | **0** | tag count |
| Heading-level skips | 2 pages | **0** | h-sequence walk |
| Inputs without label | 220 | **0 / 315 visible** | label `for`→`id` wiring + aria-labels |
| Images without lazy loading | 70 refs | **1 / 672** (lightbox = intentional) | `loading=` scan, preloads excluded |
| Images without width/height | 17 | **4** (CSS-driven sliders) | attribute scan + natural-size injection |
| Sitemap dead URLs | 0 | **0** | `<loc>` resolution |
| Sitemap coverage | 70/85 | **85/85 indexable** | regenerated from robots meta |
| Orphan pages | 12 | **0** | 11 stubs noindexed, sectors hub linked |
| JSON-LD validity | 179 ✓ | **179 ✓, 0 bad** | `json.loads` on every block |
| Design linter (impeccable) | 0 site / 27 demo | **0 across all 98** | `npx impeccable detect` |
| 404 handling | missing | **branded `/404.html`, noindex** | Netlify convention |
| Template artifacts (`{{`, `{%`, lorem) | 0 | **0** | pattern sweep |
| HTML well-formedness | 98/98 | **98/98** | html.parser tag-stack walk |
| JS syntax | OK | **OK** | `node --check` |

---

## Bugs found & FIXED in this pass

1. **12 orphan pages** — 11 thin near-duplicate insight stubs (`/insights/3d/`, `/cost/`, `/process/`, `/rooms/`, …) existed but were linked from nowhere. Verdict: **noindex, nofollow** (they duplicate the 11 real deep articles that are linked). `/sectors/` hub was a real page missing a parent link — footer "Sectors" now points to the hub.
2. **Sitemap out of date** — 70 URLs, missing ~15 legitimately indexable pages, listing nothing new since 2026-09-16. **Regenerated to 85 URLs** (all indexable pages, correct priority tiers, `lastmod` 2026-09-25, stubs/404/demo excluded).
3. **Forms: 220 unlabeled inputs** → every visible input across the site now has a properly wired `<label for>`/`id` pair (blocks 26/31/32) or `aria-label` derived from placeholder/name. **315/315 labeled, 0 broken `for` targets.**
4. **Heading skips** — `/client-stories/` and `/start-your-project/` went h1→h3; first section heading promoted to h2.
5. **Duplicate title** — the commercial-fit-out *article* and *service page* shared one title; article retitled `Article — Commercial Fit-Out Lahore: Retail, Restaurant & Healthcare Playbook`.
6. **50 image references without lazy loading** → all lazy now (except per-page preloaded heroes and the lightbox overlay). CLS guard: width/height injected from natural JPEG sizes on 13 usages.
7. **Layouts hard-coded `robots: index, follow`** — both `base.njk` and `insight-post.njk` now honor front-matter `robots`, making noindex possible (used for stubs + 404).

## Fixed in the previous deep pass (still green)
- Dead `#brief` anchor on `/start-your-project/` → id wired.
- Duplicate h1 from shared `block-32` → demoted h2 site-wide.
- Missing 404 → branded Netlify `/404.html`.
- Demo page: clipped overlay, AA contrast on service rows, footer h4→h3, leading/tracking fixes.

---

## Performance snapshot (measured)

| Metric | Value | Verdict |
|---|---|---|
| Total output | 9.1 MB (2.8 MB images) | fine for 98 pages |
| CSS | tailwind 36 KB + theme 8 KB, zero frameworks, 1 blocking file pair | ✅ light |
| JS | one app.js file, syntax-checked; fonts via `display=swap` | ✅ light |
| Avg HTML | 62 KB, max 128 KB, none >150 KB | ⚠ acceptable; inline SVG icons are the driver — consider sprite if optimizing further |
| Hero preload | present per template | ✅ |
| Images | 14 JPGs reused site-wide, `loading=lazy` + dims | ⚠ see R3 |

## SEO snapshot

- Titles: **all unique**, JSON-LD 179 blocks **all valid** (Organization, FAQPage, BreadcrumbList, Blog).
- OG/Twitter: complete on all 97 live pages (demo intentionally bare, noindex).
- Canonicals: all live pages. Robots.txt present. Trailing-slash consistent.

---

## Remaining recommendations (need YOUR decision — not auto-applied)

| # | Issue | Impact | Recommendation |
|---|---|---|---|
| **R1** | **GA4 ID is a placeholder `G-XXXXXXXXXX` on all 97 pages** | Analytics collects nothing | Send me the real Measurement ID → 1-line swap + I'll wire the service-specific `trackEvent` calls |
| **R2** | **Titles average 161 chars (97 pages > 65)** | Google truncates at ~60; SERP appearance weak | Approve a mechanical shortening: keep first clause + `| Woodex Interior`. I can regenerate all 85 in one pass |
| **R3** | **No WebP/AVIF** | ~60–70 % image bytes (2.8 MB → ≈1 MB) | Add build step `sharp` → `*.webp` + `<picture>` fallback; or enable Netlify image CDN |
| R4 | Two phone numbers in markup: `+92 322 4000768` (canonical, 217 refs) and `+92 321 468 6884` (27 refs); `studio@woodex.com.pk` on 2 pages | Contact-info inconsistency | Confirm which are intentional (office vs WhatsApp) — I'll normalize the rest |
| R5 | Footer social links are `href="#"` placeholders | Dead affordance | Send live Instagram/LinkedIn/Behance URLs |
| R6 | 4 images sit inside CSS cross-fade sliders without width/height | Tiny CLS risk on `/process/` | Fixed-size container already mitigates; optional polish |
| R7 | Demo home (Shape-referenced redesign V1) still **awaiting approval** | Blocks full-site rollout | Approve → apply across all pages; or request V2 changes |

---

## Verified clean in this pass
0 broken links · 0 missing assets · 0 dead anchors · 0 dup IDs · 0 dup titles · 0 heading skips · 0 unlabeled inputs · 0 img missing alt · 0 JSON-LD errors · 0 sitemap dead · 0 template artifacts · 0 malformed HTML · 0 impeccable design-lint failures (98/98 pages) · all key routes HTTP 200.

---

## AMENDMENT 2026-09-25 (later same day) — THE giant-"W" root cause — found & permanently fixed

**User evidence:** screenshot showing a full-viewport dark "W" glyph on a blurred navy layer — the site "showing a W, not the website".

**Finding (bug #8 — highest severity, recurring across 3 sessions):**
- Header logo is `<svg class="logo-mark">` shaped as the Woodex "W". Its sizing rule (`.logo-mark{width:22px;height:22px}`) lived in **chrome.css**.
- Commit `6d52d1e "Theme V2 unified"` **deleted 11 component CSS files** (theme.css, chrome.css, mega.css, lx.css, home.css, qa.css, studio.css, service-theme.css, premium-master.css, blog-two.css, contact-three.css) and replaced them with theme-v2.css — **but theme-v2.css never contained the header/footer/mega/logo/mobile-nav rules** (verified: 0 definitions for `logo-mark`, `header-inner`, `logo`, `mega`, `mobile-nav`, `footer-*`, `btn-icon`, `acc-icon` in any version of theme-v2.css).
- Result: unstyled `<header>` → the W SVG unconstrained (browser default large SVG), mega-menu panel no longer hidden by default → both painted over the whole page; `backdrop-filter` blur from `.site-header` tinted everything navy. Exactly the screenshot.
- Prior sessions "fixed" it only by deleting stale `_site/css/*` leftovers — the real styles were gone from **source**; every clean environment (fresh sandbox, Netlify deploy) reproduced the bug.

**Fix applied:**
1. Restored `theme.css` (38 KB base chrome), `chrome.css` (logo/header/footer/buttons), `mega.css` (mega-menu show/hide behavior) from git history into `src/css/`.
2. `base.njk` link order: `tailwind → theme → chrome → mega → theme-v2` (V2 tokens keep final say on colors/type).
3. theme-v2.css gained missing component rules: `details[open] .acc-icon{rotate 45deg}`, marker/`list-style` cleanup.
4. **Build hardened**: `npm run build:all` now starts with `rm -rf _site` — stale CSS can never mask or resurrect this class of bug again.

**Post-fix verification:** all 5 stylesheets serve 200 · `logo-mark` rule present (22px) · mega hidden until hover · 0 structural issues across 98 pages · 0 duplicate titles/anchors/ids · impeccable design-lint **0 fails site-wide** · all key routes 200.
