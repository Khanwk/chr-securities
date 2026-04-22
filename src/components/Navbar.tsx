"use client";

import { useModal } from "@/context/ModalContext";
import { navLinks } from "../data";
import type { NavLink } from "../types";
import { useState } from "react";
import Image from "next/image";

interface Props {
  setPage: (page: string) => void;
  activePage: string;
}

export default function Navbar({ setPage, activePage }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openQuote } = useModal();

  const handleNav = (key: string) => {
    setPage(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-3 bg-[#0D2D5E] text-white sticky top-0 z-50">
        <button
          onClick={() => handleNav("home")}
          className="flex-shrink-0 cursor-pointer"
        >
          <Image
            src="/chr_securities_logo.png"
            alt="CHR Securities"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </button>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((l: NavLink) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              className={`hover:text-[#F59E0B] transition-colors cursor-pointer ${
                activePage === l.key ? "text-[#F59E0B] font-semibold" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openQuote}
            className="bg-[#F59E0B] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-500 transition-colors cursor-pointer"
          >
            Free Quote
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
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

      <div className="bg-[#F59E0B] text-[#0D2D5E] text-xs font-semibold text-center py-1.5 px-4 tracking-wide">
        PSA Licensed &nbsp;|&nbsp; Arachas Insured &nbsp;|&nbsp; CCTV · Alarms ·
        Fire · Access Control &nbsp;|&nbsp; Former Lead Engineer — Sure Guard
        Securities &nbsp;|&nbsp; Now Offering Cyber Security
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D2D5E] text-white flex flex-col px-6 py-4 gap-4 text-sm font-medium z-40">
          {navLinks.map((l: NavLink) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              className={`text-left hover:text-[#F59E0B] transition-colors cursor-pointer ${
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
