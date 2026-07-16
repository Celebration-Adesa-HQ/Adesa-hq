"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/section";

const stats = [
  { value: "4", label: "Core sectors", description: "Operating companies already within the group portfolio." },
  {
    value: "1",
    label: "Group standard",
    description: "A consistent governance and reporting discipline across the portfolio.",
  },
  { value: "100%", label: "African focus", description: "Built around local context, long-term relevance, and regional opportunity." },
  { value: "Long", label: "Time horizon", description: "Capital and operating decisions made with durability in mind." },
];

export default function StatsSection() {
  return (
    <Section
      className="relative bg-[var(--color-adesa-900)] text-[var(--color-adesa-50)] overflow-hidden"
      role="region"
      aria-label="Company statistics"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-adesa-800)] to-[var(--color-neutral-950)] opacity-80" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[var(--color-adesa-700)] rounded-full blur-[140px] opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--color-gold-500)] rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold-300">
            What defines the group
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.03em] text-adesa-50 lg:text-5xl">
            Scope matters, but discipline matters more.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.section
              key={stat.label}
              aria-labelledby={`stat-${index}-label`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[var(--color-gold-400)] transition-all duration-500" />

              <div className="relative p-10 bg-[var(--color-adesa-800)] border border-[var(--color-adesa-700)] rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-[var(--color-gold-500)]">
                <p
                  className="text-5xl font-semibold tracking-tight text-[var(--color-gold-400)]"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
                <h3
                  id={`stat-${index}-label`}
                  className="mt-4 text-lg font-medium text-[var(--color-adesa-100)]"
                >
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-adesa-300)] leading-relaxed">
                  {stat.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_60px_rgba(184,134,11,0.15)]" />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </Section>
  );
}
