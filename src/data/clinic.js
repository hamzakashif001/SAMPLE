// Single source of truth for the clinic site content.
// NOTE: Demo/placeholder data — names, contact details and doctors are fictional.
// Swap copy/images here to drop in real details.

export const clinic = {
  name: 'Lumière',
  fullName: 'Lumière Skin Clinic',
  tagline: 'Medically Qualified Specialists & Aesthetics',
  city: 'Islamabad',
  phoneDisplay: '0300 123 4567',
  phoneRaw: '+923001234567',
  email: 'hello@lumiereskin.com',
  address: '2nd Floor, Lumière Plaza, F-7 Markaz, Islamabad 44000',
  addressShort: 'F-7 Markaz, Islamabad',
  instagram: 'https://instagram.com/lumiere.skin',
  instagramHandle: '@lumiere.skin',
  hours: [
    { day: 'Monday – Saturday', time: '11:00 AM – 7:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=F-7+Markaz+Islamabad&output=embed',
}

export const offer = {
  badge: '40% off · launch offer',
  title: 'Our launch is on.',
  detail:
    'For a limited time, every aesthetic procedure is 40% off — and your first skin diagnostic is on us. Begin with a complimentary, no-pressure consultation.',
  points: ['40% off all aesthetic procedures', 'Free skin diagnostics', 'Complimentary consultation'],
}

export const pillars = [
  {
    title: 'Medically led',
    body: 'Every treatment is planned and performed by qualified MBBS, FCPS specialists — not technicians. Aesthetics, grounded in clinical medicine.',
  },
  {
    title: 'Personalised therapy',
    body: 'We read your skin first. Each plan is built around your concerns, your skin type, and the result you actually want — never a template.',
  },
  {
    title: 'Restore, protect, illuminate',
    body: 'From pathology to glow, our work is designed to keep skin healthy for the long term, not just radiant for a week.',
  },
]

export const treatmentGroups = [
  {
    key: 'aesthetic',
    label: 'Aesthetic procedures',
    blurb: 'Refinement and rejuvenation, delivered with a clinical hand.',
    items: [
      { name: 'Botox for wrinkles', note: 'Soften expression lines and fine wrinkles.' },
      { name: 'Dermal fillers', note: 'Lips, cheeks, jawline and chin definition.' },
      { name: 'Thread lift', note: 'Non-surgical lift and contour for sagging skin.' },
      { name: 'PRP / PRF with microneedling', note: 'Your own plasma for renewal and texture.' },
      { name: 'Skin boosters', note: 'Deep hydration and a lasting inner glow.' },
      { name: 'Mesotherapy', note: 'Micro-nutrient infusions for skin and hair.' },
      { name: 'Chemical peel', note: 'Resurface for clarity, tone and brightness.' },
      { name: 'Lipolytic injection', note: 'Targeted reduction of stubborn fat pockets.' },
      { name: 'Whitening injection', note: 'Even tone and a brighter complexion.' },
      { name: 'Niacinamide injections', note: 'Calm, strengthen and balance the skin.' },
    ],
  },
  {
    key: 'clinical',
    label: 'Clinical treatments',
    blurb: 'Specialist dermatology for skin that needs real medicine.',
    items: [
      { name: 'All skin pathologies', note: 'Diagnosis and treatment of skin conditions.' },
      { name: 'Laser hair removal', note: 'Smooth, lasting results for all areas.' },
      { name: 'Hydrafacial', note: 'Cleanse, exfoliate and hydrate in one session.' },
      { name: 'Electrocautery', note: 'Precise removal of moles, tags and lesions.' },
      { name: 'Scar subcision', note: 'Release and lift tethered acne scars.' },
      { name: 'Scar peel (CROSS)', note: 'Focal peeling for deep, pitted scarring.' },
      { name: 'Electrolysis for grey hair', note: 'Permanent removal where laser cannot reach.' },
      { name: 'Dark circles treatment', note: 'Brighten and refresh the under-eye area.' },
    ],
  },
]

export const specialists = [
  {
    name: 'Dr. Ayesha Khan',
    role: 'Chief Consultant Dermatologist',
    credentials: 'MBBS, FCPS — Dermatology',
    focus: ['Clinical skin pathology', 'Laser skin rejuvenation', 'Acne scar revision', 'Anti-ageing aesthetics'],
    initials: 'AK',
  },
  {
    name: 'Dr. Bilal Hassan',
    role: 'Consultant Plastic & Reconstructive Surgeon',
    credentials: 'MBBS, FCPS, CHPE',
    focus: ['Fillers & contouring', 'Thread lift', 'Lipolytic injection', 'Scar subcision'],
    initials: 'BH',
  },
]

export const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Specialists', href: '#specialists' },
  { label: 'Clinic', href: '#clinic' },
  { label: 'Visit', href: '#visit' },
]
