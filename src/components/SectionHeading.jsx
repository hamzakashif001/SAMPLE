import { motion } from 'framer-motion'
import { fadeUp, inView, stagger, easeLuxe, lineRise } from '../lib/motion'

// Reusable editorial heading: eyebrow, display headline, and a gold rule
// that draws itself in as the section enters view.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const ruleClass = align === 'center' ? 'mx-auto' : ''

  return (
    <motion.div
      {...inView}
      variants={stagger(0.12)}
      className={`flex max-w-2xl flex-col gap-5 ${alignClass}`}
    >
      <motion.span variants={fadeUp} className={`eyebrow ${light ? 'text-gold-soft' : ''}`}>
        {eyebrow}
      </motion.span>

      <div className="flex flex-col gap-4">
        <span className="block overflow-hidden pb-[0.1em]">
          <motion.h2
            variants={lineRise}
            className={`text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.1rem] ${
              light ? 'text-porcelain' : 'text-bistre'
            }`}
          >
            {title}
          </motion.h2>
        </span>
        <motion.span
          aria-hidden="true"
          className={`rule-draw block h-px w-24 origin-left bg-gold ${ruleClass}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: easeLuxe, delay: 0.15 }}
        />
      </div>

      {intro && (
        <motion.p
          variants={fadeUp}
          className={`max-w-xl text-base leading-relaxed sm:text-[1.05rem] ${
            light ? 'text-porcelain/70' : 'text-clay'
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
