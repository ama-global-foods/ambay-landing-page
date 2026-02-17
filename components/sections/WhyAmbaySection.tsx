'use client'

import Section from '@/components/ui/Section'

const credentials = [
  { heading: 'Costco-Audited Facility', detail: 'Production that meets the highest retail compliance standards in North America.' },
  { heading: 'HACCP & GMP Certified', detail: 'End-to-end food safety systems from sourcing to shelf.' },
  { heading: 'Export Ready', detail: 'Established logistics for Canada, USA, and international markets.' },
  { heading: 'Scalable Production', detail: 'Capacity to support national rollouts and seasonal velocity.' },
]

export default function WhyAmbaySection() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Why Ambay
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            Built for velocity. Designed for margin.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg">
            Ambay is the house brand of AMA Global Foods, headquartered in Surrey, 
            Canada. We combine ancient ingredient sourcing with modern production 
            standards to deliver products that perform on shelf and in margin.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {credentials.map((item, i) => (
            <div key={i} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
              <h3 className="font-serif text-xl md:text-2xl text-foreground">
                {item.heading}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
