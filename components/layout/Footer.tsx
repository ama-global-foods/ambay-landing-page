export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-warm-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-deep-teal">
              AMA Global Foods
            </p>
            <p className="mt-1 text-xs text-gray-600">Surrey, Canada</p>
            <p className="mt-2 text-xs text-gray-500">From Ground to Global.</p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600">
              <a
                href="mailto:info@amafoods.ca"
                className="transition-colors hover:text-deep-teal"
              >
                info@amafoods.ca
              </a>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Wholesale inquiries welcome
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AMA Global Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
