"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "@/components/ui/logo";
import { ACTIVE_SUBSIDIARIES, ADESA_INSTAGRAM_URL } from "@/config/brand";
import { siteConfig } from "@/config/site";

const footerNavigation = {
  company: [
    { name: "About ADESA HQ", href: "/about" },
    { name: "Group Structure", href: "/structure" },
    { name: "Corporate Governance", href: "/governance" },
    { name: "Careers", href: "/careers" },
  ],
  subsidiaries: ACTIVE_SUBSIDIARIES.map(({ name, href }) => ({ name, href })),
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-adesa-950 text-adesa-100 overflow-hidden border-t border-white/5"
      role="contentinfo"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-[-10%] w-[700px] h-[700px] bg-adesa-800 blur-[180px] opacity-30 rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-500 blur-[200px] opacity-10 rounded-full" />
      </div>
      <div className="absolute inset-0 opacity-[0.03] adesa-grid-texture" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
            {/* Left brand block */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3.5 group"
                  aria-label="ADESA HQ Home"
                >
                  <Logo variant="secondary" width={52} height={52} />
                  <div>
                    <span className="font-serif text-2xl tracking-tight text-white group-hover:text-gold-300 transition-colors">
                      ADESA
                    </span>
                    <span className="ml-2 text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 font-sans">
                      HQ
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-adesa-400">
                      Builder-Operator Group
                    </p>
                  </div>
                </Link>

                <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-adesa-300">
                  ADESA HQ builds and governs sector-defining operating companies
                  with clear standards, disciplined capital allocation, and long-duration
                  ambition across priority African markets.
                </p>
              </div>

              {/* Newsletter card */}
              <div className="mt-8 rounded-2xl border border-white/8 bg-white/3 p-5 sm:p-6 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
                  The Adesa Lens • Newsletter
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-adesa-300">
                  {siteConfig.newsletter.description}
                </p>
                <Link
                  href={siteConfig.newsletter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
                >
                  {siteConfig.newsletter.submitLabel}
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-7">
              <nav
                aria-label="Footer navigation"
                className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10"
              >
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400">
                    Holding Group
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-xs sm:text-sm text-adesa-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400">
                    Subsidiaries
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {footerNavigation.subsidiaries.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group text-xs sm:text-sm text-adesa-300 hover:text-gold-300 transition-colors duration-200 inline-flex items-center gap-1.5"
                        >
                          {item.name}
                          {item.href.startsWith("http") && (
                            <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400">
                    Legal & Trust
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-xs sm:text-sm text-adesa-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-adesa-400 mb-2">
                      Headquarters
                    </h4>
                    <p className="text-xs text-adesa-300 leading-relaxed">
                      Lagos, Nigeria • Operating regionally
                    </p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="border-t border-white/6 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-adesa-300">
              <MapPin className="h-4 w-4 text-gold-400 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-adesa-300">
              <Phone className="h-4 w-4 text-gold-400 shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-adesa-300">
              <Mail className="h-4 w-4 text-gold-400 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300 transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-adesa-300">
              <Globe className="h-4 w-4 text-gold-400 shrink-0" />
              <Link href={siteConfig.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
                www.adesahq.com
              </Link>
            </div>
          </div>
        </div>

        {/* Social channels & copyright */}
        <div className="border-t border-white/6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="https://www.facebook.com/profile.php?id=61551745417738&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-400 hover:text-gold-400 transition-colors"
              aria-label="ADESA HQ Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="https://x.com/adesagroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-400 hover:text-gold-400 transition-colors"
              aria-label="ADESA HQ Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href={ADESA_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-400 hover:text-gold-400 transition-colors"
              aria-label="ADESA HQ Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/adesa-hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adesa-400 hover:text-gold-400 transition-colors"
              aria-label="ADESA HQ LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-adesa-400">
            © {currentYear} ADESA HQ Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
