import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ShoppingCart, Clock } from "lucide-react";

const quickWins = [
  {
    icon: Zap,
    title: "Load Speed Optimization",
    description: "Cut 2+ seconds off your page load. Speed = revenue.",
    stat: "-2.5s avg"
  },
  {
    icon: ShoppingCart,
    title: "Checkout Friction Removal",
    description: "Remove the barriers that stop customers from buying.",
    stat: "+18% CVR"
  },
  {
    icon: Clock,
    title: "Mobile UX Overhaul",
    description: "60%+ of traffic is mobile. Make it convert like desktop.",
    stat: "+25% Mobile"
  }
];

export function StatsSection() {
  return (
    <Section>
      <SectionHeader
        title="Quick Wins We Spot Instantly"
        description="Most stores are leaking revenue. Here are 3 fixes we usually implement in the first 30 days."
        centered
      />
      
      <div className="grid sm:grid-cols-3 gap-6">
        {quickWins.map((win, index) => (
          <Card key={index} className="text-center" data-testid={`stat-${index}`}>
            <CardContent className="pt-8 pb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <win.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{win.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {win.description}
              </p>
              <p className="text-2xl font-bold text-primary">{win.stat}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <p className="mt-12 text-sm text-muted-foreground text-center" data-testid="text-stats-micro">
        Real results from real client stores. No vanity metrics.
      </p>
    </Section>
  );
}
