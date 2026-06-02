'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'
import { Code2, Globe, ExternalLink, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Globe },
  { label: 'X / Twitter', href: 'https://x.com', icon: ExternalLink },
]

export default function ContactCTA() {
  const headingRef = useScrollReveal({ y: 50, duration: 0.9 })
  const ctaRef = useScrollReveal({ y: 30, duration: 0.7, delay: 0.2 })
  const socialsRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.35 })

  return (
    <section id="contact-cta" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-5 blur-3xl bg-white pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl bg-white pointer-events-none" />

      <div className="container-max text-center">
        {/* Heading */}
        <div ref={headingRef} className="mb-10">
          <h2
            className="display-text mb-4"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Let&apos;s work
            <br />
            together.
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-md mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mb-12">
          <MagneticButton href="/contact" className="mx-auto">
            Get in touch
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>

        {/* Social links */}
        <div ref={socialsRef} className="flex items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              <social.icon size={16} strokeWidth={1.5} />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
