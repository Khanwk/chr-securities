"use client";

import { useState } from "react";
import { faqCategories } from "./data";
import type { FaqCategory, FaqItem, PageProps } from "./types";

export default function FAQ({ setPage }: PageProps) {
  const [activeTab, setActiveTab] = useState<string>(faqCategories[0].tab);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const activeCategory = faqCategories.find(
    (c: FaqCategory) => c.tab === activeTab,
  );

  const handleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <>
      {/* FAQ SECTION */}
      <section className="bg-white text-[#333333] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-2">
              Got Questions
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((c: FaqCategory) => (
              <button
                key={c.tab}
                onClick={() => {
                  setActiveTab(c.tab);
                  setOpenQuestion(null);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === c.tab
                    ? "bg-[#0D2D5E] text-white"
                    : "bg-[#EBF4FF] text-[#333333] hover:bg-[#0D2D5E]/10"
                }`}
              >
                {c.tab}
              </button>
            ))}
          </div>

          {/* QUESTIONS */}
          <div className="flex flex-col gap-3">
            {activeCategory?.items.map((item: FaqItem) => (
              <div
                key={item.question}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => handleQuestion(item.question)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#EBF4FF] transition-colors cursor-pointer"
                >
                  <span className="text-[#333333] font-bold text-sm pr-4">
                    {item.question}
                  </span>

                  <span className="text-[#F59E0B] font-black text-xl shrink-0">
                    {openQuestion === item.question ? "−" : "+"}
                  </span>
                </button>

                {openQuestion === item.question && (
                  <div className="px-6 py-5 bg-[#EBF4FF] border-t border-gray-200">
                    <p className="text-[#333333] text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0D2D5E] text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
          Still Have Questions?
        </h2>

        <p className="text-white/70 text-sm mb-6">
          Call Ciaran directly on{" "}
          <a
            href="tel:0879096434"
            className="text-[#F59E0B] font-bold hover:underline"
          >
            087 909 6434
          </a>{" "}
          or send a message.
        </p>

        <button
          onClick={() => setPage("contact")}
          className="bg-[#F59E0B] text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
        >
          Get in Touch
        </button>
      </section>
    </>
  );
}
