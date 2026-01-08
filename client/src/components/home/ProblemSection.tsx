import { Section } from "@/components/ui/section";
import { X } from "lucide-react";

const problems = [
  "Agencies focused on vanity metrics, not revenue",
  "Endless revisions with zero clarity on outcomes",
  "No one taking real ownership of your store's growth",
];

export function ProblemSection() {
  return (
    <Section variant="card">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            data-testid="text-problem-headline"
          >
            The Agency Treadmill
            <br />
            <span className="text-primary">Ends Here.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8" data-testid="text-problem-body">
            Most Shopify stores leak money silently. You're tired of vanity metrics. You need results that actually matter.
          </p>

          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3"
                data-testid={`problem-${index}`}
              >
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bg-background rounded-lg border border-border p-8 text-center min-w-[280px]">
            <div className="mb-4">
              <span className="text-6xl sm:text-7xl font-bold text-primary" data-testid="text-problem-stat-value">
                3.8%
              </span>
            </div>
            <p className="text-foreground font-semibold text-lg" data-testid="text-problem-stat-label">
              Avg. Conversion Lift
            </p>
            <p className="text-muted-foreground text-sm" data-testid="text-problem-stat-sublabel">
              in the first 30 days
            </p>

            <div className="mt-8 flex justify-center items-end gap-1.5 h-20">
              {[45, 55, 65, 80, 70, 85, 95].map((height, i) => (
                <div
                  key={i}
                  className="w-5 bg-primary rounded-t-sm transition-all"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
