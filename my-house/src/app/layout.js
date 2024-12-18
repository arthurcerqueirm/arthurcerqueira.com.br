import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { linksGenerator } from "../app/Links/page.js"
import Link from "next/link";
import "../app/styles/BlobButton.css"
import Navbar from "./components/nav";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arthur Cerqueira",
  description: "Site proibido para outras pessoas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="HdgmRBSK4oeUYpvUPE_fN7kz2tIMS74XPBjgE3K9is4" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white `} >
        {children}
      </body>
    </html>
  );
}


