"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { Compass, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 text-adesa-100 py-24 sm:py-32 border-t border-white/5"
      aria-labelledby="vision-mission-heading"
    >
      <h2 id="vision-mission-heading" className="sr-only">
        Our Vision and Mission
      </h2>

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-adesa-800 rounded-full blur-[180px] opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Institutional Thesis
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
            We build companies that stand up to <span className="adesa-gold-gradient-text">scrutiny</span>, scale with <span className="text-white">discipline</span>, and compound across generations.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-white/7 to-white/2 border border-white/10 backdrop-blur-xl shadow-xl hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-gold-400/50 group-hover:bg-gold-500/10 transition-colors">
                <Compass className="w-6 h-6 text-gold-400" />
              </div>

              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4">
                Our Vision
              </p>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6 leading-snug">
                To establish a premier portfolio of <span className="adesa-gold-gradient-text font-serif">trusted, well-governed</span> African enterprises.
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-adesa-300">
                Our ambition is to lead the institutional standard for African business—where transparency of governance, capital stewardship, and excellence of execution become permanent competitive advantages.
              </p>
            </div>
          </motion.article>

          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-white/7 to-white/2 border border-white/10 backdrop-blur-xl shadow-xl hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-gold-400/50 group-hover:bg-gold-500/10 transition-colors">
                <Target className="w-6 h-6 text-gold-400" />
              </div>

              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4">
                Our Mission
              </p>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6 leading-snug">
                Conceive, launch, and fortify businesses with <span className="adesa-gold-gradient-text font-serif">enduring relevance</span>.
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-adesa-300">
                We combine hands-on operating support, clear accountability structures, and strategic capital allocation so every company in our group builds upon an unshakable foundation.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </Section>
  );
}
