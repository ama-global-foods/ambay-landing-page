import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ambay | From Ground to Global',
  description:
    'Ambay is the house brand of AMA Global Foods, delivering premium pantry staples and modern snack formats to retailers and foodservice partners.',
  keywords:
    'wholesale distribution, food trading, makhana, pantry staples, AMA Global Foods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
