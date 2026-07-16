"use client";
import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-adesa-950 pt-32 pb-28 lg:pt-44 lg:pb-36 text-adesa-100"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-30%] left-[-15%] w-[1000px] h-[1000px] bg-adesa-700 rounded-full blur-[200px] opacity-40" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[800px] h-[800px] bg-gold-400 rounded-full blur-[180px] opacity-10" />
      </div>

      <GridLine />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-adesa-600/40 to-transparent" />
        <div className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-adesa-600/30 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl"
        >
          <div className="absolute -left-8 top-6 hidden lg:block">
            <motion.div
              animate={{ scaleY: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[3px] h-32 bg-gradient-to-b from-gold-400 via-gold-300 to-transparent"
            />
          </div>

          <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-gold-300">
            Subsidiaries
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-medium leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Operating companies built for focus, scale, and accountability.
          </h1>

          <motion.div
            animate={{ width: ["80px", "140px", "80px"] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="mt-12 h-[2px] bg-gradient-to-r from-gold-400 via-gold-300 to-transparent"
            aria-hidden="true"
          />

          <p className="mt-12 text-xl text-adesa-300 leading-relaxed max-w-3xl">
            Each business in the portfolio is shaped around a clear sector
            mandate while remaining anchored to shared standards for governance,
            reporting, and long-term capital use.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-adesa-900 to-transparent pointer-events-none" />
    </section>
  );
}
