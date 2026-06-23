import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle, Check } from 'lucide-react'
import { clinic, treatmentGroups } from '../data/clinic'
import { fadeUp, inView, stagger } from '../lib/motion'
import SectionHeading from './SectionHeading'

const treatmentOptions = treatmentGroups.flatMap((g) => g.items.map((i) => i.name))

function DetailRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-almond/60 text-garnet">
        <Icon size={17} strokeWidth={1.6} />
      </span>
      <div>
        <p className="font-sans text-[0.66rem] uppercase tracking-eyebrow text-clay">{label}</p>
        <div className="mt-1 text-[0.98rem] text-bistre">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', treatment: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend needed: compose a WhatsApp message to the clinic — a real,
    // working booking flow that opens the user's WhatsApp with details prefilled.
    const text = encodeURIComponent(
      `Hello Lumière, I'd like to book a free consultation.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        (form.treatment ? `Interested in: ${form.treatment}\n` : '') +
        (form.message ? `Note: ${form.message}` : ''),
    )
    const number = clinic.phoneRaw.replace(/[^0-9]/g, '')
    window.open(`https://wa.me/${number}?text=${text}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section id="visit" className="relative scroll-mt-24 bg-almond/50 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Visit Lumière"
          align="center"
          title={
            <>
              Begin with a free
              <br />
              <span className="italic text-garnet">consultation.</span>
            </>
          }
          intro="Tell us a little about your skin and we'll be in touch on WhatsApp to find a time. No commitment — just a conversation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Form */}
          <motion.div
            {...inView}
            variants={fadeUp}
            className="rounded-[1.75rem] border border-bistre/10 bg-porcelain p-7 shadow-card sm:p-9"
          >
            {sent ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-garnet text-porcelain">
                  <Check size={26} strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-bistre">Almost there</h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-clay">
                  We've opened WhatsApp with your details ready to send. Tap send and our team will
                  confirm your consultation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 font-sans text-[0.8rem] font-medium uppercase tracking-wide text-garnet link-underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" htmlFor="name">
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Full name"
                      className="input"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp" htmlFor="phone">
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="03xx xxxxxxx"
                      className="input"
                    />
                  </Field>
                </div>

                <Field label="Treatment of interest" htmlFor="treatment">
                  <select
                    id="treatment"
                    value={form.treatment}
                    onChange={update('treatment')}
                    className="input"
                  >
                    <option value="">Not sure yet — please advise</option>
                    {treatmentOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything we should know? (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Your skin concern, preferred days, questions…"
                    className="input resize-none"
                  />
                </Field>

                <button type="submit" className="btn-primary mt-1 w-full gap-2.5">
                  <MessageCircle size={16} strokeWidth={1.8} />
                  Request free consultation
                </button>
                <p className="text-center text-[0.78rem] text-clay">
                  Opens WhatsApp with your details ready to send.
                </p>
              </form>
            )}
          </motion.div>

          {/* Details + map */}
          <motion.div {...inView} variants={stagger(0.1)} className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-6 rounded-[1.75rem] border border-bistre/10 bg-porcelain p-7 shadow-card sm:p-9"
            >
              <DetailRow icon={MapPin} label="Find us">
                {clinic.address}
              </DetailRow>
              <DetailRow icon={Clock} label="Opening hours">
                {clinic.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="text-bistre">{h.day}</span>
                    <span className="text-clay"> · {h.time}</span>
                  </span>
                ))}
              </DetailRow>
              <div className="grid gap-6 sm:grid-cols-2">
                <DetailRow icon={Phone} label="Call">
                  <a href={`tel:${clinic.phoneRaw}`} className="link-underline hover:text-garnet">
                    {clinic.phoneDisplay}
                  </a>
                </DetailRow>
                <DetailRow icon={Instagram} label="Instagram">
                  <a
                    href={clinic.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-garnet"
                  >
                    {clinic.instagramHandle}
                  </a>
                </DetailRow>
              </div>
              <DetailRow icon={Mail} label="Email">
                <a href={`mailto:${clinic.email}`} className="link-underline break-all hover:text-garnet">
                  {clinic.email}
                </a>
              </DetailRow>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-[1.75rem] border border-bistre/10 shadow-card"
            >
              <iframe
                title="Map to Lumière Skin Clinic, F-7 Markaz, Islamabad"
                src={clinic.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale-[0.3] sm:h-64"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-sans text-[0.72rem] font-medium uppercase tracking-wide text-bistre/70">
        {label}
      </span>
      {children}
    </label>
  )
}
