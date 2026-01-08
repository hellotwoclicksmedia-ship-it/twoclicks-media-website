import { Link } from "wouter";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-30" />
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6" data-testid="text-final-cta-headline">
          Ready to <span className="text-gradient">Scale?</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8" data-testid="text-final-cta-body">
          We're currently accepting 3 new partners for this upcoming quarter. Secure your conversion audit before slots fill up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/audit">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base"
              data-testid="button-final-primary"
            >
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base"
              data-testid="button-final-secondary"
            >
              Tell Us About Your Store
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" data-testid="text-final-cta-micro">
          Limited audit slots available each month.
        </p>
      </div>
    </Section>
  );
}
