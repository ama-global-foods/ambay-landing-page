'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-warm-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32">
              {/* Placeholder for logo - replace with actual logo image */}
              <div className="flex h-full items-center">
                <span className="text-xl font-bold text-deep-teal">
                  AMA FOODS
                </span>
              </div>
              {/* Uncomment when logo asset is available:
              <Image
                src="/assets/logo.svg"
                alt="AMA Foods"
                fill
                className="object-contain object-left"
                priority
              />
              */}
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-deep-teal"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-deep-teal"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
