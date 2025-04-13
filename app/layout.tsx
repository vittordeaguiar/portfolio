import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vittor de Aguiar",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex justify-center py-2`}
      >
        <div className="flex-1 flex flex-col max-w-xl">
          <Header />
          <div className="flex-1 flex flex-row">
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
