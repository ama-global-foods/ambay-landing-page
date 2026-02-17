'use client'

import Section from '@/components/ui/Section'

const categories = [
  { title: 'Basmati Rice', description: 'Everyday and XXXL Extra Long Grain varieties in 8lb and 10lb formats.' },
  { title: 'Jaggery & Refined Jaggery', description: 'Traditional unrefined sweeteners for baking, cooking, and wellness use.' },
  { title: 'Chickpea & Maize Flour', description: 'Besan and Makki Atta for authentic cooking and gluten-conscious consumers.' },
  { title: 'Himalayan Pink Salt', description: 'Available in shaker and jar formats for retail and foodservice.' },
  { title: 'Whole Wheat Biscuits', description: 'Combo cookies, Punjabi atta biscuits, and semolina biscuits.' },
  { title: 'Rusk Collection', description: 'Suji, Milk, Gur, and Combo Rusk for the perfect chai accompaniment.' },
]

export default function MoreFromAmbaySection() {
  return (
    <Section className="bg-card">
      <div className="text-center mb-16">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Beyond the Snack Aisle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
          More from Ambay
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Premium pantry staples for wholesale distribution, all under one trusted brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-card p-8 md:p-10 flex flex-col"
          >
            <h3 className="font-serif text-xl md:text-2xl text-foreground">
              {category.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
