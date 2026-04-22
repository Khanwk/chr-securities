"use client";

import { useRef } from "react";
import {
  serviceTiles,
  serviceDetails,
  testimonials,
  tileToDetail,
} from "@/data";
import type { ServiceTile, ServiceDetail, Testimonial } from "@/types";
import { useModal } from "@/context/ModalContext";

export default function Services() {
  const { openQuote } = useModal();
  const detailRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleTileClick = (tileTitle: string) => {
    const detailKey = tileToDetail[tileTitle];
    const el = detailRefs.current[detailKey];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-4xl font-black uppercase text-primary tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-0">
            {serviceTiles.map((s: ServiceTile) => (
              <div
                key={s.title}
                onClick={() => handleTileClick(s.title)}
                className="relative overflow-hidden group cursor-pointer h-72"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="bg-accent text-white px-3 py-1 text-xs w-fit mb-2 rounded font-semibold uppercase tracking-wide">
                    {s.tag}
                  </span>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight">
                    {s.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Full Details
            </p>
            <h2 className="text-4xl font-black uppercase text-primary tracking-tight">
              Service Breakdown
            </h2>
          </div>

          <div className="grid tablet:grid-cols-2 gap-8">
            {serviceDetails.map((service: ServiceDetail) => (
              <div
                key={service.title}
                ref={(el) => {
                  detailRefs.current[service.title] = el;
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-5">
                    <span className="bg-accent text-white px-3 py-1 text-xs w-fit mb-2 rounded font-semibold uppercase tracking-wide">
                      {service.tag}
                    </span>
                    <h3 className="text-white font-black text-lg uppercase tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2.5">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">
          Ready to Get Protected?
        </h2>
        <p className="text-textMain text-sm mb-6">
          Request a free quote for any service — Ciaran will get back to you
          personally.
        </p>
        <button
          onClick={openQuote}
          className="bg-accent text-white font-bold px-10 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm tracking-wide cursor-pointer"
        >
          Request a Quote for Any Service
        </button>
      </section>

      <section className="bg-primary py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What Clients Say
            </p>
            <h2 className="text-4xl font-black uppercase text-white tracking-tight">
              Testimonials
            </h2>
          </div>

          <div className="grid tablet:grid-cols-3 gap-6">
            {testimonials.map((t: Testimonial) => (
              <div
                key={t.name}
                className="bg-white/10 border border-white/15 rounded-xl p-6 flex flex-col gap-4"
              >
                <p className="text-white/90 text-sm leading-relaxed italic">
                  {t.quote}
                </p>
                <div className="mt-auto pt-4 border-t border-white/15">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-accent text-xs font-semibold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
