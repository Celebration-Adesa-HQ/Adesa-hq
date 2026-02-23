import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Group Structure", href: "/structure" },
    { name: "Governance", href: "/governance" },
  ],
  subsidiaries: [
    { name: "Adesa Media", href: "https://www.adesamedia.com/" },
    { name: "Adesa Energy", href: "https://www.adesaenergy.com/" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-adesa-900 text-adesa-100 overflow-hidden"
      role="contentinfo"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-[-10%] w-[700px] h-[700px] bg-adesa-700 blur-[160px] opacity-30 rounded-full" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-gold-500 blur-[180px] opacity-10 rounded-full" />
      </div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="inline-block group"
                aria-label="ADESA HQ Home"
              >
                <span className="font-serif text-3xl tracking-tight text-adesa-50">
                  ADESA
                </span>
                <span className="ml-2 text-xs tracking-[0.35em] uppercase text-gold-400">
                  HQ
                </span>
              </Link>

              <p className="mt-8 text-adesa-300 max-w-md leading-relaxed text-base">
                A builder–operator group focused on conceiving, launching,
                governing, and scaling sector-defining African businesses.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="w-10 h-[1px] bg-gold-400" />
                <p className="text-sm text-adesa-400 tracking-wide">
                  Building generational systems across Africa
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <nav
                aria-label="Footer navigation"
                className="grid grid-cols-2 sm:grid-cols-3 gap-10"
              >
                <div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-adesa-400">
                    Company
                  </h2>
                  <ul className="mt-8 space-y-5">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-adesa-300 hover:text-gold-400 transition-colors duration-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-adesa-400">
                    Subsidiaries
                  </h2>
                  <ul className="mt-8 space-y-5">
                    {footerNavigation.subsidiaries.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group text-sm text-adesa-300 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                        >
                          {item.name}
                          <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-adesa-400">
                    Legal
                  </h2>
                  <ul className="mt-8 space-y-5">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-adesa-300 hover:text-gold-400 transition-colors duration-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="relative border-t border-adesa-800/70 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-adesa-400">
              © {currentYear} ADESA HQ. All rights reserved.
            </p>
            <address className="not-italic text-sm text-adesa-500">
              Lagos, Nigeria
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
