import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

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
    default: "Secure Link | Web Development, AI Automation & Custom Software | UAE-Based, Working Worldwide",
    template: "%s | Secure Link",
  },
  applicationName: "Secure Link",
  description:
    "Secure Link: Integrating Technology with Security. We build modern websites, custom software, and AI-powered automation for businesses worldwide, from our base in the UAE.",
  keywords: [
    "web development company UAE",
    "AI automation agency",
    "custom software development company",
    "software development UAE",
    "business automation",
    "remote software development team",
    "web development for international clients",
  ],
  openGraph: {
    title: "Secure Link | Web Development, AI Automation & Custom Software",
    description:
      "Technology solutions for modern businesses worldwide, built by a UAE-based team, web development, AI automation, and custom software.",
    siteName: "Secure Link",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TopNav />
          <div className="mb-8 md:mb-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
