'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight, Code2, Globe, ExternalLink } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/shivkumar7986', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shiv-creates/', icon: Globe },
  { label: 'Behance', href: 'https://behance.net', icon: ExternalLink },
]

export default function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:hello@vis.dev?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.location.href = mailtoLink
  }

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ delay: 0.2 })

      // 3D Header Reveal
      const titleChars = gsap.utils.toArray('.title-char')
      gsap.set(titleChars, { yPercent: 120, rotateX: -90, opacity: 0 })
      tl.to(titleChars, {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.05,
      })

      // Form & Content Reveal
      const contentElements = gsap.utils.toArray('.reveal-element')
      gsap.set(contentElements, { y: 40, opacity: 0 })
      tl.to(contentElements, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      }, "-=0.8")

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full mt-20 pt-10">
      
      {/* Decorative blurred orb */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-red-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Massive 3D Header */}
      <div className="mb-20 md:mb-32 overflow-hidden perspective-[1000px]">
        <h1
          className="text-[14vw] md:text-[11vw] leading-[0.8] tracking-tighter font-bold uppercase flex flex-wrap"
          style={{ fontFamily: 'var(--font-machine), sans-serif' }}
        >
          {"Let's Talk.".split('').map((char, i) => (
            <span key={i} className="title-char inline-block origin-bottom">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left column — Form */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          
          <div className="reveal-element">
            <h2
              className="text-[12px] uppercase tracking-[0.2em] text-white/50 mb-8 font-bold"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Send a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative group">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-[18px] text-white outline-none focus:border-white transition-colors duration-500 placeholder:text-white/20"
                  placeholder="Your Name"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-[18px] text-white outline-none focus:border-white transition-colors duration-500 placeholder:text-white/20"
                  placeholder="Your Email"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                />
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-[18px] text-white outline-none focus:border-white transition-colors duration-500 resize-none placeholder:text-white/20"
                  placeholder="Tell me about your vision..."
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full overflow-hidden transition-transform duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-[#DC2626] translate-y-[101%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0" />
                <span 
                  className="relative z-10 text-[13px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-white"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  Send Inquiry
                </span>
                <ArrowUpRight size={16} className="relative z-10 group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Right column — Info */}
        <div className="lg:col-span-5 flex flex-col gap-16">
          
          <div className="reveal-element">
            <h2
              className="text-[12px] uppercase tracking-[0.2em] text-white/50 mb-6 font-bold"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Direct Email
            </h2>
            <a
              href="mailto:hello@vis.dev"
              className="group inline-flex items-center gap-4 text-3xl md:text-4xl font-bold tracking-tight text-white hover:text-white/70 transition-colors duration-500"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              hello@vis.dev
              <ArrowUpRight
                size={28}
                className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
              />
            </a>
            <p 
              className="mt-6 text-[16px] text-white/50 max-w-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Currently open for freelance projects, full-time roles, and interesting collaborations worldwide.
            </p>
          </div>

          <div className="reveal-element">
            <h2
              className="text-[12px] uppercase tracking-[0.2em] text-white/50 mb-8 font-bold"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Digital Presence
            </h2>
            <div className="flex flex-col gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 pb-6 text-white/70 hover:text-white transition-colors duration-500"
                >
                  <div className="flex items-center gap-6">
                    <social.icon size={20} strokeWidth={1.5} className="group-hover:text-[#DC2626] transition-colors duration-500" />
                    <span 
                      className="text-[18px] font-medium"
                      style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                    >
                      {social.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
