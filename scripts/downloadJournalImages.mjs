#!/usr/bin/env node

/**
 * Download journal article images
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/assets/journal');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const IMAGES = {
  'cigar-selection.jpg': 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1920&q=80',
  'mechanical-watches.jpg': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80',
  'oud-guide.jpg': 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&q=80',
  'morning-ritual.jpg': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
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
  console.log('🎩 Downloading journal images...\n');
  
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
