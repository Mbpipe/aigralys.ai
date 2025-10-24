'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techLogosRow1 = [
  { name: 'Azure', logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/191919' },
  { name: 'HuggingFace', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
]

const techLogosRow2 = [
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
]

// Triplicar para efecto infinito
const infiniteRow1 = [...techLogosRow1, ...techLogosRow1, ...techLogosRow1]
const infiniteRow2 = [...techLogosRow2, ...techLogosRow2, ...techLogosRow2]

export default function TechCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-6 space-y-6">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-grafito to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-grafito to-transparent z-10 pointer-events-none" />
      
      {/* Primera fila - Derecha */}
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: ['0%', '-33.33%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {infiniteRow1.map((tech, index) => (
          <div
            key={`row1-${tech.name}-${index}`}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-xl glass bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative w-full h-full">
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                sizes="80px"
                unoptimized
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Segunda fila - Izquierda */}
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: ['-33.33%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {infiniteRow2.map((tech, index) => (
          <div
            key={`row2-${tech.name}-${index}`}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-xl glass bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative w-full h-full">
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                sizes="80px"
                unoptimized
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
