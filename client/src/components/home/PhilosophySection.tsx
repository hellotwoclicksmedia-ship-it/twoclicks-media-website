import { Section, SectionHeader } from "@/components/ui/section";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Focus",
    twoclicks: "Conversion & ROI",
    others: "Vanity Metrics"
  },
  {
    category: "Speed",
    twoclicks: "1-Day Turnaround Sprint",
    others: "Weeks of Waiting"
  },
  {
    category: "Ownership",
    twoclicks: "Full Accountability",
    others: "Ticket-Based"
  },
  {
    category: "Pricing",
    twoclicks: "Flat Retainer",
    others: "Hourly Billing"
  }
];

export function PhilosophySection() {
  return (
    <Section variant="card">
      <SectionHeader
        title="Why We're Different"
        centered
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
            <div className="p-4 text-sm font-semibold text-primary text-center">TwoClicks</div>
            <div className="p-4 text-sm font-medium text-muted-foreground text-center">Typical Agency</div>
          </div>
          
          {comparisonData.map((row, index) => (
            <div 
              key={index}
              className="grid grid-cols-3 border-b border-border last:border-0"
              data-testid={`text-philosophy-point-${index}`}
            >
              <div className="p-4 text-sm font-medium">{row.category}</div>
              <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground">{row.twoclicks}</span>
              </div>
              <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
                <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">{row.others}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center" data-testid="link-how-we-work">
        We partner with founders who want someone in their corner, owning conversion, performance, and execution.
      </p>
    </Section>
  );
}
