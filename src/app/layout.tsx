import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "바보맛저",
  description: "맛집을 기록하고 다른 사람들에게 공유해 보세요",
  icons: [
    { rel: "icon", url: "/assets/icons/baboLogo_192.png", sizes: "192x192" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
