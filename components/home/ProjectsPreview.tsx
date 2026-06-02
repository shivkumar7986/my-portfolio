'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectsPreview() {
  const sectionRef = useScrollReveal({ y: 40, duration: 0.8 })
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const previewRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX + 20, y: e.clientY - 100 })
  }

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects-preview" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <div ref={sectionRef} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2
              className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              Selected Works
            </h2>
            <div className="divider flex-1" />
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-0" onMouseMove={handleMouseMove}>
          {featuredProjects.map((project, index) => (
            <Link
              href="/works"
              key={project.id}
              className="group flex items-center justify-between py-6 md:py-8 border-b border-[var(--color-border)] transition-colors duration-300 hover:border-[var(--color-text-dim)]"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span
                  className="text-xs text-[var(--color-text-dim)] tabular-nums"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="hidden md:inline text-xs text-[var(--color-text-dim)] uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
                >
                  {project.category}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-[var(--color-text-dim)] group-hover:text-[var(--color-text)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/works"
            className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Floating preview image */}
      <div
        ref={previewRef}
        className="floating-preview hidden lg:block"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: activeProject ? 1 : 0,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: activeProject
              ? `linear-gradient(135deg, ${
                  activeProject.category === 'Web'
                    ? '#1a1a2e, #16213e'
                    : activeProject.category === 'App'
                    ? '#1a2e1a, #162e21'
                    : '#2e1a1a, #2e2116'
                })`
              : 'var(--color-bg-card)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-lg font-semibold text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {activeProject?.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
