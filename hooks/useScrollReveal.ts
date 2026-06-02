'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseScrollRevealOptions {
  y?: number
  duration?: number
  start?: string
  delay?: number
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const {
    y = 60,
    duration = 1,
    start = 'top 85%',
    delay = 0,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current!, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current!,
          start,
        },
      })
    })

    return () => ctx.revert()
  }, [y, duration, start, delay])

  return ref
}
