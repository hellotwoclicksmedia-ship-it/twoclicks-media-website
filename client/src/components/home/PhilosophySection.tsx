import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const philosophyPoints = [
  "We care about outcomes, not just deliverables",
  "We think long-term, not \"project-to-project\"",
  "We stay involved after launch",
  "We optimise continuously, not once",
];

export function PhilosophySection() {
  return (
    <Section variant="card">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeader
            title="We think like owners — not vendors."
            description="Most Shopify agencies sell tasks. We take responsibility."
          />
          
          <p className="text-muted-foreground mb-6" data-testid="text-philosophy-intro">
            That means:
          </p>
          
          <ul className="space-y-4">
            {philosophyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground" data-testid={`text-philosophy-point-${index}`}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
          
          <p className="mt-8 text-muted-foreground">
            We partner with founders who want someone in their corner, owning conversion, performance, and execution.
          </p>
          
          <Link href="/about" className="inline-block mt-6">
            <span className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1 cursor-pointer" data-testid="link-how-we-work">
              How we work
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-md bg-gradient-to-br from-card to-background border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-semibold">Ownership</p>
              <p className="text-muted-foreground mt-2">Not just delivery</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
