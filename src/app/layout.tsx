import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import localFont from "next/font/local";

config.autoAddCss = false;

const ttNorms = localFont({
  src: [
    {
      path: "../../public/fonts/TTNorms-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ttnorms",
});

export const metadata: Metadata = {
  title: "Manual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttNorms.variable}`}>{children}</body>
    </html>
  );
}
