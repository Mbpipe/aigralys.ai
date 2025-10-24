'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const subsectionsData = [
  { key: 'gapAnalysis' },
  { key: 'diseño' },
  { key: 'escalamiento' },
  { key: 'enablement' },
]

export default function Consultoria() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="consultoria" className="relative section-padding bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-azul rounded-full animate-pulse" />
            <span className="text-azul text-sm font-medium">{t.consultoria.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-humo mb-6 px-4">
            {t.consultoria.title}
          </h2>
          <p className="text-lg sm:text-xl text-humo/70 max-w-3xl mx-auto px-4">
            {t.consultoria.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {subsectionsData.map((item, index) => {
            const data = t.consultoria[item.key as keyof typeof t.consultoria] as any
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass hover:bg-white/10 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-azul/10"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-humo mb-3 group-hover:text-gradient transition-all">
                  {data.title}
                </h3>
                <p className="text-sm sm:text-base text-humo/70 leading-relaxed">
                  {data.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center px-4"
        >
          <a
            href="https://calendly.com/gonzalo-abadia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-blue text-white font-button text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-azul/50"
          >
            {t.consultoria.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
