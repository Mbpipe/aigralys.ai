import { motion } from 'framer-motion';
import JournalFeature from '../components/JournalFeature';
import { getAllArticles } from '@/lib/journal';

export default function JournalPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <p className="text-sm tracking-luxury text-gold uppercase mb-4">
          The Journal
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white mb-6">
          Rituals & Reflections
        </h1>
        <p className="text-lg text-warm-white/60 max-w-2xl mx-auto">
          Essays on craftsmanship, ritual, and the quiet art of living well.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {articles.map((article, index) => (
            <JournalFeature
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              imageSrc={article.imageSrc}
              slug={article.slug}
              readTime={article.readTime}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
