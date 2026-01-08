import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useDocumentTitle } from "@/hooks/use-document-title";

const categories = [
  { id: "all", label: "All" },
  { id: "conversion", label: "Conversion" },
  { id: "speed", label: "Speed" },
  { id: "apps", label: "Apps" },
  { id: "ux", label: "UX" },
];

export default function Learning() {
  const [activeCategory, setActiveCategory] = useState("all");

  useDocumentTitle(
    "Learning Hub - Shopify CRO Insights | TwoClicks",
    "Learn how high-converting Shopify stores are built. Frameworks, CRO insights, and practical advice for DTC founders."
  );

  const filteredArticles = activeCategory === "all"
    ? blogArticles
    : blogArticles.filter((article) => article.category === activeCategory);

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6" data-testid="text-learning-headline">
            Learn From <span className="text-gradient">Our Playbook</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-learning-subhead">
            The same frameworks, CRO insights, and strategies we use with our clients — shared openly.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <div className="flex flex-wrap gap-2 mb-8" data-testid="filter-categories">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover-elevate" data-testid={`card-article-${article.id}`}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="capitalize">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-lg leading-snug">
                  <Link href={`/learning/${article.slug}`} data-testid={`link-article-${article.id}`}>
                    <span className="cursor-pointer hover:text-primary transition-colors">
                      {article.title}
                    </span>
                  </Link>
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {article.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <p className="text-center text-muted-foreground py-12" data-testid="text-no-articles">
            No articles found in this category.
          </p>
        )}
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Want us to review your store?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a detailed conversion audit with actionable recommendations.
          </p>
          <Link href="/audit" data-testid="link-learning-audit">
            <Button size="lg" data-testid="button-learning-cta">
              Book Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
