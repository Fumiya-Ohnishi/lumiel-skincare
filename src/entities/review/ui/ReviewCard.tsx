import type { Review } from '../model/types'

interface ReviewCardProps {
  review: Review
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          className={`w-3.5 h-3.5 ${i < rating ? 'text-lavender-500' : 'text-silver-300'}`}
          fill="currentColor"
        >
          <path d="M8 0.5l1.8 3.6 4 .58-2.9 2.82.68 3.98L8 9.5l-3.58 1.98.68-3.98L2.2 4.68l4-.58L8 .5z" />
        </svg>
      ))}
    </div>
  )
}

export function ReviewCard({ review }: ReviewCardProps) {
  const { name, age, rating, skinType, comment, period } = review

  return (
    <div className="glass rounded-2xl p-7 flex flex-col gap-5 h-full">
      {/* stars */}
      <StarRating rating={rating} />

      {/* comment */}
      <p className="text-sm text-gray-600 leading-relaxed font-light flex-1">
        "{comment}"
      </p>

      {/* divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      {/* reviewer info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lavender-200 to-lavender-400 flex items-center justify-center">
            <span className="text-xs text-white font-light">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-xs font-medium text-space-gray">{name}</p>
            <p className="text-[10px] text-gray-400 font-light">{age}代 · {skinType}</p>
          </div>
        </div>
        <span className="text-[10px] text-lavender-400 tracking-wide font-light border border-lavender-200 rounded-full px-3 py-1">
          {period}
        </span>
      </div>
    </div>
  )
}
