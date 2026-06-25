import { constructMetadata, buildWebPageJsonLd } from "@/lib/seo";
import HeroSection from "@/components/sections/legal/hero-section";
import PrivacyContentSection from "@/components/sections/legal/privacy-content-section";
import PageJsonLd from "@/components/seo/page-json-ld";

export const metadata = constructMetadata({
  title: "Privacy Policy | ADESA HQ",
  description:
    "ADESA HQ's privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.",
  path: "/privacy", // ensures canonical URL is correct
  keywords: ["privacy policy", "data protection", "ADESA HQ privacy"],
});

const privacyJsonLd = buildWebPageJsonLd({
  title: "Privacy Policy | ADESA HQ",
  description: "ADESA HQ's privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <main role="main">
      <PageJsonLd data={privacyJsonLd} />
      {/* Hero Section */}
      <HeroSection />

      {/* Privacy Content */}
      <PrivacyContentSection />
    </main>
  );
}
