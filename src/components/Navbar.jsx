import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { clinic, navLinks } from '../data/clinic'
import { easeLuxe } from '../lib/motion'
import ThemeToggle from './ThemeToggle'

function Wordmark({ scrolled }) {
  return (
    <a href="#top" className="group flex items-baseline gap-2" aria-label="Lumière Skin Clinic — home">
      <span
        className={`font-display text-2xl tracking-tight transition-colors duration-300 ${
          scrolled ? 'text-bistre' : 'text-bistre'
        }`}
      >
        Lumière <span className="italic text-garnet">Skin</span>
      </span>
      <span className="hidden font-sans text-[0.6rem] uppercase tracking-eyebrow text-clay sm:inline">
        Clinic
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeLuxe, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-luxe pt-4">
        <nav
          className={`flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ease-luxe sm:px-6 ${
            scrolled
              ? 'border-bistre/10 bg-porcelain/85 shadow-card backdrop-blur-md'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Wordmark scrolled={scrolled} />

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline font-sans text-[0.8rem] font-medium uppercase tracking-wide text-bistre/75 transition-colors hover:text-bistre"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="hidden items-center gap-2 font-sans text-[0.8rem] font-medium text-bistre/75 transition-colors hover:text-garnet xl:inline-flex"
            >
              <Phone size={15} strokeWidth={1.6} />
              {clinic.phoneDisplay}
            </a>
            <ThemeToggle />
            <a href="#visit" className="btn-primary hidden sm:inline-flex">
              Book consultation
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bistre/15 text-bistre lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.6} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm lg:hidden"
          >
            <div className="container-luxe flex h-full flex-col">
              <div className="flex items-center justify-between pt-7">
                <span className="font-display text-2xl text-cream">
                  Lumière <span className="italic text-gold-soft">Skin</span>
                </span>
                <div className="flex items-center gap-2.5">
                  <ThemeToggle tone="on-dark" />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream"
                    aria-label="Close menu"
                  >
                    <X size={20} strokeWidth={1.6} />
                  </button>
                </div>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, ease: easeLuxe }}
                    className="font-display text-4xl text-cream/90 transition-colors hover:text-gold-soft sm:text-5xl"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-4 pb-10">
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="flex items-center gap-2 font-sans text-base text-cream/70"
                >
                  <Phone size={16} strokeWidth={1.6} /> {clinic.phoneDisplay}
                </a>
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full bg-gold text-ink hover:bg-gold-soft"
                >
                  Book free consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
