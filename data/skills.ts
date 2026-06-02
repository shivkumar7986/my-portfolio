export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Animation & 3D',
    skills: ['GSAP', 'Framer Motion', 'Lenis', 'Three.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'REST API'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'MySQL'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Vercel', 'GitHub'],
  },
  {
    category: 'Design',
    skills: ['Figma', 'Photoshop'],
  },
]
