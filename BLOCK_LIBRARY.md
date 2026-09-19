# WOODEX INTERIOR — BLOCK LIBRARY — 35 Unique Sections — Linoxa Inspired — No Generic Repeats
**Date:** 2026-09-16  
**Reference:** 27 screenshots Linoxa Home Two, https://linoxa.webflow.io/home-two  
**Usage:** Copy/paste each block as Nunjucks partial `src/_includes/partials/blocks/block-*.njk` — every page uses unique combination, never repeat same section generic

---

## How to Use

```njk
{% include "partials/blocks/block-01-hero-cinematic.njk" %}
{% include "partials/blocks/block-02-trust-bar.njk" %}
...
```

Each block has:
- Purpose
- Linoxa Screenshot Reference
- HTML structure
- CSS classes (theme.css home.css chrome.css mega.css lx.css studio.css service-theme.css + tailwind.css)
- Interaction JS (app.js)
- Unique content rule: never use same block with same copy on two pages — change headline, subheadline, image, CTA, stats, challenge, deliverables, etc.

---

## Block 01: Hero Cinematic — Giant Word — Screenshot_1,2,4

**Reference:** Screenshot_1.png CREATE, Screenshot_2.png LAYOUT, Screenshot_4.png DESIGN — Linoxa Home Two hero 100svh, vertical grid lines 4, giant word bottom bleeding gradient fade

**HTML:**
```html
<section class="hero" aria-label="Featured stories">
  <div class="hero-slides">
    <article class="hero-slide is-active">
      <div class="media"><img src="/images/hero-1.jpg" alt="Corporate office interior design Lahore — Beyond Design" fetchpriority="high" width="1408" height="768" /></div>
      <div class="hero-overlay"></div>
      <div class="hero-content"><div class="container"><p class="hero-label"><i></i> Beyond Design. We Build Experiences.</p><h1><span class="line"><span>Corporate workplaces</span></span><span class="line"><span>built for business</span></span></h1><div class="hero-cta"><a class="btn btn-light" href="/start-your-project/"><span class="btn-label"><span>Start your project</span><span>Start your project</span></span><span class="btn-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a><p class="hero-copy">From strategy and space planning to design, fit-out and final delivery — one team, one contract, 3D approval before execution.</p></div></div></div>
    </article>
    <!-- Slide 2,3 -->
  </div>
  <div class="hero-side" aria-hidden="true"><span class="is-on">Workplace</span><span>Commercial</span><span>Turnkey</span></div>
  <div class="hero-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <div class="hero-index" aria-hidden="true">WOODEX</div>
  <div class="hero-nav"><div class="hero-nav-inner"><div class="hero-pips" role="tablist"><button class="hero-pip is-active" type="button"><span>01</span><span class="track"><i></i></span></button><button class="hero-pip" type="button"><span>02</span><span class="track"><i></i></span></button><button class="hero-pip" type="button"><span>03</span><span class="track"><i></i></span></button></div><div class="hero-arrows"><button class="hero-arrow" id="hero-prev" aria-label="Previous slide"><svg viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="1.5"/></svg></button><button class="hero-arrow" id="hero-next" aria-label="Next slide"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg></button></div></div></div>
</section>
```

**Unique Rule:** Homepage uses Corporate workplaces built for business + WOODEX giant, About uses Designing spaces with purpose and precision + ABOUT giant, Services uses Spaces shaped by purpose and identity + SERVICES giant — never same H1 or giant word twice.

---

## Block 02: Trust Bar — Proof Before Claim

**Reference:** Custom, not Linoxa but needed for proof

**HTML:**
```html
<section class="bg-navy text-white py-4">
  <div class="container flex flex-wrap gap-6 justify-center text-[11px] tracking-[0.18em] uppercase font-semibold">
    <span>10 Years Experience</span><span>•</span><span>200+ Projects</span><span>•</span><span>3D Before Execution</span><span>•</span><span>Turnkey Delivery</span><span>•</span><span>ISO 9001</span><span>•</span><span>Wellstar DHA Lahore — Named Client</span>
  </div>
</section>
```

**Unique Rule:** Homepage trust bar includes Wellstar, About trust bar includes M-71 Zainab Tower, Service pages trust bar includes sector-specific proof.

---

## Block 03: Six Services You Can Actually Buy — St-Spaces — Screenshot_6 Building Documentation

**Reference:** Screenshot_6.png Building documentation center image + right cards Interior design Consultation 3D Modeling — Linoxa building documentation

**HTML:** See src/index.njk st-spaces section — media left list right sticky, data-img/cap, is-on state

**Unique Rule:** Homepage shows 6 services P1 Office Fit-Out Corporate Commercial Renovation Turnkey 3D Studio, Services hub shows all 19 services grid 3-col, not same 6.

---

## Block 04: Lx-Pin — Pinned Scroll Storytelling — Screenshot_2 Scroll Image

**Reference:** Screenshot_2.png LAYOUT hero but also Linoxa scroll image one two — Linoxa has scroll image one two with strategic planning

**HTML:** See src/index.njk lx-pin section — track 300vh stick 100svh split 2-col media left card right kicker giant bar progress thumbs

**Unique Rule:** Homepage uses See it Understand it Build it 3D/360/BOQ, About uses Our process Discover Design Visualize Plan Build Install Deliver with different images, 3D Studio uses Stills first Walkthrough when path matters Then money if you want — never same copy.

---

## Block 05: Sectors — Do You Understand My Business? — Screenshot_3 Trusted Partners

**Reference:** Screenshot_3.png Trusted partners built together Driving success through strong partnerships 6 cards Tribepa DIAGEO Jamie Oliver Comptoir Libanais BOUNCE SpectraFlow — Linoxa partners

**HTML:** Grid 3-col cards rounded 24px border p 24px hover bg cream, eyebrow 15A P1 Revenue Engine, h3 Corporate Offices, p High-performing environments, Explore → arrow

**Unique Rule:** Homepage sectors 6 cards with challenge one-liners, Sectors hub page shows same 6 but with longer descriptions and process, each sector page shows related sectors not same.

---

## Block 06: Stats — One Team One Process One Result — Screenshot_9 10 About Us

**Reference:** Screenshot_9.png About us Designing spaces with purpose and precision 95% Customer satisfaction rate avatars Modern architecture Building renovation — Screenshot_10.png Creating timeless built environments Explore our services Interior architecture planning Urban design consulting Master planning services — Linoxa about us + timeless built environments

**HTML:** Navy bg white text container head max-w 3xl eyebrow One team One process One result H2 Discover → Design → Visualize → Plan (Budget + BOQ) → Build → Install → Deliver — Stop at gate you choose grid 4-col cards border white/10 rounded 24px p 24px num 48px wood

**Unique Rule:** Homepage stats 200+ 10+ ~10 3 studios, About stats 95% Customer satisfaction rate + avatars + Modern architecture + Building renovation like Linoxa Screenshot_9, Service pages stats sector-specific numbers.

---

## Block 07: Foundations — Studies — Screenshot_5 Commercial Architecture + Portfolio

**Reference:** Screenshot_5.png Commercial architecture and space solutions Explore our services Residential design solutions Project management services Structural design experts + image tower — Linoxa commercial architecture

**HTML:** Cream bg container H2 Studies — rooms drawn so they can be built grid 3-col gap 24px cards rounded 24px overflow hidden aspect 4:3 img hover scale 1.05 figcaption pill Studies overlay gradient go circle tall span row 2 span-2 span col 2

**Unique Rule:** Homepage foundations 4 cards Contemporary retreat Modern facade Minimal space Concrete harmony with Studies label, Projects hub same grid but with 8 cards and before/after slider for renovation, each project page unique grid.

---

## Block 08: Approach/FAQ — Screenshot_6 Building Documentation + FAQ

**Reference:** Screenshot_6.png Building documentation Architecture focused on simplicity balance timeless design excellence Learn more + center image + right cards Interior design Consultation 3D Modeling — Linoxa building documentation

**HTML:** White bg container grid 2-col 50% visual 50% faq gap 48px visual rounded 24px aspect 4:3 img h2 lead btn-light faq flex col gap 2px item border rounded 16px p 16px q button flex justify-between font-semibold plus 24px circle border plus→minus is-open a max-height 0→200px transition 0.4s

**Unique Rule:** Homepage approach First we understand space Then we design it + FAQ 5 Qs proof, About approach Our approach to architecture focuses on clarity detail innovation crafting spaces that feel contemporary meaningful + 95% satisfaction, Service pages approach unique per service What you have what must become how you use it budget band city brief is contract not moodboard.

---

## Block 09: Marquee — Shaping Smarter Business Outcomes

**Reference:** Linoxa marquee Shaping smarter business outcomes repeated

**HTML:**
```html
<div class="marquee" aria-hidden="true"><div class="marquee-track"><span class="marquee-item">Corporate Offices</span><span class="marquee-item">Software Houses</span><span class="marquee-item">Retail Showrooms</span><span class="marquee-item">Restaurants & Cafés</span><span class="marquee-item">Healthcare</span><span class="marquee-item">3D Studio</span><span class="marquee-item">Turnkey</span>...</div></div>
```

**Unique Rule:** Homepage marquee Corporate Offices Software Houses Retail Showrooms Restaurants Cafés Healthcare 3D Studio Turnkey, About marquee 10 Years 200+ Projects ISO 9001 Wellstar M-71 Zainab Tower, Service pages marquee sector-specific.

---

## Block 10: Featured — From Approved Still to BOQ and Site — Screenshot_5 Split

**Reference:** Screenshot_5.png Commercial architecture and space solutions split left tower dark bg right white bg heading description button link rows Residential design solutions Project management services Structural design experts

**HTML:** White bg container grid 2-col 50% media 50% content gap 48px media relative big rounded 24px aspect 16:9 small absolute bottom -24px right -24px width 40% rounded 24px border 4px white shadow h2 From approved still to BOQ and site lead checks ul check icon wood btn

**Unique Rule:** Homepage featured From approved still to BOQ and site one accountable team, About featured From approved still to BOQ and site with different images project-facade + project-urban, Service pages featured unique per service From approved still to BOQ and site for Office Fit-Out vs Commercial Fit-Out.

---

## Block 11: CTA — Tell Us About Your Space — Linoxa CTA

**Reference:** Linoxa CTA Stay connected with us Reach out to explore how our design expertise can shape your next space Get in touch

**HTML:** Navy bg relative 80svh img absolute inset 0 opacity 0.6 shade gradient navy/80 to navy/20 inner container max-w 2xl flex col justify-center height 100% h2 Tell us about your space p Empty hall floor plan brand or drawings We answer with next gate not brochure M-71 Zainab Tower btn-light Send the brief

**Unique Rule:** Homepage CTA Tell us about your space Empty hall floor plan brand or drawings, About CTA Meet the practice M-71 Zainab Tower Model Town Link Road Lahore, Service pages CTA Tell us about your office space / retail space / restaurant space etc unique per service.

---

## Block 12: Footer — INTERIORS Giant — Linoxa Footer

**Reference:** Linoxa footer giant words CREATE LAYOUT DESIGN 180px bottom bleeding gradient fade

**HTML:** Navy #0c1628 bg white text container footer-top grid 4-col gap 32px h3 Beyond Design We Build Experiences p Have space in mind btn-light Start your project h4 Practice Explore Get in touch links flex col gap 8px a 14px muted-2 hover white giant INTERIORS 120px 700 tight -0.06em opacity 0.05 bottom -20px left 0 footer-bottom border top white/10 mt 48px pt 24px flex justify-between text 12px muted-2 wa-float fixed bottom right 56px circle bg wood white shadow icon

**Unique Rule:** Footer consistent across all pages but giant word INTERIORS unique to Woodex, not CREATE LAYOUT DESIGN — one giant word per brand, not changing per page.

---

## Block 13-35: Service, Sector, Location, Contact, Brief, Insights, Projects, 3D Studio Blocks

Each block 13-35 described in WOODEX_LINOXA_MASTER_DESIGN_SYSTEM.md Section 6 Library of Block Sections with:

- Purpose
- Layout
- Visual
- 3D Scene
- Interaction
- Animation
- Transition
- Scroll Sequence
- Content Unique Rule
- Linoxa Reference

**Key Rule for All Blocks 13-35:** Never repeat same section generic copy page every page to other — every section unique design — every page unique — every section blog unique and content improve master website.

**Implementation Checklist for Each New Page:**

1. Pick 6-10 blocks from library 35, never same combination twice
2. For each block, rewrite headline, subheadline, body, CTA, image, stats, challenge, deliverables, process, cost factors, why Woodex, testimonial, FAQ, final CTA, related services — unique per page per Phase 2 4 5 6 7 8 9 files
3. Ensure visual composition unique: change grid 2-col to 3-col, media left to media right, dark bg to cream bg to white bg, rounded 16px to 24px, aspect 4:3 to 16:9 to 1:1, giant word to no giant, marquee to no marquee, pinned scroll to no pin, before/after slider to no slider, horizontal scroll to vertical
4. Ensure interaction unique: hover changes media vs click is-on vs scroll drives vs drag handle vs accordion vs count up vs line draw vs parallax vs tilt vs lightbox
5. Ensure animation unique: clip-path vs fade vs slide up vs scale vs count up vs line draw vs marquee vs parallax vs morph
6. Ensure Linoxa always: vertical grid lines, giant words, rounded 24px cards images, pill buttons with icon circle label slide, link rows with arrow, outline icons 1.5px, generous whitespace 96px 128px, beige cream navy white palette, Plus Jakarta Sans tight -0.038em 600 weight, image hover scale 1.05, shadow on hover, backdrop-blur, border subtle
7. Ensure not generic: no 3x2 grid of icons with same copy, no 4 cards with same lorem ipsum, no generic service list — each service has unique path same discipline as 3D Studio not six cloned cards

---

## Example Page Compositions — Unique — No Repeats

### Homepage — 13 Blocks — Cinematic Journey
Block 01 Hero Cinematic Giant WOODEX (Corporate workplaces built for business) + Block 02 Trust Bar + Block 03 Six Services St-Spaces (P1 Office Fit-Out etc) + Block 04 Lx-Pin Pinned Scroll (See it Understand it Build it 3D/360/BOQ) + Block 05 Sectors 6 cards + Block 06 Stats 4 cards 200+ 10+ ~10 3 studios + Block 07 Foundations Studies masonry + Block 08 Approach/FAQ First we understand space + FAQ 5 Qs + Block 09 Marquee Corporate Offices Software Houses Retail Showrooms Restaurants Cafés Healthcare 3D Studio Turnkey + Block 10 Featured From approved still to BOQ and site + Block 11 CTA Tell us about your space + Block 12 Footer INTERIORS Giant

### About — 8 Blocks — Practice at a Glance — Different from Homepage
Block 13 Hero About (Designing spaces with purpose and precision — About Woodex Interior — 10 Years) + Block 06 Stats but with 95% Customer satisfaction rate avatars Modern architecture Building renovation like Screenshot_9 + Block 14 What Is Woodex Interior? Not decorator Design + Build Company + Block 15 Who We Serve CEO Founder Head Admin etc + Block 18 Process 7 Gates with about story Since 2016 M-71 Zainab Tower + Block 23 Why Woodex + Block 24 Testimonial Wellstar + Block 26 Final CTA Book Consultation + Block 12 Footer

### Office Fit-Out — 16 Blocks — P1 Revenue Engine — Different from About and Homepage
Block 13 Hero Office Fit-Out (Office Fit-Out Services Lahore — Corporate Turnkey High-performing corporate environments) + Block 02 Trust Bar + Block 14 What Is Office Fit-Out? Empty space to operational office + Block 15 Who For Corporate Executive Co-Working Software House + Block 16 What Includes Civil MEP Joinery Furniture Project Management BOQ + Block 17 Fit-Out Types Corporate Executive Co-Working Software House + Block 18 Process Fast-Track + Block 19 Inclusions Table + Block 20 Featured Office Fit-Out Projects + Block 21 Materials Systems Workstations acoustic glass partitions + Block 22 Cost Factors + Block 23 Why Woodex One contract one PM + Block 24 Testimonial Office Fit-Out + Block 25 FAQ Office Fit-Out 7 Qs + Block 26 Final CTA Book Office Fit-Out Consultation + Block 27 Related Services + Block 12 Footer

### Corporate Offices Sector — 12 Blocks — Challenge Definition — Different from Service Pages
Block 28 Sector Hero Corporate Offices (Corporate Office Interior Design and Fit-Out in Lahore High-performing corporate environments) + Block 02 Trust Bar + Block 29 Challenge Corporate Office Interior Challenge (Corporate office is physical statement culture ambition standards brand First 10 seconds judgment New hire career decision) + Block 16 What Delivers for Corporate + Block 17 Services for Corporate + Block 18 Process Corporate Office Process + Block 20 Featured Corporate Projects + Block 22 Cost Factors Corporate + Block 23 Why Woodex for Corporate + Block 25 FAQ Corporate + Block 26 Final CTA Book Corporate Office Consultation + Block 27 Related Services + Block 12 Footer

### Lahore Location — 13 Blocks — Local SEO Anchor — Different from Sectors
Block 30 Location Hero Lahore (Interior Design Company Lahore — Office Commercial Residential Based in Lahore Since 2016 Primary office full operations) + Block 02 Trust Bar + Block 14 Based in Lahore Since 2016 Story + Block 16 Commercial Services in Lahore + Block 17 Residential Services in Lahore + Block 15 Sectors Served in Lahore + Block 17 Lahore Areas We Serve Gulberg III DHA Phase 1-8 Model Town Johar Town Bahria Town Cantt Garden Town Faisal Town MM Alam Link Road + Block 20 Featured Lahore Projects + Block 23 Why Lahore Clients Choose Woodex + Block 30 Office Details M-71 Zainab Tower Map embed + Block 25 FAQ Lahore Do you work in DHA? Can you do after-hours in Gulberg? + Block 26 Final CTA Book Lahore Consultation + Block 27 Related Locations Strip Karachi Islamabad etc + Pakistan Delivery + Block 12 Footer

### 3D Studio — 12 Blocks — Render Quality Strip Dual-Market — Different from All
Block 35 Hero Render Quality Strip (Hero IS best photorealistic render full viewport gradient left dark right transparent trust bar Photorealistic Output Fast Turnaround All Pakistan render strip horizontal scroll 5-8 thumbnails) + Block 14 What Is 3D Visualization? Still is meeting One still per key room In-house not render farm 3D-only complete + Block 16 What Delivers Interior Rendering Architectural Rendering Animation Walkthrough Virtual Tours Sciography Consultancy + Block 17 Services + Block 18 Process Brief Modeling Texturing Lighting Rendering Revisions Delivery + Block 21 Quality Photorealistic not moodboard + Block 22 Pricing Factors + Block 23 Why Woodex Studio 10 years in-house fast turnaround All Pakistan used for own fit-out so buildable + Block 20 Portfolio Best Renders Horizontal Scroll + Block 25 FAQ 3D Studio Can I buy 3D without turnkey? What do you need to start? Revisions? Format? + Block 26 Final CTA Commission a 3D Project + View Portfolio + Block 27 Related Services + Block 12 Footer

---

## Performance Notes — Every Block

- Use transform and opacity only for animations (GPU), not width height top left (CPU)
- will-change only for transform opacity, not all
- IntersectionObserver for reveal threshold 0.06 rootMargin -8% not scroll listener
- Passive true for scroll listener header hide/show
- Cleanup setInterval for cine-slide
- Images WebP/AVIF + JPG fallback srcset 400w 800w 1408w 1920w width 1408 height 768 explicit CLS fix loading lazy except hero fetchpriority high
- CSS Tailwind built 13KB minified purged not CDN runtime FOUC, legacy CSS 122KB will be purged Phase 2 critical CSS inline <100KB
- JS vanilla IIFE 15KB no framework bloat, minify Phase 2
- Security headers X-Content-Type-Options nosniff X-Frame-Options SAMEORIGIN Referrer-Policy strict-origin-when-cross-origin Permissions-Policy, CSP HSTS Phase 2
- PWA offline Phase 2
- GA4 placeholder G-XXXXXXXXXX replace real ID custom events start_project_click whatsapp_click phone_click form_submit
- Accessibility focus-visible focus trap lightbox contrast 4.5:1 Phase 2

---

*Generated — Block Library 35 Unique Sections — Linoxa Inspired — No Generic Repeats — Every Page Unique Every Section Unique — Screenshots Reference + https://linoxa.webflow.io/home-two — 2026-09-16 — Arena Agent Mode*
