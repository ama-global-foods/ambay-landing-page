'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'

export default function FinalCTASection() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
          Bring this superfood to your aisle.
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed opacity-80 md:text-lg">
          {
            "The demand for better-for-you snacks isn't slowing down. Let's talk about how Ambay fits your shelves."
          }
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-background px-10 py-4 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </Section>
  )
}
