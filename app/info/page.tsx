import type { Metadata } from 'next'
import InfoContent from '@/components/info/InfoContent'

export const metadata: Metadata = {
  title: 'Info — Shiv',
  description: 'About Shiv — Full-Stack Developer & UI Engineer. Background, skills, and what I do.',
}

export default function InfoPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24 bg-[#050505] min-h-screen overflow-hidden text-white">
      <div className="container-max">
        <InfoContent />
      </div>
    </div>
  )
}
