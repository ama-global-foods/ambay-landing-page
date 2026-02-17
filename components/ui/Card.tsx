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
    'rounded-lg bg-white border border-gray-200 p-6 transition-all duration-150'
  const hoverStyles = hover
    ? 'hover:shadow-md hover:border-deep-teal/20 cursor-pointer'
    : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
