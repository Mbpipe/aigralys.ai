#!/usr/bin/env node

/**
 * Download correct editorial images - cigars and dark masculine backgrounds
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/assets/editorial');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Curated premium cigar and masculine background images
const IMAGES = {
  // Premium cigar lit - for "Ritual del Fuego"  
  'hero-puros.jpg': 'https://images.unsplash.com/photo-1606659563948-4675f6f57620?w=1600&q=80',
  
  // Dark wood/leather background for hero
  'hero-background.jpg': 'https://images.unsplash.com/photo-1574811220936-873a0fc0d12d?w=1920&q=80',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // Delete existing file first
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed: ${response.statusCode}`));
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
  console.log('🎩 Downloading correct editorial images...\n');
  
  let downloaded = 0;
  let failed = 0;
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    const filepath = path.join(OUTPUT_DIR, filename);
    
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Downloaded: ${filename}`);
      downloaded++;
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed: ${filename} - ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\n📊 Downloaded: ${downloaded}, Failed: ${failed}`);
}

downloadAll().catch(console.error);
