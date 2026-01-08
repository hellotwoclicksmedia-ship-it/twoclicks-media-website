import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function NotFound() {
  useDocumentTitle(
    "Page Not Found | TwoClicks",
    "The page you're looking for doesn't exist. Return to our homepage or contact us for help."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-6xl font-bold text-primary mb-4" data-testid="text-404">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4" data-testid="text-not-found-headline">
            Page not found
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-not-found-description">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" data-testid="link-home">
              <Button size="lg" data-testid="button-go-home">
                <Home className="mr-2 h-4 w-4" />
                Go to homepage
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-contact">
              <Button size="lg" variant="outline" data-testid="button-contact">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
