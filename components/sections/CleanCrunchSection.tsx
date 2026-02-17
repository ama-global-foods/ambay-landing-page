'use client'

import Section from '@/components/ui/Section'
import { cleanCrunchBenefits } from '@/content/products'

export default function CleanCrunchSection() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section tag */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The Clean Crunch Gap
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Headline */}
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              <span className="text-balance">
                Not popcorn.{' '}
                <br className="hidden lg:block" />
                Not chips.{' '}
                <br className="hidden lg:block" />
                <span className="text-primary">A new staple.</span>
              </span>
            </h2>
          </div>

          {/* Right - Benefits */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-5">
              {cleanCrunchBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-base leading-relaxed text-secondary-foreground lg:text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="mt-24 border-t border-border" />
      </div>
    </Section>
  )
}
