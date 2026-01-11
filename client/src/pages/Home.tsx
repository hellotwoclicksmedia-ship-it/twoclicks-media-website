import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { RetainerSection } from "@/components/home/RetainerSection";
import { IdealClientSection } from "@/components/home/IdealClientSection";
import { LearningSection } from "@/components/home/LearningSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Home() {
  useDocumentTitle(
    "TwoClicks - Shopify CRO & Conversion Experts for DTC Founders",
    "Conversion-first Shopify support for ambitious DTC founders. Fractional Shopify product & CRO partners with high-touch retainers and measurable revenue lifts."
  );

  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      {/* <CaseStudiesSection /> */}
      <RetainerSection />
      <IdealClientSection />
      <LearningSection />
      <FinalCTASection />
    </Layout>
  );
}
