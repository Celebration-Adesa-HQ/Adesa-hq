"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
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

        <div className="mt-20 w-full relative">
          {/* Holding Core (Root Node) */}
          <div className="flex justify-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border border-gold-400/20 bg-adesa-800/80 backdrop-blur-xl px-8 py-6 rounded-xl max-w-md w-full text-center z-10 shadow-lg shadow-black/20"
            >
              {/* Ambient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-xl blur-md opacity-50" />
              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-semibold mb-2">
                  Holding Company
                </p>
                <h2
                  id="corporate-hierarchy-title"
                  className="text-2xl sm:text-3xl font-serif font-medium text-adesa-50"
                >
                  ADESA HQ
                </h2>
                <p className="text-adesa-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Strategic Direction • Governance • Capital Allocation
                </p>
              </div>
            </motion.div>

            {/* Connection Line Down from Holding to Subsidiaries */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ originY: 0 }}
              className="absolute bottom-[-64px] left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-gold-400 to-gold-400/60 hidden md:block"
            />
          </div>

          {/* Subsidiaries Layer */}
          <div className="relative">
            {/* Desktop Connector Lines (lg and above: 4 columns) */}
            {/* Horizontal bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ originX: 0.5 }}
              className="hidden lg:block absolute -top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gold-400/60"
            />
            {/* Drop lines to each card center */}
            <div className="hidden lg:grid grid-cols-4 absolute -top-8 left-0 right-0 pointer-events-none">
              {[0, 1, 2, 3].map((colIdx) => (
                <div key={colIdx} className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + colIdx * 0.05 }}
                    style={{ originY: 0 }}
                    className="w-[2px] h-8 bg-gold-400/60"
                  />
                </div>
              ))}
            </div>

            {/* Tablet Connector Lines (md:grid-cols-2, but not lg) */}
            {/* Horizontal bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ originX: 0.5 }}
              className="hidden md:block lg:hidden absolute -top-8 left-[25%] right-[25%] h-[2px] bg-gold-400/60"
            />
            {/* Drop lines for first row */}
            <div className="hidden md:grid lg:hidden grid-cols-2 absolute -top-8 left-0 right-0 pointer-events-none">
              {[0, 1].map((colIdx) => (
                <div key={colIdx} className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + colIdx * 0.1 }}
                    style={{ originY: 0 }}
                    className="w-[2px] h-8 bg-gold-400/60"
                  />
                </div>
              ))}
            </div>

            {/* Mobile central line (runs behind the cards down the middle) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent md:hidden z-0" />

            {/* Subsidiary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
              {subsidiaryCards.map((subsidiary, idx) => (
                <motion.article
                  key={subsidiary.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative border border-adesa-700/60 bg-adesa-800/80 p-6 sm:p-7 rounded-xl transition-all duration-500 hover:border-gold-400/60 hover:shadow-lg hover:shadow-gold-500/5 flex flex-col h-full justify-between"
                >
                  {/* Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/2 to-gold-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Logo/Icon Stacked */}
                    <div className="relative w-12 h-12 bg-adesa-700/40 flex items-center justify-center border border-adesa-600 rounded-lg overflow-hidden group-hover:border-gold-400/60 transition-all duration-300 mb-5 shadow-inner shrink-0">
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
                          className="font-serif text-base font-semibold tracking-wide text-gold-400"
                        >
                          {subsidiary.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Sector */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-serif font-medium text-adesa-50 text-base sm:text-lg group-hover:text-gold-300 transition-colors duration-300">
                        {subsidiary.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gold-400 font-medium mt-1 mb-4 uppercase tracking-wider">
                        {subsidiary.sector}
                      </p>
                      <p className="text-xs sm:text-sm text-adesa-300 leading-relaxed">
                        {subsidiary.description}
                      </p>
                    </div>
                  </div>

                  {/* Link at bottom */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-adesa-700/40 shrink-0">
                    <a
                      href={subsidiary.href}
                      target={subsidiary.isExternal ? "_blank" : undefined}
                      rel={
                        subsidiary.isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex text-xs sm:text-sm text-gold-300 hover:text-gold-400 font-semibold items-center transition-colors duration-200"
                    >
                      View details
                      <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
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
