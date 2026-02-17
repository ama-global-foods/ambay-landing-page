'use client'

import Section from '@/components/ui/Section'

export default function WellnessSection() {
  return (
    <Section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Our Philosophy
          </p>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
            <span className="text-balance">Popped, never fried.</span>
          </h2>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Simple ingredients providing sustainable positioning. In a market 
            shifting toward plant-based, clean-label demand, Ambay delivers an 
            ancient superfood that meets modern expectations. No artificial 
            preservatives. No trans fats. Just honest, better-for-you snacking 
            rooted in tradition and built for today.
          </p>

          <div className="mx-auto mt-12 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
            <div className="flex flex-col items-center rounded-sm border border-border bg-background px-8 py-6">
              <span className="font-serif text-3xl font-bold text-primary">0g</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Trans Fat
              </span>
            </div>
            <div className="flex flex-col items-center rounded-sm border border-border bg-background px-8 py-6">
              <span className="font-serif text-3xl font-bold text-primary">100%</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Plant-Based
              </span>
            </div>
            <div className="flex flex-col items-center rounded-sm border border-border bg-background px-8 py-6">
              <span className="font-serif text-3xl font-bold text-primary">0</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Artificial Additives
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
