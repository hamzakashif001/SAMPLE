import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUp, inView, stagger } from '../lib/motion'

// The clinic has just launched and is gathering its first reviews. Rather than
// invent testimonials, we make the absence of them an honest, inviting feature.
export default function FirstClient() {
  return (
    <section className="relative scroll-mt-24 py-24 lg:py-28">
      <div className="container-luxe">
        <motion.div
          {...inView}
          variants={stagger(0.12)}
          className="relative mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-[2rem] border border-bistre/10 bg-almond/60 px-8 py-16 text-center sm:px-14"
        >
          <div className="glow -top-10 left-1/2 h-72 w-72 -translate-x-1/2 opacity-50" aria-hidden="true" />

          <motion.span
            variants={fadeUp}
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-porcelain text-garnet"
          >
            <Quote size={22} strokeWidth={1.5} />
          </motion.span>

          <motion.span variants={fadeUp} className="eyebrow relative mt-7">
            Now welcoming our first clients
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative mt-5 font-display text-[2rem] leading-[1.12] text-bistre sm:text-[2.7rem]"
          >
            Be our first <span className="italic text-garnet">success story.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative mt-6 max-w-xl text-base leading-relaxed text-clay"
          >
            We have just opened our doors and are building our reputation one result at a time.
            Come in for a complimentary consultation — your transformation could be the first
            we are proud to share.
          </motion.p>

          <motion.a variants={fadeUp} href="#visit" className="btn-primary relative mt-9">
            Start your consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
