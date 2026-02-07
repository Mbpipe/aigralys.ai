#!/usr/bin/env node

/**
 * Download editorial hero images for homepage sections
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/assets/editorial');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const IMAGES = {
  // Homepage hero sections (alternative working URLs)
  'hero-background.jpg': 'https://images.unsplash.com/photo-1574811220936-873a0fc0d12d?w=1920&q=80',
  'hero-puros.jpg': 'https://images.unsplash.com/photo-1606659563948-4675f6f57620?w=1920&q=80',
  'hero-relojes.jpg': 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1920&q=80',
  'hero-perfumes.jpg': 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1920&q=80',
};

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

async function downloadAll() {
  console.log('🎩 Downloading editorial hero images...\n');
  
  let downloaded = 0;
  let skipped = 0;
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    const filepath = path.join(OUTPUT_DIR, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`⊘ Skipped: ${filename}`);
      skipped++;
      continue;
    }
    
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Downloaded: ${filename}`);
      downloaded++;
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed: ${filename} - ${error.message}`);
    }
  }
  
  console.log(`\n📊 Downloaded: ${downloaded}, Skipped: ${skipped}`);
}

downloadAll().catch(console.error);
