import { useState } from 'react'

// Image with a built-in warm gradient fallback. If the photo fails to load
// (offline, blocked, bad URL), the frame keeps its luxe look instead of breaking.
export default function SmartImage({ src, alt, className = '', imgClassName = '', fallback }) {
  const [failed, setFailed] = useState(false)

  const fallbackStyle =
    fallback ||
    'linear-gradient(150deg, #efe7da 0%, #e4d7c5 45%, #cbb795 100%)'

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={failed ? { background: fallbackStyle } : undefined}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl italic text-porcelain/70">Lumière Skin</span>
        </div>
      )}
    </div>
  )
}
