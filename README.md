# Lumière Skin Clinic — Website

A premium single-page marketing site for **Lumière Skin Clinic**, a dermatology &
aesthetics practice in F-7 Markaz, Islamabad. Built with React + Vite, styled
with Tailwind CSS, and animated with Framer Motion.

> Content note: the clinic name, contact details and doctors in this build are
> fictional placeholders. Swap real details into `src/data/clinic.js`.

## Quick start

```bash
npm install
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

All copy, services, doctors, contact details and the launch offer live in one
file — **`src/data/clinic.js`**. Update that file and the whole site updates.
No need to touch component code for routine content changes.

- `clinic` — name, phone, email, address, hours, Instagram, map embed
- `offer` — the launch promotion (currently 40% off + free diagnostics)
- `treatmentGroups` — the two service menus (aesthetic + clinical)
- `specialists` — the doctors, credentials and focus areas
- `pillars` — the three philosophy points

### Swapping the photography

Two images are referenced (hero + clinic interior). Update the `HERO_IMG`
constant in `src/components/Hero.jsx` and `CLINIC_IMG` in
`src/components/Philosophy.jsx`. If an image fails to load, the frame falls back
to a warm gradient automatically (`src/components/SmartImage.jsx`), so the site
never looks broken.

## Design system

| Token | Value | Use |
|-------|-------|-----|
| Porcelain | `#FBF7F1` | Page background |
| Almond | `#EFE7DA` | Alternating sections |
| Bistre | `#2A211B` | Primary text, dark bands |
| Clay | `#7A6857` | Muted body text (AA contrast) |
| Champagne gold | `#B8924F` | Hairlines, eyebrows, accents |
| Garnet | `#7A2E3B` | Emphasis, CTAs, italic display |

- **Display type:** Fraunces (editorial serif)
- **Body / UI type:** Jost (geometric sans)
- **Signature:** "The Glow" — a soft breathing radial luminance behind the hero
  and dark bands, evoking healthy-skin luminosity.

### Light & dark mode

The palette is backed by CSS variables (`src/index.css`) that remap under a
`.dark` class on `<html>`, so every `bg-porcelain` / `text-bistre` / etc. is
theme-aware automatically. Two constant tokens — `ink` and `cream` — stay dark
and light in both modes for the dramatic bands (launch offer, footer, mobile
menu). The toggle (`src/components/ThemeToggle.jsx`) lives in the navbar,
persists the choice to `localStorage`, and defaults to the visitor's system
preference. An inline script in `index.html` applies the saved theme before
first paint to avoid any flash.

## Accessibility & performance

- Body text meets WCAG AA contrast (≥ 4.5:1).
- `prefers-reduced-motion` is fully respected — animations and the glow disable.
- All animation uses transform/opacity only; images are lazy-loaded.
- Keyboard-focusable controls, labelled form fields, alt text on images.
- No horizontal scroll from 375px up.

## The booking flow

The consultation form (`src/components/Contact.jsx`) needs no backend — on
submit it composes a pre-filled WhatsApp message to the clinic number and opens
WhatsApp. To connect a real backend or email service later, replace the
`onSubmit` handler.

## Structure

```
src/
  data/clinic.js        ← all content
  lib/motion.js         ← shared Framer Motion variants
  components/
    Navbar, Hero, Marquee, Philosophy, Treatments,
    Specialists, LaunchOffer, FirstClient, Contact, Footer
    SectionHeading, SmartImage, ScrollProgress
  App.jsx, main.jsx, index.css
```
