"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GridLine from "@/components/ui/gridLine";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.article
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden px-4 sm:px-8"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg"
        >
          <div className="absolute inset-0 bg-adesa-900" />
          <div className="absolute -top-32 -right-32 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gold-500/10 blur-[140px] rounded-full" />

          <GridLine />

          <div className="relative z-10 text-center px-6 sm:px-12 py-12 sm:py-16 bg-adesa-800/60 backdrop-blur-2xl border border-adesa-700 rounded-2xl shadow-[0_0_80px_rgba(184,134,11,0.15)]">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gold-500/15 border border-gold-400/40 mb-6 sm:mb-8">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gold-400" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-adesa-100 mb-3 sm:mb-4">
              Message Received
            </h2>

            <p className="text-adesa-300 text-sm sm:text-base max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-10 leading-relaxed">
              Thank you for reaching out. Our team will review your message and
              respond within 2-3 business days.
            </p>

            <Button
              onClick={() => setSubmitted(false)}
              className="bg-gold-500 hover:bg-gold-400 text-adesa-900 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg"
            >
              Send Another Message
            </Button>
          </div>
        </motion.div>
      </motion.article>
    );
  }

  return (
    <section
      className="relative overflow-hidden "
      aria-labelledby="contact-form-heading"
    >
      <div className="absolute inset-0 bg-adesa-900" />
      <div className="absolute -top-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-adesa-700/40 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gold-500/10 blur-[140px] rounded-full" />

      <motion.form
        id="contact-form"
        aria-describedby="contact-form-description"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-full sm:max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-16 bg-adesa-800/60 backdrop-blur-2xl border border-adesa-700 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.4)]"
      >
        <h2
          id="contact-form-heading"
          className="font-serif text-2xl sm:text-3xl text-adesa-100 mb-3 sm:mb-4"
        >
          Send a Message
        </h2>

        <p
          id="contact-form-description"
          className="text-adesa-300 text-sm sm:text-base mb-6 sm:mb-12"
        >
          Fill out the form below to reach our team. Required fields are marked
          with *
        </p>

        <fieldset className="space-y-6 sm:space-y-8 border-0 p-0 m-0">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <Field label="First Name *" id="firstName" />
            <Field label="Last Name *" id="lastName" />
          </div>

          <Field label="Email Address *" id="email" type="email" />

          <Field label="Organization" id="organization" />

          <SelectField />

          <TextareaField />
        </fieldset>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-gold-500 hover:bg-gold-400 text-adesa-900 rounded-full py-4 sm:py-6 text-base sm:text-lg mt-6 sm:mt-8"
        >
          Send Message
        </Button>
      </motion.form>
    </section>
  );
}

function Field({ label, id, type = "text" }) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-xs sm:text-sm tracking-wide text-adesa-300 mb-2 sm:mb-3"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required={label.includes("*")}
        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-adesa-900/60 border border-adesa-700 rounded-xl text-adesa-100 placeholder:text-adesa-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/30 transition-all"
      />
    </div>
  );
}

function SelectField() {
  return (
    <div>
      <label
        htmlFor="inquiryType"
        className="block text-xs sm:text-sm tracking-wide text-adesa-300 mb-2 sm:mb-3"
      >
        Inquiry Type *
      </label>

      <select
        id="inquiryType"
        name="inquiryType"
        required
        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-adesa-900/60 border border-adesa-700 rounded-xl text-adesa-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/30 transition-all"
      >
        <option value="">Select an option</option>
        <option value="partnership">Partnership & Investment</option>
        <option value="media">Media & Press</option>
        <option value="services">Subsidiary Services</option>
        <option value="general">General Inquiry</option>
      </select>
    </div>
  );
}

function TextareaField() {
  return (
    <div>
      <label
        htmlFor="message"
        className="block text-xs sm:text-sm tracking-wide text-adesa-300 mb-2 sm:mb-3"
      >
        Message *
      </label>

      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-adesa-900/60 border border-adesa-700 rounded-xl text-adesa-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/30 transition-all resize-none text-sm sm:text-base"
      />
    </div>
  );
}
