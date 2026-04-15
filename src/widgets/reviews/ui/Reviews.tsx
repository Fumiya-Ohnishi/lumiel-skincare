import { useReveal } from '@/shared/lib/useReveal'
import { SectionTitle } from '@/shared/ui'
import { reviews, ReviewCard } from '@/entities/review'

export function Reviews() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-28 bg-pearl-warm"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className={`mb-6 reveal ${visible ? 'show' : ''}`}>
          <SectionTitle
            subtitle="Customer Reviews"
            title="お客様の声"
          />
        </div>

        {/* aggregate rating */}
        <div className={`flex flex-col items-center gap-2 mb-16 reveal ${visible ? 'show' : ''}`}>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 text-lavender-500" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-light">
            <span className="font-serif text-xl text-lavender-600 font-light">4.9</span>
            {' '}/ 5.0 · <span className="tracking-widest">3,200件以上のレビュー</span>
          </p>
        </div>

        {/* review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`reveal ${visible ? 'show' : ''} reveal-delay-${i + 1}`}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* see more */}
        <div className={`flex justify-center mt-12 reveal ${visible ? 'show' : ''}`}>
          <a
            href="#"
            className="text-xs tracking-[0.3em] text-lavender-500 hover:text-lavender-700 transition-colors font-light border-b border-lavender-300 pb-1"
          >
            すべてのレビューを見る
          </a>
        </div>
      </div>
    </section>
  )
}
