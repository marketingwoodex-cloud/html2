# WOODEX 3D STUDIO™ — LINOXA REPLICA V2 DESIGN SYSTEM
### Delete old black/gold Exaggerated Minimalism — New navy/cream Linoxa Home Two replica based on screenshots 27 PNGs + https://linoxa.webflow.io/home-two
**Date:** 2026-09-16  
**Source:** /screenshots/*.png (Screenshot_1 to Screenshot_33), https://linoxa.webflow.io/home-two fetch, Impeccable skill https://github.com/pbakaus/impeccable.git, UI/UX Pro Max skill  
**Campaign:** DRAWN. THEN BUILT. / See the room before it exists. / Beyond Design. We Build Experiences.  
**Domain:** https://woodex.com.pk — M-71 Zainab Tower, Model Town Link Road, Lahore — +92 322 4000768

---

## 1. OLD DESIGN SYSTEM — DELETED — WHY IT FAILED AUDIT

**Old:** Primary #171717, Accent #A16207 gold, Exaggerated Minimalism, font-weight 900, clamp 3rem 10vw 12rem, Cinzel/Josefin Sans, massive whitespace 8rem, Portfolio Grid pattern.

**UI/UX Pro Max Audit (Old):**
- Pattern Portfolio Grid correct for 3D portfolio but missing Linoxa Home Two agency showcase pattern (hero giant bleed + split + stats + FAQ + contact)
- Style Exaggerated Minimalism 900 weight too loud for corporate workplace client — Linoxa uses 500 weight tight, corporate trust not fashion loud
- Colors black+gold luxury real estate — not Linoxa navy/cream #0f1e36/#fcf2e8 — fails replica requirement
- Typography Cinzel serif luxury — Linoxa uses sans only Plus Jakarta Sans 500 — serif breaks replica
- Spacing 8rem huge unstructured — Linoxa uses 96px-128px structured sections with vertical grid lines 4x
- Missing blocks: Trusted partners 6 logos, Building documentation 3-col, Industrial facility, Detailed site analysis overlapping images, Contemporary retreat carousel 3D perspective, Blurred overlay glass card, Digital solutions 3 cards, Stats 100%/180+, Organizational capability 01-05 list, Creating timeless, FAQ accordion, Contact split

**Impeccable Audit (Old):**
- npx impeccable detect /tmp/old-3d-studio.njk → [] (no deterministic anti-patterns) — but semantic audit fails:
  - P0: Gold accent #A16207 used for progress bar — not Linoxa navy, breaks brand register (Impeccable rule: brand anchors must be consistent)
  - P1: Hover-lift shadow 20px 40px heavy — Impeccable bans unbounded shadow, prefers border subtle
  - P1: Filter pills All/Corporate/Kitchen not Linoxa service row pattern — breaks UX pattern consistency
  - P1: LX-PIN absolute copies with opacity/translateY — works but not Linoxa pinned scroll narrative
  - P2: No stats block, no FAQ, no contact form underline — missing conversion surfaces

**Decision:** Delete old system entirely, rebuild from Linoxa tokens.

---

## 2. NEW DESIGN SYSTEM — LINOXA REPLICA — TOKENS

### Colors — From Screenshot_26 Colors.png + Linoxa Home Two

| Token | Hex | Usage | Reasoning one-line |
|-------|-----|-------|-------------------|
| --linoxa-navy | #0f1e36 | Primary bg, buttons, dark sections | Deep navy signals trust + premium corporate, Linoxa primary from Screenshot_26, replaces gold for B2B workplace |
| --linoxa-navy-2 | #0c1628 | Hero overlay, darker variant | Slightly darker for hero gradient left 80% ensures text legibility over photorealistic render |
| --linoxa-cream | #fcf2e8 | Light beige bg, cards | Light Beige #fcf2e8 from Screenshot_26, warm neutral softens architectural hardness, alternation with navy creates rhythm |
| --linoxa-cream-2 | #f4efe7 | Alternate cream | From existing input.css --cream, slightly darker for section alternation without pure white fatigue |
| --linoxa-black | #111111 | Jet Black text | Jet Black #111111 from Screenshot_26, avoids pure #000 which Impeccable bans, tinted black for readability |
| --linoxa-charcoal | #525252 | Charcoal Gray secondary text | Charcoal Gray #525252 from Screenshot_26, muted body maintains hierarchy, 4.5:1 contrast on white |
| --linoxa-silver | #c0c0c0 | Silver border | Silver #c0c0c0 from Screenshot_26, subtle divider for service rows without harshness |
| --linoxa-light-gray | #e3e1e1 | Light Gray border/bg | Light Gray #e3e1e1 from Screenshot_26, card borders and service row dividers, low contrast |
| --linoxa-deep-gray | #d9d9d9 | Deep Gray border | Deep Gray #d9d9d9 from Screenshot_26, stronger border when needed |
| --linoxa-white | #ffffff | White bg | White for cards and primary bg, ensures contrast with navy |

**One-line reasoning for palette:** Navy #0f1e36 + cream #fcf2e8 is Linoxa Home Two signature — navy conveys corporate trust and premium, cream provides warmth and breathing space, avoiding generic black/gold luxury that fails B2B workplace conversion.

### Typography — From Screenshot_28 Typography.png

| Role | Size | Line Height | Weight | Reasoning one-line |
|------|------|-------------|--------|-------------------|
| H1 | 5rem (80px) | 112.5% | 500 | 5rem tight -0.02em 500 from Screenshot_28, not 900 — 500 feels architectural precision, not fashion loud, readable at 100svh hero |
| H2 | 2.812rem (45px) | 122% | 500 | 2.812rem from Screenshot_28, balances hierarchy between giant hero and body, 500 weight maintains Linoxa calm authority |
| H3 | 1.875rem (30px) | 133% | 500 | 1.875rem from Screenshot_28, section heads like Industrial facility, 133% airy for long titles |
| H4 | 1.562rem (25px) | 128% | 500 | 1.562rem from Screenshot_28, card titles, 128% tight for 2-line titles |
| H5 | 1.25rem (20px) | 150% | 500 | 1.25rem from Screenshot_28, small card titles |
| H6 | 1.125rem (18px) | 155% | 400 | 1.125rem 400 from Screenshot_28, eyebrow subheads |
| Body | 1rem (16px) | 162% | 400 | 1rem 162% 400 from Screenshot_28, optimal reading for architectural descriptions, charcoal #525252 not pure black reduces eye strain |
| Sub | 0.875rem (14px) | 185% | 400 | 0.875rem 185% 400 from Screenshot_28, captions and meta, 185% generous for dense info like BOQ notes |
| Button | 0.9375rem (15px) | 162% | 500 | 0.9375rem 162% 500 from Screenshot_28, pill button text, 500 weight makes CTA feel actionable not light |

**Font Family:** Plus Jakarta Sans — Linoxa Home Two uses geometric sans tight, not serif. **Reasoning:** Plus Jakarta Sans is Linoxa's actual choice from Webflow, tight -0.02em tracking mirrors Linoxa's architectural precision, sans-only system avoids serif/sans clash that breaks replica. Note Impeccable flags it as overused — acceptable because brief wins (Linoxa replica is explicit requirement).

**Google Fonts:** https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap

### Spacing — Linoxa generous whitespace

| Token | Value | Reasoning one-line |
|-------|-------|-------------------|
| --linoxa-section | clamp(64px,8vw,128px) | 96px-128px desktop from Linoxa sections, 64px mobile — generous whitespace creates premium agency feel, not cramped 24px SaaS |
| Container | max-w 1360px mx-auto px-6 lg:px-8 | Linoxa uses 1360px max, wider than 1240px for architectural imagery breathing |
| Grid gap | 16px-24px | 16px for cards (Screenshot_1 6 logos gap 16px), 24px for 12-col sections |
| Card radius | 16px | Rounded 16px from all screenshots — Screenshot_4 spiral tower image 16px, Screenshot_6 industrial 16px, Screenshot_13 contact form 16px — softens concrete hardness |
| Card radius lg | 24px | 24px for larger hero or special cards, but Linoxa primary is 16px |
| Vertical grid lines | 4x 1px white 8% opacity | Linoxa Home Two signature — 4 vertical lines across hero, Screenshot_2,3,5 show them, creates editorial grid |

**Reasoning:** Linoxa's spacing is not minimal 8px SaaS — it's architectural 96px-128px sections, 16px cards, 4 grid lines — mimics blueprint grid, reinforces "DRAWN. THEN BUILT."

### Button States — Linoxa pill with arrow circle

| State | Style | Reasoning one-line |
|-------|-------|-------------------|
| Primary navy | bg #0f1e36 text white rounded-full 14px 20px 14px 24px gap 12px arrow 28px white circle with navy arrow | Navy pill with white circle arrow is Linoxa signature from Screenshot_4 Explore our services, Screenshot_6 Get started — high contrast, arrow indicates forward, pill softens corporate hardness |
| Hover primary | bg #1a2f4f translateY -1px arrow translate 2px -2px 200ms ease | Subtle lift + arrow diagonal move reinforces action without bounce/elastic (Impeccable bans bounce), 200ms ease is Linoxa standard |
| Secondary white | bg white text navy border 1px rgba(15,30,54,0.08) arrow navy circle white arrow | White pill on dark bg alternation maintains hierarchy, border subtle 0.08 opacity ensures not pure white clash on navy |
| Hover secondary | bg #f8f8f8 | Light gray hover provides feedback without color shift |
| Ghost service row | border-bottom 1px #e3e1e1 py 18px flex justify-between hover pl 8px border-color navy 150ms ease + arrow up-right | Service list rows from Screenshot_4 Residential design solutions ↗ — border-bottom creates scanability, arrow up-right indicates expand, hover padding-left 8px subtle motion |
| Focus | outline 2px #0f1e36 offset 2px | WCAG AA keyboard visibility, navy outline matches primary, offset prevents overlap |

### Image Treatment

| Rule | Value | Reasoning one-line |
|------|-------|-------------------|
| Rounded | 16px | All Linoxa images rounded 16px from screenshots — softens architectural concrete, consistent with card system |
| Aspect | 4:3 or 16:9 or 4:5 | 4:3 for cards (Screenshot_6 small living room), 16:9 for hero, 4:5 for tall architectural (Screenshot_4 spiral tower) — variety avoids monotony |
| Object-fit | cover | Cover ensures no distortion, architectural images need crop not stretch |
| Hover | scale 1.03 duration 700ms | Scale 1.03 subtle from Linoxa image hover, 700ms slow luxurious, not 200ms snappy SaaS |
| Overlay | gradient dark 40% or blur glass 20px border white/10 | Gradient ensures text legibility over photorealistic render (Screenshot_2 hero overlay left dark 80% right transparent), glass blur for contemporary retreat overlay card (Screenshot_20) |

---

## 3. BLOCK LIBRARY — 15 SECTIONS — REPLICA FROM SCREENSHOTS — UNIQUE FOR 3D STUDIO

Each block extracted from screenshots, improved for Woodex 3D Studio™.

### Block 1: Hero — Screenshot_2,3,5 Replica — Spaces shaped by purpose and identity
- **Layout:** 100svh, bg image studio-hero.jpg object-position 40% center, overlay black/40 + gradient left #0c1628/80 via 30% to transparent, vertical grid lines 4x white 8%, giant STUDIO 18rem 700 -0.06em white 8% bottom bleeding translate-y 18%, container-wx max 720px left, eyebrow 11px 0.18em uppercase white/60, H1 5rem 112.5% 500, grid 12-col 5+7 for CTA + description, side vertical label hidden lg flex vertical-rl
- **Content:** Inspired spaces — WOODEX 3D STUDIO™ — DRAWN. THEN BUILT., H1 Spaces shaped by purpose and identity (from Linoxa but mapped to 3D Studio: See the room before it exists), Get started white pill with arrow circle, description Architecture is more than structures... In-house, not render farm
- **Interaction:** No carousel, single hero, but giant word STUDIO like LAYOUT/DESIGN/CREATE from screenshots
- **Unique Rule:** Hero uses STUDIO giant, not LAYOUT/DESIGN/CREATE — one giant word per brand

### Block 2: Trusted Partners — Screenshot_1 Replica — Driving success through strong partnerships
- **Layout:** Dark navy #0f1e36 bg, py section 96-128px, top flex justify-between gap 12, left max 420px eyebrow + H2, right hidden lg block line white/10 + 240px white line, grid 12-col 7+5, left 2x3 grid gap 16px 6 cards aspect 1.4/1 rounded 16px dark navy border white/8, right space-y 10 border-b white/10 pb 8
- **Content:** 6 cards: Corporate, Kitchen, Pharmacy, Retail, Software House, Healthcare — not Tribepa/DIAGEO/Jamie Oliver — mapped to Woodex sectors, right text modern functional environments... In-house not render farm same still to BOQ and mill, COMPTOIR LIBANAIS — 3D Studio™ Wellstar DHA Lahore 200+ 10 years ISO 9001 M-71 Zainab Tower DRAWN THEN BUILT, SpectraFlow BOQ+MILL CONNECTED
- **Unique Rule:** Cards use sector names, not logos — Studies label placeholder

### Block 3: Commercial Architecture Split — Screenshot_4 Replica
- **Layout:** Grid 12-col 6+6 gap 0, left bg #0f1e36 p 8 lg:p-12 flex center, card dark aspect 4/5 max 480px mx-auto rounded 16px image studio-hero.jpg, right bg #fafaf8 p 8 lg:p-12 lg:pl-16 flex col justify-center max 520px, H2 Commercial architecture and space solutions, sub Creating meaningful..., CTA Explore our services navy pill, mt 12 service rows 4x border-bottom + arrow circle
- **Content:** Service rows: Interior rendering — stills first, Architectural rendering — buildable, Walkthrough & 360 — when path matters, BOQ consultancy — same still to mill — each maps to Linoxa Residential/Project management/Structural but for 3D Studio
- **Unique Rule:** Right bottom hidden lg block image hero-1.jpg Buildable still

### Block 4: Building Documentation 3-col — Screenshot_7 & 25 Replica
- **Layout:** Bg #f8f8f8 py section, container-wx grid 12-col 3+5+4 gap 6 lg:gap-8 items-start, left H2 Building documentation + sub + Learn more pill + hidden lg block card aspect 4/3 image studio-kitchen.jpg, center card aspect 4/5 lg:3/4 rounded 16px image project-spatial.jpg, right space-y 6: card bg white p-8 icon briefcase + Interior design + sub, p-8 icon consultation + Consultation + sub + border top, p-8 icon 3D Modeling
- **Content:** Interior design Thoughtfully designed spaces reflecting identity and functionality One still per key room in-house, Consultation We transform ideas... BOQ clarity no fake sqft rate, 3D Modeling Architecture focused on simplicity... Photorealistic not moodboard
- **Unique Rule:** Center large image is spiral staircase equivalent — uses project-spatial.jpg

### Block 5: Industrial Facility — Screenshot_6 & 30 Replica
- **Layout:** Bg white py section, container-wx grid 12-col 6+6 gap 8 lg:gap-12 items-start, left card aspect 4/5 rounded 16px image studio-pharmacy.jpg, right max 480px H2 Industrial facility designs with optimal space utilization, h-px bg #e3e1e1 mt 8, body mt 8, ul mt 6 space-y 2 sub bullets, mt 8 flex gap 8 CTA Get started + hidden md block w 180px rounded 12px aspect 4/3 image hero-2.jpg
- **Content:** Our architecture reflects balance of creativity and precision... Stills first same still to BOQ and mill, bullets Interior architecture planning one still per key room, Urban design consulting walkthrough when path matters, Master planning services BOQ + mill connected
- **Unique Rule:** Left image is triangular red windows house equivalent — uses pharmacy study

### Block 6: Detailed Site Analysis Overlapping — Screenshot_18 Replica
- **Layout:** Bg #fcf2e8 py section, container-wx grid 12-col 5+7 gap 8 lg:gap-12 items-start, left H2 Detailed site analysis and planning for optimal, mt 10 space-y 8 checks: Structural integrity assessments + sub, Functional space planning + sub, mt 10 Discover more pill, right relative min-h 600px: absolute right 0 top 0 w 75% aspect 4/3 rounded 16px image project-retreat.jpg, absolute left 0 top 30% w 42% aspect 3/4 rounded 16px border 4px #fcf2e8 shadow-xl image studio-kitchen.jpg, bottom right hidden lg flex gap 2 text 11px tracking-widest uppercase black/40 STILLS FIRST • BOQ CONNECTED • MILL READY
- **Content:** Checks: Structural integrity assessments We evaluate site conditions... For 3D Studio we evaluate drawings photos site to ensure render is buildable not fantasy, Functional space planning We design efficient layouts... One still per key room not 20 random angles
- **Unique Rule:** Overlapping images mimic Screenshot_18 small red house over large sculptural building

### Block 7: Contemporary Retreat Carousel 3D Perspective — Screenshot_19 Replica
- **Layout:** Bg #0f1e36 py section overflow-hidden, container-wx relative flex items-center justify-center gap 4 md:gap-6 perspective 1200px, hidden md block w 12% aspect 3/4 rounded 12px opacity 60 rotateY 35deg image hero-1.jpg, w 22% aspect 4/3 rounded 12px opacity 80 rotateY 20deg image project-spatial.jpg, w 90% md:w 50% aspect 16/10 rounded 16px shadow-2xl image project-retreat.jpg, w 22% aspect 4/3 opacity 80 rotateY -20deg image hero-2.jpg, w 12% aspect 3/4 opacity 60 rotateY -35deg image project-minimal.jpg, text-center white mt 10 16px font-semibold Contemporary retreat — DRAWN. THEN BUILT.
- **Content:** Carousel showcases photorealistic renders in 3D perspective like Linoxa contemporary retreat
- **Unique Rule:** Uses Woodex project images, not Linoxa architecture

### Block 8: Blurred Overlay Glass Card — Screenshot_20 Replica
- **Layout:** Bg #fcf2e8 py section, container-wx relative rounded 16px overflow-hidden aspect 16/9 md:16/8 image project-retreat.jpg, absolute inset 0 flex center p 4 md:p-12, w full max 720px bg #0f1e36/20 backdrop-blur 20px border white/10 rounded 16px p 8 md:p-10 text white, flex col md:row justify-between gap 6: h3 Contemporary retreat + sub A curated showcase..., mt 16 flex col md:row justify-between items-start md:items-end gap 6: Offer pill bg white text #0f1e36 rounded-full px 3 py 1 11px font-semibold tracking-widest uppercase + p 16px font-semibold leading-tight max 320px Exploring spaces shaped by structure..., arrow circle w 12 h 12 rounded-full bg #fcf2e8 text #0f1e36 flex center hover scale 105 transition
- **Content:** Glass card showcases featured render with Offer pill like Linoxa
- **Unique Rule:** Offer pill maps to Woodex featured project, not Linoxa offer

### Block 9: Digital Solutions 3 Cards — Screenshot_21 Replica
- **Layout:** Bg white py section, container-wx text-center max 640px mx-auto mb 12 H2 Digital solutions for architectural storytelling excellence + sub, grid 12-col gap 6: 3 cards md:col-span-4 min-h 520px flex col p-8 rounded 16px: first bg #fcf2e8, second bg #f8f8f8, third bg #0f1e36 dark, h3 16px font-semibold leading-tight, sub mt 4, Discover more underline mt 4 gap 2 text 13px font-medium, mt-auto pt 8 rounded 12px aspect 4/3 image
- **Content:** Card1 Designing innovative spaces for modern living and work We design timeless spaces... Corporate first 10 seconds judgment image hero-1.jpg, Card2 Architectural renovations that preserve historical integrity Creating meaningful environments... Retail Enter Pause Pay image project-urban.jpg, Card3 Comprehensive planning and design for your building Designing sustainable... Healthcare compliance hygiene patient flow Wellstar proof image project-concrete.jpg
- **Unique Rule:** 3 cards map to Corporate/Retail/Healthcare sectors, not generic Linoxa

### Block 10: Stats 4-col — Screenshot_22 Replica — 100% 180+ 95% 20+
- **Layout:** Bg #f8f8f8 py section, container-wx text-center max 640px mx-auto mb 12 H2 Digital solutions..., grid 12-col gap 0 bg white rounded 16px overflow-hidden border black/5: 4 cols md:col-span-3 p-8 border-b md:border-b-0 md:border-r border black/5, second bg #0f1e36 text white border white/10, text 48px font-medium leading-none tracking-tight, mt 16 h-px bg black/10 or white/20, mt 8 h4 14px font-semibold + sub mt 3
- **Content:** 200+ Projects delivered Every project we deliver is backed by our unwavering commitment... DRAWN THEN BUILT, 10+ Years experience From intimate interiors to large-scale builds... Since 2016, 100% In-house not render farm Across residential and commercial... Photorealistic not moodboard, 3 Studios Lahore Karachi Islamabad Families and professionals alike trust us... M-71 Zainab Tower — maps to 100%/180+/95%/20+ but for Woodex
- **Unique Rule:** Stats use Woodex proof, not Linoxa 100%/180+

### Block 11: Organizational Capability 01-05 List — Screenshot_23 Replica
- **Layout:** Bg #0f1e36 text white py section, container-wx flex col lg:row justify-between gap 8 mb 12 H2 Organizational capability building — 7 Gates max 320px + Our process white pill self-start, grid 12-col gap 8: left lg:col-span-5 rounded 16px aspect 4/5 image project-minimal.jpg + sub mt 6 max 380px white/60 We blend strategic foresight..., right lg:col-span-7 space-y 0: 7 rows flex justify-between py 6 border-y or border-b border white/10 px 6 bg white/5 or opacity 60 hover opacity 100 transition: arrow circle w 10 h 10 rounded-full bg #fcf2e8 text #0f1e36 or border white/20 + text 16px font-semibold/medium + number 16px font-bold opacity 60 or bold
- **Content:** 01 Discover — space today, 02 Design — what it could be, 03 Visualize — stills first, 04 Plan — Budget + BOQ, 05 Build — civil MEP joinery, 06 Install — furniture + styling, 07 Deliver — handover + aftercare — maps to Project planning 01, Building renovation 02, Urban planning 03, Landscape design 04, Concept development 05 from Screenshot_23
- **Unique Rule:** 7 Gates, not 5 — Woodex process extended

### Block 12: Creating Timeless — Screenshot_8 & 30 Replica
- **Layout:** Bg #f8f8f8 py section, container-wx grid 12-col gap 6: left lg:col-span-5 card aspect 4/5 rounded 16px h-full image project-retreat.jpg, right lg:col-span-7 grid 12-col gap 6: top 8+4: card bg white p-8 h-full flex items-center H2 Creating timeless built environments, card bg white p-8 h-full flex center CTA Explore our services pill, bottom col-span-12 card bg white p-8 lg:p-10 grid 12-col gap 8: left 8 sub max 420px + mt 10 service rows 3x border-bottom + arrow up-right, right 4 rounded 12px aspect square max 160px ml-auto image project-facade.jpg
- **Content:** Our architecture reflects balance of creativity and precision..., service rows Interior architecture planning stills first, Urban design consulting BOQ clarity, Master planning services mill ready — maps to Screenshot_8
- **Unique Rule:** Uses Woodex project images, not Linoxa house with pool

### Block 13: FAQ Accordion — Screenshot_29 Replica — Understanding our approach
- **Layout:** Bg #0f1e36 text white py section, container-wx grid 12-col gap 8: left lg:col-span-5 rounded 16px aspect 16/10 image project-urban.jpg + mt 12 max 380px H2 Understanding our approach to architectural design solutions + sub white/60 + mt 8 Learn more white pill, right lg:col-span-7 space-y 4 id faq-accordion: 5 cards dark border white/10 p-6 rounded 16px: first expanded with - icon, others collapsed + icon, button w-full flex justify-between items-start gap 4 text-left, h4 15px font-semibold, sub white/60 mt 3, icon w 6 h 6 flex center 18px flex-shrink-0, hidden mt 4 sub white/60 for collapsed
- **Content:** FAQ: Can I buy 3D without turnkey? Yes 3D-only is complete..., What do you need to start? Empty hall floor plan brand or drawings..., How many revisions? What format? 2 rounds included 4K stills..., Is it buildable or just pretty? We use same still for own fit-out so must be buildable BOQ turns still into scope..., What makes Woodex trustworthy? 10 years 200+ ISO 9001 3 studios Wellstar...
- **Unique Rule:** FAQ mapped to 3D Studio, not Linoxa complex business challenges

### Block 14: Contact Us Split — Screenshot_13 Replica
- **Layout:** Bg #fcf2e8 py section, container-wx grid 12-col gap 12: left lg:col-span-5 H2 Contact us + sub max 340px Have a project in mind? Get in touch..., mt 12 space-y 8: 3 rows flex gap 4 icon w 10 h 10 center flex-shrink-0 svg location/phone/email + h4 14px font-semibold + sub mt 1, right lg:col-span-7 card bg white p-8 md:p-12 rounded 16px shadow 0 8px 40px rgba(0,0,0,0.06): h3 22px font-semibold text-center Send a message + sub text-center mt 3 max 360px mx-auto We design timeless spaces..., form mt 10 space-y 6 name netlify: hidden form-name, inputs w-full border-0 border-b border black/15 py 3 14px placeholder black/40 focus outline-none focus border #0f1e36 bg transparent: Full name*, email*, phone*, textarea Your message empty hall floor plan..., file upload hidden + label underline decoration black/20 underline-offset-4 cursor-pointer Attach plan/photos optional, pt 6 flex justify-center Submit now black pill bg black hover #111 arrow circle
- **Content:** Main office M-71 Zainab Tower Model Town Link Road Lahore 54000 Pakistan, Phone +92 322 4000768 / +92 321 4686884, Email info@woodex.com.pk — maps to Screenshot_13 Main office 410 Sandtown California, Phone (888) 456 7890, Email info@example.com
- **Unique Rule:** Form includes file upload for plans/photos, Netlify Forms, GA4 events — Linoxa has no file upload

### Block 15: Related Pills — Footer nav
- **Layout:** Bg white py 12 border-t black/5, container-wx flex wrap gap 3: 5 pills border black/10 hover border black/20 rounded-full px 5 py 2.5 13px font-medium transition + arrow up-right, last bg #0f1e36 text white rounded-full px 5 py 2.5 13px font-medium Start your project ↗
- **Content:** Visualization ↗, Turnkey ↗, Space Planning ↗, Projects — DRAWN. THEN BUILT. ↗, Start your project ↗

---

## 4. AUDIT — UI/UX Pro Max + Impeccable — New vs Old

### UI/UX Pro Max — New Design System Search
```
python search.py "linoxa architecture interior design agency navy cream giant typography" --design-system -p "Woodex 3D Studio Linoxa"
→ Pattern: Portfolio Grid (still valid for 3D Studio but now extended with Agency Showcase)
→ Style: Exaggerated Minimalism flagged — but Linoxa replica requires Custom: Navy/Cream Agency — manual override justified
→ Colors: #0f1e36 navy + #fcf2e8 cream from screenshots, not #171717/#A16207
→ Typography: Plus Jakarta Sans from Linoxa, not Cinzel/Josefin — Sans-only for replica
```

**New System Passes Linoxa Replica Checklist:**
- [x] Vertical grid lines 4x white 8% opacity in hero — Screenshot_2,3,5
- [x] Giant bleeding words STUDIO 18rem 700 -0.06em white 8% bottom translate-y 18% — like LAYOUT/DESIGN/CREATE
- [x] Pill buttons navy/white with arrow circle 28px — Screenshot_4,6,7
- [x] Rounded 16px cards — all screenshots
- [x] Navy/cream alternation — Screenshot_6 white, Screenshot_18 cream, Screenshot_19 navy
- [x] Service list rows border-bottom + arrow up-right — Screenshot_4,8
- [x] Building documentation 3-col center large image — Screenshot_7,25
- [x] Industrial facility left large right text + small image — Screenshot_6,30
- [x] Detailed site analysis overlapping images — Screenshot_18
- [x] Contemporary retreat carousel 3D perspective — Screenshot_19
- [x] Blurred overlay glass card Offer pill — Screenshot_20
- [x] Digital solutions 3 cards beige/gray/navy — Screenshot_21
- [x] Stats 4-col 100%/180+ with line separator — Screenshot_22
- [x] Organizational capability 01-05 list with arrow circle — Screenshot_23
- [x] Creating timeless 2 top cards + bottom list + small image — Screenshot_8,30
- [x] FAQ accordion dark navy +/- — Screenshot_29
- [x] Contact split left info icons + right form card underline inputs — Screenshot_13
- [x] No emojis, cursor-pointer, hover 150-300ms, contrast 4.5:1, focus visible, prefers-reduced-motion, responsive 375/768/1024/1440

### Impeccable — npx impeccable detect

**Old file:** /tmp/old-3d-studio.njk → [] no anti-patterns (Cinzel/Josefin not flagged)

**New file:** src/3d-studio/index.njk → 
```
[
  {
    "antipattern": "overused-font",
    "name": "Overused font",
    "description": "Plus Jakarta Sans is overused...",
    "severity": "warning",
    "category": "slop",
    "file": "src/3d-studio/index.njk",
    "line": 32,
    "snippet": "font-family:'Plus Jakarta Sans"
  }
]
```
**Impeccable Verdict:** Only warning is overused-font — acceptable because brief wins: Linoxa replica explicitly requires Plus Jakarta Sans (from Webflow). No P0/P1 blocking issues. No pure black (#111111 not #000000), no nested cards (cards not inside cards), no gray text on colored bg (white/60 on navy passes AA for large text, body charcoal on cream passes 4.5:1), no bounce easing (200ms ease), no tiny touch targets (pill 44px+), no layout thrashing.

**Impeccable Audit Health Score (New):**
| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3 | Plus Jakarta Sans overused warning but contrast 4.5:1 met, focus visible, alt text present, form labels via placeholder but needs explicit label — P2 |
| 2 | Performance | 4 | Images lazy except hero fetchpriority high, transform/opacity only, no will-change overuse, no layout thrash |
| 3 | Responsive | 4 | Grid 12-col responsive, touch targets 44px+, no fixed widths, no horizontal scroll |
| 4 | Theming | 3 | Tokens --linoxa-* used, hard-coded colors minimal, dark/light alternation intentional not broken |
| 5 | Implementation Integrity | 4 | Coherent Linoxa replica system, no drift, 15 unique blocks, no generic repeats |
| **Total** | | **18/20** | **Excellent — minor polish** |

**Recommended Actions:**
1. [P2] `impeccable clarify` — Add explicit <label> for form inputs (currently placeholder only) — improves a11y
2. [P3] `impeccable typeset` — Consider custom font to avoid overused-font warning, but keep Plus Jakarta Sans for Linoxa replica brief wins
3. [P3] `impeccable polish` — Final pass for GA4 events, Netlify Forms, file upload handling

---

## 5. LOADING TO FINAL CTA NARRATIVE — First Second to Final

**0-1s Preloader:** WOODEX word rise + bar load — premium studio entry, body overflow hidden, anticipation — Linoxa style preloader.

**1-3s Hero 100svh:** Full viewport image studio-hero.jpg 40% center object-cover, clip-path inset animation 1.15s ease, image scale 1.12→1 8.5s linear, overlay gradient left #0c1628/80 right transparent, vertical grid lines 4x white 8%, eyebrow Inspired spaces 11px 0.18em uppercase muted, H1 Spaces shaped by purpose and identity -0.02em tight 500 weight 5rem 112.5%, hero-copy Architecture is more than structures..., CTA pill white with black circle arrow slide, side vertical label STILLS FIRST • 3D-ONLY COMPLETE • BOQ + MILL, giant STUDIO 18rem opacity 8% bottom bleeding, feels like Linoxa Home Two but for 3D Studio.

**3-7s Trust Bar:** Not separate bar but Block 2 dark navy Trusted partners — 6 cards Corporate/Kitchen/Pharmacy/Retail/Software House/Healthcare — proof before claim.

**Scroll Sequence:**
1. Hero → 2. Trusted partners (6 logos) → 3. Commercial architecture split (left image dark navy, right service list rows) → 4. Building documentation 3-col (left text + small image, center large spiral equivalent, right cards Interior design/Consultation/3D Modeling) → 5. Industrial facility (left large pharmacy study, right text + small hero-2) → 6. Detailed site analysis overlapping (left checks, right 75% + 42% overlapping) → 7. Carousel 3D perspective dark navy 5 images → 8. Blurred overlay glass card Offer pill → 9. Digital solutions 3 cards beige/gray/navy → 10. Stats 4-col 200+/10+/100%/3 → 11. Organizational capability 7 Gates 01-07 list with arrow circles → 12. Creating timeless left large + right 2 top + bottom list → 13. FAQ accordion dark navy +/- → 14. Contact split cream left info + right form card underline → 15. Related pills + Footer INTERIORS giant.

**Transitions:** Each section fade + slide up via IntersectionObserver threshold 0.06 rootMargin -8%, transform and opacity only (GPU), not width/height, will-change only for transform opacity.

**Final CTA:** Contact us light beige — Have a project in mind? Empty hall, floor plan, brand, or drawings — Main office M-71 Zainab Tower + Phone + Email + Send a message form with file upload Attach plan/photos + Submit now black pill — Netlify Forms + GA4 events.

---

*Generated — Linoxa Replica V2 — Delete Old Black/Gold — New Navy/Cream #0f1e36/#fcf2e8 — 15 Blocks Unique — Screenshots Reference + https://linoxa.webflow.io/home-two — Impeccable + UI/UX Pro Max Audited — 2026-09-16*
