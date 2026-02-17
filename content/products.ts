export interface ProductCategory {
  id: string
  title: string
  items: string[]
}

export interface MakhanaFlavor {
  id: string
  name: string
}

export const makhanaFlavors: MakhanaFlavor[] = [
  { id: 'tangy-tomato', name: 'Tangy Tomato' },
  { id: 'lemon-chilli', name: 'Lemon & Chilli' },
  { id: 'cream-onion', name: 'Cream & Onion' },
  { id: 'himalayan-salt', name: 'Himalayan Pink Salt' },
  { id: 'mint', name: 'Mint' },
  { id: 'peri-peri', name: 'Peri Peri' },
]

export const productCategories: ProductCategory[] = [
  {
    id: 'baking-sweeteners',
    title: 'Baking & Sweeteners',
    items: ['Organic cane sugar', 'Brown sugar', 'Honey', 'Maple syrup'],
  },
  {
    id: 'pulses-pantry',
    title: 'Pulses & Pantry Staples',
    items: [
      'Lentils (red, green, black)',
      'Chickpeas',
      'Black beans',
      'Kidney beans',
    ],
  },
  {
    id: 'spices-herbs',
    title: 'Spices & Herbs',
    items: ['Turmeric', 'Cumin', 'Coriander', 'Garam masala'],
  },
  {
    id: 'canned-ready',
    title: 'Canned & Ready-to-Use',
    items: [
      'Tomato paste',
      'Coconut milk',
      'Curry pastes',
      'Pickled vegetables',
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty',
    items: ['Specialty grains', 'Ancient grains', 'Superfood powders'],
  },
  {
    id: 'rice-grains',
    title: 'Rice & Grains',
    items: ['Basmati rice', 'Jasmine rice', 'Quinoa', 'Wild rice'],
  },
]

export const trustStatements = [
  'Wholesale-focused',
  'Reliable supply chain',
  'Traceable sourcing',
  'Export-ready',
  'Private label capabilities',
  'Global distribution network',
]
