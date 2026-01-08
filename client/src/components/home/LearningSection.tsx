import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function LearningSection() {
  return (
    <Section variant="card">
      <SectionHeader
        title="Learn how high-converting Shopify stores are built"
        description="We share the same frameworks and thinking we use with our clients — openly."
        centered
      />
      
      <div className="grid sm:grid-cols-2 gap-6">
        {blogArticles.slice(0, 4).map((article) => (
          <Card key={article.id} className="hover-elevate" data-testid={`card-article-${article.id}`}>
            <CardHeader>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="capitalize">{article.category}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <CardTitle className="text-base leading-snug">
                {article.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {article.summary}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/learning">
          <Button variant="outline" data-testid="button-learning-cta">
            Explore the learning hub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
