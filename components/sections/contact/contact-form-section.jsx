"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GridLine from "@/components/ui/gridLine";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Inquiry type is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      const fieldLabel = firstIssue.path.length
        ? firstIssue.path.join(" → ") + ": "
        : "";
      setError(fieldLabel + firstIssue.message);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to send message");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.article
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative min-h-[480px] flex items-center justify-center p-6 sm:p-10"
      >
        <div className="relative z-10 w-full max-w-lg text-center p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-white/10 to-white/3 border border-gold-400/40 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-400/15 border border-gold-400/40 mb-6">
            <CheckCircle2 className="w-8 h-8 text-gold-400" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            Inquiry Transmitted
          </h2>

          <p className="text-adesa-200 text-sm leading-relaxed mb-8">
            Thank you for reaching out to ADESA HQ. Our executive governance team will review your inquiry and connect with you within 2–3 business days.
          </p>

          <Button
            onClick={() => setSubmitted(false)}
            className="bg-linear-to-r from-gold-400 to-gold-300 text-adesa-950 font-semibold rounded-full px-8 py-3 text-xs uppercase tracking-wider shadow-lg"
          >
            Submit Another Inquiry
          </Button>
        </div>
      </motion.article>
    );
  }

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <motion.form
        id="contact-form"
        aria-describedby="contact-form-description"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full rounded-[32px] p-6 sm:p-10 bg-gradient-to-b from-white/7 to-white/2 border border-white/10 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
      >
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">
            Secure Channel
          </p>
          <h2 id="contact-form-heading" className="font-serif text-2xl sm:text-3xl font-medium text-white">
            Initiate a Conversation
          </h2>
          <p id="contact-form-description" className="text-xs sm:text-sm text-adesa-300 mt-2">
            Please fill out the details below. Required fields are marked with *
          </p>
        </div>

        <fieldset className="space-y-5 border-0 p-0 m-0">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-adesa-300 mb-2 font-medium">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-3.5 bg-adesa-900/90 border border-white/10 rounded-xl text-sm text-white placeholder:text-adesa-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-adesa-300 mb-2 font-medium">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-3.5 bg-adesa-900/90 border border-white/10 rounded-xl text-sm text-white placeholder:text-adesa-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-adesa-300 mb-2 font-medium">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 bg-adesa-900/90 border border-white/10 rounded-xl text-sm text-white placeholder:text-adesa-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-xs uppercase tracking-wider text-adesa-300 mb-2 font-medium">
                Organization / Fund
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enterprise Ltd."
                className="w-full px-4 py-3.5 bg-adesa-900/90 border border-white/10 rounded-xl text-sm text-white placeholder:text-adesa-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-xs uppercase tracking-wider text-adesa-300 mb-2 font-medium">
              Inquiry Focus *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 bg-adesa-900/90 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
            >
              <option value="" className="bg-adesa-950">Select Inquiry Area</option>
              <option value="partnership" className="bg-adesa-950">Strategic Partnership & Co-Investment</option>
              <option value="subsidiary" className="bg-adesa-950">Subsidiary Operating Services</option>
              <option value="governance" className="bg-adesa-950">Governance Advisory & Institutional Inquiry</option>
              <option value="press" className="bg-adesa-950">Media & Corporate Communications</option>
              <option value="careers" className="bg-adesa-950">Executive & Operating Careers</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-adesa-300 mb-2 font-medium">
              Executive Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline the nature of your inquiry, organization context, and objectives..."
              className="w-full px-4 py-3.5 bg-adesa-900/90 border border-white/10 rounded-xl text-sm text-white placeholder:text-adesa-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none"
            />
          </div>
        </fieldset>

        {error && (
          <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
            {error}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full bg-linear-to-r from-gold-400 to-gold-300 text-adesa-950 font-bold uppercase tracking-wider rounded-full py-4 text-xs mt-6 shadow-[0_12px_32px_rgba(212,162,52,0.25)] hover:shadow-[0_16px_40px_rgba(212,162,52,0.35)] transition-all"
          disabled={isLoading}
        >
          {isLoading ? "Submitting Inquiry..." : "Transmit Message"}
        </Button>
      </motion.form>
    </div>
  );
}
