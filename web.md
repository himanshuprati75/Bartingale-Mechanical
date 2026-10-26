# Bartingale Mechanical Inc. — Codebase & UX Architecture Audit

## 1. GLOBAL STYLING & COLOR PSYCHOLOGY
- **Brand & Target Market**:
  - Business Name: **Bartingale Mechanical Inc.** (An APi Group Company / The Jamar Company)
  - Domain: `https://www.bartingalemechanical.com/`
  - Headquarters / NAP: **3213 Louis Avenue, Suite G, Eau Claire, WI 54703**
  - 24/7 Live Emergency Line: **(715) 835-3169** | Fax: 715-835-0538
  - Email: **info@bartingalemechanical.com**
  - History & Foundation: **Founded in 1913 by brothers Bert & Tom Bartingale** in Eau Claire, WI (110+ Years continuous craftsmanship).
  - Unions & Certifications: **UA Local 434 (Plumbers & Steamfitters)**, Sheet Metal Workers (SMWIA), ASME, ASHRAE, APi Group, The Jamar Company.
  - Primary Service Footprint: Eau Claire, Chippewa Falls, Menomonie, Altoona, Hudson, Rice Lake, River Falls, Fall Creek, Elk Mound, Bloomer, Black River Falls, St. Croix Valley, and Western Wisconsin.
- **Curated Color Palette**:
  - `crimson-600` / `crimson-700` (`#c8102e` / `#9b0c22`): Bartingale signature mechanical crimson representing institutional power, prompt emergency response, and steam/boiler mastery.
  - `iron-950` / `slate-900` (`#0a0f1d` / `#0f172a`): Deep industrial iron establishing heavy architectural authority, chiller plant dependability, and high visual contrast.
  - `amberGold-500` / `amberGold-600` (`#f59e0b` / `#d97706`): Heritage gold accents honoring 110+ years of continuous Wisconsin trade excellence since 1913.

---

## 2. PROFESSIONAL 4-TO-5 SEPARATED TABS ARCHITECTURE (Core Standard)
- **Strict Tab Rule**:
  - Top navigation bars must never feature cluttered or wrapped text links. They are strictly limited to **4 to 5 clean, distinct, separated tabs** inside an elevated capsule pill container.
- **Header Separated Pill Tab System (`Header.jsx`)**:
  - **Container**: Elevated capsule pill container (`bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-inner flex items-center`).
  - **Tabs (Strictly 5)**:
    1. **Services** (with interactive dropdown containing 6 core commercial capabilities: Commercial Plumbing, Rooftop HVAC & Chillers, Boilers & Process Steam Piping, Refrigeration, Building Automation, In-House Sheet Metal Fabrication).
    2. **Pricing** (with subtle `LIVE` pill badge, linking to `#calculator`).
    3. **Real Work** (linking to `#craftsmanship`).
    4. **About Us** (linking to `#about`).
    5. **Reviews** (linking to `#reviews`).
  - **Separation & Spacing**:
    - Each tab is rendered as an individually padded rounded pill with discrete vertical dividers (`w-px h-4 bg-slate-300/80`).
    - Every tab enforces `whitespace-nowrap` to guarantee zero text wrapping on all viewports.
    - Emergency dispatch phone number `(715) 835-3169` is locked to a single line with generous breathing room and click-to-call modal trigger.
- **Services Section Separated Tabs (`ServicesGrid.jsx`)**:
  - Interactive 6-tab filter bar: `[All Capabilities (6)]` `[Commercial Plumbing]` `[HVAC & Chillers]` `[Boilers & Steam Piping]` `[Refrigeration]` `[Building Automation]`.
- **Cost Calculator Category Filter Tabs (`CostCalculator.jsx`)**:
  - Segmented category tabs: `[All Services (6)]` `[HVAC & Chillers]` `[Boilers & Piping]` `[Commercial Plumbing]` `[Refrigeration]` `[DDC Controls]`.

---

## 3. MOBILE-FIRST ARCHITECTURE (Crucial)
- **Mobile Menu Drawer**:
  - Replaces messy text lists with **6 separated card buttons** with category icons, live tags, and direct emergency dispatch links.
- **Sticky Bottom Lifeline CTA (`MobileStickyCTA.jsx`)**:
  - Fixed to viewport bottom on screens `< 768px` (`fixed bottom-0 left-0 right-0 z-40`).
  - Implements safe-area inset padding (`pb-[max(0.75rem,env(safe-area-inset-bottom))]`) for modern mobile devices.
  - Features a prominent 1-tap `CALL (715) 835-3169` button with emergency pulse animation alongside a direct `$50 OFF` dispatch credit button linking directly to the synchronized lead form.

---

## 4. HIGH-CONVERTING RECIPROCITY SEQUENCE
- **Step 1 — Immediate Calming & Problem Identification (`Hero.jsx`)**:
  - 3-second hook delivering instant trust: *"Western Wisconsin's Premier Mechanical Contractor Since 1913. 24/7 Emergency Commercial HVAC, Plumbing & Process Piping."*
  - Quick-dispatch issue selector allowing facility managers and business owners to select their mechanical priority.
- **Step 2 — 4-Pillar Engineering & Value Defense (`TrustShield.jsx`)**:
  - 110+ Years Heritage (Since 1913), UA Local 434 Union Certified Craftsmen, APi Group / Jamar Backing, 24/7/365 Emergency Dispatch.
- **Step 3 — Value-First Reciprocity Engine (`CostCalculator.jsx`)**:
  - Facility managers see transparent commercial repair and installation ranges, estimated arrival times, and typical operational savings before entering contact information.
- **Step 4 — State-Synchronized Lead Capture (`LeadCaptureForm.jsx`)**:
  - Pre-populates selected mechanical priority from Hero or Cost Calculator.
  - Automatically activates web courtesy discount: `-$50.00 OFF Dispatch Fee` (`CODE: BARTINGALE50-DISPATCH`).
  - Realistic dispatch confirmation ticket generator (`BM-WI-XXXX`) with 15-minute response window and 1-tap emergency line.

---

## 5. BUILD & VERIFICATION STATUS
- **Production Build**: `npm run build` completed with exit code `0`.
- **Distribution Artifacts**:
  - `dist/index.html` (3.03 kB)
  - `dist/assets/index-sVH9xc8Y.css` (41.34 kB)
  - `dist/assets/index-CBo07jyb.js` (251.40 kB)
- **Live Local Verification**: Running on `http://localhost:3004/` across desktop (1440x900) and mobile (375x667) viewports with browser subagent visual capture.
