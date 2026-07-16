"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({ children, className, dark = false, id, title }) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={cn(
        "py-24 md:py-32",
        dark ? "bg-adesa-900 text-white" : "bg-adesa-950 text-adesa-100",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
  motionProps = {},
  id,
}) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        motionProps.className,
      )}
      {...motionProps}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-[11px] font-medium uppercase tracking-[0.28em]",
            dark ? "text-gold-400" : "text-adesa-300",
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          id={titleId}
          className={cn(
            "text-4xl font-medium tracking-[-0.03em] lg:text-5xl",
            dark ? "text-white" : "text-adesa-50",
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-6 max-w-[62ch] text-lg leading-relaxed",
            dark ? "text-adesa-200" : "text-adesa-300",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
