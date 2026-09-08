import Container from "../components/container";
import ProductList from "../components/productList";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;

  return (
    <section>
      <Container>
        <ProductList category={category} params="productsPage" />
      </Container>
    </section>
  );
}

export default ProductsPage;
