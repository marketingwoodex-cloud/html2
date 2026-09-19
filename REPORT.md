# Woodex Interior — Project Analysis Report

**Date:** 2026-09-15
**Branch:** arena/01a0a723-html2
**Source archives:** `2-html.zip` (3.2 MB RAR), `screensort .zip` (24 MB RAR, 31 screenshots + PRD)
**Extracted to:** `2-html/` (112 files) and `screenshots/` (31 PNGs + docs)
**Live Preview:** http://localhost:8000 (bound 0.0.0.0:8000 → preview URL)

---

## 1. What this project is

Woodex Interior is a **premium interior design / fit-out / 3D Studio static website** for a Lahore-based studio (founded 2016, 200–500+ projects, ISO 9001). Positioning from docs:

- **Master tagline:** "Designed. Built. Made by Woodex." / "DRAWN. THEN BUILT."
- **Campaign line:** "See the room before it exists."
- **Category:** Integrated interior design + visualization + manufacturing + fit-out + delivery.
- **Primary market:** Lahore, secondary Karachi/Islamabad/Pakistan-wide.

The site in `2-html/` is a **fully hand-coded marketing site** (no WordPress, no React), built to replace a placeholder WordPress site. It contains:

- **20+ service pages:** residential, office, retail, shops, restaurant, cafe, pharmacy, software-house, fit-out, office-fit-out, commercial-fit-out, renovation, turnkey, architecture, space-planning, lighting, drawings, joinery, visualization, etc.
- **8 project studies:** concrete-harmony, contemporary-retreat, minimal-space-design, etc. + residential/commercial indexes.
- **12 location pages:** lahore, karachi, islamabad, faisalabad, multan, etc. + locations hub.
- **11 insight articles:** 3d, cost, design-vs-turnkey, renovation checklist, interior cost Pakistan, office guide, restaurant planning, retail shop interior, rooms, what-is-3d-visualization, process.
- **Core pages:** index, about, services, 3d-studio, projects, process, woodex-craft, careers, client-stories, contact, start-your-project, faq, insights, locations, 404.
- **Assets:** 14 hero/project JPGs (hero-1..3, project-*, studio-*, craft-joinery, split-night), 2 SVGs (logo, icons), 10 CSS files, 2 JS files.

Reference screenshots (31 PNGs in `screenshots/`) show Linoxa-style ultra-premium agency layout inspiration and the PRD/master plan docs.

---

## 2. Tech Stack

| Layer | Implementation |
|-------|----------------|
| **HTML** | Semantic, 794 lines for index, ~350-600 for others. Manual templating (header/footer duplicated per file). |
| **CSS** | 10 files: `theme.css` (35KB, 729 lines, tokens + header + buttons + preloader), `home.css` (40KB, 1947 lines, hero slider, story, lx-pin, etc.), `chrome.css` (11KB, mega menu overrides), `mega.css` (11KB), `studio.css` (16KB, 3D studio), `service-theme.css` (9KB), `lx.css` (6KB, pinned scroll), `blog-two.css`, `contact-three.css`, `qa.css`. No preprocessor. CSS variables: --navy #0c1628, --cream #f4efe7, --wood #b8956a, --ink #12151c. |
| **Tailwind** | CDN `https://cdn.tailwindcss.com` + `js/tailwind.config.js` (extended colors, font Plus Jakarta Sans). Not built, runtime compilation. |
| **JS** | `js/app.js` 392 lines, vanilla IIFE. Features: preloader (auto-hide 1.8s), header scroll hide/show, mobile hamburger + accordion, mega pause/play, data-year injection, cine-slide interval, IntersectionObserver reveal `[data-anim]`, tilt effect `[data-tilt]`, lightbox `.lb-src` → `#lightbox`, space list hover (`st-space`, `sv-room`), FAQ accordion, brief form → WhatsApp, hero slider (clip-path, 6.8s, pips, keyboard), Lx pinned scroll. |
| **Fonts** | Google Fonts Plus Jakarta Sans 300-700. |
| **CMS** | JSON files `content/site.json` (brand proof, studios), `services.json` (approving lines per service), `brief.json` (form endpoint frontend-only). |
| **SEO** | Canonical, robots, OG, Twitter, JSON-LD (InteriorDesignStudio, FAQPage, BreadcrumbList, ItemList, FAQ), sitemap.xml (396 lines), robots.txt, theme-color. |
| **Deploy** | `netlify.toml` (publish ".", but redirect /* → /404.html status 404 – **broken**), `vercel.json` (cleanUrls false, security headers). |
| **No backend** | Form posts to WhatsApp `https://wa.me/923224000768?text=...` . No API, no DB. |

---

## 3. Architecture & Key UX Patterns

- **Header:** Fixed 80px, 3-col grid (logo left, nav center, CTA right). On scroll >40px adds blur bg, >280px hides on scroll down. Mega menu 980px wide, 5 columns, hover/focus-within, with media image + pause/play. Mobile: full-screen overlay `.mobile-nav` with accordion.
- **Hero (index):** 100svh, 3 slides (hero-1/2/3), clip-path inset animation (1.15s ease), image scale 1.12 → 1 (8.5s linear), overlay gradient, lines grid, index + side label, pips, progress bar.
- **Sections on Home:**
  1. Hero slider
  2. Intro + stats (500+ projects, ~20 yrs, ISO)
  3. Spaces list (st-space) – 6 services with data-img preview
  4. Lx-pin – pinned scroll storytelling (3 slides: Stills / 360 / BOQ) with sticky media + thumbs
  5. Story – "You do not just get a design"
  6. Process band, etc.
- **3D Studio:** Dedicated page with ticker marquee, approve split, stats, deliverables.
- **Service pages:** Template with `wx-have`, `wx-out`, `wx-ask`, `wx-geo`, `wx-eeat` blocks – unique per service, not cloned cards.
- **Animations:** `data-anim="left/right/up/fade/clip"` via IntersectionObserver, preloader word rise + bar load, button label hover (two spans translate), icon slide.
- **Lightbox & Tilt:** Auto-marked gallery images.

---

## 4. Strengths

- **Premium visual language:** Consistent tokens, careful typography (tight -0.038em, 600 weight), button pill + icon circle interaction.
- **No framework bloat:** Loads fast for static, <500KB JS+CSS gzipped except images.
- **Content depth:** Each service has unique "approving line", named outputs, FAQ – good for EEAT and SEO vs generic grid.
- **SEO-ready:** JSON-LD, OG, sitemap, canonical, schema for FAQ, breadcrumbs, ItemList.
- **Conversion-focused:** WhatsApp float, sticky CTA, brief form with labels mapping to WhatsApp text, start-your-project hub.
- **Accessibility basics:** skip-link, aria-labels, keyboard for slider, focus states.

---

## 5. Issues & Risks Found

**Critical:**
1. **Netlify redirect breaks site:** `[[redirects]] from="/*" to="/404.html" status=404` will return 404 for every path on Netlify. Should be 200 SPA fallback or removed.
2. **Tailwind CDN in production:** Runtime compiler, no purge, larger payload, FOUC, CSP issues. Should be built CSS.
3. **Duplicated header/footer:** 70+ HTML files repeat same header/mega/footer – unmaintainable. Needs templating (Eleventy, Astro, or at least SSI).
4. **Images unoptimized:** JPGs 600KB–1.9MB each (hero-2 975 lines? Actually file size 1.1MB), no WebP/AVIF, no `loading="lazy"`, no srcset. LCP will be heavy.
5. **Hardcoded domain:** `https://woodex.interior/` canonical everywhere – not matching actual domains `woodex.com.pk` / `woodexfurniture.pk` from brief. Will cause indexing issues.
6. **Empty scripts folder:** `2-html/scripts/` exists but empty – dead.
7. **No image alt completeness:** Some decorative images have empty alt, but content images sometimes generic.
8. **No form validation backend:** WhatsApp link can be blocked by popup blockers; no fallback email capture.
9. **CSS duplication:** `theme.css` and `home.css` both define `.btn`, `.site-header`, etc. – specificity fights.
10. **Accessibility gaps:** Low contrast on some muted text (#6a6560 on #f4efe7 ~4.2:1 borderline), no focus-visible, lightbox close × not keyboard focus trapped.
11. **Security headers only in vercel.json:** No CSP, HSTS missing, X-Frame-Options via header only.
12. **Sitemap includes .html extensions but vercel cleanUrls false – mismatch.**

**Medium:**
- No PWA, no offline.
- No analytics events implemented despite PRD listing events (start_project_click etc.).
- No minification.
- `app.js` uses `setInterval` for cine slides without cleanup.
- Mega menu hover only – no touch support beyond focus-within.
- Preloader animation `animation: pre-out 0.7s ... 1.7s forwards` may hide content before load on slow connections; JS also force-hides after 1800ms.
- 404.html exists but netlify.toml will serve it as 404 for all pages.

---

## 6. File Map (simplified)

```
2-html/
├── index.html (794 lines) – hero slider + spaces + lx-pin + story
├── about.html (548) – vision/mission, auth, furniture, team
├── services.html – hub with mega
├── 3d-studio.html (618) – studio positioning
├── projects.html + projects/*.html (8 studies)
├── services/*.html (20 services) – each ~470 lines, unique brief
├── insights/*.html (11 articles)
├── locations/*.html (12 cities) + locations.html
├── css/ (10 files, 122KB raw)
│   ├── theme.css – tokens, buttons, header, footer, preloader
│   ├── home.css – hero, story, lx-pin, etc.
│   ├── chrome.css – logo, mega overrides
│   ├── mega.css – mega menu layout
│   ├── studio.css – 3D studio blocks
│   ├── service-theme.css – service page blocks wx-*
│   ├── lx.css – pinned scroll
│   ├── blog-two.css, contact-three.css, qa.css
├── js/
│   ├── app.js – all interactions
│   └── tailwind.config.js – Tailwind extension
├── content/ – site.json, services.json, brief.json
├── images/ – 14 JPGs
├── assets/ – logo.svg, icons.svg
└── vercel.json, netlify.toml, sitemap.xml, robots.txt
```

---

## 7. How to Run (Preview)

We extracted RARs using `node-unrar-js` (pure JS unrar) because system `unrar` binary unavailable.

**Current live server:**
- Command: `cd 2-html && python3 -m http.server 8000 --bind 0.0.0.0`
- Process ID: `woodex-website-preview-8a870704`
- Port: 8000 → Preview URL: `https://8000-{sandboxId}.e2b.app`
- Should show Woodex home with hero slider, mega menu, etc.

**Local alternative:**
```bash
cd 2-html
npx serve . -l 3000
# or
python3 -m http.server 3000
```

Open `/index.html`, `/3d-studio.html`, `/services/residential.html`, etc.

**Screenshots:** View `screenshots/Screenshot_*.png` – reference Linoxa Home Two/Three.

---

## 8. Recommendations (Next Steps)

**Immediate (Phase 1 – Fix):**
1. Fix `netlify.toml` – remove catch-all 404 redirect or set `status = 200` with `force = false` for SPA fallback.
2. Replace Tailwind CDN with built CSS: `npx tailwindcss -i input.css -o css/tailwind.css --minify`
3. Optimize images: convert to WebP, add `loading="lazy"`, srcset, compress (squoosh, sharp).
4. Update canonical domain to real `https://woodex.com.pk/` from brief, not `woodex.interior`.
5. Deduplicate CSS – merge tokens into one `main.css`, remove duplicate header/btn definitions.
6. Extract header/footer to partials using Eleventy or simple Node build to avoid duplication.

**Short-term (Phase 2 – Enhancement):**
- Implement real form backend (Netlify Forms or Vercel serverless) + WhatsApp fallback.
- Add analytics: GA4 + custom events from PRD (start_project_click, whatsapp_click, etc.).
- Add schema validation, fix sitemap (no .html if cleanUrls true).
- Accessibility audit: focus trap lightbox, contrast, keyboard nav for mega.
- Add lazy IntersectionObserver for images, preloader LCP fix.
- Create `README.md` with run instructions, deployment, content editing guide.

**Long-term (Phase 3 – Growth per PRD):**
- Build case studies with real project photos, before/after.
- Implement CMS (Decap CMS, Contentful) for insights.
- Location pages with GBP sync, local schema.
- Performance: <2s LCP, <100KB critical CSS.

---

## 9. PRD / Plan Docs Summary

- `plan phase 1.md` … `phase 8.md` + `claude-fable-5.1.md` contain 90-day relaunch master plan (positioning, IA, SEO, conversion funnel, Elementor structure, launch checklist).
- `screenshots/prd .md` – PRD v1: Design+Build positioning, service architecture, industry pages, homepage wireframe, SEO, conversion, analytics.
- `screenshots/New Text Document.MD` – same as phase 1 brief.
- Key takeaway: **Move from "interior decorator" to "Design + Build for Workplaces & Commercial"** – primary focus Office Fit-Out, Corporate Interiors, Workplace Strategy; residential selective.

---

## 10. Conclusion

This is a **high-fidelity static prototype** – visually premium, interaction-rich, SEO-aware, but **not production-ready** for performance/deployment. It successfully translates Linoxa-style ultra-premium agency language to Woodex Interior with unique service briefs. Main work remaining is build tooling, image optimization, templating, and fixing deploy config.

Preview is live on port 8000. Explore:
- `/` – hero slider
- `/3d-studio.html` – studio ticker
- `/services/residential.html` – service brief template
- `/projects/contemporary-retreat.html` – project study
- `/insights/office-interior-guide.html` – article
- `/locations/lahore.html` – city page
