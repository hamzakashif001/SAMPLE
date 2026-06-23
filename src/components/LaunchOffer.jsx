import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { offer } from '../data/clinic'
import { fadeUp, inView, stagger } from '../lib/motion'

export default function LaunchOffer() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-28">
      {/* glow on dark */}
      <div className="glow left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fbf7f1 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="container-luxe relative">
        <motion.div
          {...inView}
          variants={stagger(0.12)}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 font-sans text-[0.68rem] font-medium uppercase tracking-eyebrow text-gold-soft"
          >
            {offer.badge}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.4rem] leading-[1.05] text-cream sm:text-[3.4rem]"
          >
            {offer.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg"
          >
            {offer.detail}
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-9 flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:flex-row"
          >
            {offer.points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-cream/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-ink">
                  <Check size={12} strokeWidth={2.4} />
                </span>
                <span className="font-sans text-[0.9rem]">{point}</span>
              </li>
            ))}
          </motion.ul>

          <motion.a
            variants={fadeUp}
            href="#visit"
            className="mt-11 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-sans text-[0.82rem] font-medium uppercase tracking-wide text-ink transition-colors duration-300 ease-luxe hover:bg-gold-soft"
          >
            Claim the launch offer
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
