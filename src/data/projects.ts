export interface Project {
  id: string
  title: string
  location: string
  category: string
  image: string
  year: string
}

export const projects: Project[] = [
  {
    id: 'linen-loft',
    title: 'Linen Loft',
    location: 'Warsaw, Poland',
    category: 'Interior',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
  },
  {
    id: 'harbor-gallery',
    title: 'Harbor Gallery',
    location: 'Sopot, Poland',
    category: 'Cultural',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    year: '2022',
  },
  {
    id: 'stone-pavilion',
    title: 'Stone Pavilion',
    location: 'Zakopane, Poland',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    year: '2023',
  },
]
