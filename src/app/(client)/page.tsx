import Container from "@/components/client/container";
import Image from "next/image";
import ProductList from "@/components/client/productList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <>
      {/* hero section */}
      <section className="text-center mt-20 text-2xl">
        <Container>
          <div className="relative aspect-[3/1] mb-12">
            <Image src={"/client/featured.png"} alt="Feature Product" fill />
          </div>
        </Container>
      </section>

      {/* product section */}
      <section>
        <Container>
          <ProductList category={category} params="homePage" />
        </Container>
      </section>
    </>
  );
};

export default Homepage;
