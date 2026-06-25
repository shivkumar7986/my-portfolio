import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
// import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import ScrollProgress from "@/components/ui/ScrollProgress";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

const breton = localFont({
  src: "../public/fonts/Breton.woff2",
  variable: "--font-breton",
  display: "swap",
});

const machine = localFont({
  src: "../public/fonts/Machine.otf",
  variable: "--font-machine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vis — Full-Stack Developer & UI Engineer",
  description:
    "Creative developer building precise, thoughtful web interfaces. Specialising in React, Next.js, and UI design systems.",
  openGraph: {
    title: "Vis — Full-Stack Developer",
    description:
      "Creative developer building precise, thoughtful web interfaces.",
    url: "https://yoursite.com",
    images: [{ url: "/images/og-cover.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vis — Full-Stack Developer",
    images: ["/images/og-cover.jpg"],
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
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} ${playfair.variable} ${breton.variable} ${machine.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <SmoothScrollProvider>
          {/* <CustomCursor /> */}
          {/* <ScrollProgress /> */}
          {/* <Header /> */}
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
