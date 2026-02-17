'use client'

import { type ReactNode, useRef, useEffect, useState } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export default function Section({
  children,
  className = '',
  id,
  fullWidth = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 transition-all duration-700 ease-out lg:py-32 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
      )}
    </section>
  )
}
