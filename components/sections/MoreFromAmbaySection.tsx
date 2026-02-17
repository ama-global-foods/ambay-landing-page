'use client'

import Section from '@/components/ui/Section'
import { ambayCategories } from '@/content/products'

const categoryIcons: Record<string, JSX.Element> = {
  rice: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v12M8 8.5c2-1.5 4-1.5 4-1.5s2 0 4 1.5M8 15.5c2 1.5 4 1.5 4 1.5s2 0 4-1.5" />
    </svg>
  ),
  jaggery: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  flour: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
    </svg>
  ),
  salt: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l2 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8l2-6z" />
      <path d="M6 8h12" />
    </svg>
  ),
  biscuits: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  ),
  rusk: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 6v12M12 6v12M17 6v12" />
    </svg>
  ),
}

export default function MoreFromAmbaySection() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Beyond the Snack Aisle
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
            <span className="text-balance">More from Ambay</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Premium pantry staples for wholesale distribution, all under one trusted brand.
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ambayCategories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col rounded-sm border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                {categoryIcons[category.id]}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
