import Container from "@/components/container";
import ProductList from "@/components/productList";
import HeroSection from "@/components/heroSection";
import ProductSlide from "@/components/landing/productSlide";
import Categories from "@/components/categories";
import { getProducts } from "@/actions/getAction";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  const products = await getProducts();

  return (
    <>
      {/* hero section */}
      <HeroSection />
      <Categories />
      {/* product slide */}
      <ProductSlide products={products} title="محصولات تازه" pageLink="/shop" />

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
