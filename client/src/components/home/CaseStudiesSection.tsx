import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudyHighlight = {
  headline: "From 1.2% to 3.5% Conversion Rate in 90 Days",
  description: "We've helped a Shopify pet and baby store over the course of 90 days to get their conversion rate from 1.2% to 3.5% through our proven CRO process.",
  stats: [
    { value: "+192%", label: "Conversion" },
    { value: "+65%", label: "AOV" },
    { value: "90", label: "Days" }
  ]
};

export function CaseStudiesSection() {
  return (
    <Section variant="card">
      <SectionHeader
        title="Numbers Don't Lie"
        centered
      />
      
      <div className="max-w-4xl mx-auto">
        <Card className="bg-background overflow-visible" data-testid="card-case-study-featured">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <TrendingUp className="h-4 w-4" />
                  <span>Featured Case Study</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4" data-testid="text-case-study-headline">
                  {caseStudyHighlight.headline}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="text-case-study-description">
                  {caseStudyHighlight.description}
                </p>
                <Link href="/case-studies" data-testid="link-case-study-featured">
                  <Button>
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {caseStudyHighlight.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-card rounded-lg border border-border"
                    data-testid={`stat-case-study-${index}`}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-sm text-muted-foreground text-center" data-testid="text-case-studies-micro">
        Screenshots, metrics, and before/after breakdowns included.
      </p>
    </Section>
  );
}
