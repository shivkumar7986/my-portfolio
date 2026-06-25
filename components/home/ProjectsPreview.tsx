'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { MoveRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectsPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Use the first 4 projects or all if less than 4
  const displayProjects = projects.slice(0, Math.max(4, projects.length))

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const section = sectionRef.current
    const track = trackRef.current

    // 1. Entry Animation: Card expansion effect
    gsap.fromTo(section,
      { 
        clipPath: 'inset(0% 5% 0% 5% round 40px 40px 0px 0px)' 
      },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px 0px 0px 0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        }
      }
    )

    // 2. Horizontal Scroll Animation
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth
      return -(trackWidth - window.innerWidth)
    }

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    })

    // 3. Reveal Project Cards one by one as they enter the screen horizontally
    const cards = gsap.utils.toArray<HTMLElement>('.gsap-project-card')
    cards.forEach((card) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: "left 80%", // Animates when the left edge of the card reaches 80% of the screen
            toggleActions: "play none none reverse",
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === section) {
          t.kill()
        }
      })
      tween.kill()
    }
  }, [])

  
  const panelPadding = {
    paddingLeft: "max(1.5rem, 5vw)",
    paddingRight: "max(1.5rem, 5vw)",
    paddingTop: "max(3rem, 8vh)",
    paddingBottom: "max(3rem, 8vh)",
  }

  
  const linkStyle = { fontFamily: "var(--font-dm-sans), sans-serif" }
  const linkClasses = "group relative inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#111]/50 hover:text-[#111] transition-all duration-500 ease-out pb-1 w-fit border-b border-[#111]/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#111] after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden bg-[#e8e8e8] text-[#111]"
    >
      <div ref={trackRef} className="flex h-full w-max">
        {/* Panel 1: Intro */}
        <div 
          className="w-[100vw] md:w-[50vw] h-full flex flex-col justify-center shrink-0 bg-[#f4f4f4] border-r border-black/5"
          style={panelPadding}
        >
          <div className="w-full max-w-xl">
            <h2
              className="text-[40px] md:text-[4vw] leading-[1.05] tracking-[-0.02em] font-medium mb-16 text-[#111]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Selected work
              <br />& explorations
            </h2>
            <Link href="/works" className={linkClasses} style={linkStyle}>
              VIEW ALL PROJECTS <MoveRight className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Project Panels */}
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="gsap-project-card group w-[100vw] md:w-[50vw] h-full flex flex-col justify-center shrink-0 border-r border-black/5 relative"
            style={panelPadding}
          >
            <div 
              className="w-full h-[45vh] md:h-[55vh] relative rounded-sm overflow-hidden bg-[#e8e8e8] group-hover:bg-[#e0e0e0] transition-colors duration-700"
              style={{ marginBottom: "clamp(3rem, 8vh, 5rem)" }}
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="w-full">
              <h3
                className="text-[28px] md:text-[2.5vw] leading-[1.1] tracking-[-0.01em] font-medium text-[#111]"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {project.title}
              </h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-16">
                <p 
                  className="text-[#111]/70 max-w-sm text-[14px] md:text-[16px] leading-relaxed font-normal"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {project.description}
                </p>
                <Link href={project.link || project.github || "#"} className={linkClasses} style={linkStyle}>
                  EXPLORE PROJECT <MoveRight className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Panel N: Outro */}
        <div 
          className="w-[100vw] md:w-[50vw] h-full flex flex-col justify-center items-center shrink-0 bg-[#f4f4f4]"
          style={panelPadding}
        >
          <div className="w-full max-w-xl text-center flex flex-col items-center">
            <h2
              className="text-[32px] md:text-[3.5vw] leading-[1.1] tracking-[-0.02em] font-medium mb-16 text-[#111]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Discover our complete collection of digital experiences, brands,
              and platforms.
            </h2>
            <Link href="/works" className={linkClasses} style={linkStyle}>
              VIEW ALL PROJECTS <MoveRight className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
