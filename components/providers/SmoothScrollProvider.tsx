'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      duration: 1.5,
      wheelMultiplier: 0.8,
      smoothWheel: true,
    })

    // Sync Lenis with GSAP ticker
    function update(time: number) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
