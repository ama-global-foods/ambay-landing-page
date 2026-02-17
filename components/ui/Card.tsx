import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  const baseStyles =
    'rounded-sm bg-background border border-border p-6 transition-all duration-200'
  const hoverStyles = hover
    ? 'hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 cursor-pointer'
    : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
