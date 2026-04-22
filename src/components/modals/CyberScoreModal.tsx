"use client";

import { useState } from "react";
import Modal from "../../ui/Modal";
import type { ModalProps } from "../../types";

interface CyberForm {
  businessName: string;
  name: string;
  email: string;
  phone: string;
}

export default function CyberScoreModal({ onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<CyberForm>({
    businessName: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = () => {
    if (!form.businessName || !form.name || !form.email || !form.phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ businessName: "", name: "", email: "", phone: "" });
    onClose();
  };

  return (
    <Modal onClose={handleClose}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-black text-2xl">&check;</span>
          </div>
          <h3 className="text-primary font-black text-xl uppercase tracking-tight mb-2">
            Request Received
          </h3>
          <p className="text-textMain text-sm leading-relaxed">
            Our partners at Apply Cyber will be in touch with your Cyber Score
            shortly.
          </p>
        </div>
      ) : (
        <>
          <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-1">
            Free
          </p>
          <h3 className="text-primary font-black text-2xl uppercase tracking-tight mb-6">
            Get Your Cyber Score
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Business Name"
              value={form.businessName}
              onChange={(e) =>
                setForm({ ...form, businessName: e.target.value })
              }
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-primary"
            />
            <button
              onClick={handleSubmit}
              className="bg-accent text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}
