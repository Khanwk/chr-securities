"use client";

import { useRouter } from "next/navigation";
import { trustItems, stats, mosaicImages } from "../data";
import type { TrustItem, Stat, MosaicImage } from "../types";
import { useModal } from "@/context/ModalContext";

export default function Home() {
  const router = useRouter();
  const { openQuote } = useModal();
  return (
    <>
      <section className="relative min-h-[90vh] bg-[#0D2D5E] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
            alt="Security background"
            className="w-full h-full object-cover opacity-20 animate-slow-zoom"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
              PSA Licensed · Arachas Insured · All of Ireland
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white uppercase tracking-tight">
              Your Security.
            </h1>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-[#F59E0B] uppercase tracking-tight mb-6">
              Our Priority.
            </h1>

            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-lg">
              CCTV · Intruder Alarms · Fire Alarms · Access Control · 24/7
              Monitoring · Cyber Security.{" "}
              <span className="text-white font-medium">
                Trusted by homes and businesses across Ireland for over 25
                years.
              </span>
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => openQuote()}
                className="bg-[#F59E0B] text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm tracking-wide"
              >
                Request a Quote
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0D2D5E] transition-colors text-sm tracking-wide"
              >
                Book Consultation
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {trustItems.map((item: TrustItem) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-lg px-4 py-3"
                >
                  <span className="text-white text-xs font-semibold leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-rows-2 grid-cols-2 gap-3 h-120">
            {mosaicImages.map((image: MosaicImage) => (
              <div
                key={image.alt}
                className={`rounded-2xl overflow-hidden group ${mosaicImages.indexOf(image) === 0 ? "row-span-2" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F59E0B] py-5 px-6">
        <div className="max-w-4xl mx-auto flex justify-around flex-wrap gap-4">
          {stats.map((s: Stat) => (
            <div key={s.label} className="text-center text-white">
              <div className="text-3xl font-black">{s.value}</div>
              <div className="text-sm font-semibold opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#0D2D5E] py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-4">
            Protect Your Property.
            <br />
            Protect Your Business.
            <br />
            <span className="text-[#F59E0B]">Protect Your Data.</span>
          </h2>
          <p className="text-white/70 text-base mb-8">
            Physical security and cyber security — working together for complete
            peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#F59E0B] text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm"
            >
              Request a Free Quote
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0D2D5E] transition-colors text-sm"
            >
              Book Consultation
            </button>
            <button
              onClick={() => router.push("/cyber")}
              className="border-2 border-[#F59E0B] text-[#F59E0B] font-bold px-8 py-4 rounded-lg hover:bg-[#F59E0B] hover:text-white transition-colors text-sm"
            >
              Free Cyber Score
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
