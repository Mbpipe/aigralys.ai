'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import EditorialSection from './components/EditorialSection';
import RitualBlock from './components/RitualBlock';
import PremiumProductCard from './components/PremiumProductCard';
import { getFeaturedProducts } from '@/lib/products';

export default function HomePage() {
  const featured = getFeaturedProducts();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <main className="bg-charcoal">
      {/* CINEMATIC ENTRY - Secret Club Moment */}
      <div ref={ref} className="relative h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/dignitas' : ''}/assets/editorial/hero-background.jpg)`,
            }}
          />
          {/* Darker, more atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
        </motion.div>

        {/* Entry Content - Minimal, Powerful */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          {/* Slow reveal - Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 relative opacity-80">
              <img src="/dignitas-logo-v2.png" alt="Dignitas" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Main Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white mb-8 leading-tight tracking-tight"
          >
            La presencia<br />se elige
          </motion.h1>

          {/* Subtitle - Noble Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.8 }}
            className="text-lg md:text-xl text-warm-white/60 max-w-2xl mb-12 tracking-wide"
          >
            Un refugio para hombres que comprenden que la dignidad no se compra—se cultiva.
          </motion.p>

          {/* Scroll Indicator - Subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
            className="absolute bottom-12"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs tracking-[0.2em] text-warm-white/40 uppercase">Descender</span>
              <svg
                className="w-6 h-6 text-gold/50 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MANIFESTO - Strong Philosophical Statements */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-charcoal-light">
        <div className="max-w-5xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5 }}
            className="text-center"
          >
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-white leading-[1.4] tracking-tight">
              El tiempo pertenece<br />a quienes se detienen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-white leading-[1.4] tracking-tight">
              El ritual<br />define el carácter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-center"
          >
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-white leading-[1.4] tracking-tight">
              La elegancia<br />no grita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RITUAL MOMENTS - Editorial Discovery */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center"
        >
          <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-6">Momentos</p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white tracking-tight">
            Los rituales del hombre digno
          </h2>
        </motion.div>

        {/* Cigars - Ritual of Fire */}
        <div className="mb-40">
          <EditorialSection
            title="El ritual del fuego"
            description="Siete años de reposo. Tierra volcánica. La lenta combustión de la contemplación. Esto no es fumar—es ceremonia."
            imageSrc="/assets/editorial/hero-puros.jpg"
            imagePosition="left"
            link="/shop?category=cigars"
            linkText="Descubrir puros"
          />
        </div>

        {/* Watches - Ritual of Time */}
        <div className="mb-40">
          <EditorialSection
            title="El latido mecánico"
            description="El tiempo debe sentirse, no solo verse. Precisión suiza. Artesanía japonesa. Cada tic, un recordatorio de que lo fino se mueve despacio."
            imageSrc="/assets/editorial/hero-relojes.jpg"
            imagePosition="right"
            link="/shop?category=watches"
            linkText="Explorar relojes"
          />
        </div>

        {/* Perfumes - Ritual of Presence */}
        <div className="mb-40">
          <EditorialSection
            title="La memoria del aroma"
            description="Oud de Assam. Tabaco de París. Una gota detrás de la oreja. El aroma se revela lentamente—como la confianza."
            imageSrc="/assets/editorial/hero-perfumes.jpg"
            imagePosition="left"
            link="/shop?category=perfumes"
            linkText="Descubrir fragancias"
          />
        </div>

        {/* Destilados - Ritual of Spirit */}
        <div className="mb-40">
          <EditorialSection
            title="El espíritu destilado"
            description="Dieciséis años en barrica. Cincuenta y cuatro meses sobre lías. Celebración silenciosa. El tiempo se saborea, no se apresura."
            imageSrc="/assets/destilados/whisky-hero-01.jpg"
            imagePosition="right"
            link="/shop?category=destilados"
            linkText="Explorar destilados"
          />
        </div>
      </section>

      {/* PRINCIPLES - The Code */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-charcoal-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-20 text-center"
          >
            <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-6">Código</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-white mb-6 tracking-tight">
              Los principios de Dignitas
            </h2>
            <p className="text-warm-white/60 max-w-2xl mx-auto">
              Cuatro verdades que guían cada selección en nuestra colección
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <RitualBlock
              number="01"
              title="Artesanía sobre velocidad"
              description="Cada objeto es elegido por cómo fue hecho, no por cuán rápido. Buscamos cosas que llevan las manos de maestros."
            />
            <RitualBlock
              number="02"
              title="Historia sobre estatus"
              description="Un reloj que cuenta la historia de tu abuelo importa más que uno que grita riqueza. Confianza silenciosa."
            />
            <RitualBlock
              number="03"
              title="Ritual sobre transacción"
              description="Encender un puro. Dar cuerda a un reloj. Estos no son compras—son invitaciones a pausar."
            />
            <RitualBlock
              number="04"
              title="Atemporal sobre tendencias"
              description="La moda se desvanece. El estilo perdura. Cada objeto aquí importará en 20 años."
            />
          </div>
        </div>
      </section>

      {/* FEATURED - Subtle Discovery */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center"
        >
          <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-6">Selección limitada</p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white tracking-tight">
            Curado para ti
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {featured.map((product, index) => (
            <PremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* FINAL INVITATION - Subtle, Not Aggressive */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-charcoal-light to-charcoal">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white mb-8 tracking-tight leading-tight">
              Cada objeto cuenta<br />una historia
            </h2>
            <p className="text-warm-white/60 text-lg mb-14 leading-relaxed">
              Cada ritual importa. Descubre lo que habla contigo.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center space-x-4 px-10 py-5 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-warm-white transition-all duration-700 tracking-[0.15em] text-sm group"
            >
              <span>ENTRAR A LA COLECCIÓN</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
