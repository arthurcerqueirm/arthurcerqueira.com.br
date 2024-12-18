import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <meta name="google-site-verification" content="HdgmRBSK4oeUYpvUPE_fN7kz2tIMS74XPBjgE3K9is4" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  text-white bg-black`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}


