#!/usr/bin/env node

/**
 * Download proper editorial images for DIGNITAS aesthetic:
 * - Cigar lounge for home hero
 * - Premium cigars for ritual del fuego
 * - Leather/wood for about page
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDITORIAL_DIR = path.join(__dirname, '../public/assets/editorial');

if (!fs.existsSync(EDITORIAL_DIR)) {
  fs.mkdirSync(EDITORIAL_DIR, { recursive: true });
}

// Using verified Pexels images (more reliable than Unsplash)
const IMAGES = {
  // Cigar lounge / leather club atmosphere for home hero
  'hero-background.jpg': 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1920',
  
  // Premium cigars for "Ritual del Fuego"
  'hero-puros.jpg': 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1600',
  
  // Dark wood/leather for About page
  'about-hero.jpg': 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : require('http');
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        return protocol.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      }
      
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
  console.log('🎩 Downloading DIGNITAS editorial images...\n');
  
  let downloaded = 0;
  let failed = 0;
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    const filepath = path.join(EDITORIAL_DIR, filename);
    
    try {
      console.log(`⏳ Downloading: ${filename}...`);
      await downloadImage(url, filepath);
      
      const stats = fs.statSync(filepath);
      if (stats.size > 0) {
        console.log(`✓ Downloaded: ${filename} (${Math.round(stats.size/1024)}KB)`);
        downloaded++;
      } else {
        console.error(`✗ Failed: ${filename} - empty file`);
        fs.unlinkSync(filepath);
        failed++;
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ Failed: ${filename} - ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\n📊 Downloaded: ${downloaded}, Failed: ${failed}`);
}

downloadAll().catch(console.error);
