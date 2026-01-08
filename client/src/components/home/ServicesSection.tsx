import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    id: "cro",
    icon: TrendingUp,
    title: "CRO Audits",
    description: "Deep-dive into your store's checkout, product pages, and funnel to identify exactly where you're losing revenue.",
    cta: "Learn more"
  },
  {
    id: "theme",
    icon: Palette,
    title: "Theme Development",
    description: "Custom Shopify themes or theme optimizations built for speed and conversion, not just aesthetics.",
    cta: "Learn more"
  },
  {
    id: "retention",
    icon: RefreshCw,
    title: "Retention Systems",
    description: "Email flows, loyalty programs, and post-purchase experiences that turn one-time buyers into repeat customers.",
    cta: "Learn more"
  }
];

export function ServicesSection() {
  return (
    <Section className="bg-card border-y border-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Outcome-led Services</h2>
          <p className="text-muted-foreground">We don't sell tasks. We sell measurable outcomes for your business.</p>
        </div>
        <Link href="/services" data-testid="link-services-full">
          <span className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1 cursor-pointer">
            See all capabilities
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
      
      <div className="grid sm:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover-elevate bg-background" data-testid={`card-service-${service.id}`}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="leading-relaxed text-sm">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/services">
                <span className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1 cursor-pointer">
                  {service.cta}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center" data-testid="text-services-micro">
        Most brands start with an audit. Retainers follow.
      </p>

      <div className="mt-8 text-center">
        <Link href="/audit">
          <Button size="lg" data-testid="button-services-cta">
            Start with a conversion audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
