import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: "700",
  subsets: ["latin"],
});
// const hindSiliguriMono = Hind_Siliguri({
//   weight: "400",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Codescoop Practice hub",
  description: "A coding practice polatform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hindSiliguri.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
