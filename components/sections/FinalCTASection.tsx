'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'

export default function FinalCTASection() {
  return (
    <Section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
            <span className="text-balance">Bring this superfood to your aisle.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {"The demand for better-for-you snacks isn't slowing down. Why would you?"}
          </p>

          <div className="mt-10">
            <Link
              href="mailto:info@amafoods.ca"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-10 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
