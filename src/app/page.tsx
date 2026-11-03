import HeroSection from "@/components/heroSection";
import Categories from "@/components/categories";
import NewestProductsSlider from "@/components/landing/slider/newestProducts";
import DiscountProductsSlider from "@/components/landing/slider/discountProducts";

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
      <NewestProductsSlider />
      {/* product slide */}
      <DiscountProductsSlider />

      {/* product section
      <section>
        <Container>
          <ProductList category={category} params="homePage" />
        </Container>
      </section> */}
    </>
  );
};

export default Homepage;
