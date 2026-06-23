const KEYWORDS = [
  'Botox',
  'Dermal fillers',
  'Hydrafacial',
  'Laser hair removal',
  'PRP microneedling',
  'Skin boosters',
  'Thread lift',
  'Chemical peel',
  'Mesotherapy',
  'Scar revision',
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {KEYWORDS.map((word) => (
        <div key={word} className="flex items-center gap-10">
          <span className="font-display text-xl italic text-bistre/70 sm:text-2xl">{word}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </div>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="border-y border-bistre/10 bg-almond/70 py-6" aria-label="Treatments offered">
      <div className="relative flex overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-almond to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-almond to-transparent" />
        <div className="flex animate-marquee">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  )
}
