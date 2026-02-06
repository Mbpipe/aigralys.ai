// Fallback placeholder images using Unsplash source
// These will display if local images don't exist

const UNSPLASH_BASE = 'https://images.unsplash.com/photo-';

export const PLACEHOLDER_IMAGES = {
  // Hero images - dark, cinematic, masculine
  'hero-main.jpg': `${UNSPLASH_BASE}1602524206875-682b069a665b?w=1920&q=80`, // cigar dark
  'about-hero.jpg': `${UNSPLASH_BASE}1551801841-ecad875a5142?w=1920&q=80`, // leather chair

  // Cigars
  'cigar-1.jpg': `${UNSPLASH_BASE}1556139943-4a4634d5dd62?w=1200&q=80`,
  'cigar-2.jpg': `${UNSPLASH_BASE}1609113075024-b7d0bbf8e6a6?w=1200&q=80`,
  'cigar-3.jpg': `${UNSPLASH_BASE}1602524206710-d40af24f4bf9?w=1200&q=80`,
  'cigar-editorial.jpg': `${UNSPLASH_BASE}1556139951-d8f1dcb0fd7b?w=1920&q=80`,

  // Watches
  'watch-1.jpg': `${UNSPLASH_BASE}1523170335258-f5ed11844a49?w=1200&q=80`,
  'watch-2.jpg': `${UNSPLASH_BASE}1524592094714-0f0654e20314?w=1200&q=80`,
  'watch-3.jpg': `${UNSPLASH_BASE}1594534475808-b18fc33b045e?w=1200&q=80`,
  'watch-editorial.jpg': `${UNSPLASH_BASE}1547996160-81dfa63595aa?w=1920&q=80`,

  // Perfumes
  'perfume-1.jpg': `${UNSPLASH_BASE}1615634260167-c8cdede054de?w=1200&q=80`,
  'perfume-2.jpg': `${UNSPLASH_BASE}1592945403244-b3fbafd7f539?w=1200&q=80`,
  'perfume-3.jpg': `${UNSPLASH_BASE}1541643600914-78b084683601?w=1200&q=80`,
  'perfume-editorial.jpg': `${UNSPLASH_BASE}1592945403244-b3fbafd7f539?w=1920&q=80`,

  // Accessories
  'acc-1.jpg': `${UNSPLASH_BASE}1544947950-fa07a98b0225?w=1200&q=80`, // leather journal
  'acc-2.jpg': `${UNSPLASH_BASE}1610461888400-5f7baeb3d0d8?w=1200&q=80`, // tools

  // Journal
  'journal-cigar.jpg': `${UNSPLASH_BASE}1556139943-4a4634d5dd62?w=1920&q=80`,
  'journal-watch.jpg': `${UNSPLASH_BASE}1594534475808-b18fc33b045e?w=1920&q=80`,
  'journal-oud.jpg': `${UNSPLASH_BASE}1615634260167-c8cdede054de?w=1920&q=80`,
  'journal-morning.jpg': `${UNSPLASH_BASE}1495474472287-4d71bcdd2085?w=1920&q=80`, // coffee
};

// Helper to get image with fallback
export function getImageSrc(filename: string): string {
  // First try local asset
  const localPath = `/assets/${filename}`;
  
  // Fallback to placeholder
  const placeholder = PLACEHOLDER_IMAGES[filename as keyof typeof PLACEHOLDER_IMAGES];
  return placeholder || localPath;
}
