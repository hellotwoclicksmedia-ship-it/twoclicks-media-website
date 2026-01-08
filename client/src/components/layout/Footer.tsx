import { Link } from "wouter";

const footerLinks = {
  main: [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/learning", label: "Learning" },
    { href: "/retainers", label: "Retainers" },
    { href: "/audit", label: "Audit" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" data-testid="link-footer-home">
              <span className="text-lg font-semibold tracking-tight cursor-pointer">
                TwoClicks<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-md leading-relaxed" data-testid="text-footer-philosophy">
              Stop guessing. Start scaling. Data-backed Shopify CRO for DTC brands.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" data-testid="text-footer-links-heading">
              Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" data-testid="text-footer-company-heading">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase()}`}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 mt-6 pt-6 border-t border-border">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase()}`}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} TwoClicks Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
