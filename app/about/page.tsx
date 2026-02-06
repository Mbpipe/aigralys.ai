'use client';

import { motion } from 'framer-motion';
import HeroSlowMoment from '../components/HeroSlowMoment';
import RitualBlock from '../components/RitualBlock';

export default function AboutPage() {
  return (
    <main className="bg-charcoal">
      {/* Hero */}
      <HeroSlowMoment
        title="Filosofía de la Dignidad"
        subtitle="Nuestro manifiesto"
        imageSrc="https://images.unsplash.com/photo-1551801841-ecad875a5142?w=1920&q=80"
        height="tall"
      />

      {/* Introduction */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-10 text-lg text-warm-white/70 leading-[1.8]"
        >
          <p className="font-serif text-4xl md:text-5xl text-warm-white leading-tight">
            Dignitas no es una tienda.<br />Es una declaración.
          </p>

          <p>
            En un mundo obsesionado con la velocidad, defendemos la lentitud. En una cultura
            ahogada en opciones, ofrecemos curaduría. En una era de lo desechable, presentamos
            objetos que perduran.
          </p>

          <p>
            Cada artículo aquí ha sido elegido no por su precio, sino por su historia. Por
            las manos que lo crearon. Por el ritual que permite. Por la forma en que envejecerá
            contigo.
          </p>

          <p>
            Servimos a hombres que comprenden que el lujo no es ruidoso. No se anuncia.
            Solo es reconocido por quienes saben.
          </p>

          <p className="font-serif text-2xl text-warm-white/90 pt-6">
            La dignidad no se compra—se cultiva.
          </p>
        </motion.div>
      </section>

      {/* Principles */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-charcoal-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-20 text-center"
          >
            <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-6">Principios</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-white mb-6 tracking-tight">
              Lo que creemos
            </h2>
            <p className="text-warm-white/60 max-w-2xl mx-auto">
              Estos principios guían cada decisión, cada selección, cada relación que construimos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <RitualBlock
              number="01"
              title="Oficio sobre comercio"
              description="Elegimos creadores, no fabricantes. Artesanos que aún trabajan con sus manos. Empresas que se niegan a tomar atajos. La calidad toma tiempo—respetamos eso."
            />
            <RitualBlock
              number="02"
              title="Historia sobre estatus"
              description="Un Seiko con la inscripción de tu abuelo importa más que un Rolex comprado para impresionar a extraños. Cada objeto debe llevar significado más allá de su precio."
            />
            <RitualBlock
              number="03"
              title="Pocos sobre muchos"
              description="No ofrecemos 10,000 SKUs. Ofrecemos una docena de puros, un puñado de relojes, una selección de fragancias. Menos opciones, más intención."
            />
            <RitualBlock
              number="04"
              title="Ritual sobre transacción"
              description="No estamos aquí para venderte cosas. Estamos aquí para ayudarte a construir una vida de momentos intencionales. La compra es secundaria."
            />
          </div>
        </div>
      </section>

      {/* The Curator Vision */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-8">Una nota</p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white mb-12 tracking-tight">
            Del curador
          </h2>
          <div className="space-y-8 text-lg text-warm-white/70 leading-[1.8]">
            <p>
              Creé Dignitas porque estaba cansado de comprar. Cansado de desplazarme. Cansado
              de recomendaciones algorítmicas de cosas que no necesitaba.
            </p>
            <p>
              Quería volver a la sensación que tuve cuando entré por primera vez a un verdadero
              club de caballeros—el tipo con sillas de cuero y paneles de roble. El tipo donde
              cada objeto tenía peso. Tenía historia.
            </p>
            <p>
              Este sitio es esa sensación, traducida a la era moderna. Es un destino,
              no una transacción. Un lugar que visitas cuando estás listo para ir más despacio.
            </p>
            <p className="font-serif text-3xl text-warm-white pt-8">
              Bienvenido. Tómate tu tiempo.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-charcoal-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-8 border border-gold/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-warm-white mb-4">Atemporal</h3>
              <p className="text-warm-white/60 leading-relaxed">
                Buscamos objetos que importarán en 20 años. Las tendencias se desvanecen. La calidad perdura.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-8 border border-gold/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-warm-white mb-4">Autenticado</h3>
              <p className="text-warm-white/60 leading-relaxed">
                Cada artículo es verificado. Cada afirmación es verdadera. Tu confianza no es negociable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-8 border border-gold/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-warm-white mb-4">Intencional</h3>
              <p className="text-warm-white/60 leading-relaxed">
                Nada aquí es arbitrario. Cada objeto es elegido con propósito y cuidado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-charcoal-light to-charcoal">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-warm-white mb-8 tracking-tight">
              Únete al círculo
            </h2>
            <p className="text-warm-white/70 text-lg mb-14 leading-relaxed">
              Esto no es para todos. Eso es por diseño. Si entiendes, entiendes.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center space-x-4 px-10 py-5 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-warm-white transition-all duration-700 tracking-[0.15em] text-sm group"
            >
              <span>EXPLORAR LA COLECCIÓN</span>
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
