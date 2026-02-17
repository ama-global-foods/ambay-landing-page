export interface MakhanaFlavor {
  id: string
  name: string
  descriptor: string
  image: string
  color: string
}

export interface AmbayCategory {
  id: string
  title: string
  description: string
}

export const makhanaFlavors: MakhanaFlavor[] = [
  { id: 'tangy-tomato', name: 'Tangy Tomato', descriptor: 'Bold & zesty', image: '/images/makhana-tangy-tomato.jpg', color: '#e85d3a' },
  { id: 'lemon-chilli', name: 'Lemon & Chilli', descriptor: 'Bright & spicy', image: '/images/makhana-lemon-chilli.jpg', color: '#c9b23d' },
  { id: 'pink-salt-pepper', name: 'Pink Salt & Pepper', descriptor: 'Classic & clean', image: '/images/makhana-pink-salt.jpg', color: '#c1889b' },
  { id: 'mint', name: 'Mint', descriptor: 'Cool & refreshing', image: '/images/makhana-mint.jpg', color: '#6b9e3d' },
  { id: 'peri-peri', name: 'Peri-Peri', descriptor: 'Smoky & fiery', image: '/images/makhana-peri-peri.jpg', color: '#8e2d4e' },
  { id: 'cream-onion', name: 'Cream & Onion', descriptor: 'Rich & savory', image: '/images/makhana-cream-onion.jpg', color: '#98a819' },
]

export const ambayCategories: AmbayCategory[] = [
  { id: 'rice', title: 'Rice', description: 'Everyday Basmati & XXXL Extra Long Grain' },
  { id: 'jaggery', title: 'Jaggery & Refined Jaggery', description: 'Traditional sweeteners, naturally processed' },
  { id: 'flour', title: 'Chickpea & Maize Flour', description: 'Stone-ground, versatile baking staples' },
  { id: 'salt', title: 'Himalayan Pink Rock Salt', description: 'Shaker & jar formats, mineral-rich' },
  { id: 'biscuits', title: 'Whole Wheat Biscuits', description: 'Wholesome cookies & biscuits' },
  { id: 'rusk', title: 'Rusk', description: 'Suji, Milk, and Gur varieties' },
]

export const whyAmbayCredentials = [
  'Costco-audited production facility',
  'Food safety certifications completed',
  'HACCP in progress',
  'Robust global supply network',
  'Export-ready operations',
  'Private & white label available',
  'Strong margins for retail partners',
]
