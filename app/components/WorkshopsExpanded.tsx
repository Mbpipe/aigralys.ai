'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'
import WorkshopCarousel from './WorkshopCarousel'

const workshops = [
  {
    id: 'ws1',
    level: 'Introductorio',
    levelEn: 'Introductory',
    duration: '2 días',
    durationEn: '2 days',
  },
  {
    id: 'ws2',
    level: 'Intermedio',
    levelEn: 'Intermediate',
    duration: '3 días',
    durationEn: '3 days',
  },
  {
    id: 'ws3',
    level: 'Avanzado',
    levelEn: 'Advanced',
    duration: '3 días',
    durationEn: '3 days',
  },
  {
    id: 'ws4',
    level: 'Especializado',
    levelEn: 'Specialized',
    duration: '2 días',
    durationEn: '2 days',
  },
  {
    id: 'ws5',
    level: 'Ejecutivo',
    levelEn: 'Executive',
    duration: '1 día',
    durationEn: '1 day',
  },
  {
    id: 'ws6',
    level: 'A medida',
    levelEn: 'Custom',
    duration: 'Flexible',
    durationEn: 'Flexible',
  },
]

export default function WorkshopsExpanded() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

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

        {/* Workshop Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 px-4"
        >
          <WorkshopCarousel />
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid gap-8 mb-12">
          {workshops.map((workshop, index) => {
            const wsData = t.workshops[workshop.id as keyof typeof t.workshops] as any
            const isFeatured = workshop.id === 'ws1'
            
            return (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 ${isFeatured ? 'border-2 border-azul/30' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gradient">
                    {wsData.title}
                  </h3>
                  <span className="inline-flex items-center px-4 py-2 bg-azul/20 text-azul rounded-full text-sm font-medium">
                    {language === 'es' ? workshop.level : workshop.levelEn}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-azul/10 text-azul rounded-full text-sm font-medium">
                    {language === 'es' ? workshop.duration : workshop.durationEn}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-humo/80 mb-6 leading-relaxed">
                  {wsData.desc}
                </p>

                {/* Topics/Modules */}
                {wsData.topics && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-humo mb-3 flex items-center gap-2">
                      <span className="text-cian">→</span>
                      {wsData.topics.title || (language === 'es' ? 'Módulos:' : 'Modules:')}
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {(Array.isArray(wsData.topics) ? wsData.topics : Object.values(wsData.topics).filter(v => typeof v === 'string')).map((topic: string, i: number) => (
                        <li key={i} className="text-sm sm:text-base text-humo/70 flex items-start gap-2">
                          <span className="text-cian mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Audience */}
                {wsData.audience && (
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h4 className="text-base font-bold text-humo mb-2">
                      {wsData.audience.title || (language === 'es' ? 'Para quién:' : 'Target Audience:')}
                    </h4>
                    <p className="text-sm text-humo/70">
                      {wsData.audience.desc || wsData.audience}
                    </p>
                  </div>
                )}
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

