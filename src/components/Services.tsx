"use client";

import { serviceTiles, serviceDetails, testimonials } from "./data";
import type {
  ServiceTile,
  ServiceDetail,
  Testimonial,
  PageProps,
} from "./types";

export default function Services({ setPage }: PageProps) {
  return (
    <>
      <section className="bg-white text-[#333333] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceTiles.map((s: ServiceTile) => (
              <div
                key={s.title}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <span className="bg-[#F59E0B] text-white px-2 py-1 text-xs w-fit mb-2 rounded font-semibold">
                    {s.tag}
                  </span>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-2">
              Full Details
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Service Breakdown
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((service: ServiceDetail) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 bg-[#F59E0B] rounded-full" />
                  <h3 className="text-xl font-black text-[#0D2D5E] uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.bullets.map((bullet: string) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-[#333333] leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2D5E] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-2">
              What Clients Say
            </p>
            <h2 className="text-4xl font-black uppercase text-white tracking-tight">
              Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t: Testimonial) => (
              <div
                key={t.name}
                className="bg-white/10 border border-white/15 rounded-xl p-6 flex flex-col gap-4"
              >
                <p className="text-white/90 text-sm leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-4 border-t border-white/15">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#F59E0B] text-xs font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 text-center">
        <button className="bg-[#F59E0B] text-white font-bold px-10 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm tracking-wide">
          Request a Quote for Any Service
        </button>
      </section>
    </>
  );
}
