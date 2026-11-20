import ProductList from "@/components/productList";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;

  return <ProductList category={category} />;
}

export default ProductsPage;
