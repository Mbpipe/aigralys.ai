import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Dignitas — Refugio de Lujo Masculino',
  description: 'Un refugio digital curado para hombres que comprenden que la dignidad no se compra—se cultiva. Puros premium, relojes, perfumes árabes y accesorios nobles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-charcoal font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
