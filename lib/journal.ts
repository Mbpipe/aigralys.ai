// Journal Articles Data
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageSrc: string;
  readTime: string;
  publishedAt: string;
}

export const ARTICLES: Article[] = [
  {
    slug: 'the-art-of-cigar-selection',
    title: 'The Art of Cigar Selection',
    excerpt:
      'Understanding terroir, aging, and ritual. How the finest cigars are chosen by men who know what matters.',
    content: `
      <p>A cigar is not just tobacco wrapped in leaf. It is soil. It is time. It is the hands of men who understand patience.</p>
      
      <p>The best cigars begin in volcanic earth—places like Vuelta Abajo in Cuba, where minerals give the tobacco its soul. The leaves are harvested by hand. No machine can feel when the leaf is ready.</p>
      
      <p>Then comes aging. Seven years. Ten years. The tobacco sits in cedar chambers, temperature controlled, humidity precise. Like wine, it develops complexity. The harshness fades. What remains is smooth, deep, contemplative.</p>
      
      <p>When you light a cigar, you are not smoking. You are participating in a ritual that spans centuries. You are choosing to slow down in a world obsessed with speed.</p>
      
      <p>The cigar will last an hour, maybe two. That is the point. You cannot rush it. You must be present.</p>
    `,
    imageSrc: '/assets/journal/cigar-selection.jpg',
    readTime: '6 min',
    publishedAt: '2026-01-15',
  },
  {
    slug: 'mechanical-watches-in-digital-age',
    title: 'Why Mechanical Watches Still Matter',
    excerpt:
      'In an age of atomic precision, the appeal of mechanical timekeeping grows stronger. This is about more than telling time.',
    content: `
      <p>Your phone tells more accurate time than any mechanical watch ever will. So why do men still wind movements by hand?</p>
      
      <p>Because a mechanical watch is not about accuracy. It is about craft. About connection. About carrying a small miracle of engineering on your wrist.</p>
      
      <p>Inside that case are hundreds of tiny parts—gears, springs, jewels—working in perfect harmony. No battery. No chip. Just physics, refined over centuries.</p>
      
      <p>When you wind a watch, you are part of its function. The watch needs you. And in a strange way, you need it—a reminder that some things cannot be optimized, only appreciated.</p>
      
      <p>A Grand Seiko Spring Drive. An Audemars Piguet Royal Oak. These are not purchases. They are inheritances-in-waiting. Objects that will outlive you, carrying your story forward.</p>
    `,
    imageSrc: '/assets/journal/mechanical-watches.jpg',
    readTime: '5 min',
    publishedAt: '2026-01-08',
  },
  {
    slug: 'oud-fragrance-guide',
    title: 'Understanding Oud: The Gold of Perfumery',
    excerpt:
      'From Assam forests to Parisian boutiques, oud represents the pinnacle of masculine fragrance. A guide to liquid gold.',
    content: `
      <p>Oud is not a perfume. It is a phenomenon. Formed when the Aquilaria tree becomes infected with mold, it produces a dark resin to protect itself. That resin, aged for decades, becomes oud—the most expensive natural raw material in perfumery.</p>
      
      <p>The scent is difficult to describe. Woody, animalic, slightly sweet, deeply complex. It is not for everyone. That is part of its appeal.</p>
      
      <p>In the Middle East, oud has been worn for thousands of years. It is burned as incense. It is applied as oil. It signals refinement, depth, seriousness.</p>
      
      <p>Western perfumers have only recently embraced it, blending oud with rose, saffron, amber. The results are intoxicating—fragrances that evolve over hours, that make people turn their heads.</p>
      
      <p>One drop behind the ear. That is all you need. Oud announces itself slowly. It does not scream. It whispers—and people lean in to listen.</p>
    `,
    imageSrc: '/assets/journal/oud-guide.jpg',
    readTime: '7 min',
    publishedAt: '2025-12-20',
  },
  {
    slug: 'building-morning-ritual',
    title: 'Building a Morning Ritual That Matters',
    excerpt:
      'The first hour sets the tone for everything that follows. How the finest men begin their day with intention.',
    content: `
      <p>You do not need to wake at 4am. You do not need an ice bath. You do not need a manifesting journal.</p>
      
      <p>What you need is consistency. A sequence of actions, repeated daily, that ground you before the noise begins.</p>
      
      <p>For some, it is coffee—real coffee, not rushed. French press. Hand-ground beans. The ritual of preparation. For others, it is writing. Three pages. Stream of consciousness. Brain dump.</p>
      
      <p>The objects matter. A well-made journal. A quality pen. A proper mug. These are not luxuries. They are invitations to take yourself seriously.</p>
      
      <p>The morning is yours. The world has not yet made its demands. Use that time to decide who you want to be today.</p>
    `,
    imageSrc: '/assets/journal/morning-ritual.jpg',
    readTime: '4 min',
    publishedAt: '2025-12-10',
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticles() {
  return ARTICLES.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
