"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SubsidiaryCard({
  name,
  description,
  services,
  href,
  image,
  badge,
  sector,
  featured = false,
  external = false,
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`group relative h-full p-6 sm:p-8 rounded-[28px] border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
        featured
          ? "bg-gradient-to-b from-white/8 to-white/2 border-gold-400/50 shadow-[0_20px_60px_rgba(212,162,52,0.12)]"
          : "bg-gradient-to-b from-white/5 to-white/1 border-white/8 hover:border-gold-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      }`}
    >
      {/* Top luminous accent */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header with image/badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden p-1 group-hover:border-gold-400/50 transition-colors">
            {image ? (
              <Image
                src={image}
                alt={`${name} Logo`}
                width={44}
                height={44}
                className="object-contain"
              />
            ) : (
              <span className="font-serif text-sm font-semibold tracking-wide text-gold-400">
                {badge || "AD"}
              </span>
            )}
          </div>

          <span className="rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
            {featured ? "Featured" : "Operating Unit"}
          </span>
        </div>

        <header>
          {sector && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1">
              {sector}
            </p>
          )}

          <h3 className="text-xl sm:text-2xl font-serif font-medium text-white mb-3 group-hover:text-gold-300 transition-colors leading-snug">
            {name}
          </h3>
        </header>

        <p className="text-xs sm:text-sm text-adesa-300 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {services && (
          <ul className="flex flex-wrap gap-2 mb-8">
            {services.map((service) => (
              <li
                key={service}
                className="px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wide border border-white/6 text-adesa-300 bg-white/3"
              >
                {service}
              </li>
            ))}
          </ul>
        )}

        <div className="pt-4 border-t border-white/6 mt-auto">
          <Link
            href={href}
            target={external || href.startsWith("http") ? "_blank" : undefined}
            rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold-200 transition-colors"
            aria-label={`Learn more about ${name}`}
          >
            Learn More
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
