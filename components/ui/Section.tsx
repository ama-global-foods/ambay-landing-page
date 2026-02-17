'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  fadeIn?: boolean
  id?: string
}

export default function Section({
  children,
  className = '',
  fadeIn = true,
  id,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(!fadeIn)

  useEffect(() => {
    if (!fadeIn) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [fadeIn])

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  )
}
