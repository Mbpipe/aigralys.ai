# AIGRALYS — Slow Luxury Destination

A masculine slow-luxury destination with integrated ecommerce capabilities. Built for gentlemen who appreciate craftsmanship, ritual, and the art of intentional living.

## 🎯 Project Philosophy

This is **NOT** a typical ecommerce website. This is:

- A **destination** — magazine-like, editorial-driven
- A **private club** — curated, exclusive feeling
- A **ritual space** — slow, contemplative, intentional

### Psychological Positioning

**Core Identity:**
- Slow moment
- Personal ritual
- Masculine elegance
- Vintage modern luxury
- Accessible premium

**User Feeling:**
> "I discovered something refined that not everyone knows."

**Tone:**
Understated confidence. Editorial masculinity. Timeless taste.

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS with custom luxury palette
- **Animation:** Framer Motion
- **Typography:** Cormorant Garamond (serif) + Inter (sans)
- **Language:** TypeScript

## 🎨 Design System

### Color Palette

```js
charcoal: '#1A1A1A'    // Primary dark
tobacco: '#5C4033'     // Warm brown
beige: '#E8DCC4'       // Warm light
gold: '#C9A961'        // Accent
warm-white: '#FAF8F3'  // Text
```

### Typography

- **Serif (Editorial):** Cormorant Garamond — titles, headlines
- **Sans (Body):** Inter — body text, UI elements

### Animation Principles

- Slow transitions (1-2s)
- Smooth parallax effects
- Fade-in on scroll
- Hover states: 500ms ease
- No jarring movements

## 📁 Project Structure

```
app/
├── components/
│   ├── Header.tsx              # Fixed navigation
│   ├── Footer.tsx              # Site footer
│   ├── HeroSlowMoment.tsx      # Cinematic hero with parallax
│   ├── EditorialSection.tsx    # Image + text editorial blocks
│   ├── RitualBlock.tsx         # Numbered principle cards
│   ├── PremiumProductCard.tsx  # Product display cards
│   ├── JournalFeature.tsx      # Article cards
│   └── CategoryNav.tsx         # Category filter navigation
├── page.tsx                    # Home page
├── shop/page.tsx               # Product catalog
├── product/[id]/page.tsx       # Product detail
├── journal/page.tsx            # Journal archive
├── journal/[slug]/page.tsx     # Individual articles
├── about/page.tsx              # Philosophy page
├── layout.tsx                  # Root layout
└── globals.css                 # Global styles

lib/
├── products.ts                 # Product data + utilities
├── journal.ts                  # Article data + utilities
└── imageService.ts             # Image fetching utilities

scripts/
└── downloadImages.mjs          # Automated image downloader
```

## 🛍️ Product Categories

1. **Premium Cigars** — storytelling driven, ritual focused
2. **Watches** — mechanical appreciation, heritage
3. **Arabian Perfumes** — sensory narrative, emotional
4. **Gentleman Accessories** — leather goods, tools, objects

## 📸 Image System

### Automated Image Fetching

The site includes a script to automatically download premium editorial images from Unsplash.

#### Setup

1. Get a free Unsplash API key: https://unsplash.com/developers
2. Set environment variable:
   ```bash
   export UNSPLASH_ACCESS_KEY="your_key_here"
   ```

3. Run the download script:
   ```bash
   npm run download-images
   ```

The script will download ~20 curated images to `/public/assets/`.

### Image Queries

All queries are optimized for:
- Luxury masculine aesthetic
- Dark cinematic mood
- Editorial photography style
- High contrast, warm tones

### Manual Image Alternative

If you prefer to use your own images, place them in `/public/assets/` with these names:

**Hero Images:**
- `hero-main.jpg` — Homepage hero
- `about-hero.jpg` — About page hero

**Product Images:**
- `cigar-1.jpg`, `cigar-2.jpg`, `cigar-3.jpg`
- `watch-1.jpg`, `watch-2.jpg`, `watch-3.jpg`
- `perfume-1.jpg`, `perfume-2.jpg`, `perfume-3.jpg`
- `acc-1.jpg`, `acc-2.jpg`

**Editorial Images:**
- `cigar-editorial.jpg`
- `watch-editorial.jpg`
- `perfume-editorial.jpg`

**Journal Images:**
- `journal-cigar.jpg`
- `journal-watch.jpg`
- `journal-oud.jpg`
- `journal-morning.jpg`

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Download images (optional, requires Unsplash API key)
npm run download-images

# Run development server
npm run dev
```

Visit: http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 🎭 Page Overview

### Home Page (`/`)

- Cinematic hero with slow parallax
- Philosophy statement
- Editorial sections (cigars, watches, perfumes)
- Gentleman's Code (4 principle blocks)
- Featured products
- Final CTA

### Shop Page (`/shop`)

- Category navigation (all, cigars, watches, perfumes, accessories)
- Product grid with hover effects
- Minimal, quiet luxury aesthetic

### Product Detail (`/product/[id]`)

- Large editorial product images
- Story-first approach
- Specifications
- Origin information
- Ritual description
- Related products

### Journal (`/journal`)

- Editorial article cards
- Read time indicators
- Feature images
- Clean typography

### Journal Article (`/journal/[slug]`)

- Full-bleed hero image
- Long-form essay layout
- Custom prose styling
- Back navigation

### About (`/about`)

- Philosophy manifesto
- Founder's note
- Principles breakdown
- Values grid

## 🎯 UX Behavior

### Psychological Flow

1. **Arrival** — Slow cinematic hero creates pause
2. **Discovery** — Editorial storytelling pulls user in
3. **Connection** — Products appear naturally within narrative
4. **Desire** — User wants to explore, not forced to buy
5. **Action** — Subtle CTAs, quiet confidence

### Conversion Psychology

- **Limited curation** — fewer choices, more desire
- **Editorial commerce** — products within stories
- **Premium spacing** — visual breathing room
- **Club atmosphere** — slightly exclusive feeling
- **Discovery flow** — hidden gems, not catalog

## 📝 Content Strategy

### Product Stories

Every product has:
1. **Story** — emotional narrative
2. **Origin** — place, heritage
3. **Ritual** — how to use it intentionally
4. **Specifications** — technical details

### Journal Topics

- Craftsmanship deep dives
- Ritual building guides
- Product appreciation essays
- Lifestyle philosophy

## 🎨 Component Usage

### HeroSlowMoment

```tsx
<HeroSlowMoment
  title="The Art of Slow Living"
  subtitle="Curated Rituals"
  imageSrc="/assets/hero.jpg"
  height="full" // or "tall" | "medium"
/>
```

### EditorialSection

```tsx
<EditorialSection
  title="Mechanical Heartbeat"
  description="Time should be felt, not just seen."
  imageSrc="/assets/watch.jpg"
  imagePosition="left" // or "right"
  link="/shop?category=watches"
  linkText="Discover Timepieces"
/>
```

### RitualBlock

```tsx
<RitualBlock
  number="01"
  title="Craftsmanship Over Speed"
  description="Every item is chosen for how it was made."
/>
```

## 🔧 Customization

### Adding Products

Edit `/lib/products.ts`:

```typescript
{
  id: 'unique-slug',
  name: 'Product Name',
  category: 'cigars' | 'watches' | 'perfumes' | 'accessories',
  price: 450,
  currency: 'USD',
  story: 'Emotional narrative...',
  origin: 'Place, Country',
  ritual: 'How to use it...',
  images: ['/assets/img.jpg'],
  specifications: [
    { label: 'Material', value: 'Leather' }
  ],
  limited: true,
  inStock: true
}
```

### Adding Journal Articles

Edit `/lib/journal.ts`:

```typescript
{
  slug: 'article-slug',
  title: 'Article Title',
  excerpt: 'Brief description...',
  content: '<p>HTML content...</p>',
  imageSrc: '/assets/journal-img.jpg',
  readTime: '5 min',
  publishedAt: '2026-01-15'
}
```

## 🎯 Performance

- Framer Motion for smooth animations
- Lazy loading images
- Optimized Next.js build
- Minimal JavaScript

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Adaptive typography

## 🔐 Environment Variables

```bash
# Optional: For image downloading
UNSPLASH_ACCESS_KEY=your_key_here
PEXELS_API_KEY=your_key_here
```

## 🎨 Brand Guidelines

### Do:
- Use slow, contemplative language
- Focus on craft and story
- Minimal, editorial layouts
- Dark, warm color palette
- Large typography

### Don't:
- Use aggressive sales language
- Create busy layouts
- Use bright, flashy colors
- Add countdown timers or urgency tactics
- Use generic stock imagery

## 📊 Success Metrics

This site succeeds when users:
- Spend 3+ minutes exploring
- Read full journal articles
- Feel discovery, not selling
- Return periodically (destination behavior)
- Share with like-minded friends

## 🤝 Contributing

When adding features, maintain:
- Slow, intentional UX
- Editorial aesthetic
- Story-first approach
- Quiet luxury feeling

## 📄 License

Private project. All rights reserved.

---

**Remember:** This is not an ecommerce site. This is a destination. A ritual. A pause from the noise.

