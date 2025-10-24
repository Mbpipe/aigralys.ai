'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function WorkshopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % workshopImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + workshopImages.length) % workshopImages.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  // Autoplay
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main carousel */}
      <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden glass">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={`/images/workshops/${workshopImages[currentIndex]}`}
              alt={`Workshop ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={currentIndex === 0}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-grafito/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 text-humo group-hover:text-azul transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 text-humo group-hover:text-azul transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 glass rounded-full">
          <span className="text-sm font-medium text-humo">
            {currentIndex + 1} / {workshopImages.length}
          </span>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {workshopImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-azul'
                : 'w-2 h-2 bg-humo/30 hover:bg-humo/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail preview (hidden on mobile) */}
      <div className="hidden md:flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
        {workshopImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-2 ring-azul scale-110'
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <Image
              src={`/images/workshops/${image}`}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

