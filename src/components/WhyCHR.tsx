"use client";
import { useRouter } from "next/navigation";

import { credentials, products, approvedSuppliers } from "../data";
import type { Credential, Product } from "../types";
import Image from "next/image";

export default function WhyCHR() {
  const router = useRouter();

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="relative flex flex-col gap-4">
            {/* Wrapper divs give fill images a sized, positioned container */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
              <Image
                fill
                priority
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CHR Securities installation"
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
              <Image
                fill
                priority
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Security engineer at work"
                className="object-cover"
              />
            </div>

            {/* Badge anchors to the outer relative div, positioned over the bottom image */}
            <div className="absolute bottom-6 left-6 bg-accent text-white rounded-xl px-6 py-4 shadow-lg z-10">
              <p className="text-3xl font-black">25+</p>
              <p className="text-sm font-semibold">Years Experience</p>
            </div>
          </div>
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              About CHR Securities
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight mb-6">
              One Expert. Total Trust.
            </h2>
            <p className="text-textMain text-base leading-relaxed mb-8">
              Ciaran Keane founded CHR Securities after 25 years as Lead
              Engineer at Sure Guard Securities. When he arrives at your
              property, you deal directly with the engineer — not a
              subcontractor or call centre. Hundreds of installations. One name
              behind every job.
            </p>

            <div className="bg-sky rounded-xl p-6 flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl shrink-0">
                CK
              </div>
              <div>
                <p className="text-primary font-black text-lg">Ciaran Keane</p>
                <p className="text-textMain text-sm">
                  Director & Lead Engineer — CHR Securities Ltd
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    PSA Licensed
                  </span>
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    25 Years Experience
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push("/contact")}
              className="bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm tracking-wide cursor-pointer"
            >
              Book a Free Site Assessment
            </button>
          </div>
        </div>
      </section>

      <section className="bg-sky py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Credentials
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Why You Can Trust CHR
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {credentials.map((c: Credential) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-white hover:shadow-md transition-shadow"
              >
                <div className="w-1 h-8 bg-accent rounded-full mb-4" />
                <h3 className="text-primary font-black text-lg uppercase tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-textMain text-sm leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Products & Suppliers
            </p>
            <h2 className="text-4xl font-black uppercase text-black tracking-tight">
              Trusted Brands
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {products.map((p: Product) => (
              <div
                key={p.brand}
                className="bg-sky rounded-xl p-6 border border-sky hover:shadow-md transition-shadow"
              >
                <h3 className="text-primary font-black text-xl mb-2">
                  {p.brand}
                </h3>
                <p className="text-textMain text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {approvedSuppliers.map((supplier: string) => (
              <span
                key={supplier}
                className="bg-sky text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/10"
              >
                {supplier}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
          Ready to Secure Your Property?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => router.push("/contact")}
            className="bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm cursor-pointer"
          >
            Request a Free Quote
          </button>
          <button
            onClick={() => router.push("/services")}
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm cursor-pointer"
          >
            View All Services
          </button>
        </div>
      </section>
    </>
  );
}
