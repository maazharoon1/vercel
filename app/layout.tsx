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
  metadataBase: new URL("https://www.warsal-portfolio.com"),
  title: {
    default: "Warsal | Portfolio",
    template: "%s | Warsal",
  },
  description:
    "Warsal creates premium branding, motion graphics, packaging, and digital design experiences for modern businesses.",
  applicationName: "Warsal Portfolio",
  keywords: [
    "graphic designer",
    "brand identity",
    "portfolio",
    "logo design",
    "packaging design",
    "social media design",
    "motion graphics",
  ],
  authors: [{ name: "Warsal" }],
  creator: "Warsal",
  publisher: "Warsal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Warsal | Portfolio",
    description:
      "Portfolio of branding, packaging, and digital design work by Warsal.",
    url: "https://spotonportfolio.example",
    siteName: "Warsal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warsal | Portfolio",
    description:
      "Premium graphic design portfolio showcasing branding, packaging, social media, and digital creative work.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-[#0a0a0f] text-black"
      >
        {children}
      </body>
    </html>
  );
}
