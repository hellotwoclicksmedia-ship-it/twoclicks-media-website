import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function CaseStudies() {
  useDocumentTitle(
    "Case Studies - Real Shopify Results | TwoClicks",
    "Before/after breakdowns, metrics, and decisions from real Shopify stores. See how we've helped DTC brands improve conversion rates."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-case-studies-headline">
            Real Shopify results, explained clearly
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-case-studies-subhead">
            Before/after breakdowns, metrics, and decisions — not just screenshots.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="hover-elevate" data-testid={`card-case-study-${study.id}`}>
              <CardHeader>
                <div className="text-primary text-sm font-medium mb-2" data-testid={`text-metric-${study.id}`}>
                  {study.primaryMetric}
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/case-studies/${study.slug}`} data-testid={`link-view-case-study-${study.id}`}>
                  <Button variant="ghost" className="px-0">
                    View case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Want results like these?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a conversion audit to identify your store's biggest opportunities.
          </p>
          <Link href="/audit" data-testid="link-case-studies-audit">
            <Button size="lg" data-testid="button-case-studies-cta">
              Get a Shopify Conversion Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
