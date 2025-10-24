'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface TechNode {
  x: number
  y: number
  vx: number
  vy: number
  tech: {
    name: string
    icon: string
  }
  connections: number[]
}

const techStack = [
  { name: 'Azure', icon: '☁️' },
  { name: 'LangChain', icon: '🦜' },
  { name: 'GCP', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'N8N', icon: '🔗' },
  { name: 'Anthropic', icon: '🧠' },
  { name: 'Docker', icon: '🐳' },
]

export default function TechCarousel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let nodes: TechNode[] = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = 200 // Fixed height
      initNodes()
    }

    const initNodes = () => {
      nodes = techStack.map((tech, i) => ({
        x: (canvas.width / (techStack.length + 1)) * (i + 1),
        y: 100 + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        tech,
        connections: []
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges with margin
        if (node.x < 60 || node.x > canvas.width - 60) node.vx *= -1
        if (node.y < 60 || node.y > canvas.height - 60) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(60, Math.min(canvas.width - 60, node.x))
        node.y = Math.max(60, Math.min(canvas.height - 60, node.y))

        // Find connections
        node.connections = []
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 200) {
              node.connections.push(j)

              // Draw connection line
              const opacity = (1 - distance / 200) * 0.4
              const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
              gradient.addColorStop(0, `rgba(43, 154, 160, ${opacity})`)
              gradient.addColorStop(1, `rgba(74, 201, 207, ${opacity})`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = 1.5
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        })

        // Draw node glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 35)
        glowGradient.addColorStop(0, 'rgba(43, 154, 160, 0.6)')
        glowGradient.addColorStop(0.5, 'rgba(43, 154, 160, 0.3)')
        glowGradient.addColorStop(1, 'rgba(43, 154, 160, 0)')

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 35, 0, Math.PI * 2)
        ctx.fill()

        // Draw node circle (background for icon)
        ctx.fillStyle = 'rgba(28, 28, 30, 0.9)'
        ctx.strokeStyle = node.connections.length > 2 ? '#4AC9CF' : '#2B9AA0'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(node.x, node.y, 28, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Draw tech icon (emoji)
        ctx.font = '28px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.tech.icon, node.x, node.y)

        // Draw tech name below node
        ctx.font = '11px Inter, sans-serif'
        ctx.fillStyle = 'rgba(247, 248, 250, 0.8)'
        ctx.fillText(node.tech.name, node.x, node.y + 45)
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
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: '200px' }}
      />
    </div>
  )
}
