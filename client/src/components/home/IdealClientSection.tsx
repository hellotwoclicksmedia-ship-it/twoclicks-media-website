import { Section, SectionHeader } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const idealClients = [
  "Early-stage or recently launched DTC brands",
  "Founders directly involved in the business",
  "Stores struggling with conversion or execution",
  "Brands looking for long-term partners, not freelancers"
];

export function IdealClientSection() {
  return (
    <Section>
      <div className="max-w-2xl">
        <SectionHeader
          title="Who we're a good fit for"
        />
        
        <ul className="space-y-4">
          {idealClients.map((client, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-lg" data-testid={`text-ideal-client-${index}`}>{client}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted-foreground" data-testid="text-ideal-client-disclaimer">
          We may not be the right fit if you're only looking for one-off tasks.
        </p>
      </div>
    </Section>
  );
}
