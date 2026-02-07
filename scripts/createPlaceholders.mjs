// Create simple placeholder images for development
// Usage: node scripts/createPlaceholders.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '..', 'public', 'assets');

// Create assets directory
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const placeholderNames = [
  'hero-main.jpg',
  'about-hero.jpg',
  'cigar-1.jpg',
  'cigar-2.jpg',
  'cigar-3.jpg',
  'cigar-editorial.jpg',
  'watch-1.jpg',
  'watch-2.jpg',
  'watch-3.jpg',
  'watch-editorial.jpg',
  'perfume-1.jpg',
  'perfume-2.jpg',
  'perfume-3.jpg',
  'perfume-editorial.jpg',
  'acc-1.jpg',
  'acc-2.jpg',
  'journal-cigar.jpg',
  'journal-watch.jpg',
  'journal-oud.jpg',
  'journal-morning.jpg',
];

// Create placeholder text file for each image
placeholderNames.forEach((name) => {
  const filepath = path.join(assetsDir, name + '.placeholder');
  const content = `Placeholder for ${name}\n\nReplace this with actual image or run: npm run download-images`;
  fs.writeFileSync(filepath, content);
});

console.log(`✓ Created ${placeholderNames.length} placeholder markers in /public/assets/`);
console.log('\nNext steps:');
console.log('1. Get Unsplash API key: https://unsplash.com/developers');
console.log('2. Add to .env: UNSPLASH_ACCESS_KEY=your_key');
console.log('3. Run: npm run download-images');
console.log('\nOr add your own images to /public/assets/ manually.');
