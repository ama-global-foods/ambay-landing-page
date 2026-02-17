'use client'

import Image from 'next/image'
import Section from '@/components/ui/Section'

const categories = [
  {
    title: 'Basmati Rice',
    image: '/images/catalog-rice.png',
    subtitle: 'Everyday & XXXL Extra Long Grain',
  },
  {
    title: 'Whole Wheat Biscuits',
    image: '/images/catalog-cookies.png',
    subtitle: 'Punjabi & Suji Atta varieties',
  },
  {
    title: 'Himalayan Pink Salt',
    image: '/images/catalog-salt.png',
    subtitle: 'Fine grain & shaker formats',
  },
]

export default function MoreFromAmbaySection() {
  return (
    <Section className="bg-background">
      <div className="mb-16 text-center">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Beyond the Snack Aisle
        </p>
        <h2 className="text-balance font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
          More from Ambay
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
        {categories.map(category => (
          <div
            key={category.title}
            className="group flex cursor-pointer flex-col items-center"
          >
            <div className="relative mb-6 aspect-[4/3] w-full transition-all duration-500 group-hover:scale-[1.05] group-hover:drop-shadow-xl">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-center font-serif text-xl text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
              {category.title}
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {category.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
