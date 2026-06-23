// Shared Framer Motion variants — kept GPU-friendly (transform + opacity only).

export const easeLuxe = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeLuxe },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: easeLuxe } },
}

// Masked rise — pair with an overflow-hidden wrapper for an editorial line reveal.
export const lineRise = {
  hidden: { y: '108%' },
  show: { y: '0%', transition: { duration: 0.95, ease: easeLuxe } },
}

// Stagger container — children reveal in sequence as the section enters view.
export const stagger = (gap = 0.09, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
})

// Sensible defaults for whileInView so reveals fire once, slightly before fully on-screen.
export const inView = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.2, margin: '0px 0px -10% 0px' },
}
