import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { TrendingUp, RefreshCw, Puzzle, Zap } from "lucide-react";

const iconMap = {
  cro: TrendingUp,
  revamps: RefreshCw,
  apps: Puzzle,
  speed: Zap,
};

export function ServicesSection() {
  return (
    <Section>
      <SectionHeader
        title="What we help you improve"
        centered
      />
      
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.id as keyof typeof iconMap];
          return (
            <Card key={service.id} className="hover-elevate" data-testid={`card-service-${service.id}`}>
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center" data-testid="text-services-micro">
        Most brands start with an audit. Retainers follow.
      </p>

      <div className="mt-8 text-center">
        <Link href="/audit">
          <Button data-testid="button-services-cta">
            Start with a conversion audit
          </Button>
        </Link>
      </div>
    </Section>
  );
}
