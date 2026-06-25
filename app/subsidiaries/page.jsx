import HeroSection from "@/components/sections/subsidiaries/hero-section";
import ActiveSubsidiariesSection from "@/components/sections/subsidiaries/active-subsidiaries-section";
import PipelineSection from "@/components/sections/subsidiaries/pipeline-section";
import CTASection from "@/components/sections/subsidiaries/cta-section";
import { constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Subsidiaries | Adesa Media, Adesa Energy & Adesa Solutions",
  description:
    "Explore ADESA HQ's operating companies, including Adesa Media, Adesa Energy, and Adesa Solutions across key African sectors.",
  path: "/subsidiaries", // ensures canonical URL points to this page
  keywords: ["Adesa Media", "Adesa Energy", "Adesa Solutions"],
});

const subsidiariesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ADESA HQ Subsidiaries",
  url: `${siteConfig.url}/subsidiaries`,
  description:
    "Explore ADESA HQ's operating companies, including Adesa Media, Adesa Energy, and Adesa Solutions across key African sectors.",
  isPartOf: {
    "@id": `${siteConfig.url}#website`,
  },
  about: {
    "@id": `${siteConfig.url}#organization`,
  },
};

export default function SubsidiariesPage() {
  return (
    <main role="main">
      <PageJsonLd data={subsidiariesJsonLd} />
      <HeroSection />
      <ActiveSubsidiariesSection />
      <PipelineSection />
      <CTASection />
    </main>
  );
}
