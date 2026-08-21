import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import HeroSection from "@/components/sections/governance/hero-section";
import GovernanceEditorialSections from "@/components/sections/governance/editorial-sections";
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
      <GovernanceEditorialSections />
    </main>
  );
}
