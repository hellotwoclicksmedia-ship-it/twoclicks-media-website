import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  useDocumentTitle(
    study ? `${study.title} | TwoClicks Case Study` : "Case Study Not Found | TwoClicks",
    study ? `${study.description}. ${study.primaryMetric}.` : "Case study not found."
  );

  if (!study) {
    return (
      <Layout>
        <Section className="pt-24 lg:pt-32 text-center">
          <h1 className="text-2xl font-semibold mb-4" data-testid="text-not-found">Case study not found</h1>
          <Link href="/case-studies" data-testid="link-back-case-studies">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to case studies
            </Button>
          </Link>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <Link href="/case-studies" className="inline-block mb-8" data-testid="link-back-case-studies">
          <Button variant="ghost" className="px-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to case studies
          </Button>
        </Link>

        <div className="max-w-3xl">
          <div className="text-primary text-lg font-medium mb-4" data-testid="text-case-study-metric">
            {study.primaryMetric}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-case-study-title">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-case-study-description">
            {study.description}
          </p>
        </div>
      </Section>

      <Section variant="card">
        <SectionHeader title="The Problem" />
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-case-study-problem">
          {study.problem}
        </p>
      </Section>

      <Section>
        <SectionHeader title="Our Approach" />
        <ul className="space-y-4 max-w-3xl">
          {study.approach.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <span className="text-lg pt-1" data-testid={`text-approach-${index}`}>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="card">
        <SectionHeader title="What We Changed" />
        <ul className="space-y-3 max-w-3xl">
          {study.changes.map((change, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span data-testid={`text-change-${index}`}>{change}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader title="Results" />
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Conversion Rate</p>
              <p className="text-xl font-semibold text-primary" data-testid="text-result-conversion">
                {study.results.conversionRate}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Revenue Impact</p>
              <p className="text-xl font-semibold text-primary" data-testid="text-result-revenue">
                {study.results.revenueImpact}
              </p>
            </CardContent>
          </Card>
          {study.results.speedImprovement && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">Speed</p>
                <p className="text-xl font-semibold text-primary" data-testid="text-result-speed">
                  {study.results.speedImprovement}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>

      {study.quote && (
        <Section variant="card">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-6" data-testid="text-quote">
              "{study.quote.text}"
            </blockquote>
            <div>
              <p className="font-semibold" data-testid="text-quote-author">{study.quote.author}</p>
              <p className="text-sm text-muted-foreground" data-testid="text-quote-role">{study.quote.role}</p>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Ready to see similar results?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a conversion audit. We'll identify exactly what's holding your store back.
          </p>
          <Link href="/audit" data-testid="link-case-study-audit">
            <Button size="lg" data-testid="button-case-study-cta">
              Get a Shopify Conversion Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
