'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number[]
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    // Initialize nodes
    const initNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000)
      nodes = []

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          connections: []
        })
      }
    }

    // Draw nodes and connections
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Find connections
        node.connections = []
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              node.connections.push(j)

              // Draw connection line
              const opacity = (1 - distance / 150) * 0.3
              const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
              gradient.addColorStop(0, `rgba(43, 154, 160, ${opacity})`) // Turquesa
              gradient.addColorStop(1, `rgba(74, 201, 207, ${opacity})`) // Turquesa claro

              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        })

        // Draw node
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3)
        
        if (node.connections.length > 3) {
          // Active nodes (more connections) - green like logo leaf
          nodeGradient.addColorStop(0, 'rgba(139, 195, 74, 0.8)')
          nodeGradient.addColorStop(0.5, 'rgba(139, 195, 74, 0.4)')
          nodeGradient.addColorStop(1, 'rgba(139, 195, 74, 0)')
        } else {
          // Regular nodes - turquoise
          nodeGradient.addColorStop(0, 'rgba(43, 154, 160, 0.8)')
          nodeGradient.addColorStop(0.5, 'rgba(43, 154, 160, 0.4)')
          nodeGradient.addColorStop(1, 'rgba(43, 154, 160, 0)')
        }

        ctx.fillStyle = nodeGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw node core
        ctx.fillStyle = node.connections.length > 3 ? '#8BC34A' : '#2B9AA0'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}

