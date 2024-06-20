import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/providers/ReduxProvider";
import ReduxProvider from "@/providers/ReduxProvider";
export const metadata: Metadata = {
  title: "Workflow Saver",
  description: "Bitespeed Assignemt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
