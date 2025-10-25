'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface Neuron {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulsePhase: number
  pulseSpeed: number
  isActive: boolean
  layer: number // depth layer for parallax effect
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    
    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      return
    }

    let animationFrameId: number
    let neurons: Neuron[] = []
    const CONNECTION_DISTANCE = 180
    const MAX_CONNECTIONS = 3

    // Colors from palette - ultra subtle
    const BLUE = { r: 10, g: 132, b: 255 }    // #0A84FF
    const CYAN = { r: 93, g: 225, b: 230 }    // #5DE1E6
    const DARK = { r: 28, g: 28, b: 30 }      // #1C1C1E

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNeurons()
    }

    // Initialize neurons with depth layers
    const initNeurons = () => {
      // Fewer neurons for more elegance
      const neuronCount = Math.floor((canvas.width * canvas.height) / 25000)
      neurons = []

      for (let i = 0; i < neuronCount; i++) {
        const layer = Math.random() // 0-1, affects speed and opacity
        const isActive = Math.random() > 0.85 // 15% chance to be "active"
        
        neurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15 * (1 - layer * 0.5), // slower in background
          vy: (Math.random() - 0.5) * 0.15 * (1 - layer * 0.5),
          radius: isActive ? 2.5 : (1.5 + Math.random() * 1),
          opacity: 0.15 + layer * 0.15, // 0.15-0.3 base opacity
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.01,
          isActive,
          layer
        })
      }
    }

    // Update neuron positions
    const updateNeurons = () => {
      neurons.forEach((neuron) => {
        // Update position with wrapping
        neuron.x += neuron.vx
        neuron.y += neuron.vy

        // Wrap around edges
        if (neuron.x < -50) neuron.x = canvas.width + 50
        if (neuron.x > canvas.width + 50) neuron.x = -50
        if (neuron.y < -50) neuron.y = canvas.height + 50
        if (neuron.y > canvas.height + 50) neuron.y = -50

        // Update pulse phase
        neuron.pulsePhase += neuron.pulseSpeed
      })
    }

    // Find nearby neurons for connections
    const findConnections = (neuron: Neuron, index: number): number[] => {
      const connections: Array<{ index: number; distance: number }> = []
      
      for (let i = index + 1; i < neurons.length; i++) {
        const other = neurons[i]
        const dx = neuron.x - other.x
        const dy = neuron.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < CONNECTION_DISTANCE) {
          connections.push({ index: i, distance })
        }
      }
      
      // Sort by distance and return only closest connections
      return connections
        .sort((a, b) => a.distance - b.distance)
        .slice(0, MAX_CONNECTIONS)
        .map(c => c.index)
    }

    // Draw the neural network
    const draw = () => {
      // Clear with very subtle background
      ctx.fillStyle = `rgba(${DARK.r}, ${DARK.g}, ${DARK.b}, 0.05)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (behind neurons)
      neurons.forEach((neuron, index) => {
        const connections = findConnections(neuron, index)
        
        connections.forEach((connIndex) => {
          const other = neurons[connIndex]
          const dx = other.x - neuron.x
          const dy = other.y - neuron.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Opacity based on distance and neuron activity
          let baseOpacity = (1 - distance / CONNECTION_DISTANCE) * 0.15
          
          // Boost opacity if either neuron is active
          if (neuron.isActive || other.isActive) {
            baseOpacity *= 1.8
          }
          
          // Average layer for connection color
          const avgLayer = (neuron.layer + other.layer) / 2
          
          // Gradient from blue to cyan based on layer
          const color = {
            r: Math.floor(BLUE.r + (CYAN.r - BLUE.r) * avgLayer),
            g: Math.floor(BLUE.g + (CYAN.g - BLUE.g) * avgLayer),
            b: Math.floor(BLUE.b + (CYAN.b - BLUE.b) * avgLayer)
          }
          
          // Create subtle gradient for connection
          const gradient = ctx.createLinearGradient(
            neuron.x, neuron.y,
            other.x, other.y
          )
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity})`)
          gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity * 1.3})`)
          gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(neuron.x, neuron.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        })
      })

      // Draw neurons
      neurons.forEach((neuron) => {
        // Pulsing effect
        const pulse = Math.sin(neuron.pulsePhase)
        const pulseIntensity = neuron.isActive ? 0.4 : 0.15
        const currentOpacity = neuron.opacity + pulse * pulseIntensity
        
        // Color based on layer and activity
        const color = neuron.isActive 
          ? CYAN // Active neurons are cyan
          : {
              r: Math.floor(BLUE.r + (CYAN.r - BLUE.r) * neuron.layer),
              g: Math.floor(BLUE.g + (CYAN.g - BLUE.g) * neuron.layer),
              b: Math.floor(BLUE.b + (CYAN.b - BLUE.b) * neuron.layer)
            }
        
        // Draw neuron core
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${currentOpacity})`
        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw subtle glow for active neurons
        if (neuron.isActive) {
          const glowRadius = neuron.radius + 3 + pulse * 2
          const gradient = ctx.createRadialGradient(
            neuron.x, neuron.y, neuron.radius,
            neuron.x, neuron.y, glowRadius
          )
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${currentOpacity * 0.4})`)
          gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(neuron.x, neuron.y, glowRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    // Animation loop
    const animate = () => {
      updateNeurons()
      draw()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.6,
        mixBlendMode: 'screen' 
      }}
    />
  )
}
