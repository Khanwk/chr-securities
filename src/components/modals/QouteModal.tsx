"use client";

import { useState } from "react";
import Modal from "../../ui/Modal";
import type { ModalProps, QuoteForm } from "../../types";
import { serviceOptions } from "@/data";
import { submitToApi } from "@/lib/api";

export default function QuoteModal({ onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<QuoteForm>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please fill in required fields.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      await submitToApi({
        name: form.name,
        phone: form.phone,
        service: form.service,
        description: form.message,
        platform: "CHR Securities Quote",
        action: "contact",
        email: form.email,
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us on 087 909 6434.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError(null);
    setForm({ name: "", phone: "", service: "", message: "", email: "" });
    onClose();
  };

  return (
    <Modal onClose={handleClose}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-primary font-black text-xl uppercase tracking-tight mb-2">
            Enquiry Sent
          </h3>
          <p className="text-textMain text-sm leading-relaxed">
            Ciaran will be in touch with you shortly.
          </p>
        </div>
      ) : (
        <>
          <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-1">
            No obligation
          </p>
          <h3 className="text-primary font-black text-2xl uppercase tracking-tight mb-6">
            Request a Free Quote
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((s: string) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Message (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary resize-none"
            />
            {error && (
              <p className="text-red-500 text-xs font-semibold">{error}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting || !form.name.trim() || !form.phone.trim()}
              className="bg-accent text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
            <p className="text-textMain/40 text-xs text-center">
              * Required fields
            </p>
          </form>
        </>
      )}
    </Modal>
  );
}
