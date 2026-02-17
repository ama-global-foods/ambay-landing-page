import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CleanCrunchSection from '@/components/sections/CleanCrunchSection'
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection'
import WellnessSection from '@/components/sections/WellnessSection'
import MoreFromAmbaySection from '@/components/sections/MoreFromAmbaySection'
import WhyAmbaySection from '@/components/sections/WhyAmbaySection'
import FinalCTASection from '@/components/sections/FinalCTASection'

export const metadata: Metadata = {
  title: 'Ambay | Better. Than. Popcorn.',
  description:
    'An ancient superfood, popped for modern cravings. Ambay delivers premium popped lotus seeds and pantry staples to retailers worldwide.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CleanCrunchSection />
      <ProductShowcaseSection />
      <WellnessSection />
      <MoreFromAmbaySection />
      <WhyAmbaySection />
      <FinalCTASection />
    </>
  )
}
