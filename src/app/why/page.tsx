import type { Metadata } from "next";
import WhyCHR from "@/components/WhyCHR";

export const metadata: Metadata = {
  title: "Why CHR Securities — PSA Licensed, Insured, 25 Years Experience",
  description:
    "Ciaran Keane is a PSA Licensed, Arachas insured security engineer with 25+ years as Lead Engineer at Sureguard Securities. One expert — every job.",
  alternates: { canonical: "/why" },
};

export default function WhyPage() {
  return <WhyCHR />;
}
