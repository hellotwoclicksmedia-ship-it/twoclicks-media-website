import { Section } from "@/components/ui/section";
import { CheckCircle2, X } from "lucide-react";

const idealFor = [
  "DTC brands doing $50k+ / month",
  "Founders who value data over opinions",
  "Stores looking for a real partner, not just a vendor"
];

const notIdealFor = [
  "Just launched, still finding product-market fit",
  "Looking for one-off tasks only",
  "Not ready to invest in growth"
];

export function IdealClientSection() {
  return (
    <Section variant="card">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        <div className="bg-background rounded-lg border border-border p-6 lg:p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Who this is for
          </h3>
          <ul className="space-y-4">
            {idealFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span data-testid={`text-ideal-client-${index}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-lg border border-border p-6 lg:p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <X className="h-5 w-5 text-muted-foreground" />
            Who this is NOT for
          </h3>
          <ul className="space-y-4">
            {notIdealFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground" data-testid={`text-not-ideal-client-${index}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center" data-testid="text-ideal-client-disclaimer">
        Not sure if you're a good fit? Book a call and we'll tell you honestly.
      </p>
    </Section>
  );
}
