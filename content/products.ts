export interface MakhanaFlavor {
  id: string
  name: string
  descriptor: string
}

export interface AmbayCategory {
  id: string
  title: string
  description: string
}

export const makhanaFlavors: MakhanaFlavor[] = [
  { id: 'tangy-tomato', name: 'Tangy Tomato', descriptor: 'Bold & zesty' },
  { id: 'lemon-chilli', name: 'Lemon & Chilli', descriptor: 'Bright & spicy' },
  { id: 'pink-salt-pepper', name: 'Pink Salt & Pepper', descriptor: 'Classic & clean' },
  { id: 'mint', name: 'Mint', descriptor: 'Cool & refreshing' },
  { id: 'peri-peri', name: 'Peri-Peri', descriptor: 'Smoky & fiery' },
  { id: 'cream-onion', name: 'Cream & Onion', descriptor: 'Rich & savory' },
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

export const cleanCrunchBenefits = [
  'Light, popped, better-for-you alternative to fried snacks',
  'Differentiated shelf presence',
  'Premium perception, strong margins',
  'Clean label friendly',
  'Drives repeat purchases',
  'Flexible placement across snack, health, and specialty aisles',
]
