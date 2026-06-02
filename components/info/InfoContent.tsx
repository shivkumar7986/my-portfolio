'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skillGroups } from '@/data/skills'

const whatIDo = [
  {
    title: 'Frontend',
    description:
      'Building responsive, accessible interfaces with React, Next.js, and TypeScript. I obsess over smooth animations and pixel-perfect designs.',
  },
  {
    title: 'Full-Stack',
    description:
      'From database design to API architecture, I build complete products. Node.js, PostgreSQL, and Supabase are my go-to tools.',
  },
  {
    title: 'Design',
    description:
      'I design in Figma and translate vision into code. I believe great products live at the intersection of design and engineering.',
  },
]

export default function InfoContent() {
  const bioRef = useScrollReveal({ y: 40, duration: 0.8 })
  const whatIDoRef = useScrollReveal({ y: 40, duration: 0.8 })
  const skillsRef = useScrollReveal({ y: 40, duration: 0.8 })
  const photoRef = useScrollReveal({ y: 50, duration: 1 })

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Bio section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div ref={bioRef} className="lg:col-span-7">
          <h2
            className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-6"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            About
          </h2>
          <div className="space-y-5 text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
            <p>
              I&apos;m a full-stack developer and UI engineer based in India. I build
              thoughtful, detail-oriented digital products — from healthcare SaaS
              platforms to creative web experiences.
            </p>
            <p>
              My work sits at the intersection of logic and feeling. I care deeply
              about how things work under the hood, but I care equally about how
              they feel to use. Every interaction, every transition, every pixel
              matters.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m probably exploring new design tools,
              experimenting with creative coding, or thinking about what makes a
              great user experience.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div ref={photoRef} className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-80 md:w-72 md:h-96">
            <div
              className="w-full h-full rounded-2xl overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-soft) 100%)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-6xl md:text-7xl font-semibold text-[var(--color-text-dim)]"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  V.
                </span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[var(--color-border)] -z-10" />
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section ref={whatIDoRef}>
        <h2
          className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-8"
          style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
        >
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatIDo.map((item) => (
            <div key={item.title} className="card p-6 md:p-8">
              <h3
                className="text-lg font-semibold mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-syne), sans-serif' }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full skills list */}
      <section ref={skillsRef}>
        <h2
          className="text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-8"
          style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
        >
          Skills & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
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
          ))}
        </div>
      </section>
    </div>
  )
}
