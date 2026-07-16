"use client";

import { motion } from "framer-motion";
import GridLine from "../../ui/gridLine";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-adesa-950 pt-32 pb-24 lg:pt-40 lg:pb-32 text-adesa-50"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-adesa-700 rounded-full blur-[160px] opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[140px] opacity-10" />
      </div>

      <GridLine />
      <div className="adesa-noise-texture absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <p
            id="hero-intro"
            className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold-300"
          >
            About ADESA HQ
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-medium leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            ADESA HQ was built to create companies with staying power.
          </h1>

          <p className="mt-10 text-xl text-adesa-300 leading-relaxed max-w-3xl">
            Our role is not only to launch ventures but to give them the
            operating discipline, governance structure, and strategic patience
            required to last.
          </p>

          <hr className="mt-16 w-32 h-[2px] border-none bg-gradient-to-r from-gold-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
