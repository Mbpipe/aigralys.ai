// Image Download Script
// Usage: node scripts/downloadImages.mjs
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Unsplash Access Key (Free tier: 50 requests/hour)
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'YOUR_KEY_HERE';

// Image queries for luxury masculine aesthetic
const IMAGE_QUERIES = {
  // Hero images
  'hero-main.jpg': 'luxury cigar smoke dark mood cinematic',
  'about-hero.jpg': 'gentleman vintage leather chair dark',

  // Products - Cigars
  'cigar-1.jpg': 'premium cigar close up dark background',
  'cigar-2.jpg': 'cigar box luxury cedar wood',
  'cigar-3.jpg': 'cuban cigar macro shot vintage',
  'cigar-editorial.jpg': 'cigar lounge vintage leather masculine',

  // Products - Watches
  'watch-1.jpg': 'luxury watch macro close up gold',
  'watch-2.jpg': 'mechanical watch movement close detail',
  'watch-3.jpg': 'grand seiko watch elegant minimal',
  'watch-editorial.jpg': 'vintage watch collection dark background',

  // Products - Perfumes
  'perfume-1.jpg': 'luxury perfume bottle dark mood',
  'perfume-2.jpg': 'arabian oud perfume luxury gold',
  'perfume-3.jpg': 'tobacco perfume bottle dark wood',
  'perfume-editorial.jpg': 'perfume ingredients dark cinematic',

  // Products - Accessories
  'acc-1.jpg': 'leather journal notebook vintage dark',
  'acc-2.jpg': 'damascus steel knife luxury tool',

  // Journal images
  'journal-cigar.jpg': 'man smoking cigar contemplative dark',
  'journal-watch.jpg': 'watch winding hands close up',
  'journal-oud.jpg': 'oud wood resin luxury close',
  'journal-morning.jpg': 'morning coffee ritual dark mood',
};

const assetsDir = path.join(__dirname, '..', 'public', 'assets');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

async function downloadFromUnsplash(query, filename) {
  try {
    console.log(`Fetching: ${filename} (query: "${query}")`);

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
        query
      )}&orientation=landscape&content_filter=high`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch from Unsplash: ${response.statusText}`);
      return false;
    }

    const data = await response.json();
    const imageUrl = data.urls.regular; // High quality but not full size

    // Download the image
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.arrayBuffer();

    // Save to file
    const filepath = path.join(assetsDir, filename);
    fs.writeFileSync(filepath, Buffer.from(buffer));

    console.log(`✓ Downloaded: ${filename} (by ${data.user.name})`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${filename}`, error.message);
    return false;
  }
}

async function downloadAllImages() {
  console.log('Starting image download...\n');
  console.log(`Target directory: ${assetsDir}\n`);

  const entries = Object.entries(IMAGE_QUERIES);
  let successCount = 0;

  for (let i = 0; i < entries.length; i++) {
    const [filename, query] = entries[i];

    // Check if file already exists
    const filepath = path.join(assetsDir, filename);
    if (fs.existsSync(filepath)) {
      console.log(`⊙ Skipping: ${filename} (already exists)`);
      successCount++;
      continue;
    }

    const success = await downloadFromUnsplash(query, filename);
    if (success) successCount++;

    // Rate limiting: wait 1 second between requests
    if (i < entries.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  console.log(`\n✓ Complete: ${successCount}/${entries.length} images downloaded`);
}

// Run
downloadAllImages().catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});
