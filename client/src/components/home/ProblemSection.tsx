import { Section, SectionHeader } from "@/components/ui/section";

export function ProblemSection() {
  return (
    <Section variant="card">
      <div className="max-w-3xl">
        <SectionHeader
          title="You didn't start your brand to lose money silently."
        />
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg" data-testid="text-problem-body">
            Most DTC brands don't fail because of lack of demand. They fail because of poor conversion, slow stores, messy apps, and no one taking real ownership.
          </p>
          
          <p className="text-lg">
            You launch. Traffic comes in. Ads run. But conversions stall — and growth feels harder than it should.
          </p>
          
          <p className="text-lg">
            We work with founders who know something is broken, but don't know where or how to fix it properly.
          </p>
        </div>

        <p className="mt-8 text-sm text-muted-foreground italic" data-testid="text-problem-micro">
          If your store feels "almost there" — you're probably right.
        </p>
      </div>
    </Section>
  );
}
