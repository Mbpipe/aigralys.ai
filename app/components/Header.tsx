'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-xl border-b border-gold/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-16 h-16 transition-opacity duration-500 group-hover:opacity-80">
            <Image
              src="/dignitas-logo-v2.png"
              alt="Dignitas"
              fill
              className="object-contain"
            />
          </div>
            <span className="font-serif text-2xl tracking-[0.2em] text-warm-white opacity-90 group-hover:text-gold transition-colors duration-700">
              DIGNITAS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/shop"
              className="text-sm tracking-[0.15em] text-warm-white/60 hover:text-gold transition-colors duration-700"
            >
              COLECCIÓN
            </Link>
            <Link
              href="/journal"
              className="text-sm tracking-[0.15em] text-warm-white/60 hover:text-gold transition-colors duration-700"
            >
              DIARIO
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-[0.15em] text-warm-white/60 hover:text-gold transition-colors duration-700"
            >
              FILOSOFÍA
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-warm-white/80"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-8 space-y-6 border-t border-gold/5"
          >
            <Link
              href="/shop"
              className="block text-sm tracking-[0.15em] text-warm-white/60 hover:text-gold transition-colors duration-700"
              onClick={() => setMenuOpen(false)}
            >
              COLECCIÓN
            </Link>
            <Link
              href="/journal"
              className="block text-sm tracking-[0.15em] text-warm-white/60 hover:text-gold transition-colors duration-700"
              onClick={() => setMenuOpen(false)}
            >
              DIARIO
            </Link>
            <Link
              href="/about"
              className="block text-sm tracking-[0.15em] text-warm-white/60 hover:text-gold transition-colors duration-700"
              onClick={() => setMenuOpen(false)}
            >
              FILOSOFÍA
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
