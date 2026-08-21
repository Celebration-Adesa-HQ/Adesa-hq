import HeroSection from "@/components/sections/career/hero-section";
import CareerEditorialSections from "@/components/sections/career/editorial-sections";
import { constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Careers | Join ADESA HQ and Our Operating Companies",
  description:
    "Learn how ADESA HQ approaches operating culture, responsibility, and long-term institution building across its group.",
  path: "/careers", // canonical URL for the careers page
  keywords: ["careers", "jobs in Africa", "ADESA HQ careers"],
});

const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Careers at ADESA HQ",
  url: `${siteConfig.url}/careers`,
  description:
    "Learn how ADESA HQ approaches operating culture, responsibility, and long-term institution building across its group.",
  isPartOf: {
    "@id": `${siteConfig.url}#website`,
  },
  about: {
    "@id": `${siteConfig.url}#organization`,
  },
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
