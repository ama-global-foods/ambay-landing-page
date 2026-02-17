'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-start">
            <p className="animate-fade-in text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Better. Than. Popcorn.
            </p>

            <h1 className="animate-fade-in-delay-1 mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-balance">Not popcorn.</span>
              <br />
              <span className="text-balance">Not chips.</span>
              <br />
              <span className="text-balance text-primary">A new staple.</span>
            </h1>

            <p className="animate-fade-in-delay-2 mt-8 max-w-md text-lg leading-relaxed text-muted-foreground lg:text-xl">
              An ancient superfood, popped for modern cravings. Light. Clean. Satisfying.
            </p>

            <div className="animate-fade-in-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                Explore the Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-foreground/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
              >
                Wholesale Inquiry
              </Link>
            </div>

            {/* Trust line */}
            <p className="animate-fade-in-delay-3 mt-12 text-xs tracking-wide text-muted-foreground">
              Popped, never fried &middot; Plant-based &middot; Gluten free
            </p>
          </div>

          {/* Hero Image -- popcorn-style makhana bucket */}
          <div className="animate-fade-in-delay-2 relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-lg">
              <Image
                src="/images/hero-popcorn.png"
                alt="Ambay Popped Lotus Seeds overflowing from a classic popcorn bucket"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
