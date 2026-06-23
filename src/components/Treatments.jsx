import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { treatmentGroups } from '../data/clinic'
import { fadeUp, inView, stagger } from '../lib/motion'
import SectionHeading from './SectionHeading'

function TreatmentCard({ item }) {
  return (
    <motion.a
      href="#visit"
      variants={fadeUp}
      className="group relative flex flex-col justify-between gap-6 rounded-2xl border border-bistre/10 bg-porcelain p-6 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="max-w-[12rem] font-display text-[1.35rem] leading-tight text-bistre">
          {item.name}
        </h4>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bistre/10 text-clay transition-all duration-300 group-hover:border-garnet group-hover:bg-garnet group-hover:text-porcelain">
          <ArrowUpRight size={15} strokeWidth={1.6} />
        </span>
      </div>
      <div>
        <span className="mb-3 block h-px w-10 origin-left scale-x-100 bg-gold transition-transform duration-500 ease-luxe group-hover:w-full" />
        <p className="text-[0.9rem] leading-relaxed text-clay">{item.note}</p>
      </div>
    </motion.a>
  )
}

export default function Treatments() {
  return (
    <section id="treatments" className="relative scroll-mt-24 bg-almond/50 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Treatments"
          title={
            <>
              A considered menu,
              <br />
              <span className="italic text-garnet">from glow to pathology.</span>
            </>
          }
          intro="Two disciplines under one roof — refined aesthetic procedures and genuine clinical dermatology. Every option is planned in consultation and tailored to your skin."
        />

        <div className="mt-16 flex flex-col gap-16">
          {treatmentGroups.map((group) => (
            <div key={group.key}>
              <motion.div
                {...inView}
                variants={stagger(0.05)}
                className="mb-8 flex flex-col gap-2 border-b border-bistre/10 pb-5 sm:flex-row sm:items-end sm:justify-between"
              >
                <motion.h3 variants={fadeUp} className="font-display text-2xl text-bistre sm:text-3xl">
                  {group.label}
                </motion.h3>
                <motion.p variants={fadeUp} className="max-w-sm text-[0.92rem] leading-relaxed text-clay">
                  {group.blurb}
                </motion.p>
              </motion.div>

              <motion.div
                {...inView}
                variants={stagger(0.07)}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.items.map((item) => (
                  <TreatmentCard key={item.name} item={item} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
