import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "PSA Licensed Security Engineer — CCTV, Alarms & Cyber Security",
  description:
    "CHR Securities Ltd — CCTV installation, intruder alarms, fire alarms, access control and cyber security across all of Ireland. PSA Licensed. Arachas Insured. 25+ years experience.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CHR Securities Ltd",
  description:
    "PSA Licensed security engineer providing CCTV, intruder alarms, fire alarms, access control, 24/7 monitoring and cyber security across all of Ireland.",
  url: "https://chrsecurities.ie",
  telephone: "+353879096434",
  email: "info@chrsecurities.ie",
  areaServed: "Ireland",
  founder: {
    "@type": "Person",
    name: "Ciaran Keane",
    jobTitle: "Director & Lead Engineer",
  },
  hasCredential: "PSA Licence — Private Security Authority Ireland",
  knowsAbout: [
    "CCTV Installation",
    "Intruder Alarm Systems",
    "Fire Alarm Systems",
    "Access Control",
    "24/7 Monitoring",
    "Cyber Security",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
