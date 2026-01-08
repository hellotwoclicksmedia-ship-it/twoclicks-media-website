import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { retainerTiers } from "@/lib/data";
import { ArrowRight, CheckCircle2, RefreshCw, Zap, Users, Timer } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

const whyRetainers = [
  {
    icon: RefreshCw,
    title: "Continuous optimisation",
    description: "beats one-off fixes"
  },
  {
    icon: Zap,
    title: "Faster execution",
    description: "without tickets"
  },
  {
    icon: Timer,
    title: "Better prioritisation",
    description: "over time"
  },
  {
    icon: Users,
    title: "Shared context",
    description: "→ better decisions"
  }
];

export default function Retainers() {
  useDocumentTitle(
    "Shopify Retainers - Fractional Product & CRO Team | TwoClicks",
    "High-touch Shopify retainers for serious DTC founders. Act as your fractional Shopify product & CRO team focused on long-term growth."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-retainers-headline">
            High-touch Shopify retainers for serious founders
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-retainers-subhead">
            We act as your fractional Shopify product & CRO team — focused on long-term growth.
          </p>
          <Link href="/contact" data-testid="link-retainers-contact">
            <Button size="lg" data-testid="button-retainers-hero-cta">
              Reserve a retainer slot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section variant="card">
        <SectionHeader
          title="Why monthly retainers outperform one-time projects"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyRetainers.map((item, index) => (
            <div key={index} className="flex items-start gap-3" data-testid={`why-retainer-${index}`}>
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Retainer options"
          description="No pricing shown — every brand is different. Let's talk about what you need."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {retainerTiers.map((tier) => (
            <Card 
              key={tier.id} 
              className={`relative overflow-visible ${tier.popular ? "border-primary" : ""}`}
              data-testid={`card-retainer-${tier.id}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4" data-testid="text-retainers-capacity">
            We work with a maximum of 10 active brands at a time
          </h2>
          <p className="text-muted-foreground mb-8">
            Quality over quantity. We intentionally limit the number of brands we work with to maintain high-touch service.
          </p>
          <Link href="/contact" data-testid="link-retainers-availability">
            <Button size="lg" data-testid="button-retainers-availability-cta">
              Check availability
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
