"use client";

import { motion } from "framer-motion";
import { Target, Layers, Shield, TrendingUp, Sparkles } from "lucide-react";

const modelSteps = [
  {
    step: "01",
    icon: Target,
    title: "Select & Anchor",
    description: "Target priority sectors where structural African demand, execution capacity, and regulatory timing support durable generational growth.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Engineer & Build",
    description: "Pair patient capital with operational systems, talent infrastructure, and institutional-grade management frameworks from day zero.",
  },
  {
    step: "03",
    icon: Shield,
    title: "Govern & Oversee",
    description: "Embed independent oversight, auditable reporting discipline, and unambiguous decision rights across operating boards.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Scale & Compound",
    description: "Compound capital responsibly, reinvest in adjacent synergies, and build generational institutions that stand the test of time.",
  },
];

export default function OperatingModelSection() {
  return (
    <section
      className="relative py-24 sm:py-32 bg-adesa-950 text-adesa-100 overflow-hidden border-t border-white/5"
      aria-labelledby="operating-model-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-adesa-800 opacity-35 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-500 opacity-10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <header className="max-w-3xl mb-16 sm:mb-24">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Builder-Operator Model
          </p>
          <h2
            id="operating-model-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight"
          >
            How ADESA HQ <span className="adesa-gold-gradient-text font-serif">constructs value</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-adesa-300 leading-relaxed">
            We are operators, not passive allocators. We actively architect subsidiaries from formation
            through scaling, embedding institutional standards at every phase of growth.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {modelSteps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative p-6 sm:p-8 rounded-[26px] bg-gradient-to-b from-white/6 to-white/2 border border-white/8 hover:border-gold-400/40 hover:bg-white/8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold-400/50 group-hover:bg-gold-500/10 transition-colors">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white/20 group-hover:text-gold-400/60 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-adesa-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gold-400/70">
                <Sparkles className="w-3 h-3" />
                <span>Phase {item.step}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
