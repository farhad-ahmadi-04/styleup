import type { Metadata } from "next";
import Container from "@/components/container";
import ShopTools from "@/components/shopTools";
import FilterProducts from "@/components/filter";

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
      <section className="my-10">
        <Container>
          <h1 className="text-center py-8 bg-gray-800 rounded-2xl text-white font-kaghaz text-5xl">
            فروشگاه
          </h1>
        </Container>
      </section>
      <section>
        <Container className="grid lg:grid-cols-4 gap-4">
          {/* filter box */}
          <div className="col-span-1 hidden lg:block">
            <FilterProducts />
          </div>
          <div className="space-y-2 col-span-3">
            <ShopTools />
            <div>{children}</div>
          </div>
        </Container>
      </section>
    </>
  );
}
