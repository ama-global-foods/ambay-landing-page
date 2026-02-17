'use client'

import Image from 'next/image'
import Section from '@/components/ui/Section'
import { makhanaFlavors } from '@/content/products'

export default function ProductShowcaseSection() {
  return (
    <Section id="products" className="bg-background">
      <div className="mb-16 text-center">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Six Flavors. One Mission.
        </p>
        <h2 className="text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
          Find your favorite crunch
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12">
        {makhanaFlavors.map(flavor => (
          <div key={flavor.name} className="group flex flex-col items-center">
            <div className="relative mb-5 aspect-[3/4] w-full transition-all duration-500 group-hover:scale-[1.03] group-hover:drop-shadow-xl">
              <Image
                src={flavor.image}
                alt={`Ambay Popped Lotus Seeds - ${flavor.name}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 280px"
              />
            </div>
            <h3 className="text-center font-serif text-base text-foreground transition-colors duration-300 group-hover:text-primary md:text-lg">
              {flavor.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {[
          'Gluten Free',
          'Vegan',
          'Plant Based',
          '0% Trans Fat',
          'Roasted in Olive Oil',
        ].map(claim => (
          <span
            key={claim}
            className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {claim}
          </span>
        ))}
      </div>
    </Section>
  )
}
