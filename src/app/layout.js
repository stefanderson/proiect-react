import { Inter } from 'next/font/google';
import "./globals.css";
import React from 'react';

// Importă fontul Inter de la Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadate pentru aplicație
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Definirea componentei RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Aplicația folosește fontul Inter */}
      <body className={inter.className}>
        {/* Containerul principal al layout-ului */}
        <div className="min-h-screen flex flex-col">
          {/* Header-ul aplicației */}
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">My Blog</h1>
          </header>
          {/* Containerul principal pentru conținutul paginii */}
          <main className="flex-1 p-4">
            {/* Inserarea conținutului copiilor (children) în layout */}
            {children}
          </main>
          {/* Footer-ul aplicației */}
          <footer className="bg-blue-600 text-white p-4 text-center">
            &copy; 2024 My Blog. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
