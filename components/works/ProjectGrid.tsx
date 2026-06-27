'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectGrid() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects = projects

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Header Animation
      if (headerRef.current) {
        const titleChars = headerRef.current.querySelectorAll('.title-char')
        const meta = headerRef.current.querySelector('.header-meta')
        
        gsap.set(titleChars, { yPercent: 100, opacity: 0 })
        gsap.set(meta, { opacity: 0, y: 20 })

        tl.to(titleChars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.05,
        })
        .to(meta, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, "-=0.8")
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full text-white">
      {/* Page Header */}
      <div ref={headerRef} className="mb-16 md:mb-24 mt-20 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex items-baseline gap-4 overflow-hidden">
            <h1
              className="text-[12vw] md:text-[8vw] leading-[0.85] tracking-tight font-bold uppercase flex"
              style={{ fontFamily: 'var(--font-machine), sans-serif' }}
            >
              {'Works.'.split('').map((char, i) => (
                <span key={i} className="title-char inline-block">{char}</span>
              ))}
            </h1>
            <span
              className="text-lg md:text-2xl text-white/50 font-medium"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              ({projects.length.toString().padStart(2, '0')})
            </span>
          </div>
          
          <div className="header-meta max-w-sm">
            <p 
              className="text-base md:text-lg text-white/60 leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              A curated selection of digital experiences, platforms, and creative experiments built with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 ">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  )
}
