import Container from "../../components/client/container";
import ProductList from "../../components/client/productList";

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
