import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const retainerBenefits = [
  "Take real ownership of your conversion",
  "Move fast without endless tickets",
  "Continuously optimize month-over-month",
  "Become your fractional Shopify product team"
];

export function RetainerSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader
          title="Built for Long-Term Growth"
          description="Our best work happens inside monthly retainers. That's where we can truly own your conversion."
          centered
        />
        
        <ul className="space-y-3 inline-block text-left mb-8">
          {retainerBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span data-testid={`text-retainer-benefit-${index}`}>{benefit}</span>
            </li>
          ))}
        </ul>

        <p className="text-2xl font-bold mb-8" data-testid="text-retainer-limit">
          We work with a maximum of <span className="text-primary">10 active brands</span> at once.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retainers">
            <Button size="lg" data-testid="button-retainer-primary">
              Reserve a Retainer Slot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/audit">
            <Button size="lg" variant="outline" data-testid="button-retainer-secondary">
              Start with an Audit
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" data-testid="text-retainer-micro">
          Retainers typically follow a paid audit.
        </p>
      </div>
    </Section>
  );
}
