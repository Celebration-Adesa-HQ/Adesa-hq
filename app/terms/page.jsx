import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import TermsContentSection from "@/components/sections/legal/terms-content-section";
import HeroSectionTerms from "@/components/sections/legal/hero-section-terms";
import PageJsonLd from "@/components/seo/page-json-ld";

export const metadata = constructMetadata({
  title: "Terms of Service | ADESA HQ",
  description:
    "ADESA HQ's terms of service outline the agreement for using our website and services, including intellectual property rights, limitations, and governing law.",
  path: "/terms", // ensures canonical URL is correct
  keywords: ["terms of service", "user agreement", "ADESA HQ terms"],
});

const termsJsonLd = buildWebPageJsonLd({
  title: "Terms of Service | ADESA HQ",
  description: "ADESA HQ's terms of service outline the agreement for using our website and services, including intellectual property rights, limitations, and governing law.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={termsJsonLd} />
      {/* Hero Section */}
      <HeroSectionTerms />

      {/* Terms Content Section */}
      <TermsContentSection />
    </main>
  );
}
