import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// A CTA that subtly pulls toward the cursor (magnetic) and slides an arrow on
// hover. Falls back to a plain button when the pointer is coarse or the user
// prefers reduced motion.
export default function MagneticButton({ href, children, variant = 'primary', className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 })

  const fine =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  const enabled = !reduce && fine

  const onMove = (e) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 16)
    y.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 12)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    variant === 'primary'
      ? 'bg-bistre text-porcelain hover:bg-garnet'
      : 'border border-bistre/25 text-bistre hover:border-gold hover:text-gold-deep'

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-sans text-[0.82rem] font-medium uppercase tracking-wide transition-colors duration-300 ease-luxe ${base} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-flex w-0 -translate-x-2 items-center overflow-hidden opacity-0 transition-all duration-300 ease-luxe group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight size={15} strokeWidth={1.8} />
      </span>
    </motion.a>
  )
}
