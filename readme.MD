# Aigralys.ai - Complete Website Package

## 🎯 Overview

Production-ready bilingual (Spanish/English) website for **Aigralys.ai**, a global startup specializing in **Agentic AI systems** for complex digital ecosystems.

**Design Theme**: Dark elegant with warm golden accents, cinematic aesthetic  
**Technology Stack**: Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)  
**Languages**: Spanish (default) + English with persistent toggle  
**Deployment**: Optimized for static hosting (Netlify, Vercel, GitHub Pages)

-----

## 📁 File Structure

```
aigralys-website/
├── index.html              # Home page with hero, solutions, industries, technology
├── consultoria.html        # Consulting services page
├── workshops.html          # Workshops catalog page
├── styles.css              # Global styles (dark theme, responsive)
├── main.js                 # Bilingual i18n with localStorage persistence
├── logo.png                # Company logo (40x40px recommended)
├── Scenario1.jpg           # Network Operations Center (1600x900)
├── Scenario2.jpg           # Smart Agriculture (1600x900)
├── Scenario3.jpg           # Energy Control Center (1600x900)
├── Scenario4.jpg           # Futuristic Retail (1600x900)
├── IMAGE_PROMPTS.md        # AI image generation instructions
└── README.md               # This file
```

-----

## 🚀 Quick Start

### 1. Clone or Download Files

Place all files in a single directory maintaining the structure above.

### 2. Add Images

Generate or place the following images:

- `logo.png` - Company logo (40x40px, transparent PNG)
- `Scenario1.jpg` through `Scenario4.jpg` - Hero images (1600x900px, 16:9)

See `IMAGE_PROMPTS.md` for detailed image generation instructions.

### 3. Local Testing

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Option 3: PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### 4. Deploy to Production

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### GitHub Pages

1. Push files to GitHub repository
1. Settings → Pages → Source: main branch
1. Site will be live at `https://username.github.io/repo-name`

-----

## 🌐 Features

### Bilingual System

- **Languages**: Spanish (ES) + English (EN)
- **Toggle**: Fixed top-right corner, always visible
- **Persistence**: Uses `localStorage` to remember user preference
- **Coverage**: All text content with `data-i18n` attributes
- **Fallback**: Defaults to Spanish if no preference stored

### Pages & Sections

#### index.html

- Hero with value proposition
- About section (company pillars)
- Solutions showcase (4 industry scenarios)
- Industries grid (6 sectors)
- Technology explanation (Agentic AI features)
- Contact form
- Footer with sitemap

#### consultoria.html

- Consulting approach overview
- 5 core consulting services
- 5-step work process timeline
- 3 case studies with metrics
- CTA section

#### workshops.html

- 6 workshop offerings (intro to executive level)
- 4 delivery formats
- Participant testimonials
- Catalog with detailed modules

### Design System

**Color Palette**:

- Primary Dark: `#1C1C1E`
- Secondary Dark: `#2D2D3A`
- Accent Gold: `#FECF4A`
- Neutral Light: `#E6E6E6`

**Typography**:

- Font: Inter (Google Fonts)
- Headings: 700 weight, golden color
- Body: 400 weight, light gray

**Components**:

- Sticky navigation with logo
- Card-based layouts with hover effects
- Timeline visualization for processes
- Grid systems (responsive)
- Contact forms with validation styling
- Fixed language toggle (top-right)

-----

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-dark: #1C1C1E;
    --accent-gold: #FECF4A;
    /* etc. */
}
```

### Add New Pages

1. Copy structure from existing HTML
1. Add navigation link in all pages
1. Include language toggle and main.js
1. Add translations to `main.js` translations object

### Modify Translations

Edit `main.js` translations object:

```javascript
const translations = {
  'your.key': { es: 'Texto español', en: 'English text' },
  // ...
};
```

Then add `data-i18n="your.key"` to HTML elements.

### Update Content

All text is in `main.js` translation dictionary. Edit there instead of HTML for bilingual consistency.

-----

## 📱 Responsive Design

**Breakpoints**:

- Desktop: 1200px+ (max-width container)
- Tablet: 768px - 1199px
- Mobile: < 768px

**Mobile Optimizations**:

- Stacked navigation
- Single-column grids
- Reduced font sizes
- Touch-friendly buttons (min 44px)
- Simplified layouts

-----

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Alt text on images (add when placing files)
- Keyboard navigation support
- Color contrast: WCAG AA compliant
- Focus states on all interactive elements
- Language attribute set dynamically

-----

## 🔧 Technical Details

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

- **No external dependencies** except Google Fonts
- Pure vanilla JavaScript (no jQuery, React, etc.)
- Lazy loading on images (`loading="lazy"`)
- Optimized CSS (single file, ~15KB)
- Minimal JavaScript (~10KB)

### SEO Considerations

- Semantic HTML structure
- Meta descriptions in each page
- `<title>` tags optimized
- Language attributes (ES/EN)
- Clean URL structure
- Fast load times

**Recommended additions**:

- Add favicon references (already in HTML)
- Create `robots.txt`
- Add `sitemap.xml`
- Implement Open Graph tags
- Add structured data (Schema.org)

-----

## 📊 Analytics & Tracking

To add analytics, insert before `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

-----

## 🔒 Security Considerations

- No backend required (static site)
- No sensitive data storage
- localStorage only for language preference
- Form submissions need backend integration
- Consider adding CSP headers in deployment

-----

## 🛠️ Maintenance

### Regular Updates

- Review translation accuracy
- Update case studies and metrics
- Refresh workshop catalog
- Optimize images (compression)
- Update contact information

### Testing Checklist

- [ ] All links work (internal and anchors)
- [ ] Language toggle functions correctly
- [ ] Images load properly
- [ ] Forms display correctly
- [ ] Mobile responsive on real devices
- [ ] Cross-browser compatibility
- [ ] Accessibility with screen readers

-----

## 📞 Contact Form Integration

The contact form currently has no backend. Options:

1. **Formspree**: Add action to form
   
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
1. **Netlify Forms**: Add `netlify` attribute
   
   ```html
   <form netlify>
   ```
1. **Custom Backend**: Implement API endpoint and fetch

-----

## 📚 Additional Resources

- **Font**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: Consider [Lucide Icons](https://lucide.dev/) for future additions
- **Image Optimization**: Use tools like TinyPNG or ImageOptim
- **Performance Testing**: Google PageSpeed Insights, Lighthouse

-----

## 🐛 Known Limitations

- Contact form requires backend integration
- No image fallbacks (ensure all 4 scenarios present)
- No server-side language detection (client-side only)
- localStorage not available in private/incognito mode

-----

## 📄 License & Credits

**Aigralys.ai** © 2025. All rights reserved.

**Technologies Used**:

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

**Design Philosophy**:
Dark elegant theme inspired by modern SaaS and AI platforms with cinematic depth and professional aesthetics.

-----

## 🎓 Support & Questions

For technical questions or issues with this codebase:

1. Check all files are present and named correctly
1. Verify images are in correct dimensions (1600x900)
1. Test in different browsers
1. Check browser console for JavaScript errors
1. Ensure web server is serving files correctly

-----

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Status**: Production Ready ✅