'use client'

import Section from '@/components/ui/Section'
import { whyAmbayCredentials } from '@/content/products'

export default function WhyAmbaySection() {
  return (
    <Section id="about" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Why Partner With Us
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
              <span className="text-balance">Built for velocity. Designed for margin.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Ambay is the house brand of AMA Global Foods, headquartered in
              Surrey, Canada. We combine ancient ingredient sourcing with
              modern production standards to deliver products that perform
              on shelf and in margin.
            </p>
          </div>

          {/* Right - Credentials */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-4">
              {whyAmbayCredentials.map((credential, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 rounded-sm border border-border bg-background px-6 py-4 transition-colors duration-200 hover:border-primary/30"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 text-primary"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-medium text-secondary-foreground lg:text-base">
                    {credential}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
