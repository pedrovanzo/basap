import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Basap",
  description: "...",
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
        <nav className="p-2 leading-none"><a href="/">Basap</a></nav>
        {children}
        <hr />
        <footer className="flex flex-col">
          <a href="http://localhost:3000/">http://localhost:3000/</a>
          <a href="http://localhost:3000/client/list">http://localhost:3000/client/list</a>
          <a href="http://localhost:3000/client/profile">http://localhost:3000/client/profile</a>
        </footer>
      </body>
    </html>
  );
}
