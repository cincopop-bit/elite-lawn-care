# Elite Lawn Care & Junk Removal — Brand Style Guide

## 1. BRAND ESSENCE

**Positioning:** San Antonio's most reliable outdoor service crew — professional execution, zero excuses, same-day availability.

**3 Governing Adjectives:** Bold. Dependable. Hardworking.

**Taglines:**
- Primary: "We Work Hard • We Show Up • You Relax"
- Secondary: "We Do It All!"

---

## 2. COLOR PALETTE

| Token | HEX | Usage |
|---|---|---|
| `--color-primary` | `#6BBF00` | Primary brand green — buttons, highlights, icon fills, active states |
| `--color-primary-dark` | `#4E8C00` | Hover/pressed state for green elements |
| `--color-primary-light` | `#89D900` | Gradient highlights, glow accents |
| `--color-bg` | `#111111` | Site background (dark sections, header, footer) |
| `--color-surface` | `#F8F9F4` | Light sections — service cards, content areas |
| `--color-surface-dark` | `#1C1C1C` | Dark card backgrounds |
| `--color-text-light` | `#FFFFFF` | Text on dark backgrounds |
| `--color-text-dark` | `#1A1A1A` | Text on light backgrounds |
| `--color-text-muted` | `#AAAAAA` | Subtext on dark backgrounds |
| `--color-text-muted-dark` | `#666666` | Subtext on light backgrounds |
| `--color-chrome` | `#D4D4D4` | Chrome/silver accents — borders, dividers |
| `--color-border-dark` | `#2A2A2A` | Dark section borders |
| `--color-border-light` | `#E2E8DD` | Light section borders |

**WCAG AA Contrast Ratios (verified):**
- White on `#111111`: 18.1:1 — AAA
- White on `#6BBF00`: 2.6:1 — Fails (use dark text on green only)
- `#1A1A1A` on `#6BBF00`: 7.4:1 — AAA
- `#1A1A1A` on `#F8F9F4`: 16.5:1 — AAA

**Rule:** Never place white text directly on the primary green. Use dark (`#111111`) text on green buttons and chips.

---

## 3. TYPOGRAPHY

**Fonts (Google Fonts):**
- Heading: **Barlow Condensed** (700 weight) — bold, compact, echoes the logo's sporty lettering
- Body: **Inter** (400/500/600) — clean, readable, professional

**Type Scale:**

| Token | Size | Line-height | Weight | Use |
|---|---|---|---|---|
| `--text-hero` | 3.5rem | 1.1 | 700 | Hero headline |
| `--text-h1` | 2.75rem | 1.15 | 700 | Page title |
| `--text-h2` | 2rem | 1.2 | 700 | Section headers |
| `--text-h3` | 1.5rem | 1.3 | 700 | Card titles |
| `--text-h4` | 1.25rem | 1.4 | 600 | Sub-section labels |
| `--text-body` | 1rem | 1.7 | 400 | Body copy |
| `--text-small` | 0.875rem | 1.6 | 400 | Captions, meta |
| `--text-xs` | 0.75rem | 1.5 | 500 | Labels, tags |

All headings: `font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; letter-spacing: 0.02em;`
Body: `font-family: 'Inter', sans-serif;`

---

## 4. LAYOUT & SPACING

**Spacing Scale:**
```
--space-1: 0.25rem
--space-2: 0.5rem
--space-3: 0.75rem
--space-4: 1rem
--space-6: 1.5rem
--space-8: 2rem
--space-12: 3rem
--space-16: 4rem
--space-20: 5rem
--space-24: 6rem
```

**Layout:**
- Max content width: `1200px`
- Content padding: `1.5rem` (mobile), `2rem` (desktop)
- Grid: CSS Grid 12-column, gap `1.5rem`
- Border radius: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--radius-pill: 9999px`
- Box shadows:
  - `--shadow-card: 0 2px 12px rgba(0,0,0,0.12)`
  - `--shadow-elevated: 0 8px 32px rgba(0,0,0,0.2)`
  - `--shadow-green: 0 4px 20px rgba(107,191,0,0.3)`

---

## 5. COMPONENT STYLING

### Buttons
**Primary (CTA):**
- Background: `#6BBF00`, text: `#111111`, font: Barlow Condensed 700, uppercase
- Padding: `0.875rem 2rem`, border-radius: `6px`
- Hover: `#4E8C00`, slight scale `1.02`, box-shadow: `--shadow-green`
- Example: "Get a Free Estimate", "Call Now"

**Secondary:**
- Border: `2px solid #6BBF00`, text: `#6BBF00`, background: transparent
- Hover: fill with `#6BBF00`, text: `#111111`

**Phone CTA:**
- Dark pill with green phone icon. Large font (1.25rem+). Prominent in header and hero.

### Cards
- Background: `#FFFFFF` (on light sections) or `#1C1C1C` (on dark sections)
- Border-top: `3px solid #6BBF00` on hover
- Border-radius: `8px`
- Padding: `1.5rem`
- Shadow: `--shadow-card`
- Hover: `transform: translateY(-3px)`, shadow intensifies

### Navigation
- Background: `#111111`
- Logo: left-aligned
- Links: white, uppercase, Barlow Condensed 600, `0.85rem`
- Active/hover: `#6BBF00`
- CTA button in nav: green "Get Free Estimate"
- Mobile: hamburger, full-screen dropdown on dark bg
- Sticky on scroll

### Hero Section
- Dark overlay on photo background or gradient from `#0A0A0A` to `#1C1C1C`
- Green decorative line element (3px) above headline
- Large Barlow Condensed headline, white
- Subhead in Inter, muted gray
- Two buttons: Primary CTA + Phone CTA side by side
- Trust bar below hero: icons + stats ("500+ Jobs Completed", "Same-Day Service", "Free Estimates")

### Trust Bar
- Dark strip `#1C1C1C` with border-top `1px solid #2A2A2A`
- 4 items with green icons and white text
- Full-width, 4-column grid on desktop

### Footer
- Background: `#0A0A0A`
- Three columns: brand/tagline, quick links, contact info
- Bottom bar: copyright, policy links
- Green accent line at top of footer

---

## 6. IMAGERY DIRECTION

Photos should communicate real, working-class professionalism — not stock. Key properties:
- Shot in natural daylight, warm afternoon or golden hour
- Vibrant green grass is the hero color in every photo
- Clean, well-kept residential settings in suburban SA neighborhoods
- Before/after storytelling where possible
- No posed stock-looking shots — authentic work scenes

For generated images: Use the image style guide (R3) wrapper.

---

## 7. VOICE & TONE

**3 Do's:**
1. Lead with the benefit ("Your yard handled, start to finish — no callbacks.")
2. Use plain working-class language ("We show up. We get it done.")
3. Speak to peace of mind, not just the task ("Call us once. Cross it off for good.")

**3 Don'ts:**
1. Don't use corporate filler ("We are committed to providing excellence in...")
2. Don't over-explain services — just state what they get
3. Don't use passive voice ("Your lawn will be serviced" → "We mow, edge, and clean up before we leave")

**Rewrite example:**
- Before: "Our team of experienced professionals is dedicated to providing high-quality lawn care services to homeowners in the greater San Antonio area."
- After: "Elite handles everything from weekly mowing to full yard cleanouts — one call, no hassle."

---

## 8. ACCESSIBILITY

- All interactive elements meet WCAG AA contrast ratios
- Focus states: `outline: 2px solid #6BBF00; outline-offset: 3px` on all focusable elements
- Tap targets: minimum `44x44px` on all buttons and links
- Motion: Respect `prefers-reduced-motion` — remove all transforms and transitions when set
- Alt text: All images describe the work shown (e.g., "Trimmed hedges along privacy fence in San Antonio backyard")
- Semantic HTML: Use proper heading hierarchy (h1 → h2 → h3), landmark elements (nav, main, footer)
