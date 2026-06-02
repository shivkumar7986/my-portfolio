import type { Metadata } from 'next'
import ProjectGrid from '@/components/works/ProjectGrid'

export const metadata: Metadata = {
  title: 'Works — Vis',
  description: 'Selected projects and works by Vis — Full-Stack Developer & UI Engineer.',
}

export default function WorksPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24">
      <div className="container-max">
        {/* Page header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-baseline gap-4">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              Works.
            </h1>
            <span
              className="text-lg md:text-xl text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              (05)
            </span>
          </div>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-md">
            A selection of projects I&apos;ve built — from healthcare SaaS to creative experiments.
          </p>
        </div>

        {/* Project grid */}
        <ProjectGrid />
      </div>
    </div>
  )
}
