"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../ui/logo";
import { ADESA_DISTRIBUTION, ADESA_SOLUTIONS } from "@/config/brand";

const heroSubsidiaries = [
  {
    name: "Adesa Energy",
    image: "/logo/Adesa-energy-logo.jpg",
    alt: "Adesa Energy Logo",
    badge: "AE",
    sector: "Renewable Infrastructure",
  },
  {
    name: "Adesa Media",
    image: "/logo/Adesa-media-logo-white.png",
    alt: "Adesa Media Logo",
    badge: "AM",
    sector: "Strategic Communications",
  },
  {
    name: ADESA_SOLUTIONS.name,
    image: ADESA_SOLUTIONS.image,
    alt: `${ADESA_SOLUTIONS.name} Logo`,
    badge: "AS",
    sector: "Operational Systems",
  },
  {
    name: ADESA_DISTRIBUTION.name,
    image: ADESA_DISTRIBUTION.image,
    alt: `${ADESA_DISTRIBUTION.name} Logo`,
    badge: "AD",
    sector: "Market Access & Supply",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-adesa-950 text-white pt-24 pb-16 lg:py-32"
      aria-label="Hero Section - ADESA HQ"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] h-[750px] w-[750px] rounded-full bg-adesa-700 blur-[180px] opacity-45" />
        <div className="absolute bottom-[-18%] right-[-8%] h-[680px] w-[680px] rounded-full bg-gold-500 blur-[180px] opacity-15" />
        <div className="adesa-grid-texture absolute inset-0 opacity-[0.55]" />
        <div className="adesa-noise-texture absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 mb-8 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">
                Legacy in Motion • African Holding Group
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08]">
              <span className="block">Building</span>
              <span className="block adesa-gold-gradient-text font-semibold">
                Sector-Defining
              </span>
              <span className="block">African Businesses</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-adesa-200 max-w-xl leading-relaxed">
              ADESA HQ is a governance-led builder–operator group focused on conceiving,
              launching, governing, and compounding businesses designed for generational
              durability across Africa.
            </p>

            {/* Quick stats pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
              <div className="rounded-xl border border-white/8 bg-white/3 p-3 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-adesa-400">Governance</p>
                <p className="text-sm font-semibold text-gold-300 mt-0.5">First Principles</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/3 p-3 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-adesa-400">Horizon</p>
                <p className="text-sm font-semibold text-gold-300 mt-0.5">Long Duration</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/3 p-3 backdrop-blur-md col-span-2 sm:col-span-1">
                <p className="text-xs uppercase tracking-wider text-adesa-400">Geography</p>
                <p className="text-sm font-semibold text-gold-300 mt-0.5">Pan-Africa</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                href="/about"
                size="lg"
                className="bg-linear-to-r from-gold-400 to-gold-300 text-adesa-950 font-semibold hover:shadow-[0_10px_30px_rgba(212,162,52,0.3)] rounded-full px-8"
                role="link"
                aria-label="Discover Our Approach"
              >
                Discover Our Approach
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                href="/structure"
                variant="outline"
                size="lg"
                className="border-white/20 text-adesa-100 hover:border-gold-400 hover:text-gold-300 rounded-full px-8 backdrop-blur-sm"
                role="link"
                aria-label="Group Structure"
              >
                Group Structure
              </Button>
            </div>
          </motion.div>

          {/* Right Visual Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="relative aspect-square w-full max-w-[460px] p-6 sm:p-8">
              {/* Glass Background card */}
              <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/6 to-white/1 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl" />
              
              {/* Ambient revolving rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="absolute inset-[-15px] sm:inset-[-22px] rounded-[48px] border border-gold-400/20 pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                className="absolute inset-[-6px] sm:inset-[-10px] rounded-[40px] border border-white/5 pointer-events-none"
              />

              {/* Core Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-between text-center">
                {/* Master Badge */}
                <div className="flex flex-col items-center pt-2">
                  <div className="p-1 rounded-2xl bg-white/5 border border-gold-400/30 shadow-[0_0_30px_rgba(212,162,52,0.2)]">
                    <Logo variant="secondary" width={58} height={58} priority />
                  </div>
                  <h2 className="mt-3 font-serif text-xl sm:text-2xl font-medium tracking-tight text-white">
                    ADESA HQ
                  </h2>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                    Holding Group Architecture
                  </p>
                </div>

                {/* Connecting divider */}
                <div className="w-full flex items-center justify-center my-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                </div>

                {/* 4 Subsidiaries 2x2 grid */}
                <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 pb-2">
                  {heroSubsidiaries.map((subsidiary) => (
                    <div
                      key={subsidiary.name}
                      className="group relative flex flex-col items-center rounded-2xl border border-white/8 bg-white/4 p-3 transition-all duration-300 hover:border-gold-400/50 hover:bg-white/8 hover:shadow-[0_8px_24px_rgba(212,162,52,0.12)]"
                    >
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-xl bg-white/10 flex items-center justify-center mb-2 border border-white/10 group-hover:border-gold-400/40">
                        {subsidiary.image ? (
                          <Image
                            src={subsidiary.image}
                            alt={subsidiary.alt}
                            width={40}
                            height={40}
                            className="object-contain p-1"
                          />
                        ) : (
                          <span className="font-serif text-sm font-semibold tracking-wide text-gold-400">
                            {subsidiary.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-white group-hover:text-gold-300 transition-colors text-center">
                        {subsidiary.name}
                      </p>
                      <p className="text-[10px] text-adesa-400 text-center line-clamp-1">
                        {subsidiary.sector}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
