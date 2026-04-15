import type { RefObject } from 'react'
import { useReveal } from '@/shared/lib/useReveal'
import { Button, BottleSVG } from '@/shared/ui'

export function PurchaseCTA() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="purchase"
      ref={ref as RefObject<HTMLElement>}
      className="py-28 bg-gradient-to-br from-lavender-700 via-lavender-600 to-lavender-800 relative overflow-hidden"
    >
      {/* background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="orb absolute -top-20 -left-20 w-80 h-80 bg-lavender-500 opacity-25 animate-drift" />
        <div className="orb absolute -bottom-20 -right-20 w-96 h-96 bg-lavender-900 opacity-30 animate-drift-r" />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 animate-glow-slow" />
        {/* grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className={`relative z-10 max-w-5xl mx-auto px-6 reveal ${visible ? 'show' : ''}`}>
        <div className="glass rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center"
          style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          {/* floating bottles */}
          <div className="flex gap-6 items-end flex-shrink-0">
            <div className="animate-float">
              <BottleSVG variant="serum" className="w-20" />
            </div>
            <div className="animate-float-slow">
              <BottleSVG variant="cream" className="w-24" />
            </div>
            <div className="animate-float-delay">
              <BottleSVG variant="eye" className="w-16" />
            </div>
          </div>

          {/* text */}
          <div className="flex-1 space-y-6 text-white">
            <p className="text-[10px] tracking-[0.45em] text-white/60 uppercase font-light">
              Start Your Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-snug">
              今日から始める、<br />透明感への旅。
            </h2>
            <p className="text-sm text-white/75 font-light leading-loose">
              初回購入は全製品20%オフ。送料無料でお届けします。
              お気に召さない場合は14日以内に全額返金保証。
              まずはLUMIEL SERUMからお試しください。
            </p>

            {/* offer details */}
            <div className="flex flex-wrap gap-4 py-2">
              {[
                '初回20%OFF',
                '送料無料',
                '14日返金保証',
                '定期縛りなし',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-lavender-300" />
                  <span className="text-xs text-white/80 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="secondary"
                size="lg"
                className="!bg-white !text-lavender-700 hover:!bg-lavender-50"
              >
                今すぐ購入する
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="!text-white/80 hover:!bg-white/10"
              >
                商品一覧を見る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
