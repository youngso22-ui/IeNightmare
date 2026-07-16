import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IE Nightmares Basketball",
  description: "Official IE Nightmares AAU Basketball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}