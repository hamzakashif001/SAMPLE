import { Phone, Mail, Instagram, MapPin } from 'lucide-react'
import { clinic, navLinks } from '../data/clinic'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-luxe py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="font-display text-3xl text-cream">
              Lumière <span className="italic text-gold-soft">Skin</span>
            </a>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream/55">
              Clinical skin health and professional aesthetic procedures, led by qualified
              specialists in {clinic.addressShort}.
            </p>
            <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-eyebrow text-gold-soft">
              {clinic.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <p className="mb-1 font-sans text-[0.66rem] uppercase tracking-eyebrow text-cream/40">
              Explore
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-[0.95rem] text-cream/70 transition-colors hover:text-gold-soft"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="mb-1 font-sans text-[0.66rem] uppercase tracking-eyebrow text-cream/40">
              Get in touch
            </p>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="flex items-center gap-3 text-[0.95rem] text-cream/70 transition-colors hover:text-gold-soft"
            >
              <Phone size={15} strokeWidth={1.6} /> {clinic.phoneDisplay}
            </a>
            <a
              href={`mailto:${clinic.email}`}
              className="flex items-center gap-3 break-all text-[0.95rem] text-cream/70 transition-colors hover:text-gold-soft"
            >
              <Mail size={15} strokeWidth={1.6} /> {clinic.email}
            </a>
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[0.95rem] text-cream/70 transition-colors hover:text-gold-soft"
            >
              <Instagram size={15} strokeWidth={1.6} /> {clinic.instagramHandle}
            </a>
            <p className="flex items-start gap-3 text-[0.95rem] text-cream/70">
              <MapPin size={15} strokeWidth={1.6} className="mt-1 shrink-0" /> {clinic.address}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-7 sm:flex-row sm:items-center">
          <p className="font-sans text-[0.78rem] text-cream/45">
            © {new Date().getFullYear()} {clinic.fullName}. All rights reserved.
          </p>
          <p className="font-sans text-[0.78rem] text-cream/45">
            Dermatology &amp; Aesthetics · {clinic.city}, Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
