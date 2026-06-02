'use client'

import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group card overflow-hidden">
      {/* Image area */}
      <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-bg-soft)]">
        {/* Gradient placeholder */}
        <div
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            background:
              project.category === 'Web'
                ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
                : project.category === 'App'
                ? 'linear-gradient(135deg, #1a2e1a 0%, #162e21 50%, #0f6034 100%)'
                : 'linear-gradient(135deg, #2e1a2e 0%, #2e1621 50%, #60340f 100%)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-3xl md:text-4xl font-semibold text-white/20"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {project.title}
            </span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="flex items-center gap-2 text-sm font-medium text-white">
            See Project
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="text-lg md:text-xl font-semibold tracking-tight mb-1"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
              {project.description}
            </p>
          </div>
          <span
            className="shrink-0 text-xs text-[var(--color-text-dim)] tabular-nums mt-1"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            {project.year}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-dim)]"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--color-border)]">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
              >
                Live
                <ArrowUpRight size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
              >
                GitHub
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
