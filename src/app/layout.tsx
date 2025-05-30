import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from 'next/font/google'
import { Pacifico } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fonocom",
  description: "Fonocom - Plataforma de aprendizaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ml-6`}
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
      </body>
    </html>
  );
}
