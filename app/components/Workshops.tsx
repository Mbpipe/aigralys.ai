'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'

export default function Workshops() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="workshops" className="relative section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-cian rounded-full animate-pulse" />
            <span className="text-cian text-sm font-medium">{t.workshops.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-humo mb-6 px-4">
            {t.workshops.title}
          </h2>
          <p className="text-lg sm:text-xl text-humo/70 max-w-3xl mx-auto mb-4 px-4">
            {t.workshops.subtitle}
          </p>
          <Link
            href="https://www.linkedin.com/in/gonzalo-abadia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-azul hover:text-cian transition-colors"
          >
            <span>{t.workshops.instructor}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* C-Level Workshop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="glass p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                {t.workshops.cLevel.title}
              </h3>
              <p className="text-humo/60 text-sm">{t.workshops.cLevel.subtitle}</p>
            </div>

            <p className="text-sm sm:text-base text-humo/80 mb-6 leading-relaxed">
              {t.workshops.cLevel.description}
            </p>

            <div className="space-y-3 mb-6 pb-6 border-b border-white/10 text-sm sm:text-base">
              <div className="flex items-center gap-3 text-humo/70">
                <span className="text-azul">⏱</span>
                <span>{t.workshops.cLevel.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-humo/70">
                <span className="text-azul">📍</span>
                <span>{t.workshops.cLevel.format}</span>
              </div>
              <div className="flex items-center gap-3 text-humo/70">
                <span className="text-azul">👥</span>
                <span>{t.workshops.cLevel.audience}</span>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-humo mb-3">{t.workshops.cLevel.highlights}</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {t.workshops.cLevel.content.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-humo/70">
                    <span className="text-cian mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hands-On Workshop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                {t.workshops.handson.title}
              </h3>
              <p className="text-humo/60 text-sm">{t.workshops.handson.subtitle}</p>
            </div>

            <p className="text-sm sm:text-base text-humo/80 mb-6 leading-relaxed">
              {t.workshops.handson.description}
            </p>

            <div className="space-y-3 mb-6 pb-6 border-b border-white/10 text-sm sm:text-base">
              <div className="flex items-center gap-3 text-humo/70">
                <span className="text-azul">⏱</span>
                <span>{t.workshops.handson.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-humo/70">
                <span className="text-azul">📍</span>
                <span>{t.workshops.handson.format}</span>
              </div>
              <div className="flex items-center gap-3 text-humo/70">
                <span className="text-azul">👥</span>
                <span>{t.workshops.handson.audience}</span>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-humo mb-3">{t.workshops.cLevel.highlights}</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {t.workshops.handson.content.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-humo/70">
                    <span className="text-cian mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center px-4"
        >
          <a
            href="https://forms.gle/workshop-aigralys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cian to-azul text-grafito font-button text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cian/50 font-bold"
          >
            {t.workshops.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
