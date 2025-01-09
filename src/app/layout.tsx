import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniversário da Ysadora",
  description: "A Festa das Emoções da Ysadora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-serif`}>{children}</body>
    </html>
  );
}
