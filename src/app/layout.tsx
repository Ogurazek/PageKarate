"use client";

import { useState, ReactNode } from "react";
import "./globals.css";
import Header from "./ui/Header/header";
import Footer from "./ui/Footer/footer";
import MenuOverlay from "./ui/MenuOverlay/menuOverlay";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <body>
        <Header setMenuOpen={setMenuOpen} />
        {menuOpen ? <MenuOverlay setMenuOpen={setMenuOpen} /> : children}
        {menuOpen ? <MenuOverlay setMenuOpen={setMenuOpen} /> : <Footer />}
      </body>
    </html>
  );
}