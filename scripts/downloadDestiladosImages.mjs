#!/usr/bin/env node

/**
 * Download premium Destilados images from Unsplash
 * Dignitas aesthetic: cinematic, warm, no party vibes
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/assets/destilados');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Created directory: ${OUTPUT_DIR}`);
}

// Premium image sources (already curated for DIGNITAS aesthetic)
const IMAGES = {
  // SINGLE MALT WHISKY - Editorial, cinematic, warm
  'whisky-hero-01.jpg': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1600&q=80',
  'whisky-glass-warm.jpg': 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=1600&q=80',
  'whisky-bottle-dark.jpg': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&q=80',
  'whisky-amber-liquid.jpg': 'https://images.unsplash.com/photo-1634149603-ffe9e8d04818?w=1600&q=80',
  'whisky-tumbler-wood.jpg': 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=1600&q=80',
  'whisky-close-up.jpg': 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=1600&q=80',
  
  // CAVA - Quiet celebration, refined
  'cava-hero-01.jpg': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80',
  'cava-bottle-dark.jpg': 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1600&q=80',
  'cava-pour-cinematic.jpg': 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1600&q=80',
  'cava-flute-elegant.jpg': 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=1600&q=80',
  'cava-cellar-barrel.jpg': 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1600&q=80',
  'cava-bottle-cork.jpg': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1600&q=80',
  
  // TEXTURES - Supporting editorial
  'leather-texture-dark.jpg': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?w=1600&q=80',
  'wood-walnut-grain.jpg': 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1600&q=80',
};

/**
 * Download a single image
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

/**
 * Main download routine
 */
async function downloadAll() {
  console.log('🎩 Downloading Destilados images for DIGNITAS...\n');
  
  let downloaded = 0;
  let skipped = 0;
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    const filepath = path.join(OUTPUT_DIR, filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⊘ Skipped (exists): ${filename}`);
      skipped++;
      continue;
    }
    
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Downloaded: ${filename}`);
      downloaded++;
      
      // Be nice to Unsplash (rate limiting)
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed: ${filename} - ${error.message}`);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total: ${Object.keys(IMAGES).length}`);
  console.log(`\n🎩 Destilados images ready at: ${OUTPUT_DIR}`);
}

// Run
downloadAll().catch(console.error);
