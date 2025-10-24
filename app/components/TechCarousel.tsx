'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techLogosRow1 = [
  { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'OpenAI', logo: 'https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'GCP', logo: 'https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png' },
  { name: 'Anthropic', logo: 'https://asset.brandfetch.io/idv9cjU_Ta/id0kZBu_6q.png' },
  { name: 'LangChain', logo: 'https://avatars.githubusercontent.com/u/126733545?s=280&v=4' },
  { name: 'Hugging Face', logo: 'https://workable-application-form.s3.amazonaws.com/advanced/production/61557f91d9510741dc62e7f8/c3635b59-a3d2-444a-b636-a9d0061dcdde' },
]

const techLogosRow2 = [
  { name: 'Docker', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
  { name: 'FastAPI', logo: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
  { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
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
