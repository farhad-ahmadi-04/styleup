import HeroSection from "@/components/landing/heroSection";
import Categories from "@/components/landing/categories";
import NewestProductsSlider from "@/components/landing/slider/newestProducts";
import DiscountProductsSlider from "@/components/landing/slider/discountProducts";
import { MarqueeSection } from "@/components/landing/marqueeSection";
import SuggestionBox from "@/components/landing/suggestionBox";
import WhyStyleUp from "@/components/landing/whyStyleUp";

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
      {/* why styleup section */}
      <WhyStyleUp />

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
