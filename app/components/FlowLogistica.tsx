'use client'

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function FlowLogistica() {
  const inventoryRef = useRef(null)
  const orchestratorRef = useRef(null)
  const routesRef = useRef(null)
  const restockRef = useRef(null)

  const particleInventoryToOrchestrator = useRef(null)
  const particleOrchestratorToRoutes = useRef(null)
  const particleOrchestratorToRestock = useRef(null)

  useEffect(() => {
    // Pulse animation on nodes
    [inventoryRef, orchestratorRef, routesRef, restockRef].forEach((r, i) => {
      gsap.to(r.current, {
        boxShadow:
          i === 1
            ? "0 0 24px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.15)"
            : "0 0 16px rgba(168,85,247,0.3), 0 0 60px rgba(168,85,247,0.07)",
        scale: 1.05,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    })

    // Particle animation helper
    const travel = (el: any, points: {x: number, y: number}[], delay = 0) => {
      const tl = gsap.timeline({ repeat: -1, delay })
      tl.fromTo(
        el,
        { opacity: 0, x: 0, y: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "sine.out" }
      )
      
      points.forEach((point) => {
        tl.to(el, {
          x: point.x,
          y: point.y,
          duration: 0.8,
          ease: "none",
        })
      })
      
      tl.to(el, {
        opacity: 0,
        scale: 0.6,
        duration: 0.2,
        ease: "sine.in",
      })
    }

    // Animate particles
    travel(particleInventoryToOrchestrator.current, [{x: 110, y: 20}, {x: 220, y: 40}], 0.0)
    travel(particleOrchestratorToRoutes.current, [{x: 110, y: -60}, {x: 220, y: -120}], 0.4)
    travel(particleOrchestratorToRestock.current, [{x: 110, y: 60}, {x: 220, y: 120}], 0.8)
  }, [])

  return (
    <section
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.07) 0%, rgba(0,0,0,0) 70%), #0b0e16",
        borderRadius: "1rem",
        padding: "2rem",
        color: "#fff",
        boxShadow:
          "0 30px 120px rgba(168,85,247,0.08),0 0 200px rgba(168,85,247,0.08)",
        position: "relative",
        overflow: "visible",
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div
          style={{
            display: "inline-block",
            fontSize: "0.7rem",
            padding: "0.4rem 0.8rem",
            borderRadius: "999px",
            border: "1px solid rgba(168,85,247,0.4)",
            color: "rgb(216,180,254)",
            background:
              "radial-gradient(circle at 0% 0%, rgba(168,85,247,0.2) 0%, rgba(0,0,0,0) 70%)",
            marginBottom: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          LOGÍSTICA
        </div>

        <div
          style={{
            fontSize: "1.8rem",
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#fff",
            textShadow: "0 0 24px rgba(168,85,247,0.4)",
            marginBottom: "0.75rem",
          }}
        >
          Fulfillment inteligente de principio a fin
        </div>

        <div
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.4,
            color: "#9fb2ff",
            maxWidth: 540,
            margin: "0 auto",
          }}
        >
          Desde el pedido hasta la entrega, los agentes coordinan inventario,
          rutas y reposición sin intervención manual.
        </div>
      </div>

      {/* Diagram area */}
      <div
        style={{
          position: "relative",
          minHeight: 320,
          borderRadius: "1rem",
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.07) 0%, rgba(0,0,0,0) 70%)",
          boxShadow:
            "inset 0 0 40px rgba(168,85,247,0.12),0 0 120px rgba(168,85,247,0.12)",
          overflow: "visible",
          zIndex: 1,
        }}
      >
        {/* Inventory node */}
        <div
          ref={inventoryRef}
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: 220,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(168,85,247,0.3)",
            color: "#fff",
            boxShadow:
              "0 0 16px rgba(168,85,247,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="12" height="16" rx="2"/>
              <path d="M6 8h12M10 4v4h4V4"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Inventario & Depósitos
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Stock en tiempo real, ubicación
          </div>

          {/* SVG curved line */}
          <svg
            style={{
              position: "absolute",
              right: "-80px",
              bottom: "20%",
              width: "80px",
              height: "60px",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="logisticaGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(168,85,247,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(168,85,247,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="logisticaGlow1">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 0 10 Q 40 20, 80 40"
              fill="none"
              stroke="url(#logisticaGrad1)"
              strokeWidth="2"
              filter="url(#logisticaGlow1)"
            />
          </svg>

          {/* Particle */}
          <div
            ref={particleInventoryToOrchestrator}
            style={{
              position: "absolute",
              bottom: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(168,85,247,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(168,85,247,0.8),0 0 30px rgba(168,85,247,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-180px",
              bottom: "calc(20% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            nuevo pedido
          </div>
        </div>

        {/* Central Orchestrator Agent */}
        <div
          ref={orchestratorRef}
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            width: 240,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(20,25,40,0.9) 0%, rgba(10,12,20,0.9) 60%)",
            border: "1px solid rgba(168,85,247,0.5)",
            color: "#fff",
            boxShadow:
              "0 0 24px rgba(168,85,247,0.4),0 60px 100px rgba(0,0,0,0.9)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <circle cx="12" cy="10" r="2" fill="rgba(168,85,247,0.3)"/>
              <path d="M8 16h8M9 19h6" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Agente Orquestador de Fulfillment
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Coordina picking, packing, envío
          </div>

          {/* SVG line to routes */}
          <svg
            style={{
              position: "absolute",
              right: "-80px",
              top: "20%",
              width: "80px",
              height: "80px",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="logisticaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(168,85,247,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(168,85,247,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="logisticaGlow2">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 0 40 Q 40 20, 80 0"
              fill="none"
              stroke="url(#logisticaGrad2)"
              strokeWidth="2"
              filter="url(#logisticaGlow2)"
            />
          </svg>

          {/* Particle to routes */}
          <div
            ref={particleOrchestratorToRoutes}
            style={{
              position: "absolute",
              top: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(168,85,247,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(168,85,247,0.8),0 0 30px rgba(168,85,247,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-190px",
              top: "calc(20% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            optimizar ruta
          </div>

          {/* SVG line to restock */}
          <svg
            style={{
              position: "absolute",
              right: "-80px",
              bottom: "20%",
              width: "80px",
              height: "80px",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="logisticaGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(168,85,247,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(168,85,247,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="logisticaGlow3">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 0 10 Q 40 30, 80 50"
              fill="none"
              stroke="url(#logisticaGrad3)"
              strokeWidth="2"
              filter="url(#logisticaGlow3)"
            />
          </svg>

          {/* Particle to restock */}
          <div
            ref={particleOrchestratorToRestock}
            style={{
              position: "absolute",
              bottom: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(168,85,247,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(168,85,247,0.8),0 0 30px rgba(168,85,247,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-200px",
              bottom: "calc(20% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            alertar reposición
          </div>
        </div>

        {/* Delivery Routes */}
        <div
          ref={routesRef}
          style={{
            position: "absolute",
            top: "10%",
            left: "70%",
            width: 200,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(168,85,247,0.3)",
            boxShadow:
              "0 0 16px rgba(168,85,247,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 10l5 5 9-9"/>
              <circle cx="5" cy="10" r="2"/>
              <path d="M19 15l-5-5-4 4"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Rutas de Entrega
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Optimización dinámica
          </div>
        </div>

        {/* Intelligent Restocking */}
        <div
          ref={restockRef}
          style={{
            position: "absolute",
            top: "60%",
            left: "70%",
            width: 200,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(168,85,247,0.3)",
            boxShadow:
              "0 0 16px rgba(168,85,247,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v6h6M21 21v-6h-6"/>
              <path d="M21 3l-3 3m0-6l-3 3M3 21l3-3m0 6l3-3"/>
              <circle cx="6" cy="6" r="2"/>
              <circle cx="18" cy="18" r="2"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Reposición Inteligente
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Predicción de demanda
          </div>
        </div>
      </div>

      {/* Footer bullets */}
      <div
        style={{
          fontSize: "0.75rem",
          color: "#9fb2ff",
          lineHeight: 1.4,
          marginTop: "1.5rem",
          display: "grid",
          gap: "0.5rem",
          maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <div>• Coordinación automática desde pedido a entrega.</div>
        <div>• Optimización de rutas en tiempo real.</div>
        <div>• Predicción de demanda para reposición proactiva.</div>
      </div>
    </section>
  )
}
