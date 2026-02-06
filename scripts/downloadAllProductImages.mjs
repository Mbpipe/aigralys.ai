#!/usr/bin/env node

/**
 * Download ALL product images from Unsplash for Dignitas
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_OUTPUT = path.join(__dirname, '../public/assets');

// Ensure base directory exists
if (!fs.existsSync(BASE_OUTPUT)) {
  fs.mkdirSync(BASE_OUTPUT, { recursive: true });
}

// ALL product images mapped to local filenames
const IMAGES = {
  // PUROS - Using verified premium images (dark, editorial, masculine)
  'puros/cohiba-reserva-01.jpg': 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&q=80',
  'puros/cohiba-reserva-02.jpg': 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=1200&q=80',
  'puros/montecristo-80.jpg': 'https://images.unsplash.com/photo-1574296833267-8315e2a27bf6?w=1200&q=80',
  
  // RELOJES
  'relojes/royal-oak-01.jpg': 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
  'relojes/royal-oak-02.jpg': 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80',
  'relojes/grand-seiko.jpg': 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=80',
  
  // PERFUMES
  'perfumes/oud-eternal-01.jpg': 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=80',
  'perfumes/oud-eternal-02.jpg': 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80',
  'perfumes/tobacco-noir.jpg': 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80',
  
  // ACCESORIOS - Using alternative premium accessories
  'accesorios/diario-florentino.jpg': 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=1200&q=80',
  'accesorios/cortador-damasco.jpg': 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=1200&q=80',
};

/**
 * Download a single image
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
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
  console.log('🎩 Downloading ALL product images for DIGNITAS...\n');
  
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    const filepath = path.join(BASE_OUTPUT, filename);
    
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
      failed++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Total: ${Object.keys(IMAGES).length}`);
  console.log(`\n🎩 Product images ready at: ${BASE_OUTPUT}`);
}

// Run
downloadAll().catch(console.error);
