'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillGroups } from '@/data/skills'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !containerRef.current) return

    const ctx = gsap.context(() => {
      // 1. Header Reveal (Title and Paragraph in sequence with blur)
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children, 
          { y: 40, autoAlpha: 0, filter: "blur(20px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            }
          }
        )
      }

      // 2. Skill Groups Reveal (Category Title -> Pills in sequence with blur)
      const groups = gsap.utils.toArray('.skill-group')
      groups.forEach((group: any) => {
        const category = group.querySelector('.skill-category')
        const pills = group.querySelectorAll('.premium-pill')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
          }
        })

        // Reveal category title and line
        tl.fromTo(category, 
          { x: -30, autoAlpha: 0, filter: "blur(20px)" },
          { x: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        )
        // Reveal pills with blur, scatter drop, and rotation
        tl.fromTo(pills, 
          { 
            y: 50, 
            autoAlpha: 0, 
            scale: 0.8, 
            filter: "blur(20px)",
            rotation: () => gsap.utils.random(-20, 20) 
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            rotation: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.5)",
          },
          "-=0.4" // Overlap with category reveal
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative min-h-[100dvh] w-full flex items-center justify-center bg-transparent text-[#e8e8e8] overflow-hidden py-24">
      {/* Decorative blurred background orb */}
      <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10 flex flex-col md:flex-row justify-between  w-full">
        
        {/* Left Sticky Column */}
        <div className="w-full md:w-[35%] md:shrink-0">
          <div ref={headerRef} className="md:sticky md:top-40">
            <h2
              className="text-[40px] md:text-[4vw] leading-[1.05] tracking-[-0.02em] font-medium mb-8"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              Capabilities
              <br />& Tools
            </h2>
            <p 
              className="text-white/50 text-[15px] md:text-[17px] leading-relaxed max-w-sm"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              A constantly evolving toolkit focused on crafting immersive, high-performance digital experiences. Specializing in fluid motion, pixel-perfect UI, and robust modern architecture.
            </p>
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div ref={containerRef} className="w-full md:w-[65%] flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group flex flex-col">
              {/* Category Title & Line */}
              <div 
                className="skill-category flex items-center gap-6"
                style={{ marginBottom: "clamp(1rem, 2vh, 2rem)" }}
              >
                <h3
                  className="text-[16px] uppercase tracking-[0.2em] font-bold text-white/40 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  {group.category}
                </h3>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
              
              {/* Animated Pills */}
              <div className="pill-group flex flex-wrap gap-3 md:gap-4">
                {group.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="premium-pill group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent overflow-hidden cursor-crosshair transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:-translate-y-1"
                    style={{ padding: "clamp(0.75rem, 1.5vh, 1rem) clamp(1.5rem, 3vw, 2.5rem)" }}
                  >
                    {/* Solid white fill that slides up */}
                    <div className="absolute inset-0 bg-[#e8e8e8] translate-y-[101%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0" />
                    
                    <span 
                      className="relative z-10 text-[13px] md:text-[14px] leading-none font-medium tracking-wide text-white/50 group-hover:text-[#111] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
