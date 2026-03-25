import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
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
        <div className="max-w-3xl space-y-10">

          <div>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to TwoClicks Media! This Privacy Policy explains how we at TwoClicks Media ("TwoClicks Media," "we," "us," or "our") collect, use, and protect your personal information. This policy applies to anyone who uses our website (<a href="https://twoclicksmedia.com" className="text-primary hover:underline">https://twoclicksmedia.com</a>) or our Shopify apps, including Shopify merchants and their customers.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using any of our services, you agree to the terms of this policy. We may update this policy from time to time, and your continued use of our services after any changes means you accept those changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2. Scope of This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy governs the collection, use, and disclosure of your personal information when you visit our website or use our Shopify apps.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This policy does not apply to any third-party websites or services that you may access through links on our site or within our apps. These external sites operate independently, have their own privacy policies, and we are not responsible for their content, practices, or actions. We encourage you to review their policies before providing any personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">3. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect different types of information depending on how you interact with us.
            </p>

            <h3 className="text-base font-semibold mb-3">From Our Website</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you visit our website, you may provide us with information through forms, such as when you contact us. The information we collect may include:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-6">
              <li><span className="font-medium text-foreground">Contact Information:</span> Name, email address, phone number, and company name. We use this to communicate with you and respond to your inquiries.</li>
              <li><span className="font-medium text-foreground">Usage Data:</span> We use analytics tools to collect non-personally identifiable information about your website activity, such as your browser type, operating system, IP address, and referral pages.</li>
            </ul>

            <h3 className="text-base font-semibold mb-3">From Our Apps</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To provide our app functionality, we need to access certain information from your Shopify store. We only collect the data we absolutely need to deliver our service.
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li><span className="font-medium text-foreground">Orders:</span> We access order information (Order ID, customer name, email, products, and dates) to power features that link past orders to your customer relationships within the app.</li>
              <li><span className="font-medium text-foreground">Store Information:</span> We collect your store's name, email, address, phone number, and URL. This helps us make necessary improvements to our services without disrupting your store.</li>
              <li><span className="font-medium text-foreground">Customers:</span> We gather customer details (names, emails, addresses, payment details, and phone numbers) to help process orders and ensure the app works smoothly for everyone.</li>
              <li><span className="font-medium text-foreground">Products &amp; Collections:</span> We access product details (title, ID, type, pricing, and inventory) to simplify product filtering and management within the app.</li>
              <li><span className="font-medium text-foreground">Shipping:</span> We access shipping information (like shipping rates) to provide updates and support for shipping-related features.</li>
              <li><span className="font-medium text-foreground">Usage Data:</span> We may collect anonymized usage data within the app environment to understand how users interact with the app and improve its functionality. This data might include information about features used and buttons clicked.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">4. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to provide and improve our services and apps. Our purposes for using your information include:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li><span className="font-medium text-foreground">App Functionality:</span> To deliver the core functions of our apps, such as syncing data, managing customer interactions, and configuring settings.</li>
              <li><span className="font-medium text-foreground">Website &amp; App Improvement:</span> To analyze user behavior, understand traffic patterns, and improve the overall user experience and functionality of our website and apps.</li>
              <li><span className="font-medium text-foreground">Support:</span> To provide technical and customer support, troubleshoot issues, and deliver updates about our apps.</li>
              <li><span className="font-medium text-foreground">Communication:</span> To respond to your inquiries, send you updates, and, with your permission, send you marketing communications about new products, services, or promotions we think you will find interesting.</li>
              <li><span className="font-medium text-foreground">Personalization:</span> To personalize your experience on our website or within our apps by tailoring content or features based on your past interactions.</li>
              <li><span className="font-medium text-foreground">Targeted Advertising:</span> In some cases, we may use anonymized data with third-party tools (like Google Ads or Facebook Pixel) to deliver ads relevant to your interests on those platforms. We will never share your personal information with advertisers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">5. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will never sell, rent, or share your personal information with other companies for their marketing purposes. We may share your information in the following specific situations:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li><span className="font-medium text-foreground">With Service Providers:</span> We work with other companies that help us provide our services, such as for marketing, customer service, or IT support. These companies may have access to your data, but they are only allowed to use it to perform the services we have hired them for.</li>
              <li><span className="font-medium text-foreground">For Legal Reasons:</span> We may share your data if we believe it is necessary to comply with a law, a legal request, or to protect the safety, rights, or property of our company or our users.</li>
              <li><span className="font-medium text-foreground">In a Business Transfer:</span> If we are involved in a merger, acquisition, or similar business change, your information may be transferred to the new company. In this case, your information would still be protected under similar terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">6. Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you provide us with personal information by submitting a contact form, installing our app, or using our services in any other way, you imply your consent for us to collect and use that information for the purposes outlined in this policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">7. Data We Collect from Third-Party Sources</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may receive your personal data from third parties, such as companies that subscribe to TwoClicks Media services or partners. This information is not collected by us but by a third party and is subject to that third party's own separate privacy and data collection policies. We have no control or input on how your personal data is handled by third parties. If you have any questions, you should first contact the relevant third party for further information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">8. Brand Likeness and Testimonials</h2>
            <p className="text-muted-foreground leading-relaxed">
              TwoClicks Media reserves the right to share and promote client likeness through testimonials and/or reviews unless we receive a written request from the specific client or company not to do so. We may also share communications gathered throughout a project for promotional purposes unless requested otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">9. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable precautions and follow industry best practices to protect your personal information from being inappropriately lost, misused, accessed, disclosed, altered, or destroyed. We encrypt your data when it is sent over the internet and use other security measures to keep it safe. However, please remember that no method of online storage is 100% secure. If we learn of a data breach, we will notify you and the proper authorities as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">10. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will retain your personal information for as long as it is necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. If you ask us to, we will delete this information. If you uninstall our app, we automatically delete your data within 72 hours.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">11. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service is not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or legal guardian and you are aware that your child has provided us with personal information, please contact us at{" "}
              <a href="mailto:hello@twoclicksmedia.com" className="text-primary hover:underline">hello@twoclicksmedia.com</a>. We will take steps to remove that information from our servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">12. Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A cookie is a small file that your browser stores on your device. We use the following types of cookies to give you the best experience possible:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-4">
              <li><span className="font-medium text-foreground">Strictly Necessary:</span> These cookies are required to run our service.</li>
              <li><span className="font-medium text-foreground">Preference:</span> These help us remember how you like to use our service to personalize your experience.</li>
              <li><span className="font-medium text-foreground">Analytics:</span> We collect analytics about the types of people who visit our site to improve our service.</li>
              <li><span className="font-medium text-foreground">Marketing:</span> We share cookies with third-party advertisers or partners to provide you with a personalized marketing experience.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We also allow third-party partners to place their own cookies on our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">13. Your Data Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your geographical location and citizenship, you may have specific rights regarding your personal data under local regulations like the GDPR and CCPA. These rights may include:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li><span className="font-medium text-foreground">Right to Access:</span> You have the right to request a copy of the personal data we process about you.</li>
              <li><span className="font-medium text-foreground">Right to Rectification:</span> You have the right to have incomplete or inaccurate personal data that we process about you corrected.</li>
              <li><span className="font-medium text-foreground">Right to Be Forgotten (Right to Erasure):</span> You have the right to request that we delete personal data we process about you.</li>
              <li><span className="font-medium text-foreground">Right to Restriction of Processing:</span> You have the right to restrict our processing of your personal data under certain circumstances.</li>
              <li><span className="font-medium text-foreground">Right to Portability:</span> You have the right to obtain personal data we hold about you in a structured, electronic format.</li>
              <li><span className="font-medium text-foreground">Right to Objection:</span> You have the right to object to our processing of your personal data on grounds relating to your particular situation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">14. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on our website. If we make material changes to this policy, we will notify our registered users by email. Your continued use of our app or services after an update means you accept the new policy.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If our company is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to provide products and services to you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">15. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please reach out to us at{" "}
              <a href="mailto:hello@twoclicksmedia.com" className="text-primary hover:underline">hello@twoclicksmedia.com</a>{" "}
              or through our <a href="/contact" className="text-primary hover:underline">contact form</a>.
            </p>
          </div>

        </div>
      </Section>
    </Layout>
  );
}
