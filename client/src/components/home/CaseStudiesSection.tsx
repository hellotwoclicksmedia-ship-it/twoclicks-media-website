import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <Section>
      <SectionHeader
        title="Proven results, not promises"
        centered
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.slice(0, 2).map((study) => (
          <Card key={study.id} className="hover-elevate" data-testid={`card-case-study-${study.id}`}>
            <CardHeader>
              <div className="text-primary text-sm font-medium mb-2">
                {study.primaryMetric}
              </div>
              <CardTitle className="text-xl">{study.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {study.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/case-studies/${study.slug}`}>
                <Button variant="ghost" className="px-0" data-testid={`link-case-study-${study.id}`}>
                  View case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center" data-testid="text-case-studies-micro">
        Screenshots, metrics, and before/after breakdowns included.
      </p>
    </Section>
  );
}
