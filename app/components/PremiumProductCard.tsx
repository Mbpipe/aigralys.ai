'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { withBasePath } from '@/lib/withBasePath';

interface PremiumProductCardProps {
  product: Product;
  index?: number;
}

export default function PremiumProductCard({ product, index = 0 }: PremiumProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const imageScale = product.imageScale && product.imageScale > 0 ? product.imageScale : 1;
  const imageStyle = {
    backgroundImage: `url(${withBasePath(product.images[0])})`,
    backgroundSize: imageScale === 1 ? undefined : `${Math.round(imageScale * 100)}%`,
    backgroundRepeat: imageScale === 1 ? undefined : 'no-repeat',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-charcoal/20">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={imageStyle}
          />
          
          {product.limited && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-gold/90 text-charcoal text-xs tracking-[0.2em] font-medium">
              LIMITADO
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
            <span className="text-warm-white text-sm tracking-[0.15em]">VER DETALLES</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-serif text-xl text-warm-white group-hover:text-gold transition-colors duration-700">
            {product.nameEs || product.name}
          </h3>
          <p className="text-sm text-warm-white/40 tracking-wide">{product.originEs || product.origin}</p>
          <p className="text-warm-white/60 text-sm leading-relaxed line-clamp-2">
            {product.storyEs || product.story}
          </p>
          <div className="pt-2 flex items-center justify-between">
            <span className="font-serif text-lg text-gold">
              ${product.price.toLocaleString()}
            </span>
            {!product.inStock && (
              <span className="text-xs text-warm-white/40 tracking-[0.15em]">AGOTADO</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
