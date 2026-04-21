"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import WhyCHR from "@/components/WhyCHR";
import Cyber from "@/components/Cyber";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

interface PageProps {
  setPage: (page: string) => void;
}

export default function Page() {
  const [page, setPage] = useState("home");

  const navigate = (target: string) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar setPage={navigate} activePage={page} />
      {page === "home" && <Home />}
      {page === "services" && <Services />}
      {page === "why" && <WhyCHR setPage={navigate} />}
      {page === "cyber" && <Cyber />}
      {page === "faq" && <FAQ setPage={navigate} />}
      {page === "contact" && <Contact />}
    </div>
  );
}
