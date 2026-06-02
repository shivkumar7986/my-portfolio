'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'Info', href: '/info' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
        style={{
          backgroundColor: isScrolled
            ? 'rgba(10, 10, 10, 0.85)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          opacity: pathname === '/' && !isScrolled ? 0 : 1,
          pointerEvents: pathname === '/' && !isScrolled ? 'none' : 'auto',
        }}
      >
        <div className="container-max flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Vis.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide transition-opacity duration-300"
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  opacity: pathname === link.href ? 1 : 0.5,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-[110] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="nav-overlay" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
          <Link
            href="/"
            className="text-3xl font-semibold mb-8"
            style={{ opacity: pathname === '/' ? 1 : 0.5 }}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ opacity: pathname === link.href ? 1 : 0.5 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
