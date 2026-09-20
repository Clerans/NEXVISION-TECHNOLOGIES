import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | NEXVISION TECHNOLOGIES",
    default: "NEXVISION TECHNOLOGIES — Engineering What Comes Next",
  },
  description:
    "NEXVISION TECHNOLOGIES designs and engineers resilient software systems, high-performance web applications, mobile platforms, and enterprise business management engines.",
  keywords: [
    "Custom Software Development",
    "Next.js Web Applications",
    "Enterprise ERP Systems",
    "Point of Sale Software",
    "Mobile App Development",
    "Cloud Architecture",
    "NEXVISION",
    "Digital Solutions",
  ],
  authors: [{ name: "NEXVISION TECHNOLOGIES" }],
  creator: "NEXVISION TECHNOLOGIES",
  metadataBase: new URL("https://nexvisiontech.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexvisiontech.com",
    title: "NEXVISION TECHNOLOGIES — Engineering What Comes Next",
    description:
      "Transforming business vision into resilient, scalable, and innovative digital solutions.",
    siteName: "NEXVISION TECHNOLOGIES",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXVISION TECHNOLOGIES — Engineering What Comes Next",
    description:
      "Enterprise software development, modern web applications, and intelligent digital systems.",
    creator: "@nexvisiontech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#050505] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
