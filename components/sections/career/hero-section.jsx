import { MotionReveal } from "@/components/motion/motion-reveal";
import { PageHero } from "@/components/ui/page-hero";

export default function CareerHeroSection() {
  return (
    <PageHero
      labelledBy="careers-hero-title"
      backgroundImage="/legacy-in-motion-story.webp"
      backgroundPosition="object-[72%_76%]"
      imageClassName="opacity-45 saturate-[0.7]"
      treatment="left"
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <MotionReveal direction="right">
          <p className="mb-5 text-sm font-semibold text-gold-300">Careers</p>
          <h1 id="careers-hero-title" className="max-w-[14ch] text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-adesa-50 sm:text-6xl lg:text-7xl">
            Build work that can carry responsibility.
          </h1>
        </MotionReveal>
        <MotionReveal className="border-t border-white/12 pt-6" direction="left" delay={0.08}>
          <p className="max-w-[44ch] text-base leading-7 text-adesa-200 sm:text-lg">
            We value clear thinking, reliable execution, and people willing to strengthen systems as the group grows.
          </p>
        </MotionReveal>
      </div>
    </PageHero>
  );
}
