"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider refetchInterval={5 * 60}>
            {children}
          </SessionProvider>
      </body>
    </html>
  );
}