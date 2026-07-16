"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../ui/logo";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Group Structure", href: "/structure" },
  {
    name: "Subsidiaries",
    href: "/subsidiaries",
    children: ACTIVE_SUBSIDIARIES.map(({ name, href }) => ({ name, href })),
  },
  { name: "Governance", href: "/governance" },
  { name: "Careers", href: "/careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none sm:top-6">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "pointer-events-auto w-[94%] max-w-7xl transition-all duration-500",
          isScrolled ? "scale-[0.98]" : "scale-100",
        )}
      >
        {/*
          Two-layer approach:
          1. Visual shell (absolute, overflow-hidden) — keeps decorative gradients clipped to the pill shape.
          2. Nav (relative, overflow-visible) — sits on top so the Subsidiaries dropdown can escape the pill boundary.
        */}
        <div className="relative">
          {/* Visual shell — overflow-hidden for decorative gradients only */}
          <div className="adesa-shell-surface absolute inset-0 overflow-hidden rounded-[28px] pointer-events-none">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/90 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/6 to-transparent" />
          </div>

          {/* Functional nav — overflow-visible so dropdown can appear below the pill */}
          <nav
            className="relative flex h-18 items-center justify-between gap-4 px-5 sm:px-6 lg:h-20 lg:px-8"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="ADESA HQ Home"
            >
              <Logo />
              <div className="hidden xl:block">
                <p className="text-[11px] uppercase tracking-[0.28em] text-adesa-300">
                  Governance-led group
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors whitespace-nowrap",
                      pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                        ? "text-adesa-50"
                        : "text-adesa-300 hover:text-gold-300",
                    )}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={
                      item.children ? openDropdown === item.name : undefined
                    }
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          openDropdown === item.name && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Panel */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.ul
                          key="dropdown"
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-5 w-56 rounded-2xl border border-white/10 bg-adesa-900/95 py-1.5 shadow-[0_24px_60px_rgba(3,7,18,0.56)] backdrop-blur-2xl z-50 overflow-hidden"
                        >
                          {/* Arrow */}
                          <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 border-l border-t border-white/10 bg-adesa-900/95" />
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                target={
                                  child.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  child.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-adesa-200 transition-colors hover:bg-white/6 hover:text-gold-300"
                              >
                                <span className="h-1 w-1 rounded-full bg-gold-400/60 shrink-0" />
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:block shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-gold-400 px-5 py-2.5 text-sm font-medium text-adesa-950 shadow-[0_16px_32px_rgba(198,150,45,0.22)] transition-colors hover:bg-gold-300"
              >
                Contact ADESA HQ
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="rounded-full border border-white/10 p-2 text-adesa-100 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-white/10 bg-adesa-900/96 lg:hidden rounded-b-[28px]"
                aria-label="Mobile navigation"
              >
                <ul className="space-y-4 px-6 py-6">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-base font-medium text-adesa-200 transition-colors hover:text-gold-300"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                target={
                                  child.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  child.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="flex items-center gap-2 text-sm text-adesa-400 hover:text-gold-300"
                              >
                                <span className="h-1 w-1 rounded-full bg-gold-400/40 shrink-0" />
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}

                  <li className="pt-4">
                    <Link
                      href="/contact"
                      className="block rounded-full bg-gold-400 py-3 text-center text-sm font-medium text-adesa-950"
                    >
                      Contact ADESA HQ
                    </Link>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
}
