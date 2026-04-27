"use client";

import { useRouter } from "next/navigation";
import { trustItems, stats, mosaicImages } from "../data";
import type { TrustItem, Stat, MosaicImage } from "../types";
import { useModal } from "@/context/ModalContext";
import { SecurityAssistantSection } from "./SecurityChatWidget";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const { openQuote, openCyber } = useModal();

  return (
    <>
      <section className="relative min-h-[90vh] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            priority
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
            alt="Security background"
            className="w-full h-full object-cover opacity-20 animate-slow-zoom"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid hero:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
              PSA Licensed · Arachas Insured · All of Ireland
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white uppercase tracking-tight">
              Your Security.
            </h1>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-accent uppercase tracking-tight mb-6">
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
                onClick={openQuote}
                className="bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm tracking-wide cursor-pointer"
              >
                Request a Quote
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm tracking-wide cursor-pointer"
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

          <div className="hidden hero:grid grid-rows-2 grid-cols-2 gap-3 h-120">
            {mosaicImages.map((image: MosaicImage) => (
              <div
                key={image.alt}
                className={`relative rounded-2xl overflow-hidden group ${
                  mosaicImages.indexOf(image) === 0
                    ? "row-span-2 h-125"
                    : "h-60"
                }`}
              >
                <Image
                  fill
                  priority
                  src={image.src}
                  alt={image.alt}
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-5 px-6">
        <div className="max-w-4xl mx-auto flex justify-around flex-wrap gap-4">
          {stats.map((s: Stat) => (
            <div key={s.label} className="text-center text-white">
              <div className="text-3xl font-black">{s.value}</div>
              <div className="text-sm font-semibold opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <SecurityAssistantSection />

      <section className="relative bg-primary py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            src="/images/cta-bg.jpg"
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
            <span className="text-accent">Protect Your Data.</span>
          </h2>
          <p className="text-white/70 text-base mb-8">
            Physical security and cyber security — working together for complete
            peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openQuote}
              className="bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
            >
              Request a Free Quote
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm cursor-pointer"
            >
              Book Consultation
            </button>
            <button
              onClick={openCyber}
              className="border-2 border-accent text-accent font-bold px-8 py-4 rounded-lg hover:bg-accent hover:text-white transition-colors text-sm cursor-pointer"
            >
              Free Cyber Score
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
