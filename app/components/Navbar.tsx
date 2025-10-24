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
            src="/images/logo.png" 
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

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/gonzalo-abadia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-azul hover:text-cian transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>

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

