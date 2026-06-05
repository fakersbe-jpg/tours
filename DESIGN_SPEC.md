# 🌍 Tours Travel Website — UI Design Specification

> **Repository:** fakersbe-jpg/tours  
> **Author:** UI Design Team  
> **Version:** 1.0

---

## Table of Contents

1. [Sections Breakdown](#1-sections-breakdown)
2. [Layout Structure](#2-layout-structure)
3. [Spacing System](#3-spacing-system)
4. [Typography Scale](#4-typography-scale)
5. [Color Palette](#5-color-palette)
6. [Button Styles](#6-button-styles)
7. [Component Breakdown (Atomic Design)](#7-component-breakdown-atomic-design)
8. [Responsive Breakpoints](#8-responsive-breakpoints)
9. [Asset Requirements](#9-asset-requirements)
10. [Shadow & Effects Tokens](#10-shadow--effects-tokens)

---

## 1. Sections Breakdown

The travel website consists of **10 distinct sections** in the following order:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Navbar** | Primary navigation, logo, CTA button |
| 2 | **Hero** | Captivating headline, subtext, search/cta banner |
| 3 | **Travel Places** | Featured travel destinations grid |
| 4 | **Our Services** | Service offerings (flights, hotels, guides) |
| 5 | **Popular Destinations** | Top-rated destinations with pricing |
| 6 | **Why Choose Us** | Value propositions, stats, differentiators |
| 7 | **Testimonials** | Customer reviews and ratings |
| 8 | **FAQ** | Accordion-style frequently asked questions |
| 9 | **Contact** | Contact form, map, social links |
| 10 | **Footer** | Links, newsletter, copyright, branding |

---

## 2. Layout Structure

### 2.1 Grid System

- **12-column grid** for desktop
- Container max-width: **1200px** centered with auto margins
- Column gap: **24px** (6 × 4px base)

```
Desktop:    [1][2][3][4][5][6][7][8][9][10][11][12]
Tablet:     [1][2][3][4][5][6][7][8]
Mobile:     [1][2][3][4]
```

### 2.2 Flex Patterns

| Pattern | Usage | Properties |
|---------|-------|------------|
| `flex-row` | Navbar, Feature lists | `display: flex; align-items: center` |
| `flex-col` | Mobile nav, Card content | `display: flex; flex-direction: column` |
| `flex-wrap` | Service cards, Team | `flex-wrap: wrap; gap: var(--spacing-6)` |
| `flex-center` | Hero CTA, Icons | `justify-content: center; align-items: center` |

### 2.3 Section Layout Template

```css
.section {
  padding: var(--spacing-20) 0;
}

.section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-6);
}

.section__header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
}
```

---

## 3. Spacing System

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-1` | 4px | Micro spacing, icon margins |
| `--spacing-2` | 8px | Tight padding, small gaps |
| `--spacing-3` | 12px | Button padding, form elements |
| `--spacing-4` | 16px | Standard padding, card padding |
| `--spacing-5` | 20px | Paragraph margins |
| `--spacing-6` | 24px | Grid gaps, section padding sides |
| `--spacing-8` | 32px | Card groups, large margins |
| `--spacing-10` | 40px | Section padding top/bottom |
| `--spacing-12` | 48px | Large section separators |
| `--spacing-16` | 64px | Hero section padding |
| `--spacing-20` | 80px | Major section padding |
| `--spacing-24` | 96px | Page-level spacing |

---

## 4. Typography Scale

### 4.1 Font Family

| Usage | Font Stack |
|-------|-----------|
| Headings | `'Playfair Display', Georgia, serif` |
| Body | `'Inter', -apple-system, sans-serif` |
| Accent/Mono | `'JetBrains Mono', monospace` |

### 4.2 Font Sizes

| Token | Size (px) | Line Height | Weight | Usage |
|-------|-----------|-------------|--------|-------|
| `text-xs` | 12px | 1.4 | 400 | Captions, small labels |
| `text-sm` | 14px | 1.5 | 400 | Body small, footer text |
| `text-base` | 16px | 1.6 | 400 | Default body text |
| `text-lg` | 18px | 1.6 | 500 | Lead text, nav links |
| `text-xl` | 20px | 1.5 | 600 | Subheadings, card titles |
| `text-2xl` | 24px | 1.4 | 700 | Section headings |
| `text-3xl` | 30px | 1.3 | 700 | Large section headings |
| `text-4xl` | 36px | 1.2 | 800 | Hero subheading |
| `text-5xl` | 48px | 1.1 | 900 | Hero main heading |

### 4.3 Heading Hierarchy

```css
h1 { font-size: var(--text-5xl); font-weight: 900; }
h2 { font-size: var(--text-3xl); font-weight: 700; }
h3 { font-size: var(--text-2xl); font-weight: 600; }
h4 { font-size: var(--text-xl); font-weight: 600; }
h5 { font-size: var(--text-lg); font-weight: 500; }
h6 { font-size: var(--text-base); font-weight: 500; }
```

---

## 5. Color Palette

### 5.1 Brand Colors

| Token | Hex Code | Usage |
|-------|----------|-------|
| `--color-primary` | `#2D9C5E` | Primary buttons, links, accents |
| `--color-primary-dark` | `#1E7A48` | Hover states, active links |
| `--color-primary-light` | `#4FB87A` | Light badges, backgrounds |
| `--color-secondary` | `#F59E0B` | Highlights, badges, CTA accents |
| `--color-secondary-dark` | `#D48A08` | Secondary hover states |
| `--color-secondary-light` | `#FCD34D` | Soft highlights, star ratings |

### 5.2 Neutral Colors

| Token | Hex Code | Usage |
|-------|----------|-------|
| `--color-white` | `#FFFFFF` | Backgrounds, cards |
| `--color-gray-50` | `#F9FAFB` | Section backgrounds |
| `--color-gray-100` | `#F3F4F6` | Card backgrounds |
| `--color-gray-200` | `#E5E7EB` | Borders, dividers |
| `--color-gray-300` | `#D1D5DB` | Disabled states |
| `--color-gray-400` | `#9CA3AF` | Placeholder text |
| `--color-gray-500` | `#6B7280` | Secondary text |
| `--color-gray-600` | `#4B5563` | Body text |
| `--color-gray-700` | `#374151` | Heading text |
| `--color-gray-800` | `#1F2937` | Dark headings |
| `--color-gray-900` | `#111827` | Almost black |

### 5.3 Semantic Colors

| Token | Hex Code | Usage |
|-------|----------|-------|
| `--color-success` | `#10B981` | Success messages |
| `--color-warning` | `#F59E0B` | Warning alerts |
| `--color-error` | `#EF4444` | Error messages |
| `--color-info` | `#3B82F6` | Info banners |
| `--color-star` | `#F59E0B` | Star ratings |

### 5.4 Dark Theme (Optional)

| Token | Hex Code |
|-------|----------|
| `--dark-bg` | `#0F172A` |
| `--dark-surface` | `#1E293B` |
| `--dark-text` | `#F1F5F9` |
| `--dark-border` | `#334155` |

---

## 6. Button Styles

### 6.1 Button Types

#### Primary Filled

```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  box-shadow: 0 4px 14px rgba(45, 156, 94, 0.4);
  transform: translateY(-2px);
}
```

#### Secondary Outlined

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 10px 26px;
  border-radius: 8px;
  font-weight: 600;
  font-size: var(--text-base);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}
```

#### Small Button

```css
.btn-small {
  padding: 6px 16px;
  font-size: var(--text-sm);
  border-radius: 6px;
}
```

#### View All / Link Button

```css
.btn-view-all {
  background: transparent;
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: gap 0.3s ease;
}

.btn-view-all:hover {
  gap: var(--spacing-3);
}
```

### 6.2 Button Size Matrix

| Variant | Padding Y | Padding X | Font Size | Border Radius |
|---------|-----------|-----------|-----------|---------------|
| Large | 16px | 36px | 18px | 10px |
| Medium (default) | 12px | 28px | 16px | 8px |
| Small | 6px | 16px | 14px | 6px |
| Extra Small | 4px | 12px | 12px | 4px |

---

## 7. Component Breakdown (Atomic Design)

### 7.1 Atoms

| Component | Description | States |
|-----------|-------------|--------|
| `Heading` | H1–H6 text elements | Default |
| `Paragraph` | Body text `<p>` | Default, small |
| `Label` | Form labels `<label>` | Default, error |
| `Input` | Text input fields | Default, focus, error, disabled |
| `Textarea` | Multi-line text input | Default, focus, error |
| `Button` | Clickable action element | Default, hover, active, disabled, loading |
| `Icon` | SVG icon component | Default, colored |
| `Badge` | Small status indicator | Default, sale, new, popular |
| `Avatar` | User/customer image | Default, with badge |
| `Price` | Currency display element | Regular, sale, per-person |
| `StarRating` | 1–5 star visual rating | Interactive, static |
| `Tag` | Keyword/chip element | Default, clickable, removable |
| `Divider` | Horizontal/vertical line | Light, medium, dark |
| `Spinner` | Loading indicator | Small, medium, large |

### 7.2 Molecules

| Component | Atoms Used | Description |
|-----------|-----------|-------------|
| `SearchBar` | Input + Button + Icon | Destination search |
| `NavLink` | Text + Icon (optional) | Navigation item with hover |
| `Card` | Image + Heading + Text + Badge | Reusable content card |
| `TestimonialCard` | Avatar + StarRating + Text + Name | Review display |
| `ServiceItem` | Icon + Heading + Text | Service offering |
| `StatItem` | Number + Label | Statistics display |
| `FormGroup` | Label + Input + ErrorText | Form field group |
| `FAQItem` | Heading + Text + Icon (chevron) | Accordion toggle |
| `SocialLink` | Icon + Link | Social media anchor |
| `Breadcrumb` | Links + Separator Icons | Page navigation path |
| `NewsletterForm` | Input + Button | Email subscription |

### 7.3 Organisms

| Component | Molecules Used | Description |
|-----------|---------------|-------------|
| `Navbar` | Logo + NavLinks + Button | Top navigation bar |
| `HeroSection` | Heading + Paragraph + SearchBar | Hero banner with CTA |
| `TravelPlacesGrid` | Card[] + SectionHeader | Destination grid |
| `ServicesList` | ServiceItem[] + SectionHeader | Services showcase |
| `DestinationsCarousel` | Card[] + Navigation | Scrollable destinations |
| `WhyChooseSection` | StatItem[] + FeatureList | Value proposition |
| `TestimonialsSlider` | TestimonialCard[] + Nav | Review carousel |
| `FAQSection` | FAQItem[] + SectionHeader | Accordion list |
| `ContactSection` | FormGroup[] + Map + SocialLink[] | Contact area |
| `Footer` | Logo + LinkGroups + NewsletterForm + SocialLink[] | Site footer |
| `MobileMenu` | NavLinks + Button | Off-canvas navigation |

---

## 8. Responsive Breakpoints

### 8.1 Breakpoint Tokens

| Name | Min Width | Target Devices |
|------|-----------|----------------|
| `xs` | 0px | Small phones (portrait) |
| `sm` | 640px | Large phones / phablets |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape) / small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

### 8.2 Responsive Strategy

```css
/* Mobile-first approach */

/* Base (xs): Single column, stacked layout */
.section__grid {
  grid-template-columns: 1fr;
}

/* sm: 2 columns */
@media (min-width: 640px) {
  .section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* md: 2-3 columns */
@media (min-width: 768px) {
  .section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .navbar__menu {
    display: flex;
  }
  .navbar__hamburger {
    display: none;
  }
}

/* lg: 3-4 columns */
@media (min-width: 1024px) {
  .section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .hero__content {
    max-width: 60%;
  }
}

/* xl: Full layout */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
```

### 8.3 Section-Specific Responsive Behavior

| Section | Mobile (xs) | Tablet (md) | Desktop (lg+) |
|---------|-------------|-------------|---------------|
| Navbar | Hamburger menu, logo | Hamburger + inline links | Full nav with CTA |
| Hero | Full-width background, stacked | Overlay text, side-by-side | Split hero with image |
| Travel Places | 1 col | 2 cols | 3 cols |
| Services | 1 col, stacked icons | 2 cols | 3–4 cols |
| Destinations | 1 col | 2 cols | 4 cols |
| Why Choose Us | Stacked stats | 2×2 grid | Stats row + features |
| Testimonials | 1 card visible | 2 cards | 3 cards |
| FAQ | Full width | Centered, 80% width | Centered, 60% width |
| Contact | Stacked form + map | Form right, map left | Side-by-side |
| Footer | Stacked columns | 2 cols | 4 cols |

---

## 9. Asset Requirements

### 9.1 Image Assets

| Asset Type | Dimensions | Format | Notes |
|------------|-----------|--------|-------|
| Hero background | 1920 × 1080px | WebP (jpg fallback) | High-quality travel scene |
| Destination cards | 600 × 400px | WebP | Cropped 3:2 ratio |
| Service icons | 80 × 80px | SVG | Line-style, consistent stroke |
| Team/avatar photos | 120 × 120px | WebP | Square crop, centered face |
| Country/destination flags | 32 × 24px | SVG | Rounded corners |
| Logo | 180 × 48px (horizontal), 48 × 48px (icon) | SVG | Include monochrome variant |

### 9.2 Icon Requirements

| Icon Name | Usage |
|-----------|-------|
| `search` | Search bar |
| `menu` / `hamburger` | Mobile nav toggle |
| `close` / `x` | Modals, mobile menu close |
| `chevron-down` | FAQ accordion, dropdowns |
| `chevron-left` / `chevron-right` | Carousels, sliders |
| `star` (filled & outline) | Ratings |
| `arrow-right` | View all links, CTAs |
| `phone` | Contact |
| `email` / `mail` | Contact |
| `location` / `map-pin` | Destinations, contact |
| `calendar` | Booking, date picker |
| `users` / `group` | Testimonials, stats |
| `globe` | Travel, global reach |
| `shield` / `security` | Trust badges |
| `check` / `check-circle` | Features, benefits |
| `plane` | Flights service |
| `hotel` / `building` | Accommodation |
| `compass` | Tours service |
| `instagram` | Social link |
| `facebook` | Social link |
| `twitter` / `x` | Social link |
| `youtube` | Social link |

### 9.3 Image Optimization Guidelines

- All raster images **must** use `<picture>` element with WebP + JPEG fallback
- Lazy loading (`loading="lazy"`) for below-the-fold images
- Provide `srcset` at 1x, 1.5x, and 2x resolutions
- Maximum file size: **200KB** for hero, **80KB** for cards
- Alt text required for all images

---

## 10. Shadow & Effects Tokens

### 10.1 Box Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px 0 rgba(0,0,0,0.05)` | Subtle cards, inputs |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)` | Modals, elevated cards |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)` | Hero overlays, popups |
| `--shadow-2xl` | `0 25px 50px -12px rgba(0,0,0,0.25)` | Heavy modals, drawers |
| `--shadow-primary` | `0 4px 14px 0 rgba(45,156,94,0.35)` | Primary button glow |
| `--shadow-secondary` | `0 4px 14px 0 rgba(245,158,11,0.35)` | Secondary button glow |

### 10.2 Border Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small badges, tags |
| `--radius-md` | 8px | Buttons, cards, inputs |
| `--radius-lg` | 12px | Modals, larger cards |
| `--radius-xl` | 16px | Containers, sections |
| `--radius-full` | 9999px | Avatars, pills, rounded buttons |

### 10.3 Transition & Animation Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `150ms ease` | Color changes, hovers |
| `--transition-base` | `300ms ease` | Most interactions |
| `--transition-slow` | `500ms ease` | Modals, page transitions |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Expressive motion |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | UI transitions |

### 10.4 Effects

| Effect | CSS Implementation | Usage |
|--------|-------------------|-------|
| Hover lift | `transform: translateY(-4px);` | Cards, buttons |
| Image zoom | `transform: scale(1.05);` | Destination cards |
| Fade in | `opacity: 0 → 1;` | Page sections on scroll |
| Slide up | `translateY(20px) → translateY(0);` | Entrance animations |
| Skeleton shimmer | Gradient animation | Loading states |
| Glassmorphism | `backdrop-filter: blur(12px);` | Navbar, modals (overlays) |
| Gradient overlay | `linear-gradient(to top, rgba(0,0,0,0.7), transparent)` | Hero text readability |
| Pulse | Scale animation | CTA attention, notifications |

### 10.5 Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-dropdown` | 100 | Dropdown menus |
| `--z-sticky` | 200 | Sticky navbar |
| `--z-overlay` | 300 | Modals overlay |
| `--z-modal` | 400 | Modal content |
| `--z-toast` | 500 | Toast notifications |
| `--z-tooltip` | 600 | Tooltips |

---

## Appendix A: CSS Custom Properties Summary

```css
:root {
  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;
  --text-5xl: 48px;

  /* Colors */
  --color-primary: #2D9C5E;
  --color-primary-dark: #1E7A48;
  --color-primary-light: #4FB87A;
  --color-secondary: #F59E0B;
  --color-secondary-dark: #D48A08;
  --color-secondary-light: #FCD34D;
  --color-white: #FFFFFF;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  --shadow-primary: 0 4px 14px 0 rgba(45,156,94,0.35);

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;

  /* Z-Index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
  --z-tooltip: 600;
}
```

---

## Appendix B: Sample Component — Destination Card

```html
<article class="destination-card">
  <div class="destination-card__image-wrapper">
    <img
      class="destination-card__image"
      src="destination.webp"
      alt="Bali, Indonesia"
      loading="lazy"
    />
    <span class="badge badge--popular">Popular</span>
    <span class="destination-card__price">$299</span>
  </div>
  <div class="destination-card__content">
    <h3 class="destination-card__title">Bali, Indonesia</h3>
    <div class="destination-card__rating">
      <span class="star-rating" data-rating="4.8">★★★★★</span>
      <span class="destination-card__reviews">(1,234 reviews)</span>
    </div>
    <p class="destination-card__description">
      Explore ancient temples, pristine beaches, and vibrant culture.
    </p>
    <button class="btn-primary btn-small">Book Now</button>
  </div>
</article>
```

```css
.destination-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.destination-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.destination-card__image-wrapper {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.destination-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.destination-card:hover .destination-card__image {
  transform: scale(1.05);
}

.destination-card__content {
  padding: var(--spacing-5);
}

.destination-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-2);
}

.destination-card__price {
  position: absolute;
  bottom: var(--spacing-3);
  right: var(--spacing-3);
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: var(--text-sm);
}
```

---

> **Design System Notes:**  
> - All components must pass WCAG 2.1 AA contrast ratios  
> - Interactive elements require visible focus states (`:focus-visible`)  
> - Touch targets must be at least 44×44px on mobile  
> - Follow mobile-first responsive methodology  
> - Use CSS custom properties for theming flexibility