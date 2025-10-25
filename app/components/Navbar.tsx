'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logo2.png" 
            alt="Aigralys Logo" 
            width={40} 
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="text-xl sm:text-2xl font-bold text-humo">Aigralys</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="#consultoria"
            className="text-humo/80 hover:text-azul transition-colors font-medium"
          >
            {t.nav.consultoria}
          </Link>
          <Link
            href="#workshops"
            className="text-humo/80 hover:text-azul transition-colors font-medium"
          >
            {t.nav.workshops}
          </Link>
          <Link
            href="#casos"
            className="text-humo/80 hover:text-azul transition-colors font-medium"
          >
            {t.nav.casos}
          </Link>
          <Link
            href="#contacto"
            className="text-humo/80 hover:text-azul transition-colors font-medium"
          >
            {t.nav.contacto}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
            <button
              onClick={() => setLanguage('es')}
              className={`text-sm font-medium transition-colors ${
                language === 'es' ? 'text-azul' : 'text-humo/50 hover:text-humo/80'
              }`}
            >
              ES
            </button>
            <span className="text-humo/30">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-medium transition-colors ${
                language === 'en' ? 'text-azul' : 'text-humo/50 hover:text-humo/80'
              }`}
            >
              EN
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/aigralys.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul hover:text-cian transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/gonzalo-abadia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul hover:text-cian transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-humo p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass mt-4 mx-4 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            <Link
              href="#consultoria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-humo/80 hover:text-azul transition-colors font-medium py-2"
            >
              {t.nav.consultoria}
            </Link>
            <Link
              href="#workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="text-humo/80 hover:text-azul transition-colors font-medium py-2"
            >
              {t.nav.workshops}
            </Link>
            <Link
              href="#casos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-humo/80 hover:text-azul transition-colors font-medium py-2"
            >
              {t.nav.casos}
            </Link>
            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-humo/80 hover:text-azul transition-colors font-medium py-2"
            >
              {t.nav.contacto}
            </Link>
            <Link
              href="https://www.instagram.com/aigralys.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul hover:text-cian transition-colors font-medium py-2 sm:hidden"
            >
              Instagram →
            </Link>
            <Link
              href="https://www.linkedin.com/in/gonzalo-abadia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul hover:text-cian transition-colors font-medium py-2 sm:hidden"
            >
              LinkedIn →
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

