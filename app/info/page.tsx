import type { Metadata } from 'next'
import InfoContent from '@/components/info/InfoContent'

export const metadata: Metadata = {
  title: 'Info — Vis',
  description: 'About Vis — Full-Stack Developer & UI Engineer. Background, skills, and what I do.',
}

export default function InfoPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24">
      <div className="container-max">
        {/* Page header */}
        <div className="mb-16 md:mb-24">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Info.
          </h1>
        </div>

        <InfoContent />
      </div>
    </div>
  )
}
