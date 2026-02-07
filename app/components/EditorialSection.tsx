'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface EditorialSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
  link?: string;
  linkText?: string;
}

export default function EditorialSection({
  title,
  description,
  imageSrc,
  imagePosition = 'left',
  link,
  linkText = 'Discover',
}: EditorialSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isLeft = imagePosition === 'left';
  
  // Add basePath for GitHub Pages deployment
  const fullImageSrc = process.env.NODE_ENV === 'production' 
    ? `/dignitas${imageSrc}` 
    : imageSrc;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`relative aspect-[4/5] ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fullImageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className={`py-12 lg:py-0 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white leading-tight mb-8">
          {title}
        </h2>
        <p className="text-lg text-warm-white/70 leading-relaxed mb-10 max-w-lg">
          {description}
        </p>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center space-x-3 text-gold hover:text-warm-white transition-colors duration-500 group"
          >
            <span className="tracking-wider text-sm">{linkText.toUpperCase()}</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500"
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
          </Link>
        )}
      </motion.div>
    </div>
  );
}
