'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-white/10 bg-grafito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity justify-center md:justify-start mb-2">
              <Image 
                src="/images/logo.png" 
                alt="Aigralys Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
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

          {/* Social link */}
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
