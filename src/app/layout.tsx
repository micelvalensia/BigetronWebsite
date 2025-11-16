import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontAnton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "BIGETRON ALPHA",
  description: "BIGETRON ALPHA MY GOATTT",
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "shortcut icon", url: "/logo.png" },
    { rel: "apple-touch-icon", url: "/logo.png" }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontAnton.variable} antialiased min-h-screen`}
        style={{ minHeight: '100vh' }}
      >
        <Navbar />
        <div className="md:pt-38">
          {children}
        </div>
      </body>
    </html>
  );
}