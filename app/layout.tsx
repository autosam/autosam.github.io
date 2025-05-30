import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import { AnimatedCursor } from "@/components/AnimatedCursor";

const font = Tomorrow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smn Mhmdy",
  description: "Smn Mhmdy's Personal Website",
  metadataBase: new URL("https://autosam.github.io"),
  verification: {
    google: "dAerKFKSFvPgRL2A-O23ToYFXoNvqHutmDyC2QhvkHM",
  },
  keywords: [
    "saman mohammadi",
    "Web development",
    "Game development",
    "CopperCube",
    "Autosam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AnimatedCursor />
        <div className="flex flex-col min-h-screen">
          <Header />

          <Breadcrumb
            homeElement={<div>INDEX</div>}
            separator={<label>{">"}</label>}
            containerClasses="flex gap-2 text-xs uppercase p-4 py-1"
            activeClasses="font-bold"
            listClasses="hover:underline"
          />
          <div>{children}</div>
          <Footer />
          <GoogleAnalytics gaId="G-1THW58E0S2" />
        </div>
      </body>
    </html>
  );
}
