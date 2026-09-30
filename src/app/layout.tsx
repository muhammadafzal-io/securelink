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
  title: "KalTech",
  applicationName: "KalTech - Your AI Enablement Partner",
  description:
    "KalTech is a leading AI venture studio, building intelligent digital products that combine deep tech with business outcomes. From generative AI to autonomous agents, we power growth across FinTech, HRTech, Web3, and beyond.",
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
