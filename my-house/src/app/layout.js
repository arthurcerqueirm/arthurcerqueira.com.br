
import "./globals.css";

import "../app/styles/BlobButton.css"
import Navbar from "./components/nav";

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
      <body className={`antialiased  text-white bg-black`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}


