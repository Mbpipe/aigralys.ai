import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/withBasePath';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src={withBasePath('/dignitas-logo-v2.png')}
                  alt="Dignitas"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
              <h3 className="font-serif text-3xl tracking-[0.2em] text-warm-white opacity-90">
                DIGNITAS
              </h3>
            </div>
            <p className="text-warm-white/50 leading-relaxed max-w-md">
              Un refugio digital para hombres que comprenden que la dignidad no se compra—se cultiva.
              Cada objeto, un ritual. Cada momento, intencional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold/80 mb-6 uppercase">Explorar</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="text-warm-white/50 hover:text-gold transition-colors duration-500">
                  Colección
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-warm-white/50 hover:text-gold transition-colors duration-500">
                  Diario
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-warm-white/50 hover:text-gold transition-colors duration-500">
                  Filosofía
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold/80 mb-6 uppercase">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contacto@dignitas.club" className="text-warm-white/50 hover:text-gold transition-colors duration-500">
                  contacto@dignitas.club
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-white/50 hover:text-gold transition-colors duration-500">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/5 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-warm-white/30 tracking-wider">
          <p>© 2026 Dignitas. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Creado con intención.</p>
        </div>
      </div>
    </footer>
  );
}
