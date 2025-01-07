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
        <nav className="flex flex-row gap-6 justify-between p-4 leading-none">
          <div>
            Basap
          </div>
          <div className="flex flex-row gap-6">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Options</a>
          </div>
        </nav>
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
