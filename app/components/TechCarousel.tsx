'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techLogos = [
  { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', color: '#0078D4' },
  { name: 'LangChain', logo: 'https://python.langchain.com/img/brand/wordmark.png', color: '#1C3C3C' },
  { name: 'Google Cloud', logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg', color: '#4285F4' },
  { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', color: '#3776AB' },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', color: '#10A37F' },
  { name: 'N8N', logo: 'https://n8n.io/favicon.svg', color: '#EA4B71' },
  { name: 'Anthropic', logo: 'https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fanthropiclogo.svg&w=96&q=75', color: '#D4A574' },
  { name: 'HuggingFace', logo: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg', color: '#FFD21E' },
  { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', color: '#2496ED' },
  { name: 'TensorFlow', logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', color: '#FF6F00' },
]

// Duplicar para efecto infinito
const infiniteTech = [...techLogos, ...techLogos, ...techLogos]

export default function TechCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Gradientes con glow en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-grafito via-grafito to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-grafito via-grafito to-transparent z-10 pointer-events-none" />
      
      {/* Tira de logos con física futurista */}
      <motion.div
        className="flex gap-10 items-center"
        animate={{
          x: [0, -900],
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {infiniteTech.map((tech, index) => {
          const offset = index * 0.8
          const direction = index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0.5
          
          return (
            <motion.div
              key={`${tech.name}-${index}`}
              className="relative flex-shrink-0 w-18 h-18 sm:w-22 sm:h-22 group"
              animate={{
                y: [
                  0,
                  Math.sin(offset) * 20 * direction,
                  Math.cos(offset) * 15 * direction,
                  0,
                ],
                rotateZ: [
                  0,
                  direction * 8,
                  -direction * 5,
                  0,
                ],
                scale: [1, 1.08, 1.05, 1],
              }}
              transition={{
                duration: 6 + (index % 3) * 0.5,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95], // Custom cubic-bezier para suavidad
                delay: offset * 0.2,
              }}
              whileHover={{
                scale: 1.3,
                rotateZ: 0,
                y: -20,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 15,
                },
              }}
            >
              {/* Glow effect futurista */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: offset * 0.1,
                }}
              />
              
              {/* Frame con glassmorphism */}
              <div className="relative w-full h-full p-3 sm:p-4 rounded-xl glass bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 group-hover:border-azul/30 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-300"
                    sizes="88px"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Particles effect sutil */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: tech.color }}
                animate={{
                  scale: [0, 1, 0],
                  y: [-10, -20, -30],
                  x: [0, 5, 10],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: offset * 0.15,
                }}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

