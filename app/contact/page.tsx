import type { Metadata } from 'next'
import ContactContent from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Shiv',
  description: 'Get in touch with Shiv — open to freelance work and full-time roles.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24 bg-[#050505] min-h-[100dvh] overflow-hidden text-white flex flex-col justify-center">
      <div className="container-max">
        <ContactContent />
      </div>
    </div>
  )
}
