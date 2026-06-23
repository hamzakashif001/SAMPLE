import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { easeLuxe } from '../lib/motion'

// Wraps content (usually an image) and unveils it as it enters view:
// a gold panel wipes away while the content settles from a gentle zoom.
export default function Reveal({ children, className = '', delay = 0, rounded = '1.5rem' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ borderRadius: rounded }}>
      <motion.div
        initial={{ scale: 1.14 }}
        animate={inView ? { scale: 1 } : { scale: 1.14 }}
        transition={{ duration: 1.3, ease: easeLuxe, delay }}
        className="h-full w-full"
      >
        {children}
      </motion.div>

      {/* gold curtain that wipes upward to reveal the image */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={inView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.9, ease: easeLuxe, delay }}
        style={{ originY: 1, background: 'linear-gradient(180deg,#cba86a,#b8924f)' }}
        className="pointer-events-none absolute inset-0 z-10"
      />
    </div>
  )
}
