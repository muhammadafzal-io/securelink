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
    default: "Secure Link | Web Development, AI Automation & Custom Software in the UAE",
    template: "%s | Secure Link",
  },
  applicationName: "Secure Link",
  description:
    "Secure Link — Integrating Technology with Security. We build modern websites, custom software, and AI-powered automation for businesses in the UAE.",
  keywords: [
    "web development UAE",
    "web development company UAE",
    "AI automation UAE",
    "custom software development UAE",
    "software development company UAE",
    "business automation UAE",
  ],
  openGraph: {
    title: "Secure Link | Web Development, AI Automation & Custom Software",
    description:
      "Technology solutions built for modern businesses in the UAE — web development, AI automation, and custom software.",
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
