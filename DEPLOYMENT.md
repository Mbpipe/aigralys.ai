# 🚀 Deployment Guide

Deploy your luxury destination to production.

## Recommended Platforms

### 1. Vercel (Easiest)

Vercel is built by the Next.js team and provides seamless deployment.

**Steps:**

1. Push your code to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Configure build settings (auto-detected for Next.js):
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables (if using image download):
   - `UNSPLASH_ACCESS_KEY`
6. Deploy!

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed

### 2. Netlify

Another excellent option with drag-and-drop simplicity.

**Steps:**

1. Build locally: `npm run build`
2. Export static: `npm run build && npm run export` (if using static export)
3. Drag `.next` folder to Netlify
4. Or connect GitHub repo for automatic deployments

### 3. Self-Hosted (VPS/Dedicated Server)

For full control, deploy to your own server.

**Requirements:**
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

**Steps:**

1. SSH into your server
2. Clone repository:
   ```bash
   git clone your-repo.git
   cd aigralys
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build:
   ```bash
   npm run build
   ```

5. Start with PM2:
   ```bash
   pm2 start npm --name "aigralys" -- start
   pm2 save
   pm2 startup
   ```

6. Configure Nginx:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. SSL with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Pre-Deployment Checklist

### Images
- [ ] Download all images via `npm run download-images`
- [ ] Or manually add curated images to `/public/assets/`
- [ ] Verify all image paths are correct

### Content
- [ ] Update product data in `/lib/products.ts`
- [ ] Write journal articles in `/lib/journal.ts`
- [ ] Customize About page copy in `/app/about/page.tsx`

### Branding
- [ ] Update site name in `/app/layout.tsx` metadata
- [ ] Update logo text in `/app/components/Header.tsx`
- [ ] Add favicon to `/public/`
- [ ] Update footer contact info in `/app/components/Footer.tsx`

### SEO
- [ ] Add proper meta descriptions
- [ ] Create `robots.txt` in `/public/`
- [ ] Create `sitemap.xml` in `/public/`
- [ ] Add Open Graph images

### Performance
- [ ] Test build: `npm run build`
- [ ] Check bundle size
- [ ] Optimize images (compress to WebP)
- [ ] Test on mobile devices

### Analytics (Optional)
- [ ] Add Google Analytics
- [ ] Add Plausible or Fathom
- [ ] Configure conversion tracking

## Environment Variables

Create `.env.production`:

```bash
# Only needed if downloading images programmatically
UNSPLASH_ACCESS_KEY=your_production_key

# Add any other production variables
NODE_ENV=production
```

## Build Configuration

The default Next.js config should work, but you can customize in `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // For placeholder images
  },
  // Enable if deploying to subfolder
  // basePath: '/subfolder',
}

module.exports = nextConfig
```

## Performance Optimization

### Image Optimization

1. Use Next.js Image component:
   ```tsx
   import Image from 'next/image';
   
   <Image
     src="/assets/hero.jpg"
     alt="Hero"
     width={1920}
     height={1080}
     quality={85}
     priority
   />
   ```

2. Or optimize images manually:
   ```bash
   # Install sharp
   npm install sharp
   
   # Convert to WebP
   npx sharp -i public/assets/*.jpg -o public/assets/ -f webp
   ```

### Caching Headers

Add to `next.config.js`:

```js
async headers() {
  return [
    {
      source: '/assets/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

## Domain Configuration

### DNS Records

For custom domain:

```
Type    Name    Value               TTL
A       @       your.server.ip      3600
CNAME   www     yourdomain.com      3600
```

For Vercel/Netlify, follow their DNS instructions.

## SSL Certificate

Free SSL via:
- **Vercel/Netlify:** Automatic
- **Self-hosted:** Let's Encrypt (certbot)

## Monitoring

Consider adding:
- **Uptime monitoring:** UptimeRobot, Pingdom
- **Error tracking:** Sentry
- **Performance:** Lighthouse CI

## Backup Strategy

1. **Code:** GitHub (automatic)
2. **Images:** Cloud storage backup
3. **Content:** Export product/journal data monthly

## Post-Deployment

1. Test all pages
2. Verify mobile responsiveness
3. Check load times (aim for <3s)
4. Test forms (if any)
5. Verify SSL certificate
6. Test in different browsers
7. Submit to Google Search Console

## Continuous Deployment

Set up automatic deployment:

1. Push to GitHub
2. Vercel/Netlify auto-builds
3. Preview URLs for branches
4. Production deploys from `main`

## Rollback

If something goes wrong:

**Vercel:**
- Dashboard → Deployments → Previous deployment → Promote to Production

**Self-hosted:**
```bash
git checkout previous-commit
npm install
npm run build
pm2 restart aigralys
```

## Maintenance

- Update dependencies monthly: `npm update`
- Monitor performance with Lighthouse
- Rotate content (journal articles)
- Refresh images seasonally

---

**Remember:** This is a destination, not just a website. Every detail matters. Take time to perfect it before launch.

Good luck. 🥃
