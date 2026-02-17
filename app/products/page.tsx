import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { makhanaFlavors, productCategories } from '@/content/products'

export const metadata: Metadata = {
  title: 'Products | Ambay',
  description:
    'Explore Ambay product portfolio: premium makhana snacks and pantry staples for wholesale distribution.',
}

export default function ProductsPage() {
  return (
    <div className="bg-warm-cream">
      {/* Page Intro */}
      <Section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Ambay Product Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Premium pantry staples and modern snack formats, sourced globally
            and distributed with care. All products available for wholesale
            distribution.
          </p>
        </div>
      </Section>

      {/* Makhana Expanded Feature */}
      <Section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-warm-beige">
                {/* Placeholder - replace with actual packaging image */}
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-gray-400">
                    Makhana Packaging Image
                  </span>
                </div>
                {/* Uncomment when image asset is available:
                <Image
                  src="/assets/makhana-packaging.jpg"
                  alt="Makhana packaging"
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  Popped Lotus Seeds (Makhana)
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Olive oil roasted makhana, available in six shelf-ready
                  flavors. Plant-based, gluten-free, and vegan. Perfect for
                  retail and foodservice distribution.
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
                      className="rounded-full bg-warm-beige px-4 py-1.5 text-xs font-medium text-deep-teal"
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
                        className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700"
                      >
                        {flavor.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    Request Pricing
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Categories Listed */}
      <Section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 lg:text-4xl">
            Product Categories
          </h2>

          <div className="space-y-12">
            {productCategories.map(category => (
              <div
                key={category.id}
                className="border-b border-gray-200 pb-12 last:border-0"
              >
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-base leading-relaxed text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Need specs or pricing? Contact us.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
