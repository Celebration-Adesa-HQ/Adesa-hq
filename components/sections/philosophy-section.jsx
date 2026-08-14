"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Users, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Shield,
    title: "Governance First",
    description: "Institutional standards and operating clarity before expansion.",
  },
  {
    icon: BarChart3,
    title: "Capital Discipline",
    description: "Strategic capital deployment anchored in real operational metrics.",
  },
  {
    icon: Users,
    title: "Stakeholder Value",
    description: "Creating generational value for partners, customers, and African communities.",
  },
  {
    icon: Building2,
    title: "System Building",
    description: "Engineering durable business systems capable of thriving through economic cycles.",
  },
];

export default function PhilosophySection() {
  return (
    <Section
      className="relative overflow-hidden bg-adesa-900 text-adesa-100 py-24 sm:py-32"
      aria-labelledby="philosophy-section-title"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-adesa-700 rounded-full blur-[160px] opacity-40" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gold-500 rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Institutional Philosophy
          </p>
          <h2
            id="philosophy-section-title"
            className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight"
          >
            We value <span className="adesa-gold-gradient-text">staying power</span> over noise.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-adesa-200 leading-relaxed">
            ADESA HQ is purpose-built for institution building, not opportunistic
            short-term plays. We back and govern enterprise structures that endure across
            economic cycles, industry transformations, and generational horizons.
          </p>
        </div>

        {/* Two Column Layout: Legacy in Motion visual card + 4 Pillars */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Legacy in Motion Artwork Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/8 to-white/2 p-4 flex flex-col justify-between shadow-2xl backdrop-blur-xl group"
          >
            <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden">
              <Image
                src="/Legacy in Motion.png"
                alt="ADESA HQ - Legacy in Motion"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adesa-950/90 via-adesa-950/20 to-transparent" />
            </div>

            <div className="p-4 sm:p-6 mt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
                Strategic Tenet
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mt-1">
                Legacy in Motion
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-adesa-300 leading-relaxed">
                Building institutions that transcend individual tenure through robust governance architectures, operational mastery, and patient compounding of capital.
              </p>

              <div className="mt-6">
                <Button href="/about" variant="outline" size="sm" className="w-full text-xs uppercase tracking-wider">
                  Explore Our Heritage
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-6 sm:p-8 rounded-[24px] backdrop-blur-xl bg-white/4 border border-white/8 hover:border-gold-400/50 hover:bg-white/7 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-400/40 group-hover:bg-gold-500/10 transition-colors">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-adesa-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] uppercase tracking-wider text-gold-400/80 group-hover:text-gold-300">
                  <span>Pillar {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
