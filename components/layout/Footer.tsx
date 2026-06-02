import Link from 'next/link'
import { Code2, Globe, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'Info', href: '/info' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Globe },
  { label: 'X / Twitter', href: 'https://x.com', icon: ExternalLink },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-max py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Vis.
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-[var(--color-border)]">
          <p
            className="text-xs text-[var(--color-text-dim)]"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            © {new Date().getFullYear()} Vis. All rights reserved.
          </p>
          <p
            className="text-xs text-[var(--color-text-dim)]"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            v1.0
          </p>
        </div>
      </div>
    </footer>
  )
}
