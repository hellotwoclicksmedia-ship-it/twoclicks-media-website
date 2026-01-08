import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const retainerBenefits = [
  "Take real ownership",
  "Move fast without tickets",
  "Continuously optimise conversion",
  "Become your fractional Shopify product team"
];

export function RetainerSection() {
  return (
    <Section variant="card">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader
          title="Built for long-term growth, not short-term fixes"
          centered
        />
        
        <p className="text-lg text-muted-foreground mb-8" data-testid="text-retainer-intro">
          Our best work happens inside monthly retainers.
        </p>

        <p className="text-muted-foreground mb-6">
          That's where we:
        </p>
        
        <ul className="space-y-3 inline-block text-left mb-8">
          {retainerBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span data-testid={`text-retainer-benefit-${index}`}>{benefit}</span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mb-4">
          We intentionally limit the number of brands we work with at any time.
        </p>

        <p className="text-xl font-semibold mb-8" data-testid="text-retainer-limit">
          We work with a maximum of 10 active brands at once.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retainers">
            <Button size="lg" data-testid="button-retainer-primary">
              Reserve a retainer slot
            </Button>
          </Link>
          <Link href="/audit">
            <Button size="lg" variant="outline" data-testid="button-retainer-secondary">
              Get a Shopify Conversion Audit
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
