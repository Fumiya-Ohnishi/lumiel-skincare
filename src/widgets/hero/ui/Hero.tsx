import { BRAND } from '@/shared/config/brand'
import { Button, BottleSVG } from '@/shared/ui'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-pearl via-lavender-50 to-pearl pt-24 pb-16">

      {/* ── background orbs ───────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* large lavender blob — top left */}
        <div className="orb absolute -top-24 -left-24 w-[520px] h-[520px] bg-lavender-200 opacity-35 animate-drift" />
        {/* small violet blob — bottom right */}
        <div className="orb absolute -bottom-16 -right-16 w-[380px] h-[380px] bg-lavender-300 opacity-25 animate-drift-r" />
        {/* mid pearl blob — centre */}
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-silver-100 opacity-40 animate-glow-slow" />

        {/* particle dots */}
        {[
          'top-1/4 left-1/4', 'top-1/3 right-1/3', 'bottom-1/3 left-1/3',
          'top-2/3 right-1/4', 'top-1/2 left-1/5',
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-1 h-1 rounded-full bg-lavender-400 opacity-40 animate-float`}
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}

        {/* sheen line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-300/60 to-transparent" />
      </div>

      {/* ── content ───────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* left — text */}
        <div className="flex flex-col gap-8 animate-slide-left">
          {/* eyebrow */}
          <p className="text-[10px] tracking-[0.45em] text-lavender-500 uppercase font-light">
            New Generation Skincare
          </p>

          {/* main heading */}
          <div className="space-y-1">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-space-gray font-light leading-none tracking-tight">
              光と
            </h1>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight shimmer-text">
              科学が、
            </h1>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-space-gray font-light leading-none tracking-tight">
              肌の未来を
            </h1>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-space-gray font-light leading-none tracking-tight">
              ひらく。
            </h1>
          </div>

          {/* description */}
          <p className="text-sm text-gray-500 font-light leading-loose max-w-sm">
            {BRAND.description}
          </p>

          {/* cta buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              商品を見る
            </Button>
            <Button variant="secondary" size="lg">
              ブランドについて
            </Button>
          </div>

          {/* trust indicators */}
          <div className="flex gap-8 pt-2">
            {[
              { num: '98%', label: '満足度' },
              { num: '3万+', label: 'ユーザー' },
              { num: '無香料', label: '低刺激処方' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-2xl text-lavender-600 font-light">{item.num}</p>
                <p className="text-[10px] text-gray-400 tracking-widest font-light mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right — hero bottle */}
        <div className="flex items-center justify-center relative animate-slide-right">
          {/* bottle glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-lavender-200/60 animate-glow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-lavender-300/40 animate-glow-slow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-lavender-100 opacity-20 blur-2xl animate-glow-slow" />
          </div>

          {/* main bottle */}
          <div className="animate-float relative z-10">
            <BottleSVG variant="serum" className="w-56 md:w-64 drop-shadow-2xl" />
          </div>

          {/* floating mini bottles */}
          <div
            className="absolute bottom-8 right-4 animate-float-delay opacity-70"
          >
            <BottleSVG variant="eye" className="w-16" />
          </div>
          <div
            className="absolute top-8 left-4 animate-float-slow opacity-60"
          >
            <BottleSVG variant="cream" className="w-20" />
          </div>

          {/* product note card */}
          <div className="absolute bottom-0 left-0 glass rounded-xl px-5 py-4 max-w-[160px]">
            <p className="text-[9px] tracking-widest text-lavender-500 uppercase font-light mb-1">Best Seller</p>
            <p className="font-serif text-sm text-space-gray font-light">Pure Serum</p>
            <p className="text-xs text-gray-400 font-light">¥8,800</p>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <p className="text-[9px] tracking-[0.4em] text-gray-400 uppercase font-light">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-lavender-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
