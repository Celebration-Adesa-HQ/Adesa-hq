import HeroSection from "@/components/sections/hero-section";
import VisionMissionSection from "@/components/sections/vision-mission-section";
import OperatingModelSection from "@/components/sections/operating-model-section";
import StatsSection from "@/components/sections/stats-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import SubsidiariesSection from "@/components/sections/subsidiaries-section";
import GovernanceCTASection from "@/components/sections/governance-cta-section";
import FinalCTASection from "@/components/sections/final-cta-section";
import { constructMetadata } from "@/lib/seo";
import SubscribeCard from "@/components/sections/SubscribeCard";

export const metadata = constructMetadata({
  title: "ADESA HQ | Builder-Operator Group in Africa",
  description:
    "ADESA HQ is a builder-operator group focused on conceiving, launching, governing, and scaling sector-defining African businesses across Africa.",
  path: "/", // ensures canonical URL points to homepage
  keywords: ["builder-operator group Africa", "African holding company", "ADESA HQ"],
});

export default function Home() {
  return (
    <main role="main">
      <HeroSection />
      <VisionMissionSection />
      <OperatingModelSection />
      <StatsSection />
      <PhilosophySection />
      <SubsidiariesSection />
      <GovernanceCTASection />
      <SubscribeCard
        buttonText="Subscribe on LinkedIn"
        className="
    w-full
    px-4
    sm:px-8
    lg:px-16
    py-12
    sm:py-16
    lg:py-24
    flex
    flex-col
    items-center
    justify-center
  "
      />
      <FinalCTASection />
    </main>
  );
}
