import HeroSection from "@/components/heroSection";
import Categories from "@/components/landing/categories";
import NewestProductsSlider from "@/components/landing/slider/newestProducts";
import DiscountProductsSlider from "@/components/landing/slider/discountProducts";

const Homepage = () => {
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
