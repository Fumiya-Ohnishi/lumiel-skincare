import { useReveal } from '@/shared/lib/useReveal'
import { SectionTitle } from '@/shared/ui'
import { ingredients } from '@/entities/ingredient'
import type { IconVariant } from '@/entities/ingredient'

/* ── Ingredient icon SVGs ────────────────────────── */
function IngredientIcon({ icon }: { icon: IconVariant }) {
  const cls = 'w-8 h-8 text-white/90'
  if (icon === 'hex') {
    return (
      <svg viewBox="0 0 32 32" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="16,3 27,9 27,23 16,29 5,23 5,9" />
        <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    )
  }
  if (icon === 'drop') {
    return (
      <svg viewBox="0 0 32 32" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4 Q24 14 24 20 A8 8 0 0 1 8 20 Q8 14 16 4Z" />
        <line x1="12" y1="20" x2="20" y2="20" opacity="0.5" />
      </svg>
    )
  }
  if (icon === 'diamond') {
    return (
      <svg viewBox="0 0 32 32" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="16,4 28,16 16,28 4,16" />
        <polygon points="16,10 22,16 16,22 10,16" fill="currentColor" opacity="0.3" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 32 32" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="6" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}

export function Ingredients() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="ingredients"
      ref={ref}
      className="py-28 bg-pearl-warm"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className={`mb-16 reveal ${visible ? 'show' : ''}`}>
          <SectionTitle
            subtitle="Key Ingredients"
            title="選び抜かれた、4つの主役成分"
            description="科学的エビデンスに裏付けられた有効成分を、肌に届きやすい最適な形で配合しています。"
          />
        </div>

        {/* ingredient grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, i) => (
            <div
              key={item.id}
              className={`ingredient-card glass rounded-3xl p-7 flex flex-col gap-5 reveal ${visible ? 'show' : ''} reveal-delay-${i + 1}`}
            >
              {/* icon circle */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <IngredientIcon icon={item.icon} />
              </div>

              {/* texts */}
              <div className="space-y-2">
                <p className="text-[9px] tracking-[0.25em] text-lavender-500 uppercase font-light">
                  {item.nameEn}
                </p>
                <h3 className="font-serif text-lg text-space-gray font-light leading-tight">
                  {item.nameJa}
                </h3>
                <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* benefit badge */}
              <div className="mt-auto">
                <span className="inline-block text-[10px] text-lavender-600 border border-lavender-200 rounded-full px-3 py-1 font-light tracking-wide">
                  {item.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* full-width banner */}
        <div className={`mt-16 glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center reveal ${visible ? 'show' : ''}`}>
          <div className="flex-1 space-y-3">
            <p className="text-[10px] tracking-[0.35em] text-lavender-500 uppercase font-light">Our Commitment</p>
            <h3 className="font-serif text-2xl text-space-gray font-light">
              すべての成分に、理由がある。
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              LUMIELでは処方設計の段階から皮膚科医・美容研究者と連携し、有効性と安全性の両立を追求しています。
              配合される成分は全て、臨床データに基づいた選定基準をクリアしたものだけです。
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-64 flex-shrink-0">
            {[
              { label: 'Tested by Dermatologists', sub: '皮膚科医テスト済み' },
              { label: 'Clinically Proven', sub: '臨床試験で効果実証' },
              { label: 'Clean Formula', sub: '28成分フリー処方' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-lavender-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-space-gray font-light">{item.label}</p>
                  <p className="text-[10px] text-gray-400 font-light">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
