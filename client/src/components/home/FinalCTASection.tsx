import { Link } from "wouter";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <Section className="bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-6" data-testid="text-final-cta-headline">
          Ready to improve your store's conversion?
        </h2>
        
        <p className="text-lg opacity-80 mb-10" data-testid="text-final-cta-body">
          Start with a conversion audit. We'll tell you exactly what's broken — and what to fix first.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/audit">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground"
              data-testid="button-final-primary"
            >
              Get a Shopify Conversion Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-background/20 text-background hover:bg-background/10"
              data-testid="button-final-secondary"
            >
              Tell us about your store
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm opacity-60" data-testid="text-final-cta-micro">
          Limited audit slots available each month.
        </p>
      </div>
    </Section>
  );
}
