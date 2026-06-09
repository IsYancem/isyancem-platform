import type { Metadata } from "next";
import localFont from "next/font/local";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ISYANCEM | Full Stack Developer",
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
      <body className={`${orbitron.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}