'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Code2, Globe, ExternalLink, Mail, ArrowUpRight, Send } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Globe },
  { label: 'X / Twitter', href: 'https://x.com', icon: ExternalLink },
]

export default function ContactContent() {
  const emailRef = useScrollReveal({ y: 40, duration: 0.8 })
  const formRef = useScrollReveal({ y: 40, duration: 0.8, delay: 0.15 })
  const socialsRef = useScrollReveal({ y: 30, duration: 0.7, delay: 0.3 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:hello@vis.dev?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.location.href = mailtoLink
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left column — Info */}
      <div>
        {/* Email */}
        <div ref={emailRef} className="mb-12">
          <h2
            className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-6"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            Email
          </h2>
          <a
            href="mailto:hello@vis.dev"
            className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-medium tracking-tight hover:opacity-100"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            <Mail size={24} strokeWidth={1.5} />
            hello@vis.dev
            <ArrowUpRight
              size={20}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <p className="mt-6 text-base text-[var(--color-text-muted)] max-w-sm">
            Open to freelance work, full-time roles, and interesting collaborations.
            Let&apos;s build something great together.
          </p>
        </div>

        {/* Social links */}
        <div ref={socialsRef}>
          <h2
            className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-6"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            Socials
          </h2>
          <div className="space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
              >
                <social.icon size={18} strokeWidth={1.5} />
                <span className="text-base">{social.label}</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right column — Form */}
      <div ref={formRef}>
        <h2
          className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-6"
          style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
        >
          Send a message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-text-muted)] transition-colors duration-300 placeholder:text-[var(--color-text-dim)]"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-text-muted)] transition-colors duration-300 placeholder:text-[var(--color-text-dim)]"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-text-muted)] transition-colors duration-300 resize-none placeholder:text-[var(--color-text-dim)]"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="magnetic-btn mt-4"
          >
            Send Message
            <Send size={14} />
          </button>
        </form>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-[0.03] blur-3xl bg-white pointer-events-none hidden lg:block" />
    </div>
  )
}
