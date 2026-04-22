import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Request a Free Quote or Book a Consultation",
  description:
    "Contact Ciaran Keane at CHR Securities directly. Call 087 909 6434, email info@chrsecurities.ie or fill in the form. Free site assessments available across all of Ireland.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
