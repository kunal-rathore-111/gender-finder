import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Restore Google Fonts
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Gender Finder",
  description: "Check your gender - Brutalist Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
