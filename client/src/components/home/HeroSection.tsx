import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiShopify } from "react-icons/si";

const KlaviyoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z"/>
  </svg>
);

const GorgiasIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
  </svg>
);

const RechargeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
  </svg>
);

const YotpoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const partnerLogos = [
  { name: "Shopify", icon: SiShopify },
  { name: "Klaviyo", icon: KlaviyoIcon },
  { name: "Gorgias", icon: GorgiasIcon },
  { name: "Recharge", icon: RechargeIcon },
  { name: "Yotpo", icon: YotpoIcon },
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
            <a href="https://calendly.com/hello-twoclicksmedia/30min" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base"
                data-testid="button-hero-call"
              >
                Book a Call
              </Button>
            </a>
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
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <logo.icon className="w-5 h-5" />
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
