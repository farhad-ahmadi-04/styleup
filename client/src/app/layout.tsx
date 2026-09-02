import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

export const vazir = localFont({
  src: [
    {
      path: "/font/vazir/Vazir-Bold.woff2",
      weight: "700",
    },
    {
      path: "/font/vazir/Vazir-Thin.woff2",
      weight: "100",
    },
    {
      path: "/font/vazir/Vazir-Light.woff2",
      weight: "300",
    },
    {
      path: "/font/vazir/Vazir-Medium.woff2",
      weight: "500",
    },
    {
      path: "/font/vazir/Vazir.woff2",
      weight: "400",
    },
  ],
  variable: "--font-vazir",
});

export const kaghaz = localFont({
  src: "/font/kaghaz/KAGHAZ 1.ttf",
  variable: "--font-kaghaz",
});

export const metadata: Metadata = {
  title: "e-commerce | Styleup",
  description:
    "Styleup` is an e-commerce platform that offers a wide range of fashion products. With a user-friendly interface and secure payment options, Styleland makes online shopping easy and convenient for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} ${kaghaz.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
