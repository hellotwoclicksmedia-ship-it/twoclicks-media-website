import { Link } from "wouter";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/lib/data";
import { ArrowRight, BookOpen } from "lucide-react";

export function LearningSection() {
  return (
    <Section>
      <SectionHeader
        title="Learn From Our Playbook"
        description="We share the same frameworks and thinking we use with our clients — openly."
        centered
      />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogArticles.slice(0, 4).map((article) => (
          <Card key={article.id} className="hover-elevate" data-testid={`card-article-${article.id}`}>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <BookOpen className="h-3 w-3" />
                <span className="capitalize">{article.category}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <CardTitle className="text-sm leading-snug line-clamp-2">
                {article.title}
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed line-clamp-2">
                {article.summary}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/learning">
          <Button variant="outline" data-testid="button-learning-cta">
            Explore the Learning Hub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
