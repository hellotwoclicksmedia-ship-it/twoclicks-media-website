import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const partnerLogos = [
  { name: "Shopify", abbr: "SH" },
  { name: "Klaviyo", abbr: "KL" },
  { name: "Gorgias", abbr: "GR" },
  { name: "Recharge", abbr: "RC" },
  { name: "Yotpo", abbr: "YP" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          <p 
            className="text-primary text-sm font-medium tracking-wide uppercase mb-6 animate-fade-up"
            data-testid="text-hero-tagline"
          >
            Shopify CRO Specialists for DTC
          </p>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-up"
            data-testid="text-hero-headline"
          >
            <span className="text-gradient">Stop Guessing.</span>
            <br />
            <span className="text-foreground">Start Scaling.</span>
          </h1>
          
          <p 
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "100ms" }}
            data-testid="text-hero-subhead"
          >
            Data-backed Shopify support for DTC brands. We turn your traffic into revenue with our proprietary approach.
          </p>

          <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link href="/audit">
              <Button size="lg" className="w-full sm:w-auto text-base" data-testid="button-hero-primary">
                Book Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base"
                data-testid="button-hero-secondary"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          <p 
            className="mt-6 text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "300ms" }}
            data-testid="text-hero-trust"
          >
            Partnering with DTC Founders
          </p>

          <div 
            className="mt-12 flex flex-wrap items-center justify-center gap-8 animate-fade-up"
            style={{ animationDelay: "400ms" }}
            data-testid="partner-logos"
          >
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-muted-foreground/60"
                data-testid={`logo-${logo.name.toLowerCase()}`}
              >
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-xs font-semibold">
                  {logo.abbr}
                </div>
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
