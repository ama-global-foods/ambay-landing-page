import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ambay | Better. Than. Popcorn.',
  description:
    'An ancient superfood, popped for modern cravings. Ambay delivers premium popped lotus seeds and pantry staples to retailers worldwide.',
  keywords:
    'makhana, popped lotus seeds, healthy snacks, superfood, wholesale distribution, AMA Global Foods, plant-based snacks',
}

export const viewport: Viewport = {
  themeColor: '#faf5ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
