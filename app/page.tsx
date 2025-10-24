'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Consultoria from './components/Consultoria'
import WorkshopsExpanded from './components/WorkshopsExpanded'
import CasosSectoriales from './components/CasosSectoriales'
import Filosofia from './components/Filosofia'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './i18n/LanguageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-grafito">
        <Navbar />
        <Hero />
        <Consultoria />
        <WorkshopsExpanded />
        <CasosSectoriales />
        <Filosofia />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}

