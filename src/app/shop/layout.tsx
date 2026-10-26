import type { Metadata } from "next";
import "@/app/globals.css";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "e-commerce | Styleup",
  description:
    "Styleup` is an e-commerce platform that offers a wide range of fashion products. With a user-friendly interface and secure payment options, Styleland makes online shopping easy and convenient for everyone.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <Container>
          <h1 className="text-center py-8 bg-blue-400 rounded-2xl text-white font-kaghaz text-5xl">
            فروشگاه
          </h1>
        </Container>
      </section>
      {children}
    </>
  );
}
