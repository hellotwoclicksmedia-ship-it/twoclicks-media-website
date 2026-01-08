import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] animate-fade-up"
            data-testid="text-hero-headline"
          >
            Conversion-first Shopify support for ambitious DTC founders
          </h1>
          
          <p 
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "100ms" }}
            data-testid="text-hero-subhead"
          >
            Fractional Shopify product & CRO partners — high-touch retainers, measurable revenue lifts.
          </p>

          <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link href="/audit">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-primary">
                Get a Shopify Conversion Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto"
                data-testid="button-hero-secondary"
              >
                See our case studies
              </Button>
            </Link>
          </div>

          <p 
            className="mt-6 text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "300ms" }}
            data-testid="text-hero-trust"
          >
            Trusted by early-stage DTC brands · Limited retainer slots
          </p>
        </div>
      </div>
    </section>
  );
}
