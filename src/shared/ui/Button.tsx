import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'btn-gloss inline-flex items-center justify-center font-sans font-medium tracking-widest rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-lavender-700 to-lavender-500 text-white shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:from-lavender-800 hover:to-lavender-600',
    secondary:
      'bg-white text-lavender-700 border border-lavender-200 hover:bg-lavender-50 hover:border-lavender-300 shadow-sm',
    outline:
      'border border-lavender-500 text-lavender-700 hover:bg-lavender-50',
    ghost:
      'text-lavender-600 hover:text-lavender-800 hover:bg-lavender-50/60',
  }

  const sizes: Record<string, string> = {
    sm: 'text-xs px-5 py-2',
    md: 'text-xs px-8 py-3',
    lg: 'text-xs px-11 py-4',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
