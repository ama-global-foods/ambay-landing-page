'use client'

import Image from 'next/image'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { makhanaFlavors } from '@/content/products'

export default function MakhanaSection() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-warm-beige">
              {/* Placeholder - replace with actual makhana image */}
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-gray-400">
                  Makhana Product Image
                </span>
              </div>
              {/* Uncomment when image asset is available:
              <Image
                src="/assets/makhana-hero.jpg"
                alt="Popped Lotus Seeds (Makhana)"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Featured Product
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                Popped Lotus Seeds (Makhana)
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Olive oil roasted. Plant-based. Shelf-ready flavors.
              </p>

              {/* Claim chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Roasted in olive oil',
                  'Gluten free',
                  'Vegan',
                  '0% transfat',
                ].map(claim => (
                  <span
                    key={claim}
                    className="rounded-full bg-warm-beige px-4 py-1.5 text-xs font-medium text-deep-teal transition-colors hover:bg-opacity-80"
                  >
                    {claim}
                  </span>
                ))}
              </div>

              {/* Flavor list */}
              <div className="mt-8">
                <p className="text-sm font-medium text-gray-700">
                  Available Flavors:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {makhanaFlavors.map(flavor => (
                    <span
                      key={flavor.id}
                      className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition-colors hover:border-deep-teal hover:text-deep-teal"
                    >
                      {flavor.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
