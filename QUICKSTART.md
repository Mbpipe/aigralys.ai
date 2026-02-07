# 🚀 Quick Start Guide

Get the luxury destination running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Create Placeholder Images (Optional)

For immediate testing without downloading real images, create a simple placeholder:

```bash
mkdir -p public/assets
```

You can either:

**Option A: Download Real Images (Recommended)**

1. Get free Unsplash API key: https://unsplash.com/developers
2. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
3. Add your Unsplash key to `.env`
4. Run download script:
   ```bash
   npm run download-images
   ```

**Option B: Use Temporary Placeholders**

The site will work with broken images initially. You can add your own images to `/public/assets/` manually with these names:

```
hero-main.jpg
about-hero.jpg
cigar-1.jpg, cigar-2.jpg, cigar-3.jpg
watch-1.jpg, watch-2.jpg, watch-3.jpg
perfume-1.jpg, perfume-2.jpg, perfume-3.jpg
acc-1.jpg, acc-2.jpg
cigar-editorial.jpg
watch-editorial.jpg
perfume-editorial.jpg
journal-cigar.jpg
journal-watch.jpg
journal-oud.jpg
journal-morning.jpg
```

## Step 3: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

## Step 4: Explore

Navigate to:

- **Home** — http://localhost:3000
- **Shop** — http://localhost:3000/shop
- **Product** — http://localhost:3000/product/cigar-cohiba-reserva
- **Journal** — http://localhost:3000/journal
- **About** — http://localhost:3000/about

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Edit Products

Open `/lib/products.ts` and modify the `PRODUCTS` array.

### Edit Articles

Open `/lib/journal.ts` and modify the `ARTICLES` array.

### Change Colors

Open `/tailwind.config.js` and update the color palette.

## Troubleshooting

**Images not loading?**
- Ensure images exist in `/public/assets/`
- Run `npm run download-images` if you have Unsplash API key
- Or add your own images manually

**Build errors?**
- Delete `.next` folder and rebuild: `rm -rf .next && npm run build`

**TypeScript errors?**
- Ensure all dependencies are installed: `npm install`

## Next Steps

1. Replace placeholder images with your own curated photography
2. Add real product data to `/lib/products.ts`
3. Write journal articles in `/lib/journal.ts`
4. Customize colors and typography in `tailwind.config.js`
5. Deploy to Vercel, Netlify, or your hosting platform

---

**Remember:** This is a slow luxury destination, not a typical ecommerce site. Users should feel they've entered a different pace.

Enjoy building your gentleman's club online. 🥃
