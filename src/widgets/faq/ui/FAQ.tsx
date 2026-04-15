import { useReveal } from '@/shared/lib/useReveal'
import { SectionTitle } from '@/shared/ui'
import { FaqAccordion } from '@/features/faq-accordion'

export function FAQ() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="faq"
      ref={ref}
      className="py-28 bg-pearl"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* heading */}
        <div className={`mb-14 reveal ${visible ? 'show' : ''}`}>
          <SectionTitle
            subtitle="FAQ"
            title="よくあるご質問"
            description="ご購入前のご不安を解消します。その他のご質問はお気軽にお問い合わせください。"
          />
        </div>

        {/* accordion */}
        <div className={`reveal ${visible ? 'show' : ''}`}>
          <FaqAccordion />
        </div>

        {/* contact link */}
        <div className={`text-center mt-14 reveal ${visible ? 'show' : ''}`}>
          <p className="text-xs text-gray-400 font-light mb-4">
            解決しない場合はお気軽にご連絡ください
          </p>
          <a
            href="mailto:hello@lumiel.jp"
            className="text-xs tracking-[0.25em] text-lavender-500 hover:text-lavender-700 transition-colors font-light border-b border-lavender-300 pb-1"
          >
            hello@lumiel.jp
          </a>
        </div>
      </div>
    </section>
  )
}
