"use client";

import { useState } from "react";
import Modal from "../../ui/Modal";
import type { ModalProps } from "../types";

const serviceOptions: string[] = [
  "CCTV Installation",
  "Intruder Alarm System",
  "Fire Alarm System",
  "Access Control / Intercom",
  "24/7 Monitoring",
  "Maintenance Contract",
  "Business Security Bundle",
  "Free Cyber Score",
  "Cyber Consultation (from €650)",
  "Apply Cyber / Trust Vector Enquiry",
  "General Enquiry",
];

interface QuoteForm {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function QuoteModal({ onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<QuoteForm>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", service: "", message: "" });
    onClose();
  };

  return (
    <Modal onClose={handleClose}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-black text-2xl">&check;</span>
          </div>
          <h3 className="text-[#0D2D5E] font-black text-xl uppercase tracking-tight mb-2">
            Enquiry Sent
          </h3>
          <p className="text-[#333333] text-sm leading-relaxed">
            Ciaran will be in touch with you shortly.
          </p>
        </div>
      ) : (
        <>
          <p className="text-[#F59E0B] font-semibold text-xs uppercase tracking-widest mb-1">
            No obligation
          </p>
          <h3 className="text-[#0D2D5E] font-black text-2xl uppercase tracking-tight mb-6">
            Request a Free Quote
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#333333] focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#333333] focus:outline-none focus:border-primary"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#333333] focus:outline-none focus:border-primary cursor-pointer"
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
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#333333] focus:outline-none focus:border-primary resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#F59E0B] text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
            >
              Send Enquiry
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}
