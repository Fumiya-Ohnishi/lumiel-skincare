import { useEffect, useState } from 'react'
import { BRAND } from '@/shared/config/brand'
import { Button } from '@/shared/ui'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-sm shadow-lavender-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* logo */}
        <a href="#" className="shimmer-text font-serif text-xl tracking-[0.4em] font-light">
          {BRAND.name}
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {BRAND.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.2em] text-gray-500 hover:text-lavender-600 transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* cta */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            今すぐ購入
          </Button>
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="メニュー"
        >
          <span className={`w-6 h-px bg-space-gray transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-6 h-px bg-space-gray transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-space-gray transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-5">
          {BRAND.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest text-gray-600 hover:text-lavender-600 transition-colors font-light"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="md" className="mt-2">
            今すぐ購入
          </Button>
        </div>
      )}
    </header>
  )
}
