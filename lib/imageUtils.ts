// Image utility functions with fallback support

const PLACEHOLDER_BASE = 'https://images.unsplash.com/photo-';

const FALLBACK_IMAGES: Record<string, string> = {
  'hero-main.jpg': `${PLACEHOLDER_BASE}1602524206875-682b069a665b?w=1920&q=80`,
  'about-hero.jpg': `${PLACEHOLDER_BASE}1551801841-ecad875a5142?w=1920&q=80`,
  'cigar-1.jpg': `${PLACEHOLDER_BASE}1556139943-4a4634d5dd62?w=1200&q=80`,
  'cigar-2.jpg': `${PLACEHOLDER_BASE}1609113075024-b7d0bbf8e6a6?w=1200&q=80`,
  'cigar-3.jpg': `${PLACEHOLDER_BASE}1602524206710-d40af24f4bf9?w=1200&q=80`,
  'cigar-editorial.jpg': `${PLACEHOLDER_BASE}1556139951-d8f1dcb0fd7b?w=1920&q=80`,
  'watch-1.jpg': `${PLACEHOLDER_BASE}1523170335258-f5ed11844a49?w=1200&q=80`,
  'watch-2.jpg': `${PLACEHOLDER_BASE}1524592094714-0f0654e20314?w=1200&q=80`,
  'watch-3.jpg': `${PLACEHOLDER_BASE}1594534475808-b18fc33b045e?w=1200&q=80`,
  'watch-editorial.jpg': `${PLACEHOLDER_BASE}1547996160-81dfa63595aa?w=1920&q=80`,
  'perfume-1.jpg': `${PLACEHOLDER_BASE}1615634260167-c8cdede054de?w=1200&q=80`,
  'perfume-2.jpg': `${PLACEHOLDER_BASE}1592945403244-b3fbafd7f539?w=1200&q=80`,
  'perfume-3.jpg': `${PLACEHOLDER_BASE}1541643600914-78b084683601?w=1200&q=80`,
  'perfume-editorial.jpg': `${PLACEHOLDER_BASE}1592945403244-b3fbafd7f539?w=1920&q=80`,
  'acc-1.jpg': `${PLACEHOLDER_BASE}1544947950-fa07a98b0225?w=1200&q=80`,
  'acc-2.jpg': `${PLACEHOLDER_BASE}1610461888400-5f7baeb3d0d8?w=1200&q=80`,
  'journal-cigar.jpg': `${PLACEHOLDER_BASE}1556139943-4a4634d5dd62?w=1920&q=80`,
  'journal-watch.jpg': `${PLACEHOLDER_BASE}1594534475808-b18fc33b045e?w=1920&q=80`,
  'journal-oud.jpg': `${PLACEHOLDER_BASE}1615634260167-c8cdede054de?w=1920&q=80`,
  'journal-morning.jpg': `${PLACEHOLDER_BASE}1495474472287-4d71bcdd2085?w=1920&q=80`,
};

/**
 * Get image source with fallback to Unsplash placeholder
 * If local image doesn't exist, uses a curated Unsplash image
 */
export function getImageSrc(path: string): string {
  // Extract filename from path
  const filename = path.split('/').pop() || '';
  
  // Check if we have a fallback
  if (FALLBACK_IMAGES[filename]) {
    return FALLBACK_IMAGES[filename];
  }
  
  // Return original path as final fallback
  return path;
}

/**
 * Helper to handle image loading errors
 */
export function handleImageError(e: any, fallbackSrc?: string) {
  if (fallbackSrc) {
    e.target.src = fallbackSrc;
  }
}
