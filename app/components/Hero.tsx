'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../i18n/LanguageContext'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated network background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Central Grande - ARRIBA del título con animación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mb-4 relative"
          >
            {/* Glow animado de fondo */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(43,154,160,0.4) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(74,201,207,0.4) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(139,195,74,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(43,154,160,0.4) 0%, transparent 70%)',
                ],
                scale: [1, 1.1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Contenedor del ícono con órbitas */}
            <div className="relative">
              {/* Logo ícono - solo circuito */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                <Image 
                  src="/images/logo.png" 
                  alt="Aigralys Icon" 
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Anillos orbitales sutiles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
              >
                <motion.div
                  className="absolute inset-0 border-2 border-azul/20 rounded-full"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-cian/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </div>
            
            {/* Texto Aigralys con tipografía del navbar */}
            <div className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              Aigralys
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4">
              <span className="text-humo">{t.hero.headline}</span>
              <br />
              <span className="text-gradient">{t.hero.headlineAccent}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-humo/80 mb-12 max-w-3xl mx-auto px-4"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <Link
              href="#workshops"
              className="group relative px-8 py-4 bg-azul hover:bg-azul/90 text-white font-button text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-azul/50 w-full sm:w-auto min-w-[200px]"
            >
              {t.hero.ctaWorkshops}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-azul to-cian opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>

            <Link
              href="#consultoria"
              className="group px-8 py-4 glass hover:bg-white/10 text-humo font-button text-lg rounded-full transition-all duration-300 hover:scale-105 border border-azul/30 hover:border-azul/60 w-full sm:w-auto min-w-[200px]"
            >
              {t.hero.ctaConsultoria}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-azul/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-azul rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
