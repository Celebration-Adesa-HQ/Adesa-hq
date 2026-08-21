import HeroSection from "@/components/sections/hero-section";
import AwardProofSection from "@/components/sections/award-proof-section";
import VisionMissionSection from "@/components/sections/vision-mission-section";
import OperatingModelSection from "@/components/sections/operating-model-section";
import StatsSection from "@/components/sections/stats-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import BrochureShowcaseSection from "@/components/sections/brochure-showcase-section";
import SubsidiariesSection from "@/components/sections/subsidiaries-section";
import FinalCTASection from "@/components/sections/final-cta-section";
import { constructMetadata } from "@/lib/seo";
import SubscribeCard from "@/components/sections/SubscribeCard";

export const metadata = constructMetadata({
  title: "ADESA HQ | Builder-Operator Group in Africa",
  description:
    "ADESA HQ is a governance-led holding group that builds and strengthens enduring African businesses across strategic sectors.",
  path: "/",
  keywords: [
    "builder-operator group Africa",
    "African holding company",
    "ADESA HQ",
    "Legacy in Motion",
    "corporate governance Africa",
  ],
});

export default function Home() {
  return (
    <main role="main" className="flex-1">
      <HeroSection />
      <AwardProofSection />
      <BrochureShowcaseSection />
      <VisionMissionSection />
      <OperatingModelSection />
      <StatsSection />
      <PhilosophySection />
      <SubsidiariesSection />
      <SubscribeCard
        buttonText="Subscribe on LinkedIn"
        className="w-full"
      />
      <FinalCTASection />
    </main>
  );
}
