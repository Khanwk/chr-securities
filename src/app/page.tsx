"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import WhyCHR from "@/components/WhyCHR";
import Cyber from "@/components/Cyber";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import QuoteModal from "../components/modals/QouteModal";
import CyberScoreModal from "../components/modals/CyberScoreModal";

export default function Page() {
  const [page, setPage] = useState("home");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [cyberOpen, setCyberOpen] = useState(false);

  const navigate = (target: string) => {
    if (target === "modal-quote") {
      setQuoteOpen(true);
      return;
    }
    if (target === "modal-cyber") {
      setCyberOpen(true);
      return;
    }
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar setPage={navigate} activePage={page} />

      {page === "home" && <Home setPage={navigate} />}
      {page === "services" && <Services setPage={navigate} />}
      {page === "why" && <WhyCHR setPage={navigate} />}
      {page === "cyber" && <Cyber setPage={navigate} />}
      {page === "faq" && <FAQ setPage={navigate} />}
      {page === "contact" && <Contact />}

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      {cyberOpen && <CyberScoreModal onClose={() => setCyberOpen(false)} />}
    </div>
  );
}
