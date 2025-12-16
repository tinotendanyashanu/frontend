import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeoTheTechGuy | Creative Technologist",
  description: "Full-stack applications and AI systems that feel alive.",
  metadataBase: new URL("https://leothetechguy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Leo The Tech Guy | AI, Software, Cybersecurity",
    description: "Full-stack applications, AI systems, and secure platforms built by Leo The Tech Guy.",
    url: "https://leothetechguy.com",
    siteName: "Leo The Tech Guy",
    type: "website",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Leo The Tech Guy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo The Tech Guy | AI, Software, Cybersecurity",
    description: "Full-stack applications, AI systems, and secure platforms built by Leo The Tech Guy.",
    images: ["/images/og-cover.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 text-slate-800 relative overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900`}>
        {children}
      </body>
    </html>
  );
}
