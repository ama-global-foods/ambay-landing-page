'use client'

import Image from 'next/image'
import Section from '@/components/ui/Section'
import { makhanaFlavors } from '@/content/products'

export default function ProductShowcaseSection() {
  return (
    <Section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Popped Lotus Seeds
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
            <span className="text-balance">Six flavors. One ancient ingredient.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Olive oil roasted makhana in shelf-ready formats designed for modern snacking.
          </p>
        </div>

        {/* Flavor grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {makhanaFlavors.map((flavor) => (
            <div
              key={flavor.id}
              className="group flex flex-col rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Placeholder image area */}
              <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-secondary">
                <Image
                  src="/images/makhana-bowl.jpg"
                  alt={`Ambay ${flavor.name} popped lotus seeds`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {flavor.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {flavor.descriptor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Claims strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {[
            'Low Calorie',
            'High Protein',
            'Gluten Free',
            'Trans-Fat Free',
            'Vegan',
            'Popped in Olive Oil',
          ].map((claim) => (
            <span
              key={claim}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
            >
              {claim}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
