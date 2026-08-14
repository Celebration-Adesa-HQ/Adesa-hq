"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center pointer-events-none sm:top-5">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "pointer-events-auto w-[94%] max-w-7xl transition-all duration-500",
          isScrolled ? "scale-[0.98]" : "scale-100"
        )}
      >
        <div className="relative">
          {/* Visual shell */}
          <div className="adesa-shell-surface absolute inset-0 overflow-hidden rounded-[26px] pointer-events-none">
            <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/80 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white/5 to-transparent" />
          </div>

          {/* Functional nav */}
          <nav
            className="relative flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
            aria-label="Main navigation"
          >
            {/* Logo & Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-3.5 shrink-0 group"
              aria-label="ADESA HQ Home"
            >
              <Logo variant="secondary" width={44} height={44} priority />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  ADESA <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-sans font-semibold">HQ</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-adesa-400 hidden xl:block">
                  Holding & Operating Group
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-200 whitespace-nowrap py-2",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-gold-300 font-semibold drop-shadow-[0_0_8px_rgba(212,162,52,0.4)]"
                        : "text-adesa-200 hover:text-white"
                    )}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={item.children ? openDropdown === item.name : undefined}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 opacity-70",
                          openDropdown === item.name && "rotate-180 opacity-100 text-gold-400"
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
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 rounded-2xl border border-white/10 bg-adesa-900/98 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-2xl z-50 overflow-hidden"
                        >
                          <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 border-l border-t border-white/10 bg-adesa-900/98" />
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                target={child.href.startsWith("http") ? "_blank" : undefined}
                                rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-adesa-200 transition-colors hover:bg-white/6 hover:text-gold-300"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
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
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-400 to-gold-300 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-adesa-950 shadow-[0_8px_24px_rgba(212,162,52,0.25)] transition-all hover:scale-105 hover:shadow-[0_12px_30px_rgba(212,162,52,0.35)]"
              >
                Contact HQ
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="rounded-full border border-white/10 p-2 text-adesa-100 lg:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gold-400" />
              ) : (
                <Menu className="h-5 w-5" />
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
                className="overflow-hidden border-t border-white/10 bg-adesa-900/98 lg:hidden rounded-b-[26px] backdrop-blur-2xl"
                aria-label="Mobile navigation"
              >
                <ul className="space-y-3 px-6 py-6">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-base font-medium transition-colors hover:text-gold-300 py-1",
                          pathname === item.href ? "text-gold-300" : "text-adesa-200"
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <ul className="pl-4 mt-2 space-y-2 border-l border-white/10 ml-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                target={child.href.startsWith("http") ? "_blank" : undefined}
                                rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 text-xs text-adesa-300 hover:text-gold-300 py-1"
                              >
                                <span className="h-1 w-1 rounded-full bg-gold-400 shrink-0" />
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
                      className="block w-full rounded-full bg-linear-to-r from-gold-400 to-gold-300 py-3 text-center text-xs font-semibold uppercase tracking-wider text-adesa-950 shadow-md"
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
