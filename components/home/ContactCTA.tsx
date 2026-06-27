'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Globe, ExternalLink, ArrowUpRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Globe },
  { label: 'X / Twitter', href: 'https://x.com', icon: ExternalLink },
]

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const bottom = bottomRef.current

    if (!section || !text || !bottom) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        }
      })

      // Animate the huge text lines
      const lines = text.querySelectorAll('.reveal-line')
      tl.fromTo(lines, 
        { y: 60, autoAlpha: 0, filter: "blur(20px)", rotationX: -30 },
        { 
          y: 0, 
          autoAlpha: 1, 
          filter: "blur(0px)", 
          rotationX: 0, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power3.out",
          transformOrigin: "bottom center"
        }
      )

      // Animate bottom section (paragraph, button, socials)
      const bottomElements = bottom.children
      tl.fromTo(bottomElements,
        { y: 30, autoAlpha: 0, filter: "blur(10px)" },
        { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact-cta" className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden py-32 border-t border-white/[0.05]">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10 w-full flex flex-col gap-20">
        
        {/* Massive Text Area */}
        <div ref={textRef} className="flex flex-col items-center text-center perspective-[1000px] mb-16">
          <div className="overflow-hidden mb-2">
            <h2 
              className="reveal-line text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.03em] font-bold text-white"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              Let&apos;s work
            </h2>
          </div>
          <div className="overflow-hidden mb-2">
            <h2 
              className="reveal-line text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.03em] font-bold text-white/50"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              together.
            </h2>
          </div>
        </div>

        {/* Bottom Elements: Paragraph, Button, Socials */}
        <div ref={bottomRef} className="flex flex-col items-center justify-center gap-10">
          
          {/* Paragraph */}
          <p 
            className="text-[15px] md:text-[16px] text-white/40 max-w-sm text-center leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Have a bold idea or just want to chat? I&apos;m currently open for new opportunities and would love to hear from you.
          </p>

          {/* Epic Hover Button */}
          <a 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-3 bg-[#f4f4f4] rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 active:scale-95"
            style={{ padding: "clamp(1rem, 2vh, 1.25rem) clamp(2rem, 4vw, 2.5rem)" }}
          >
            {/* Dark fill sweep on hover */}
            <div className="absolute inset-0 bg-[#0a0a0a] translate-y-[101%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0" />
            
            <span 
              className="relative z-10 text-[13px] text-[#050505] font-bold tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-[#f4f4f4]"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Get in touch
            </span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:rotate-45">
               <ArrowUpRight size={14} className="text-[#050505] group-hover:text-[#f4f4f4] transition-colors duration-500" strokeWidth={2.5} />
            </div>
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[13px] uppercase tracking-wider text-white/40 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
              >
                <social.icon size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="relative overflow-hidden h-[1.2em]">
                  <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="leading-[1.2em]">{social.label}</span>
                    <span className="leading-[1.2em] text-white">{social.label}</span>
                  </span>
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
