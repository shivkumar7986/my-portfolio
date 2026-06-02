'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-all duration-300"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              backgroundColor:
                activeCategory === cat ? 'var(--color-accent)' : 'transparent',
              color:
                activeCategory === cat ? 'var(--color-bg)' : 'var(--color-text-muted)',
              borderColor:
                activeCategory === cat ? 'var(--color-accent)' : 'var(--color-border)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
