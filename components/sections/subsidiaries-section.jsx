"use client";

import { motion } from "framer-motion";
import SubsidiaryCard from "./subsidiaries/subsidiary-card";
import { ADESA_MEDIA, ADESA_ENERGY, ADESA_SOLUTIONS, ADESA_DISTRIBUTION } from "@/config/brand";

const subsidiariesData = [
  { ...ADESA_MEDIA, featured: true },
  { ...ADESA_ENERGY },
  { ...ADESA_SOLUTIONS },
  { ...ADESA_DISTRIBUTION, external: true },
];

export default function SubsidiariesSection() {
  return (
    <section
      className="relative py-24 sm:py-32 bg-adesa-900 overflow-hidden border-t border-white/5"
      aria-labelledby="subsidiaries-section-title"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-adesa-800 rounded-full blur-[180px] opacity-40" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-gold-500 rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4">
            Group Portfolio Companies
          </p>

          <h2
            id="subsidiaries-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight"
          >
            Operating <span className="adesa-gold-gradient-text font-serif">Subsidiaries</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-adesa-300 leading-relaxed">
            Each operating company functions with decisive autonomy in its sector while
            drawing on shared institutional governance, capital strength, and strategic clarity.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {subsidiariesData.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <SubsidiaryCard
                name={item.name}
                description={item.description}
                services={item.services}
                href={item.href}
                image={item.image}
                badge={item.badge}
                sector={item.sector}
                featured={item.featured}
                external={item.external}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
