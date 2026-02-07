'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { withBasePath } from '@/lib/withBasePath';

interface HeroSlowMomentProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  height?: 'full' | 'tall' | 'medium';
}

export default function HeroSlowMoment({
  title,
  subtitle,
  imageSrc,
  height = 'full',
}: HeroSlowMomentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const heightClasses = {
    full: 'h-screen',
    tall: 'h-[85vh]',
    medium: 'h-[70vh]',
  };

  return (
    <div ref={ref} className={`relative ${heightClasses[height]} overflow-hidden`}>
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${withBasePath(imageSrc)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-charcoal" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-sm tracking-luxury text-gold uppercase mb-6"
        >
          {subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-12"
        >
          <svg
            className="w-6 h-6 text-gold animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
