import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/learning", label: "Learning" },
  { href: "/retainers", label: "Retainers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <Link href="/" data-testid="link-home">
            <span className="text-lg font-semibold tracking-tight cursor-pointer">
              TwoClicks<span className="text-primary">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors ${
                    location === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="hidden sm:flex"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            <Link href="/audit" className="hidden sm:block" data-testid="link-header-audit">
              <Button data-testid="button-audit-cta">
                Get a Shopify Conversion Audit
              </Button>
            </Link>

            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-background border-b border-border"
          data-testid="nav-mobile"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}>
                <span
                  className={`block px-4 py-3 text-sm font-medium rounded-md cursor-pointer transition-colors ${
                    location === link.href
                      ? "bg-card text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                data-testid="button-theme-toggle-mobile"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <Link href="/audit" className="flex-1" data-testid="link-mobile-audit">
                <Button className="w-full" data-testid="button-audit-cta-mobile">
                  Get Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
