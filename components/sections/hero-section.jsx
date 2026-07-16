"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../ui/logo";
import { ADESA_DISTRIBUTION, ADESA_SOLUTIONS } from "@/config/brand";

const heroSubsidiaries = [
  {
    name: "Adesa Energy",
    image: "/logo/Adesa-energy-logo.jpg",
    alt: "Adesa Energy Logo",
    width: 40,
    height: 40,
    className: "w-20 h-12 sm:w-16 sm:h-16 absolute",
  },
  {
    name: "Adesa Media",
    image: "/logo/Adesa-media-logo-white.png",
    alt: "Adesa Media Logo",
    width: 80,
    height: 40,
    className: "w-12 h-8 sm:w-20 sm:h-10 absolute",
  },
  {
    name: ADESA_SOLUTIONS.name,
    image: ADESA_SOLUTIONS.image,
    alt: `${ADESA_SOLUTIONS.name} Logo`,
    width: 64,
    height: 64,
    className: "w-12 h-12 sm:w-16 sm:h-16 object-contain",
  },
  {
    name: ADESA_DISTRIBUTION.name,
    image: ADESA_DISTRIBUTION.image,
    alt: `${ADESA_DISTRIBUTION.name} Logo`,
    width: 64,
    height: 64,
    className: "w-12 h-12 sm:w-16 sm:h-16 object-contain",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-adesa-950 text-white"
      aria-label="Hero Section - ADESA HQ"
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-18%] left-[-8%] h-[760px] w-[760px] rounded-full bg-adesa-700 blur-[170px] opacity-55" />
        <div className="absolute bottom-[-22%] right-[-8%] h-[640px] w-[640px] rounded-full bg-gold-500 blur-[150px] opacity-16" />
        <div className="adesa-grid-texture absolute inset-0 opacity-[0.55]" />
        <div className="adesa-noise-texture absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-8">
              Multi-Sector Holding Group • Africa
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05]">
              <span className="block">Building</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Sector-Defining
              </span>
              <span className="block">African Businesses</span>
            </h1>

            <p className="mt-10 text-lg text-white/70 max-w-xl leading-relaxed">
              ADESA HQ is a builder–operator group focused on conceiving,
              launching, governing, and scaling businesses designed for
              generational impact.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Button
                href="/about"
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8"
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
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                role="link"
                aria-label="Group Structure"
              >
                Group Structure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="relative aspect-square w-[92%] max-w-[460px]">
              <div className="absolute inset-0 rounded-[34px] border border-white/10 bg-white/5 shadow-[0_0_120px_rgba(198,150,45,0.14)] backdrop-blur-2xl" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-[-18px] rounded-[44px] border border-white/10 sm:inset-[-28px]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute inset-[-8px] rounded-[38px] border border-white/5 sm:inset-[-12px]"
              />

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 text-center">
                <div className="flex flex-col items-center">
                  <Logo aria-label="Adesa HQ Logo" />
                  <p className="text-sm font-medium tracking-wide sm:text-xl">
                    Adesa HQ
                  </p>
                </div>

                <div className="w-px h-8 sm:h-10 bg-white/20 my-2 sm:my-4" />

                <div className="relative w-full flex justify-center mb-4 sm:mb-6">
                  <div className="absolute top-1/2 w-[70%] h-px bg-white/20" />
                </div>

                <div className="grid w-full max-w-[330px] grid-cols-2 gap-4 sm:gap-6">
                  {heroSubsidiaries.map((subsidiary) => (
                    <div
                      key={subsidiary.name}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-2xl bg-white/10 flex items-center justify-center mb-2 sm:mb-3">
                        {subsidiary.image ? (
                          <Image
                            src={subsidiary.image}
                            alt={subsidiary.alt}
                            width={subsidiary.width}
                            height={subsidiary.height}
                            loading="lazy"
                            className={subsidiary.className}
                          />
                        ) : (
                          <span className="font-serif text-sm sm:text-lg font-semibold tracking-[0.18em] text-gold-400">
                            {subsidiary.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-white/60 font-medium text-center">
                        {subsidiary.name}
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
