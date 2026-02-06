'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PremiumProductCard from '../components/PremiumProductCard';
import CategoryNav from '../components/CategoryNav';
import { PRODUCTS, type Product } from '@/lib/products';

const CATEGORIES_ES = {
  all: 'Todo',
  cigars: 'Puros',
  watches: 'Relojes',
  perfumes: 'Perfumes',
  accessories: 'Accesorios',
};

const CATEGORIES = ['all', 'cigars', 'watches', 'perfumes', 'accessories'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-40 pb-32 px-6 lg:px-12 bg-charcoal">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-6">
          Colección curada
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white mb-8 tracking-tight">
          La colección
        </h1>
        <p className="text-lg text-warm-white/60 max-w-2xl mx-auto leading-relaxed">
          Cada objeto aquí ha sido elegido por su historia, su artesanía y su capacidad
          de transformar la rutina en ritual.
        </p>
      </motion.div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto mb-20">
        <CategoryNav
          categories={CATEGORIES.map(c => CATEGORIES_ES[c as keyof typeof CATEGORIES_ES])}
          activeCategory={CATEGORIES_ES[activeCategory as keyof typeof CATEGORIES_ES]}
          onCategoryChange={(catEs) => {
            const catEn = Object.keys(CATEGORIES_ES).find(
              key => CATEGORIES_ES[key as keyof typeof CATEGORIES_ES] === catEs
            );
            if (catEn) setActiveCategory(catEn);
          }}
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {filteredProducts.map((product, index) => (
            <PremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-warm-white/40">No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </main>
  );
}
