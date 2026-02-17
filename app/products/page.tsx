import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { makhanaFlavors, ambayCategories } from '@/content/products'

export const metadata: Metadata = {
  title: 'Products | Ambay',
  description:
    'Explore Ambay product portfolio: premium makhana snacks and pantry staples for wholesale distribution.',
}

export default function ProductsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Intro */}
      <Section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
            Ambay Product Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Premium pantry staples and modern snack formats, sourced globally
            and distributed with care. All products available for wholesale
            distribution.
          </p>
        </div>
      </Section>

      {/* Makhana Feature */}
      <Section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-secondary">
                <Image
                  src="/images/makhana-hero.jpg"
                  alt="Makhana packaging"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                  Popped Lotus Seeds
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Olive oil roasted makhana, available in six shelf-ready
                  flavors. Plant-based, gluten-free, and vegan.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Roasted in olive oil', 'Gluten free', 'Vegan', '0% transfat'].map(claim => (
                    <span
                      key={claim}
                      className="rounded-sm bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {claim}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium text-foreground">Available Flavors:</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {makhanaFlavors.map(flavor => (
                      <span
                        key={flavor.id}
                        className="rounded-sm border border-border bg-background px-3 py-1.5 text-xs text-foreground"
                      >
                        {flavor.name}
                      </span>
                    ))}
                  </div>
                </div>

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

      {/* Categories */}
      <Section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground lg:text-4xl">
            More from Ambay
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ambayCategories.map(category => (
              <Card key={category.id} hover>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-muted-foreground">
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
