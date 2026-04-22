import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import NavbarWrapper from "@/components/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CHR Securities Ltd — CCTV, Alarms & Cyber Security Ireland",
    template: "%s | CHR Securities Ltd",
  },
  description:
    "PSA Licensed security engineer with 25+ years experience. CCTV installation, intruder alarms, fire alarms, access control, 24/7 monitoring and cyber security across all of Ireland.",
  keywords: [
    "CCTV installation Ireland",
    "intruder alarms Ireland",
    "fire alarm systems Ireland",
    "access control Ireland",
    "security company Ireland",
    "PSA licensed engineer",
    "24/7 monitoring Ireland",
    "cyber security Ireland",
    "Hikvision installer Ireland",
    "HKC alarm installer",
    "CHR Securities",
  ],
  authors: [{ name: "Ciaran Keane", url: "https://chrsecurities.ie" }],
  creator: "CHR Securities Ltd",
  metadataBase: new URL("https://chrsecurities.ie"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://chrsecurities.ie",
    siteName: "CHR Securities Ltd",
    title: "CHR Securities Ltd — CCTV, Alarms & Cyber Security Ireland",
    description:
      "PSA Licensed security engineer with 25+ years experience. CCTV, alarms, fire systems, access control and cyber security across all of Ireland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CHR Securities Ltd — Security Systems Ireland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHR Securities Ltd — CCTV, Alarms & Cyber Security Ireland",
    description:
      "PSA Licensed security engineer with 25+ years experience. CCTV, alarms, fire systems and cyber security across all of Ireland.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          <NavbarWrapper />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
