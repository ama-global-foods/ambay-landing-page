'use client'

import { type ReactNode, useRef, useEffect, useState } from 'react'

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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!fadeIn) {
      setIsVisible(true)
      return
    }

    // Small delay to ensure element is mounted
    const timer = setTimeout(() => {
      if (!ref.current) {
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
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )

      observer.observe(ref.current)

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
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
