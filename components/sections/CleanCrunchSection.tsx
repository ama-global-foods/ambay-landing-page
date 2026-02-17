'use client'

import Section from '@/components/ui/Section'

const pillars = [
  { label: 'Better-for-you', detail: 'A light, popped alternative to fried snacks' },
  { label: 'Shelf-differentiated', detail: 'A true sub-category builder for your aisle' },
  { label: 'Strong margins', detail: 'Premium perception, scalable production' },
  { label: 'Clean label', detail: 'Simple ingredients, modern positioning' },
  { label: 'Repeat velocity', detail: '6 flavor rotation drives basket expansion' },
  { label: 'Flexible placement', detail: 'Snack, health, ethnic, or gluten-free sets' },
]

export default function CleanCrunchSection() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Left - Headline (takes 2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The Clean Crunch Gap
            </p>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              <span className="text-balance">
                Not popcorn.{' '}
                <br className="hidden lg:block" />
                Not chips.{' '}
                <br className="hidden lg:block" />
              </span>
              <span className="text-primary">A new staple.</span>
            </h2>
          </div>

          {/* Right - Pillar grid (takes 3 cols) */}
          <div className="lg:col-span-3">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                <div key={index} className="group">
                  <div className="mb-3 h-px w-8 bg-primary/50 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                  <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    {pillar.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
