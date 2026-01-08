import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Target, Clock, Lightbulb } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

const beliefs = [
  "Conversion matters more than aesthetics",
  "Long-term thinking beats quick wins",
  "Founders deserve partners, not vendors"
];

const howWeWork = [
  {
    icon: Users,
    title: "Small, focused team",
    description: "We stay small intentionally. Every project gets senior attention."
  },
  {
    icon: Target,
    title: "Limited clients",
    description: "We work with a maximum of 10 brands to maintain quality."
  },
  {
    icon: Clock,
    title: "High context",
    description: "Long-term relationships mean we understand your brand deeply."
  },
  {
    icon: Lightbulb,
    title: "Outcome-driven decisions",
    description: "Every decision is measured against conversion impact."
  }
];

export default function About() {
  useDocumentTitle(
    "About TwoClicks - Our Philosophy & Approach",
    "Built around ownership, not deliverables. Learn about our approach to helping DTC founders improve their Shopify stores."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-about-headline">
            Built around ownership, not deliverables
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-subhead">
            We're a small, focused team that partners with DTC founders to improve their Shopify stores through conversion-first thinking and long-term ownership.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <SectionHeader title="What we believe" />
        <div className="max-w-2xl">
          <ul className="space-y-4">
            {beliefs.map((belief, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-lg" data-testid={`text-belief-${index}`}>{belief}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="How TwoClicks works"
          description="We've structured everything around delivering real results for founders."
        />
        
        <div className="grid sm:grid-cols-2 gap-8">
          {howWeWork.map((item, index) => (
            <div key={index} className="flex items-start gap-4" data-testid={`how-we-work-${index}`}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Brand-first, ego-free
          </h2>
          <p className="text-muted-foreground mb-8">
            We don't lead with faces or flashy portfolios. We lead with results. Our clients' success is our success. We're here to make your brand stronger, not to make ourselves famous.
          </p>
          <Link href="/case-studies" data-testid="link-about-case-studies">
            <Button variant="outline" data-testid="button-about-case-studies">
              See our results
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Ready to work together?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a conversation. We'll tell you honestly if we're a good fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/audit" data-testid="link-about-audit">
              <Button size="lg" data-testid="button-about-audit">
                Get a Shopify Conversion Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-about-contact">
              <Button size="lg" variant="outline" data-testid="button-about-contact">
                Tell us about your store
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
