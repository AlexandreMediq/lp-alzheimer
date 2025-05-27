
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";

const rocGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/RocGrotesk_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/RocGrotesk_ExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roc-grotesk",
});

export const metadata: Metadata = {
  title: "Alzheimer - TribeMD",
  description: "Aprenda o que é Alzheimer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${rocGrotesk.variable} font-sans`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
