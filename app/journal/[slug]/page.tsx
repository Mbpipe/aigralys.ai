'use client';

import { motion } from 'framer-motion';
import { getArticleBySlug } from '@/lib/journal';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] mb-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal" />
      </motion.div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 text-sm text-warm-white/40 tracking-wider mb-8"
        >
          <span>{article.readTime} READ</span>
          <span>•</span>
          <time>{new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</time>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white mb-8 leading-tight"
        >
          {article.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-warm-white/70 leading-relaxed mb-12 border-l-2 border-gold pl-6"
        >
          {article.excerpt}
        </motion.p>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-lg prose-invert prose-gold max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gold/20"
        >
          <Link
            href="/journal"
            className="inline-flex items-center space-x-3 text-gold hover:text-warm-white transition-colors duration-500 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="tracking-wider text-sm">BACK TO JOURNAL</span>
          </Link>
        </motion.div>
      </article>
    </main>
  );
}
