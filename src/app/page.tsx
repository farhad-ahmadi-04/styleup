import Container from "@/components/container";
import ProductList from "@/components/productList";
import HeroSection from "@/components/heroSection";
import ProductSlide from "@/components/landing/slider/newestProducts";
import Categories from "@/components/categories";

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
      <Categories />
      {/* product slide */}
      <ProductSlide />

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
