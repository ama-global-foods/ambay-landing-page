import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MakhanaSection from '@/components/sections/MakhanaSection'
import ProductsGridSection from '@/components/sections/ProductsGridSection'
import TrustStrip from '@/components/sections/TrustStrip'

export const metadata: Metadata = {
  title: 'Ambay | From Ground to Global',
  description:
    'Ambay is the house brand of AMA Global Foods, delivering premium pantry staples and modern snack formats to retailers and foodservice partners.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MakhanaSection />
      <ProductsGridSection />
      <TrustStrip />
    </>
  )
}
