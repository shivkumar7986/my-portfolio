'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AboutSection() {
  const headingRef = useScrollReveal({ y: 40, duration: 0.8 })
  const bodyRef = useScrollReveal({ y: 40, duration: 0.8, delay: 0.15 })
  const imageRef = useScrollReveal({ y: 60, duration: 1, delay: 0.3 })

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7">
            <div ref={headingRef} className="mb-8">
              <h2 className="display-text" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                Basically,
                <br />I build things.
              </h2>
            </div>

            <div ref={bodyRef}>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-4 max-w-lg">
                I&apos;m a full-stack developer with a passion for crafting clean,
                intuitive interfaces. I care about the details — the micro-interactions,
                the whitespace, the flow.
              </p>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
                From healthcare SaaS platforms to creative portfolios, I build
                products that are both functional and beautiful. Currently focused
                on React, Next.js, and modern design systems.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div ref={imageRef} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              {/* Placeholder frame — replace with actual photo */}
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
              {/* Decorative border offset */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[var(--color-border)] -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
