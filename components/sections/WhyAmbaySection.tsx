'use client'

import Section from '@/components/ui/Section'

const credentials = [
  {
    heading: 'Costco-Audited Facility',
    detail:
      'Production that meets the highest retail compliance standards in North America.',
  },
  {
    heading: 'HACCP & GMP Certified',
    detail: 'End-to-end food safety systems from sourcing to shelf.',
  },
  {
    heading: 'Export Ready',
    detail: 'Established logistics for Canada, USA, and international markets.',
  },
  {
    heading: 'Scalable Production',
    detail: 'Capacity to support national rollouts and seasonal velocity.',
  },
]

export default function WhyAmbaySection() {
  return (
    <Section id="about" className="bg-background">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Why Ambay
          </p>
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            Built for velocity. Designed for margin.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Ambay is the house brand of AMA Global Foods, headquartered in
            Surrey, Canada. We combine ancient ingredient sourcing with modern
            production standards to deliver products that perform on shelf and
            in margin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {credentials.map((item, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="font-serif text-lg text-foreground md:text-xl">
                {item.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
