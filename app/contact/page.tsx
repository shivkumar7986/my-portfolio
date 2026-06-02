import type { Metadata } from 'next'
import ContactContent from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Vis',
  description: 'Get in touch with Vis — open to freelance work and full-time roles.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24">
      <div className="container-max">
        {/* Page header */}
        <div className="mb-16 md:mb-24">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Let&apos;s talk.
          </h1>
        </div>

        <ContactContent />
      </div>
    </div>
  )
}
