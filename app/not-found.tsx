import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-charcoal">
      <div className="text-center max-w-2xl">
        <h1 className="font-serif text-9xl text-gold/80 mb-8 tracking-tight">404</h1>
        <h2 className="font-serif text-4xl md:text-5xl text-warm-white mb-8 tracking-tight">
          Este camino no existe
        </h2>
        <p className="text-lg text-warm-white/60 mb-14 leading-relaxed">
          Como una cosecha rara, algunas cosas no pueden ser encontradas. Regresa a territorio familiar.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-4 px-10 py-5 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-warm-white transition-all duration-700 tracking-[0.15em] text-sm group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>REGRESAR AL INICIO</span>
        </Link>
      </div>
    </main>
  );
}
