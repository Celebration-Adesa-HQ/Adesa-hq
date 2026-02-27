"use client";

import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function LeftPanel() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden text-white px-4 sm:px-6 lg:px-16 py-20 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 max-w-5xl mx-auto space-y-10 sm:space-y-14 lg:space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-3"
        >
          <p className="text-xs sm:text-sm tracking-widest uppercase text-adesa-400">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-adesa-50"
          >
            We're Here to Help
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-xl"
        >
          ADESA HQ maintains open communication with stakeholders, partners, and
          those interested in learning more about our approach to building
          institutional businesses across Africa.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Email */}
          <div className="group flex items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-adesa-800 border border-adesa-600 flex items-center justify-center rounded-lg transition-all group-hover:border-gold-400">
              <Mail className="text-gold-400 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-adesa-50 text-sm sm:text-base font-medium mb-1">
                Email
              </h3>
              <address className="text-adesa-300 not-italic text-sm sm:text-base break-all">
                <a
                  href="mailto:info@adesahq.com"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  info@adesahq.com
                </a>
              </address>
            </div>
          </div>

          {/* Location */}
          <div className="group flex items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-adesa-800 border border-adesa-600 flex items-center justify-center rounded-lg transition-all group-hover:border-gold-400">
              <MapPin className="text-gold-400 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-adesa-50 text-sm sm:text-base font-medium mb-1">
                Location
              </h3>
              <address className="text-adesa-300 not-italic text-sm sm:text-base">
                2 Isheri Road, Ojudu-Berger, Lagos
                <p className="text-adesa-400 text-xs sm:text-sm mt-1">
                  Operating across Africa
                </p>
              </address>
            </div>
          </div>
        </motion.div>

        {/* Inquiry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative p-6 sm:p-8 lg:p-10 bg-adesa-800 rounded-2xl sm:rounded-3xl border border-adesa-700 shadow-[0_0_60px_rgba(184,196,217,0.15)]"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-adesa-400 to-gold-400 rounded-t-full" />
          <h3 className="text-adesa-50 text-base sm:text-lg font-medium mb-4 sm:mb-6">
            Inquiry Types
          </h3>

          <ul className="space-y-3 sm:space-y-4">
            {[
              "Partnership & Investment Inquiries",
              "Media & Press Relations",
              "Subsidiary Services",
              "General Information",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start text-adesa-300 text-sm sm:text-base"
              >
                <span className="w-2 h-2 bg-gold-400 mt-2 mr-3 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
