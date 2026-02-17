import Section from '@/components/ui/Section'
import { trustStatements } from '@/content/products'

export default function TrustStrip() {
  return (
    <Section className="border-y border-gray-200 bg-white py-12" fadeIn={false}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {trustStatements.map((statement, index) => (
            <div
              key={index}
              className="text-center text-sm font-medium text-gray-700"
            >
              {statement}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
