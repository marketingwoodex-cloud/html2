# Woodex Interior — Full Project Analysis & Preview Report

**Date:** 2026-09-16 (Asia/Karachi)  
**Branch:** `arena/01a0a723-html2`  
**Root:** `/home/user/html2`  
**Live Preview:** Port 8000 → `https://8000-{sandbox}.e2b.app` (process `woodex-website-a8e07a78`)  
**Server cmd:** `cd 2-html && python3 -m http.server 8000 --bind 0.0.0.0`  

---

## 1. What this project IS

**Woodex Interior** is a premium **Design + Build** company website (Lahore-based, founded 2016, 500+ projects, ISO 9001). It positions as:

- Current site tagline in code: **"DRAWN. THEN BUILT." / "Designed. Built. Made by Woodex." / "See the room before it exists."**
- PRD recommended positioning: **"Beyond Design. We Build Experiences."** — primary focus Office Fit-Out / Corporate Interiors / Workplace Strategy, secondary Retail/Hospitality, selective Residential.

This is **not a WordPress theme**. It's a **hand-coded static marketing site** (no React, no bundler, no backend) intended to replace a placeholder WordPress site. It contains **70+ HTML pages** manually templated (header/footer duplicated per file).

Source archives:
- `2-html.zip` (3.2 MB) → extracted to `2-html/` (112 files)
- `screensort .zip` (24 MB RAR) → `screenshots/` (31 PNGs Linoxa Home Two/Three inspiration + PRD docs)
- Plan docs: `plan phase 1.md` … `phase 8.md` + `claude-fable-5.1.md` (90-day relaunch master plan)

---

## 2. File Map & Page Inventory

```
2-html/
├── index.html (794 lines, 46KB) — hero 3-slide, six services, lx-pin, story, stats, CTA
├── about.html (548), 3d-studio.html (618), services.html (355), projects.html (387)
├── process.html (431), woodex-craft.html (373), contact.html (370), faq.html (507)
├── start-your-project.html (351), careers.html (363), client-stories.html (366)
├── locations.html (374), insights.html (335), 404.html (269)
├── services/ (20 pages, ~466-487 lines each):
│   architecture, cafe, commercial-fit-out, drawings, fit-out, joinery, lighting,
│   office-fit-out, office, pharmacy, renovation, residential-fit-out, residential,
│   restaurant, retail, shops, software-house, space-planning, turnkey, visualization
├── projects/ (8 pages):
│   residential hub, commercial hub, concrete-harmony, contemporary-retreat,
│   minimal-space-design, modern-facade-study, spatial-innovation, urban-living-concept
├── insights/ (11 articles):
│   3d, cost, design-vs-turnkey, home-renovation-checklist,
│   interior-design-cost-pakistan, office-interior-guide, process,
│   restaurant-planning, retail-shop-interior, rooms, what-is-3d-visualization
├── locations/ (12 cities + hub):
│   lahore, karachi, islamabad, faisalabad, multan, peshawar, quetta,
│   rawalpindi, sialkot, bahawalpur, gujranwala, hyderabad
├── css/ (10 files, ~122KB raw, 164KB on disk):
│   theme.css (35KB, 729 lines) — tokens, header, footer, buttons, preloader
│   home.css (40KB, 1947 lines) — hero slider, story, stats, split, foundations
│   chrome.css (10KB) — logo, header overrides
│   mega.css (10KB) — mega menu 980px 5-col layout
│   studio.css (15KB) — 3D studio ticker, approve split
│   service-theme.css (9KB) — wx-have, wx-out, wx-ask, wx-geo, wx-eeat blocks
│   lx.css (6KB) — pinned scroll lx-pin
│   blog-two.css, contact-three.css, qa.css
├── js/
│   app.js (15KB, 392 lines, vanilla IIFE)
│   tailwind.config.js (699B) — extended colors, font, radius
├── content/
│   site.json — brand proof, studios, master line
│   services.json — approving lines per service
│   brief.json — form endpoint frontend-only
├── images/ (14 JPGs, 2.8MB total, 126-285KB each):
│   hero-1/2/3, project-concrete/facade/minimal/retreat/spatial/urban,
│   split-night, studio-hero/kitchen/pharmacy, craft-joinery
├── assets/ — logo.svg, icons.svg
├── sitemap.xml (396 lines, 60 URLs, canonical https://woodex.interior/)
├── robots.txt, vercel.json, netlify.toml
└── insights/… etc
```

**Total HTML lines:** 26,920 across all pages.

---

## 3. Tech Stack Deep Dive

| Layer | Detail |
|-------|--------|
| **HTML** | Semantic, hand-templated. Each page duplicates header (logo, nav with mega 5-col, CTA) + mobile-nav overlay + footer + wa-float. No SSI, no templating engine. |
| **CSS** | 10 vanilla files, no preprocessor. Tokens: `--navy #0c1628`, `--cream #f4efe7`, `--wood #b8956a`, `--ink #12151c`, `--muted #6a6560`. Typography: Plus Jakarta Sans 300-700, tight -0.038em, 600 weight. Buttons: pill + icon circle, hover label slide (two spans translate). Preloader word rise + bar load. |
| **Tailwind** | CDN `https://cdn.tailwindcss.com` + `js/tailwind.config.js` (runtime compilation). Not purged, FOUC risk, larger payload, CSP issues. Should be built CSS. |
| **JS (app.js 392 lines)** | Vanilla IIFE, `$`/`$$` helpers. Features: preloader auto-hide 1.8s + body overflow hidden, header scroll hide/show (>40px scrolled blur bg, >280px hide on scroll down, mega hover prevents hide), mobile hamburger + accordion (m-acc), mega pause/play (`.mega-pp` toggles `.is-paused`), data-year injection, cine-slide interval 7.2s, IntersectionObserver reveal `[data-anim]`, tilt `[data-tilt]` mousemove, lightbox `.lb-src` → `#lightbox`, space list hover (`st-space` data-img/cap), FAQ accordion (`.faq-q`), brief form → WhatsApp `https://wa.me/923224000768?text=...`, hero slider (clip-path inset 1.15s, image scale 1.12→1 8.5s linear, overlay gradient, lines grid, index side label, pips + progress bar + arrows + keyboard). |
| **Fonts** | Google Fonts Plus Jakarta Sans. Preconnect. |
| **CMS** | JSON files only, no backend. `site.json` proof: 500+ projects, ~20 founder years, 10+ execution, ISO 9001, studios Gulberg III Lahore, Clifton Karachi, F-7 Islamabad, desk LG 90 Link Road Model Town, named client Wellstar DHA Lahore. |
| **SEO** | Canonical `https://woodex.interior/`, robots index/follow, theme-color #0c1628, OG, Twitter, JSON-LD (InteriorDesignStudio + FAQPage + BreadcrumbList + ItemList), sitemap.xml 60 URLs, robots.txt. Keywords meta present (outdated practice). |
| **Deploy** | `netlify.toml` publish "." but `[[redirects]] from="/*" to="/404.html" status=404` — **breaks site on Netlify (every path 404)**. `vercel.json` cleanUrls false, trailingSlash false, security headers X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin. No CSP, HSTS. |
| **Forms** | No backend, WhatsApp float + brief form builds WhatsApp text. No Netlify Forms, no fallback email. Popup blocker risk. |
| **Images** | JPGs only, 126-285KB each, no WebP/AVIF, no `loading="lazy"`, no srcset, no width/height consistency. LCP heavy. |
| **No build** | No package.json, no bundler, no minification, no PWA. |

---

## 4. Design System & UX Patterns

**Tokens:** navy #0c1628 (primary), navy-2 #121e34, cream #f4efe7 (bg), wood #b8956a (accent), ink #12151c (text), muted #6a6560, card #152033.

**Header:** Fixed 80px, 3-col grid (logo left, nav center, CTA right). On scroll >40px adds blur bg, >280px hides on scroll down unless mega open or mobile. Mega menu 980px wide, 5 columns, hover/focus-within, media image 1408x768 + pause/play. Mobile: full-screen overlay `.mobile-nav` with accordion, body overflow hidden, ESC to close.

**Hero (index):** 100svh, 3 slides hero-1/2/3, clip-path inset animation 1.15s ease, image scale 1.12→1 8.5s linear, overlay gradient, lines grid 4 vertical, index side label (LAYOUT/DESIGN/CREATE), pips with progress track, arrows, keyboard nav. Headline tight -0.038em, 2 lines with `.line` span.

**Six Services (st-spaces):** Grid media left (img + cap) + list right (6 buttons with n 01-06, h3, p, arrow). Hover changes media via data-img/data-cap/data-alt.

**Lx-pin (pinned scroll):** Track 300vh, sticky media left (3 imgs, is-on toggle) + card right (3 lx-copy articles with num 3D/360/BOQ, body, thumbs tablist). Thumbs sync media. Scroll-driven storytelling.

**Story, Lx-doc, Stats, Split, Foundations, Approach/FAQ, Marquee, Featured, CTA:** Each with reveal IntersectionObserver, tilt effect, marquee track 12 items.

**Service pages template:** `wx-have`, `wx-out`, `wx-ask`, `wx-geo`, `wx-eeat` blocks — unique per service, not cloned cards. Good for EEAT.

**3D Studio:** Ticker marquee, approve split, stats, deliverables.

**Buttons:** `.btn` + `.btn-light` pill, `.btn-label` two spans slide up on hover, `.btn-icon` circle with arrow slide.

**Lightbox:** Auto-marked gallery images `.lb-src`.

---

## 5. Content & PRD Analysis

**PRD v1 (screenshots/prd .md):** Reposition from "interior decorator" to "Design + Build for Workplaces & Commercial". Primary P1: Office Fit-Out, Corporate Interiors, Workplace Strategy. P2: Retail, Restaurants, Commercial. P3: Architecture/BIM/Visualization authority, Residential selective. Sister concern Woodex Furniture. Target decision-makers: CEO, Head Admin/Facilities, HR/Workplace, Procurement, Real-estate, Brand/Retail, PM, Homeowner selective. Service-page rule: each must have commercial problem, audience, process, deliverables, proof, CTA — not keyword holder.

**Current site:** Implements "DRAWN. THEN BUILT." which is stronger than PRD's "Beyond Design. We Build Experiences." — more craft-oriented, aligns with 3D Studio "See the room before it exists." Good differentiation. However PRD wants workplace primary; current site still balances residential/commercial equally. Need to shift homepage stats/process to office-first.

**Plan phases (1-8):** 90-day relaunch master plan — positioning, IA, SEO, conversion funnel, Elementor structure, launch checklist. Linoxa inspiration (ultra-premium agency, Home Two/Three).

---

## 6. SEO & Accessibility

**Strengths:** JSON-LD InteriorDesignStudio with address, openingHours, areaServed, FAQPage 5 Qs, OG, Twitter, sitemap 60 URLs, canonical, robots, skip-link, aria-labels, keyboard for slider, focus states.

**Issues:**
- Canonical domain `https://woodex.interior/` is fake, not `woodex.com.pk` / `woodexfurniture.pk` from brief — will cause indexing issues.
- Sitemap includes `.html` extensions but vercel cleanUrls false — mismatch.
- No image alt completeness, some generic.
- Low contrast muted #6a6560 on cream #f4efe7 ~4.2:1 borderline.
- No focus-visible, lightbox close × not keyboard focus trapped.
- No analytics events implemented despite PRD listing events (start_project_click etc.).
- Keywords meta outdated.

---

## 7. Performance & Security

**Performance risks:**
- Tailwind CDN runtime compiler = larger payload + FOUC.
- CSS duplication theme.css vs home.css both define .btn, .site-header — specificity fights, ~122KB raw not minified.
- Images 2.8MB total, no lazy, no srcset, no WebP/AVIF — LCP heavy (hero-1 236KB, hero-2 195KB, hero-3 229KB).
- No minification, no bundling.
- `setInterval` for cine slides without cleanup.
- Preloader animation `pre-out 0.7s ... 1.7s forwards` may hide content before load on slow connections; JS force-hides after 1800ms.

**Security:**
- Only X-Content-Type-Options + Referrer-Policy via vercel.json.
- No CSP, HSTS, X-Frame-Options.
- WhatsApp link target _blank with rel noopener — good.

---

## 8. Critical Issues & Risks

**Critical:**
1. **Netlify redirect breaks site:** `[[redirects]] from="/*" to="/404.html" status=404` returns 404 for every path. Should be `status=200` SPA fallback or removed, with `force=false` and specific 404 handling.
2. **Tailwind CDN in prod:** Must be built CSS `npx tailwindcss -i input.css -o css/tailwind.css --minify`.
3. **Duplicated header/footer:** 70+ files repeat same — unmaintainable. Needs Eleventy/Astro or at least SSI partials build.
4. **Images unoptimized:** No WebP, no lazy, no srcset. Convert via sharp/squoosh.
5. **Hardcoded fake domain:** Update canonical to real `https://woodex.com.pk/` or `https://woodexfurniture.pk/`.
6. **No form backend:** WhatsApp only, popup blocker risk, no email capture.

**Medium:**
- No PWA/offline.
- No analytics GA4 + custom events.
- CSS duplication, no critical CSS.
- Accessibility gaps: focus trap, contrast, keyboard mega.
- Sitemap vs cleanUrls mismatch.
- Empty scripts folder dead.
- No image width/height consistency (some 1408x768 but not enforced).

**Low:**
- No README with run instructions (only "# html2").
- No .editorconfig, no lint.
- vercel.json cleanUrls false but files have .html — should be true.

---

## 9. How to Run / Preview

**Current live server (this session):**
- Process: `woodex-website-a8e07a78`
- Command: `cd 2-html && python3 -m http.server 8000 --bind 0.0.0.0`
- Port: 8000 → Preview URL: `https://8000-{sandboxId}.e2b.app` (platform injects)
- Check: `curl -I http://localhost:8000/` → 200 OK SimpleHTTP/0.6 Python/3.11.2

**Local alternative:**
```bash
cd 2-html
python3 -m http.server 3000
# or
npx serve . -l 3000
```
Open:
- `/` — hero slider + six services + lx-pin
- `/3d-studio.html` — studio ticker
- `/services/residential.html` — service brief template
- `/services/office-fit-out.html` — P1 service
- `/projects/contemporary-retreat.html` — project study
- `/insights/office-interior-guide.html` — article
- `/locations/lahore.html` — city page
- `/start-your-project.html` — brief funnel

**Screenshots:** `screenshots/Screenshot_*.png` — Linoxa Home Two/Three reference.

---

## 10. Recommendations (Roadmap)

**Immediate (Phase 1 – Fix, 1-2 days):**
1. Fix `netlify.toml` — remove catch-all 404 or set `status=200` SPA fallback, add proper 404 page handling.
2. Replace Tailwind CDN with built CSS, purge, minify.
3. Optimize images: WebP + AVIF, `loading="lazy"`, srcset, compress via sharp, add explicit width/height.
4. Update canonical domain to real domain from brief.
5. Deduplicate CSS — merge tokens into one `main.css`, remove duplicate header/btn.
6. Extract header/footer to partials using Eleventy (11ty) or simple Node build script to avoid duplication.
7. Add README.md with run instructions, deployment, content editing guide.

**Short-term (Phase 2 – Enhancement, 1-2 weeks):**
- Implement real form backend (Netlify Forms or Vercel serverless) + WhatsApp fallback, add validation.
- Add analytics: GA4 + custom events from PRD (start_project_click, whatsapp_click, etc.).
- Fix sitemap (no .html if cleanUrls true), add robots.txt Sitemap directive.
- Accessibility audit: focus trap lightbox, contrast check, keyboard nav for mega, skip-link.
- Add lazy IntersectionObserver for images, preloader LCP fix (hide only after window.load + min 1s).
- Add security headers: CSP, HSTS, X-Frame-Options.
- Minify HTML/CSS/JS, add critical CSS inline.

**Long-term (Phase 3 – Growth per PRD, 1-3 months):**
- Build case studies with real project photos, before/after, GBP sync for locations.
- Implement CMS (Decap CMS, Contentful) for insights + projects.
- Location pages with local schema, GBP integration.
- Performance: <2s LCP, <100KB critical CSS, <300KB JS.
- PWA, offline, image CDN.
- A/B test homepage: office-first vs residential, add proof bar (Wellstar etc.).
- Shift IA to PRD recommended URLs: `/services/office-interior-design/`, `/services/workplace-strategy/`, etc.

---

## 11. Conclusion

This is a **high-fidelity static prototype** — visually premium, interaction-rich (hero clip-path, pinned scroll, mega 5-col, tilt, lightbox), SEO-aware, conversion-focused (WhatsApp float, sticky CTA, brief funnel). It successfully translates Linoxa-style ultra-premium agency language to Woodex Interior with unique service briefs per page (good EEAT).

**But not production-ready** for performance/deployment: Tailwind CDN, unoptimized images, duplicated header/footer, broken Netlify redirect, fake canonical domain, no backend.

**Strengths:** Premium visual language, consistent tokens, careful typography, no framework bloat (<500KB JS+CSS gzipped except images), content depth, SEO-ready JSON-LD, conversion-focused.

**Next step:** Fix deploy config + build tooling + image optimization, then enhance with CMS and analytics per PRD.

Preview is live on port 8000. Explore homepage hero slider, mega menu (Services → 5 columns), lx-pin pinned scroll, and service pages.

---
*Generated by Arena Agent Mode — 2026-09-16*
