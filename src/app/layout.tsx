import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/context/ScrollContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oakridge Model United Nations | Chapter XVI",
  description:
    "Celebrating 15 years of Oakridge MUN. Join 650+ delegates across 20 committees at the premier Model United Nations conference. July 24-26, 2026.",
  keywords: [
    "Oakridge MUN",
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
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Oakridge Model United Nations | Chapter XVI",
    description: "Celebrating 15 years of Oakridge MUN. 650+ delegates, 20 committees, 3 days.",
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
