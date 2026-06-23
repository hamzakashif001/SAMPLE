import { motion } from 'framer-motion'
import { pillars } from '../data/clinic'
import { fadeUp, inView, stagger } from '../lib/motion'
import SectionHeading from './SectionHeading'
import SmartImage from './SmartImage'
import Reveal from './Reveal'
import CountUp from './CountUp'

const CLINIC_IMG =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&h=1000&q=80'

export default function Philosophy() {
  return (
    <section id="clinic" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image + quote */}
          <motion.div {...inView} variants={fadeUp} className="relative">
            <div className="relative aspect-[4/5] rounded-[1.75rem] border border-bistre/10 shadow-card">
              <Reveal className="h-full w-full" rounded="1.75rem">
                <SmartImage
                  src={CLINIC_IMG}
                  alt="The calm, clinical interior of Lumière Skin Clinic"
                  className="h-full w-full"
                  fallback="linear-gradient(150deg, #2a211b 0%, #5e222c 100%)"
                />
              </Reveal>
            </div>
            <div className="absolute -bottom-6 right-4 z-20 max-w-[15rem] rounded-2xl border border-bistre/10 bg-porcelain px-6 py-5 shadow-luxe sm:-right-6">
              <p className="font-display text-[1.6rem] leading-none text-garnet">
                <CountUp value={100} suffix="%" />
              </p>
              <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-wide text-clay">
                Specialist-performed care
              </p>
            </div>
          </motion.div>

          {/* Heading + pillars */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="The clinic"
              title={
                <>
                  Clinical skin health,
                  <br />
                  <span className="italic text-garnet">elevated by aesthetics.</span>
                </>
              }
              intro="Lumière specialises in medically sound, personalised therapies. We treat the skin as the living organ it is — diagnosing first, then restoring, protecting and illuminating, so results last well beyond the appointment."
            />

            <motion.ul
              {...inView}
              variants={stagger(0.12, 0.1)}
              className="mt-12 flex flex-col divide-y divide-bistre/10 border-t border-bistre/10"
            >
              {pillars.map((p, i) => (
                <motion.li key={p.title} variants={fadeUp} className="group flex gap-6 py-6">
                  <span className="font-display text-2xl text-gold/70 transition-colors group-hover:text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-bistre">{p.title}</h3>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-clay">{p.body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
