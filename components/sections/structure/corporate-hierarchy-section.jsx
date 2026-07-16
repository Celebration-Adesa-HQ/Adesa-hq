"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import GridLine from "@/components/ui/gridLine";
import Image from "next/image";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

const subsidiaryCards = ACTIVE_SUBSIDIARIES.map((subsidiary) => ({
  ...subsidiary,
  isExternal: subsidiary.href.startsWith("http"),
}));

export default function CorporateHierarchySection() {
  return (
    <Section
      className="relative bg-adesa-900 text-adesa-100 overflow-hidden"
      aria-labelledby="corporate-hierarchy-title"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-adesa-700 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gold-400 rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          eyebrow="Corporate Hierarchy"
          title="Structured for Governance & Growth"
          description="Our organizational design ensures clear accountability while enabling operational autonomy at the subsidiary level."
          centered
          dark
        />

        <div className="mt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative border border-adesa-700 bg-adesa-800/60 backdrop-blur-xl rounded-xl overflow-hidden"
          >
            {/* Holding Core */}
            <div className="relative px-5 py-10 sm:p-12 text-center border-b border-adesa-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-10 sm:h-12 bg-gradient-to-b from-gold-400 to-transparent" />

              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-adesa-300 mb-3 sm:mb-4">
                Holding Company
              </p>

              <h2
                id="corporate-hierarchy-title"
                className="text-xl sm:text-3xl font-serif font-medium text-adesa-50"
              >
                ADESA HQ
              </h2>

              <p className="text-adesa-300 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                Strategic Direction • Governance • Capital Allocation
              </p>
            </div>

            {/* Subsidiary Layer */}
            <div className="px-5 py-10 sm:p-12">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-adesa-400 mb-8 sm:mb-10 text-center">
                Operating Subsidiaries
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-8">
                {subsidiaryCards.map((subsidiary) => (
                  <article
                    key={subsidiary.name}
                    className="group relative border border-adesa-700 bg-adesa-800 p-5 sm:p-8 rounded-lg transition-all duration-500 hover:border-gold-400"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-adesa-700 flex items-center justify-center border border-adesa-600 overflow-hidden group-hover:border-gold-400 transition">
                          {subsidiary.image ? (
                            <Image
                              src={subsidiary.image}
                              alt={`${subsidiary.name} logo`}
                              fill
                              className="object-contain p-2"
                            />
                          ) : (
                            <span
                              role="img"
                              aria-label={`${subsidiary.name} temporary logo`}
                              className="font-serif text-sm sm:text-base font-semibold tracking-wide text-gold-400"
                            >
                              {subsidiary.badge}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-adesa-50 text-sm sm:text-base">
                            {subsidiary.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-adesa-400">
                            {subsidiary.sector}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-adesa-300">
                        {subsidiary.description}
                      </p>

                      <a
                        href={subsidiary.href}
                        target={subsidiary.isExternal ? "_blank" : undefined}
                        rel={
                          subsidiary.isExternal
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-4 inline-flex text-xs sm:text-sm text-gold-300 hover:text-gold-400 items-center"
                      >
                        View details
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
