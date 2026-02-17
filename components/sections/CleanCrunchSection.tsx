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
    <Section className="bg-background">
      <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">
            The Clean Crunch Gap
          </p>

          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
            <span className="text-balance">
              Not popcorn.{' '}
              <br className="hidden lg:block" />
              Not chips.{' '}
              <br className="hidden lg:block" />
            </span>
            <span className="text-primary">A new staple.</span>
          </h2>
        </div>

        <div className="lg:col-span-3">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <div key={index}>
                <div className="mb-3 h-px w-8 bg-primary/40" />
                <h3 className="text-sm font-medium tracking-wide text-foreground">
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
    </Section>
  )
}
