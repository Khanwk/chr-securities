import type { Metadata } from "next";
import Cyber from "@/components/Cyber";

export const metadata: Metadata = {
  title: "Cyber Security Services Ireland — Apply Cyber & Trust Vector Partner",
  description:
    "Cyber security assessments, Microsoft 365 security, compliance baselining and free cyber score for Irish businesses. Powered by Apply Cyber and Trust Vector.",
  alternates: { canonical: "/cyber" },
};

export default function CyberPage() {
  return <Cyber />;
}
