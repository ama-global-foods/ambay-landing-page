'use client'

import Section from '@/components/ui/Section'

const stats = [
  { value: '0g', label: 'Trans Fat' },
  { value: '100%', label: 'Plant-Based' },
  { value: '0', label: 'Artificial Anything' },
]

export default function WellnessSection() {
  return (
    <Section className="bg-foreground text-background">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
          Popped, never fried.
        </h2>

        <p className="mt-8 mx-auto max-w-xl text-base leading-relaxed opacity-70">
          Ancient superfood meets modern expectation. No preservatives, no 
          fillers, no shortcuts. Just honest, clean-label snacking rooted 
          in tradition and built for today.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
                {stat.value}
              </span>
              <span className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
