"use client";

import { useState } from "react";
import {
  cyberServices,
  cyberPricing,
  cyberWhyItems,
  cyberPartners,
} from "../data";
import type {
  CyberService,
  CyberPricingCard,
  CyberWhyItem,
  CyberPartner,
} from "../types";
import QuoteModal from "./modals/QouteModal";
import CyberScoreModal from "./modals/CyberScoreModal";
import { useRouter } from "next/navigation";

export default function Cyber() {
  const [cyberModalOpen, setCyberModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const router = useRouter();

  const handleCtaTarget = (target: CyberPricingCard["ctaTarget"]) => {
    if (target === "modal-cyber") setCyberModalOpen(true);
    if (target === "modal-quote") setQuoteModalOpen(true);
    if (target === "contact") router.push("/contact");
  };

  return (
    <>
      <section className="relative bg-primary py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
            alt="Cyber security"
            className="w-full h-full object-cover opacity-15 animate-slow-zoom"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Cyber Security
          </p>
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
            Protect Your Property.
            <br />
            Protect Your Business.
            <br />
            <span className="text-accent">Protect Your Data.</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Your cameras, alarms and systems are connected to the internet. If
            your network is compromised, your physical security is too. CHR
            Securities, in partnership with Apply Cyber and Trust Vector, brings
            both layers of protection together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCyberModalOpen(true)}
              className="bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
            >
              Get Your Free Cyber Score
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm cursor-pointer"
            >
              Book Cyber Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Cyber Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cyberServices.map((service: CyberService) => (
              <div
                key={service.title}
                className="text-sky rounded-xl p-8 border border-sky hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 bg-accent rounded-full" />
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.bullets.map((bullet: string) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-textMain leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-sky py-16 px-6 bg-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Pricing
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Choose Your Starting Point
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cyberPricing.map((card: CyberPricingCard) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-white flex flex-col hover:shadow-md transition-shadow"
              >
                <h3 className="text-primary font-black text-xl uppercase tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-accent font-black text-3xl mb-4">
                  {card.price}
                </p>
                <p className="text-textMain text-sm leading-relaxed mb-8 flex-1">
                  {card.description}
                </p>
                <button
                  onClick={() => handleCtaTarget(card.ctaTarget)}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-accent transition-colors text-sm cursor-pointer"
                >
                  {card.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Why It Matters
            </p>
            <h2 className="text-4xl font-black uppercase text-white tracking-tight">
              The Risk Is Real
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {cyberWhyItems.map((item: CyberWhyItem) => (
              <div
                key={item.heading}
                className="bg-white/10 border border-white/15 rounded-xl p-6"
              >
                <div className="w-1 h-6 bg-accent rounded-full mb-4" />
                <h3 className="text-white font-black text-base mb-2">
                  {item.heading}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Trusted Partners
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Who Powers Our Cyber Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cyberPartners.map((partner: CyberPartner) => (
              <div
                key={partner.name}
                className="text-sky rounded-xl p-8 border border-sky hover:shadow-md transition-shadow"
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                  {partner.subtitle}
                </p>
                <h3 className="text-primary font-black text-2xl mb-4">
                  {partner.name}
                </h3>
                <p className="text-textMain text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {partner.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
          Start With a Free Cyber Score
        </h2>
        <p className="text-white/90 text-sm mb-6">
          No commitment. Instant results. Know your risk in minutes.
        </p>
        <button
          onClick={() => setCyberModalOpen(true)}
          className="bg-white text-accent font-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-sm cursor-pointer"
        >
          Get Your Free Cyber Score
        </button>
      </section>

      {cyberModalOpen && (
        <CyberScoreModal onClose={() => setCyberModalOpen(false)} />
      )}

      {quoteModalOpen && (
        <QuoteModal onClose={() => setQuoteModalOpen(false)} />
      )}
    </>
  );
}
