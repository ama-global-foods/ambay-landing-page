# Content Editing Guide

Quick reference for where to edit different types of content.

## Product Information

### Makhana Flavors

**File**: `/content/products.ts`

```typescript
export const makhanaFlavors: MakhanaFlavor[] = [
  { id: 'tangy-tomato', name: 'Tangy Tomato' },
  // Add or edit flavors here
]
```

### Product Categories

**File**: `/content/products.ts`

```typescript
export const productCategories: ProductCategory[] = [
  {
    id: 'baking-sweeteners',
    title: 'Baking & Sweeteners',
    items: [
      'Organic cane sugar',
      // Add or edit items here
    ],
  },
]
```

### Trust Statements

**File**: `/content/products.ts`

```typescript
export const trustStatements = [
  'Wholesale-focused',
  // Add or edit statements here
]
```

## Page Copy

### Homepage Hero

**File**: `/components/sections/HeroSection.tsx`

- Line 8: "Wholesale Distribution • Surrey, Canada"
- Line 12: "From Ground to Global."
- Line 17-20: Subtext paragraph
- Line 25-26: CTA button text

### Makhana Section

**File**: `/components/sections/MakhanaSection.tsx`

- Line 20: "Featured Product" label
- Line 23: "Popped Lotus Seeds (Makhana)" headline
- Line 26: Product description
- Line 30: Claim chips array

### Products Page Intro

**File**: `/app/products/page.tsx`

- Line 19: "Ambay Product Portfolio" headline
- Line 20-24: Intro paragraph

### Contact Page

**File**: `/app/contact/page.tsx`

- Line 62: "Wholesale Inquiry" headline
- Line 65: Subtext
- Line 154: Footer note text

## Brand Information

### Company Name & Location

**File**: `/components/layout/Header.tsx` (line 18)
**File**: `/components/layout/Footer.tsx` (line 7-8)

### Contact Email

**File**: `/components/layout/Footer.tsx` (line 15)

### Tagline

Used throughout:

- Hero section: `/components/sections/HeroSection.tsx`
- Footer: `/components/layout/Footer.tsx`

## SEO Metadata

### Homepage

**File**: `/app/page.tsx` (lines 3-8)

### Products Page

**File**: `/app/products/page.tsx` (lines 3-8)

### Contact Page

**File**: `/app/contact/layout.tsx` (lines 3-8)

## Colors

### Brand Colors

**File**: `/tailwind.config.ts` (lines 12-15)

Current values:

- `deep-teal`: `#1a4d5c`
- `warm-cream`: `#fdf7f0`
- `warm-beige`: `#f5ede0`

To match master file exactly, update these hex values.

## Typography

### Font Families

**File**: `/app/globals.css` (lines 7-8)
**File**: `/tailwind.config.ts` (lines 17-19)

Currently using:

- Headings: Georgia (Marble font placeholder)
- Body: System sans-serif stack

To use actual Marble font, add font file and update CSS variables.

## Images

### Logo

**File**: `/components/layout/Header.tsx` (lines 13-24)

- Uncomment Image component
- Place logo in `/assets/logo.svg` or `/assets/logo.png`

### Makhana Hero Image

**File**: `/components/sections/MakhanaSection.tsx` (lines 15-25)

- Uncomment Image component
- Place image in `/assets/makhana-hero.jpg`

### Makhana Packaging Image

**File**: `/app/products/page.tsx` (lines 30-40)

- Uncomment Image component
- Place image in `/assets/makhana-packaging.jpg`

## Form Submission

### Contact Form Handler

**File**: `/app/contact/page.tsx` (lines 31-54)

Currently simulates submission. To connect to real service:

1. Create API route: `/app/api/contact/route.ts`
2. Update `handleSubmit` function to call API
3. Add environment variables for email service (if needed)

Example API route structure:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Send email or save to database
  return Response.json({ success: true })
}
```
