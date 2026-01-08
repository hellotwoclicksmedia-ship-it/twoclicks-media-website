import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: 1,
    title: "Audit & Diagnose",
    description: "We deeply analyze your store, data, speed, UX, and conversion funnel to find the real problems."
  },
  {
    number: 2,
    title: "Strategy Map",
    description: "We create a prioritized roadmap focused on what will move revenue first, not what looks nice."
  },
  {
    number: 3,
    title: "Execute & Build",
    description: "We implement changes, run CRO experiments, and optimize continuously with fast turnaround."
  },
  {
    number: 4,
    title: "Scale & Iterate",
    description: "What works gets doubled down. What doesn't gets removed. We keep optimizing month over month."
  }
];

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        title="The 4-Step Growth Sprint"
        centered
      />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className="relative bg-card rounded-lg border border-border p-6"
            data-testid={`process-step-${index}`}
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
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
