export type BottleVariant = 'serum' | 'cream' | 'eye'

interface BottleSVGProps {
  variant: BottleVariant
  className?: string
}

/* ── Serum dropper bottle ────────────────────────── */
function SerumBottle({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 110 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-body`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C0B4E4" />
          <stop offset="22%"  stopColor="#DDD6F5" />
          <stop offset="48%"  stopColor="#F4F0FF" />
          <stop offset="76%"  stopColor="#DAD3F2" />
          <stop offset="100%" stopColor="#BEB2E2" />
        </linearGradient>
        <linearGradient id={`${uid}-cap`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#9090B8" />
          <stop offset="28%"  stopColor="#D0CEE8" />
          <stop offset="52%"  stopColor="#EEEEFF" />
          <stop offset="74%"  stopColor="#D0CEE8" />
          <stop offset="100%" stopColor="#9090B8" />
        </linearGradient>
        <linearGradient id={`${uid}-gloss`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="white" stopOpacity="0.55" />
          <stop offset="35%" stopColor="white" stopOpacity="0.0"  />
        </linearGradient>
        <linearGradient id={`${uid}-liquid`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#B8A8E0" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#A090CC" stopOpacity="0.3" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-25%" y="-5%" width="150%" height="125%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#8B6FCC" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* base shadow */}
      <ellipse cx="55" cy="283" rx="28" ry="5" fill="#9478D4" opacity="0.14" />

      {/* bottle body */}
      <rect x="24" y="78" width="62" height="196" rx="11" fill={`url(#${uid}-body)`} filter={`url(#${uid}-shadow)`} />

      {/* shoulder */}
      <path d="M24 104 L24 80 Q24 68 31 65 L79 65 Q86 68 86 80 L86 104 Z" fill={`url(#${uid}-body)`} />

      {/* neck */}
      <rect x="38" y="36" width="34" height="32" rx="5" fill={`url(#${uid}-body)`} />

      {/* cap collar */}
      <rect x="31" y="31" width="48" height="7" rx="3.5" fill={`url(#${uid}-cap)`} opacity="0.85" />

      {/* cap body */}
      <rect x="33" y="8" width="44" height="26" rx="11" fill={`url(#${uid}-cap)`} />
      <rect x="33" y="8" width="44" height="9"  rx="5"  fill="white" fillOpacity="0.22" />

      {/* dropper tip */}
      <ellipse cx="55" cy="8"  rx="8"  ry="5" fill={`url(#${uid}-cap)`} />
      <ellipse cx="55" cy="7"  rx="3"  ry="2" fill="white" fillOpacity="0.5" />

      {/* left-edge gloss */}
      <rect x="24" y="78" width="11" height="196" rx="6" fill={`url(#${uid}-gloss)`} />

      {/* liquid fill */}
      <rect x="24" y="210" width="62" height="64" rx="11" fill={`url(#${uid}-liquid)`} />

      {/* label bg */}
      <rect x="29" y="124" width="52" height="74" rx="4" fill="white" fillOpacity="0.52" />

      {/* label decoration line top */}
      <line x1="33" y1="133" x2="77" y2="133" stroke="#C4B0E8" strokeWidth="0.6" />

      {/* brand name */}
      <text x="55" y="154" textAnchor="middle" fontSize="9.5" fontFamily="Cormorant Garamond, serif" letterSpacing="3.5" fill="#5C42A4">LUMIEL</text>

      {/* product name */}
      <text x="55" y="167" textAnchor="middle" fontSize="5.5" fontFamily="Noto Sans JP, sans-serif" letterSpacing="1.5" fill="#9278D0">PURE SERUM</text>

      {/* label decoration line bottom */}
      <line x1="33" y1="174" x2="77" y2="174" stroke="#C4B0E8" strokeWidth="0.6" />

      {/* volume */}
      <text x="55" y="186" textAnchor="middle" fontSize="5" fontFamily="Noto Sans JP, sans-serif" fill="#A894D0">30 mL</text>

      {/* subtle body line */}
      <line x1="24" y1="214" x2="86" y2="214" stroke="#CCC0E8" strokeWidth="0.4" opacity="0.55" />
    </svg>
  )
}

/* ── Cream jar ───────────────────────────────────── */
function CreamBottle({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-jar`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C4B8E8" />
          <stop offset="28%"  stopColor="#E4DEF8" />
          <stop offset="55%"  stopColor="#F5F0FF" />
          <stop offset="80%"  stopColor="#DDD6F5" />
          <stop offset="100%" stopColor="#C0B4E4" />
        </linearGradient>
        <linearGradient id={`${uid}-lid`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#A0A0C8" />
          <stop offset="22%"  stopColor="#D4D2EE" />
          <stop offset="45%"  stopColor="#F0EEFF" />
          <stop offset="68%"  stopColor="#D4D2EE" />
          <stop offset="100%" stopColor="#A0A0C8" />
        </linearGradient>
        <linearGradient id={`${uid}-ring`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#8888AA" />
          <stop offset="50%"  stopColor="#EEEEFF" />
          <stop offset="100%" stopColor="#8888AA" />
        </linearGradient>
        <linearGradient id={`${uid}-gloss`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="40%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-15%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#8B6FCC" floodOpacity="0.20" />
        </filter>
      </defs>

      {/* base shadow */}
      <ellipse cx="80" cy="162" rx="48" ry="7" fill="#9478D4" opacity="0.14" />

      {/* jar body */}
      <rect x="16" y="70" width="128" height="85" rx="14" fill={`url(#${uid}-jar)`} filter={`url(#${uid}-shadow)`} />

      {/* jar top rim */}
      <rect x="14" y="66" width="132" height="12" rx="6" fill={`url(#${uid}-ring)`} />

      {/* lid */}
      <rect x="12" y="12" width="136" height="58" rx="16" fill={`url(#${uid}-lid)`} />
      <rect x="12" y="12" width="136" height="18" rx="9"  fill="white" fillOpacity="0.2" />

      {/* lid gloss */}
      <rect x="12" y="12" width="38" height="58" rx="12" fill={`url(#${uid}-gloss)`} />

      {/* lid ring detail */}
      <rect x="12" y="60" width="136" height="8" rx="4" fill={`url(#${uid}-ring)`} opacity="0.7" />

      {/* label on lid */}
      <text x="80" y="36"  textAnchor="middle" fontSize="13" fontFamily="Cormorant Garamond, serif" letterSpacing="4.5" fill="#5040A0">LUMIEL</text>
      <text x="80" y="52"  textAnchor="middle" fontSize="7"  fontFamily="Noto Sans JP, sans-serif" letterSpacing="2"   fill="#9278D0">MOISTURE CREAM</text>

      {/* line decorations */}
      <line x1="30" y1="58" x2="130" y2="58" stroke="#C4B0E8" strokeWidth="0.6" />

      {/* jar body gloss */}
      <rect x="16" y="70" width="22" height="85" rx="7" fill={`url(#${uid}-gloss)`} />

      {/* jar label */}
      <text x="80" y="120" textAnchor="middle" fontSize="5.5" fontFamily="Noto Sans JP, sans-serif" fill="#A894D0">50 g</text>
    </svg>
  )
}

/* ── Eye essence ampoule ─────────────────────────── */
function EyeBottle({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 90 270" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-body`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C8BAE8" />
          <stop offset="24%"  stopColor="#E0D8F8" />
          <stop offset="52%"  stopColor="#F5F0FF" />
          <stop offset="78%"  stopColor="#DDD5F5" />
          <stop offset="100%" stopColor="#C4B4E4" />
        </linearGradient>
        <linearGradient id={`${uid}-collar`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#9898B8" />
          <stop offset="50%"  stopColor="#EEEEFF" />
          <stop offset="100%" stopColor="#9898B8" />
        </linearGradient>
        <linearGradient id={`${uid}-tip`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#D8D0F0" />
          <stop offset="100%" stopColor="#A898D0" />
        </linearGradient>
        <linearGradient id={`${uid}-gloss`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="white" stopOpacity="0.55" />
          <stop offset="38%" stopColor="white" stopOpacity="0.0"  />
        </linearGradient>
        <linearGradient id={`${uid}-liquid`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#C4B4E4" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#9478D4" stopOpacity="0.25" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-35%" y="-5%" width="170%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#8B6FCC" floodOpacity="0.20" />
        </filter>
      </defs>

      {/* base shadow */}
      <ellipse cx="45" cy="263" rx="22" ry="4" fill="#9478D4" opacity="0.14" />

      {/* body */}
      <rect x="18" y="80" width="54" height="176" rx="10" fill={`url(#${uid}-body)`} filter={`url(#${uid}-shadow)`} />

      {/* shoulder taper */}
      <path d="M18 106 L18 82 Q18 70 24 67 L66 67 Q72 70 72 82 L72 106 Z" fill={`url(#${uid}-body)`} />

      {/* neck */}
      <rect x="30" y="36" width="30" height="34" rx="5" fill={`url(#${uid}-body)`} />

      {/* collar */}
      <rect x="24" y="32" width="42" height="7" rx="3.5" fill={`url(#${uid}-collar)`} />
      <rect x="22" y="60" width="46" height="7" rx="3.5" fill={`url(#${uid}-collar)`} opacity="0.7" />

      {/* tip */}
      <path d="M34 36 L34 14 Q34 8 45 6 Q56 8 56 14 L56 36 Z" fill={`url(#${uid}-tip)`} />
      <ellipse cx="45" cy="7" rx="7" ry="5" fill={`url(#${uid}-collar)`} />
      <ellipse cx="45" cy="6" rx="3" ry="2.5" fill="white" fillOpacity="0.55" />

      {/* left gloss */}
      <rect x="18" y="80" width="10" height="176" rx="5" fill={`url(#${uid}-gloss)`} />

      {/* liquid */}
      <rect x="18" y="200" width="54" height="56" rx="10" fill={`url(#${uid}-liquid)`} />

      {/* label */}
      <rect x="22" y="120" width="46" height="68" rx="4" fill="white" fillOpacity="0.52" />
      <line x1="26" y1="129" x2="64" y2="129" stroke="#C4B0E8" strokeWidth="0.5" />

      <text x="45" y="148" textAnchor="middle" fontSize="8.5" fontFamily="Cormorant Garamond, serif" letterSpacing="3" fill="#5C42A4">LUMIEL</text>
      <text x="45" y="160" textAnchor="middle" fontSize="4.8" fontFamily="Noto Sans JP, sans-serif" letterSpacing="1.2" fill="#9278D0">EYE ESSENCE</text>

      <line x1="26" y1="167" x2="64" y2="167" stroke="#C4B0E8" strokeWidth="0.5" />
      <text x="45" y="177" textAnchor="middle" fontSize="4.5" fontFamily="Noto Sans JP, sans-serif" fill="#A894D0">15 mL</text>

      {/* decorative body line */}
      <line x1="18" y1="206" x2="72" y2="206" stroke="#CCC0E8" strokeWidth="0.4" opacity="0.5" />
    </svg>
  )
}

/* ── Public component ────────────────────────────── */
export function BottleSVG({ variant, className = '' }: BottleSVGProps) {
  const uid = `bottle-${variant}`
  return (
    <div className={className}>
      {variant === 'serum' && <SerumBottle uid={uid} />}
      {variant === 'cream' && <CreamBottle uid={uid} />}
      {variant === 'eye'   && <EyeBottle   uid={uid} />}
    </div>
  )
}
