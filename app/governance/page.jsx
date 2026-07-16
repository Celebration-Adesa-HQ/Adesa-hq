import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import HeroSection from "@/components/sections/governance/hero-section";
import CoreStandardsSection from "@/components/sections/governance/core-standards-section";
import PerformanceOversightSection from "@/components/sections/governance/performance-oversight-section";
import CapitalDisciplineSection from "@/components/sections/governance/capital-discipline-section";
import InstitutionalSystemsSection from "@/components/sections/governance/institutional-systems-section";
import FinalStatementSection from "@/components/sections/governance/final-statement-section";
import PageJsonLd from "@/components/seo/page-json-ld";

export const metadata = constructMetadata({
  title: "Governance | ADESA HQ Board Oversight & Capital Discipline",
  description:
    "Learn about ADESA HQ's institutional standards, performance oversight, capital discipline, and systems designed for generational success across Africa.",
  path: "/governance", // ensures canonical URL points to this page
  keywords: ["governance", "board oversight", "capital discipline"],
});

const governanceJsonLd = buildWebPageJsonLd({
  title: "Governance | ADESA HQ Board Oversight & Capital Discipline",
  description: "Learn about ADESA HQ's institutional standards, performance oversight, capital discipline, and systems designed for generational success across Africa.",
  path: "/governance"
});

export default function GovernancePage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={governanceJsonLd} />
      <HeroSection />
      <CoreStandardsSection />
      <PerformanceOversightSection />
      <CapitalDisciplineSection />
      <InstitutionalSystemsSection />
      <FinalStatementSection />
    </main>
  );
}
