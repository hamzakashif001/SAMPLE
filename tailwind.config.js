/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Backed by CSS variables (see index.css) so the whole palette
        // remaps under `.dark` without touching component classes.
        porcelain: 'rgb(var(--c-porcelain) / <alpha-value>)',
        almond: 'rgb(var(--c-almond) / <alpha-value>)',
        sand: 'rgb(var(--c-sand) / <alpha-value>)',
        bistre: 'rgb(var(--c-bistre) / <alpha-value>)',
        clay: 'rgb(var(--c-clay) / <alpha-value>)',
        // Constant tokens — stay dark/light in BOTH modes for the dramatic bands.
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        cream: 'rgb(var(--c-cream) / <alpha-value>)',
        gold: {
          DEFAULT: 'rgb(var(--c-gold) / <alpha-value>)',
          soft: 'rgb(var(--c-gold-soft) / <alpha-value>)',
          deep: 'rgb(var(--c-gold-deep) / <alpha-value>)',
        },
        garnet: {
          DEFAULT: 'rgb(var(--c-garnet) / <alpha-value>)',
          deep: 'rgb(var(--c-garnet-deep) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        wide: '0.18em',
      },
      maxWidth: {
        content: '78rem',
      },
      boxShadow: {
        luxe: '0 30px 60px -32px rgba(42, 33, 27, 0.32)',
        card: '0 18px 40px -28px rgba(42, 33, 27, 0.28)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
