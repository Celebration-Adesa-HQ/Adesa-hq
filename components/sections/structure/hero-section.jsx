"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-adesa-950 text-adesa-50"
      aria-label="Hero section showcasing ADESA HQ Group Structure"
    >
      {/* Decorative gradients */}
      <div role="presentation" className="absolute inset-0">
        <div className="absolute top-[-30%] left-[-15%] w-[900px] h-[900px] bg-adesa-700 rounded-full blur-[200px] opacity-60 animate-blob1" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] bg-gold-400 rounded-full blur-[180px] opacity-25 animate-blob2" />
      </div>

      {/* Subtle grid overlay */}
      <div
        role="presentation"
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      <div className="adesa-noise-texture absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-gold-300">
            Group Structure
          </p>

          <h1 className="text-5xl font-medium leading-[1.03] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-adesa-50 via-adesa-200 to-adesa-400 sm:text-6xl lg:text-7xl">
            The group is designed for clarity, accountability, and operating autonomy.
          </h1>

          <p className="mt-10 text-xl text-adesa-300 leading-relaxed max-w-3xl">
            This structure explains how ADESA HQ governs the portfolio, where
            decisions sit, and how each operating company benefits from group
            oversight without losing execution focus.
          </p>

          {/* Gold accent line */}
          <div
            className="mt-16 h-[2px] w-40 bg-gradient-to-r from-gold-500 to-transparent"
            role="presentation"
          />
        </motion.div>
      </div>


    </section>
  );
}
