'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../i18n/LanguageContext'
import FooterGlow from './FooterGlow'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-white/10 bg-grafito">
      {/* Animated glow line */}
      <FooterGlow />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity justify-center md:justify-start mb-2">
              <Image 
                src="/images/logo2.png" 
                alt="Aigralys Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
                loading="lazy"
              />
              <span className="text-2xl font-bold text-humo">Aigralys</span>
            </Link>
            <p className="text-humo/60 text-sm mt-2">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <Link
              href="#consultoria"
              className="text-humo/70 hover:text-azul transition-colors text-sm"
            >
              {t.nav.consultoria}
            </Link>
            <Link
              href="#workshops"
              className="text-humo/70 hover:text-azul transition-colors text-sm"
            >
              {t.nav.workshops}
            </Link>
            <Link
              href="#casos"
              className="text-humo/70 hover:text-azul transition-colors text-sm"
            >
              {t.nav.casos}
            </Link>
            <Link
              href="#contacto"
              className="text-humo/70 hover:text-azul transition-colors text-sm"
            >
              {t.nav.contacto}
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://www.instagram.com/aigralys.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-azul hover:text-cian transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/gonzalo-abadia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-azul hover:text-cian transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-humo/50 text-xs sm:text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
