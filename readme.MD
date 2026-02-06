# AIGRALYS — Masculine Slow Luxury Destination

> A curated destination for gentlemen who appreciate the art of slow living.

![Version](https://img.shields.io/badge/version-2.0.0-gold)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

---

## 🎯 What This Is

This is **NOT** a typical ecommerce website.

This is a **masculine slow-luxury destination** with integrated commerce capabilities.

Think:
- Hodinkee
- Mr Porter  
- A secret gentleman's club online

### Core Identity

- **Slow moment** — pause from modern noise
- **Personal ritual** — intentional living
- **Masculine elegance** — vintage modern luxury
- **Accessible premium** — refined, not arrogant

### User Feeling

> "I discovered something refined that not everyone knows."

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit: http://localhost:3000
```

That's it! The site works immediately with curated Unsplash images.

**See [QUICKSTART.md](./QUICKSTART.md) for detailed setup.**

---

## 📦 What's Included

### Pages

- **Home** (`/`) — Cinematic hero, editorial sections, featured products
- **Shop** (`/shop`) — Category-filtered product catalog
- **Product Detail** (`/product/[id]`) — Story-first product pages
- **Journal** (`/journal`) — Editorial articles on craftsmanship & ritual
- **About** (`/about`) — Philosophy manifesto

### Product Categories

1. **Premium Cigars** — storytelling driven, ritual focused
2. **Watches** — mechanical appreciation, Swiss & Japanese heritage
3. **Arabian Perfumes** — sensory narrative, oud-focused
4. **Gentleman Accessories** — leather goods, tools, refined objects

### Components

- `HeroSlowMoment` — Cinematic parallax hero
- `EditorialSection` — Image + text editorial blocks
- `RitualBlock` — Numbered principle cards
- `PremiumProductCard` — Luxury product display
- `JournalFeature` — Article cards with read time
- `CategoryNav` — Animated category filter

---

## 🎨 Design System

### Colors

```
Charcoal:    #1A1A1A  (Primary dark)
Tobacco:     #5C4033  (Warm brown)
Beige:       #E8DCC4  (Warm light)
Gold:        #C9A961  (Accent)
Warm White:  #FAF8F3  (Text)
```

### Typography

- **Serif:** Cormorant Garamond — titles, editorial
- **Sans:** Inter — body text, UI

### Animation Principles

- Slow transitions (1-2s duration)
- Smooth parallax scrolling
- Fade-in on scroll (Framer Motion)
- Hover states: 500ms ease

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animation:** Framer Motion
- **Fonts:** Google Fonts (Cormorant Garamond + Inter)
- **Images:** Unsplash API (with fallbacks)

---

## 📁 Project Structure

```
app/
├── components/          # Reusable luxury components
├── shop/               # Product catalog
├── product/[id]/       # Product detail pages
├── journal/            # Editorial articles
├── about/              # Philosophy page
├── layout.tsx          # Root layout
└── page.tsx            # Homepage

lib/
├── products.ts         # Product data & utilities
├── journal.ts          # Article data & utilities
├── imageService.ts     # Image fetching (optional)
└── imageUtils.ts       # Image fallback helpers

scripts/
├── downloadImages.mjs  # Automated image downloader
└── createPlaceholders.mjs

public/
└── assets/            # Downloaded images (optional)
```

---

## 🖼️ Images

The site uses **curated Unsplash images** as defaults. They work immediately.

### Option 1: Use Default Images (Easiest)

Nothing to do! The site uses direct Unsplash URLs.

### Option 2: Download High-Quality Images

1. Get free Unsplash API key: https://unsplash.com/developers
2. Create `.env`:
   ```bash
   UNSPLASH_ACCESS_KEY=your_key_here
   ```
3. Run script:
   ```bash
   npm run download-images
   ```

This downloads ~20 premium images to `/public/assets/`.

### Option 3: Use Your Own Images

Replace Unsplash URLs in:
- `/lib/products.ts` — product images
- `/lib/journal.ts` — article images
- `/app/page.tsx` — homepage images
- `/app/about/page.tsx` — about page images

---

## 📝 Customization

### Add Products

Edit `/lib/products.ts`:

```typescript
{
  id: 'unique-slug',
  name: 'Product Name',
  category: 'cigars' | 'watches' | 'perfumes' | 'accessories',
  price: 450,
  currency: 'USD',
  story: 'Emotional narrative about the product...',
  origin: 'Place, Country',
  ritual: 'How to use it intentionally...',
  images: ['https://...'],
  specifications: [
    { label: 'Material', value: 'Italian Leather' }
  ],
  limited: true,
  inStock: true
}
```

### Add Journal Articles

Edit `/lib/journal.ts`:

```typescript
{
  slug: 'article-slug',
  title: 'Article Title',
  excerpt: 'Brief description...',
  content: '<p>HTML content...</p>',
  imageSrc: 'https://...',
  readTime: '5 min',
  publishedAt: '2026-01-15'
}
```

### Change Branding

- **Site name:** `/app/layout.tsx` (metadata)
- **Logo:** `/app/components/Header.tsx`
- **Colors:** `/tailwind.config.js`
- **Footer:** `/app/components/Footer.tsx`

---

## 🎯 UX Philosophy

### Conversion Psychology

1. **Limited Curation** — Fewer choices = more desire
2. **Editorial Commerce** — Products within stories, not catalogs
3. **Premium Spacing** — Visual breathing room implies value
4. **Discovery Flow** — Users feel they're finding hidden gems
5. **Club Atmosphere** — Slightly exclusive, not mass-market

### User Journey

1. **Arrival** — Slow cinematic hero creates pause
2. **Discovery** — Editorial storytelling pulls user in
3. **Connection** — Products appear naturally
4. **Desire** — User wants to explore, not forced to buy
5. **Action** — Subtle CTAs, quiet confidence

**This must feel like a destination, not a transaction.**

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel: https://vercel.com
3. Auto-deploys from `main` branch

### Netlify

1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

### Self-Hosted

```bash
npm run build
npm start
# Runs on port 3000
```

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.**

---

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** — Get running in 5 minutes
- **[LUXURY_README.md](./LUXURY_README.md)** — Comprehensive guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — Production deployment

---

## 🎨 Component Usage

### Hero

```tsx
<HeroSlowMoment
  title="The Art of Slow Living"
  subtitle="Curated Rituals"
  imageSrc="https://..."
  height="full" // or "tall" | "medium"
/>
```

### Editorial Section

```tsx
<EditorialSection
  title="Mechanical Heartbeat"
  description="Time should be felt, not just seen."
  imageSrc="https://..."
  imagePosition="left" // or "right"
  link="/shop?category=watches"
  linkText="Discover"
/>
```

### Ritual Block

```tsx
<RitualBlock
  number="01"
  title="Craftsmanship Over Speed"
  description="Every item chosen for how it was made."
/>
```

---

## 🎯 Brand Guidelines

### Do

✓ Use slow, contemplative language  
✓ Focus on craft and story  
✓ Minimal, editorial layouts  
✓ Dark, warm color palette  
✓ Large, breathing typography

### Don't

✗ Use aggressive sales language  
✗ Create busy, cluttered layouts  
✗ Use bright, flashy colors  
✗ Add countdown timers  
✗ Use generic stock imagery

---

## 📊 Success Metrics

The site succeeds when users:

- Spend 3+ minutes exploring
- Read full journal articles  
- Feel discovery, not pressure
- Return periodically (destination behavior)
- Share with like-minded friends

---

## 🤝 Contributing

When adding features, maintain:

- Slow, intentional UX
- Editorial aesthetic
- Story-first approach
- Quiet luxury feeling

---

## 📄 License

Private project. All rights reserved.

---

## 🥃 Philosophy

> This is not an ecommerce site. This is a destination. A ritual. A pause from the noise.

Every object tells a story.  
Every ritual matters.  
Take your time.

---

**Built with intention. Deployed with care.**

For questions: Read the docs first. Then build.
