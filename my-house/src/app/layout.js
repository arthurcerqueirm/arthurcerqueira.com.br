import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { linksGenerator } from "../app/Links/page.js"
import Link from "next/link";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-300 text-white ml-8 mr-8 flex flex-col items-center justify-center`} >
        {navbar()}
        {children}
      </body>
    </html>
  );
}


function navbar(){
  return(
    <nav className="sticky top-0 flex items-center justify-between p-4 bg-zinc-800 rounded-2xl mt-4 mb-8 w-6/12">
      <div id="logo" className="font-bold">
        Arthur Cerqueira
      </div>
      <div id="logo" className="font-bold">
        Arthur Cerqueira
      </div>
      <div id="links" className="font-bold
      ">
        Yes baby
      {/* {linksGenerator()}
      <li className="list-none pr-4"><Link target="Blank" href={"/Links"}>Gerenciador de Links</Link></li> */}
      </div>
    </nav>
  )
}