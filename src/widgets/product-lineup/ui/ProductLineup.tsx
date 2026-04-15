import { useReveal } from '@/shared/lib/useReveal'
import { SectionTitle } from '@/shared/ui'
import { products, ProductCard } from '@/entities/product'

export function ProductLineup() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="products"
      ref={ref}
      className="py-28 bg-gradient-to-b from-pearl via-lavender-50/40 to-pearl"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className={`mb-16 reveal ${visible ? 'show' : ''}`}>
          <SectionTitle
            subtitle="Product Lineup"
            title="肌に純粋な、3つの処方"
            description="それぞれの肌悩みに応える、最小限の成分で最大の効果を追求したラインナップ。"
          />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`reveal ${visible ? 'show' : ''} reveal-delay-${i + 1}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* footnote */}
        <p className={`text-center text-[10px] text-gray-400 font-light mt-12 tracking-widest reveal ${visible ? 'show' : ''}`}>
          全製品 パラベンフリー · 合成香料フリー · アルコールフリー
        </p>
      </div>
    </section>
  )
}
