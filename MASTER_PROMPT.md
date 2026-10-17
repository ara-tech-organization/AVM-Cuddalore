# MASTER PROMPT: AVM Smiles Thanjavur Landing Page

Paste this whole file into the build session. It is self-contained.

---

## 1. Role and goal

You are a senior front-end engineer and conversion designer. Build the **Thanjavur landing page** for **AVM Smiles Dental Clinic** (route `/thanjavur`). The page must look like part of the same brand family as the corporate site https://avmsmilesdental.com/ (same logo, same colour theme), while being a local, conversion-focused page for Thanjavur patients whose main action is **Book an Appointment** (form, call, WhatsApp).

Content source: the Thanjavur pages of the Google Doc (copy is final; do not rewrite it, only lay it out). The landing page uses the Thanjavur home page copy and links out to the 10 service pages, Contact and Gallery.

## 2. Hard rules

1. **Font: Poppins only** (Google Fonts, weights 300, 400, 500, 600, 700). No other font family anywhere, including the heading style. (The corporate site uses Plus Jakarta Sans and Fraunces; the owner has chosen Poppins for this page, so do not copy those.)
2. **Icons: Lucide only** (`lucide-react`, or the `lucide` CDN in plain HTML). Consistent stroke width 1.75 and size scale 16 / 20 / 24 / 32.
3. **No emojis anywhere**: not in copy, buttons, alt text, comments or commit messages. The doc contains check marks, stars and a speech-bubble emoji; replace them with Lucide icons (`Check`, `CircleCheck`, `Star`, `Quote`).
4. **Smooth animation** on everything interactive and on scroll reveal (details in section 6). Must respect `prefers-reduced-motion`.
5. Mobile first. Breakpoints 360, 640, 768, 1024, 1280. No horizontal scroll at any width.
6. Brand colours and logo come from the corporate site (section 3). Do not invent a new palette.

## 3. Brand assets and theme (taken from avmsmilesdental.com)

**Logo**: https://avmsmilesdental.com/assets/logo-DycUICmx.png (PNG with alpha, 1039 x 625). A local copy is saved at `src/assets/images/avm-logo.png`. Use it in the header (height 44px mobile, 52px desktop), in the footer (on a white chip if on a dark background), and as the favicon source. Never recolour or stretch it. Keep clear space equal to the height of the logo's "A".

**Colour tokens** (exact values from the corporate stylesheet):

| Token | Hex | Use |
|---|---|---|
| brand-600 | `#433B9D` | Primary: buttons, links, headings accents, theme-color |
| brand-700 | `#383182` | Hover / pressed primary |
| brand-900 | `#282459` | Dark sections, footer, shadows |
| brand-500 | `#5A52B8` | Gradient partner, focus ring |
| brand-400 / 300 / 200 / 100 / 50 | `#7D77CE` / `#A7A3E0` / `#C9C7EE` / `#E4E3F6` / `#F1F1FB` | Tints, icon backgrounds, chips |
| accent | `#ED1C24` | Single high-intent CTA colour (Book Now, emergency), used sparingly |
| accent-600 / 100 / 50 | `#D11119` / `#FDE3E4` / `#FEF2F2` | CTA hover, soft badge backgrounds |
| ink | `#1E293B` | Body text and headings |
| muted | `#64748B` | Secondary text |
| line | `#E5E7EB` | Borders |
| section | `#F4F6FA` | Alternate section background |
| surface | `#F8F9FC` | Cards on white |
| whatsapp | `#25D366` | WhatsApp button only |

Define them as CSS variables / Tailwind theme tokens. Shadows follow the corporate style: soft, brand-tinted, e.g. `0 18px 48px -16px rgba(40,36,89,.28)`. Radius: 12px inputs, 20px cards, 999px pills. Text on `brand-600` and `accent` is white; check contrast is at least 4.5:1.

Rule of thumb: roughly 70 percent white/neutral, 25 percent indigo, 5 percent red.

## 4. Imagery

The corporate site ships only the logo as a raster asset, so the "images for sections" are sourced as follows. Prefer, in order: (a) real clinic photos supplied by the client for Thanjavur (gallery page expects clinic, facilities, treatment rooms); (b) licensed stock (Unsplash / Pexels) that is clean, bright, and shows dental care with natural expressions; (c) neutral indigo-tinted placeholders with a clear `TODO: replace` marker.

Place all in `src/assets/images/` as WebP, max 1600px wide, with `loading="lazy"` (hero eager, `fetchpriority="high"`), explicit width/height, and meaningful alt text without emojis.

| Section | Image needed | Notes |
|---|---|---|
| Hero | Smiling patient or dentist with patient, right side, rounded 28px mask | Overlay a floating card (rating, years, patients treated) only if numbers are confirmed by the client |
| Reliable Choice (about) | Clinic reception or treatment room | 4:3 |
| Services | No photos, use Lucide icons in `brand-50` circles | Keeps the grid fast |
| Why Choose | No photos, icons | |
| Gallery teaser | 6 tiles: clinic exterior, reception, treatment chair, sterilisation area, team, smile result | Masonry grid, hover zoom |
| Patient stories | Initials avatars only, no fake photos | |
| CTA band | Soft indigo gradient with subtle tooth/shield pattern (SVG) | |

Do not use fabricated before/after photos of real people. The Before & After section must use client-supplied, consented images; until then show the placeholder state with the Lucide `ImageIcon` and the text "Gallery coming soon".

## 5. Page structure (in this order)

Header is sticky, white with blur on scroll, hides on scroll down and shows on scroll up.

1. **Top bar** (desktop only): `Phone` icon + +91 8071404431, `Clock` icon + hours, `MapPin` icon + "Nanjikkottai, Thanjavur".
2. **Header**: logo, nav (Home, About Us, Services with dropdown of the 10 services, Smile Gallery, Contact Us), primary button "Book Appointment" (accent). Mobile: `Menu` / `X` icon toggles a slide-in drawer.
3. **Hero**
   - H1: "AVM Smiles – Best Dental Clinic in Thanjavur for Complete Smile Care"
   - Intro paragraph from the doc.
   - Eyebrow/tagline: "Strong Teeth. Bright Smiles. Care for Life"
   - Five benefit chips with `CircleCheck`: Skilled Dental Experts, Modern Digital Dentistry, Comfortable Pain-Free Care, Customized Smile Plans, Budget-Friendly Options.
   - Buttons: "Book Your Appointment Today" (accent, `CalendarCheck`), "Call Now" (outline, `Phone`), WhatsApp (`MessageCircle`).
   - Compact booking form card on desktop, floating over the hero image.
4. **Trust strip**: four items with icons (`ShieldCheck` Safety and Hygiene, `Cpu` Modern Technology, `Users` Skilled Specialists, `Wallet` Honest Pricing). No numeric claims unless confirmed.
5. **Thanjavur's Reliable Choice for Dental Health** (about): two paragraphs from the doc, image left, text right. Four mini points: preventive, restorative, cosmetic, orthodontic.
6. **Our Dental Services**: 10 cards in a 1 / 2 / 3 / 4-column responsive grid, each with Lucide icon, title, description, "Read more" link to the service page and "Book Now!" button that pre-selects the treatment in the form.
   Suggested icons: Tooth Extraction `Scissors`, Crowns & Bridges `Crown`, Dentures `Smile`, Root Canal `Activity`, Teeth Whitening `Sparkles`, Scaling & Polishing `Droplets`, Invisible Aligners `Layers`, Braces `Grip`, Veneers `Gem`, Dental Implants `Anchor`. Swap if an icon does not exist in the installed Lucide version.
   Slugs: `/thanjavur/tooth-extraction`, `/dental-crowns-and-bridges`, `/dental-dentures`, `/root-canal-treatment`, `/teeth-whitening-treatment`, `/dental-scaling-polishing`, `/invisible-aligners`, `/invisible-braces`, `/dental-veneer-treatment`, `/dental-implants-treatment` (all under `/thanjavur`).
7. **Why Choose AVM Smiles Thanjavur?**: 6 cards (Modern Technology, Skilled Specialists, Personalized Care, Safety & Hygiene, Honest Pricing, Welcoming Atmosphere) on a `brand-900` dark section with white text and `brand-300` icons.
8. **Before & After Smile Gallery**: heading "Real Patient Transformations", subtext, comparison slider (drag handle, keyboard accessible) if images exist, "View Full Gallery" button to `/thanjavur/gallery`.
9. **Your Path to a Healthier Smile**: 5-step horizontal timeline (vertical on mobile): Consultation, Diagnosis, Personalized Treatment Plan, Treatment, Follow-Up Care. Icons: `Stethoscope`, `ScanLine`, `ClipboardList`, `HeartPulse`, `CalendarClock`. The connecting line draws itself on scroll.
10. **What Our Patients Say**: 3 testimonials from the doc, 5 `Star` icons filled with amber, `Quote` icon, carousel on mobile. Below it, a clearly marked slot for the Google Reviews embed ("if available", per the doc). Do not show a rating number that the client has not confirmed.
11. **FAQs**: 6 questions from the doc in an accessible accordion (`ChevronDown` rotates, height animates). Add FAQPage JSON-LD.
12. **Book Your Dental Consultation in Thanjavur Today** (final CTA + form): heading and paragraph from the doc, form fields Name, Phone Number, Preferred Date, Treatment Required (select of the 10 services) and "Book Appointment" button. Validation inline (10-digit Indian mobile), success state with `CircleCheck`. Submit to a configurable endpoint (`VITE_FORM_ENDPOINT`) with a WhatsApp fallback.
13. **Location**: embedded Google Map ("Our Location", https://maps.app.goo.gl/GvjHF4n1Yuvz9yi26), address card, hours card, "Get Directions" button.
14. **Footer** (`brand-900`): logo, Quick Links (Home, About Us, Services, Smile Gallery, Contact Us), Services (10 links), Contact (phone, WhatsApp, email, address), Follow Us (Facebook, Instagram, Youtube Lucide icons), Clinic Hours, copyright.
15. **Floating actions**: WhatsApp button (bottom right, `#25D366`, gentle pulse) and, on mobile, a sticky bottom bar with Call and Book buttons.

## 6. Motion system

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `ease-out` for hovers. Durations: hover 200 ms, reveal 600 to 700 ms, accordion 300 ms.
- **Scroll reveal**: fade + 24px translate-up, staggered by 80 ms per child, triggered once at 15 percent visibility (IntersectionObserver or Framer Motion `whileInView`).
- **Hero**: headline lines rise in sequence, image scales from 1.04 to 1 with a soft parallax (max 24px), chips pop in with stagger.
- **Cards**: lift 6px, shadow deepens, icon circle fills with `brand-600` and the icon turns white.
- **Buttons**: slight scale 1.02 on hover, 0.98 on press, arrow icon slides 4px; the accent CTA has a slow shine sweep every 6 s.
- **Header**: shadow and background blur fade in after 8px scroll.
- **Counters** (only if numbers are confirmed): count up on view.
- **Timeline**: line fills as it enters the viewport.
- **Mobile drawer**: slides in 300 ms with backdrop fade.
- Anchor links scroll smoothly with a header offset (`scroll-padding-top`).
- Animate only `transform` and `opacity`. Disable all non-essential motion under `prefers-reduced-motion: reduce`.

## 7. Tech stack

React + Vite + Tailwind CSS v4 (same as the corporate site), `lucide-react`, `framer-motion` (optional; CSS plus IntersectionObserver is acceptable), `react-router` with routes `/thanjavur` and the service slugs (service pages may be stubs that link back, only the landing page is in scope now). Component folder per section, copy in a single `content/thanjavur.js` file so non-developers can edit it.

Fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
Type scale: H1 clamp(2rem, 4.5vw, 3.5rem) weight 700; H2 clamp(1.625rem, 3vw, 2.5rem) weight 600; body 16px weight 400, line-height 1.7; eyebrow 12px uppercase weight 600, tracking .18em.

## 8. SEO and metadata

- Title: "Best Dental Clinic in Thanjavur | AVM Smiles"
- Description: "AVM Smiles is the best dental clinic in Thanjavur, offering advanced dental treatments, expert dentists, and complete dental health care for all ages."
- Keywords and slug `/thanjavur` as in the doc. Canonical `https://avmsmilesdental.com/thanjavur`, OG and Twitter tags, `theme-color` `#433B9D`.
- One H1 only. Heading levels follow the doc (H2 sections, H3 cards, H4 FAQ).
- JSON-LD: `Dentist` / `LocalBusiness` with the Thanjavur address, phone, hours, `geo`, plus `FAQPage`. Do not copy the corporate site's placeholder data (phone +91 98765 43210, 4.9 rating, 1280 reviews, Pondicherry keywords); those are not Thanjavur facts.

## 9. Client details (from the doc)

- Phone: +91 8071404431 (WhatsApp number: confirm; the corporate site uses a placeholder 919876543210, do not use it)
- Address: Door No : 21A, Ward No : 7, Muthu Nagar, Vairam Nagar, Deva Nagar, Nanjikkottai, Thanjavur - 613006
- Maps: https://maps.app.goo.gl/GvjHF4n1Yuvz9yi26
- Social: Facebook, Instagram, YouTube (URLs to be supplied)

## 10. Open items to confirm with the client (do not guess)

1. **Hours conflict**: homepage footer says Mon to Sat 9 AM to 8 PM; Contact page says 9 AM to 7 PM. Pick one.
2. **Email**: the doc lists accounts@arkglobalomniverse.com, which does not match the AVM Smiles brand. Confirm it is the intended public address.
3. **WhatsApp number** and social URLs.
4. **Claims**: "best dental clinic", "international clinical safety standards" and "honest pricing" are claims; keep them only if the client can support them. No invented statistics, ratings, doctor names or credentials.
5. **Photos**: real clinic and team photos, and consented before/after images.
6. **Cuddalore**: the doc also has Cuddalore pages (partly cut off); out of scope for this build, but keep the content structure city-agnostic so it can be reused.

## 11. Quality bar and acceptance checklist

- [ ] Poppins is the only font; no emoji characters in source or rendered output
- [ ] Every icon is Lucide; none are inline emoji or images
- [ ] Logo and colours match the corporate site tokens exactly
- [ ] All doc copy for the Thanjavur home page appears, in order, without edits
- [ ] Booking form works, validates, and pre-selects treatment from service cards
- [ ] Lighthouse mobile: Performance 90+, Accessibility 95+, SEO 100; LCP under 2.5 s
- [ ] Keyboard navigation, visible focus ring (`brand-500`, 2px offset), labelled form fields, alt text on all images
- [ ] Reduced-motion behaviour verified
- [ ] Checked at 360, 768, 1024, 1440 widths

## 12. Delivery order

1. Scaffold project, tokens, Poppins, Lucide, content file.
2. Header, hero, footer and floating actions.
3. Remaining sections top to bottom.
4. Motion pass, then accessibility pass, then SEO/JSON-LD.
5. Summarise open items from section 10 for the client.
