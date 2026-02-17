'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'

export default function FinalCTASection() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          Bring this superfood to your aisle.
        </h2>

        <p className="mt-6 text-base md:text-lg leading-relaxed opacity-80 max-w-lg mx-auto">
          {"The demand for better-for-you snacks isn't slowing down. Let's talk about how Ambay fits your shelves."}
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-background text-foreground px-10 py-4 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </Section>
  )
}
