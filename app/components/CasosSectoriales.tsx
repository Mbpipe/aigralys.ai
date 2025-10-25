'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '../i18n/LanguageContext'

const industries = [
  {
    key: 'agro',
    image: '/images/agro.png',
    gradient: 'from-green-500/20 to-green-700/20',
  },
  {
    key: 'energia',
    image: '/images/energia.png',
    gradient: 'from-yellow-500/20 to-orange-600/20',
  },
  {
    key: 'turismo',
    image: '/images/turismo.png',
    gradient: 'from-blue-500/20 to-cyan-600/20',
  },
  {
    key: 'logistica',
    image: '/images/logistica.png',
    gradient: 'from-purple-500/20 to-indigo-700/20',
  },
]

export default function CasosSectoriales() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="casos" className="relative section-padding bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-azul rounded-full animate-pulse" />
            <span className="text-azul text-sm font-medium">{t.casos.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-humo mb-6 px-4">
            {t.casos.title}
          </h2>
          <p className="text-lg sm:text-xl text-humo/70 max-w-3xl mx-auto px-4">
            {t.casos.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const data = t.casos[industry.key as keyof typeof t.casos] as any
            return (
              <motion.div
                key={industry.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass hover:bg-white/10 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="mb-6 relative w-full h-32 sm:h-40 rounded-lg overflow-hidden bg-white/5">
                    <Image 
                      src={industry.image} 
                      alt={data.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-humo mb-3">
                    {data.title}
                  </h3>
                  <p className="text-sm sm:text-base text-humo/70 leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
