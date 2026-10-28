'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  strength = 0.35,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btnRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  }

  const baseClasses = `magnetic-btn ${className}`

  if (href) {
    return (
      <Link
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
