import type { Metadata } from "next";
import Script from "next/script";
import { Hanken_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ISYANCEM — Desarrollador Full Stack",
  description:
    "Portafolio profesional de Abraham Yance, desarrollador full stack especializado en sistemas industriales, integraciones y automatización.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${newsreader.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        <Script src="/image-slot.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}