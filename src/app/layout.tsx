import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/context/ScrollContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Draft Model United Nations | Chapter XVI",
  description:
    "Celebrating 15 years of Draft MUN. Join 650+ delegates across 20 committees at the premier Model United Nations conference. July 24-26, 2026.",
  keywords: [
    "Draft MUN",
    "Model United Nations",
    "MUN Conference",
    "Diplomacy",
    "Nord Anglia",
    "OISG Gachibowli",
    "Chapter XVI",
    "MUN India",
    "Hyderabad MUN",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Draft Model United Nations | Chapter XVI",
    description: "Celebrating 15 years of Draft MUN. 650+ delegates, 20 committees, 3 days.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col page-fade relative">
        <SmoothScroll />
        <ScrollProvider>
          <Navbar />
          <main className="flex-grow z-10 relative">
            {children}
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
