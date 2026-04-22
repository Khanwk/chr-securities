import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Security Services — CCTV, Alarms, Fire, Access Control & Monitoring",
  description:
    "Full range of security services for homes and businesses across Ireland. Hikvision CCTV, HKC alarms, fire alarm systems, ACT access control and 24/7 monitoring via Resure.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <Services />;
}
