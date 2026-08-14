"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/section";

const stats = [
  { value: "4", label: "Core Sectors", description: "Operating enterprises scaling in critical economic verticals." },
  {
    value: "100%",
    label: "Governance Standard",
    description: "Rigorous reporting and board oversight across all subsidiaries.",
  },
  { value: "Pan-Africa", label: "Geographic Scope", description: "Rooted in African market realities with global execution standards." },
  { value: "Decades", label: "Investment Horizon", description: "Capital allocation driven by long-term compounding, not rapid exits." },
];

export default function StatsSection() {
  return (
    <Section
      className="relative bg-adesa-950 text-adesa-50 overflow-hidden py-24 sm:py-32 border-t border-white/5"
      role="region"
      aria-label="Company statistics"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-adesa-800 rounded-full blur-[180px] opacity-35" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold-500 rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Institutional Discipline
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            Scale matters, but <span className="adesa-gold-gradient-text font-serif">discipline</span> matters more.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.section
              key={stat.label}
              aria-labelledby={`stat-${index}-label`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[28px] bg-gradient-to-b from-white/6 to-white/2 border border-white/8 hover:border-gold-400/40 hover:bg-white/7 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <p
                  className="text-4xl sm:text-5xl font-bold font-serif tracking-tight text-gold-400 group-hover:text-gold-300 transition-colors"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
                <h3
                  id={`stat-${index}-label`}
                  className="mt-4 text-base font-semibold text-white group-hover:text-gold-300 transition-colors"
                >
                  {stat.label}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-adesa-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </Section>
  );
}
