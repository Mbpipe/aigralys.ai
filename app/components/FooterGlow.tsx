'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function FooterGlow() {
  const prefersReducedMotion = useReducedMotion()
  
  if (prefersReducedMotion) {
    return (
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-azul via-cian to-azul opacity-20" />
    )
  }
  
  return (
    <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-transparent via-azul to-transparent opacity-20"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          width: '50%',
        }}
      />
      <motion.div
        className="absolute top-0 h-full bg-gradient-to-r from-transparent via-cian to-transparent opacity-30"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          width: '40%',
        }}
      />
    </div>
  )
}

