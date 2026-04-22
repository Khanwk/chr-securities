import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ — CCTV, Alarms, Fire, Access Control & Cyber Security Questions",
  description:
    "Answers to common questions about CCTV systems, intruder alarms, fire alarms, access control, 24/7 monitoring and cyber security from CHR Securities.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return <FAQ />;
}
