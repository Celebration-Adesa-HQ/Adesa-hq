"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";
import Image from "next/image";
import Logo from "@/components/ui/logo";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

const responsibilities = [
  "Strategic planning and group-wide resource allocation",
  "Institutional governance standards and active board oversight",
  "Capital deployment, reinvestment, and treasury discipline",
  "Cross-subsidiary strategic synergies and shared infrastructure",
  "Enterprise risk management and regulatory compliance",
];

export default function MasterBrandSection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 text-white py-24 sm:py-32"
      aria-labelledby="master-brand-title"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-25%] left-[-15%] w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-adesa-800 rounded-full blur-[160px] opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gold-500 rounded-full blur-[140px] opacity-25" />
      </div>

      <GridLine />

      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 mb-6 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">
              Master Brand
            </p>
          </div>

          <h2 id="master-brand-title" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white">
            ADESA HQ: The <span className="adesa-gold-gradient-text font-serif">Holding Entity</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-adesa-200 leading-relaxed">
            ADESA HQ serves as the master holding entity—the institutional anchor that provides governance, strategic direction, capital allocation, and performance oversight across all operating subsidiaries.
          </p>

          <p className="mt-4 text-sm sm:text-base text-adesa-300 leading-relaxed">
            The "HQ" designation distinguishes the holding group from its operating businesses, establishing a disciplined separation between holding company governance and subsidiary execution.
          </p>

          <ul className="mt-8 space-y-3.5">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-0.5 mr-3 shrink-0" />
                <span className="text-xs sm:text-sm text-adesa-200 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right card */}
        <figure className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12 rounded-[32px] bg-gradient-to-b from-white/8 to-white/2 shadow-[0_24px_80px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute -inset-4 sm:-inset-6 border border-gold-400/20 rounded-[44px] pointer-events-none"
          />

          <div className="text-center relative z-10 flex flex-col items-center w-full">
            <div className="p-1 rounded-2xl bg-white/5 border border-gold-400/30 shadow-[0_0_30px_rgba(212,162,52,0.25)] mb-4 sm:mb-6">
              <Logo variant="secondary" width={68} height={68} priority />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1">
              ADESA HQ
            </h3>

            <p className="text-xs tracking-[0.2em] uppercase text-gold-400 font-semibold mb-6 sm:mb-8">
              Holding & Operating Group
            </p>

            <div className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent mx-auto mb-6" />

            <figcaption className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[480px]">
              {ACTIVE_SUBSIDIARIES.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-2xl border border-white/8 bg-white/4 flex flex-col items-center transition-all duration-300 hover:border-gold-400/40 hover:bg-white/8"
                >
                  <div className="relative w-8 h-8 rounded-full mb-2 flex items-center justify-center">
                    {sub.image ? (
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    ) : (
                      <span className="font-serif text-xs font-semibold text-gold-400">
                        {sub.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white font-medium text-center">
                    {sub.name}
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 text-[9px] uppercase tracking-wider bg-gold-400/15 border border-gold-400/30 text-gold-300 rounded-full font-semibold">
                    Operating
                  </span>
                </div>
              ))}
            </figcaption>
          </div>
        </figure>
      </div>
    </Section>
  );
}
