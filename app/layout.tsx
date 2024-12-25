import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <body className={font.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="p-4 mt-12">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
