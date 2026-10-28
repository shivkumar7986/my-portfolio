'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="group flex flex-col gap-6">
      {/* Image Area */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-[#111]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Code2 size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <h3
            className="text-2xl md:text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            {project.title}
          </h3>
          <span
            className="shrink-0 text-sm md:text-base text-white/40 mt-1"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            {project.year}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p 
            className="text-white/60 text-[15px] leading-relaxed max-w-sm"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2.5 md:justify-end content-start max-w-[280px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] rounded-full border border-white/20 text-white/80"
                style={{ 
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  padding: '6px 16px'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
