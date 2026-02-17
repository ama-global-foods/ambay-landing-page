'use client'

import Image from 'next/image'
import Section from '@/components/ui/Section'

const categories = [
  {
    title: 'Basmati Rice',
    image: '/images/ambay-rice.jpg',
    subtitle: 'Everyday & XXXL Extra Long Grain'
  },
  {
    title: 'Whole Wheat Biscuits',
    image: '/images/ambay-cookies.jpg',
    subtitle: 'Punjabi & Suji Atta varieties'
  },
  {
    title: 'Himalayan Pink Salt',
    image: '/images/ambay-salt.jpg',
    subtitle: 'Fine grain & shaker formats'
  },
]

export default function MoreFromAmbaySection() {
  return (
    <Section className="bg-background">
      <div className="text-center mb-16">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Beyond the Snack Aisle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
          More from Ambay
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center group"
          >
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground text-center">
              {category.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              {category.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
