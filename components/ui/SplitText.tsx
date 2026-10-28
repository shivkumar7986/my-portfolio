'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface SplitTextProps {
  text: string
  className?: string
  charClassName?: string
  delay?: number
  stagger?: number
  duration?: number
}

export default function SplitText({
  text,
  className = '',
  charClassName = '',
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const chars = containerRef.current.querySelectorAll('.split-char')

    gsap.set(chars, { y: 120, opacity: 0 })

    const tl = gsap.timeline({ delay })
    tl.to(chars, {
      y: 0,
      opacity: 1,
      duration,
      ease: 'power4.out',
      stagger,
    })

    return () => {
      tl.kill()
    }
  }, [delay, stagger, duration])

  return (
    <div ref={containerRef} className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`split-char inline-block overflow-hidden ${charClassName}`}
          aria-hidden="true"
        >
          <span className="inline-block">{char === ' ' ? '\u00A0' : char}</span>
        </span>
      ))}
    </div>
  )
}
