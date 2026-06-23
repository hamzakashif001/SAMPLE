import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { ArrowDown, Sparkles, Star } from 'lucide-react'
import { clinic } from '../data/clinic'
import { easeLuxe } from '../lib/motion'
import SmartImage from './SmartImage'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'

const HERO_IMG =
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&h=1125&q=80'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxe } },
}
const lineRise = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: easeLuxe } },
}

export default function Hero({ ready }) {
  const sectionRef = useRef(null)
  const reduce = useReducedMotion()

  // Cursor-reactive glow (desktop, fine pointer only)
  const gx = useMotionValue(0)
  const gy = useMotionValue(0)
  const glowX = useSpring(gx, { stiffness: 60, damping: 18, mass: 0.6 })
  const glowY = useSpring(gy, { stiffness: 60, damping: 18, mass: 0.6 })

  // Scroll parallax — image and glow drift at different rates
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const glowScrollY = useTransform(scrollYProgress, [0, 1], [0, 140])

  const fine =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  const interactive = !reduce && fine

  const onMouseMove = (e) => {
    if (!interactive) return
    gx.set((e.clientX / window.innerWidth - 0.5) * 60)
    gy.set((e.clientY / window.innerHeight - 0.5) * 50)
  }

  const animateState = ready ? 'show' : 'hidden'

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28 lg:pt-52"
    >
      {/* Signature: the breathing glow — now cursor-reactive + parallax */}
      <motion.div
        aria-hidden="true"
        style={interactive ? { x: glowX, y: glowY } : reduce ? undefined : { y: glowScrollY }}
        className="pointer-events-none absolute -left-32 top-24 h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem]"
      >
        <div className="glow absolute inset-0" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y: glowScrollY }}
        className="pointer-events-none absolute right-[-10rem] top-[34rem] hidden h-[26rem] w-[26rem] lg:block"
      >
        <div className="glow glow--rose absolute inset-0" style={{ animationDelay: '3s' }} />
      </motion.div>

      <div className="container-luxe relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — the thesis */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={animateState}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-porcelain/60 px-4 py-2"
            >
              <Sparkles size={14} className="text-gold-deep" strokeWidth={1.6} />
              <span className="font-sans text-[0.68rem] font-medium uppercase tracking-wide text-bistre/70">
                Dermatology &amp; Aesthetics · {clinic.addressShort}
              </span>
            </motion.div>

            <h1 className="font-display text-[2.9rem] font-light leading-[1.02] text-bistre sm:text-[3.8rem] lg:text-[4.4rem]">
              <span className="block overflow-hidden">
                <motion.span variants={lineRise} className="block">
                  Skin, restored
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={lineRise} className="block">
                  to its most
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineRise} className="block italic text-garnet">
                  luminous.
                </motion.span>
              </span>
            </h1>

            <motion.div
              variants={item}
              className="mt-7 h-px w-28 origin-left bg-gold"
              style={{ transformOrigin: 'left' }}
              aria-hidden="true"
            />

            <motion.p
              variants={item}
              className="mt-7 max-w-md text-base leading-relaxed text-clay sm:text-lg"
            >
              Medically sound, personalised therapies designed to restore, protect and illuminate
              your skin — led by qualified specialists in the heart of Islamabad.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton href="#visit" variant="primary">
                Book free consultation
              </MagneticButton>
              <MagneticButton href="#treatments" variant="ghost">
                Explore treatments
              </MagneticButton>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              <span className="font-sans text-[0.72rem] font-medium uppercase tracking-wide text-bistre/55">
                Led by MBBS, FCPS specialists
              </span>
              <span className="h-4 w-px bg-bistre/15" aria-hidden="true" />
              <span className="font-sans text-[0.72rem] font-medium uppercase tracking-wide text-bistre/55">
                {clinic.tagline}
              </span>
            </motion.div>
          </motion.div>

          {/* Right — luminous portrait composition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: easeLuxe, delay: 0.2 }}
            style={reduce ? undefined : { y: imgY }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] border border-gold/20 bg-almond p-3 shadow-luxe">
              <Reveal className="h-full w-full" delay={0.15} rounded="1.5rem">
                <SmartImage
                  src={HERO_IMG}
                  alt="A client with calm, luminous skin after professional dermatological care"
                  className="h-full w-full"
                />
              </Reveal>
              <div
                className="pointer-events-none absolute inset-3 z-20 rounded-[1.5rem]"
                style={{ boxShadow: 'inset 0 0 80px rgba(251,247,241,0.45)' }}
                aria-hidden="true"
              />
            </div>

            {/* Floating launch-offer chip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeLuxe, delay: 1.1 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-bistre/10 bg-porcelain px-5 py-4 shadow-card sm:-left-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-garnet text-porcelain">
                <Star size={17} strokeWidth={1.6} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg text-bistre">40% off</p>
                <p className="font-sans text-[0.68rem] uppercase tracking-wide text-clay">
                  Launch offer · free diagnostics
                </p>
              </div>
            </motion.div>

            {/* Floating credential chip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeLuxe, delay: 1.25 }}
              className="absolute -right-3 top-8 hidden rounded-2xl border border-bistre/10 bg-porcelain/90 px-4 py-3 shadow-card backdrop-blur sm:block lg:-right-6"
            >
              <p className="font-sans text-[0.62rem] uppercase tracking-wide text-clay">Now welcoming</p>
              <p className="font-display text-base text-bistre">Our first clients</p>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#clinic"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 hidden items-center gap-3 font-sans text-[0.7rem] uppercase tracking-wide text-bistre/45 transition-colors hover:text-garnet lg:inline-flex"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={15} strokeWidth={1.5} />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  )
}
