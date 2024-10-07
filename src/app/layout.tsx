import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
    <html lang="en" className="desktop:text-base text-base-m">
      <body
        className={`${inter.className} ${notoSansKR.className} w-[100dvw] h-[100dvh]`}
      >
        {children}
      </body>
    </html>
  );
}
