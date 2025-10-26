'use client'

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function FlowEnergia() {
  const sensorRef = useRef(null)
  const forecastRef = useRef(null)
  const gridRef = useRef(null)
  const resourcesRef = useRef(null)

  const particleSensorsToForecast = useRef(null)
  const particleForecastToGrid = useRef(null)
  const particleForecastToResources = useRef(null)

  useEffect(() => {
    // Pulse animation on nodes
    [sensorRef, forecastRef, gridRef, resourcesRef].forEach((r, i) => {
      gsap.to(r.current, {
        boxShadow:
          i === 1
            ? "0 0 24px rgba(234,179,8,0.6), 0 0 80px rgba(234,179,8,0.15)"
            : "0 0 16px rgba(234,179,8,0.3), 0 0 60px rgba(234,179,8,0.07)",
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
    travel(particleSensorsToForecast.current, [{x: 110, y: 10}, {x: 220, y: 20}], 0.0)
    travel(particleForecastToGrid.current, [{x: 110, y: -50}, {x: 220, y: -100}], 0.4)
    travel(particleForecastToResources.current, [{x: 110, y: 50}, {x: 220, y: 100}], 0.8)
  }, [])

  return (
    <section
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(234,179,8,0.07) 0%, rgba(0,0,0,0) 70%), #0b0e16",
        borderRadius: "1rem",
        padding: "2rem",
        color: "#fff",
        boxShadow:
          "0 30px 120px rgba(234,179,8,0.08),0 0 200px rgba(234,179,8,0.08)",
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
            border: "1px solid rgba(234,179,8,0.4)",
            color: "rgb(253,224,71)",
            background:
              "radial-gradient(circle at 0% 0%, rgba(234,179,8,0.2) 0%, rgba(0,0,0,0) 70%)",
            marginBottom: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          ENERGÍA
        </div>

        <div
          style={{
            fontSize: "1.8rem",
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#fff",
            textShadow: "0 0 24px rgba(234,179,8,0.4)",
            marginBottom: "0.75rem",
          }}
        >
          Predicción de demanda y balance automático
        </div>

        <div
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.4,
            color: "#9fb2ff",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Los agentes ven venir el pico de consumo, reequilibran la red y
          activan recursos sin que tengas que intervenir manualmente.
        </div>
      </div>

      {/* Diagram area */}
      <div
        style={{
          position: "relative",
          minHeight: 320,
          borderRadius: "1rem",
          background:
            "radial-gradient(circle at 50% 50%, rgba(234,179,8,0.07) 0%, rgba(0,0,0,0) 70%)",
          boxShadow:
            "inset 0 0 40px rgba(234,179,8,0.12),0 0 120px rgba(234,179,8,0.12)",
          overflow: "visible",
          zIndex: 1,
        }}
      >
        {/* Sensors node */}
        <div
          ref={sensorRef}
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: 220,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(234,179,8,0.3)",
            color: "#fff",
            boxShadow:
              "0 0 16px rgba(234,179,8,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Sensores & SCADA
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Carga en línea, tensión, consumo por zona
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
              <linearGradient id="energiaGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(234,179,8,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(234,179,8,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="energiaGlow1">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 0 10 Q 40 15, 80 30"
              fill="none"
              stroke="url(#energiaGrad1)"
              strokeWidth="2"
              filter="url(#energiaGlow1)"
            />
          </svg>

          {/* Particle */}
          <div
            ref={particleSensorsToForecast}
            style={{
              position: "absolute",
              bottom: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(234,179,8,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(234,179,8,0.8),0 0 30px rgba(234,179,8,0.4)",
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
            datos en vivo
          </div>
        </div>

        {/* Central Forecast Agent */}
        <div
          ref={forecastRef}
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            width: 240,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(20,25,40,0.9) 0%, rgba(10,12,20,0.9) 60%)",
            border: "1px solid rgba(234,179,8,0.5)",
            color: "#fff",
            boxShadow:
              "0 0 24px rgba(234,179,8,0.4),0 60px 100px rgba(0,0,0,0.9)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <circle cx="12" cy="10" r="2" fill="rgba(234,179,8,0.3)"/>
              <path d="M8 16h8M9 19h6" stroke="rgba(234,179,8,0.5)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Agente Predicción de Demanda
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Anticipa picos y riesgo de sobrecarga
          </div>

          {/* SVG line to grid */}
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
              <linearGradient id="energiaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(234,179,8,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(234,179,8,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="energiaGlow2">
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
              stroke="url(#energiaGrad2)"
              strokeWidth="2"
              filter="url(#energiaGlow2)"
            />
          </svg>

          {/* Particle to grid */}
          <div
            ref={particleForecastToGrid}
            style={{
              position: "absolute",
              top: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(234,179,8,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(234,179,8,0.8),0 0 30px rgba(234,179,8,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-200px",
              top: "calc(20% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            redirigir carga
          </div>

          {/* SVG line to resources */}
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
              <linearGradient id="energiaGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(234,179,8,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(234,179,8,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="energiaGlow3">
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
              stroke="url(#energiaGrad3)"
              strokeWidth="2"
              filter="url(#energiaGlow3)"
            />
          </svg>

          {/* Particle to resources */}
          <div
            ref={particleForecastToResources}
            style={{
              position: "absolute",
              bottom: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(234,179,8,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(234,179,8,0.8),0 0 30px rgba(234,179,8,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-210px",
              bottom: "calc(20% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            activar generación
          </div>
        </div>

        {/* Grid Optimization */}
        <div
          ref={gridRef}
          style={{
            position: "absolute",
            top: "10%",
            left: "70%",
            width: 200,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(234,179,8,0.3)",
            boxShadow:
              "0 0 16px rgba(234,179,8,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8"/>
              <path d="M12 2v4M12 18v4M2 12h4m14 0h4"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Optimización de Red
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Balanceo inteligente de carga
          </div>
        </div>

        {/* Resource Management */}
        <div
          ref={resourcesRef}
          style={{
            position: "absolute",
            top: "60%",
            left: "70%",
            width: 200,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(234,179,8,0.3)",
            boxShadow:
              "0 0 16px rgba(234,179,8,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="8" width="16" height="10" rx="2"/>
              <path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/>
              <path d="M8 18h8"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Gestión de Recursos
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Activación automática de reserva
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
        <div>• Anticipación de picos de demanda.</div>
        <div>• Redistribución automática de carga.</div>
        <div>• Activación inteligente de recursos de respaldo.</div>
      </div>
    </section>
  )
}
