'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RitualBlockProps {
  number: string;
  title: string;
  description: string;
}

export default function RitualBlock({ number, title, description }: RitualBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative group"
    >
      {/* Number */}
      <div className="absolute -top-4 -left-4 font-serif text-8xl text-gold/10 group-hover:text-gold/20 transition-colors duration-700">
        {number}
      </div>

      {/* Content */}
      <div className="relative p-8 lg:p-12 bg-charcoal/40 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-700">
        <h3 className="font-serif text-2xl md:text-3xl text-warm-white mb-4">
          {title}
        </h3>
        <p className="text-warm-white/60 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
