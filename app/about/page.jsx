import { constructMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/about/hero-section";
import NarrativeSection from "@/components/sections/about/narrative-section";
import ValuesSection from "@/components/sections/about/values-section";
import TimelineSection from "@/components/sections/about/timeline-section";
import CTASsection from "@/components/sections/about/cta-section";
import PhilosophyPillarsSection from "@/components/sections/about/philosophy-pillars-section";
import PageJsonLd from "@/components/seo/page-json-ld";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "About ADESA HQ | Builder-Operator Philosophy in Africa",
  description:
    "Learn about ADESA HQ's builder-operator philosophy, governance framework, and long-term institutional value creation strategy across Africa.",
  path: "/about", // ensures canonical URL points to About page
  keywords: ["about ADESA HQ", "builder-operator philosophy", "governance framework"],
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ADESA HQ",
  url: `${siteConfig.url}/about`,
  description:
    "Learn about ADESA HQ's builder-operator philosophy, governance framework, and long-term institutional value creation strategy across Africa.",
  isPartOf: {
    "@id": `${siteConfig.url}#website`,
  },
  about: {
    "@id": `${siteConfig.url}#organization`,
  },
};

export default function AboutPage() {
  return (
    <main role="main" className="flex-1">
      <PageJsonLd data={aboutJsonLd} />
      <HeroSection />
      <NarrativeSection />
      <PhilosophyPillarsSection />
      <ValuesSection />
      <TimelineSection />
      <CTASsection />
    </main>
  );
}
