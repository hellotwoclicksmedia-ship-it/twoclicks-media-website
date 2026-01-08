import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Terms() {
  useDocumentTitle(
    "Terms of Service | TwoClicks",
    "Please read these terms carefully before using our Shopify CRO and conversion optimization services."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-terms-headline">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using our website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              TwoClicks provides Shopify consulting, conversion rate optimization, and related digital services. The specific scope of services will be outlined in individual agreements with clients.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clients are responsible for providing accurate information, timely feedback, and necessary access to their Shopify stores as required for us to perform our services effectively.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, and logos, is the property of TwoClicks and protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide excellent services, we cannot guarantee specific results. TwoClicks shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us through our contact form.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
