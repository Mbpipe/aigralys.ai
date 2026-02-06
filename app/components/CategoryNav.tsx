'use client';

import { motion } from 'framer-motion';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryNav({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryNavProps) {
  return (
    <nav className="flex items-center justify-center space-x-8 lg:space-x-12 mb-16">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="relative group"
          >
            <span
              className={`text-sm tracking-luxury transition-colors duration-500 ${
                isActive ? 'text-gold' : 'text-warm-white/50 hover:text-warm-white'
              }`}
            >
              {category.toUpperCase()}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
