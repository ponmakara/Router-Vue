export type Project = {
  id: number
  title: string
  summary: string
  description: string
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    summary: 'A clean personal site for sharing skills, projects, and contact details.',
    description:
      'This project focuses on strong page structure, smooth navigation, and clear sections for a personal brand.',
    tools: ['Vue', 'Vue Router', 'CSS'],
  },
  {
    id: 2,
    title: 'Study Blog',
    summary: 'A simple blog layout for saving notes and lessons from class.',
    description:
      'This project uses reusable content blocks and route-based pages to organize learning notes.',
    tools: ['Vue', 'TypeScript', 'Routing'],
  },
  {
    id: 3,
    title: 'Project Gallery',
    summary: 'A gallery page that highlights selected work with detail pages.',
    description:
      'This project practices dynamic routes by loading one project detail from the ID in the URL.',
    tools: ['Vue Router', 'Dynamic Routes', 'Params'],
  },
]
