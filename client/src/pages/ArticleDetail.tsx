import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/lib/data";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  useDocumentTitle(
    article ? `${article.title} | TwoClicks Learning` : "Article Not Found | TwoClicks",
    article ? article.summary : "Article not found."
  );

  if (!article) {
    return (
      <Layout>
        <Section className="pt-24 lg:pt-32 text-center">
          <h1 className="text-2xl font-semibold mb-4" data-testid="text-not-found">Article not found</h1>
          <Link href="/learning" data-testid="link-back-learning">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to learning hub
            </Button>
          </Link>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <Link href="/learning" className="inline-block mb-8" data-testid="link-back-learning">
          <Button variant="ghost" className="px-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to learning hub
          </Button>
        </Link>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="capitalize">
              {article.category}
            </Badge>
            <span className="text-sm text-muted-foreground" data-testid="text-article-read-time">{article.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-article-title">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-article-summary">
            {article.summary}
          </p>
        </div>
      </Section>

      <Section variant="card">
        <article className="max-w-3xl">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed mb-6" data-testid={`text-content-${index}`}>
              {paragraph}
            </p>
          ))}
        </article>
      </Section>

      {article.checklist && (
        <Section>
          <div className="max-w-3xl">
            <SectionHeader title="Practical Checklist" />
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {article.checklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span data-testid={`text-checklist-${index}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>
      )}

      <Section variant="card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Want us to review your store?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a detailed conversion audit with actionable recommendations tailored to your store.
          </p>
          <Link href="/audit" data-testid="link-article-audit">
            <Button size="lg" data-testid="button-article-cta">
              Get a Shopify Conversion Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
