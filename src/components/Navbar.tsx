"use client";

import { useModal } from "@/context/ModalContext";
import { navLinks } from "../data";
import type { NavLink } from "../types";
import { useState } from "react";
import Image from "next/image";
import Logo from "../app/LOGO.png";

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
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-3 bg-primary text-white">
        <button
          onClick={() => handleNav("home")}
          className="shrink-0 cursor-pointer"
        >
          <Image
            src={Logo.src}
            alt="CHR Securities"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </button>

        <div className="hidden nav:flex gap-6 text-sm font-medium">
          {navLinks.map((l: NavLink) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              className={`hover:text-accent transition-colors cursor-pointer ${
                activePage === l.key ? "text-accent font-semibold" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openQuote}
            className="bg-accent text-white px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-500 transition-colors cursor-pointer"
          >
            Free Quote
          </button>

          <button
            className="nav:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div className="bg-accent text-primary text-xs font-semibold text-center py-1.5 px-4 tracking-wide">
        PSA Licensed &nbsp;|&nbsp; Arachas Insured &nbsp;|&nbsp; CCTV · Alarms ·
        Fire · Access Control &nbsp;|&nbsp; Former Lead Engineer — Sureguard
        Securities &nbsp;|&nbsp; Now Offering Cyber Security
      </div>

      {menuOpen && (
        <div className="nav:hidden bg-primary text-white flex flex-col px-6 py-4 gap-4 text-sm font-medium border-t border-white/10">
          {navLinks.map((l: NavLink) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              className={`text-left hover:text-accent transition-colors cursor-pointer ${
                activePage === l.key ? "text-accent font-semibold" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
