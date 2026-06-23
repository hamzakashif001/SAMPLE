import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Philosophy from './components/Philosophy'
import Treatments from './components/Treatments'
import Specialists from './components/Specialists'
import LaunchOffer from './components/LaunchOffer'
import FirstClient from './components/FirstClient'
import Contact from './components/Contact'
import Footer from './components/Footer'

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function App() {
  // Skip the intro entirely for reduced-motion users — the page is ready at once.
  const [ready, setReady] = useState(prefersReduced)
  const [showIntro, setShowIntro] = useState(!prefersReduced)

  return (
    <div className="relative min-h-screen bg-porcelain">
      <AnimatePresence>
        {showIntro && (
          <Preloader onReveal={() => setReady(true)} onDone={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <Philosophy />
        <Treatments />
        <Specialists />
        <LaunchOffer />
        <FirstClient />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
