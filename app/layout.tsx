import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aigralys - IA Agéntica para ecosistemas complejos',
  description: 'Consultoría y Workshops en Inteligencia Artificial Agéntica. IA aplicada al negocio real.',
  keywords: 'IA Agéntica, Workshops IA, Consultoría AI, Agentes Inteligentes, Aigralys',
  authors: [{ name: 'Aigralys' }],
  openGraph: {
    title: 'Aigralys - IA Agéntica para ecosistemas complejos',
    description: 'Consultoría y Workshops en Inteligencia Artificial Agéntica.',
    url: 'https://www.aigralys.ai',
    siteName: 'Aigralys',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aigralys - IA Agéntica para ecosistemas complejos',
    description: 'Consultoría y Workshops en Inteligencia Artificial Agéntica.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1C1C1E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

