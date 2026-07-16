"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SubscribeCard({
  title,
  description,
  href,
  buttonText = "Subscribe",
  icon = true,
  className = "",
}) {
  const { newsletter } = siteConfig;

  return (
    <section
      className={`mx-auto w-full max-w-4xl px-4 sm:px-6 ${className}`}
      aria-labelledby="newsletter-title"
    >
      <div className="rounded-[32px] border border-white/8 bg-white/4 px-6 py-10 text-center shadow-[0_24px_70px_rgba(3,7,18,0.28)] backdrop-blur-xl sm:px-10 sm:py-12">
      <h4
        id="newsletter-title"
        className="
          text-[11px]
          font-medium
          text-gold-300
          mb-4
          sm:mb-6
          uppercase
          tracking-[0.28em]
          text-center
        "
      >
        {title || newsletter.title}
      </h4>

      <p
        className="
          text-sm
          sm:text-base
          max-w-2xl
          mx-auto
          text-adesa-300
          mb-6
          sm:mb-8
          text-center
          leading-relaxed
        "
      >
        {description || newsletter.description}
      </p>

      <motion.a
        href={href || newsletter.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          inline-flex
          min-w-[220px]
          bg-linear-to-r from-gold-400 to-gold-300
          text-adesa-950
          font-bold
          px-8
          py-3
          sm:py-4
          rounded-full
          hover:shadow-lg hover:shadow-gold-500/20
          transition-all duration-300
          flex items-center justify-center gap-2
          text-sm
          sm:text-base
        "
      >
        {buttonText}
        {icon && <Send size={18} />}
      </motion.a>
      </div>
    </section>
  );
}
