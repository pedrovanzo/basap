import type { Metadata } from "next";
import "./globals.css";

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
        className={`relative h-screen antialiased`}
      >
        <nav className="p-2 leading-none"><a href="/">Basap</a></nav>
        {children}
        <hr />
        <footer className="flex flex-col">
          <a href="/">http://localhost:3000/</a>
          <a href="/client/list">http://localhost:3000/client/list</a>
          <a href="/client/profile">http://localhost:3000/client/profile</a>
          <a href="/client/new">http://localhost:3000/client/new</a>
        </footer>
      </body>
    </html>
  );
}
