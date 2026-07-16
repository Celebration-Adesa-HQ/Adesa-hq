import HeroSection from "@/components/sections/career/hero-section";
import JobListings from "@/components/sections/career/job-listings";
import ContactSection from "@/components/sections/career/contact-section";
import { constructMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/seo/page-json-ld";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Careers | Join ADESA HQ and Our Operating Companies",
  description:
    "Join ADESA HQ and help shape the future of African businesses. Explore open positions and grow with a multi-sector builder-operator group.",
  path: "/careers", // canonical URL for the careers page
  keywords: ["careers", "jobs in Africa", "ADESA HQ careers"],
});

const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Careers at ADESA HQ",
  url: `${siteConfig.url}/careers`,
  description:
    "Join ADESA HQ and help shape the future of African businesses. Explore open positions and grow with a multi-sector builder-operator group.",
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
      <JobListings />
      <ContactSection />
    </main>
  );
}
