'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface JournalFeatureProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
  readTime: string;
  index?: number;
}

export default function JournalFeature({
  title,
  excerpt,
  imageSrc,
  slug,
  readTime,
  index = 0,
}: JournalFeatureProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: 'easeOut' }}
      className="group"
    >
      <Link href={`/journal/${slug}`}>
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-charcoal/20">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center space-x-4 text-xs text-warm-white/40 tracking-wider">
            <span>{readTime} READ</span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-warm-white group-hover:text-gold transition-colors duration-500 leading-tight">
            {title}
          </h2>

          <p className="text-warm-white/60 leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          <div className="pt-2 inline-flex items-center space-x-2 text-gold group-hover:text-warm-white transition-colors duration-500">
            <span className="text-sm tracking-wider">READ MORE</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
