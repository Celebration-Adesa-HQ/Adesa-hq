"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import Image from "next/image";
import Logo from "@/components/ui/logo";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

const subsidiaryCards = ACTIVE_SUBSIDIARIES.map((subsidiary) => ({
  ...subsidiary,
  isExternal: subsidiary.href.startsWith("http"),
}));

export default function CorporateHierarchySection() {
  return (
    <Section
      className="relative bg-adesa-950 text-adesa-100 overflow-hidden py-24 sm:py-32 border-t border-white/5"
      aria-labelledby="corporate-hierarchy-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-adesa-800 rounded-full blur-[160px] opacity-40" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gold-400 rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Corporate Hierarchy"
          title="Structured for Governance & Scale"
          description="Our organizational design ensures clear institutional accountability at the holding level while enabling operational autonomy at the operating company level."
          centered
          dark
        />

        <div className="mt-16 sm:mt-20 w-full relative">
          {/* Holding Core (Root Node) */}
          <div className="flex justify-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border border-gold-400/30 bg-gradient-to-b from-white/10 to-white/2 backdrop-blur-2xl px-8 py-7 rounded-3xl max-w-md w-full text-center z-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-center mb-3">
                <Logo variant="secondary" width={52} height={52} />
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-semibold mb-1">
                Holding Group Architecture
              </p>
              <h2
                id="corporate-hierarchy-title"
                className="text-2xl sm:text-3xl font-serif font-medium text-white"
              >
                ADESA HQ
              </h2>
              <p className="text-adesa-300 text-xs mt-2 leading-relaxed">
                Strategic Direction • Governance • Capital Allocation
              </p>
            </motion.div>

            {/* Connector Line */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ originY: 0 }}
              className="absolute bottom-[-64px] left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-gold-400 to-gold-400/50 hidden md:block"
            />
          </div>

          {/* Subsidiaries Layer */}
          <div className="relative">
            {/* Desktop Connector Lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ originX: 0.5 }}
              className="hidden lg:block absolute -top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gold-400/50"
            />
            <div className="hidden lg:grid grid-cols-4 absolute -top-8 left-0 right-0 pointer-events-none">
              {[0, 1, 2, 3].map((colIdx) => (
                <div key={colIdx} className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + colIdx * 0.05 }}
                    style={{ originY: 0 }}
                    className="w-[2px] h-8 bg-gold-400/50"
                  />
                </div>
              ))}
            </div>

            {/* Subsidiary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
              {subsidiaryCards.map((subsidiary, idx) => (
                <motion.article
                  key={subsidiary.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative border border-white/8 bg-gradient-to-b from-white/6 to-white/2 p-6 sm:p-7 rounded-[26px] backdrop-blur-xl transition-all duration-300 hover:border-gold-400/50 hover:bg-white/8 flex flex-col h-full justify-between"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Logo/Icon */}
                    <div className="relative w-12 h-12 bg-white/10 flex items-center justify-center border border-white/10 rounded-2xl overflow-hidden group-hover:border-gold-400/50 transition-colors mb-5 shrink-0 p-1">
                      {subsidiary.image ? (
                        <Image
                          src={subsidiary.image}
                          alt={`${subsidiary.name} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      ) : (
                        <span className="font-serif text-base font-semibold tracking-wide text-gold-400">
                          {subsidiary.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Sector */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-serif font-medium text-white text-base sm:text-lg group-hover:text-gold-300 transition-colors">
                        {subsidiary.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gold-400 font-semibold mt-1 mb-3 uppercase tracking-wider">
                        {subsidiary.sector}
                      </p>
                      <p className="text-xs sm:text-sm text-adesa-300 leading-relaxed">
                        {subsidiary.description}
                      </p>
                    </div>
                  </div>

                  {/* Link at bottom */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-white/6 shrink-0">
                    <a
                      href={subsidiary.href}
                      target={subsidiary.isExternal ? "_blank" : undefined}
                      rel={subsidiary.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold-200 items-center transition-colors"
                    >
                      View details
                      <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
