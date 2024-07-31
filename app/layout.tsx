import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Limelight",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-around">
          <Link href="/workorders">Work Orders</Link>
          <Link href="/assets">Assets</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
        {children}
        </body>
    </html>
  );
}
