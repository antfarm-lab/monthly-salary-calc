import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "月給計算ツール｜時給と勤務日数から月収目安を自動計算",
  description:
    "時給・1日の労働時間・月の勤務日数から、月給や月収の目安を簡単に計算できる無料ツールです。",
  keywords: [
    "月給 計算",
    "月収 計算",
    "時給 月給 計算",
    "アルバイト 月収",
    "パート 月給",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"><head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  />
</head>

      <body>{children}</body>
    </html>
  );
}