import type { Metadata } from "next";
import { manrope } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Adama",
  description: "Machine learning Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
