import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Ambay',
  description:
    'Get in touch with AMA Global Foods for wholesale inquiries and product information.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
