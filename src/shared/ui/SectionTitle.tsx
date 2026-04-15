interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`${alignClass} ${className}`}>
      {subtitle && (
        <p className="text-[10px] tracking-[0.35em] text-lavender-500 mb-3 uppercase font-light">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-space-gray leading-snug mb-4 font-light">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto font-light">
          {description}
        </p>
      )}
    </div>
  )
}
