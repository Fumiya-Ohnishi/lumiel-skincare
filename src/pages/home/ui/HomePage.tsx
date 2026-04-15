import { Navbar }       from '@/widgets/navbar'
import { Hero }         from '@/widgets/hero'
import { BrandMessage } from '@/widgets/brand-message'
import { ProductLineup } from '@/widgets/product-lineup'
import { Ingredients }  from '@/widgets/ingredients'
import { UsageSteps }   from '@/widgets/usage-steps'
import { Reviews }      from '@/widgets/reviews'
import { PurchaseCTA }  from '@/widgets/purchase-cta'
import { FAQ }          from '@/widgets/faq'
import { Footer }       from '@/widgets/footer'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMessage />
        <ProductLineup />
        <Ingredients />
        <UsageSteps />
        <Reviews />
        <PurchaseCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
