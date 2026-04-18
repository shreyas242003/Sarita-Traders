import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarita Traders - Hardware, Plumbing & Sanitary Ware in Pune",
  description:
    "Providing genuine hardware, plumbing materials, and honest advice to Pune since 1999. A trusted local shop for both homeowners and contractors.",
  keywords:
    "hardware shop Pune, plumbing materials, sanitary ware Pune, CPVC pipes, wholesale hardware Kasba Peth, architectural hardware, tools, Sarita Traders",
  authors: [{ name: "Sarita Traders" }],
  openGraph: {
    title: "Sarita Traders - Quality Hardware & Honest Advice",
    description:
      "Serving Pune with genuine plumbing, sanitary, and hardware supplies since 1999.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
