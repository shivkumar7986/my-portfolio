'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skillGroups } from '@/data/skills'

export default function SkillsSection() {
  const headerRef = useScrollReveal({ y: 40, duration: 0.8 })

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <div ref={headerRef} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2
              className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
            >
              Skills & Tools
            </h2>
            <div className="divider flex-1" />
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {skillGroups.map((group) => (
            <SkillGroupBlock key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroupBlock({ group }: { group: typeof skillGroups[0] }) {
  const ref = useScrollReveal({ y: 30, duration: 0.7 })

  return (
    <div ref={ref}>
      <h3
        className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-4"
        style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
      >
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
