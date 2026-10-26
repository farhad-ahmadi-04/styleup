import Container from "@/components/container";
import ProductList from "@/components/productList";
import HeroSection from "@/components/heroSection";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <>
      {/* hero section */}
      <HeroSection />

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
