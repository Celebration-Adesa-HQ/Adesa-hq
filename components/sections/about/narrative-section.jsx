"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "../../ui/section";
import GridLine from "../../ui/gridLine";

export default function NarrativeSection() {
  return (
    <Section
      className="relative py-24 sm:py-32 bg-adesa-900 text-adesa-100 overflow-hidden border-t border-white/5"
      aria-labelledby="narrative-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,48,77,0.5),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(212,162,52,0.08),transparent_60%)]" />
      </div>

      <GridLine />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4">
              Our Origin & Purpose
            </p>

            <h2
              id="narrative-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight"
            >
              Beyond the <span className="adesa-gold-gradient-text font-serif">Investment Thesis</span>
            </h2>

            <div className="mt-8 space-y-6 text-sm sm:text-base text-adesa-200 leading-relaxed">
              <p>
                ADESA HQ was established on a fundamental conviction: Africa&apos;s most critical economic sectors require enterprises built for decades, not opportunistic exits. While capital has flowed into the continent, durable institutions with institutional rigor remain scarce.
              </p>

              <p>
                We are not venture capitalists seeking speculative liquidity, nor private equity financial engineers. We are active builder–operators who conceive, launch, govern, and strengthen businesses with the patience that lasting institutions demand.
              </p>

              <p className="text-adesa-300">
                Our model bridges active hands-on operating leadership with holding-company governance, ensuring every subsidiary operates with uncompromised standards and competitive excellence.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/8 to-white/2 p-3 sm:p-4 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl group">
              <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden">
                <Image
                  src="/Legacy in Motion-Recovered.png"
                  alt="ADESA HQ Legacy in Motion Heritage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adesa-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  Institutional Mandate
                </p>
                <p className="text-sm font-medium text-white mt-1">
                  Architecting enduring African enterprises designed for generational impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
