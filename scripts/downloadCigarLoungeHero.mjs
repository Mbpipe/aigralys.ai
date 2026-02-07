#!/usr/bin/env node

/**
 * Download cigar lounge / gentleman's club atmosphere image
 * Similar to reference: whisky, cigar, leather, warm lighting
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

// Cigar lounge atmosphere - similar to user's reference
const IMAGES = {
  'hero-background.jpg': 'https://images.pexels.com/photos/2480072/pexels-photo-2480072.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
  console.log('🎩 Downloading cigar lounge hero image...\n');
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    const filepath = path.join(OUTPUT_DIR, filename);
    
    try {
      console.log(`⏳ Downloading: ${filename}...`);
      await downloadImage(url, filepath);
      
      const stats = fs.statSync(filepath);
      if (stats.size > 0) {
        console.log(`✓ Downloaded: ${filename} (${Math.round(stats.size/1024)}KB)`);
      } else {
        console.error(`✗ Failed: ${filename} - empty file`);
        fs.unlinkSync(filepath);
      }
    } catch (error) {
      console.error(`✗ Failed: ${filename} - ${error.message}`);
    }
  }
}

downloadAll().catch(console.error);
