'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techLogosRow1 = [
  { name: 'Microsoft Azure', logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg' },
  { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg' },
  { name: 'OpenAI', logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg' },
  { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
  { name: 'Google Cloud', logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
  { name: 'Anthropic', logo: 'https://www.anthropic.com/images/icons/menu-close.svg' },
  { name: 'Hugging Face', logo: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg' },
]

const techLogosRow2 = [
  { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
  { name: 'PostgreSQL', logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
  { name: 'N8N', logo: 'https://n8n.io/favicon.svg' },
  { name: 'TensorFlow', logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  { name: 'React', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'Kubernetes', logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' },
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
