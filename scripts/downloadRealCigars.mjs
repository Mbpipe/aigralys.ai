#!/usr/bin/env node

/**
 * Download REAL premium cigar images
 * NO MORE CAKES OR KIDS SHOES
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUROS_DIR = path.join(__dirname, '../public/assets/puros');
const EDITORIAL_DIR = path.join(__dirname, '../public/assets/editorial');

[PUROS_DIR, EDITORIAL_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Using PEXELS API for verified cigar images
const IMAGES = {
  // Premium cigars
  'puros/premium-cigar-01.jpg': 'https://images.pexels.com/photos/4667287/pexels-photo-4667287.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'puros/premium-cigar-02.jpg': 'https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'editorial/hero-puros.jpg': 'https://images.pexels.com/photos/4667287/pexels-photo-4667287.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return https.get(response.headers.location, (redirectResponse) => {
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
  console.log('🚨 DOWNLOADING REAL CIGAR IMAGES - NO MORE CAKES!\n');
  
  let downloaded = 0;
  let failed = 0;
  
  for (const [relativePath, url] of Object.entries(IMAGES)) {
    const filepath = path.join(__dirname, '../public/assets', relativePath);
    
    try {
      console.log(`⏳ ${relativePath}...`);
      await downloadImage(url, filepath);
      
      const stats = fs.statSync(filepath);
      if (stats.size > 10000) {
        console.log(`✓ ${relativePath} (${Math.round(stats.size/1024)}KB)`);
        downloaded++;
      } else {
        console.error(`✗ ${relativePath} - too small`);
        fs.unlinkSync(filepath);
        failed++;
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ ${relativePath} - ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\n📊 Downloaded: ${downloaded}, Failed: ${failed}`);
}

downloadAll().catch(console.error);
