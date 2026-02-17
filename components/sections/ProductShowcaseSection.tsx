'use client'

import Image from 'next/image'
import Section from '@/components/ui/Section'
import { makhanaFlavors } from '@/content/products'

export default function ProductShowcaseSection() {
  return (
    <Section id="products" className="bg-background">
      <div className="text-center mb-16">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Six Flavors. One Mission.
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
          Find your favorite crunch
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {makhanaFlavors.map((flavor) => (
          <div key={flavor.name} className="group flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] mb-5 transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src={flavor.image}
                alt={`Ambay Popped Lotus Seeds - ${flavor.name}`}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 50vw, 280px"
              />
            </div>
            <h3 className="font-serif text-base md:text-lg text-foreground text-center">
              {flavor.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {['Gluten Free', 'Vegan', 'Plant Based', '0% Trans Fat', 'Roasted in Olive Oil'].map((claim) => (
          <span
            key={claim}
            className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground"
          >
            {claim}
          </span>
        ))}
      </div>
    </Section>
  )
}
