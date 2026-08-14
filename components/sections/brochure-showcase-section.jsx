"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Compass, Sparkles } from "lucide-react";
import { Section } from "../ui/section";

export default function BrochureShowcaseSection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-950 text-white border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="brochure-showcase-heading"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-adesa-800 rounded-full blur-[180px] opacity-40" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase using Brochure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/2 p-3 sm:p-4 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/Adesa HQ brochure 1.png"
                  alt="ADESA HQ Strategic Brochure & Holding Architecture"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adesa-950/90 via-adesa-950/20 to-transparent" />
                
                {/* Floating pill over image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-adesa-900/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                        Institutional Portfolio
                      </p>
                      <h4 className="text-sm sm:text-base font-medium text-white mt-0.5">
                        Builder-Operator Group Architecture
                      </h4>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-gold-400/20 px-3 py-1 text-[11px] font-semibold text-gold-300 border border-gold-400/40">
                      Overview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Overview & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 mb-6 w-fit backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">
                Institutional Mandate
              </p>
            </div>

            <h2
              id="brochure-showcase-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]"
            >
              Constructing <span className="adesa-gold-gradient-text font-serif">Enduring Value</span> Across African Markets
            </h2>

            <p className="mt-6 text-sm sm:text-base text-adesa-200 leading-relaxed">
              At ADESA HQ, we unify governance rigor, operating capability, and strategic capital allocation. We ensure each subsidiary operates with high standards and operational resilience.
            </p>

            {/* Value checklist */}
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Active Governance & Systems",
                  desc: "Clear oversight and institutional reporting standards across every subsidiary.",
                },
                {
                  title: "Disciplined Capital Deployment",
                  desc: "Reinvestment focused on compound growth rather than short-term exits.",
                },
                {
                  title: "African Market Leadership",
                  desc: "Deep localized context paired with global corporate execution standards.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/3 border border-white/5">
                  <CheckCircle2 className="h-5 w-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-adesa-300 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-400 to-gold-300 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-adesa-950 shadow-[0_12px_32px_rgba(212,162,52,0.25)] transition-all hover:scale-105"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/structure"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                Explore Structure
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
