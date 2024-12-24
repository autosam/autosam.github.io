import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";

const font = Tomorrow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smn Mhmdy",
  description: "Smn Mhmdy's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
