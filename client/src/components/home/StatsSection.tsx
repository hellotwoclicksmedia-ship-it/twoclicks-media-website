import { Section } from "@/components/ui/section";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center md:text-left"
            data-testid={`stat-${index}`}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
              {stat.value}
            </p>
            <p className="mt-2 text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      
      <p className="mt-12 text-sm text-muted-foreground text-center md:text-left" data-testid="text-stats-micro">
        Real results from real client stores. No vanity metrics.
      </p>
    </Section>
  );
}
