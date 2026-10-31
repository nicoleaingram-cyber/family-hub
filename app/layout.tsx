import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Hub",
  description:
    "A bright home base for your family — photos, plans, and the people you love.",
};

export const viewport: Viewport = {
  themeColor: "#FFF6EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className={`${nunito.className} flex min-h-full flex-col`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
