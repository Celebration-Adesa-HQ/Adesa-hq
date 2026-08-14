"use client";

import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/logo";
import { ADESA_INSTAGRAM_URL } from "@/config/brand";
import { siteConfig } from "@/config/site";

export default function LeftPanel() {
  return (
    <section
      className="relative flex items-center overflow-hidden text-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 max-w-2xl mx-auto space-y-10 sm:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <Logo variant="secondary" width={48} height={48} />
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-gold-400" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">
                Institutional Access
              </p>
            </div>
          </div>

          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight"
          >
            Direct Inquiries to <span className="adesa-gold-gradient-text">ADESA HQ</span>
          </h2>

          <p className="text-sm sm:text-base text-adesa-200 leading-relaxed">
            ADESA HQ maintains open channels with strategic partners, founders, co-investors, and institutions aligned with our long-duration mandate across African markets.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Mail className="h-4 w-4 text-gold-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-adesa-400 font-semibold">General & Institutional Inquiries</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm sm:text-base font-medium text-white hover:text-gold-300 transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <MapPin className="h-4 w-4 text-gold-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-adesa-400 font-semibold">Headquarters</p>
              <p className="text-sm sm:text-base font-medium text-white">
                {siteConfig.contact.address}
              </p>
              <p className="text-xs text-adesa-400 mt-0.5">Operating Across African Markets</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Clock className="h-4 w-4 text-gold-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-adesa-400 font-semibold">Response Window</p>
              <p className="text-xs sm:text-sm text-adesa-200">
                Executive team reviews inquiries within 2–3 business days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social channels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-4 border-t border-white/8 flex items-center justify-between"
        >
          <span className="text-xs uppercase tracking-wider text-adesa-400 font-semibold">
            Group Channels
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61551745417738&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-adesa-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/adesagroup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-adesa-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={ADESA_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-adesa-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/adesa-hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-adesa-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
