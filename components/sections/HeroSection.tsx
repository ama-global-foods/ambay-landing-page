'use client'

import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'

export default function HeroSection() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Small uppercase line */}
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          Wholesale Distribution • Surrey, Canada
        </p>

        {/* Large headline */}
        <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl xl:text-7xl">
          From Ground to Global.
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl">
          Ambay is the house brand of AMA Global Foods, delivering premium
          pantry staples and modern snack formats to retailers and foodservice
          partners.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/products" variant="primary">
            View Products
          </Button>
          <Button href="/contact" variant="outline">
            Wholesale Inquiry
          </Button>
        </div>
      </div>
    </Section>
  )
}
