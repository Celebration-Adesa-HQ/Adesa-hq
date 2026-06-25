import MasterBrandSection from "@/components/sections/structure/master-brand-section";
import CorporateHierarchySection from "@/components/sections/structure/corporate-hierarchy-section";
import OperatingModelSection from "@/components/sections/structure/operating-model-section";
import CTASection from "@/components/sections/structure/cta-section";
import HeroSection from "@/components/sections/structure/hero-section";
import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";

export const metadata = constructMetadata({
  title: "Group Structure | ADESA HQ Governance & Operating Model",
  description:
    "Explore ADESA HQ's master brand architecture, corporate hierarchy, and operating model designed for governance, capital discipline, and growth across Africa.",
  path: "/structure", // ensures canonical URL is correct
  keywords: ["group structure", "corporate hierarchy", "operating model"],
});

const structureJsonLd = buildWebPageJsonLd({
  title: "Group Structure | ADESA HQ Governance & Operating Model",
  description: "Explore ADESA HQ's master brand architecture, corporate hierarchy, and operating model designed for governance, capital discipline, and growth across Africa.",
  path: "/structure"
});

export default function GroupStructurePage() {
  return (
    <main role="main">
      <PageJsonLd data={structureJsonLd} />
      {/* Hero - Server Component */}
      <HeroSection />

      {/* Master Brand Explanation - Client Component */}
      <MasterBrandSection />

      {/* Corporate Hierarchy - Client Component */}
      <CorporateHierarchySection />

      {/* Operating Model - Client Component */}
      <OperatingModelSection />

      {/* CTA - Client Component */}
      <CTASection />
    </main>
  );
}
