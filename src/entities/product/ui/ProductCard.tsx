import { BottleSVG } from '@/shared/ui'
import { Button } from '@/shared/ui'
import type { Product } from '../model/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, jaName, description, price, volume, variant, badge, benefits } = product

  return (
    <div className="product-card glass-strong rounded-3xl p-8 flex flex-col items-center gap-6 group cursor-pointer">
      {/* badge */}
      <div className="self-start min-h-[20px]">
        {badge && (
          <span className="text-[9px] tracking-[0.25em] text-lavender-600 border border-lavender-300 rounded-full px-3 py-1 font-light uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* bottle illustration */}
      <div className="relative flex items-center justify-center w-full py-4">
        {/* glow behind bottle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-lavender-200 opacity-30 animate-glow-slow blur-2xl" />
        </div>
        <div className="animate-float relative z-10">
          <BottleSVG
            variant={variant}
            className={
              variant === 'cream'
                ? 'w-36'
                : variant === 'serum'
                ? 'w-24'
                : 'w-20'
            }
          />
        </div>
      </div>

      {/* text */}
      <div className="text-center space-y-2">
        <p className="text-[10px] tracking-[0.3em] text-lavender-500 uppercase font-light">
          {jaName}
        </p>
        <h3 className="font-serif text-xl text-space-gray font-light tracking-wide">
          {name}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-3">
          {description}
        </p>
      </div>

      {/* benefits */}
      <ul className="w-full space-y-1.5">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
            <span className="w-1 h-1 rounded-full bg-lavender-400 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      {/* divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      {/* price & cta */}
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-400 font-light tracking-wide">{volume}</p>
          <p className="font-serif text-xl text-space-gray font-light">
            ¥{price.toLocaleString()}
            <span className="text-xs text-gray-400 font-sans font-light ml-1">税込</span>
          </p>
        </div>
        <Button variant="primary" size="sm">
          購入する
        </Button>
      </div>
    </div>
  )
}
