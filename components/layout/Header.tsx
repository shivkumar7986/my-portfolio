'use client'

import React from 'react'
import StaggeredMenu from '@/components/ui/StaggeredMenu'

const navItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Works', ariaLabel: 'View our works', link: '/works' },
  { label: 'Info', ariaLabel: 'Learn about us', link: '/info' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
]

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/shivkumar7986' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/shiv-creates/' },
  { label: 'Behance', link: 'https://behance.net' },
]

export default function Header() {
  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      items={navItems}
      socialItems={socialItems}
      logoUrl="" 
      colors={['#1a1a1a', '#050505']}
      accentColor="#DC2626" 
      menuButtonColor="#ffffff"
      openMenuButtonColor="#000000"
      displayItemNumbering={true}
    />
  )
}
