'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techLogosRow1 = [
  { name: 'Azure', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%230078d4" d="M44.65 27.83 25.02 44H16.5a2.64 2.64 0 0 1-1.27-.33l21.18-15.63ZM31.65 4H23a2.53 2.53 0 0 0-2.15 1.2L4.13 37a2.5 2.5 0 0 0 2.15 3.83h7.59l11.59-8.59Z"/%3E%3C/svg%3E' },
  { name: 'OpenAI', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%2310a37f" d="M22.28 8.26a5.7 5.7 0 0 0-7.58-7.35 5.7 5.7 0 0 0-7.14 3.5 5.7 5.7 0 0 0-5.63 6.86 5.7 5.7 0 0 0 7.58 7.35 5.7 5.7 0 0 0 7.14-3.5 5.7 5.7 0 0 0 5.63-6.86z"/%3E%3C/svg%3E' },
  { name: 'Python', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%233776ab" d="M23.9 4.2c-7.5 0-7 3.3-7 7.4v5.3h14v2H17.5c-4.2 0-7.8 2.5-9 7.2-1.3 5.4-1.4 8.8 0 14.4 1 4.2 3.5 7.2 7.7 7.2h5v-6.6c0-4.8 4.1-9 9-9h14c4 0 7-3.3 7-7.3V11.6c0-3.9-3.3-7-7-7.4zm-1 4.5c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7z"/%3E%3Cpath fill="%23ffd43b" d="M24.1 43.8c7.5 0 7-3.3 7-7.4v-5.3h-14v-2h13.4c4.2 0 7.8-2.5 9-7.2 1.3-5.4 1.4-8.8 0-14.4-1-4.2-3.5-7.2-7.7-7.2h-5v6.6c0 4.8-4.1 9-9 9h-14c-4 0-7 3.3-7 7.3v13.1c0 3.9 3.3 7 7 7.4zm1-4.5c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7z"/%3E%3C/svg%3E' },
  { name: 'GCP', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%234285f4" d="M24 4.3 8.7 12 4.3 24l4.4 12L24 43.7l15.3-7.7 4.4-12-4.4-12z"/%3E%3Cpath fill="%23fff" d="M30 24c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z"/%3E%3C/svg%3E' },
  { name: 'LangChain', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" rx="8" fill="%231C3C3C"/%3E%3Ctext x="24" y="32" font-size="28" text-anchor="middle" fill="%23fff"%3E🦜%3C/text%3E%3C/svg%3E' },
  { name: 'PostgreSQL', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%23336791" d="M38.7 19.9c-2.2-1-3.4-.8-3.4-.8s-.1-5.3-2.4-7.6c-1.1-1.1-2.8-1.1-4-.1-1.1 1-1.6 2.5-1.6 4 0 .8.1 1.5.3 2.2-2.7-.3-5.7.1-7.8 1.9-1.8 1.5-2.6 3.7-2.6 6 0 1.8.5 3.4 1.3 4.8-1.3.7-2.3 1.8-2.9 3.1-.6 1.4-.7 2.9-.2 4.3.5 1.4 1.5 2.6 2.8 3.3 1.3.7 2.8.9 4.2.5 1.4-.4 2.6-1.3 3.4-2.5.8-1.2 1.2-2.7 1-4.2 1.6.1 3.3 0 4.9-.3 2.6-.5 5-1.8 6.7-3.7 1.7-1.9 2.6-4.4 2.5-6.9 0-2.1-.7-4.1-2-5.7z"/%3E%3C/svg%3E' },
  { name: 'FastAPI', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Ccircle cx="24" cy="24" r="20" fill="%23009688"/%3E%3Cpath fill="%23fff" d="M24 14l-6 12h4l-4 8 10-14h-4z"/%3E%3C/svg%3E' },
]

const techLogosRow2 = [
  { name: 'Docker', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%232496ed" d="M44 24c-.3-2.6-2.3-4.8-4.8-5.4-.2-.1-.5-.1-.7-.2-.2-2.7-2.1-5-4.7-5.7-2.6-.7-5.4.3-7 2.4-1.6-1.4-3.8-2.2-6-2-2.2.2-4.2 1.4-5.4 3.3h-.4c-3.9 0-7 3.1-7 7v.3c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7h28c3.9 0 7-3.1 7-7 0-3.3-2.3-6.1-5.5-6.8z"/%3E%3Cpath fill="%23fff" d="M19 22h3v3h-3zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3h-3zm4 0h3v3h-3zm4 0h3v3h-3zm4 0h3v3h-3z"/%3E%3C/svg%3E' },
  { name: 'React', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%2361dafb" d="M24 28c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm15.7-4c0-2.8-3.5-5.4-8.9-6.8.6-2.7 1-5 .3-6.3-.7-1.4-2.2-2-4.1-2v1.6c.9 0 1.6.2 2.1.7.5.5.7 1.1.5 2.1-.1.6-.3 1.2-.5 1.9-1.9-.5-4-.8-6.1-.8-2.1 0-4.2.3-6.1.8-.2-.7-.4-1.3-.5-1.9-.2-1 0-1.6.5-2.1.5-.5 1.2-.7 2.1-.7V7.9c-1.9 0-3.4.6-4.1 2-.7 1.3-.3 3.6.3 6.3-5.4 1.4-8.9 4-8.9 6.8s3.5 5.4 8.9 6.8c-.6 2.7-1 5-.3 6.3.7 1.4 2.2 2 4.1 2 1.9 0 3.4-.6 4.1-2 .7-1.3.3-3.6-.3-6.3 5.4-1.4 8.9-4 8.9-6.8zm-15.7 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5z"/%3E%3C/svg%3E' },
  { name: 'TensorFlow', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%23ff6f00" d="M24 4L4 14v20l20 10 20-10V14z"/%3E%3Cpath fill="%23fff" d="M24 13v22l-8-4V19zm0 0l8 4v12l-8 4z"/%3E%3C/svg%3E' },
  { name: 'Kubernetes', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%23326ce5" d="M24 4l-3.5 20L4 19.5 12 36l12-4 12 4 8-16.5-16.5 4.5z"/%3E%3Ccircle cx="24" cy="24" r="5" fill="%23fff"/%3E%3C/svg%3E' },
  { name: 'MongoDB', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%2347a248" d="M24 4c-1.1 3.7-2.2 7.3-3.3 11-.3 1-.6 2.1-1.2 2.9-.6.8-1.5 1.3-2.5 1.3-3.7 0-7.3.1-11 0v3c3.7 0 7.3.1 11 0 1 0 1.9.5 2.5 1.3.6.8.9 1.9 1.2 2.9 1.1 3.7 2.2 7.3 3.3 11h1c1.1-3.7 2.2-7.3 3.3-11 .3-1 .6-2.1 1.2-2.9.6-.8 1.5-1.3 2.5-1.3 3.7 0 7.3-.1 11 0v-3c-3.7 0-7.3-.1-11 0-1 0-1.9-.5-2.5-1.3-.6-.8-.9-1.9-1.2-2.9-1.1-3.7-2.2-7.3-3.3-11z"/%3E%3C/svg%3E' },
  { name: 'Node.js', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%23689f63" d="M24 4L4 14v20l20 10 20-10V14zm0 3.5L40 17v14L24 40.5 8 31V17z"/%3E%3C/svg%3E' },
  { name: 'Redis', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Cpath fill="%23d82c20" d="M44 30l-20 8-20-8V18l20 8 20-8zm0-12l-20 8-20-8 20-8z"/%3E%3C/svg%3E' },
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
