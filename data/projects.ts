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
    coverImage: '/images/projects/kreed_health_v3.png',
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
    coverImage: '/images/projects/portfolio_v1.png',
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
    coverImage: '/images/projects/task_flow.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    link: 'https://taskflow.app',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'feeme',
    title: 'Feeme',
    category: 'Design',
    year: 2024,
    description:
      'A beautifully designed digital platform focused on seamless user experience and modern aesthetics.',
    coverImage: '/images/projects/feeme_v3.png',
    tags: ['UI/UX', 'Figma', 'Web Design'],
    featured: true,
  },
  {
    id: 'weather-lens',
    title: 'WeatherLens',
    category: 'App',
    year: 2024,
    description:
      'A weather visualization app with interactive maps and beautiful data-driven animations.',
    coverImage: '/images/projects/weather_lens.png',
    tags: ['React', 'D3.js', 'API', 'TypeScript'],
    link: 'https://weatherlens.app',
    featured: false,
  },
]
