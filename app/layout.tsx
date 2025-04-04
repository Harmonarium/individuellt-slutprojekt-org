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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex m-4 gap-4">
          <h1>Site-header</h1><ul className="flex gap-4"><li>home</li><li>showcase</li><li>projects</li><li><div className="bg-amber-300">github</div></li><li><div className="bg-amber-300">linkedin</div></li></ul>
        </header>
        {children}
      </body>
    </html>
  );
}
