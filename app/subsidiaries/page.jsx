import HeroSection from "@/components/sections/subsidiaries/hero-section";
import SubsidiariesEditorialSections from "@/components/sections/subsidiaries/editorial-sections";
import { constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title:
    "Subsidiaries | Adesa Media, Adesa Energy, Adesa Solutions & Adesa Distribution",
  description:
    "Explore ADESA HQ's operating companies, including Adesa Media, Adesa Energy, Adesa Solutions, and Adesa Distribution across key African sectors.",
  path: "/subsidiaries", // ensures canonical URL points to this page
  keywords: [
    "Adesa Media",
    "Adesa Energy",
    "Adesa Solutions",
    "Adesa Distribution",
  ],
});

const subsidiariesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ADESA HQ Subsidiaries",
  url: `${siteConfig.url}/subsidiaries`,
  description:
    "Explore ADESA HQ's operating companies, including Adesa Media, Adesa Energy, Adesa Solutions, and Adesa Distribution across key African sectors.",
  isPartOf: {
    "@id": `${siteConfig.url}#website`,
  },
  about: {
    "@id": `${siteConfig.url}#organization`,
  },
};

export default function SubsidiariesPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={subsidiariesJsonLd} />
      <HeroSection />
      <SubsidiariesEditorialSections />
    </main>
  );
}
