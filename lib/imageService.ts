// Premium Image Service - Unsplash & Pexels Integration
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

interface ImageResult {
  url: string;
  photographer: string;
  source: string;
}

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'YOUR_KEY_HERE';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || 'YOUR_KEY_HERE';

export async function fetchPremiumImage(
  query: string,
  filename: string,
  directory = 'assets'
): Promise<ImageResult | null> {
  try {
    // Try Unsplash first
    const unsplashResult = await fetchFromUnsplash(query);
    if (unsplashResult) {
      await downloadImage(unsplashResult.url, filename, directory);
      return unsplashResult;
    }

    // Fallback to Pexels
    const pexelsResult = await fetchFromPexels(query);
    if (pexelsResult) {
      await downloadImage(pexelsResult.url, filename, directory);
      return pexelsResult;
    }

    return null;
  } catch (error) {
    console.error(`Failed to fetch image for query: ${query}`, error);
    return null;
  }
}

async function fetchFromUnsplash(query: string): Promise<ImageResult | null> {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&content_filter=high`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    return {
      url: data.urls.full,
      photographer: data.user.name,
      source: 'Unsplash',
    };
  } catch {
    return null;
  }
}

async function fetchFromPexels(query: string): Promise<ImageResult | null> {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      return {
        url: data.photos[0].src.large2x,
        photographer: data.photos[0].photographer,
        source: 'Pexels',
      };
    }

    return null;
  } catch {
    return null;
  }
}

async function downloadImage(
  url: string,
  filename: string,
  directory: string
): Promise<void> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  
  const publicDir = join(process.cwd(), 'public', directory);
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  const filepath = join(publicDir, filename);
  writeFileSync(filepath, Buffer.from(buffer));
}

// Curated queries for luxury masculine imagery
export const IMAGE_QUERIES = {
  hero: [
    'luxury cigar macro cinematic dark',
    'gentleman vintage lounge leather',
    'luxury watch macro editorial gold',
  ],
  cigars: [
    'premium cigar close up dark mood',
    'cigar lounge vintage masculine',
    'tobacco leaves luxury macro',
  ],
  watches: [
    'luxury watch macro detail gold',
    'mechanical watch movement close up',
    'vintage watch editorial style',
  ],
  perfumes: [
    'arabian perfume luxury cinematic',
    'perfume bottle luxury dark mood',
    'oud perfume editorial style',
  ],
  lifestyle: [
    'masculine lifestyle editorial',
    'gentleman vintage style',
    'luxury mens accessories dark',
  ],
};
