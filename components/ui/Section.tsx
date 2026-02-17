import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  fadeIn?: boolean
}

export default function Section({
  children,
  className = '',
  fadeIn = true,
}: SectionProps) {
  const fadeClass = fadeIn ? 'animate-fade-in' : ''

  return <section className={`${fadeClass} ${className}`}>{children}</section>
}
