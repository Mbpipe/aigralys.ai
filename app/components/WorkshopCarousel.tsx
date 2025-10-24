'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const workshopImages = [
  '0234983C-7DC8-41F6-A494-645A63F4A795_4_5005_c.jpeg',
  '137CD084-DA01-4A30-ACF8-2931B2AD15D6_4_5005_c.jpeg',
  '2B53A73E-2DE0-49A9-B54F-745B34B2CF34_1_201_a.jpeg',
  '7BF12099-43FD-4CBA-A992-EC98E86D20DE_4_5005_c.jpeg',
  '87D972BF-136B-4701-9C14-676E4605E2F7_4_5005_c.jpeg',
  '8D283DA1-4065-4508-8712-AAB0B667C8B9_4_5005_c.jpeg',
  '9719C321-BF10-4DD7-B242-148381B62A95_4_5005_c.jpeg',
  '9E21E60E-8691-4F59-90FE-22A0429B6F1C_4_5005_c.jpeg',
  '9E6305E0-A6CE-4AB8-8F0B-4CF9379B874D_4_5005_c.jpeg',
  'A7181E87-35F2-4E49-806E-22F3BF8F23F3_1_201_a.jpeg',
  'C037BBDD-F29F-4967-9F6F-A8103698FFD1_1_201_a.jpeg',
  'C941B839-79B1-408F-9369-642DEF6D2468_4_5005_c.jpeg',
  'DB028977-6131-4B73-81EC-8AD1D8E54F8D_4_5005_c.jpeg',
  'F5B08D07-761D-43F1-8A33-9A0C2E84EDB3_4_5005_c.jpeg',
  'FB528A1F-C4B9-4B7B-B101-DC06FF969BF6_4_5005_c.jpeg',
]

// Duplicar imágenes para crear efecto infinito
const infiniteImages = [...workshopImages, ...workshopImages, ...workshopImages]

export default function WorkshopCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradientes en los bordes para fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-grafito to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-grafito to-transparent z-10 pointer-events-none" />
      
      {/* Tira de fotos con movimiento orbital */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -1920], // Ajustar según el ancho de las imágenes
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          },
        }}
      >
        {infiniteImages.map((image, index) => (
          <motion.div
            key={`${image}-${index}`}
            className="relative flex-shrink-0 w-36 h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden glass"
            animate={{
              y: [
                0,
                Math.sin((index * Math.PI) / 4) * 20,
                0,
              ],
              rotate: [
                0,
                Math.sin((index * Math.PI) / 6) * 5,
                0,
              ],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 4 + (index % 3),
                ease: 'easeInOut',
                delay: index * 0.2,
              },
              rotate: {
                repeat: Infinity,
                duration: 5 + (index % 4),
                ease: 'easeInOut',
                delay: index * 0.15,
              },
            }}
            whileHover={{
              scale: 1.15,
              zIndex: 20,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src={`/images/workshops/${image}`}
              alt={`Workshop momento ${(index % workshopImages.length) + 1}`}
              fill
              className="object-cover"
              sizes="160px"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-grafito/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

