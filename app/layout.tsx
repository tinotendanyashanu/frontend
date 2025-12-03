import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeoTheTechGuy | Creative Technologist",
  description: "Full-stack applications and AI systems that feel alive.",
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
