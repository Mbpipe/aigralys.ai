'use client'

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function FlowTurismo() {
  const guestRef = useRef(null)
  const receptionRef = useRef(null)
  const pricingRef = useRef(null)
  const bookingRef = useRef(null)

  const particleGuestToReception = useRef(null)
  const particleReceptionToPricing = useRef(null)
  const particleReceptionToBooking = useRef(null)

  useEffect(() => {
    // Pulse animation on nodes
    [guestRef, receptionRef, pricingRef, bookingRef].forEach((r, i) => {
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

    // Animate particles along paths
    travel(particleGuestToReception.current, [{x: 110, y: -20}, {x: 220, y: -40}], 0.0)
    travel(particleReceptionToPricing.current, [{x: 110, y: -60}, {x: 220, y: -120}], 0.4)
    travel(particleReceptionToBooking.current, [{x: 110, y: 60}, {x: 220, y: 120}], 0.8)
  }, [])

  return (
    <section
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(0,255,200,0.07) 0%, rgba(0,0,0,0) 70%), #0b0e16",
        borderRadius: "1rem",
        padding: "clamp(1rem, 3vw, 2rem)",
        color: "#fff",
        boxShadow:
          "0 30px 120px rgba(0,255,200,0.08),0 0 200px rgba(255,0,180,0.08)",
        position: "relative",
        overflow: "auto",
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
            border: "1px solid rgba(0,136,255,0.4)",
            color: "rgb(170,200,255)",
            background:
              "radial-gradient(circle at 0% 0%, rgba(0,136,255,0.2) 0%, rgba(0,0,0,0) 70%)",
            marginBottom: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          TURISMO & HOTELERÍA
        </div>

        <div
          style={{
            fontSize: "1.8rem",
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#fff",
            textShadow: "0 0 24px rgba(0,255,200,0.4)",
            marginBottom: "0.75rem",
          }}
        >
          Agentes que trabajan 24/7 por tu huésped
        </div>

        <div
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.4,
            color: "#9fb2ff",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Recepción automática, tarifas dinámicas y mensajería inmediata, sin
          esperar al turno siguiente.
        </div>
      </div>

      {/* Diagram area */}
      <div
        className="overflow-x-auto md:overflow-visible"
        style={{
          position: "relative",
          minHeight: "clamp(500px, 60vh, 700px)",
          minWidth: "600px",
          borderRadius: "1rem",
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.07) 0%, rgba(0,0,0,0) 70%)",
          boxShadow:
            "inset 0 0 40px rgba(0,255,200,0.12),0 0 120px rgba(255,0,180,0.12)",
          zIndex: 1,
        }}
      >
        {/* Guest node */}
        <div
          ref={guestRef}
          style={{
            position: "absolute",
            top: "58%",
            left: "8%",
            width: 180,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(0,255,200,0.3)",
            color: "#fff",
            boxShadow:
              "0 0 16px rgba(0,255,200,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="7" r="4"/>
              <path d="M4 21c0-6 3.6-9 8-9s8 3 8 9"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Huésped</div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Consulta / Reserva
          </div>

          {/* SVG curved line to reception */}
          <svg
            style={{
              position: "absolute",
              right: "-80px",
              top: "30%",
              width: "80px",
              height: "60px",
              overflow: "auto",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(0,255,200,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(0,255,200,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow1">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 0 30 Q 40 30, 80 10"
              fill="none"
              stroke="url(#lineGrad1)"
              strokeWidth="2"
              filter="url(#glow1)"
            />
          </svg>

          {/* Particle */}
          <div
            ref={particleGuestToReception}
            style={{
              position: "absolute",
              top: "calc(40% - 4px)",
              right: "-64px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(0,255,200,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(0,255,200,0.8),0 0 30px rgba(255,0,180,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-140px",
              top: "calc(40% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            "¿Hay lugar mañana?"
          </div>
        </div>

        {/* Reception Agent (central node) */}
        <div
          ref={receptionRef}
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            width: 220,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(20,25,40,0.9) 0%, rgba(10,12,20,0.9) 60%)",
            border: "1px solid rgba(0,255,200,0.5)",
            color: "#fff",
            boxShadow:
              "0 0 24px rgba(0,255,200,0.4),0 60px 100px rgba(0,0,0,0.9)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <circle cx="12" cy="10" r="2" fill="rgba(0,255,200,0.3)"/>
              <path d="M8 16h8M9 19h6" stroke="rgba(0,255,200,0.5)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            Agente Recepción 24/7
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Responde, confirma, personaliza
          </div>

          {/* SVG line to pricing */}
          <svg
            style={{
              position: "absolute",
              right: "-80px",
              top: "10%",
              width: "80px",
              height: "80px",
              overflow: "auto",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(0,255,200,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(0,255,200,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow2">
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
              stroke="url(#lineGrad2)"
              strokeWidth="2"
              filter="url(#glow2)"
            />
          </svg>

          {/* Particle to pricing */}
          <div
            ref={particleReceptionToPricing}
            style={{
              position: "absolute",
              top: "calc(15% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(0,255,200,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(0,255,200,0.8),0 0 30px rgba(255,0,180,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-160px",
              top: "calc(15% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            Ajustar tarifa
          </div>

          {/* SVG line to booking */}
          <svg
            style={{
              position: "absolute",
              right: "-80px",
              bottom: "10%",
              width: "80px",
              height: "80px",
              overflow: "auto",
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgba(0,255,200,0)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgba(0,255,200,0.7)", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow3">
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
              stroke="url(#lineGrad3)"
              strokeWidth="2"
              filter="url(#glow3)"
            />
          </svg>

          {/* Particle to booking */}
          <div
            ref={particleReceptionToBooking}
            style={{
              position: "absolute",
              bottom: "calc(15% - 4px)",
              right: "-84px",
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #fff 0%, rgba(0,255,200,0.7) 60%, transparent 70%)",
              boxShadow:
                "0 0 10px rgba(0,255,200,0.8),0 0 30px rgba(255,0,180,0.4)",
              opacity: 0,
            }}
          />
          
          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              right: "-200px",
              bottom: "calc(15% - 10px)",
              fontSize: "0.7rem",
              color: "#9fb2ff",
              whiteSpace: "nowrap",
              zIndex: 100,
            }}
          >
            Registrar reserva
          </div>
        </div>

        {/* Pricing Agent */}
        <div
          ref={pricingRef}
          style={{
            position: "absolute",
            top: "20%",
            left: "70%",
            width: 200,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(0,255,200,0.3)",
            boxShadow:
              "0 0 16px rgba(0,255,200,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8"/>
              <path d="M12 6v12M8 10h8M8 14h8"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Agente Tarifas
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Precio dinámico según demanda
          </div>
        </div>

        {/* Booking Engine */}
        <div
          ref={bookingRef}
          style={{
            position: "absolute",
            top: "65%",
            left: "70%",
            width: 200,
            borderRadius: "1rem",
            padding: "1rem",
            background:
              "linear-gradient(160deg, rgba(35,40,55,0.9) 0%, rgba(20,22,30,0.9) 60%)",
            border: "1px solid rgba(0,255,200,0.3)",
            boxShadow:
              "0 0 16px rgba(0,255,200,0.25),0 50px 80px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="5" width="16" height="14" rx="2"/>
              <path d="M4 9h20M12 9v10"/>
            </svg>
          </div>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
            Motor de Reservas
          </div>
          <div style={{ fontSize: "0.8rem", color: "#9fb2ff" }}>
            Calendario, check-in, registro
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
        <div>• Operación continua, sin esperas.</div>
        <div>• Experiencia personalizada en cada mensaje.</div>
        <div>• Datos listos para tu PMS.</div>
      </div>
    </section>
  )
}
