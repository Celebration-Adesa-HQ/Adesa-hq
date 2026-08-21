import HeroSection from "@/components/sections/career/hero-section";
import CareerEditorialSections from "@/components/sections/career/editorial-sections";
import { constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { siteConfig } from "@/config/site";
import { CAREER_SUBSIDIARIES } from "@/config/brand";

export const metadata = constructMetadata({
  title: "Careers Across ADESA Operating Companies | ADESA HQ",
  description:
    "Find career opportunities at eligible ADESA operating companies and continue to each subsidiary's website to review roles and apply.",
  path: "/careers", // canonical URL for the careers page
  keywords: [
    "ADESA careers",
    "Adesa Media careers",
    "Adesa Energy careers",
    "jobs in Africa",
  ],
});

const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Careers across ADESA operating companies",
  url: `${siteConfig.url}/careers`,
  description:
    "A directory of career opportunities managed by eligible ADESA operating companies.",
  isPartOf: {
    "@id": `${siteConfig.url}#website`,
  },
  about: {
    "@id": `${siteConfig.url}#organization`,
  },
  hasPart: CAREER_SUBSIDIARIES.map((company) => ({
    "@type": "WebPage",
    name: `${company.name} careers`,
    url: company.careerHref,
  })),
};

export default function CareerPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={careersJsonLd} />
      <HeroSection />
      <CareerEditorialSections />
    </main>
  );
}
