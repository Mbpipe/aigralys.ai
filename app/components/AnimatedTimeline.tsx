'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface TimelineStep {
  title: string
  description: string
}

interface AnimatedTimelineProps {
  steps: TimelineStep[]
  isInView: boolean
}

export default function AnimatedTimeline({ steps, isInView }: AnimatedTimelineProps) {
  const prefersReducedMotion = useReducedMotion()
  
  // Calculate total path length for animation
  const pathLength = 100 * (steps.length - 1)
  
  return (
    <div className="relative py-8">
      {/* Animated connecting line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden lg:block px-12">
        <svg width="100%" height="4" className="overflow-visible">
          {/* Background line */}
          <line
            x1="0"
            y1="2"
            x2="100%"
            y2="2"
            stroke="currentColor"
            strokeWidth="2"
            className="text-azul/20"
          />
          {/* Animated line */}
          {!prefersReducedMotion && (
            <motion.line
              x1="0"
              y1="2"
              x2="100%"
              y2="2"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength}
              style={{
                strokeDashoffset: isInView ? 0 : pathLength,
              }}
            />
          )}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A84FF" />
              <stop offset="100%" stopColor="#5DE1E6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Timeline steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
            whileHover={!prefersReducedMotion ? { 
              y: -4,
              transition: { duration: 0.2 }
            } : {}}
            className="group relative glass hover:bg-white/10 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cian/20"
          >
            {/* Step number badge */}
            <motion.div 
              className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-azul to-cian flex items-center justify-center text-white font-bold text-sm shadow-lg"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            >
              {index + 1}
            </motion.div>
            
            <h3 className="text-xl font-bold text-humo mb-3 group-hover:text-cian transition-colors duration-300 mt-2">
              {step.title}
            </h3>
            <p className="text-sm text-humo/70 leading-relaxed">
              {step.description}
            </p>
            
            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-azul to-cian transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

