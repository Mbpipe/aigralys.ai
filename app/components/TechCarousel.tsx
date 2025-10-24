'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techLogos = [
  { name: 'Microsoft Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'LangChain', logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'OpenAI', logo: 'https://cdn-icons-png.flaticon.com/512/8636/8636403.png' },
  { name: 'N8N', logo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
  { name: 'Anthropic', logo: 'https://mintlify.s3-us-west-1.amazonaws.com/anthropic/logo/light.svg' },
  { name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
  { name: 'Make', logo: 'https://www.make.com/en/integrations/apps/logos/make.png' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
]

// Duplicar para efecto infinito
const infiniteTech = [...techLogos, ...techLogos, ...techLogos]

export default function TechCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradientes en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-grafito via-grafito/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-grafito via-grafito/80 to-transparent z-10 pointer-events-none" />
      
      {/* Tira de logos con movimiento vertical alternado */}
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -800], // Movimiento horizontal
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {infiniteTech.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-lg glass flex items-center justify-center bg-white/5"
            animate={{
              y: [
                0,
                index % 2 === 0 ? -15 : 15, // Alternado: unos suben, otros bajan
                0,
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3 + (index % 2),
                ease: 'easeInOut',
                delay: index * 0.3,
              },
              scale: {
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
                delay: index * 0.25,
              },
            }}
            whileHover={{
              scale: 1.2,
              y: -10,
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="object-contain filter brightness-90 hover:brightness-110 transition-all"
                sizes="80px"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

