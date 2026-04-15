import type { RefObject } from 'react'
import { useReveal } from '@/shared/lib/useReveal'
import { BRAND } from '@/shared/config/brand'

/* ── Abstract purity SVG ─────────────────────────── */
function PuritySVG() {
  return (
    <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
      <defs>
        <radialGradient id="pm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#BBA8E8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#BBA8E8" stopOpacity="0.0" />
        </radialGradient>
        <linearGradient id="pm-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#D4C8F0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9478D4" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="pm-drop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#C4B4E8" />
          <stop offset="100%" stopColor="#8B70CC" />
        </linearGradient>
      </defs>

      {/* glow centre */}
      <circle cx="160" cy="160" r="120" fill="url(#pm-glow)" />

      {/* outer ring */}
      <circle cx="160" cy="160" r="110" stroke="url(#pm-ring)" strokeWidth="1" fill="none" strokeDasharray="6 4" />
      {/* mid ring */}
      <circle cx="160" cy="160" r="80"  stroke="#D4C8F0" strokeWidth="0.8" fill="none" opacity="0.6" />
      {/* inner ring */}
      <circle cx="160" cy="160" r="48"  stroke="#BBA8E8" strokeWidth="0.8" fill="none" strokeDasharray="3 6" opacity="0.8" />

      {/* molecule connectors */}
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x2 = 160 + 78 * Math.cos(rad)
        const y2 = 160 + 78 * Math.sin(rad)
        const x3 = 160 + 108 * Math.cos(rad)
        const y3 = 160 + 108 * Math.sin(rad)
        return (
          <g key={deg}>
            <line x1={x2} y1={y2} x2={x3} y2={y3} stroke="#C4B4E4" strokeWidth="0.7" opacity="0.7" />
            <circle cx={x3} cy={y3} r="5" fill="#D4C8F0" opacity="0.85" />
            <circle cx={x3} cy={y3} r="2" fill="white" opacity="0.6" />
          </g>
        )
      })}

      {/* central drop */}
      <path
        d="M160 112 Q180 140 180 158 A20 20 0 0 1 140 158 Q140 140 160 112Z"
        fill="url(#pm-drop)"
        opacity="0.85"
      />
      <path
        d="M160 122 Q168 140 168 156"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* cross-hairs */}
      <line x1="160" y1="50" x2="160" y2="78" stroke="#C4B4E4" strokeWidth="0.7" opacity="0.5" />
      <line x1="160" y1="242" x2="160" y2="270" stroke="#C4B4E4" strokeWidth="0.7" opacity="0.5" />
      <line x1="50" y1="160" x2="78" y2="160" stroke="#C4B4E4" strokeWidth="0.7" opacity="0.5" />
      <line x1="242" y1="160" x2="270" y2="160" stroke="#C4B4E4" strokeWidth="0.7" opacity="0.5" />

      {/* brand watermark */}
      <text x="160" y="195" textAnchor="middle" fontSize="10" fontFamily="Cormorant Garamond, serif" letterSpacing="4" fill="#8B70CC" opacity="0.7">
        LUMIEL
      </text>
    </svg>
  )
}

export function BrandMessage() {
  const { ref: secRef, visible } = useReveal()

  return (
    <section
      id="brand"
      ref={secRef as RefObject<HTMLElement>}
      className="py-28 bg-pearl-warm overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* left — SVG visual */}
        <div className={`flex justify-center reveal-l ${visible ? 'show' : ''}`}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-lavender-100 blur-3xl opacity-60 animate-glow-slow" />
            <PuritySVG />
          </div>
        </div>

        {/* right — text */}
        <div className={`space-y-8 reveal-r ${visible ? 'show' : ''}`}>
          <p className="text-[10px] tracking-[0.4em] text-lavender-500 uppercase font-light">
            Brand Philosophy
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-space-gray font-light leading-snug">
            {BRAND.tagline}
          </h2>

          <div className="space-y-5 text-sm text-gray-500 font-light leading-loose">
            <p>
              私たちは、肌の透明感とは「素材の純粋さ」と「科学の精度」が交わる場所に宿ると信じています。
              LUMIELは、自然界に存在する最も清廉な原料を選び抜き、最先端のバイオテクノロジーでその力を最大化します。
            </p>
            <p>
              香料・着色料・不要な添加物を排した、本質だけを凝縮した処方。スキンケアは、肌と向き合う静かな時間。
              その毎日の積み重ねが、確かな変化になると私たちは信じています。
            </p>
          </div>

          {/* pillars */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { title: 'Pure', sub: '純粋処方' },
              { title: 'Science', sub: '先端成分' },
              { title: 'Gentle', sub: '低刺激設計' },
            ].map((item) => (
              <div key={item.title} className="text-center p-4 rounded-2xl glass border-0">
                <p className="font-serif text-xl text-lavender-600 font-light">{item.title}</p>
                <p className="text-[10px] text-gray-400 tracking-widest font-light mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
