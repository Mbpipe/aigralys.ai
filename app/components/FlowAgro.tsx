'use client'

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function FlowAgro() {
  const imageRef = useRef(null)
  const analysisRef = useRef(null)
  const zoneRef = useRef(null)
  const countRef = useRef(null)

  const particleImageToAnalysis = useRef(null)
  const particleAnalysisToZone = useRef(null)
  const particleAnalysisToCount = useRef(null)

  useEffect(() => {
    // Pulse animation on nodes
    [imageRef, analysisRef, zoneRef, countRef].forEach((r, i) => {
      gsap.to(r.current, {
        boxShadow:
          i === 1
            ? "0 0 24px rgba(0,255,200,0.6), 0 0 80px rgba(0,255,200,0.15)"
            : "0 0 16px rgba(0,255,200,0.3), 0 0 60px rgba(0,255,200,0.07)",
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
    travel(particleImageToAnalysis.current, [{x: 110, y: 20}, {x: 220, y: 40}], 0.0)
    travel(particleAnalysisToZone.current, [{x: 110, y: -60}, {x: 220, y: -120}], 0.4)
    travel(particleAnalysisToCount.current, [{x: 110, y: 60}, {x: 220, y: 120}], 0.8)
  }, [])

  return (
    <section
      className="overflow-x-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.07) 0%, rgba(0,0,0,0) 70%), #0b0e16",
        borderRadius: "1rem",
        padding: "clamp(1rem, 3vw, 2rem)",
        color: "#fff",
        boxShadow:
          "0 30px 120px rgba(34,197,94,0.08),0 0 200px rgba(34,197,94,0.08)",
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
            border: "1px solid rgba(34,197,94,0.4)",
            color: "rgb(134,239,172)",
            background:
              "radial-gradient(circle at 0% 0%, rgba(34,197,94,0.2) 0%, rgba(0,0,0,0) 70%)",
            marginBottom: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          AGRO
        </div>

        <div
          style={{
            fontSize: "1.8rem",
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#fff",
            textShadow: "0 0 24px rgba(34,197,94,0.4)",
            marginBottom: "0.75rem",
          }}
        >
          Visión inteligente del campo
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
          Análisis de imágenes satelitales y drones para detectar zonas de estrés,
          contar ganado y optimizar tratamientos.
        </div>
      </div>

      {/* Diagram area */}
      <div
        style={{
          position: "relative",
          minHeight: "clamp(500px, 60vh, 700px)",
          borderRadius: "1rem",
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.07) 0%, rgba(0,0,0,0) 70%)",
          boxShadow:
            "inset 0 0 40px rgba(34,197,94,0.12),0 0 120px rgba(34,197,94,0.12)",
          overflow: "visible",
          zIndex: 1,
        }}
      >
        {/* Aerial Image node */}
        <div
          ref={imageRef}
          className="hover:scale-105 transition-transform"
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: "clamp(160px, 15vw, 220px)",
            borderRadius: "1rem",
            padding: "clamp(0.5rem, 1.5vw, 1rem)",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#fff",
            boxShadow:
              "0 0 16px rgba(34,197,94,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 10v6M1 12h6m10 0h6"/>
              <circle cx="12" cy="12" r="8"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Imagen Aérea</div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Satélite / Drone / Cámara
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
              <linearGradient id="agroGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(34,197,94,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(34,197,94,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="agroGlow1">
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
              stroke="url(#agroGrad1)"
              strokeWidth="2"
              filter="url(#agroGlow1)"
            />
          </svg>

          {/* Particle */}
          <div
            ref={particleImageToAnalysis}
            style={{
              position: "absolute",
              bottom: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(34,197,94,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(34,197,94,0.8),0 0 30px rgba(34,197,94,0.4)",
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

        {/* Central Analysis Agent */}
        <div
          ref={analysisRef}
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            width: "clamp(180px, 17vw, 240px)",
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(20,25,40,0.9) 0%, rgba(10,12,20,0.9) 60%)",
            border: "1px solid rgba(34,197,94,0.5)",
            color: "#fff",
            boxShadow:
              "0 0 24px rgba(34,197,94,0.4),0 60px 100px rgba(0,0,0,0.9)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <circle cx="12" cy="10" r="2" fill="rgba(34,197,94,0.3)"/>
              <path d="M8 16h8M9 19h6" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Agente Análisis de Campo
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Detecta plagas, estrés hídrico, nutrición
          </div>

          {/* SVG line to zones */}
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
              <linearGradient id="agroGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(34,197,94,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(34,197,94,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="agroGlow2">
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
              stroke="url(#agroGrad2)"
              strokeWidth="2"
              filter="url(#agroGlow2)"
            />
          </svg>

          {/* Particle to zones */}
          <div
            ref={particleAnalysisToZone}
            style={{
              position: "absolute",
              top: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(34,197,94,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(34,197,94,0.8),0 0 30px rgba(34,197,94,0.4)",
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
            mapear tratamiento
          </div>

          {/* SVG line to count */}
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
              <linearGradient id="agroGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(34,197,94,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(34,197,94,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="agroGlow3">
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
              stroke="url(#agroGrad3)"
              strokeWidth="2"
              filter="url(#agroGlow3)"
            />
          </svg>

          {/* Particle to count */}
          <div
            ref={particleAnalysisToCount}
            style={{
              position: "absolute",
              bottom: "calc(20% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(34,197,94,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(34,197,94,0.8),0 0 30px rgba(34,197,94,0.4)",
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
            contar animales
          </div>
        </div>

        {/* Treatment Zones */}
        <div
          ref={zoneRef}
          style={{
            position: "absolute",
            top: "10%",
            left: "70%",
            width: "clamp(150px, 14vw, 200px)",
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(34,197,94,0.3)",
            boxShadow:
              "0 0 16px rgba(34,197,94,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l4-4 4 4 6-6 7 7"/>
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Zonas a Tratar
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Mapeo de intervenciones
          </div>
        </div>

        {/* Livestock Count */}
        <div
          ref={countRef}
          style={{
            position: "absolute",
            top: "60%",
            left: "70%",
            width: "clamp(150px, 14vw, 200px)",
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(34,197,94,0.3)",
            boxShadow:
              "0 0 16px rgba(34,197,94,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="8" cy="10" r="2"/>
              <circle cx="16" cy="10" r="2"/>
              <path d="M8 12h8M8 16h8M6 20h12"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Conteo de Ganado
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Inventario automático
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
        <div>• Detección temprana de problemas fitosanitarios.</div>
        <div>• Optimización de insumos y tratamientos.</div>
        <div>• Inventario ganadero en tiempo real.</div>
      </div>
    </section>
  )
}
