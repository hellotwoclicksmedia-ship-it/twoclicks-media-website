import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Privacy() {
  useDocumentTitle(
    "Privacy Policy | TwoClicks",
    "Your privacy is important to us. Learn how we collect, use, and protect your information."
  );

  return (
    <Layout>
      <Section className="pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" data-testid="text-privacy-headline">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </Section>

      <Section variant="card">
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when you fill out a form, request an audit, or contact us. This may include your name, email address, phone number, and details about your Shopify store.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Respond to your inquiries and requests</li>
              <li>Provide our services and support</li>
              <li>Send you relevant updates and communications</li>
              <li>Improve our services and website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
