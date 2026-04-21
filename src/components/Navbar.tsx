"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../app/LOGO.png";

interface Props {
  setPage: (page: string) => void;
  activePage: string;
}

export default function Navbar({ setPage, activePage }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", key: "home" },
    { label: "Services", key: "services" },
    { label: "Why CHR", key: "why" },
    { label: "Cyber Security", key: "cyber" },
    { label: "FAQ", key: "faq" },
    { label: "Contact", key: "contact" },
  ];

  const handleNav = (key: string) => {
    setPage(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-3 bg-[#0D2D5E] text-white sticky top-0 z-50">
        <button onClick={() => handleNav("home")} className="shrink-0">
          <Image
            src={Logo.src}
            alt="CHR Securities"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </button>

        <div className="hidden md:flex gap-6 text-sm font-medium ">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              className={`hover:text-[#F59E0B] cursor-pointer transition-colors ${
                activePage === l.key ? "text-[#F59E0B] font-semibold" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav("contact")}
            className="bg-[#F59E0B] text-white px-4 cursor-pointer py-2 rounded text-sm font-semibold hover:bg-yellow-500 transition-colors"
          >
            Free Quote
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div className="bg-[#F59E0B] text-[#333333] text-xs font-semibold text-center py-1.5 px-4 tracking-wide">
        PSA Licensed &nbsp;|&nbsp; Arachas Insured &nbsp;|&nbsp; CCTV · Alarms ·
        Fire · Access Control &nbsp;|&nbsp; Former Lead Engineer — Sure Guard
        Securities &nbsp;|&nbsp; Now Offering Cyber Security
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D2D5E] text-white flex flex-col px-6 py-4 gap-4 text-sm font-medium z-40">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              className={`text-left hover:text-[#F59E0B] transition-colors ${
                activePage === l.key ? "text-[#F59E0B] font-semibold" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
