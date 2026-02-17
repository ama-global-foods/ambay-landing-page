import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-deep-teal text-white hover:bg-opacity-90 active:bg-opacity-80',
    secondary:
      'bg-warm-beige text-deep-teal hover:bg-opacity-80 active:bg-opacity-70',
    outline:
      'border-2 border-deep-teal text-deep-teal bg-transparent hover:bg-deep-teal hover:text-white active:bg-opacity-90',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
