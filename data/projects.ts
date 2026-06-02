export type Project = {
  id: string
  title: string
  category: string
  year: number
  description: string
  coverImage: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'kreed-health',
    title: 'Kreed.health',
    category: 'Web',
    year: 2025,
    description:
      'A homeopathic clinic management SaaS — case histories, prescriptions, patient tracking.',
    coverImage: '/images/projects/covers/kreed-health.jpg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    link: 'https://kreed.health',
    featured: true,
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio V1',
    category: 'Web',
    year: 2025,
    description:
      'A dark-themed creative portfolio with scroll-driven animations and GSAP interactions.',
    coverImage: '/images/projects/covers/portfolio-v1.jpg',
    tags: ['Next.js', 'GSAP', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'task-flow',
    title: 'TaskFlow',
    category: 'App',
    year: 2024,
    description:
      'A minimalist task management app with drag-and-drop kanban boards and real-time sync.',
    coverImage: '/images/projects/covers/task-flow.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    link: 'https://taskflow.app',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'design-system',
    title: 'Aura UI',
    category: 'Design',
    year: 2024,
    description:
      'A component library and design system built for speed and consistency across products.',
    coverImage: '/images/projects/covers/design-system.jpg',
    tags: ['React', 'Storybook', 'Figma', 'CSS'],
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'weather-lens',
    title: 'WeatherLens',
    category: 'App',
    year: 2024,
    description:
      'A weather visualization app with interactive maps and beautiful data-driven animations.',
    coverImage: '/images/projects/covers/weather-lens.jpg',
    tags: ['React', 'D3.js', 'API', 'TypeScript'],
    link: 'https://weatherlens.app',
    featured: false,
  },
]
