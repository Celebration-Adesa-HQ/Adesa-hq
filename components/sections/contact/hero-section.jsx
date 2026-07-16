"use client";

import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-adesa-950 pt-28 pb-20 text-white sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
      aria-labelledby="hero-contact-heading"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-adesa-700 rounded-full blur-[140px] sm:blur-[160px] opacity-40" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gold-400 rounded-full blur-[150px] sm:blur-[180px] opacity-10" />
      </div>

      <GridLine />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p
              className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold-300 sm:mb-8"
            >
              Contact
            </p>

            <h1
              id="hero-contact-heading"
              className="text-4xl leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            >
              Bring us your partnership, media, or group-level inquiry.
            </h1>

            <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl text-adesa-200 leading-relaxed max-w-2xl">
              We welcome conversations that are strategic, thoughtful, and
              relevant to the group, whether they concern partnerships, media,
              operating opportunities, or general engagement.
            </p>
          </motion.div>

    
        </div>
      </div>
    </section>
  );
}
