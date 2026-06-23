import { motion } from 'framer-motion'
import { specialists } from '../data/clinic'
import { fadeUp, inView, stagger } from '../lib/motion'
import SectionHeading from './SectionHeading'

function SpecialistCard({ doc }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-bistre/10 bg-porcelain p-8 transition-shadow duration-500 hover:shadow-luxe sm:p-10"
    >
      {/* soft glow that warms on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-center gap-5">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-almond font-display text-xl italic text-garnet">
          {doc.initials}
        </span>
        <div>
          <h3 className="font-display text-2xl leading-tight text-bistre">{doc.name}</h3>
          <p className="mt-1 font-sans text-[0.78rem] uppercase tracking-wide text-gold-deep">
            {doc.credentials}
          </p>
        </div>
      </div>

      <p className="mt-6 font-sans text-[0.95rem] text-clay">{doc.role}</p>

      <div className="mt-7 h-px w-full bg-bistre/10" />

      <div className="mt-6">
        <p className="mb-4 font-sans text-[0.68rem] uppercase tracking-eyebrow text-clay">
          Areas of focus
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {doc.focus.map((f) => (
            <li
              key={f}
              className="rounded-full border border-bistre/10 bg-almond/60 px-3.5 py-1.5 font-sans text-[0.8rem] text-bistre/80 transition-colors duration-300 group-hover:border-gold/30"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Specialists() {
  return (
    <section id="specialists" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="The specialists"
            title={
              <>
                Care from qualified
                <br />
                <span className="italic text-garnet">hands, every time.</span>
              </>
            }
            intro="At Lumière, your treatment is never handed to a technician. It is performed by registered specialists who do this work every day."
          />
        </div>

        <motion.div
          {...inView}
          variants={stagger(0.14)}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {specialists.map((doc) => (
            <SpecialistCard key={doc.name} doc={doc} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
