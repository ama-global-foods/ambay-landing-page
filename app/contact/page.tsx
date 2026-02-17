'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        message: '',
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20 lg:pt-24">
      <Section className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
              Wholesale Inquiry
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us about your business and product requirements.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <Input
              label="City / Region"
              name="city"
              type="text"
              required
              value={formData.city}
              onChange={handleChange}
            />

            <Textarea
              label="Message"
              name="message"
              required
              placeholder="Tell us about your business and product requirements..."
              value={formData.message}
              onChange={handleChange}
            />

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="rounded-sm bg-green-50 p-4 text-sm text-green-800">
                Thank you for your inquiry. We will respond within 1-2 business
                days.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-sm bg-red-50 p-4 text-sm text-red-800">
                There was an error submitting your form. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </div>
          </form>

          {/* Footer Note */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            We respond within 1-2 business days.
          </p>
        </div>
      </Section>
    </div>
  )
}
