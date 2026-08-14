"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";

export default function SubscribeCard({
  title,
  description,
  href,
  buttonText = "Subscribe on LinkedIn",
  icon = true,
  className = "",
}) {
  const { newsletter } = siteConfig;

  return (
    <section
      className={`mx-auto w-full max-w-5xl px-6 lg:px-8 py-16 sm:py-24 ${className}`}
      aria-labelledby="newsletter-title"
    >
      <div className="relative rounded-[36px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/8 to-white/2 p-8 sm:p-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        <div className="absolute top-0 inset-x-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/80 to-transparent" />
        
        <p
          id="newsletter-title"
          className="text-[11px] font-semibold text-gold-400 mb-4 uppercase tracking-[0.3em]"
        >
          {title || newsletter.title}
        </p>

        <h3 className="font-serif text-2xl sm:text-4xl font-medium text-white max-w-2xl mx-auto leading-snug">
          Perspectives on <span className="adesa-gold-gradient-text">Governance & Capital</span> in Africa
        </h3>

        <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto text-adesa-300 mb-8 leading-relaxed">
          {description || newsletter.description}
        </p>

        <motion.a
          href={href || newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-400 to-gold-300 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-adesa-950 shadow-[0_12px_32px_rgba(212,162,52,0.25)] hover:shadow-[0_16px_40px_rgba(212,162,52,0.35)] transition-all"
        >
          {buttonText}
          {icon ? <Send size={16} /> : <ArrowUpRight size={16} />}
        </motion.a>
      </div>
    </section>
  );
}
