import Link from "next/link";
import { ACTIVE_SUBSIDIARIES } from "@/config/brand";
import { EditorialIntro, EditorialLedger } from "@/components/ui/editorial";

const standards = [
  { title: "Think like an owner", description: "Understand the consequence of decisions, protect resources, and remain accountable for outcomes." },
  { title: "Build usable systems", description: "Turn good judgement into clear processes that other people can understand, repeat, and improve." },
  { title: "Stay close to the work", description: "Combine strategic thinking with practical execution and respect for operating detail." },
  { title: "Choose the long view", description: "Prefer durable capability and stakeholder trust over short-term theatre." },
];

export default function CareerEditorialSections() {
  return (
    <>
      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="careers-culture-title"><div className="site-container"><EditorialIntro kicker="Operating culture" title="Serious work, practical responsibility, long horizons." description="ADESA HQ and its operating companies value people who can move between strategic context and disciplined execution." titleId="careers-culture-title" /><EditorialLedger items={standards} className="mt-14 lg:ml-[25%]" /></div></section>

      <section className="section-space bg-adesa-950 text-adesa-100" aria-labelledby="careers-environments-title"><div className="site-container grid gap-12 lg:grid-cols-12"><div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"><p className="text-sm font-semibold text-gold-300">Where the work happens</p><h2 id="careers-environments-title" className="mt-5 max-w-[14ch] text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">Different sectors demand different operating instincts.</h2><p className="mt-6 text-base leading-7 text-adesa-300">Career opportunities may sit within the holding group or inside one of its operating companies.</p></div><div className="border-t border-white/12 lg:col-span-7 lg:col-start-6">{ACTIVE_SUBSIDIARIES.map((company, index) => <article key={company.name} className="grid gap-4 border-b border-white/12 py-8 sm:grid-cols-[2rem_10rem_1fr]"><span className="text-xs tabular-nums text-gold-300">0{index + 1}</span><div><h3 className="text-lg font-medium text-adesa-50">{company.name}</h3><p className="mt-1 text-xs text-gold-300">{company.sector}</p></div><p className="text-sm leading-7 text-adesa-400">{company.description}</p></article>)}</div></div></section>

      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="career-interest-title"><div className="site-container grid gap-10 border-t border-white/12 pt-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="text-sm font-semibold text-gold-300">Talent interest</p><h2 id="career-interest-title" className="mt-5 max-w-[18ch] text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">No verified vacancies are being published here today.</h2><p className="mt-6 max-w-[58ch] text-base leading-7 text-adesa-300">Professionals who understand the group’s mandate may still introduce themselves for future consideration. A message should include the operating area, relevant experience, and the contribution you believe you can make.</p></div><div className="lg:col-span-4 lg:col-start-9"><a href="mailto:career@adesahq.com?subject=Talent interest at ADESA HQ" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-6 text-sm font-semibold text-adesa-950 transition-colors hover:bg-gold-300">Send a talent introduction</a><p className="mt-4 text-xs leading-5 text-adesa-500">This is an expression-of-interest channel, not an application to a published vacancy.</p></div></div></section>

      <section className="bg-adesa-950 py-16 text-adesa-100"><div className="site-container flex flex-wrap items-center justify-between gap-6 border-t border-white/12 pt-7"><p className="text-sm text-adesa-400">General and institutional enquiries</p><Link href="/contact" className="text-sm font-semibold text-gold-300 underline decoration-gold-400/50 underline-offset-8">Use the contact desk</Link></div></section>
    </>
  );
}
