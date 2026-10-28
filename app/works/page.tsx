import type { Metadata } from 'next'
import ProjectGrid from '@/components/works/ProjectGrid'

export const metadata: Metadata = {
  title: 'Works — Shiv',
  description: 'Selected projects and works by Shiv — Full-Stack Developer & UI Engineer.',
}

export default function WorksPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24 overflow-hidden bg-[#050505] min-h-screen">
      <div className="container-max">
        <ProjectGrid />
      </div>
    </div>
  )
}
