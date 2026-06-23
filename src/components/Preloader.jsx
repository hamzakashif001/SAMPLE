import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { easeLuxe } from '../lib/motion'

const maskRise = {
  hidden: { y: '110%' },
  show: (i = 0) => ({
    y: '0%',
    transition: { duration: 0.85, ease: easeLuxe, delay: 0.15 + i * 0.12 },
  }),
}

// Luxury intro curtain: the wordmark draws itself in, then the panel lifts
// away to reveal the page. onReveal fires as the lift begins (so the hero can
// start rising into the gap); onDone fires once the curtain has fully cleared.
export default function Preloader({ onReveal, onDone }) {
  const [lift, setLift] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => setLift(true), 1450)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (lift) {
      document.body.style.overflow = ''
      onReveal?.()
    }
  }, [lift, onReveal])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-porcelain"
      initial={{ y: 0 }}
      animate={lift ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease: easeLuxe }}
      onAnimationComplete={() => lift && onDone?.()}
      aria-hidden="true"
    >
      <motion.span
        className="eyebrow mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Dermatology &amp; Aesthetics
      </motion.span>

      <div className="flex items-baseline gap-3 overflow-hidden">
        <span className="overflow-hidden">
          <motion.span
            className="block font-display text-5xl text-bistre sm:text-6xl"
            custom={0}
            variants={maskRise}
            initial="hidden"
            animate="show"
          >
            Lumière
          </motion.span>
        </span>
        <span className="overflow-hidden">
          <motion.span
            className="block font-display text-5xl italic text-garnet sm:text-6xl"
            custom={1}
            variants={maskRise}
            initial="hidden"
            animate="show"
          >
            Skin
          </motion.span>
        </span>
      </div>

      <motion.span
        className="mt-6 block h-px w-40 origin-center bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: easeLuxe, delay: 0.7 }}
      />

      <motion.span
        className="mt-5 font-sans text-[0.7rem] uppercase tracking-eyebrow text-clay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Islamabad
      </motion.span>
    </motion.div>
  )
}
