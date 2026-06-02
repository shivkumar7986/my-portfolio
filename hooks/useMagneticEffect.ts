'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'

interface UseMagneticEffectOptions {
  strength?: number
  duration?: number
}

export function useMagneticEffect(options: UseMagneticEffectOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const { strength = 0.35, duration = 0.4 } = options

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(ref.current, {
        x: x * strength,
        y: y * strength,
        duration,
        ease: 'power2.out',
      })
    },
    [strength, duration]
  )

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
