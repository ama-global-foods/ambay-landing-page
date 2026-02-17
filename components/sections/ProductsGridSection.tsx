'use client'

import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { productCategories } from '@/content/products'

export default function ProductsGridSection() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Other Ambay Essentials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Premium pantry staples for wholesale distribution
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map(category => (
            <Card key={category.id} hover>
              <h3 className="text-lg font-semibold text-gray-900">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.items.slice(0, 4).map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
