import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { TrendingUp, RefreshCw, Puzzle, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

const iconMap = {
  cro: TrendingUp,
  revamps: RefreshCw,
  apps: Puzzle,
  speed: Zap,
};

export default function Services() {
  useDocumentTitle(
    "Shopify Services - CRO, Store Revamps, App Integration | TwoClicks",
    "Shopify services built around conversion and ownership. CRO optimization, store revamps, app integration, and speed optimization for DTC brands."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6" data-testid="text-services-headline">
            Outcome-Led <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-services-subhead">
            We don't sell tasks. We sell measurable outcomes for your Shopify store.
          </p>
          <Link href="/audit" data-testid="link-services-audit">
            <Button size="lg" data-testid="button-services-hero-cta">
              Book Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section variant="card">
        <SectionHeader
          title="Our services"
          description="Outcome-led, not a list of tasks"
        />
        
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap];
            return (
              <Card key={service.id} className="overflow-visible" data-testid={`card-service-detail-${service.id}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Includes</h4>
                      <ul className="space-y-3">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Outcome</h4>
                      <p className="text-foreground">{service.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4" data-testid="text-services-delivery-headline">
            Most work happens inside retainers
          </h2>
          <p className="text-muted-foreground mb-8">
            While we offer one-time projects, our best results come from long-term retainers where we can continuously optimise and take ownership.
          </p>
          <Link href="/retainers" data-testid="link-services-retainers">
            <Button variant="outline" data-testid="button-services-retainers-cta">
              See how retainers work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
