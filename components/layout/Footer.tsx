export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              AMBAY
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A house brand of AMA Global Foods. From ground to global.
            </p>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Head Office
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Surrey, BC
              <br />
              Canada
            </p>
          </div>

          {/* Regional Office */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Regional Office
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Calgary, AB
              <br />
              Canada
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Contact
            </h4>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:info@amafoods.ca"
                className="text-sm text-foreground transition-colors duration-200 hover:text-primary"
              >
                info@amafoods.ca
              </a>
              <a
                href="https://amaglobalfoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground transition-colors duration-200 hover:text-primary"
              >
                amaglobalfoods.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AMA Global Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
