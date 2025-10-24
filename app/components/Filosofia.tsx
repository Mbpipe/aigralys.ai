'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import SubtleBackground from './SubtleBackground'

export default function Filosofia() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azul rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cian rounded-full blur-3xl" />
      </div>
      
      {/* Animated particles */}
      <SubtleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass p-8 sm:p-12 md:p-16 rounded-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-humo">{t.filosofia.quote1}</span>
              <br />
              <span className="text-gradient">{t.filosofia.quote2}</span>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-lg sm:text-xl text-humo/70 max-w-3xl mx-auto leading-relaxed">
              {t.filosofia.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
