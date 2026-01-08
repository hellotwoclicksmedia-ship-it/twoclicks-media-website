import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "We deeply review your store, data, speed, UX, and conversion flow."
  },
  {
    number: "02",
    title: "Prioritise",
    description: "We identify what will move revenue first — not what looks nice."
  },
  {
    number: "03",
    title: "Execute & Test",
    description: "We implement changes, run CRO experiments, and optimise continuously."
  },
  {
    number: "04",
    title: "Scale",
    description: "What works gets doubled down. What doesn't gets removed."
  }
];

export function ProcessSection() {
  return (
    <Section variant="card">
      <SectionHeader
        title="A simple, owner-level process"
        centered
      />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className="relative"
            data-testid={`process-step-${index}`}
          >
            <div className="text-5xl font-bold text-primary/20 mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground text-center" data-testid="text-process-micro">
        This is how retainers outperform one-time projects.
      </p>
    </Section>
  );
}
