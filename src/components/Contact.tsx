"use client";

import { useState } from "react";
import { calendarDays, propertyTypes, contactServiceOptions } from "../data";
import type { CalendarDay, TimeSlot, ContactForm } from "../types";
import { useModal } from "@/context/ModalContext";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { openQuote, openCyber } = useModal();
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    phone: "",
    email: "",
    propertyType: "",
    service: "",
    message: "",
  });

  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.taken) return;
    setSelectedSlot(slot.time);
  };

  const handleSubmit = () => {
    if (!form.firstName || !form.phone) return;
    setSubmitted(true);
  };

  const activeDay = calendarDays.find(
    (d: CalendarDay) => d.day === selectedDay,
  );

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-2">
              Get In Touch
            </p>
            <h1 className="text-4xl font-black uppercase text-black tracking-tight">
              Talk to Ciaran Directly.
            </h1>
            <p className="text-[#333333] text-base mt-3 max-w-xl mx-auto leading-relaxed">
              No call centre. No waiting. Ciaran responds to every enquiry
              personally — call, email or fill in the form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT — contact info + calendar */}
            <div className="flex flex-col gap-8">
              {/* Contact details card */}
              <div className="bg-[#EBF4FF] rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-green-700 text-xs font-semibold">
                    Accepting new clients — free site assessments available
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:0879096434"
                      className="text-[#0D2D5E] font-black text-2xl hover:text-[#F59E0B] transition-colors cursor-pointer"
                    >
                      087 909 6434
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@chrsecurities.ie"
                      className="text-[#0D2D5E] font-bold text-base hover:text-[#F59E0B] transition-colors cursor-pointer"
                    >
                      info@chrsecurities.ie
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-1">
                      Coverage
                    </p>
                    <p className="text-[#333333] text-sm font-semibold">
                      All of Ireland — Residential, Commercial, Industrial
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking calendar */}
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-[#0D2D5E] font-black text-lg uppercase tracking-tight mb-1">
                  Book a Time Slot
                </h3>
                <p className="text-[#333333] text-sm mb-6">
                  Select a day then choose an available 30-minute slot.
                </p>

                {/* Day tabs */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {calendarDays.map((d: CalendarDay) => (
                    <button
                      key={d.day}
                      onClick={() => {
                        setSelectedDay(d.day);
                        setSelectedSlot(null);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                        selectedDay === d.day
                          ? "bg-[#0D2D5E] text-white"
                          : "bg-[#EBF4FF] text-[#0D2D5E] hover:bg-[#0D2D5E]/10"
                      }`}
                    >
                      {d.short}
                    </button>
                  ))}
                </div>

                {/* Time slots */}
                {activeDay ? (
                  <div className="grid grid-cols-3 gap-2">
                    {activeDay.slots.map((slot: TimeSlot) => (
                      <button
                        key={slot.time}
                        onClick={() => handleSlotClick(slot)}
                        disabled={slot.taken}
                        className={`py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          slot.taken
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through"
                            : selectedSlot === slot.time
                              ? "bg-[#F59E0B] text-white cursor-pointer"
                              : "bg-[#EBF4FF] text-[#0D2D5E] hover:bg-[#0D2D5E] hover:text-white cursor-pointer"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#333333] text-sm text-center py-6 bg-[#EBF4FF] rounded-xl">
                    Select a day above to see available slots.
                  </p>
                )}

                {selectedSlot && selectedDay && (
                  <div className="mt-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl px-4 py-3">
                    <p className="text-[#0D2D5E] text-sm font-bold">
                      {selectedDay} at {selectedSlot} selected — complete the
                      form to confirm your booking.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — quote form */}
            <div className="bg-[#0D2D5E] rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-black text-2xl">
                      &check;
                    </span>
                  </div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">
                    Message Sent
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ciaran will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[#F59E0B] font-semibold text-xs uppercase tracking-widest mb-1">
                    No obligation
                  </p>
                  <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-6">
                    Send an Enquiry
                  </h3>

                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F59E0B]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone *"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F59E0B]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F59E0B]"
                    />
                    <select
                      value={form.propertyType}
                      onChange={(e) =>
                        setForm({ ...form, propertyType: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F59E0B] cursor-pointer"
                    >
                      <option value="" className="text-[#333333]">
                        Property Type
                      </option>
                      {propertyTypes.map((p: string) => (
                        <option key={p} value={p} className="text-[#333333]">
                          {p}
                        </option>
                      ))}
                    </select>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F59E0B] cursor-pointer"
                    >
                      <option value="" className="text-[#333333]">
                        Service Required
                      </option>
                      {contactServiceOptions.map((s: string) => (
                        <option key={s} value={s} className="text-[#333333]">
                          {s}
                        </option>
                      ))}
                    </select>
                    <textarea
                      placeholder="Message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={4}
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F59E0B] resize-none"
                    />

                    {selectedSlot && selectedDay && (
                      <div className="bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-lg px-4 py-3">
                        <p className="text-[#F59E0B] text-xs font-semibold">
                          Booking: {selectedDay} at {selectedSlot}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      className="bg-[#F59E0B] text-white font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm tracking-wide cursor-pointer"
                    >
                      Send Enquiry
                    </button>

                    <p className="text-white/40 text-xs text-center">
                      * Required fields
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2D5E] py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
          Not Ready to Commit?
        </h2>
        <p className="text-white/70 text-sm mb-6">
          Start with a free cyber score or browse all services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => openCyber()}
            className="bg-[#F59E0B] text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
          >
            Free Cyber Score
          </button>
          <button
            onClick={() => router.push("/services")}
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0D2D5E] transition-colors text-sm cursor-pointer"
          >
            View All Services
          </button>
        </div>
      </section>
    </>
  );
}
