import { faqs } from '../model/faqs'
import { useFaqAccordion } from '../model/useFaqAccordion'

export function FaqAccordion() {
  const { openIndex, toggle } = useFaqAccordion()

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.id}
            className="glass rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-md hover:shadow-lavender-100"
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-light text-space-gray leading-relaxed">
                {item.question}
              </span>
              {/* plus/minus icon */}
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full border border-lavender-300 flex items-center justify-center text-lavender-500 transition-transform duration-400 ${
                  isOpen ? 'rotate-45 bg-lavender-100' : ''
                }`}
              >
                <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="8" y1="2" x2="8" y2="14" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                </svg>
              </span>
            </button>

            {/* answer body */}
            <div className={`faq-body ${isOpen ? 'open' : ''}`}>
              <div className="px-7 pb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent mb-5" />
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
