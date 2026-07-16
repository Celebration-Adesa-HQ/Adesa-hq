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
        <div className="adesa-shell-surface relative overflow-hidden rounded-[28px]">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/90 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/6 to-transparent" />

          <nav
            className="flex h-18 items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="ADESA HQ Home"
            >
              <Logo />
              <div className="hidden xl:block">
                <p className="text-[11px] uppercase tracking-[0.28em] text-adesa-300">
                  Governance-led group
                </p>
              </div>
            </Link>

            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
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
                      "flex items-center gap-1 text-[13px] font-medium tracking-[0.16em] uppercase transition-colors",
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
                          "h-4 w-4 transition-transform",
                          openDropdown === item.name && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {item.children && openDropdown === item.name && (
                    <AnimatePresence>
                      <motion.ul
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-white/10 bg-adesa-900/95 p-2 shadow-[0_24px_60px_rgba(3,7,18,0.48)] backdrop-blur-2xl"
                      >
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
                              className="block rounded-xl px-4 py-3 text-sm text-adesa-200 transition-colors hover:bg-white/6 hover:text-gold-300"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-gold-400 px-6 py-2.5 text-sm font-medium text-adesa-950 shadow-[0_16px_32px_rgba(198,150,45,0.22)] transition-colors hover:bg-gold-300"
              >
                Contact ADESA HQ
              </Link>
            </div>

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

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-white/10 bg-adesa-900/96 lg:hidden"
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
                                className="block text-sm text-adesa-400 hover:text-gold-300"
                              >
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
