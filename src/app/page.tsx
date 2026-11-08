import HeroSection from "@/components/heroSection";
import Categories from "@/components/landing/categories";
import NewestProductsSlider from "@/components/landing/slider/newestProducts";
import DiscountProductsSlider from "@/components/landing/slider/discountProducts";
import { MarqueeSection } from "@/components/landing/marqueeSection";
import SuggestionBox from "@/components/landing/suggestionBox";

const Homepage = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* categories */}
      <Categories />
      <MarqueeSection />
      {/* product slide */}
      <NewestProductsSlider />
      {/* product slide */}
      <DiscountProductsSlider />
      {/* suggestion box */}
      <SuggestionBox />

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
